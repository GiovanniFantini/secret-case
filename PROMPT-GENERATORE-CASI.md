# 🎭 GENERATORE UNIVERSALE DI CASI — SECRET CASE

> **Come usare questo prompt:**
> 1. Modifica SOLO la sezione `CONFIGURAZIONE` qui sotto (le variabili tra i commenti `<!-- INIZIO CONFIG -->` e `<!-- FINE CONFIG -->`)
> 2. Copia TUTTO questo documento in una conversazione con un LLM avanzato (Claude, GPT-4, Gemini, etc.)
> 3. L'AI genererà l'intero caso: prima il documento-master (soluzione), poi tutti i documenti investigativi, le prove, e i file di sistema
> 4. Ogni file sarà un markdown autonomo, coerente con tutti gli altri
>
> **Non modificare** le Parti 1-8: contengono le regole del sistema Secret Case, i template, e le istruzioni di generazione. Sono universali.

---

<!-- INIZIO CONFIG -->

## ⚙️ CONFIGURAZIONE DEL CASO

Modifica le variabili qui sotto per personalizzare il caso. Le variabili obbligatorie sono marcate con `*`. Le opzionali, se lasciate vuote, verranno generate automaticamente dall'AI.

```yaml
# ═══════════════════════════════════════════════════════
# IDENTITÀ DEL CASO
# ═══════════════════════════════════════════════════════

TITOLO_CASO*:        ""
# Nome del caso. Idealmente evocativo, con possibile doppio significato.
# Esempi: "La Notte delle Maschere", "Il Prezzo del Silenzio", "La Cattedra Vuota"

SOTTOTITOLO:         ""
# Opzionale. Tagline o secondo significato del titolo.
# Esempio: "Dietro ogni maschera, un segreto. Dietro un segreto, un omicidio."

SLUG_CARTELLA*:      ""
# Nome della cartella del caso (minuscolo, trattini, no spazi).
# Esempio: "notte-delle-maschere", "prezzo-del-silenzio"

# ═══════════════════════════════════════════════════════
# DIFFICOLTÀ (scala automatica sospetti, documenti, indizi)
# ═══════════════════════════════════════════════════════

DIFFICOLTA*:         3
# Numero da 1 a 5. Determina automaticamente:
#   1 ⭐           → 3-5 sospetti, 12-20 documenti, 1-1.5 ore
#   2 ⭐⭐         → 4-9 sospetti, 16-30 documenti, 1.5-2.5 ore
#   3 ⭐⭐⭐       → 5-7 sospetti, 25-35 documenti, 2-3.5 ore
#   4 ⭐⭐⭐⭐     → 6-8 sospetti, 35-55 documenti, 3-5 ore
#   5 ⭐⭐⭐⭐⭐   → 8-10 sospetti, 55-75+ documenti, 4-6 ore

# ═══════════════════════════════════════════════════════
# AMBIENTAZIONE
# ═══════════════════════════════════════════════════════

AMBIENTAZIONE_CITTA*:    ""
# Città o paese reale italiano. Usare luoghi con identità forte.
# Esempi: "Sanremo", "Merate (LC)", "Torino", "Bologna"

AMBIENTAZIONE_REGIONE*:  ""
# Regione italiana.
# Esempi: "Liguria", "Lombardia", "Piemonte", "Emilia-Romagna"

LUOGO_CRIMINE*:      ""
# Luogo specifico (inventato ma verosimile) dove avviene il crimine.
# Esempi: "Grand Hotel Riviera Palace", "Facoltà di Giurisprudenza", "Villa Tessari"

EPOCA*:              ""
# Periodo temporale degli eventi.
# Esempi: "Febbraio 2026", "Giugno 2024", "Gennaio 2025"

# ═══════════════════════════════════════════════════════
# TONO E TEMA
# ═══════════════════════════════════════════════════════

TONO*:               ""
# Atmosfera narrativa del caso. 2-3 riferimenti aiutano l'AI.
# Esempi:
#   "Noir lombardo. Nebbia, capannoni, silenzio borghese. Gomorra incontra Knives Out."
#   "Thriller accademico claustrofobico. Corridoi di marmo, sussurri, potere invisibile."
#   "Giallo mediterraneo elegante. Riviera ligure, gala di beneficenza, glamour e ricatti."
#   "Noir industriale nordico. Pioggia, fabbriche dismesse, segreti di famiglia."
#   "Crime psicologico intimista. Stanze chiuse, relazioni tossiche, tensione crescente."

TEMA_PRINCIPALE*:    ""
# Il tema centrale che attraversa il caso e ogni personaggio.
# Esempi: "maschere sociali", "potere accademico e omertà", "il prezzo del silenzio",
#          "eredità avvelenate", "rispettabilità e corruzione", "vendetta e giustizia"

CONTESTO_SOCIALE*:   ""
# L'ambiente sociale in cui si muovono i personaggi.
# Esempi: "alta borghesia industriale brianzola", "mondo universitario italiano",
#          "jet-set della riviera ligure", "borghesia torinese farmaceutica"

# ═══════════════════════════════════════════════════════
# TIPO DI CRIMINE
# ═══════════════════════════════════════════════════════

TIPO_CRIMINE*:       ""
# Scegliere un archetipo O descrivere liberamente.
#
# ARCHETIPI PREDEFINITI:
#   "INCIDENTE_SIMULATO"      → Omicidio mascherato da incidente (caduta, incendio,
#                                annegamento, incidente stradale, folgorazione)
#   "SUICIDIO_INSCENATO"      → Omicidio fatto sembrare suicidio (arma, impiccagione,
#                                overdose, salto nel vuoto)
#   "AVVELENAMENTO"           → Morte per sostanza tossica (veleno nel cibo/bevanda,
#                                farmaco, sostanza chimica, gas, iniezione)
#   "MORTE_NATURALE_INDOTTA"  → Omicidio che sfrutta/simula una condizione medica
#                                preesistente (infarto indotto, shock anafilattico
#                                provocato, overdose di farmaco abituale)
#   "OMICIDIO_PREMEDITATO"    → Omicidio diretto con occultamento prove (arma da fuoco,
#                                arma bianca, strangolamento, corpo contundente)
#   "COLD_CASE"               → Caso irrisolto riaperto da nuove prove o confessione
#
# PERSONALIZZATO:
#   Scrivere una descrizione libera del tipo di crimine desiderato.
#   Esempio: "Omicidio per iniezione di succinilcolina mascherato da arresto cardiaco"

# ═══════════════════════════════════════════════════════
# SPUNTI CREATIVI (tutti opzionali — se vuoti, l'AI inventa)
# ═══════════════════════════════════════════════════════

VITTIMA_SPUNTO:      ""
# Breve idea sulla vittima. Se vuoto, l'AI crea un profilo originale.
# Esempi:
#   "Imprenditrice di successo con segreti ambientali"
#   "Magnate alberghiero odiato da tutti"
#   "Professore universitario carismatico e predatore"
#   "Giornalista investigativo scomodo"
#   ""  ← lasciare vuoto per generazione automatica

COLPEVOLE_SPUNTO:    ""
# Breve idea sul colpevole. Se vuoto, l'AI sceglie.
# Esempi:
#   "La persona più insospettabile del gruppo"
#   "Qualcuno che la vittima considerava fidato"
#   "Un personaggio 'invisibile' che tutti sottovalutano"
#   ""  ← lasciare vuoto per generazione automatica

DETTAGLIO_RISOLUTIVO_SPUNTO: ""
# Tipo di "singolo dettaglio" che inchioda il colpevole. Se vuoto, l'AI inventa.
# Esempi:
#   "Connessione Wi-Fi automatica del telefono"
#   "Riflesso in una foto sullo sfondo"
#   "Orario di un pagamento elettronico"
#   "Dato GPS nascosto nei metadata di una foto"
#   "Errore in una prescrizione medica"
#   ""  ← lasciare vuoto per generazione automatica

COMPLICE_INCONSAPEVOLE: ""
# Se il caso prevede un complice inconsapevole (consigliato per difficoltà 4-5).
# Esempi:
#   "Un medico che rivela involontariamente un segreto clinico"
#   "Un amico che fornisce un alibi falso senza saperlo"
#   ""  ← lasciare vuoto oppure "NO" per non includerlo

# ═══════════════════════════════════════════════════════
# OVERRIDE MANUALI (sovrascrivono l'auto-scaling)
# ═══════════════════════════════════════════════════════

NUM_SOSPETTI_OVERRIDE:    ""
# Lasciare vuoto per auto-scaling da DIFFICOLTA. Oppure un numero (es: "6").

NUM_DOMANDE_VERIFICA:     ""
# Lasciare vuoto per default (3 per diff 1-3, 4 per diff 4-5).
# Valori: "3" o "4". Il 4° è tipicamente "Chi è il complice inconsapevole?"

# ═══════════════════════════════════════════════════════
# NOTE EXTRA
# ═══════════════════════════════════════════════════════

NOTE_EXTRA:          ""
# Campo libero per requisiti aggiuntivi, vincoli, ispirazioni, richieste speciali.
# Esempi:
#   "Ispirato al caso Caffaro-Brescia per la contaminazione ambientale"
#   "Voglio almeno un personaggio straniero tra i sospetti"
#   "Il caso deve avere un forte sottotesto femminista"
#   "Nessun movente finanziario — voglio moventi puramente emotivi"
#   "Includere un elemento soprannaturale apparente che si rivela razionale"
```

<!-- FINE CONFIG -->

---

# PARTE 1: CONTESTO SISTEMA — SECRET CASE

Stai generando un caso per il sistema **Secret Case**, un'applicazione web che renderizza documenti markdown in stile grafico realistico (email come Gmail, rapporti polizia con timbri, chat come WhatsApp, estratti conto bancari, articoli di giornale con masthead, etc.).

Il gioco è cooperativo per **1-4 giocatori**, senza bisogno di un Game Master. I giocatori leggono i documenti, collegano gli indizi, e risolvono il caso rispondendo a domande di verifica. Possono usare suggerimenti progressivi se bloccati.

## 1.1 Struttura Cartelle

Ogni caso usa questa struttura:

```
casi/{SLUG_CARTELLA}/
├── README.md                          ← Presentazione del caso SENZA spoiler
├── istruzioni-giocatori.md            ← Regole del gioco e come procedere
├── manuale-utente.md                  ← Guida per eventuale Game Master
├── albero-decisionale.md              ← Sistema verifica con domande (SPOILER)
├── documento-master.md                ← Soluzione completa del caso (SPOILER)
├── script-narrazione-finale.md        ← Narrazione finale 12-15 min (SPOILER)
├── documenti-investigativi/           ← Rapporti ufficiali, interrogatori, analisi
│   ├── 01-rapporto-polizia-iniziale.md
│   ├── 02-rapporto-medico-legale.md
│   ├── 03-verbale-interrogatorio-[nome].md
│   ├── ...
│   ├── analisi-digitale-forense.md
│   ├── timeline-eventi.md
│   ├── mappa-scena-crimine.md
│   └── lista-prove-fisiche.md
├── prove-documentali/                 ← Email, chat, finanze, stampa, social, foto
│   ├── 01-email-messaggi.md
│   ├── 02-chat-whatsapp.md
│   ├── 03-estratti-conto.md
│   ├── 04-articoli-giornale.md
│   ├── 05-contratti-documenti-legali.md
│   ├── 06-tabulati-telefonici.md
│   ├── 07-foto-scena-crimine.md
│   ├── 08-post-social-media.md
│   ├── 09-diario-personale.md
│   └── ...
├── elementi-digitali/                 ← Verifica soluzione + elementi tech
│   ├── sistema-verifica-soluzione.md
│   ├── analisi-gps-telefoni.md        (opzionale)
│   ├── trascrizioni-audio.md          (opzionale)
│   └── ...
└── suggerimenti/                      ← Hint progressivi a 3 livelli
    ├── livello-1-generico.md
    ├── livello-2-specifico.md
    └── livello-3-quasi-risolutivo.md
```

## 1.2 Convenzioni di Naming

- **Minuscolo**: nomi file sempre in minuscolo
- **Trattini**: separare le parole con trattini (non underscore nei nomi file)
- **Numerazione**: i file nelle sottocartelle possono avere prefisso numerico (`01-`, `02-`, etc.) per ordinamento logico, oppure nomi descrittivi
- **Nomi parlanti**: il nome file deve far capire il contenuto (es. `verbale-interrogatorio-marco-rossi.md`, `estratti-conto-bancario.md`)
- **Un file per verbale**: ogni sospetto ha il suo file di interrogatorio separato
- **Documenti compositi ammessi**: prove dello stesso tipo possono essere raggruppate (es: tutte le email in `email-messaggi.md`, tutti gli articoli in `articoli-giornale.md`) OPPURE separate in file singoli per casi complessi

## 1.3 Formato Documenti

Ogni documento deve:
- Avere un **header markdown realistico** per il tipo (intestazione Questura per rapporti polizia, header email per email, bubble style per chat, layout giornalistico per articoli)
- Contenere **metadata coerenti** (date, protocolli, numeri di riferimento, firme, timbri testuali)
- Usare **terminologia tecnica appropriata** (medica, legale, forense, giornalistica, bancaria)
- Essere **autocontenuto** (leggibile indipendentemente) ma collegato agli altri per gli indizi
- Avere **lunghezza realistica** (un verbale di interrogatorio è 3-5 pagine; un post-it è 5 righe; un'autopsia è 4-8 pagine; un articolo di giornale è 1-2 pagine)

## 1.4 Tipologie di Documento

Il sistema Secret Case supporta queste tipologie con rendering grafico dedicato:

| Tipo | Stile Grafico | Contenuto Tipico |
|------|--------------|------------------|
| Rapporti polizia | Intestazione Questura/Carabinieri, badge, timbro RISERVATO | Rapporto iniziale, sopralluogo, verbali interrogatorio |
| Rapporti medici | Layout clinico, terminologia medica | Autopsia, analisi tossicologica, cartelle cliniche |
| Analisi forensi | Stile tecnico/scientifico, tabelle dati | Tracce biologiche, analisi digitale, balistica, impronte |
| Email | Header Gmail-style con Da/A/Oggetto/Data, quote, firma | Corrispondenza privata e professionale |
| Chat | Bubble WhatsApp/Telegram con timestamp per messaggio | Conversazioni informali, gruppi famiglia, chat segrete |
| Tabulati telefonici | Tabelle con orari, numeri, durate, celle | Chiamate, SMS, localizzazione celle |
| Estratti conto | Tabelle bancarie, movimenti dare/avere, saldi | Conti correnti, bonifici sospetti, pagamenti |
| Documenti legali | Atti notarili, clausole numerate, firme | Testamenti, contratti, statuti, denunce |
| Articoli stampa | Masthead testata, byline, layout giornalistico | Cronaca, approfondimenti, articoli d'archivio |
| Social media | Post Instagram/Facebook/LinkedIn/X con engagement | Profili pubblici, post, commenti, stories |
| Foto | Schede descrittive con metadata (data/luogo/dispositivo) | Scena del crimine, sorveglianza, rilievi |
| Diari | Carta invecchiata, scrittura personale, date | Pagine di diario, appunti personali, agende |
| Mappe | Planimetrie, cartine con annotazioni | Scena del crimine, percorsi, disposizione luoghi |
| Report | Stile report aziendale/peritale | Perizie tecniche, audit, inventari |
| Lettere | Carta intestata o scrittura a mano | Corrispondenza formale/informale |
| Note | Post-it, foglietti, appunti rapidi | Promemoria, numeri di telefono, note sparse |

---

# PARTE 2: REGOLE DI AUTO-SCALING PER DIFFICOLTÀ

In base al valore di `DIFFICOLTA` configurato, applica automaticamente questi parametri (a meno che non siano sovrascrittti da `NUM_SOSPETTI_OVERRIDE` o `NUM_DOMANDE_VERIFICA`):

## 2.1 Tabella di Scaling

| Parametro | ⭐ (1) | ⭐⭐ (2) | ⭐⭐⭐ (3) | ⭐⭐⭐⭐ (4) | ⭐⭐⭐⭐⭐ (5) |
|-----------|--------|----------|------------|--------------|----------------|
| **Sospetti** | 3-5 | 4-9 | 5-7 | 6-8 | 8-10 |
| **Documenti totali** (esclusi file sistema) | 12-20 | 16-30 | 25-35 | 35-55 | 55-75+ |
| **Durata stimata** | 1-1.5h | 1.5-2.5h | 2-3.5h | 3-5h | 4-6h |
| **Domande verifica** | 3 | 3 | 3 | 3-4 | 4 |
| **Indizi diretti** | 35% | 30% | 25% | 20% | 15% |
| **Indizi da collegare** | 30% | 35% | 35% | 35% | 35% |
| **Indizi di eliminazione** | 15% | 15% | 20% | 25% | 25% |
| **Rumore narrativo** | 10% | 10% | 10% | 12% | 15% |
| **Red herring** | 10% | 10% | 10% | 8% | 10% |
| **NPC (non sospetti)** | 2-3 | 3-5 | 4-6 | 5-8 | 8-12 |
| **Crimini paralleli** | 0 | 0-1 | 1 | 1-2 | 2-3 |
| **Vittima moralmente grigia** | No | Possibile | Sì | Sì | Sì |

> **Nota**: i range sono linee guida, non vincoli rigidi. Un caso di difficoltà 2 può avere 9 sospetti se gli alibi sono facilmente verificabili. La difficoltà è determinata dalla COMPLESSITÀ DEDUTTIVA (quanti indizi servono per risolvere, quanto sono nascosti), non solo dal volume. Usa `NUM_SOSPETTI_OVERRIDE` per forzare un numero specifico.

## 2.2 Distribuzione Documenti per Sottocartella

| Sottocartella | ⭐ (1) | ⭐⭐ (2) | ⭐⭐⭐ (3) | ⭐⭐⭐⭐ (4) | ⭐⭐⭐⭐⭐ (5) |
|---------------|--------|----------|------------|--------------|----------------|
| **documenti-investigativi/** | 6-10 | 8-16 | 14-18 | 18-28 | 28-40 |
| — Rapporto polizia iniziale | 1 | 1 | 1 | 1 | 1 |
| — Rapporto medico-legale/autopsia | 1 | 1-2 | 1-2 | 2-3 | 3 |
| — Verbali interrogatorio | 3-5 | 4-9 | 5-7 | 6-8 | 8-10 |
| — Analisi forensi | 1 | 1-2 | 2-3 | 3-6 | 6-10 |
| — Timeline/mappa/prove fisiche | 0-2 | 1-3 | 3-4 | 4-6 | 6-10 |
| **prove-documentali/** | 4-7 | 6-12 | 9-14 | 14-22 | 22-30 |
| — Email/corrispondenza | 1 | 1-2 | 2-3 | 3-6 | 6+ |
| — Chat/messaggi | 0-1 | 1 | 1-2 | 2-5 | 5+ |
| — Estratti conto/finanze | 0-1 | 1 | 1-2 | 2-5 | 5+ |
| — Articoli stampa | 1 | 1-2 | 2-3 | 3-5 | 5+ |
| — Documenti legali | 0-1 | 1 | 1-2 | 2-4 | 4-6 |
| — Tabulati telefonici | 0 | 0-1 | 1-2 | 2-4 | 4+ |
| — Social/foto/diari/altro | 1-2 | 1-3 | 2-4 | 3-5 | 5-8 |
| **elementi-digitali/** | 1 | 1-2 | 1-3 | 2-5 | 3-5 |
| — Sistema verifica soluzione | 1 | 1 | 1 | 1 | 1 |
| — GPS/audio/QR/siti/altro | 0 | 0-1 | 0-2 | 1-4 | 2-4 |
| **suggerimenti/** | 3 | 3 | 3 | 3 | 3 |

## 2.3 Regole per Livello di Difficoltà

### ⭐ Difficoltà 1 — Accessibile
- La prima lettura dell'autopsia/rapporto medico chiarisce SUBITO che non è morte naturale/incidente
- Il colpevole ha il movente PIÙ evidente tra i sospetti
- Gli alibi dei sospetti innocenti sono verificabili con un solo documento ciascuno
- Il dettaglio risolutivo è trovabile in UN SINGOLO documento (non serve incrociare)
- Nessun crimine parallelo: tutti mentono solo per proteggere segreti personali minori
- La vittima è una persona sostanzialmente innocente (empatia immediata)

### ⭐⭐ Difficoltà 2 — Intermedia
- L'autopsia chiarisce che non è morte naturale entro i primi 2-3 documenti
- Il colpevole ha un movente forte ma non il più ovvio
- 1-2 sospetti hanno alibi solidi, gli altri hanno piccole incongruenze
- Il dettaglio risolutivo richiede il collegamento di 2 documenti
- Possibile 1 crimine parallelo minore (es: infedeltà, debiti nascosti)
- La vittima può avere difetti ma resta fondamentalmente simpatica

### ⭐⭐⭐ Difficoltà 3 — Sfidante
- L'autopsia lascia dubbi: morte naturale o crimine? Serve almeno 1 altro documento per confermare
- TUTTI i sospetti hanno movente credibile
- Ogni sospetto ha almeno un'incongruenza nell'alibi
- Il dettaglio risolutivo richiede il collegamento di 2 documenti in contesti diversi
- 1 crimine parallelo (i sospetti mentono per coprire il PROPRIO segreto/crimine, non l'omicidio)
- La vittima è moralmente ambigua (i giocatori devono superare il bias "vittima = buona persona")
- Il colpevole non è il sospetto più ovvio

### ⭐⭐⭐⭐ Difficoltà 4 — Impegnativa
- Tutto quanto sopra, più:
- Il colpevole è una persona "invisibile" — qualcuno che il giocatore tende a sottovalutare
- Il verbale del colpevole è VOLUTAMENTE il meno interessante/drammatico
- 1-2 crimini paralleli che generano rumore (frode, corruzione, ricatto, sfruttamento)
- Possibile complice inconsapevole (qualcuno che ha facilitato il crimine senza saperlo)
- 3 o 4 domande di verifica
- Il percorso di eliminazione è: N sospetti → 3-4 → 2 → 1
- Almeno 2 false piste ben costruite che resistono a un'analisi superficiale

### ⭐⭐⭐⭐⭐ Difficoltà 5 — Esperta
- Tutto quanto sopra al massimo grado, più:
- **Il giocatore non cerca "chi è colpevole" — cerca "chi NON lo è." L'eliminazione è più difficile dell'identificazione.**
- Il colpevole è la persona che il giocatore DIMENTICA di aver letto
- 2-3 crimini paralleli sovrapposti; ogni sospetto mente per coprire un crimine diverso
- Il "singolo dettaglio" è nascosto in un contesto tecnico/burocratico noioso
- 4 domande di verifica obbligatorie (chi / complice / perché / come)
- 75+ documenti: il volume di informazione richiede METODO, non intuizione
- Il percorso è: 8-10 sospetti → 4 → 2 → 1 (ultimo passaggio richiede il singolo dettaglio)

---

# PARTE 3: ARCHITETTURA NARRATIVA DEL CASO

## 3.1 Principio Fondamentale

> In Secret Case, ogni personaggio indossa una **maschera sociale** che nasconde una **realtà**. L'investigazione consiste nello strappare le maschere una per una, scoprendo che dietro ognuna c'è un segreto — ma solo dietro una di esse c'è un omicidio.

## 3.2 Struttura Obbligatoria di Ogni Sospetto

Per OGNI sospetto del caso, definisci:

| Campo | Descrizione |
|-------|-------------|
| **Nome e età** | Nome completo italiano realistico, età |
| **Ruolo** | Il suo posto nel mondo del caso (professione, relazione) |
| **Maschera sociale** | Come appare agli altri, la sua immagine pubblica |
| **Realtà nascosta** | Cosa cela veramente, i suoi segreti |
| **Movente** | Perché avrebbe voluto morta la vittima (DEVE essere credibile) |
| **Alibi dichiarato** | Dove dice di essere stato, chi conferma |
| **Cosa nasconde** | Perché il suo alibi ha buchi o incongruenze |
| **Alibi reale / Verità** | Dove era davvero e cosa faceva |
| **Ruolo reale** | **COLPEVOLE** / **INNOCENTE** / **COMPLICE INCONSAPEVOLE** |

**Regole per i ruoli:**
- Esattamente **1 COLPEVOLE**
- Al massimo **1 COMPLICE INCONSAPEVOLE** (consigliato per difficoltà 4+)
- Tutti gli altri **INNOCENTI** (ma con segreti propri che li fanno sembrare colpevoli)

## 3.3 Il "Singolo Dettaglio" — Design dell'Indizio Risolutivo

Per difficoltà 3+, il caso DEVE avere un "singolo dettaglio" cruciale che separa il colpevole dai candidati finali. Questo dettaglio DEVE rispettare TUTTE queste regole:

- ✅ **Presente** in un documento accessibile fin dall'inizio (non sbloccato dopo)
- ✅ **Non evidenziato** — non grassettato, non sottolineato, non segnalato in alcun modo
- ✅ **In contesto "noioso"** — inserito in un log tecnico, inventario burocratico, tabella lunga, allegato
- ✅ **Comprensibile** senza conoscenze specialistiche (chiunque deve poterlo capire)
- ✅ **Verificabile** incrociando **2 documenti separati** (nessun documento singolo basta)
- ✅ **Conclusivo** una volta trovato (non lascia spazio a interpretazione)
- ❌ **MAI** basato su fortuna o intuizione — deve essere trovabile con metodo sistematico
- ❌ **MAI** menzionato in altri documenti che creerebbero un collegamento troppo diretto

## 3.4 Il Flusso Investigativo (4 Fasi)

Ogni caso, indipendentemente dalla difficoltà, segue questa struttura logica:

```
Fase 1: "CHE COS'È SUCCESSO?" (primi 20-30% del tempo)
├── Documenti: rapporto polizia, autopsia, scena crimine
├── Obiettivo: capire che NON è morte naturale/incidente/suicidio
└── Il giocatore deve avere un "momento aha" che apre l'indagine

Fase 2: "CHI AVEVA MOTIVO?" (30-40% del tempo)
├── Documenti: interrogatori, email, finanze, social, chat
├── Obiettivo: scoprire che MOLTI avevano motivo
└── Le maschere sociali cadono una per una

Fase 3: "CHI AVEVA OPPORTUNITÀ?" (20-25% del tempo)
├── Documenti: timeline, telecamere, celle telefoniche, badge, scontrini
├── Obiettivo: ridurre il campo ai candidati con opportunità reale
└── Eliminazione progressiva

Fase 4: "CHI HA FATTO DAVVERO?" (10-20% del tempo)
├── Documenti: il singolo dettaglio (per diff 3+), conferme incrociate
├── Obiettivo: identificare il colpevole con certezza
└── Il momento della soluzione
```

## 3.5 Crimini Paralleli (difficoltà 3+)

Per difficoltà 3 e superiori, il caso DEVE contenere crimini paralleli. Questi servono a:
- Far mentire i sospetti per coprire il PROPRIO crimine (non l'omicidio)
- Creare "rumore" che confonde il giocatore
- Rendere ogni sospetto credibile come omicida (perché nasconde qualcosa davvero)

Tipologie di crimini paralleli consigliati:
- Frode finanziaria / Riciclaggio
- Corruzione / Tangenti
- Sfruttamento lavorativo
- Falsificazione documenti
- Infedeltà coniugale / Relazioni segrete
- Evasione fiscale
- Violazione di segreti professionali
- Ricatto / Estorsione

## 3.6 La Vittima

### Difficoltà 1-2: Vittima Tradizionale
La vittima è una persona sostanzialmente buona. I giocatori provano empatia immediata. I sospetti hanno ragioni personali per volerla morta, ma la vittima non li ha provocati con azioni criminali.

### Difficoltà 3+: Vittima Moralmente Grigia
La vittima NON è innocente. Ha commesso azioni sbagliate, ha fatto del male, ha segreti oscuri. I giocatori devono superare il bias cognitivo "vittima = buona persona" per risolvere il caso. Questo rende il caso moralmente complesso e più soddisfacente.

**Regola**: anche quando la vittima è moralmente grigia, l'omicidio non è MAI giustificato narrativamente. Il caso non deve avere una "morale" che assolve l'assassino.

## 3.7 Il Colpevole

Regole per la costruzione del colpevole:
- **NON** è il sospetto più ovvio (mai il marito geloso, mai il socio avido — a meno che l'ovvietà sia un triple bluff per difficoltà 5)
- **DEVE** evocare un minimo di empatia (ha agito per sopravvivenza, disperazione, o giustizia distorta — non per pura malvagità)
- Il suo verbale di interrogatorio contiene **almeno un dettaglio** che, riletto dopo la soluzione, assume un significato completamente diverso (ricontestualizzazione)
- Per difficoltà 4+: il verbale del colpevole è **volutamente il meno drammatico e più breve** — per renderlo "invisibile" nel mare dei documenti

## 3.8 NPC (Personaggi Non Sospetti)

Ogni caso ha personaggi che NON sono sospetti ma forniscono:
- Testimonianze che completano la timeline
- Contesto sociale/ambientale
- Informazioni che diventano cruciali a posteriori
- Conferme o smentite degli alibi dei sospetti

Gli NPC non hanno movente per l'omicidio. Appaiono nei verbali, nelle email, nei social — ma non come sospetti.

---

# PARTE 4: TEMPLATE DEI FILE DI SISTEMA

## 4.1 README.md — Presentazione Senza Spoiler

```markdown
# {TITOLO_CASO}

> {Frase d'impatto che cattura l'atmosfera — 1-2 righe, evocativa, SENZA spoiler}

---

## 📋 Scheda Tecnica

| | |
|---|---|
| **Ambientazione** | {Luogo}, {Regione} |
| **Epoca** | {Periodo temporale} |
| **Giocatori** | 1-4 |
| **Difficoltà** | {Stelle} {Etichetta} |
| **Durata stimata** | {Range ore} ore |
| **Sospettati** | {Numero} |
| **Documenti** | {Numero}+ |

## 🎯 Tipo di Sfida

{Descrizione della sfida SENZA rivelare il colpevole o il metodo — 3-5 righe.
Cosa rende unico questo caso? Perché è diverso dagli altri?}

## 📖 L'Incipit

{Narrazione atmosferica di 300-500 parole che introduce:
- L'ambientazione (dove, quando, che atmosfera)
- La vittima (chi era, come appariva — solo la maschera pubblica)
- La scoperta del crimine (cosa è successo, chi l'ha trovato)
- Il mistero (perché non è chiaro chi/come/perché)

NESSUN SPOILER. Il lettore deve sentire curiosità, non conoscere risposte.}

## 🎮 Come Giocare

1. Leggete prima le **Istruzioni Giocatori** per capire le regole
2. Iniziate dal **Rapporto di Polizia Iniziale** nella cartella `documenti-investigativi/`
3. Procedete liberamente tra i documenti, prendendo appunti
4. Quando pensate di avere la soluzione, aprite `elementi-digitali/sistema-verifica-soluzione.md`
5. Se siete bloccati, consultate i **Suggerimenti** (nella cartella `suggerimenti/`) — partendo dal Livello 1
6. Dopo la verifica, leggete lo **Script di Narrazione Finale** per la rivelazione completa

## 📁 Contenuti del Caso

| Cartella | Contenuto | Quantità |
|----------|-----------|----------|
| `documenti-investigativi/` | Rapporti ufficiali, interrogatori, analisi forensi | {N} file |
| `prove-documentali/` | Email, chat, finanze, stampa, social, foto | {N} file |
| `elementi-digitali/` | Sistema di verifica + elementi digitali | {N} file |
| `suggerimenti/` | 3 livelli di aiuto progressivo | 3 file |

## ⚠️ Attenzione agli Spoiler!

I seguenti file contengono la **soluzione completa** e vanno aperti SOLO dopo aver tentato di risolvere il caso:
- `documento-master.md` — Soluzione investigativa completa
- `albero-decisionale.md` — Sistema di verifica con risposte
- `script-narrazione-finale.md` — Narrazione drammatica della soluzione
```

## 4.2 documento-master.md — Soluzione Completa

Genera il documento-master seguendo ESATTAMENTE la struttura del template del sistema (15 sezioni):

1. **Informazioni Generali** — Tabella con: titolo, ambientazione, data eventi, scoperta crimine, tipo crimine, arma/metodo, ora morte, contesto, durata gioco, difficoltà, giocatori
2. **Profilo della Vittima** — Dati personali, carriera, personalità, motivo presenza nel luogo, condizione medica rilevante
3. **Circostanze della Scoperta** — Dove, quando, chi ha trovato, stato della scena, prima ricostruzione
4. **Profili dei Sospettati** — Per ognuno: ruolo, biografia, relazione con vittima, movente apparente, alibi dichiarato, cosa nasconde, alibi reale/verità, ruolo reale nel caso
5. **La Soluzione Completa** — 5.1 Il colpevole, 5.2 Il movente reale, 5.3 Il metodo del crimine (preparazione → esecuzione → dopo il crimine → errore fatale)
6. **False Piste Dettagliate** — Per ogni falsa pista: sospetto coinvolto, perché sembra credibile, perché è sbagliata, prove che la scagionano
7. **Risposte alla Verifica** — Per ogni domanda: opzioni con feedback per risposta corretta e per ogni risposta errata
8. **Sistema di Punteggio** — Tabella punteggio → valutazione → messaggio giocatori
9. **Distribuzione degli Indizi** — Tabella generale (% per tipo) + mappa indizi per documento
10. **Percorso di Deduzione Ideale** — 4 fasi con documenti e conclusioni attese
11. **Errori Comuni dei Giocatori** — 3-5 errori prevedibili con spiegazione e correzione
12. **Note per la Preparazione del Game Master** — Materiali, checkpoint, quando dare suggerimenti
13. **Difficoltà e Bilanciamento** — Valutazione, elementi che aumentano/diminuiscono la difficoltà
14. **Varianti e Adattamenti** — Versione semplificata, versione difficile, adattamenti per numero giocatori
15. **Versione e Changelog**

## 4.3 albero-decisionale.md — Sistema di Verifica

Struttura:
- Header spoiler
- Spiegazione del funzionamento (3 o 4 domande, punteggio)
- Diagramma di flusso ASCII
- Per ogni domanda:
  - Testo della domanda
  - Opzioni (una per sospetto/movente/metodo)
  - Feedback in tag `<details>` per ogni opzione (giusto e sbagliato)
  - Punteggio
- Calcolo punteggio finale e grado investigatore

**Gradi investigatore standard:**

Per 3 domande:
| Punti | Grado | Messaggio |
|-------|-------|-----------|
| 3/3 | ⭐⭐⭐ Detective Maestro | "Indagine impeccabile. Nessun dettaglio vi è sfuggito." |
| 2/3 | ⭐⭐ Investigatore Esperto | "Ottimo lavoro, ma un elemento vi è sfuggito." |
| 1/3 | ⭐ Detective in Erba | "Siete sulla strada giusta, ma serve più attenzione ai dettagli." |
| 0/3 | — Caso Irrisolto | "Il colpevole resta in libertà. Riesaminate le prove." |

Per 4 domande:
| Punti | Grado | Messaggio |
|-------|-------|-----------|
| 4/4 | ⭐⭐⭐⭐ Detective Supremo | "{Messaggio tematico personalizzato}" |
| 3/4 | ⭐⭐⭐ Investigatore Esperto | "Quasi perfetto. Un dettaglio vi è sfuggito." |
| 2/4 | ⭐⭐ Investigatore Competente | "Buon lavoro, ma la trama era più fitta di quanto pensavate." |
| 1/4 | ⭐ Detective in Erba | "Le apparenze vi hanno ingannato." |
| 0/4 | — Caso Irrisolto | "{Messaggio tematico personalizzato}" |

I messaggi dei gradi estremi (massimo e minimo) devono essere **tematici** — collegati al tema del caso.

## 4.4 script-narrazione-finale.md — Narrazione 12-15 Minuti

Struttura obbligatoria in 6 sezioni:

| Sezione | Durata | Tono | Contenuto |
|---------|--------|------|-----------|
| 1. L'Apertura | 2-3 min | Solenne, evocativo | Scena atmosferica, luogo e momento del crimine |
| 2. La Vittima | 2-3 min | Da reverenziale a cupo | Chi era, la maschera pubblica, poi il lato oscuro |
| 3. I Sospetti | 3-4 min | Ritmato, galleria ritratti | Ogni sospetto presentato e scagionato |
| 4. Le False Piste | 2-3 min | Riflessivo, analitico | Smontare le teorie sbagliate con rispetto |
| 5. La Verità | 4-5 min | Drammatico, crescendo | Ritratto colpevole → storia nascosta → pianificazione → il crimine → le prove |
| 6. Epilogo | 2-3 min | Calmo, malinconico | Arresto, conseguenze, riflessione tematica |

**Indicazioni vocali**: inserire `[tra parentesi quadre]` suggerimenti di tono, pause, ritmo per ogni passaggio.

**Regola finale**: lo script DEVE terminare con "Il caso è chiuso." preceduto da una pausa lunga.

## 4.5 istruzioni-giocatori.md

Contenuto standard (adattare numeri al caso specifico):
- Cosa serve per giocare
- Regole base (leggere documenti, prendere appunti, discutere)
- Ordine consigliato (iniziare dal rapporto polizia)
- Sistema di suggerimenti (quando usarli, come funzionano)
- Sistema di verifica (le 3-4 domande)
- Consigli pratici (non saltare documenti, controllare le date, incrociare testimonianze)

## 4.6 manuale-utente.md

Contenuto standard:
- Preparazione (digitale o stampa)
- Flusso di gioco
- Ruolo del Game Master (opzionale)
- Come gestire i suggerimenti
- Troubleshooting (giocatori bloccati, tempi lunghi)
- Varianti (solitario, competitivo, con timer)

## 4.7 suggerimenti/ — Sistema Hint a 3 Livelli

| File | Quando usarlo | Cosa rivela |
|------|---------------|-------------|
| `livello-1-generico.md` | Dopo 30-40% del tempo stimato o 1 risposta errata | Orientamento generale: su COSA concentrarsi (accessi, moventi, timeline) — senza indicare CHI |
| `livello-2-specifico.md` | Dopo 50-60% del tempo o 2 risposte errate | Direzione precisa: QUALE tipo di prova cercare e DOVE (es: "controllate i log digitali", "guardate chi poteva entrare senza badge") |
| `livello-3-quasi-risolutivo.md` | Dopo 70%+ del tempo o 3 risposte errate | Quasi la soluzione: indica il profilo del colpevole senza nominarlo, poi guida al dettaglio risolutivo specifico |

**Regola**: il livello 3 NON dice mai il nome del colpevole direttamente, ma lo descrive in modo che sia identificabile con certezza.

## 4.8 sistema-verifica-soluzione.md (in elementi-digitali/)

Versione interattiva dell'albero decisionale, con le stesse domande e feedback ma formattata per l'uso durante il gioco:
- Istruzioni su come usarla
- Domande una per una
- Feedback in sezioni `<details>` (il giocatore clicca solo sulla sua risposta)
- Punteggio e grado finale

---

# PARTE 5: REGOLE DI DESIGN INVARIABILI

Queste regole si applicano a TUTTI i casi, indipendentemente dalla difficoltà.

## 5.1 Coerenza Interna

- ✅ Tutte le date sono coerenti tra tutti i documenti
- ✅ Tutti gli orari della notte/giorno del crimine combaciano (un sospetto non può essere in due posti contemporaneamente)
- ✅ Le celle telefoniche sono geograficamente corrette (città diverse = celle diverse)
- ✅ I nomi dei personaggi sono scritti IDENTICAMENTE in tutti i documenti (attenzione a cognomi, titoli, soprannomi)
- ✅ I numeri di protocollo dei documenti ufficiali sono sequenziali e realistici
- ✅ Gli importi finanziari tornano tra estratti conto, fatture, e riferimenti nei verbali
- ✅ Le distanze e i tempi di percorrenza tra i luoghi sono realistici e verificabili

## 5.2 Anti-Spoiler

- ✅ Il README.md non contiene NESSUN indizio sulla soluzione
- ✅ I nomi dei file non rivelano il colpevole (mai `verbale-colpevole.md` o `prova-decisiva.md`)
- ✅ L'ordine dei file non suggerisce una gerarchia di importanza
- ✅ I documenti del colpevole non sono né i primi né gli ultimi

## 5.3 Realismo Documentale

- ✅ Ogni documento usa la terminologia tecnica corretta del settore (medico, legale, forense, bancario, giornalistico)
- ✅ I formati rispettano le convenzioni italiane (date GG/MM/AAAA, indirizzi, IBAN, codici fiscali parziali, protocolli)
- ✅ Le intestazioni sono verosimili (Questura di [Città], Ospedale [Nome realistico], Banca [Nome realistico])
- ✅ Le firme hanno nome, cognome, qualifica
- ✅ I timbri sono rappresentati testualmente (es: `[TIMBRO: QUESTURA DI IMPERIA — SQUADRA MOBILE]`)

## 5.4 Game Design

- ✅ Il caso è risolvibile SENZA suggerimenti (i suggerimenti aiutano, non sono necessari)
- ✅ Nessun documento è "inutile" — ogni file contribuisce a eliminare, confermare, o arricchire
- ✅ Gli indizi NON sono evidenziati, grassettati, o segnalati in alcun modo
- ✅ I red herring sono risolvibili — il giocatore attento può capire che sono false piste
- ✅ Le risposte sbagliate alla verifica hanno feedback che spiega PERCHÉ sono sbagliate (non solo "errato")
- ✅ Il caso non richiede conoscenze specialistiche esterne per essere risolto

## 5.5 Diversità e Originalità

Per garantire che ogni nuovo caso sia diverso dai precedenti della collezione:

- ✅ NON ripetere ambientazioni già usate (villa lago, hotel riviera, università, redazione, ristorante)
- ✅ NON ripetere metodi di omicidio già usati (avvelenamento ricino, iniezione succinilcolina, digossina nel caffè, colpo da corpo contundente con scena simulata, suicidio inscenato con arma da fuoco)
- ✅ NON ripetere il pattern "il medico ha rivelato un segreto" come meccanismo del complice inconsapevole
- ✅ Variare il genere, l'età, e il background socioeconomico del colpevole
- ✅ Variare il tipo di "singolo dettaglio" risolutivo

### Casi esistenti della collezione (per evitare ripetizioni):

| Caso | Ambientazione | Metodo Omicidio | Colpevole | Dettaglio Risolutivo |
|------|---------------|-----------------|-----------|---------------------|
| L'Eredità Avvelenata di Villa Rossi | Villa sul lago, Como | Avvelenamento ricino nel dessert | Figlia della vittima | Ordine online semi di ricino |
| La Notte delle Maschere | Grand Hotel, Sanremo | Iniezione succinilcolina | Avvocato/consulente legale | Penna-siringa modificata |
| Il Prezzo del Silenzio | Appartamento, Torino | Suicidio inscenato (arma da fuoco + sedativo) | CEO farmaceutico | Midazolam nel whisky |
| La Cattedra Vuota | Università, Bologna | Avvelenamento digossina nel caffè | Ricercatrice/dottoranda | Moka personale contaminata |
| Il Segreto di Villa Medici | Villa storica, Toscana | Da verificare | Da verificare | Da verificare |
| L'Ultimo Brindisi | Da verificare | Da verificare | Da verificare | Da verificare |
| L'Ultima Cena | Da verificare | Da verificare | Da verificare | Da verificare |

---

# PARTE 6: CHECKLIST QUALITÀ

Prima di considerare il caso completo, verifica TUTTI questi punti:

### ✏️ Coerenza Interna
- [ ] Tutte le date sono coerenti tra i documenti
- [ ] Tutti gli orari della notte del crimine combaciano
- [ ] Le celle telefoniche corrispondono alle posizioni dichiarate
- [ ] I nomi dei personaggi sono identici ovunque (nomi, cognomi, titoli)
- [ ] I numeri di protocollo sono sequenziali e realistici
- [ ] Gli importi finanziari tornano tra documenti diversi
- [ ] Le distanze/tempi di percorrenza tra i luoghi sono realistici

### 🎮 Game Design
- [ ] L'autopsia/rapporto medico chiarisce che non è morte naturale (al livello appropriato per la difficoltà)
- [ ] TUTTI i sospetti hanno un movente credibile e documentato
- [ ] TUTTI i sospetti hanno almeno un'incongruenza nell'alibi (per diff 3+)
- [ ] Il percorso di eliminazione funziona: N → metà → 2 → 1
- [ ] Il dettaglio risolutivo è presente in 2 documenti separati e NON evidenziato (per diff 3+)
- [ ] Il dettaglio risolutivo è SUFFICIENTE da solo per identificare il colpevole
- [ ] I suggerimenti livello 1-2 orientano senza rivelare; il livello 3 guida al dettaglio
- [ ] Ogni risposta errata alla verifica ha feedback specifico e educativo
- [ ] Il caso è risolvibile senza suggerimenti

### 🎭 Tema e Narrativa
- [ ] Ogni sospetto ha una "maschera sociale" chiaramente definita
- [ ] La vittima ha il giusto livello di complessità morale per la difficoltà
- [ ] Il colpevole evoca un minimo di empatia (non è un "cattivo" bidimensionale)
- [ ] Il caso ha un tono coerente con `TONO` configurato
- [ ] Lo script di narrazione finale è drammatico e soddisfacente
- [ ] Il verbale del colpevole contiene un dettaglio ricontestualizzabile

### 🔧 Tecnico
- [ ] Tutti i file sono nella cartella corretta (documenti-investigativi, prove-documentali, elementi-digitali, suggerimenti)
- [ ] I nomi file sono in minuscolo con trattini
- [ ] Ogni documento è autocontenuto (leggibile da solo)
- [ ] Il README non contiene spoiler
- [ ] La struttura cartelle è completa
- [ ] Il numero di documenti è nel range per la difficoltà selezionata

### ⚠️ Anti-Pattern da Evitare
- [ ] NON troppi sospetti con opportunità identiche (rende le prove inconcludenti)
- [ ] NON red herring troppo convincenti (frustra i giocatori — devono essere smontabili con attenzione)
- [ ] NON singolo dettaglio troppo nascosto (deve sembrare "era sotto i miei occhi", non "impossibile da trovare")
- [ ] NON verbali di interrogatorio tutti della stessa lunghezza (il colpevole deve avere quello più breve/noioso per diff 4+)
- [ ] NON indizi che richiedono conoscenze esterne specialistiche
- [ ] NON più di 2 sospetti con alibi completamente non verificabili (rende l'eliminazione impossibile)

---

# PARTE 7: ANALISI MULTI-PROSPETTIVA

Dopo aver generato il caso, verifica la qualità da 5 prospettive professionali. Per ognuna, rispondi alle domande e correggi eventuali problemi.

### 🔧 Prospettiva: Sviluppatore Software (20 anni di esperienza)
- I nomi dei file seguono le convenzioni?
- La struttura delle cartelle è corretta?
- I documenti sono autocontenuti e parsabili?
- Ci sono incoerenze di dati tra documenti (date, nomi, importi)?
- Il volume di documenti è gestibile (non ci sono file duplicati o ridondanti)?

### 🔍 Prospettiva: Criminologo
- Il metodo di omicidio è forensicamente credibile?
- Le tempistiche del crimine sono realistiche (preparazione, esecuzione, fuga)?
- Le prove forensi sono scientificamente accurate?
- Il movente è psicologicamente plausibile?
- Il comportamento post-crimine del colpevole è realistico?
- L'assenza di prove (DNA, impronte, tracce) è giustificata nel contesto?

### 📰 Prospettiva: Giornalista Investigativo
- Gli articoli di stampa hanno tempistiche realistiche (primo pezzo il giorno dopo, approfondimento dopo 2-3 giorni)?
- Le testate giornalistiche citate sono appropriate per la zona?
- I personaggi pubblici (sindaci, medici, avvocati) si comportano come farebbero nella realtà?
- La copertura mediatica è proporzionata alla gravità del caso?

### ✍️ Prospettiva: Game Designer / Scrittore
- Il flusso investigativo funziona in qualsiasi ordine di lettura?
- Il "singolo dettaglio" è nascosto abbastanza ma trovabile con metodo?
- Ci sono momenti "aha" distribuiti nel percorso (non solo alla fine)?
- Le false piste sono convincenti ma smontabili?
- Lo script di narrazione finale genera soddisfazione emotiva?
- Il verbale del colpevole ha il dettaglio "ricontestualizzabile"?

### 🎮 Prospettiva: Giocatore Esperto
- Il meta-gaming è neutralizzato? (Il pattern "l'insospettabile è il colpevole" non è prevedibile)
- La varietà dei tipi di documento mantiene l'engagement?
- Il ritmo funziona? (Documenti lunghi alternati a documenti brevi)
- La frustrazione è gestita? (Suggerimenti disponibili, feedback educativo)
- Il momento della soluzione è soddisfacente?

---

# PARTE 8: ISTRUZIONI DI GENERAZIONE

## 8.1 Ordine di Generazione

Genera i file in questo ordine preciso. Ogni file successivo DEVE essere coerente con tutti quelli precedenti.

### Step 1 — La Fondazione (genera per primo)
**`documento-master.md`** — Contiene TUTTA la verità: colpevole, movente, metodo, timeline, indizi, false piste. Questo file è il REFERENCE ASSOLUTO per la coerenza di tutti gli altri.

### Step 2 — Il Cuore Narrativo
**Verbali di interrogatorio** (1 per sospetto) — in `documenti-investigativi/`
Sono il centro del gioco: ogni sospetto racconta la sua versione, mente su qualcosa, nasconde qualcosa.

### Step 3 — I Fatti Scientifici
**Rapporti ufficiali e forensi** — in `documenti-investigativi/`
- Rapporto polizia iniziale
- Rapporto medico-legale / autopsia
- Analisi forensi (tracce, digitale, telecamere, impronte, planimetria)
- Timeline eventi
- Mappa scena crimine
- Lista prove fisiche

### Step 4 — Il Tessuto Connettivo
**Prove documentali** — in `prove-documentali/`
- Email e corrispondenza
- Chat WhatsApp/Telegram
- Estratti conto bancari
- Documenti legali (testamenti, contratti, statuti)
- Tabulati telefonici

### Step 5 — Il Contesto
**Documenti di contesto** — in `prove-documentali/`
- Articoli di giornale
- Post social media
- Foto scena crimine e sorveglianza
- Diari e appunti personali

### Step 6 — Il Supporto al Gioco
**Elementi digitali** — in `elementi-digitali/`
- Sistema verifica soluzione
- Analisi GPS (se presente)
- Trascrizioni audio (se presenti)
- Altri elementi digitali

**Suggerimenti** — in `suggerimenti/`
- Livello 1, 2, 3

### Step 7 — I File di Sistema (genera per ultimo)
- `README.md` — Presentazione senza spoiler
- `istruzioni-giocatori.md`
- `manuale-utente.md`
- `albero-decisionale.md`
- `script-narrazione-finale.md`

## 8.2 Regole di Generazione

Per OGNI documento generato:

1. **Rispetta il formato** del tipo di documento (intestazione Questura per polizia, bubble per chat, etc.)
2. **Usa terminologia tecnica** appropriata al settore
3. **Mantieni la lunghezza realistica** (un post-it ≠ un'autopsia)
4. **Inserisci gli indizi nel flusso naturale** del testo — MAI evidenziati
5. **Verifica la coerenza** con il documento-master e tutti i file precedenti
6. **Ogni documento è autocontenuto** (leggibile da solo, comprensibile senza gli altri)

## 8.3 Formato Output

Genera ogni file come blocco markdown completo, preceduto dal percorso del file:

```
📄 casi/{SLUG_CARTELLA}/documenti-investigativi/01-rapporto-polizia-iniziale.md
---
[contenuto completo del file]
---
```

## 8.4 Nota Finale sulla Qualità

> **Il test definitivo**: un giocatore che legge TUTTI i documenti con attenzione DEVE poter risolvere il caso senza suggerimenti. Un giocatore che legge superficialmente DEVE sentirsi stimolato a rileggere, non frustrato. Il livello 3 dei suggerimenti DEVE sbloccare chiunque. La narrazione finale DEVE far dire "ERA SOTTO I MIEI OCCHI."

---

*Prompt generato il 7 aprile 2026 — Sistema Secret Case — Generatore Universale v1.0*

---

# APPENDICE: ESEMPI DI CONFIGURAZIONE

## Esempio A — Caso Facile (⭐⭐) stile "L'Eredità di Villa Rossi"

```yaml
TITOLO_CASO*:        "L'Eredità Avvelenata di Villa Rossi"
SOTTOTITOLO:         "Un'eredità da 400 milioni. Un dessert fatale. Sei sospetti con un segreto."
SLUG_CARTELLA*:      "eredita-villa-rossi"
DIFFICOLTA*:         2
AMBIENTAZIONE_CITTA*:    "Lago di Como"
AMBIENTAZIONE_REGIONE*:  "Lombardia"
LUOGO_CRIMINE*:      "Villa Rossi, residenza storica sul lago"
EPOCA*:              "Giugno 2024"
TONO*:               "Giallo classico familiare. Atmosfera Agatha Christie in salsa italiana. Tensioni ereditarie, segreti di famiglia, veleno nel dessert."
TEMA_PRINCIPALE*:    "eredità e avidità familiare"
CONTESTO_SOCIALE*:   "dinastia farmaceutica miliardaria"
TIPO_CRIMINE*:       "AVVELENAMENTO"
VITTIMA_SPUNTO:      "Patriarca miliardario farmaceutico, 72 anni, che stava per cambiare il testamento"
COLPEVOLE_SPUNTO:    ""
DETTAGLIO_RISOLUTIVO_SPUNTO: ""
COMPLICE_INCONSAPEVOLE: "NO"
NUM_SOSPETTI_OVERRIDE:    ""
NUM_DOMANDE_VERIFICA:     "3"
NOTE_EXTRA:          ""
```

## Esempio B — Caso Impegnativo (⭐⭐⭐⭐) stile "La Notte delle Maschere"

```yaml
TITOLO_CASO*:        "La Notte delle Maschere"
SOTTOTITOLO:         "Un gala di beneficenza. Otto maschere. Un omicidio sotto gli occhi di tutti."
SLUG_CARTELLA*:      "notte-delle-maschere"
DIFFICOLTA*:         4
AMBIENTAZIONE_CITTA*:    "Sanremo"
AMBIENTAZIONE_REGIONE*:  "Liguria"
LUOGO_CRIMINE*:      "Grand Hotel Riviera Palace, durante un gala di beneficenza"
EPOCA*:              "Febbraio 2026"
TONO*:               "Giallo mediterraneo elegante. Glamour, ricatti, doppi giochi. Ispirazione: Knives Out incontra Agatha Christie sulla riviera."
TEMA_PRINCIPALE*:    "maschere sociali e la facciata della beneficenza"
CONTESTO_SOCIALE*:   "jet-set ligure, imprenditori, avvocati, medici"
TIPO_CRIMINE*:       "MORTE_NATURALE_INDOTTA"
VITTIMA_SPUNTO:      "Magnate alberghiero carismatico con molti nemici e un dossier di ricatti"
COLPEVOLE_SPUNTO:    "Qualcuno vicino alla vittima in posizione di fiducia"
DETTAGLIO_RISOLUTIVO_SPUNTO: ""
COMPLICE_INCONSAPEVOLE: "Un medico che fornisce inconsapevolmente il mezzo per il crimine"
NUM_SOSPETTI_OVERRIDE:    "8"
NUM_DOMANDE_VERIFICA:     "4"
NOTE_EXTRA:          "8 sospetti, ognuno collegato a un ricatto diverso della vittima"
```

## Esempio C — Caso Esperto (⭐⭐⭐⭐⭐) stile "La Trama"

```yaml
TITOLO_CASO*:        "La Trama"
SOTTOTITOLO:         "Doppio significato: trama come complotto, trama come ordito tessile."
SLUG_CARTELLA*:      "la-trama"
DIFFICOLTA*:         5
AMBIENTAZIONE_CITTA*:    "Merate (LC)"
AMBIENTAZIONE_REGIONE*:  "Lombardia"
LUOGO_CRIMINE*:      "La Filatura Tessari, ex fabbrica tessile del 1923 riconvertita in polo culturale"
EPOCA*:              "Marzo 2025"
TONO*:               "Noir lombardo. Nebbia della Brianza, capannoni tra ville con piscina, silenzio cattolico-borghese. Gomorra incontra Broadchurch incontra Knives Out."
TEMA_PRINCIPALE*:    "maschere sociali e il silenzio che copre tutto"
CONTESTO_SOCIALE*:   "dinastia industriale brianzola, politica locale, giornalismo, imprenditoria"
TIPO_CRIMINE*:       "INCIDENTE_SIMULATO"
VITTIMA_SPUNTO:      "CEO donna celebrata pubblicamente ma criminale ambientale in segreto, con tumore terminale"
COLPEVOLE_SPUNTO:    "Ex operaio pensionato, invisibile, che conosce la fabbrica come le sue tasche"
DETTAGLIO_RISOLUTIVO_SPUNTO: "Il telefono del colpevole si connette automaticamente al Wi-Fi della fabbrica, tradendolo nei log di rete"
COMPLICE_INCONSAPEVOLE: "La dottoressa di famiglia che rivela involontariamente il segreto medico della vittima"
NUM_SOSPETTI_OVERRIDE:    "10"
NUM_DOMANDE_VERIFICA:     "4"
NOTE_EXTRA:          "3 crimini paralleli sovrapposti (omicidio + frode ambientale + riciclaggio). 75+ documenti. Il colpevole è la persona che il giocatore dimentica di aver letto. Il suo verbale è il più breve e noioso."
```
