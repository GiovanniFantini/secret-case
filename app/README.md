# 🔍 Detective Case Viewer - Sistema Avanzato

Sistema di visualizzazione web per casi detective interattivi con grafiche realistiche per tipologia di documento.

## 🚀 Quick Start

```bash
cd app
npm install
npm start
```

Apri il browser su: `http://localhost:3000`

## 📁 Struttura Progetto

```
secret-case/
├── app/                          # Applicazione web
│   ├── index.html               # Frontend React (single page)
│   ├── server.js                # Backend Express API
│   ├── package.json             # Dipendenze Node.js
│   ├── start.bat                # Script avvio rapido Windows
│   ├── styles/
│   │   └── document-types.css   # Stili realistici per tipi
│   ├── assets/
│   │   └── textures/            # Texture carta, timbri (opzionale)
│   ├── components/
│   │   ├── document-types.js    # Sistema classificazione
│   │   └── icon-library.js      # Libreria icone SVG
│   └── tools/
│       ├── migrate-case.js      # Script migrazione casi
│       ├── validate-naming.js   # Validatore convenzioni
│       └── README.md            # Guida tools
├── casi/                         # Casi detective (file markdown)
│   ├── eredita-villa-rossi/
│   ├── la-cattedra-vuota/
│   └── ...
└── template/                     # Template per nuovi casi
    ├── README-GUIDA.md          # Guida creazione casi
    ├── ESEMPI-CASI.md           # Mini-casi dimostrativi
    └── caso-template/           # Template base caso
```

## 🎨 Caratteristiche

### Tipologie Documento Realistiche

12 tipologie con grafiche fedeli al 100%:

- **📧 Email** - Header Gmail-style, metadata, quote
- **👮 Rapporto Polizia** - Intestazione ufficiale, badge, timbri
- **🏥 Referto Medico** - Layout clinico, terminologia medica
- **🔬 Analisi Forense** - Stile tecnico/scientifico, evidenze
- **📖 Diario Personale** - Carta invecchiata, scrittura mano
- **💬 Chat/WhatsApp** - Bubble messages, timestamp, checkmark
- **💰 Estratto Conto** - Tabelle bancarie, movimenti sospetti
- **⚖️ Documento Legale** - Atto notarile, clausole, firme
- **📰 Articolo Stampa** - Masthead, byline, layout giornalistico
- **📞 Tabulato Telefonico** - Celle, durate, autorizzazioni
- **📱 Social Media** - Post Instagram/Facebook, engagement
- **📷 Fotografia** - Scheda descrittiva, metadata EXIF

### Navigazione Intelligente

- **Raggruppamento per categoria:**
  - 🛡️ Documenti Ufficiali
  - ✉️ Corrispondenza Privata
  - 📁 Prove Materiali
  - 💡 Indizi (con protezione spoiler)
  - 🎯 Soluzione (protezione tripla)

### Protezione Spoiler Avanzata

- **Suggerimenti:** Conferma richiesta + tracking unlock
- **Soluzione:** Password + Countdown + Blur effect
- **Persistenza:** LocalStorage ricorda stato per caso

### Interattività

- 🔍 Zoom fullscreen documenti
- 🖨️ Stampa documenti
- 📱 Responsive design (mobile-friendly)
- 🎭 Animazioni documento (apertura busta, unfold)
- 🔄 Reset progress per caso

## 🛠️ Comandi Disponibili

**Sviluppo:**
```bash
npm start              # Avvia server (con nodemon auto-reload)
npm run dev            # Alias per npm start
```

**Validazione Casi:**
```bash
node tools/validate-naming.js              # Valida tutti i casi
node tools/validate-naming.js --caso NOME  # Valida caso specifico
```

**Migrazione Casi:**
```bash
node tools/migrate-case.js ../casi/NOME --dry-run  # Preview
node tools/migrate-case.js ../casi/NOME --auto     # Applica
```

## 📝 Convenzioni Naming

Ogni documento deve avere **prefisso tipo + underscore**:

```
✅ CORRETTO:
email_messaggio-avvocato.md
police_rapporto-interrogatorio.md
diary_diario-vittima.md

❌ SBAGLIATO:
messaggio-avvocato.md          (manca prefisso)
email-messaggio-avvocato.md    (dash invece underscore)
emailMessaggio.md              (camelCase)
```

**Prefissi validi:** `email_`, `police_`, `medical_`, `forensic_`, `diary_`, `chat_`, `bank_`, `legal_`, `newspaper_`, `phone_`, `social_`, `photo_`

**Prefissi speciali:**
- `_istruzioni-giocatori.md` - File sistema (nascosti)
- `hint_livello1.md` - Suggerimenti (con protezione)
- `solution_documento-master.md` - Soluzioni (protezione tripla)

## 🆕 Creare Nuovo Caso

1. **Copia template:**
   ```bash
   cp -r template/caso-template casi/mio-nuovo-caso
   ```

2. **Personalizza file sistema:**
   - `_istruzioni-giocatori.md` - Regole per i giocatori
   - `_manuale-utente.md` - Guida per il narratore

3. **Crea documenti investigativi:**
   - Usa i template in `documenti/` come base
   - Nomina con prefisso corretto: `email_*.md`, `police_*.md`, etc.
   - Mescola tipi differenti per varietà

4. **Aggiungi suggerimenti:**
   - `hint_livello1.md` - Generico
   - `hint_livello2.md` - Specifico
   - `hint_livello3.md` - Quasi soluzione

5. **Scrivi soluzione:**
   - `solution_albero-decisionale.md` - Flowchart
   - `solution_documento-master.md` - Spiegazione completa
   - `solution_script-narrazione-finale.md` - Narrazione finale

6. **Valida:**
   ```bash
   node tools/validate-naming.js --caso mio-nuovo-caso
   ```

7. **Testa:**
   - Avvia server: `npm start`
   - Apri caso nel browser
   - Verifica che tutti i documenti appaiano correttamente

## 🔧 Tecnologie Usate

- **Frontend:** React 18 (via CDN), Tailwind CSS, Marked.js
- **Backend:** Express.js, Node.js
- **Storage:** File system (markdown), LocalStorage (stato spoiler)
- **Dev:** Nodemon (auto-reload), CORS

## 📚 Documentazione Dettagliata

- [Template Guida Completa](../template/README-GUIDA.md)
- [Tools Documentation](tools/README.md)
- [Document Types Reference](DOCUMENT-TYPES.md)

## 🐛 Troubleshooting

**Server non si avvia:**
- Verifica che Node.js sia installato: `node --version`
- Controlla che la porta 3000 sia libera
- Reinstalla dipendenze: `rm -rf node_modules && npm install`

**Documenti non appaiono:**
- Verifica naming con: `node tools/validate-naming.js`
- Controlla che i file siano in formato `.md`
- Assicurati che abbiano prefisso valido

**Stili documenti non corretti:**
- Apri DevTools browser (F12)
- Verifica che `styles/document-types.css` sia caricato
- Controlla che la classe `.doc-[tipo]` sia applicata

**Spoiler non funzionano:**
- Controlla localStorage nel browser (DevTools > Application > Local Storage)
- Prova a resettare: Click su "Reset Spoiler"
- Cancella cache browser

## 🤝 Contribuire

Per aggiungere nuove tipologie documento:

1. Aggiungi tipo in `components/document-types.js`
2. Aggiungi stili in `styles/document-types.css`
3. Aggiungi icona in `components/icon-library.js`
4. Crea template in `template/caso-template/documenti/`
5. Aggiorna documentazione

## 📄 Licenza

[Inserisci licenza]

## 👥 Autori

[Inserisci autori]
