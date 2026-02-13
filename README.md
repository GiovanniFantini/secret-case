# Secret Case

Un framework per la creazione di esperienze investigative di cold case — giochi ibridi (fisico + digitale) in cui i giocatori analizzano documenti, prove e indizi per risolvere un caso misterioso.

## Panoramica

**Secret Case** fornisce le specifiche e la struttura per generare casi investigativi completi, pronti da giocare. Ogni caso include oltre 40 elementi tra documenti, prove e contenuti digitali.

| Caratteristica | Dettaglio |
|----------------|-----------|
| Tipo | Gioco investigativo ibrido (fisico + digitale) |
| Durata | 2–4 ore |
| Giocatori | 1–4 persone |
| Difficoltà | Media-alta, ma accessibile |

## Struttura di un Caso

Ogni caso è composto da un crimine (omicidio, rapina, scomparsa) ambientato in un luogo e un periodo storico specifici.

### Trama

- **Vittima**: nome, età, background dettagliato
- **Circostanze**: come è stato scoperto il crimine
- **NPC**: 8-12 persone (compresi i sospetti) per arricchire informazioni di contorno utili al caso
- **Sospetti**: 6–10 persone con moventi credibili
- **Colpo di scena**: almeno 2 false piste convincenti
- **Soluzione**: deducibile logicamente dagli indizi forniti

---

## Come Creare un Nuovo Caso

### Usare la Cartella Template

La cartella `template/` contiene tutti i file necessari per creare un nuovo caso. Ogni file è un template completo con:
- Struttura professionale basata sui casi esistenti
- Marcatori `[PLACEHOLDER]` per contenuti specifici del caso
- Commenti e note guida per gli autori
- Format di esempio e best practices

**Workflow consigliato:**

1. **Copia l'intera cartella template** in `casi/[nome-nuovo-caso]/`
2. **Inizia con il documento-master.md** - Definisci la soluzione completa
3. **Compila il README.md del caso** - Overview, sospettati, contenuti
4. **Crea istruzioni-giocatori.md e manuale-utente.md** - Guida ai giocatori
5. **Popola i documenti investigativi** - Rapporti, interrogatori, prove
6. **Aggiungi prove documentali** - Email, messaggi, estratti conto, etc.
7. **Configura il sistema di verifica** - albero-decisionale.md e sistema-verifica-soluzione.md
8. **Scrivi i suggerimenti** - 3 livelli progressivi
9. **Completa con script-narrazione-finale.md** - Rivelazione finale

### File Template Disponibili

#### File Principali (Obbligatori)

| File | Descrizione | Scopo |
|------|-------------|-------|
| `README.md` | Overview del caso con sospettati e inventario | Presentazione del caso |
| `documento-master.md` | **SOLUZIONE COMPLETA** - Solo per autori/GM | Contiene tutta la verità |
| `istruzioni-giocatori.md` | Regole, fasi, consigli per i giocatori | Primo documento da leggere |
| `manuale-utente.md` | ⭐ **CRITICO** - Guida organizzativa e percorso lettura | Organizzazione dei documenti |
| `albero-decisionale.md` | Schema domande e risposte con feedback | Sistema di verifica |
| `script-narrazione-finale.md` | Rivelazione finale da leggere/ascoltare dopo verifica | Closure narrativo |

#### documenti-investigativi/ (15-20 file)

**Obbligatori per tutti i casi:**
- `rapporto-polizia.md` - Rapporto iniziale con protocollo e metadata
- `report-medico-legale.md` - Autopsia e causa della morte
- `timeline-eventi.md` - Ricostruzione cronologica
- `mappa-scena-crimine.md` - Planimetria del luogo
- `lista-prove-fisiche.md` - Inventario prove raccolte
- `verbale-interrogatorio-sospetto-[N].md` - Uno per ogni sospetto

**Specializzati (usare se applicabile):**
- `rapporto-tossicologico.md` - Per casi di avvelenamento
- `rapporto-balistica.md` - Per casi con armi da fuoco
- `analisi-digitale-forense.md` - Per prove informatiche/telefoni
- `registro-telecamere.md` - Per videosorveglianza

**Altri documenti comuni:**
- `testimonianze-[tipo].md` - Deposizioni di testimoni non sospettati

#### prove-documentali/ (15-30 file)

**Comuni a molti casi:**
- `email-messaggi.md` - Corrispondenza privata (email, WhatsApp, SMS)
- `diario-personale.md` - Diario o note personali
- `estratti-conto.md` - Movimenti bancari dei sospettati
- `contratti-documenti-legali.md` - Contratti, testamenti, accordi
- `ricevute-scontrini.md` - Prove di acquisti rilevanti
- `articolo-giornale-[N].md` - Articoli di stampa (3-4)
- `post-social-media.md` - Post pubblici dei personaggi
- `registro-accessi.md` - Log di ingressi/badge (se applicabile)
- `documento-esposto.md` - Denunce o reclami formali

**Specifici per tipo di caso:**
- `testamento.md` - Per casi di eredità
- `polizza-assicurativa.md` - Per moventi assicurativi
- `certificato-medico-[tipo].md` - Documentazione medica rilevante

#### elementi-digitali/ (3-5 file)

- `sistema-verifica-soluzione.md` - ⭐ **CRITICO** - Schema verifica con feedback
- `registro-telecamere.md` - Trascrizioni videosorveglianza (se applicabile)
- `analisi-forense-digitale.md` - Report dispositivi elettronici (se applicabile)

#### suggerimenti/ (3 file - Obbligatori)

- `livello-1-generico.md` - Orientamento generale senza spoiler
- `livello-2-specifico.md` - Indicazioni su documenti chiave e connessioni
- `livello-3-quasi-risolutivo.md` - Rivela quasi tutto, lascia solo conferma finale

---

### Convenzioni di Naming

Il progetto supporta **due approcci** per nominare i file. Scegliete quello che preferite:

#### Approccio 1: Nomi Generici (Template Default)
```
verbale-interrogatorio-sospetto-1.md
verbale-interrogatorio-sospetto-2.md
email-messaggi.md
estratti-conto.md
```
**Pro:** Facile scalabilità, chiaro ruolo nel template  
**Contro:** Meno immersivo, non indica chi è il sospetto

#### Approccio 2: Nomi Specifici con Numerazione (Usato in alcuni casi)
```
01-interrogatorio-giulia-rossi.md
02-interrogatorio-marco-bianchi.md
03-email-segrete-vittima.md
04-estratti-conto-sospetto-principale.md
```
**Pro:** Più immersivo, suggerisce ordine di lettura, identificazione immediata  
**Contro:** Richiede rinominazione completa quando si crea dal template

**Raccomandazione:** Per nuovi casi, usate l'Approccio 1 (nomi generici) durante lo sviluppo, poi valutate se rinominare per l'immersione una volta completato il caso.

---

### Metadata e Header Professionali

I template includono **header professionali** basati sui casi reali:

**Documenti Investigativi:**
```markdown
# RAPPORTO DI POLIZIA - [TIPO DI CRIMINE]
## [Questura/Dipartimento] - [Divisione]

**Numero Pratica**: [XX-YYYY-NNNNNN]
**Data Rapporto**: [DD Mese YYYY]
**Investigatore Capo**: [Nome e grado]
**Badge**: [XX-NNNNN]
```

**Report Medico-Legale:**
```markdown
# REPORT AUTOPTICO E MEDICO-LEGALE
**Istituto di Medicina Legale - [Università/Ospedale]**

| Campo | Dettaglio |
|-------|-----------|
| Numero Protocollo | [YYYY-ML-NNNN] |
| Data Autopsia | [Data] |
| Patologo Forense | Dott. [Nome Cognome] |
```

**Verbali Interrogatorio:**
```markdown
# VERBALE DI INTERROGATORIO
**[Questura] - [Divisione]**

| Campo | Dettaglio |
|-------|-----------|
| Caso | [Numero protocollo] |
| Interrogato | [Nome Cognome] |
| Data/Ora Inizio | [Data] ore [HH:MM] |
| Investigatori | [Nomi] |
```

Questi header aggiungono autenticità e immersione al caso.

---

### Note Investigative nei Documenti

I casi reali utilizzano **note in corsivo** per simulare annotazioni dell'investigatore:

```markdown
*[NOTA INVESTIGATIVA: Contraddizione temporale - Il sospetto dichiara 
di essere uscito alle 20:00, ma il registro telecamere lo mostra 
alle 20:15. Da verificare.]*
```

Usate questo pattern per:
- Evidenziare contraddizioni
- Collegare prove da documenti diversi
- Segnalare elementi sospetti
- Guidare sottilmente i giocatori

---

## Materiali da Produrre (60+ elementi)

### Documenti Investigativi (15-30 pezzi)

1. Rapporto di polizia iniziale (2–3 pagine)
2. Verbali di interrogatorio per ogni sospetto (1 pagina ciascuno)
3. Report del medico legale / perizia tecnica
4. Timeline degli eventi (da ricostruire)
5. Mappe della scena del crimine
6. Lista di prove fisiche trovate

### Prove Documentali (15–30 pezzi)

1. Articoli di giornale (3–4, con evoluzione della storia)
2. Post social media delle vittime/sospetti
3. Email / messaggi di testo (10–15 scambi)
4. Estratti conto bancari
5. Ricevute / scontrini rilevanti
6. Contratti / documenti legali
7. Diari personali / note
8. Foto della scena del crimine (6–8, o descrizione testuale)

### Elementi Digitali (5–15 pezzi)

1. Sito web fittizio per verifiche (opzionale)
2. Registrazioni audio — trascrizioni / video (opzionale)
3. QR code per contenuti extra (opzionale)
4. Sistema di verifica della soluzione (testo obbligatorio, versione online opzionale)

## Design degli Indizi

### Distribuzione delle informazioni

| Tipo | Percentuale | Descrizione |
|------|-------------|-------------|
| Indizi diretti | 30% | Evidenti una volta notati |
| Indizi da collegare | 40% | Richiedono connessioni logiche |
| Indizi nascosti | 20% | Dettagli nelle foto, contraddizioni nei testi |
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

## Meccaniche di Gioco

### Regole base

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
| 1 | Dopo 60 min o 1 tentativo sbagliato | Suggerimento generico |
| 2 | Dopo 90 min o 2 tentativi | Suggerimento specifico |
| 3 | Dopo 120 min o 3 tentativi | Suggerimento risolutivo |

## Qualità della Narrazione

### Tono

- Realistico ma non eccessivamente violento
- Dettagli credibili (nomi realistici, luoghi reali o plausibili)
- Psicologia dei personaggi approfondita

### Coerenza

- Ogni indizio deve avere uno scopo
- Importante: Nessuna contraddizione tra gli elementi
- La soluzione deve essere l'**unica** logicamente coerente
- Timeline verificabile e senza buchi

## Elementi di Immersione

### Autenticità visiva (opzionale)

- Documenti con loghi e timbri ufficiali
- Formato realistico (font istituzionali, layout appropriati)
- Segni d'uso (macchie di caffè, note a penna)
- Qualità di stampa professionale

### Autenticità del contenuto

- Gergo tecnico appropriato (medico, legale, poliziesco)
- Dettagli procedurali corretti
- Riferimenti culturali coerenti con l'epoca
- Numeri di protocollo, date, riferimenti incrociati

## Struttura Narrativa

| Fase | Tempo | Descrizione |
|------|-------|-------------|
| Hook iniziale | 0–15 min | Scoperta scioccante che cattura l'attenzione |
| Espansione | 15–60 min | Conoscenza dei sospetti e del contesto |
| Complicazione | 60–120 min | False piste e dubbi crescenti |
| Illuminazione | 120–150 min | Il dettaglio chiave — il momento "aha!" |
| Risoluzione | 150–180 min | Conferma e spiegazione completa |

## Output di un Caso Completo

Per ogni caso generato, vengono prodotti:

1. **README.md del caso** - Overview, sospettati, inventario documenti
2. **Istruzioni per i giocatori** - Regole, fasi, consigli (`istruzioni-giocatori.md`)
3. **Manuale utente** ⭐ - Guida organizzativa con percorso di lettura consigliato (`manuale-utente.md`)
4. **Documento master** - Soluzione completa e spiegazione per GM/autori (`documento-master.md`)
5. **Tutti i documenti investigativi** - Rapporti, interrogatori, prove (15-20 file)
6. **Prove documentali** - Email, messaggi, estratti conto, articoli (15-30 file)
7. **Elementi digitali** - Sistema verifica, registrazioni, analisi forensi (3-5 file)
8. **Albero decisionale** - Sistema di verifica con feedback (`albero-decisionale.md`)
9. **3 livelli di suggerimenti progressivi** - Per giocatori bloccati
10. **Script della narrazione finale** - Rivelazione da leggere/ascoltare (10-15 min)

**Totale:** 40-60+ file per caso completo

---

## Organizzazione dei Casi Esistenti

La cartella `casi/` contiene i casi implementati:

```
casi/
├── eredita-villa-rossi/       # Caso di avvelenamento ed eredità
├── ultima-cena/               # Omicidio in ristorante stellato
├── la-cattedra-vuota/         # Mistero accademico
├── prezzo-del-silenzio/       # Thriller investigativo
├── segreto-villa-medici/      # Caso storico
└── ultimo-brindisi/           # Cold case
```

Ogni caso ha:
- Struttura completa con tutti i file
- README.md specifico con overview e sospettati
- Manuale utente con percorso di lettura guidato
- Sistema di verifica configurato

**Usate questi casi come riferimento** quando create nuovi casi dal template.

---

## Differenze Template vs Casi Implementati

I **casi esistenti** sono molto più evoluti del template originale. Gli aggiornamenti recenti al template includono:

### File Aggiunti al Template (2026)
- ✅ `manuale-utente.md` - Presente in TUTTI i casi, essenziale per organizzazione
- ✅ `README.md` - Overview caso con tabelle sospettati e inventario
- ✅ Template specializzati - Rapporti tossicologici, balistici, forensi digitali
- ✅ Suggerimenti rinominati - Con descrittori (generico, specifico, quasi-risolutivo)

### Miglioramenti alla Struttura
- ✅ Header professionali con metadata (badge, protocolli, numero pratica)
- ✅ Note investigative in corsivo nei documenti
- ✅ Feedback dettagliato nel sistema di verifica
- ✅ Organizzazione a cluster tematici nel manuale utente
- ✅ Checkpoint temporali e stime di lettura
- ✅ Timing marks per narrazione audio

**Il template è ora allineato con le best practices dei casi reali.**

---

## Checklist di Qualità

- [ ] È possibile risolvere il caso con **solo** le informazioni fornite?
- [ ] Ci sono almeno 2 sospetti credibili oltre al colpevole?
- [ ] Le false piste sono abbastanza convincenti?
- [ ] La soluzione è sorprendente ma logica in retrospettiva?
- [ ] Tutti gli indizi hanno uno scopo o aggiungono atmosfera?
- [ ] Il caso mantiene l'interesse per 2–4 ore?

## Licenza

Questo progetto è distribuito per uso personale e ricreativo.
