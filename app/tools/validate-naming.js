#!/usr/bin/env node

/**
 * VALIDATE-NAMING.JS
 * Script di validazione convenzioni naming per casi detective
 * 
 * Uso: node validate-naming.js [opzioni]
 * 
 * Opzioni:
 *   --caso <nome>         Valida solo un caso specifico
 *   --json                Output in formato JSON
 *   --fix-suggestions     Include comandi di fix nel report
 */

const fs = require('fs');
const path = require('path');

// ===== COLORI ANSI =====
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

function colorize(text, color) {
  return `${color}${text}${colors.reset}`;
}

// ===== CONFIGURAZIONE =====
const VALID_PREFIXES = [
  'email', 'police', 'medical', 'forensic', 'diary', 'chat',
  'bank', 'legal', 'newspaper', 'phone', 'social', 'photo'
];

const SPECIAL_PREFIXES = ['hint', 'solution'];
const SYSTEM_PREFIX = '_';

const SYSTEM_FILES = [
  '_istruzioni-giocatori.md',
  '_manuale-utente.md'
];

const SOLUTION_FILES = [
  'solution_albero-decisionale.md',
  'solution_documento-master.md',
  'solution_script-narrazione-finale.md'
];

const ROOT_ALLOWED_FILES = [
  'README.md',
  ...SYSTEM_FILES,
  ...SOLUTION_FILES
];

// ===== FUNZIONI VALIDAZIONE =====
function validateFilename(filename, isInDocumenti = false) {
  const result = {
    valid: false,
    type: 'unknown',
    issues: [],
    suggestions: []
  };
  
  // README.md speciale - sempre valido
  if (filename === 'README.md') {
    result.valid = true;
    result.type = 'readme';
    return result;
  }
  
  // File di sistema (iniziano con _)
  if (filename.startsWith(SYSTEM_PREFIX)) {
    result.type = 'system';
    if (SYSTEM_FILES.includes(filename)) {
      result.valid = true;
    } else {
      result.issues.push('File sistema non riconosciuto');
      result.suggestions.push('I file sistema devono essere: ' + SYSTEM_FILES.join(', '));
    }
    return result;
  }
  
  // File soluzione (iniziano con solution_)
  if (filename.startsWith('solution_')) {
    result.type = 'solution';
    if (SOLUTION_FILES.includes(filename)) {
      result.valid = true;
    } else {
      // Potrebbe essere un file soluzione custom
      if (isValidKebabCase(filename.replace('solution_', '').replace('.md', ''))) {
        result.valid = true;
        result.issues.push('File soluzione non standard');
      } else {
        result.issues.push('Nome file non in kebab-case');
        result.suggestions.push('Usa formato: solution_nome-descrittivo.md');
      }
    }
    return result;
  }
  
  // File hint (devono essere nella cartella documenti)
  if (filename.startsWith('hint_')) {
    result.type = 'hint';
    
    if (!isInDocumenti) {
      result.issues.push('I file hint devono essere in documenti/');
      result.valid = false;
      return result;
    }
    
    // Verifica formato hint_livelloN.md
    const hintMatch = filename.match(/^hint_livello(\d+)\.md$/);
    if (hintMatch) {
      result.valid = true;
      result.level = parseInt(hintMatch[1]);
    } else {
      result.issues.push('Formato hint non valido');
      result.suggestions.push('Usa formato: hint_livelloN.md (es: hint_livello1.md, hint_livello2.md)');
    }
    return result;
  }
  
  // File normali con prefisso tipo
  const parts = filename.split('_');
  if (parts.length < 2) {
    result.issues.push('Manca prefisso tipo documento');
    result.suggestions.push(`Aggiungi un prefisso valido: ${VALID_PREFIXES.join(', ')}`);
    
    // Prova a suggerire un tipo
    const suggested = detectTypeFromFilename(filename);
    if (suggested) {
      result.suggestions.push(`Suggerimento: ${suggested}_${filename}`);
    }
    
    return result;
  }
  
  const prefix = parts[0];
  const nameWithExt = parts.slice(1).join('_');
  
  // Verifica prefisso valido
  if (!VALID_PREFIXES.includes(prefix)) {
    result.issues.push(`Prefisso '${prefix}' non valido`);
    result.suggestions.push(`Prefissi validi: ${VALID_PREFIXES.join(', ')}`);
    return result;
  }
  
  result.type = prefix;
  
  // Verifica nome in kebab-case
  const name = nameWithExt.replace('.md', '');
  if (!isValidKebabCase(name)) {
    result.issues.push('Nome non in kebab-case');
    result.suggestions.push(`Usa trattini (-) invece di spazi/underscore: ${prefix}_${toKebabCase(name)}.md`);
    return result;
  }
  
  // Verifica estensione
  if (!filename.endsWith('.md')) {
    result.issues.push('Deve avere estensione .md');
    return result;
  }
  
  result.valid = true;
  return result;
}

function isValidKebabCase(str) {
  // Verifica che sia kebab-case: solo lowercase, numeri e trattini
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(str);
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function detectTypeFromFilename(filename) {
  const lower = filename.toLowerCase();
  
  if (lower.includes('email') || lower.includes('mail')) return 'email';
  if (lower.includes('polizia') || lower.includes('police')) return 'police';
  if (lower.includes('medico') || lower.includes('medical') || lower.includes('autopsia')) return 'medical';
  if (lower.includes('forense') || lower.includes('forensic')) return 'forensic';
  if (lower.includes('diario') || lower.includes('diary')) return 'diary';
  if (lower.includes('chat') || lower.includes('messaggio')) return 'chat';
  if (lower.includes('banc') || lower.includes('bank')) return 'bank';
  if (lower.includes('legal') || lower.includes('testamento') || lower.includes('contratto')) return 'legal';
  if (lower.includes('giornale') || lower.includes('newspaper') || lower.includes('articolo')) return 'newspaper';
  if (lower.includes('telefon') || lower.includes('phone') || lower.includes('tabulat')) return 'phone';
  if (lower.includes('social') || lower.includes('facebook') || lower.includes('instagram')) return 'social';
  if (lower.includes('foto') || lower.includes('photo') || lower.includes('immagine')) return 'photo';
  
  return null;
}

// ===== FUNZIONI SCANSIONE =====
function scanCase(casePath) {
  const caseName = path.basename(casePath);
  const result = {
    name: caseName,
    path: casePath,
    files: [],
    stats: {
      total: 0,
      valid: 0,
      invalid: 0,
      warnings: 0
    }
  };
  
  // Scansione root
  const rootFiles = fs.readdirSync(casePath, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'));
  
  for (const file of rootFiles) {
    const validation = validateFilename(file.name, false);
    
    // File alla root devono essere autorizzati
    if (!ROOT_ALLOWED_FILES.includes(file.name) && file.name !== 'README.md') {
      if (!validation.valid) {
        validation.issues.unshift('File non dovrebbe essere alla root del caso');
        validation.suggestions.push('Sposta in documenti/ con prefisso appropriato');
      }
    }
    
    result.files.push({
      name: file.name,
      relativePath: file.name,
      location: 'root',
      validation
    });
  }
  
  // Scansione documenti/
  const documentiPath = path.join(casePath, 'documenti');
  if (fs.existsSync(documentiPath)) {
    const documentiFiles = fs.readdirSync(documentiPath, { withFileTypes: true })
      .filter(entry => entry.isFile() && entry.name.endsWith('.md'));
    
    for (const file of documentiFiles) {
      const validation = validateFilename(file.name, true);
      
      // .gitkeep è speciale
      if (file.name === '.gitkeep') continue;
      
      result.files.push({
        name: file.name,
        relativePath: `documenti/${file.name}`,
        location: 'documenti',
        validation
      });
    }
  }
  
  // Calcola statistiche
  result.stats.total = result.files.length;
  result.stats.valid = result.files.filter(f => f.validation.valid).length;
  result.stats.invalid = result.files.filter(f => !f.validation.valid).length;
  result.stats.warnings = result.files.filter(f => f.validation.issues.length > 0 && f.validation.valid).length;
  
  return result;
}

function findAllCases(workspaceRoot) {
  const casiPath = path.join(workspaceRoot, 'casi');
  
  if (!fs.existsSync(casiPath)) {
    return [];
  }
  
  return fs.readdirSync(casiPath, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => path.join(casiPath, entry.name));
}

// ===== OUTPUT =====
function printReport(caseResults, options) {
  console.log(colorize('\n═══════════════════════════════════════════════════════════', colors.cyan));
  console.log(colorize('          📋 VALIDAZIONE CONVENZIONI NAMING CASI', colors.cyan + colors.bright));
  console.log(colorize('═══════════════════════════════════════════════════════════\n', colors.cyan));
  
  for (const caseResult of caseResults) {
    printCaseReport(caseResult, options);
  }
  
  // Summary totale
  if (caseResults.length > 1) {
    printGlobalSummary(caseResults);
  }
}

function printCaseReport(caseResult, options) {
  console.log(colorize(`\n📦 Caso: ${caseResult.name}`, colors.bright + colors.cyan));
  console.log(colorize(`📂 Percorso: ${caseResult.path}`, colors.dim));
  console.log();
  
  // File validi
  const validFiles = caseResult.files.filter(f => f.validation.valid && f.validation.issues.length === 0);
  if (validFiles.length > 0) {
    console.log(colorize(`✅ Conformi (${validFiles.length}):`, colors.green + colors.bright));
    for (const file of validFiles) {
      console.log(colorize(`  ✓ ${file.relativePath}`, colors.green));
    }
    console.log();
  }
  
  // File con warning (validi ma con note)
  const warningFiles = caseResult.files.filter(f => f.validation.valid && f.validation.issues.length > 0);
  if (warningFiles.length > 0) {
    console.log(colorize(`⚠️  Warning (${warningFiles.length}):`, colors.yellow + colors.bright));
    for (const file of warningFiles) {
      console.log(colorize(`  ⚠ ${file.relativePath}`, colors.yellow));
      for (const issue of file.validation.issues) {
        console.log(colorize(`    → ${issue}`, colors.dim));
      }
    }
    console.log();
  }
  
  // File non validi
  const invalidFiles = caseResult.files.filter(f => !f.validation.valid);
  if (invalidFiles.length > 0) {
    console.log(colorize(`❌ Non conformi (${invalidFiles.length}):`, colors.red + colors.bright));
    for (const file of invalidFiles) {
      console.log(colorize(`  ✗ ${file.relativePath}`, colors.red));
      
      // Problemi
      for (const issue of file.validation.issues) {
        console.log(colorize(`    → ${issue}`, colors.dim));
      }
      
      // Suggerimenti
      if (file.validation.suggestions.length > 0) {
        console.log(colorize(`    💡 Suggerimenti:`, colors.yellow));
        for (const suggestion of file.validation.suggestions) {
          console.log(colorize(`       ${suggestion}`, colors.dim));
        }
      }
      
      // Comandi di fix (se richiesto)
      if (options.fixSuggestions && file.validation.suggestions.length > 0) {
        const suggestion = file.validation.suggestions.find(s => s.includes('.md'));
        if (suggestion) {
          const newName = suggestion.match(/([a-z0-9_-]+\.md)/i)?.[1];
          if (newName) {
            const oldPath = path.join(caseResult.path, file.location, file.name);
            const newPath = path.join(caseResult.path, 'documenti', newName);
            console.log(colorize(`    🔧 Fix: mv "${oldPath}" "${newPath}"`, colors.cyan));
          }
        }
      }
      
      console.log();
    }
  }
  
  // Statistiche caso
  printCaseStats(caseResult);
}

function printCaseStats(caseResult) {
  const stats = caseResult.stats;
  const validPercent = stats.total > 0 ? ((stats.valid / stats.total) * 100).toFixed(1) : 0;
  
  console.log(colorize('📊 Statistiche:', colors.bright));
  console.log(`  Totale file:        ${stats.total}`);
  console.log(colorize(`  Conformi:           ${stats.valid} (${validPercent}%)`, colors.green));
  
  if (stats.warnings > 0) {
    console.log(colorize(`  Warning:            ${stats.warnings}`, colors.yellow));
  }
  
  if (stats.invalid > 0) {
    console.log(colorize(`  Non conformi:       ${stats.invalid}`, colors.red));
  }
  
  console.log(colorize('─'.repeat(60), colors.dim));
}

function printGlobalSummary(caseResults) {
  console.log(colorize('\n═══════════════════════════════════════════════════════════', colors.cyan));
  console.log(colorize('                    📊 RIEPILOGO GLOBALE', colors.cyan + colors.bright));
  console.log(colorize('═══════════════════════════════════════════════════════════\n', colors.cyan));
  
  const totals = {
    cases: caseResults.length,
    total: caseResults.reduce((sum, c) => sum + c.stats.total, 0),
    valid: caseResults.reduce((sum, c) => sum + c.stats.valid, 0),
    invalid: caseResults.reduce((sum, c) => sum + c.stats.invalid, 0),
    warnings: caseResults.reduce((sum, c) => sum + c.stats.warnings, 0)
  };
  
  const validPercent = totals.total > 0 ? ((totals.valid / totals.total) * 100).toFixed(1) : 0;
  
  console.log(`  Casi analizzati:    ${totals.cases}`);
  console.log(`  File totali:        ${totals.total}`);
  console.log(colorize(`  Conformi:           ${totals.valid} (${validPercent}%)`, colors.green));
  
  if (totals.warnings > 0) {
    console.log(colorize(`  Warning:            ${totals.warnings}`, colors.yellow));
  }
  
  if (totals.invalid > 0) {
    console.log(colorize(`  Non conformi:       ${totals.invalid}`, colors.red));
  }
  
  console.log();
  
  // Status finale
  if (totals.invalid === 0 && totals.warnings === 0) {
    console.log(colorize('✨ Tutti i casi sono perfettamente conformi! ✨\n', colors.green + colors.bright));
  } else if (totals.invalid === 0) {
    console.log(colorize('✅ Nessun errore critico, ma ci sono alcuni warning.\n', colors.yellow));
  } else {
    console.log(colorize('❌ Ci sono file non conformi che richiedono correzione.\n', colors.red));
  }
}

function outputJSON(caseResults) {
  const output = {
    timestamp: new Date().toISOString(),
    cases: caseResults.map(cr => ({
      name: cr.name,
      path: cr.path,
      stats: cr.stats,
      files: cr.files.map(f => ({
        name: f.name,
        path: f.relativePath,
        location: f.location,
        valid: f.validation.valid,
        type: f.validation.type,
        issues: f.validation.issues,
        suggestions: f.validation.suggestions
      }))
    })),
    summary: {
      totalCases: caseResults.length,
      totalFiles: caseResults.reduce((sum, c) => sum + c.stats.total, 0),
      validFiles: caseResults.reduce((sum, c) => sum + c.stats.valid, 0),
      invalidFiles: caseResults.reduce((sum, c) => sum + c.stats.invalid, 0),
      warningFiles: caseResults.reduce((sum, c) => sum + c.stats.warnings, 0)
    }
  };
  
  console.log(JSON.stringify(output, null, 2));
}

// ===== MAIN =====
function main() {
  const args = process.argv.slice(2);
  
  // Parse options
  const options = {
    specificCase: null,
    json: false,
    fixSuggestions: false
  };
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--caso' && i + 1 < args.length) {
      options.specificCase = args[i + 1];
      i++;
    } else if (args[i] === '--json') {
      options.json = true;
    } else if (args[i] === '--fix-suggestions') {
      options.fixSuggestions = true;
    } else if (args[i] === '--help' || args[i] === '-h') {
      console.log(`
${colorize('📋 VALIDATE-NAMING - Validazione Convenzioni Naming', colors.cyan + colors.bright)}

${colorize('Uso:', colors.bright)}
  node validate-naming.js [opzioni]

${colorize('Opzioni:', colors.bright)}
  --caso <nome>         Valida solo un caso specifico
  --json                Output in formato JSON
  --fix-suggestions     Include comandi di fix nel report

${colorize('Esempi:', colors.bright)}
  node validate-naming.js
  node validate-naming.js --caso eredita-villa-rossi
  node validate-naming.js --json > report.json
  node validate-naming.js --fix-suggestions

${colorize('Prefissi validi:', colors.bright)}
  Documenti:  ${VALID_PREFIXES.join(', ')}
  Speciali:   hint_, solution_
  Sistema:    _ (underscore prefix)
`);
      process.exit(0);
    }
  }
  
  // Trova workspace root (dove si trova la cartella casi/)
  const workspaceRoot = path.resolve(__dirname, '../..');
  
  // Trova casi da validare
  let casePaths = [];
  
  if (options.specificCase) {
    const specificPath = path.join(workspaceRoot, 'casi', options.specificCase);
    if (!fs.existsSync(specificPath)) {
      console.error(colorize(`\n✗ Errore: Caso non trovato: ${options.specificCase}\n`, colors.red));
      process.exit(1);
    }
    casePaths = [specificPath];
  } else {
    casePaths = findAllCases(workspaceRoot);
    if (casePaths.length === 0) {
      console.error(colorize(`\n✗ Errore: Nessun caso trovato in ${workspaceRoot}/casi/\n`, colors.red));
      process.exit(1);
    }
  }
  
  // Scansiona e valida
  const results = casePaths.map(casePath => scanCase(casePath));
  
  // Output
  if (options.json) {
    outputJSON(results);
  } else {
    printReport(results, options);
  }
  
  // Exit code
  const hasErrors = results.some(r => r.stats.invalid > 0);
  process.exit(hasErrors ? 1 : 0);
}

// Run
main();
