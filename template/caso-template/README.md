# 📦 Template Caso Detective

Questa cartella contiene la struttura base per creare un nuovo caso investigativo.

## Struttura

```
caso-template/
├── README.md (questo file)
├── _istruzioni-giocatori.md (regole del gioco)
├── _manuale-utente.md (guida per il narratore)
├── solution_albero-decisionale.md (flowchart soluzione)
├── solution_documento-master.md (spiegazione completa)
├── solution_script-narrazione-finale.md (narrazione finale)
└── documenti/ (tutti i documenti investigativi)
```

## File Sistema (prefisso `_`)

File di supporto che non fanno parte dei documenti investigativi:

- **`_istruzioni-giocatori.md`** - Regole del gioco, premessa, informazioni sui sospettati
- **`_manuale-utente.md`** - Guida per il Game Master, setup, flusso di gioco

Questi file sono ignorati dalla navigazione principale e servono come documentazione.

## File Soluzione (prefisso `solution_`)

File che contengono la soluzione completa del caso:

- **`solution_albero-decisionale.md`** - Sistema di verifica con domande a risposta multipla
- **`solution_documento-master.md`** - Documento riservato con tutti i dettagli del caso
- **`solution_script-narrazione-finale.md`** - Script per la narrazione finale (12-15 min)

⚠️ **SPOILER ALERT**: Questi file rivelano la soluzione completa. Non consultare prima di aver risolto il caso.

## Documenti Investigativi

Tutti i documenti vanno nella cartella `documenti/` con prefisso tipo + underscore:

### Prefissi Obbligatori

| Prefisso | Tipo Documento | Esempio |
|----------|----------------|---------|
| `email_` | Email e messaggi | `email_messaggio-avvocato.md` |
| `police_` | Rapporti polizia | `police_rapporto-interrogatorio.md` |
| `medical_` | Referti medici | `medical_autopsia-vittima.md` |
| `diary_` | Diari personali | `diary_diario-sospetto.md` |
| `chat_` | Chat/messaggi | `chat_conversazione-whatsapp.md` |
| `bank_` | Estratti conto | `bank_movimenti-sospetto.md` |
| `legal_` | Documenti legali | `legal_testamento.md` |
| `newspaper_` | Articoli stampa | `newspaper_articolo-scandalo.md` |
| `phone_` | Tabulati telefonici | `phone_chiamate-giorno-omicidio.md` |
| `social_` | Post social media | `social_post-facebook.md` |
| `photo_` | Descrizioni foto | `photo_scena-crimine.md` |
| `forensic_` | Analisi forensi | `forensic_analisi-tracce.md` |
| `hint_` | Suggerimenti | `hint_livello1.md` |

### Esempi Corretti

✅ `email_messaggio-avvocato.md`
✅ `police_rapporto-interrogatorio-chef.md`
✅ `medical_autopsia-vittima.md`
✅ `hint_livello1.md`

### Esempi Sbagliati

❌ `messaggio-avvocato.md` (manca prefisso)
❌ `email-messaggio-avvocato.md` (dash invece di underscore)
❌ `Email_messaggio.md` (prefisso maiuscolo)

## Come Creare un Nuovo Caso

1. **Copia questa cartella**:
   ```powershell
   Copy-Item "template/caso-template" "casi/il-mio-caso" -Recurse
   ```

2. **Personalizza i file sistema**:
   - Modifica `_istruzioni-giocatori.md` con la premessa del tuo caso
   - Modifica `_manuale-utente.md` con istruzioni specifiche

3. **Scrivi la soluzione**:
   - Compila `solution_documento-master.md` con TUTTI i dettagli del caso
   - Crea `solution_albero-decisionale.md` con le 3 domande di verifica
   - Scrivi `solution_script-narrazione-finale.md` per la narrazione finale

4. **Crea i documenti investigativi**:
   - Usa i template in `documenti/` come base
   - Rispetta la convenzione naming (prefisso_nome.md)
   - Distribuisci gli indizi secondo la catena probatoria

5. **Aggiungi suggerimenti progressivi**:
   - `hint_livello1.md` - Orientamento generico
   - `hint_livello2.md` - Indizi specifici
   - `hint_livello3.md` - Quasi-soluzione

6. **Testa il caso**:
   - Avvia `npm start` dalla cartella `app/`
   - Naviga il caso come un giocatore
   - Verifica che tutti gli indizi siano accessibili

## Best Practices

### Distribuzione Indizi

- **30% Indizi Diretti** - Prove evidenti che puntano al colpevole
- **40% Indizi da Collegare** - Servono connessioni tra documenti
- **20% Indizi Nascosti** - Dettagli sottili che confermano
- **10% Red Herring** - False piste credibili

### Struttura Documento Master

Il `solution_documento-master.md` deve contenere:
- Informazioni generali sul caso
- Profilo vittima e sospettati dettagliati
- Soluzione completa (chi, perché, come)
- Catena probatoria con mappa indizi per documento
- Timeline completa degli eventi
- False piste e come scagionarle

### Progressive Disclosure

Organizza i documenti per difficoltà crescente:
1. **Facili** - Rapporti ufficiali, informazioni base
2. **Medi** - Email, messaggi, documenti finanziari
3. **Difficili** - Dettagli nascosti, contraddizioni sottili

### Suggerimenti

- **Livello 1** (60 min) - "Concentratevi sui rapporti forensi"
- **Livello 2** (90 min) - "La persona X ha mentito sull'orario"
- **Livello 3** (120 min) - "Il colpevole è X perché..."

## Risorse

- **Guida Completa**: Vedi `template/README-GUIDA.md`
- **Template Documenti**: Cartella `template/caso-template/documenti/`
- **Esempi Reali**: Vedi i casi in `casi/`

---

**Ultimo aggiornamento**: 2026-02-14  
**Versione Template**: 2.0 (Sistema Unificato)
