const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const marked = require('marked');

const app = express();
const PORT = 3000;
const CASES_DIR = path.join(__dirname, 'casi');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve tutti i file statici dalla root

// Get all available cases
app.get('/api/cases', async (req, res) => {
  try {
    const cases = await fs.readdir(CASES_DIR);
    const casesList = [];

    for (const caseId of cases) {
      const casePath = path.join(CASES_DIR, caseId);
      const stats = await fs.stat(casePath);
      
      if (stats.isDirectory()) {
        // Read the case name from a title file or use the folder name
        const title = caseId
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        casesList.push({
          id: caseId,
          title: title
        });
      }
    }

    res.json(casesList);
  } catch (error) {
    console.error('Error reading cases:', error);
    res.status(500).json({ error: 'Failed to read cases' });
  }
});

// Get case structure
app.get('/api/cases/:caseId', async (req, res) => {
  try {
    const { caseId } = req.params;
    const casePath = path.join(CASES_DIR, caseId);

    // Check if case exists
    try {
      await fs.access(casePath);
    } catch {
      return res.status(404).json({ error: 'Case not found' });
    }

    // Read all subdirectories and files
    const structure = {
      id: caseId,
      title: caseId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      files: {
        istruzioni: [],
        investigativi: [],
        prove: [],
        digitali: [],
        suggerimenti: [],
        soluzione: []
      }
    };

    // Root files
    const rootFiles = await fs.readdir(casePath);
    for (const file of rootFiles) {
      if (file.endsWith('.md')) {
        if (file.includes('istruzioni') || file.includes('manuale')) {
          structure.files.istruzioni.push(file);
        } else if (file.includes('albero') || file.includes('master') || file.includes('script') || file === 'README.md') {
          // README.md può contenere spoiler, metterlo nella sezione soluzione
          structure.files.soluzione.push(file);
        }
      }
    }

    // Subdirectories
    const folders = {
      'documenti-investigativi': 'investigativi',
      'prove-documentali': 'prove',
      'elementi-digitali': 'digitali',
      'suggerimenti': 'suggerimenti'
    };

    for (const [folder, key] of Object.entries(folders)) {
      const folderPath = path.join(casePath, folder);
      try {
        const files = await fs.readdir(folderPath);
        structure.files[key] = files.filter(f => f.endsWith('.md'));
      } catch (error) {
        console.log(`Folder ${folder} not found in case ${caseId}`);
      }
    }

    res.json(structure);
  } catch (error) {
    console.error('Error reading case:', error);
    res.status(500).json({ error: 'Failed to read case structure' });
  }
});

// Get file content
app.get('/api/cases/:caseId/file/:folder/:filename', async (req, res) => {
  try {
    const { caseId, folder, filename } = req.params;
    let filePath;

    // Handle root files vs subfolder files
    if (folder === 'root') {
      filePath = path.join(CASES_DIR, caseId, filename);
    } else {
      const folderMap = {
        'istruzioni': '',
        'investigativi': 'documenti-investigativi',
        'prove': 'prove-documentali',
        'digitali': 'elementi-digitali',
        'suggerimenti': 'suggerimenti',
        'soluzione': ''
      };

      const actualFolder = folderMap[folder] || folder;
      if (actualFolder) {
        filePath = path.join(CASES_DIR, caseId, actualFolder, filename);
      } else {
        filePath = path.join(CASES_DIR, caseId, filename);
      }
    }

    // Security check - ensure we're not escaping the cases directory
    const resolvedPath = path.resolve(filePath);
    const resolvedCasesDir = path.resolve(CASES_DIR);
    if (!resolvedPath.startsWith(resolvedCasesDir)) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const content = await fs.readFile(filePath, 'utf-8');
    const html = marked.parse(content);

    res.json({
      filename,
      content,
      html
    });
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(404).json({ error: 'File not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Cases directory: ${CASES_DIR}`);
});
