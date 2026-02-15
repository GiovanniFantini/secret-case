const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const marked = require('marked');
const { detectDocumentType, extractHintLevel, DOCUMENT_TYPES } = require('./components/document-types');

const app = express();
const PORT = 3000;
const CASES_DIR = path.join(__dirname, '..', 'casi');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve tutti i file statici dalla root

// Serve index.html alla root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

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

    // Initialize structure
    const structure = {
      id: caseId,
      title: caseId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      documentsByType: {}
    };

    // Initialize all document types
    Object.keys(DOCUMENT_TYPES).forEach(type => {
      structure.documentsByType[type] = [];
    });
    structure.documentsByType['unknown'] = [];

    // Recursive function to read all .md files
    async function readMarkdownFiles(dirPath, relativePath = '') {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        const relPath = relativePath ? path.join(relativePath, entry.name) : entry.name;

        if (entry.isDirectory()) {
          // Recursively read subdirectories
          await readMarkdownFiles(fullPath, relPath);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
          // Detect document type
          const docType = detectDocumentType(entry.name);
          
          // Skip files starting with underscore
          if (docType === null) {
            continue;
          }

          // Get type metadata
          const metadata = DOCUMENT_TYPES[docType] || { category: 'unknown', spoiler: false };

          // Create document info
          const docInfo = {
            filename: entry.name,
            path: relPath,
            type: docType,
            category: metadata.category,
            spoiler: metadata.spoiler
          };

          // Extract hint level if it's a hint
          if (docType === 'hint') {
            docInfo.level = extractHintLevel(entry.name);
          }

          // Add to appropriate type array
          if (structure.documentsByType[docType]) {
            structure.documentsByType[docType].push(docInfo);
          } else {
            structure.documentsByType['unknown'].push(docInfo);
          }
        }
      }
    }

    // Read all markdown files recursively
    await readMarkdownFiles(casePath);

    res.json(structure);
  } catch (error) {
    console.error('Error reading case:', error);
    res.status(500).json({ error: 'Failed to read case structure' });
  }
});

// Get file content
app.get('/api/cases/:caseId/file/:type/:filename', async (req, res) => {
  try {
    const { caseId, type, filename } = req.params;
    const casePath = path.join(CASES_DIR, caseId);

    // Recursive function to find a file
    async function findFile(dirPath, targetFilename) {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
          // Recursively search in subdirectories
          const found = await findFile(fullPath, targetFilename);
          if (found) {
            return found;
          }
        } else if (entry.isFile() && entry.name === targetFilename) {
          // Found the file
          return fullPath;
        }
      }

      return null;
    }

    // Find the file recursively
    const filePath = await findFile(casePath, filename);

    if (!filePath) {
      return res.status(404).json({ error: 'File not found' });
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
