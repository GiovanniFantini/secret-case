# 🛠️ Tools - Script Utility per Casi Detective

Questa cartella contiene script Node.js per gestire e validare i casi detective del progetto Secret Case.

## 📜 Script Disponibili

### `migrate-case.js` - Migrazione Vecchia → Nuova Struttura

Converte un caso dalla vecchia struttura multi-cartella (documenti-investigativi/, prove-documentali/, elementi-digitali/, suggerimenti/) alla nuova struttura unificata con prefissi.

**Uso:**
```bash
node migrate-case.js <path-al-caso> [opzioni]
```

**Esempi:**
```bash
# Dry-run per vedere cosa succederebbe senza modificare nulla
node migrate-case.js ../casi/eredita-villa-rossi --dry-run

# Migrazione automatica senza conferme
node migrate-case.js ../casi/la-cattedra-vuota --auto

# Migrazione interattiva (default)
node migrate-case.js ../casi/notte-delle-maschere
```

**Opzioni:**
- `--dry-run`: Mostra le modifiche proposte senza applicarle effettivamente
- `--auto`: Applica automaticamente tutte le modifiche suggerite senza chiedere conferma
- `--interactive`: Chiede conferma per ogni file (modalità default)

**Cosa fa lo script:**
1. **Analizza** la struttura esistente del caso (vecchie cartelle multiple)
2. **Rileva automaticamente** il tipo di ogni documento dal suo contenuto
3. **Suggerisce** il prefisso appropriato per ogni file
4. **Crea** la cartella unificata `documenti/` se non esiste
5. **Sposta e rinomina** i file con i prefissi corretti
6. **Crea backup** automatico prima delle modifiche (cartella `.backup-*`)
7. **Rimuove** le vecchie cartelle vuote dopo la migrazione
8. **Genera** un report dettagliato delle operazioni effettuate

**Logica di rilevamento tipo:**
Lo script analizza le prime righe di ogni file markdown per identificare pattern specifici:
- **Email**: cerca "Da:", "A:", "Oggetto:"
- **Police**: cerca "polizia", "questura", "badge", "interrogatorio"
- **Medical**: cerca "referto", "autopsia", "medico legale"
- **Forensic**: cerca "analisi forense", "RIS", "laboratorio"
- **Diary**: cerca "caro diario", "diario di", pattern di date
- **Chat**: cerca "WhatsApp", "messaggio", timestamp formato chat
- **Bank**: cerca "estratto conto", "banca", "IBAN"
- **Legal**: cerca "testamento", "notaio", "contratto"
- **Newspaper**: cerca "articolo", "giornale", "cronaca"
- **Phone**: cerca "tabulato", "chiamata", numeri di telefono
- **Social**: cerca "post", "Instagram", "Facebook", hashtag
- **Photo**: cerca "foto", "immagine", "EXIF"
- **Hint**: cerca "suggerimento", "hint", "aiuto"
- **Solution**: cerca "soluzione", "spoiler"

**Output esempio:**
```
═══════════════════════════════════════════════════════════
           🔄 MIGRATE-CASE - Migrazione Struttura Caso
═══════════════════════════════════════════════════════════

📂 Caso: eredita-villa-rossi
📍 Path: C:\Repos\secret-case\casi\eredita-villa-rossi
🔧 Modalità: INTERACTIVE

🔍 Scansione file markdown...
   Trovati 18 file markdown

🔬 Analisi tipo contenuto...

📋 Piano di Migrazione:

PATH ORIGINALE                              AZIONE    NUOVO NOME                                   MOTIVO
────────────────────────────────────────────────────────────────────────────────────────────────────────────
documenti-investigativi/messaggio-avvo...   → Rename  email_messaggio-avvocato.md                 Rilevato tipo: email
prove-documentali/testamento-rossi.md       → Rename  legal_testamento-rossi.md                   Rilevato tipo: legal
...

📊 Statistiche:
  ✓ Da mantenere:        5
  → Da rinominare:       12
  ⚠ Da modificare:       1
  ⚠ Revisione manuale:   0
  ━ Totale file:         18

❓ Procedere con la migrazione? [y/n]
```

---

### `validate-naming.js` - Validazione Convenzioni Naming

Controlla che tutti i casi rispettino le convenzioni di naming stabilite per il progetto.

**Uso:**
```bash
node validate-naming.js [opzioni]
```

**Esempi:**
```bash
# Valida tutti i casi
node validate-naming.js

# Valida solo un caso specifico
node validate-naming.js --caso eredita-villa-rossi

# Output in formato JSON per elaborazione automatica
node validate-naming.js --json > report.json

# Mostra anche i comandi per fixare i problemi
node validate-naming.js --fix-suggestions
```

**Opzioni:**
- `--caso <nome>`: Valida solo il caso specificato invece di tutti
- `--json`: Produce output in formato JSON invece del report testuale
- `--fix-suggestions`: Include i comandi shell suggeriti per correggere i problemi

**Controlli effettuati:**
- ✅ Verifica che i file normali abbiano un prefisso valido
- ✅ Verifica che i file sistema inizino con `_`
- ✅ Verifica che gli hint abbiano formato `hint_livelloN.md`
- ✅ Verifica che le soluzioni abbiano prefisso `solution_`
- ✅ Verifica che i nomi siano in kebab-case
- ✅ Verifica che i file siano nelle cartelle corrette
- ✅ Rileva prefissi non validi o mancanti
- ✅ Suggerisce correzioni automatiche quando possibile

**Report generato:**
```
═══════════════════════════════════════════════════════════
          📋 VALIDAZIONE CONVENZIONI NAMING CASI
═══════════════════════════════════════════════════════════

📦 Caso: eredita-villa-rossi
📂 Percorso: C:\Repos\secret-case\casi\eredita-villa-rossi

✅ Conformi (15):
  ✓ documenti/email_messaggio-avvocato.md
  ✓ documenti/police_rapporto-autopsia.md
  ✓ documenti/medical_referto-tossicologico.md
  ✓ solution_albero-decisionale.md
  ✓ _istruzioni-giocatori.md
  ...

❌ Non conformi (3):
  ✗ documenti/messaggio-vittima.md
    → Manca prefisso tipo documento
    💡 Suggerimenti:
       Aggiungi un prefisso valido: email, police, medical, forensic, diary, chat, bank, legal, newspaper, phone, social, photo
       Suggerimento: chat_messaggio-vittima.md
    🔧 Fix: mv "documenti/messaggio-vittima.md" "documenti/chat_messaggio-vittima.md"

  ✗ rapporto-finale.md
    → File non dovrebbe essere alla root del caso
    → Manca prefisso tipo documento
    💡 Suggerimenti:
       Sposta in documenti/ con prefisso appropriato
       Suggerimento: police_rapporto-finale.md

⚠️  Warning (1):
  ⚠ solution_custom_report.md
    → File soluzione non standard

📊 Statistiche:
  Totale file:        19
  Conformi:           15 (78.9%)
  Warning:            1
  Non conformi:       3
────────────────────────────────────────────────────────────

═══════════════════════════════════════════════════════════
                    📊 RIEPILOGO GLOBALE
═══════════════════════════════════════════════════════════

  Casi analizzati:    7
  File totali:        156
  Conformi:           142 (91.0%)
  Warning:            3
  Non conformi:       11

❌ Ci sono file non conformi che richiedono correzione.
```

**Output JSON:**
```json
{
  "timestamp": "2026-02-14T10:30:00.000Z",
  "cases": [
    {
      "name": "eredita-villa-rossi",
      "path": "C:\\Repos\\secret-case\\casi\\eredita-villa-rossi",
      "stats": {
        "total": 19,
        "valid": 15,
        "invalid": 3,
        "warnings": 1
      },
      "files": [
        {
          "name": "email_messaggio-avvocato.md",
          "path": "documenti/email_messaggio-avvocato.md",
          "location": "documenti",
          "valid": true,
          "type": "email",
          "issues": [],
          "suggestions": []
        }
      ]
    }
  ],
  "summary": {
    "totalCases": 7,
    "totalFiles": 156,
    "validFiles": 142,
    "invalidFiles": 11,
    "warningFiles": 3
  }
}
```

---

## 🚀 Setup e Prerequisiti

### Requisiti
- **Node.js** installato (qualsiasi versione moderna)
- Nessuna dipendenza esterna (usano solo moduli built-in)

### Installazione
Non è necessaria alcuna installazione. Gli script sono pronti all'uso:

```bash
cd app/tools
node validate-naming.js
```

---

## 💡 Workflow Consigliato

### Per creare nuovi casi:

1. **Copia il template:**
   ```bash
   cp -r ../../template/caso-template ../../casi/nuovo-caso-mistero
   ```

2. **Edita i file seguendo le convenzioni:**
   - Aggiungi documenti in `documenti/` con prefissi corretti
   - Crea hint come `hint_livello1.md`, `hint_livello2.md`, etc.
   - Edita i file sistema `_istruzioni-giocatori.md`, `_manuale-utente.md`
   - Completa i file solution `solution_*.md`

3. **Valida prima di committare:**
   ```bash
   node validate-naming.js --caso nuovo-caso-mistero
   ```

4. **Correggi eventuali errori** segnalati dallo script

### Per convertire casi esistenti:

1. **Crea un backup manuale (precauzione):**
   ```bash
   cp -r ../../casi/vecchio-caso ../../casi/vecchio-caso.backup-manuale
   ```

2. **Esegui dry-run per vedere le modifiche:**
   ```bash
   node migrate-case.js ../../casi/vecchio-caso --dry-run
   ```

3. **Rivedi le modifiche proposte** e verifica che abbiano senso

4. **Esegui la migrazione:**
   ```bash
   # Interattiva (conferma ogni file)
   node migrate-case.js ../../casi/vecchio-caso

   # Oppure automatica (se sei sicuro)
   node migrate-case.js ../../casi/vecchio-caso --auto
   ```

5. **Valida il risultato:**
   ```bash
   node validate-naming.js --caso vecchio-caso
   ```

6. **Correggi eventuali problemi residui** segnalati dalla validazione

7. **Testa il caso** nell'applicazione per assicurarti che tutto funzioni

8. **Elimina il backup automatico** se tutto è ok:
   ```bash
   rm -rf ../../casi/vecchio-caso/.backup-*
   ```

### Per manutenzione continua:

```bash
# Valida tutti i casi regolarmente
node validate-naming.js

# Integra nel processo CI/CD
node validate-naming.js --json > validation-report.json
```

---

## 📋 Convenzioni Naming - Riferimento Rapido

### Prefissi Standard per Documenti

Ogni documento investigativo deve avere uno di questi prefissi:

| Prefisso | Tipo Documento | Esempi |
|----------|----------------|--------|
| `email_` | Email, messaggi di posta | `email_messaggio-avvocato.md` |
| `police_` | Rapporti di polizia, interrogatori | `police_rapporto-interrogatorio-sospetto.md` |
| `medical_` | Referti medici, autopsie | `medical_referto-autopsia.md` |
| `forensic_` | Analisi forensi, prove scientifiche | `forensic_analisi-dna.md` |
| `diary_` | Diari personali | `diary_diario-vittima.md` |
| `chat_` | Chat, WhatsApp, SMS | `chat_conversazione-whatsapp.md` |
| `bank_` | Estratti conto, documenti bancari | `bank_estratto-conto-gennaio.md` |
| `legal_` | Testamenti, contratti, atti notarili | `legal_testamento-rossi.md` |
| `newspaper_` | Articoli di giornale | `newspaper_articolo-cronaca-nera.md` |
| `phone_` | Tabulati telefonici | `phone_tabulato-chiamate.md` |
| `social_` | Post social media | `social_post-instagram.md` |
| `photo_` | Descrizioni foto, metadata | `photo_scena-del-crimine.md` |

### Prefissi Speciali

| Prefisso | Uso | Formato | Esempi |
|----------|-----|---------|--------|
| `_` | File di sistema | `_nome-file.md` | `_istruzioni-giocatori.md`, `_manuale-utente.md` |
| `hint_` | Suggerimenti graduali | `hint_livelloN.md` | `hint_livello1.md`, `hint_livello2.md` |
| `solution_` | File soluzione/spoiler | `solution_nome.md` | `solution_albero-decisionale.md` |

### Regole di Naming

✅ **Formato corretto:**
```
[prefisso]_[descrizione-in-kebab-case].md
```

✅ **Esempi corretti:**
- `email_messaggio-avvocato-testamento.md`
- `police_rapporto-interrogatorio-maggiordomo.md`
- `medical_referto-tossicologico-vittima.md`
- `hint_livello1.md`
- `solution_documento-master.md`
- `_istruzioni-giocatori.md`

❌ **Esempi sbagliati:**
- `messaggio-avvocato.md` ← Manca prefisso
- `email-messaggio.md` ← Usa dash `-` invece di underscore `_` dopo il prefisso
- `emailMessaggio.md` ← Non è kebab-case
- `email_Messaggio_Avvocato.md` ← Usa underscore invece di dash nella descrizione
- `EMAIL_messaggio.md` ← Il prefisso deve essere lowercase
- `police_rapporto interrogatorio.md` ← Spazi non permessi, usa dash `-`

### Kebab-case

La descrizione del file deve essere in **kebab-case**:
- Solo **minuscole**
- **Parole separate da trattini** `-`
- Niente spazi, underscore o caratteri speciali
- Solo lettere, numeri e trattini

**Conversione esempi:**
- `Messaggio Avvocato` → `messaggio-avvocato`
- `Rapporto_Interrogatorio` → `rapporto-interrogatorio`
- `referto.tossicologico` → `referto-tossicologico`
- `DiarioVittima` → `diario-vittima`

---

## 🔧 Caratteristiche Tecniche

### Compatibilità Cross-Platform
Gli script funzionano sia su **Windows** che su **Unix/Linux/macOS** grazie a:
- Uso di `path.join()` per i percorsi
- Nessuna dipendenza da comandi shell specifici
- Gestione cross-platform delle newline

### Moduli Node.js Built-in
Gli script usano **solo moduli nativi** di Node.js:
- `fs` - Operazioni filesystem
- `path` - Manipolazione percorsi
- `readline` - Input interattivo utente

**Nessuna npm install necessaria!**

### Gestione Errori Robusta
- Try-catch su tutte le operazioni filesystem
- Backup automatico prima di modifiche
- Rollback in caso di errori critici
- Validazione dei percorsi prima dell'esecuzione
- Error handling a livello di singolo file (un errore non blocca tutto)

### Output User-Friendly
- **Colori ANSI** per output leggibile
- **Tabelle formattate** per comparazioni
- **Progress indicators** per operazioni lunghe
- **Statistiche dettagliate** e riepiloghi
- **Suggerimenti automatici** per risolvere problemi

### Logging e Debug
Gli script forniscono output dettagliato su:
- Operazioni eseguite
- File processati
- Errori incontrati
- Suggerimenti di fix
- Path backup creati

---

## 🐛 Troubleshooting

### "Errore: Path non trovato"
Verifica che il path sia corretto rispetto alla directory corrente:
```bash
# Usa path relativo dalla cartella tools/
node migrate-case.js ../../casi/nome-caso

# Oppure usa path assoluto
node migrate-case.js C:\Repos\secret-case\casi\nome-caso
```

### "Nessun caso trovato in casi/"
Lo script cerca la cartella `casi/` due livelli sopra (dalla prospettiva di `app/tools/`). Assicurati di eseguire da:
```bash
cd app/tools
node validate-naming.js
```

### I colori non vengono visualizzati
Alcuni terminali potrebbero non supportare i colori ANSI. Gli script funzionano comunque, solo senza colori.

### File classificato come "unknown"
Se un file viene classificato come tipo sconosciuto:
1. Verifica che il contenuto contenga parole chiave rilevanti
2. Aggiungi manualmente il prefisso corretto al filename
3. Considera di arricchire il contenuto con termini più specifici

### Backup automatico occupa spazio
Dopo aver verificato che la migrazione è andata a buon fine, puoi eliminare il backup:
```bash
rm -rf ../../casi/nome-caso/.backup-*
```

---

## 📝 Note aggiuntive

### Estensibilità
Gli script possono essere facilmente estesi:
- Aggiungi nuovi prefissi in `VALID_PREFIXES`
- Estendi la logica di rilevamento in `detectTypeFromContent()`
- Aggiungi nuove validazioni in `validateFilename()`

### Performance
Gli script sono ottimizzati per:
- Scansione veloce di centinaia di file
- Elaborazione parallela quando possibile
- Output progressivo per feedback immediato

### Sicurezza
- **Backup automatici** proteggono da perdite di dati
- **Dry-run mode** permette revisione prima delle modifiche
- **Modalità interattiva** dà controllo totale all'utente
- **Validazione path** previene operazioni fuori dalla workspace

---

## 📚 Risorse Correlate

- **Template caso**: `../../template/caso-template/`
- **Guida template**: `../../template/README-GUIDA.md`
- **Documentazione sistema**: Root del progetto

---

## 🤝 Contribuzioni

Per migliorare questi script:
1. Testa modifiche su casi di esempio
2. Mantieni compatibilità cross-platform
3. Aggiungi test per nuove funzionalità
4. Documenta nuovi parametri/opzioni

---

**Ultima revisione**: Febbraio 2026
**Versione**: 1.0.0
**Maintainer**: Team Secret Case
