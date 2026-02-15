# 📋 Changelog

Tutte le modifiche notevoli al progetto sono documentate qui.

## [2.0.0] - 2026-02-14

### ✨ Nuove Funzionalità

- **Sistema tipologie documento:** 12 tipi con grafiche realistiche
- **Navigazione per categoria:** Documenti raggruppati semanticamente
- **Protezione spoiler avanzata:** Hints con conferma, Solution con password+countdown
- **LocalStorage persistence:** Stato unlock salvato per caso
- **Animazioni interattive:** Apertura busta, unfold documento
- **Tools CLI:** Script migrazione e validazione casi

### 🎨 Miglioramenti Grafici

- CSS ultra-realistico per ogni tipo documento
- 30+ icone SVG dedicate
- Texture carta e watermark
- Bubble chat WhatsApp-style
- Timeline forensi con tabelle
- Badge tipologia colorati

### 🔧 Miglioramenti Tecnici

- Riorganizzazione in `app/` subfolder
- Nuova API structure con `documentsByType`
- Module system per components
- Auto-detection tipo da filename
- Recursive file scanning

### 📚 Template e Documentazione

- Template unificato in `template/caso-template/`
- 12 template documento realistici
- 3 livelli hint progressivi
- Guida completa creazione casi
- 3 mini-casi dimostrativi

### 🛠️ Tools

- `migrate-case.js`: Migra vecchia → nuova struttura
- `validate-naming.js`: Valida convenzioni naming

### 🐛 Bug Fix

- Path resolution per cartelle casi
- Cross-platform compatibility (Windows/Unix)
- Security check directory traversal

---

## [1.0.0] - 2025-XX-XX

### Initial Release

- Visualizzazione casi markdown
- Sezioni collapsible
- Protezione spoiler base
- Express server
- React frontend
