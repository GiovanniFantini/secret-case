# 🕵️ Secret Case - Detective Game System

Sistema completo per creare e giocare casi detective interattivi con documenti investigativi realistici.

## 📖 Descrizione

Secret Case è un sistema web-based che permette di:
- **Creare** casi detective con documenti investigativi autentici
- **Giocare** investigazioni interattive guidate da documenti
- **Gestire** una libreria di casi con difficoltà variabile

Ogni caso è composto da documenti markdown che vengono renderizzati con grafiche realistiche specifiche per tipologia (email, rapporti polizia, referti medici, chat, etc.).

| Caratteristica | Dettaglio |
|----------------|-----------|
| Tipo | Sistema web-based per casi detective |
| Durata | 1–5 ore per caso |
| Giocatori | 1–4 persone |
| Difficoltà | Da Accessibile a Impegnativo (4 livelli) |
| Tecnologia | Node.js + React + Markdown |

## 🚀 Quick Start

```bash
# 1. Clona repository
git clone [url-repo]
cd secret-case

# 2. Installa dipendenze
cd app
npm install

# 3. Avvia applicazione
npm start

# 4. Apri browser
# http://localhost:3000
```

## 📂 Struttura Repository

- **`app/`** - Applicazione web (frontend + backend)
  - Sistema di visualizzazione con grafiche realistiche
  - 12 tipologie documento supportate
  - Protezione spoiler avanzata
  - Tools migrazione e validazione
- **`casi/`** - Casi detective esistenti (8 casi completi)
  - Ogni caso con 40-60+ documenti
  - File markdown organizzati per tipo
- **`template/`** - Template per creare nuovi casi
  - Template base caso completo
  - 12 template documento per ogni tipologia
  - Guide e documentazione
- **`printer/`** (opzionale) - Script per export PDF

## 📚 Documentazione

- [🚀 Guida App](app/README.md) - Come usare l'applicazione
- [📝 Guida Template](template/README-GUIDA.md) - Come creare casi
- [ Tools](app/tools/README.md) - Script utility
- [📄 Reference Documenti](app/DOCUMENT-TYPES.md) - Tipologie complete
- [📋 Changelog](app/CHANGELOG.md) - Storico modifiche

## 🎮 Casi Disponibili

### ⭐⭐ Accessibile — Per iniziare

1. **Ultimo Brindisi** - Critico enologico trovato morto nella sua cantina  
   ⭐⭐ Accessibile | 1-2h | 4 sospettati | Fiesole, 2024

2. **Eredità Villa Rossi** - Testamento contestato, morte sospetta  
   ⭐⭐ Accessibile | 1.5-2.5h | 9 sospettati | Lago di Como, 2024

### ⭐⭐⭐ Media — Il cuore della collezione

3. **Prezzo del Silenzio** - Giornalista investigativo trovato morto  
   ⭐⭐⭐ Media | 2-3h | 6 sospettati | Torino, 2025

4. **Segreto Villa Medici** - Furto d'arte e intrighi familiari  
   ⭐⭐⭐ Media | 2-3h | 6 sospettati | Perugia, 2024

5. **Ultima Cena** - Avvelenamento durante cena esclusiva  
   ⭐⭐⭐ Media | 2-3h | 6 sospettati | Parma, 2025

6. **L'Ultima Seduta** - Psichiatra trovato morto in una clinica isolata dalla tempesta  
   ⭐⭐⭐ Media | 2.5-4h | 6 sospettati | Monte Isola (Lago d'Iseo), 2026

### ⭐⭐⭐⭐ Impegnativo — Per investigatori esperti

7. **La Cattedra Vuota** - Professore scomparso, segreti universitari  
   ⭐⭐⭐⭐ Impegnativo | 2.5-3.5h | 6 sospettati | Bologna, 2025

8. **Notte delle Maschere** - Omicidio durante festa in maschera  
   ⭐⭐⭐⭐ Impegnativo | 3-5h | 8 sospettati | Sanremo, 2026

Ogni caso è giocabile direttamente dall'applicazione web. L'ordine suggerito sopra riflette una progressione di difficoltà crescente.

## 🛠️ Requisiti

- Node.js 14+ (per server)
- Browser moderno (Chrome, Firefox, Edge)
- Nessun database richiesto (tutto file-based)

## 🆕 Creare un Caso

```bash
# 1. Copia template
cp -r template/caso-template casi/mio-caso

# 2. Edita documenti
# Segui convenzioni naming: email_*.md, police_*.md, etc.

# 3. Valida
cd app
node tools/validate-naming.js --caso mio-caso

# 4. Testa
npm start
# Apri http://localhost:3000 e seleziona il tuo caso
```

[Guida completa creazione casi](template/README-GUIDA.md)

## 🎨 Features Principali

### Grafiche Realistiche
12 tipologie documento con stili CSS autentici:
- 📧 Email - Header Gmail-style, quote, firma
- 👮 Rapporti Polizia - Intestazione ufficiale, badge, timbri
- 🏥 Referti Medici - Layout clinico, terminologia medica
- 🔬 Analisi Forensi - Stile tecnico/scientifico, evidenze
- 📖 Diari - Carta invecchiata, scrittura personale
- 💬 Chat WhatsApp - Bubble messages, timestamp, checkmark
- 💰 Estratti Conto - Tabelle bancarie, movimenti sospetti
- ⚖️ Documenti Legali - Atti notarili, clausole, firme
- 📰 Articoli Stampa - Masthead, byline, layout giornalistico
- 📞 Tabulati Telefonici - Celle, durate, autorizzazioni
- 📱 Social Media - Post Instagram/Facebook, engagement
- 📷 Fotografie - Schede descrittive, metadata EXIF

### Protezione Spoiler
- **Suggerimenti progressivi:** Conferma richiesta + tracking unlock
- **Soluzione:** Password + countdown + blur effect
- **Persistenza:** LocalStorage salvadato per caso

### Navigazione Intelligente
- Raggruppamento per categoria (Ufficiali/Corrispondenza/Prove)
- Auto-detection tipo documento da filename
- Fullscreen zoom e stampa documenti

### Tools Utility
- Migrazione automatica vecchi casi
- Validazione convenzioni naming
- Auto-detection tipo documento

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
```

**Prefissi validi:** `email_`, `police_`, `medical_`, `forensic_`, `diary_`, `chat_`, `bank_`, `legal_`, `newspaper_`, `phone_`, `social_`, `photo_`

**Prefissi speciali:**
- `_istruzioni-giocatori.md` - File sistema (nascosti)
- `hint_livello1.md` - Suggerimenti (protezione spoiler)
- `solution_documento-master.md` - Soluzioni (protezione tripla)
## 🎭 Design di un Caso

### Struttura Narrativa

Ogni caso è composto da un crimine (omicidio, rapina, scomparsa) ambientato in un luogo e periodo storico specifici.

**Elementi chiave:**
- **Vittima**: nome, età, background dettagliato
- **Circostanze**: come è stato scoperto il crimine
- **Sospetti**: 6–10 persone con moventi credibili
- **False piste**: almeno 2 deviazioni convincenti
- **Soluzione**: deducibile logicamente dagli indizi forniti

### Distribuzione Informazioni

| Tipo | Percentuale | Descrizione |
|------|-------------|-------------|
| Indizi diretti | 30% | Evidenti una volta notati |
| Indizi da collegare | 40% | Richiedono connessioni logiche |
| Indizi nascosti | 20% | Dettagli sottili, contraddizioni |
| Red herring | 10% | Piste false ma plausibili |

### Livelli di Scoperta

**Livello 1 — Identificazione base (30–45 min)**
- Chi sono i sospetti?
- Qual è la timeline generale?
- Dove è successo?

**Livello 2 — Analisi approfondita (60–90 min)**
- Quali sono i moventi?
- Chi aveva opportunità?
- Quali prove collegano i sospetti?

**Livello 3 — Deduzione finale (30–45 min)**
- Chi è il colpevole?
- Come ha commesso il crimine?
- Perché lo ha fatto?

## 🎮 Meccaniche di Gioco

### Regole Base

- Non c'è un giocatore master: tutti hanno la stessa esperienza
- All'inizio tutti i giocatori accedono alla stessa documentazione
- La collaborazione è la chiave per risolvere il caso

### Sistema di Verifica

Tre domande finali a scelta multipla:
1. **Chi è il colpevole?** (4–5 opzioni)
2. **Qual è il movente esatto?** (3–4 opzioni)
3. **Come è stato commesso il crimine?** (3–4 opzioni)

### Sistema di Aiuti Progressivi

| Livello | Attivazione | Contenuto |
|---------|-------------|-----------|
| 1 | Dopo 60 min | Suggerimento generico |
| 2 | Dopo 90 min | Suggerimento specifico |
| 3 | Dopo 120 min | Suggerimento risolutivo |

Nell'app web, gli aiuti sono protetti da conferma e tracciati tramite LocalStorage.

## 💡 Tips per Creare Casi di Qualità

### Coerenza Temporale
Sincronizza timestamp tra documenti:
- Email delle 18:20 + Chiamata tabulato 18:22 = Coerenza
- Post social location + Cella telefonica = Alibi verificabile

### Mix Tipologie
Varia i tipi documento per un caso bilanciato:
- **30% Ufficiali** (police, medical, forensic)
- **25% Corrispondenza** (email, chat, diary)
- **45% Prove** (bank, legal, newspaper, phone, social, photo)

### Autenticità
- Gergo tecnico appropriato (medico, legale, poliziesco)
- Dettagli procedurali corretti
- Riferimenti culturali coerenti con l'epoca
- Numeri di protocollo, date, riferimenti incrociati

### Checklist Qualità

- [ ] È possibile risolvere il caso con **solo** le informazioni fornite?
- [ ] Ci sono almeno 2 sospetti credibili oltre al colpevole?
- [ ] Le false piste sono abbastanza convincenti?
- [ ] La soluzione è sorprendente ma logica in retrospettiva?
- [ ] Tutti gli indizi hanno uno scopo o aggiungono atmosfera?
- [ ] Il caso mantiene l'interesse per 2–4 ore?

## 🤝 Contribuire

Vuoi aggiungere un caso o migliorare il sistema?

1. Leggi [Guida Template](template/README-GUIDA.md)
2. Crea il tuo caso seguendo le convenzioni
3. Testa con lo script di validazione: `node app/tools/validate-naming.js --caso [nome]`
4. Invia pull request (se repository pubblico)

Per aggiungere nuove tipologie documento:
1. Aggiungi tipo in [app/components/document-types.js](app/components/document-types.js)
2. Aggiungi stili in [app/styles/document-types.css](app/styles/document-types.css)
3. Aggiungi icona in [app/components/icon-library.js](app/components/icon-library.js)
4. Crea template in [template/caso-template/documenti/](template/caso-template/documenti/)
5. Aggiorna documentazione

## 🔧 Tecnologie

- **Frontend:** React 18 (via CDN), Tailwind CSS, Marked.js
- **Backend:** Express.js, Node.js
- **Storage:** File system (markdown), LocalStorage (stato spoiler)
- **Dev:** Nodemon (auto-reload), CORS

## 📜 Licenza

[Inserisci licenza]

## 🙏 Credits

- Sistema creato da [Autore]
- Casi scritti da [Autori casi]
- Ispirato da giochi detective classici

## 📬 Contatti

[Inserisci info contatto]

---

**Sistema Secret Case v2.0** - Febbraio 2026  
Detective Case Viewer con grafiche realistiche e protezione spoiler avanzata
