#!/usr/bin/env node

/**
 * MIGRATE-CASE.JS
 * Script di migrazione dalla vecchia alla nuova struttura dei casi detective
 * 
 * Uso: node migrate-case.js <path-al-caso> [opzioni]
 * 
 * Opzioni:
 *   --dry-run      Mostra modifiche senza applicarle
 *   --auto         Applica automaticamente senza conferma
 *   --interactive  Chiede conferma per ogni file (default)
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

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
  
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
};

function colorize(text, color) {
  return `${color}${text}${colors.reset}`;
}

// ===== CONFIGURAZIONE =====
const VALID_PREFIXES = [
  'email', 'police', 'medical', 'forensic', 'diary', 'chat',
  'bank', 'legal', 'newspaper', 'phone', 'social', 'photo'
];

const OLD_FOLDERS = [
  'documenti-investigativi',
  'prove-documentali',
  'elementi-digitali',
  'suggerimenti'
];

const SYSTEM_FILES = [
  'README.md',
  'albero-decisionale.md',
  'documento-master.md',
  'istruzioni-giocatori.md',
  'manuale-utente.md',
  'script-narrazione-finale.md'
];

// ===== FUNZIONI RILEVAMENTO TIPO =====
function detectTypeFromContent(filename, content) {
  const firstLines = content.substring(0, 800).toLowerCase();
  const filenameLower = filename.toLowerCase();
  
  // Pattern per email
  if ((firstLines.includes('da:') && firstLines.includes('a:') && firstLines.includes('oggetto:')) ||
      (firstLines.includes('from:') && firstLines.includes('to:') && firstLines.includes('subject:')) ||
      filenameLower.includes('email') || filenameLower.includes('mail')) {
    return 'email';
  }
  
  // Pattern per documenti di polizia
  if (firstLines.includes('polizia') || firstLines.includes('questura') || 
      firstLines.includes('carabinieri') || firstLines.includes('badge') ||
      firstLines.includes('rapporto investigativo') || firstLines.includes('interrogatorio') ||
      filenameLower.includes('police') || filenameLower.includes('polizia')) {
    return 'police';
  }
  
  // Pattern per documenti medici
  if (firstLines.includes('referto') || firstLines.includes('autopsia') || 
      firstLines.includes('medico legale') || firstLines.includes('ospedale') ||
      firstLines.includes('cartella clinica') || firstLines.includes('analisi del sangue') ||
      filenameLower.includes('medical') || filenameLower.includes('medico') || filenameLower.includes('autopsia')) {
    return 'medical';
  }
  
  // Pattern per documenti forensi
  if (firstLines.includes('analisi forense') || firstLines.includes('prova scientifica') ||
      firstLines.includes('ris') || firstLines.includes('laboratorio') ||
      firstLines.includes('analisi dna') || firstLines.includes('impronte digitali') ||
      filenameLower.includes('forensic') || filenameLower.includes('forense')) {
    return 'forensic';
  }
  
  // Pattern per diari
  if (firstLines.includes('caro diario') || firstLines.includes('diario di') ||
      (firstLines.match(/^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/) && firstLines.includes('oggi')) ||
      filenameLower.includes('diary') || filenameLower.includes('diario')) {
    return 'diary';
  }
  
  // Pattern per chat/messaggi
  if (firstLines.includes('whatsapp') || firstLines.includes('messaggio') ||
      firstLines.includes('telegram') || firstLines.includes('sms') ||
      (firstLines.match(/\[\d{2}:\d{2}\]/) && firstLines.includes(':')) ||
      filenameLower.includes('chat') || filenameLower.includes('messag')) {
    return 'chat';
  }
  
  // Pattern per documenti bancari
  if (firstLines.includes('estratto conto') || firstLines.includes('banca') ||
      firstLines.includes('bonifico') || firstLines.includes('transazione') ||
      firstLines.includes('iban') || firstLines.includes('conto corrente') ||
      filenameLower.includes('bank') || filenameLower.includes('banc')) {
    return 'bank';
  }
  
  // Pattern per documenti legali
  if (firstLines.includes('testamento') || firstLines.includes('notaio') ||
      firstLines.includes('contratto') || firstLines.includes('atto notarile') ||
      firstLines.includes('procura') || firstLines.includes('sentenza') ||
      filenameLower.includes('legal') || filenameLower.includes('testamento') || filenameLower.includes('contratto')) {
    return 'legal';
  }
  
  // Pattern per articoli di giornale
  if (firstLines.includes('articolo') || firstLines.includes('giornale') ||
      firstLines.includes('quotidiano') || firstLines.includes('cronaca') ||
      firstLines.includes('redazione') || firstLines.match(/^[A-Z\s]{10,}$/m) ||
      filenameLower.includes('newspaper') || filenameLower.includes('giornale') || filenameLower.includes('articolo')) {
    return 'newspaper';
  }
  
  // Pattern per tabulati telefonici
  if (firstLines.includes('tabulato') || firstLines.includes('chiamata') ||
      firstLines.includes('telefono') || firstLines.includes('numero chiamante') ||
      firstLines.match(/\+?\d{2,3}[-\s]?\d{3,4}[-\s]?\d{4,6}/) ||
      filenameLower.includes('phone') || filenameLower.includes('telefon') || filenameLower.includes('tabulat')) {
    return 'phone';
  }
  
  // Pattern per social media
  if (firstLines.includes('post') || firstLines.includes('instagram') ||
      firstLines.includes('facebook') || firstLines.includes('twitter') ||
      firstLines.includes('social') || firstLines.includes('follower') ||
      firstLines.includes('like') || firstLines.includes('#') ||
      filenameLower.includes('social') || filenameLower.includes('instagram') || filenameLower.includes('facebook')) {
    return 'social';
  }
  
  // Pattern per foto/immagini
  if (firstLines.includes('foto') || firstLines.includes('immagine') ||
      firstLines.includes('exif') || firstLines.includes('metadata foto') ||
      firstLines.includes('scattata il') || firstLines.includes('fotografia') ||
      filenameLower.includes('photo') || filenameLower.includes('foto') || filenameLower.includes('immagine')) {
    return 'photo';
  }
  
  // Pattern per suggerimenti
  if (firstLines.includes('suggerimento') || firstLines.includes('hint') ||
      firstLines.includes('aiuto') || filenameLower.includes('hint') || 
      filenameLower.includes('suggerimento')) {
    return 'hint';
  }
  
  // Pattern per soluzioni
  if (firstLines.includes('soluzione') || firstLines.includes('spoiler') ||
      firstLines.includes('risposta corretta') || filenameLower.includes('solution') || 
      filenameLower.includes('soluzione')) {
    return 'solution';
  }
  
  return 'unknown';
}

function hasValidPrefix(filename) {
  for (const prefix of VALID_PREFIXES) {
    if (filename.startsWith(prefix + '_')) {
      return prefix;
    }
  }
  if (filename.startsWith('hint_')) return 'hint';
  if (filename.startsWith('solution_')) return 'solution';
  if (filename.startsWith('_')) return 'system';
  return null;
}

// ===== FUNZIONI FILESYSTEM =====
function findMarkdownFiles(casePath) {
  const files = [];
  
  function scanDir(dirPath, relativePath = '') {
    if (!fs.existsSync(dirPath)) return;
    
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relPath = path.join(relativePath, entry.name);
      
      if (entry.isDirectory()) {
        // Ricorsione nelle sottocartelle delle vecchie directory
        if (OLD_FOLDERS.includes(entry.name) || relativePath) {
          scanDir(fullPath, relPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        // Ignora file di sistema alla root
        if (!relativePath && SYSTEM_FILES.includes(entry.name)) {
          continue;
        }
        
        files.push({
          fullPath,
          relativePath: relPath,
          filename: entry.name,
          folder: relativePath ? relativePath.split(path.sep)[0] : 'root'
        });
      }
    }
  }
  
  scanDir(casePath);
  return files;
}

function analyzeFile(file, casePath) {
  try {
    const content = fs.readFileSync(file.fullPath, 'utf-8');
    const detectedType = detectTypeFromContent(file.filename, content);
    const existingPrefix = hasValidPrefix(file.filename);
    
    let suggestedName = file.filename;
    let action = 'keep';
    let reason = '';
    
    if (existingPrefix) {
      // File ha già un prefisso
      if (existingPrefix === 'system' || existingPrefix === 'hint' || existingPrefix === 'solution') {
        action = 'keep';
        reason = `Prefisso speciale ${existingPrefix} valido`;
      } else if (existingPrefix === detectedType) {
        action = 'keep';
        reason = `Prefisso ${existingPrefix}_ corretto`;
      } else if (detectedType !== 'unknown') {
        action = 'suggest-change';
        suggestedName = file.filename.replace(new RegExp(`^${existingPrefix}_`), `${detectedType}_`);
        reason = `Prefisso rilevato: ${detectedType}`;
      } else {
        action = 'keep';
        reason = `Prefisso esistente mantenuto`;
      }
    } else {
      // File non ha prefisso
      if (detectedType === 'hint') {
        // Suggerimenti - format hint_livelloN.md
        const match = file.filename.match(/(\d+)/);
        if (match) {
          suggestedName = `hint_livello${match[1]}.md`;
        } else {
          suggestedName = `hint_${file.filename}`;
        }
        action = 'rename';
        reason = `Rilevato suggerimento`;
      } else if (detectedType === 'solution') {
        suggestedName = `solution_${file.filename}`;
        action = 'rename';
        reason = `Rilevata soluzione`;
      } else if (detectedType !== 'unknown') {
        suggestedName = `${detectedType}_${file.filename}`;
        action = 'rename';
        reason = `Rilevato tipo: ${detectedType}`;
      } else {
        action = 'manual';
        suggestedName = `unknown_${file.filename}`;
        reason = `⚠️ Tipo non rilevato - richiede revisione manuale`;
      }
    }
    
    return {
      ...file,
      detectedType,
      existingPrefix,
      suggestedName,
      action,
      reason,
      content
    };
  } catch (error) {
    return {
      ...file,
      error: error.message,
      action: 'error'
    };
  }
}

// ===== FUNZIONI INTERAZIONE UTENTE =====
function printHeader() {
  console.log(colorize('\n═══════════════════════════════════════════════════════════', colors.cyan));
  console.log(colorize('           🔄 MIGRATE-CASE - Migrazione Struttura Caso', colors.cyan + colors.bright));
  console.log(colorize('═══════════════════════════════════════════════════════════\n', colors.cyan));
}

function printTable(analyses) {
  console.log(colorize('\n📋 Piano di Migrazione:\n', colors.bright + colors.yellow));
  console.log(colorize('─'.repeat(120), colors.dim));
  
  // Header
  const headerFormat = '%-45s  %-8s  %-45s  %s';
  console.log(colorize(
    sprintf(headerFormat, 'PATH ORIGINALE', 'AZIONE', 'NUOVO NOME', 'MOTIVO'),
    colors.bright
  ));
  console.log(colorize('─'.repeat(120), colors.dim));
  
  // Rows
  for (const analysis of analyses) {
    let actionIcon = '';
    let actionColor = colors.reset;
    
    switch (analysis.action) {
      case 'keep':
        actionIcon = '✓ Keep';
        actionColor = colors.green;
        break;
      case 'rename':
        actionIcon = '→ Rename';
        actionColor = colors.yellow;
        break;
      case 'suggest-change':
        actionIcon = '⚠ Change';
        actionColor = colors.magenta;
        break;
      case 'manual':
        actionIcon = '⚠ Manual';
        actionColor = colors.red;
        break;
      case 'error':
        actionIcon = '✗ Error';
        actionColor = colors.red;
        break;
    }
    
    const oldPath = truncate(analysis.relativePath, 45);
    const newName = truncate(analysis.suggestedName, 45);
    const reason = truncate(analysis.reason || analysis.error || '', 25);
    
    console.log(
      colorize(pad(oldPath, 45), colors.dim) + '  ' +
      colorize(pad(actionIcon, 8), actionColor) + '  ' +
      pad(newName, 45) + '  ' +
      colorize(reason, colors.dim)
    );
  }
  
  console.log(colorize('─'.repeat(120), colors.dim));
}

function printStats(analyses) {
  const stats = {
    keep: analyses.filter(a => a.action === 'keep').length,
    rename: analyses.filter(a => a.action === 'rename').length,
    suggestChange: analyses.filter(a => a.action === 'suggest-change').length,
    manual: analyses.filter(a => a.action === 'manual').length,
    error: analyses.filter(a => a.action === 'error').length
  };
  
  console.log(colorize('\n📊 Statistiche:', colors.bright + colors.cyan));
  console.log(`  ${colorize('✓', colors.green)} Da mantenere:        ${stats.keep}`);
  console.log(`  ${colorize('→', colors.yellow)} Da rinominare:       ${stats.rename}`);
  console.log(`  ${colorize('⚠', colors.magenta)} Da modificare:       ${stats.suggestChange}`);
  console.log(`  ${colorize('⚠', colors.red)} Revisione manuale:   ${stats.manual}`);
  if (stats.error > 0) {
    console.log(`  ${colorize('✗', colors.red)} Errori:              ${stats.error}`);
  }
  console.log(`  ${colorize('━', colors.dim)} Totale file:         ${analyses.length}\n`);
  
  return stats;
}

function askConfirmation(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question(colorize(question + ' ', colors.bright + colors.yellow), (answer) => {
      rl.close();
      resolve(answer.toLowerCase().trim());
    });
  });
}

// ===== FUNZIONI MIGRAZIONE =====
async function performMigration(casePath, analyses, dryRun, interactive) {
  const documentiPath = path.join(casePath, 'documenti');
  const backupPath = path.join(casePath, '.backup-' + Date.now());
  
  console.log(colorize('\n🚀 Inizio migrazione...\n', colors.bright + colors.green));
  
  if (!dryRun) {
    // Crea backup
    console.log(colorize(`📦 Creazione backup in: ${path.basename(backupPath)}`, colors.dim));
    fs.mkdirSync(backupPath, { recursive: true });
    
    // Crea cartella documenti
    if (!fs.existsSync(documentiPath)) {
      fs.mkdirSync(documentiPath, { recursive: true });
      console.log(colorize(`📁 Creata cartella: documenti/`, colors.green));
    }
  }
  
  let processed = 0;
  let moved = 0;
  let renamed = 0;
  let errors = 0;
  
  for (const analysis of analyses) {
    if (analysis.action === 'error') {
      console.log(colorize(`✗ Errore: ${analysis.relativePath} - ${analysis.error}`, colors.red));
      errors++;
      continue;
    }
    
    if (analysis.action === 'keep' && !analysis.relativePath.includes(path.sep)) {
      // File già alla root, non serve spostarlo
      processed++;
      continue;
    }
    
    const shouldProcess = analysis.action !== 'keep';
    const shouldMove = analysis.relativePath.includes(path.sep); // File in sottocartella
    
    if (!shouldProcess && !shouldMove) {
      processed++;
      continue;
    }
    
    if (interactive && !dryRun) {
      const answer = await askConfirmation(
        `\nProcessare ${analysis.relativePath} → ${analysis.suggestedName}? [y/n/q]`
      );
      if (answer === 'q') {
        console.log(colorize('\n⏸️  Migrazione interrotta dall\'utente.\n', colors.yellow));
        break;
      }
      if (answer !== 'y') {
        console.log(colorize('  ⊘ Saltato', colors.dim));
        continue;
      }
    }
    
    try {
      const newPath = path.join(documentiPath, analysis.suggestedName);
      
      if (dryRun) {
        console.log(colorize(`  [DRY-RUN] ${analysis.relativePath} → documenti/${analysis.suggestedName}`, colors.cyan));
      } else {
        // Backup del file originale
        const backupFilePath = path.join(backupPath, analysis.relativePath);
        fs.mkdirSync(path.dirname(backupFilePath), { recursive: true });
        fs.copyFileSync(analysis.fullPath, backupFilePath);
        
        // Muovi/rinomina file
        fs.copyFileSync(analysis.fullPath, newPath);
        fs.unlinkSync(analysis.fullPath);
        
        const action = shouldProcess ? 'rinominato' : 'spostato';
        console.log(colorize(`  ✓ ${action}: documenti/${analysis.suggestedName}`, colors.green));
        
        if (shouldProcess) renamed++;
        if (shouldMove) moved++;
      }
      
      processed++;
      
    } catch (error) {
      console.log(colorize(`  ✗ Errore: ${error.message}`, colors.red));
      errors++;
    }
  }
  
  // Cleanup vecchie cartelle (solo se non dry-run)
  if (!dryRun && moved > 0) {
    console.log(colorize('\n🧹 Pulizia vecchie cartelle...', colors.dim));
    for (const folder of OLD_FOLDERS) {
      const folderPath = path.join(casePath, folder);
      if (fs.existsSync(folderPath)) {
        try {
          // Verifica se la cartella è vuota o contiene solo sottocartelle vuote
          if (isEmptyDir(folderPath)) {
            fs.rmSync(folderPath, { recursive: true, force: true });
            console.log(colorize(`  ✓ Rimossa: ${folder}/`, colors.dim));
          } else {
            console.log(colorize(`  ⚠ Mantenuta: ${folder}/ (contiene ancora file)`, colors.yellow));
          }
        } catch (error) {
          console.log(colorize(`  ✗ Errore rimozione ${folder}: ${error.message}`, colors.red));
        }
      }
    }
  }
  
  // Report finale
  console.log(colorize('\n═══════════════════════════════════════════════════════════', colors.green));
  console.log(colorize('                    ✅ Migrazione Completata', colors.green + colors.bright));
  console.log(colorize('═══════════════════════════════════════════════════════════\n', colors.green));
  
  console.log(colorize('📊 Risultati:', colors.bright));
  console.log(`  File processati:     ${processed}`);
  console.log(`  File spostati:       ${moved}`);
  console.log(`  File rinominati:     ${renamed}`);
  if (errors > 0) {
    console.log(colorize(`  Errori:              ${errors}`, colors.red));
  }
  
  if (!dryRun) {
    console.log(colorize(`\n💾 Backup salvato in: ${path.basename(backupPath)}`, colors.dim));
    console.log(colorize('   (Puoi eliminarlo se tutto è OK)\n', colors.dim));
  } else {
    console.log(colorize('\n💡 Questo era un dry-run. Per applicare le modifiche, rimuovi --dry-run\n', colors.yellow));
  }
}

function isEmptyDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile()) return false;
    if (entry.isDirectory() && !isEmptyDir(path.join(dirPath, entry.name))) return false;
  }
  return true;
}

// ===== UTILITY =====
function sprintf(format, ...args) {
  let i = 0;
  return format.replace(/%(-?\d+)?s/g, (match, width) => {
    const arg = args[i++] || '';
    return width ? pad(arg, parseInt(width)) : arg;
  });
}

function pad(str, width) {
  str = String(str);
  if (width > 0) {
    return str.padEnd(Math.abs(width), ' ');
  } else {
    return str.padStart(Math.abs(width), ' ');
  }
}

function truncate(str, maxLen) {
  str = String(str);
  if (str.length <= maxLen) return str;
  return str.substring(0, maxLen - 3) + '...';
}

// ===== MAIN =====
async function main() {
  const args = process.argv.slice(2);
  
  // Parse arguments
  const casePath = args.find(arg => !arg.startsWith('--'));
  const dryRun = args.includes('--dry-run');
  const auto = args.includes('--auto');
  const interactive = !auto && !dryRun;
  
  if (!casePath || args.includes('--help') || args.includes('-h')) {
    console.log(`
${colorize('🔄 MIGRATE-CASE - Migrazione Struttura Caso', colors.cyan + colors.bright)}

${colorize('Uso:', colors.bright)}
  node migrate-case.js <path-al-caso> [opzioni]

${colorize('Opzioni:', colors.bright)}
  --dry-run      Mostra modifiche senza applicarle
  --auto         Applica automaticamente senza conferma
  --interactive  Chiede conferma per ogni file (default)

${colorize('Esempi:', colors.bright)}
  node migrate-case.js ../casi/eredita-villa-rossi --dry-run
  node migrate-case.js ../casi/la-cattedra-vuota --auto
  node migrate-case.js ../casi/notte-delle-maschere
`);
    process.exit(0);
  }
  
  // Verifica path
  const resolvedPath = path.resolve(casePath);
  if (!fs.existsSync(resolvedPath)) {
    console.error(colorize(`\n✗ Errore: Path non trovato: ${casePath}\n`, colors.red));
    process.exit(1);
  }
  
  if (!fs.statSync(resolvedPath).isDirectory()) {
    console.error(colorize(`\n✗ Errore: Il path non è una directory: ${casePath}\n`, colors.red));
    process.exit(1);
  }
  
  // Start
  printHeader();
  
  console.log(colorize('📂 Caso:', colors.bright), path.basename(resolvedPath));
  console.log(colorize('📍 Path:', colors.dim), resolvedPath);
  console.log(colorize('🔧 Modalità:', colors.bright), 
    dryRun ? colorize('DRY-RUN', colors.cyan) : 
    auto ? colorize('AUTO', colors.yellow) : 
    colorize('INTERACTIVE', colors.green));
  
  // Trova e analizza file
  console.log(colorize('\n🔍 Scansione file markdown...', colors.dim));
  const files = findMarkdownFiles(resolvedPath);
  
  if (files.length === 0) {
    console.log(colorize('\n⚠️  Nessun file markdown da migrare trovato.\n', colors.yellow));
    process.exit(0);
  }
  
  console.log(colorize(`   Trovati ${files.length} file markdown\n`, colors.dim));
  
  console.log(colorize('🔬 Analisi tipo contenuto...', colors.dim));
  const analyses = files.map(file => analyzeFile(file, resolvedPath));
  
  // Mostra piano
  printTable(analyses);
  const stats = printStats(analyses);
  
  // Conferma
  if (!dryRun && !auto) {
    const answer = await askConfirmation('\n❓ Procedere con la migrazione? [y/n]');
    if (answer !== 'y' && answer !== 'yes') {
      console.log(colorize('\n⏸️  Migrazione annullata.\n', colors.yellow));
      process.exit(0);
    }
  }
  
  // Esegui migrazione
  await performMigration(resolvedPath, analyses, dryRun, interactive);
}

// Run
main().catch(error => {
  console.error(colorize(`\n✗ Errore fatale: ${error.message}\n`, colors.red));
  console.error(error.stack);
  process.exit(1);
});
