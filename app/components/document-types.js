/**
 * Document Types Classification System
 * Handles document type detection, categorization, and metadata
 */

const DOCUMENT_TYPES = {
  'readme': { name: 'Incipit del Caso', icon: 'file', category: 'briefing', spoiler: false },
  'decision-tree': { name: 'Albero Decisionale', icon: 'gitBranch', category: 'solutions', spoiler: true },
  'master-doc': { name: 'Documento Master', icon: 'fileText', category: 'solutions', spoiler: true },
  'instructions': { name: 'Istruzioni Giocatori', icon: 'helpCircle', category: 'briefing', spoiler: false },
  'narration': { name: 'Script Narrazione Finale', icon: 'film', category: 'solutions', spoiler: true },
  'email': { name: 'Email', icon: 'mail', category: 'correspondence', spoiler: false },
  'police': { name: 'Rapporto Polizia', icon: 'shield', category: 'official', spoiler: false },
  'medical': { name: 'Referto Medico', icon: 'heart', category: 'official', spoiler: false },
  'forensic': { name: 'Analisi Forense', icon: 'search', category: 'official', spoiler: false },
  'diary': { name: 'Diario Personale', icon: 'book', category: 'correspondence', spoiler: false },
  'chat': { name: 'Chat/Messaggi', icon: 'message', category: 'correspondence', spoiler: false },
  'bank': { name: 'Estratto Conto', icon: 'dollar', category: 'evidence', spoiler: false },
  'legal': { name: 'Documento Legale', icon: 'gavel', category: 'evidence', spoiler: false },
  'newspaper': { name: 'Articolo Stampa', icon: 'newspaper', category: 'evidence', spoiler: false },
  'phone': { name: 'Tabulato Telefonico', icon: 'phone', category: 'evidence', spoiler: false },
  'social': { name: 'Social Media', icon: 'users', category: 'evidence', spoiler: false },
  'photo': { name: 'Fotografia', icon: 'camera', category: 'evidence', spoiler: false },
  'hint': { name: 'Suggerimento', icon: 'lightbulb', category: 'hints', spoiler: true },
  'solution': { name: 'Soluzione', icon: 'key', category: 'solutions', spoiler: true }
};

const CATEGORY_INFO = {
  'briefing': { name: 'Materiale del Caso', icon: 'fileText', order: 1 },
  'official': { name: 'Documenti Ufficiali', icon: 'shield', order: 2 },
  'correspondence': { name: 'Corrispondenza Privata', icon: 'mail', order: 3 },
  'evidence': { name: 'Prove Materiali', icon: 'folder', order: 4 },
  'hints': { name: 'Indizi', icon: 'lightbulb', order: 5 },
  'solutions': { name: 'Soluzione', icon: 'key', order: 6 }
};

/**
 * Detects the document type from a filename
 * @param {string} filename - The filename to analyze
 * @returns {string} The detected document type or 'unknown'
 */
function detectDocumentType(filename) {
  // Ignore files that start with underscore
  if (filename.startsWith('_')) {
    return null;
  }
  
  // Ignore only manuale-utente.md (user manual is not needed)
  const systemFiles = [
    'manuale-utente.md'
  ];
  
  if (systemFiles.includes(filename.toLowerCase())) {
    return null;
  }

  // Normalize filename to lowercase for matching
  const normalized = filename.toLowerCase();
  
  // Detect case briefing files by exact name
  if (normalized === 'readme.md') return 'readme';
  if (normalized === 'albero-decisionale.md') return 'decision-tree';
  if (normalized === 'documento-master.md') return 'master-doc';
  if (normalized === 'istruzioni-giocatori.md') return 'instructions';
  if (normalized === 'script-narrazione-finale.md') return 'narration';
  
  // Try underscore-based detection first (e.g., police_report.md)
  const underscoreIndex = filename.indexOf('_');
  if (underscoreIndex !== -1) {
    const prefix = filename.substring(0, underscoreIndex);
    if (DOCUMENT_TYPES.hasOwnProperty(prefix)) {
      return prefix;
    }
  }
  
  // Keyword-based detection for files with descriptive names
  const keywordPatterns = {
    'police': /poliz|questur|carabinier|rapporto.*poliz|interrogatori|sorveglianz|verbale|timeline|registro.*telecamer|registro.*invitat|registro.*access|inchiesta/i,
    'medical': /medic|refert|clinic|ospedale|sanitari|autopsi|tossicologic|veterinari|certificat.*veterinar/i,
    'forensic': /forens|scientific|analisi.*tecnic|analisi.*digit|lista.*prove|mappa.*scena|scena.*crimine|analisi.*gps|qr.*code|balistic|analisi.*uv|perizia/i,
    'email': /email|mail|messaggio.*elettronic|lettera/i,
    'chat': /chat|whatsapp|telegram|sms|messagg|trascrizioni.*audio/i,
    'diary': /diario|journal|dossier/i,
    'bank': /banc|conto|estratt|transazi|ordin.*acquist|ricevut|scontrin/i,
    'legal': /legal|testamento|contratt|notaril|atto|ordin|divorzio|certificat(?!.*veterinar)|molesti|curriculum|perizia.*artistic/i,
    'newspaper': /giornal|articol|stampa|news|catalogo|bozza.*guida/i,
    'phone': /telefon|tabulat|chiamat/i,
    'social': /social|facebook|twitter|instagram|post.*social|sito.*web.*fittizi/i,
    'photo': /foto|photo|immagi/i,
    'hint': /hint|suggeriment|indizi|aiut|livello/i,
    'solution': /solution|soluzion|rispost|verifica.*soluzion|sistem.*verific/i
  };
  
  // Check each pattern
  for (const [type, pattern] of Object.entries(keywordPatterns)) {
    if (pattern.test(normalized)) {
      return type;
    }
  }
  
  return 'unknown';
}

/**
 * Extracts the hint level from a hint filename
 * @param {string} filename - The hint filename (e.g., 'hint_livello1.md')
 * @returns {number|null} The hint level number or null if not found
 */
function extractHintLevel(filename) {
  const match = filename.match(/hint_livello(\d+)/i);
  return match ? parseInt(match[1], 10) : null;
}

/**
 * Gets the metadata for a document type
 * @param {string} type - The document type
 * @returns {object|null} The document type metadata or null if not found
 */
function getDocumentTypeMetadata(type) {
  return DOCUMENT_TYPES[type] || null;
}

/**
 * Gets all document types in a specific category
 * @param {string} category - The category name
 * @returns {Array<string>} Array of document type keys in that category
 */
function getDocumentTypesByCategory(category) {
  return Object.keys(DOCUMENT_TYPES).filter(
    type => DOCUMENT_TYPES[type].category === category
  );
}

// CommonJS exports for Node.js
module.exports = {
  DOCUMENT_TYPES,
  CATEGORY_INFO,
  detectDocumentType,
  extractHintLevel,
  getDocumentTypeMetadata,
  getDocumentTypesByCategory
};
