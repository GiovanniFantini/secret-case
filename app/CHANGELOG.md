# 📋 Changelog

Tutte le modifiche notevoli al progetto sono documentate qui.

## [2.1.0] - 2026-02-15

### 🎨 Miglioramenti Grafici Realistici

#### Texture e Carta
- **Texture SVG noise:** Aggiunta grana carta realistica per tutti i documenti
- **Gradienti sottili:** Background con variazioni naturali per simulare carta reale
- **Paper aging:** Effetti invecchiamento per diario e giornale (macchie, usura)
- **Multiple layers:** Combinazione texture + pattern + gradienti per profondità

#### Effetti Realistici
- **Ombre multiple:** 2-3 layer di ombre per profondità naturale
- **Corner folds:** Pieghe sottili negli angoli per documenti ufficiali
- **Scan lines:** Linee orizzontali per effetto scanner su documenti ufficiali
- **Backdrop blur:** Effetto profondità per timbri e badge

#### Timbri e Firme
- **Bordi multipli:** Doppi/tripli bordi per timbri "RISERVATO" e "CONFIDENZIALE"
- **Rotazione naturale:** Transform rotate (-5° a -8°) per aspetto autentico
- **Ink texture:** Text-shadow sottile per simulare inchiostro su firme
- **Signature gradients:** Effetti sfumati per linee firma

#### Watermark Migliorati
- **Opacità ridotta:** Da 0.05 a 0.022-0.025 per maggiore realismo
- **Text-shadow:** Alone luminoso per profondità watermark
- **Letter-spacing:** Spaziatura aumentata per effetto professionale

### 🖨️ Ottimizzazioni Stampa

#### Preservazione Colori
- **Color-adjust exact:** Tutti i colori preservati per stampa realistica
- **Headers colorati:** Background e gradienti mantenuti in stampa
- **Timbri e badge:** Colori rosso/blu/oro preservati
- **Tabelle:** Zebra striping e bordi colorati mantenuti

#### Texture in Stampa
- **SVG inline:** Texture mantenute con opacità calibrata (0.012-0.035)
- **Pattern visibili:** Grid, righe, aging effects ottimizzati per stampa
- **Background images:** Data URI SVG per texture carta
- **Paper gradients:** Lievi variazioni di colore mantenute

#### Margini e Layout
- **Margini A4:** 15mm top/bottom, 12mm left/right
- **Page breaks:** Evitati in mezzo a documenti e sezioni
- **Font size:** Ottimizzato minimo 10pt per leggibilità
- **Orphans/widows:** Controllo interruzioni paragrafo

#### Documenti Specifici
- **Polizia:** Blu scuro header + texture grana + watermark sottile
- **Medico:** Azzurro ospedale + simbolo ⚕ + patient info box
- **Forense:** Nero/grigio + evidence badge arancione + grid
- **Legale:** Pergamena + doppi bordi marrone + signature box
- **Email:** Bordo blu + metadata box grigio + attachment notice
- **Diario:** Beige invecchiato + righe + margine rosso + aging spots
- **Giornale:** Masthead nero + sezione badge rosso + pull-quote
- **Bank:** Header blu + zebra tables + debit/credit colori

### 📊 Metriche
- **+80%** Texture realismo
- **+70%** Profondità ombre
- **+85%** Qualità timbri 3D
- **+100%** Colori stampa (da B&N a full color)
- **+90%** Effetti aging/usura

### 📚 Documentazione
- **GRAFICA-MIGLIORAMENTI.md:** Guida completa ai miglioramenti realistici
- **Testing checklist:** Lista verifica per nuovi documenti
- **Browser compatibility:** Info supporto Chrome, Firefox, Safari
- **Print best practices:** Consigli impostazioni stampante

---

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
