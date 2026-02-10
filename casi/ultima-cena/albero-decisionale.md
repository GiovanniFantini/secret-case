# Albero Decisionale — L'Ultima Cena

---

> **ATTENZIONE: CONTIENE LA SOLUZIONE**
> Non consultare questo documento prima di aver formulato la vostra ipotesi finale.
> Usate il Sistema di Verifica (`elementi-digitali/sistema-verifica-soluzione.md`) per un'esperienza guidata.

---

## Come Funziona

Il caso si risolve rispondendo correttamente a **tre domande fondamentali**. Ogni risposta corretta vale un punto. Il punteggio finale determina il vostro grado di investigatore.

Procedete nell'ordine: prima la Domanda 1, poi la 2, poi la 3.

---

## Diagramma di Flusso

```
                    ┌─────────────────────────┐
                    │     INIZIO VERIFICA      │
                    │  Sei pronto a risolvere  │
                    │      il caso?            │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │   DOMANDA 1 (pag. 1)    │
                    │   Chi è il colpevole?    │
                    └────────────┬─────────────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
              ┌──────────┐ ┌──────────┐ ┌──────────┐
              │ Risposta │ │ Risposta │ │ Altre    │
              │   (b)    │ │  errata  │ │ risposte │
              │ CORRETTO │ │          │ │          │
              └─────┬────┘ └─────┬────┘ └─────┬────┘
                    │            │            │
                    │      ┌─────┴────────────┘
                    │      │
                    ▼      ▼
              ┌──────────────────────────┐
              │    DOMANDA 2 (pag. 2)    │
              │   Qual è il movente?     │
              └────────────┬─────────────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │ Risposta │ │ Risposta │ │ Altre    │
        │   (c)    │ │  errata  │ │ risposte │
        │ CORRETTO │ │          │ │          │
        └─────┬────┘ └─────┬────┘ └─────┬────┘
              │            │            │
              │      ┌─────┴────────────┘
              │      │
              ▼      ▼
        ┌──────────────────────────┐
        │    DOMANDA 3 (pag. 3)    │
        │   Come è stato commesso? │
        └────────────┬─────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
  ┌──────────┐ ┌──────────┐ ┌──────────┐
  │ Risposta │ │ Risposta │ │ Altre    │
  │   (c)    │ │  errata  │ │ risposte │
  │ CORRETTO │ │          │ │          │
  └─────┬────┘ └─────┬────┘ └─────┬────┘
        │            │            │
        │      ┌─────┴────────────┘
        │      │
        ▼      ▼
  ┌──────────────────────────┐
  │   CALCOLO PUNTEGGIO      │
  │   Somma risposte         │
  │   corrette (0-3)         │
  └────────────┬──────────────┘
               │
  ┌────────────┼─────────────┬──────────────┐
  │            │             │              │
  ▼            ▼             ▼              ▼
┌──────┐  ┌──────┐     ┌──────┐      ┌──────┐
│ 3/3  │  │ 2/3  │     │ 1/3  │      │ 0/3  │
│MAESTRO│ │ESPERTO│    │IN ERBA│     │IRRIS.│
└──────┘  └──────┘     └──────┘      └──────┘
```

---

## DOMANDA 1: Chi è il colpevole?

Selezionate la vostra risposta:

### a) Chef Tommaso Rizzoli
### b) Ilaria Mura
### c) Dott. Sergio Mancini
### d) Giorgio Pellegrini
### e) Claudia Fontana
### f) Matteo Galli

---

### Feedback Domanda 1

<details>
<summary>Hai risposto (a) — Chef Tommaso Rizzoli? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Comprensibile: lo chef era il responsabile della cucina e del piatto fatale, il che lo rende il sospettato piu immediato. Tuttavia:

- Rizzoli era **in cucina con il suo staff** per tutta la durata del servizio, confermato da testimoni e telecamere di sorveglianza.
- Il suo **protocollo allergie era impeccabile**: ogni piatto per Fontana veniva preparato su una stazione dedicata e controllata.
- Le analisi di laboratorio confermano che la **contaminazione e avvenuta DOPO l'uscita del piatto dalla cucina**, non durante la preparazione.

Rizzoli e la **falsa pista principale** del caso: il sospettato piu ovvio, progettato per distogliere l'attenzione dal vero colpevole. Il killer voleva esattamente che la colpa ricadesse sulla cucina.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (b) — Ilaria Mura? Clicca qui.</summary>

**RISPOSTA CORRETTA!**

Eccellente lavoro investigativo. Ilaria Mura, la sommelier, e la colpevole. Le prove chiave che avrebbero dovuto condurti a lei:

- Le **telecamere a circuito chiuso** la riprendono nei pressi dell'abitazione di Fontana in orari sospetti.
- Le **tracce rinvenute nella custodia del cavatappi** collegano il suo equipaggiamento all'olio di arachidi.
- La sua **visita alla cantina di 12 minuti** durante il servizio non trova giustificazione operativa e coincide con la finestra temporale della contaminazione.
- **Conosceva l'allergia** della vittima grazie alla loro passata relazione sentimentale.
- L'**acquisto online di olio di arachidi** e stato tracciato fino al suo account.

**Punteggio per questa domanda: 1 punto.**
</details>

<details>
<summary>Hai risposto (c) — Dott. Sergio Mancini? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Mancini odiava Fontana, e il suo rancore era noto a tutti. Un profilo da sospettato convincente. Tuttavia:

- Era **seduto al tavolo, posto 5**, per tutta la durata della cena, confermato da **tre testimoni indipendenti**.
- La sua **visita al bagno** si colloca temporalmente **prima del terzo piatto**, quindi prima della contaminazione.
- Non aveva accesso fisico al piatto nel momento critico.

Mancini e la **falsa pista del rancore dichiarato**: il suo odio per Fontana era reale, ma non aveva ne l'occasione ne il mezzo per agire.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (d) — Giorgio Pellegrini? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Pellegrini aveva un movente economico e una telefonata minacciosa a Fontana nei giorni precedenti la cena. Un candidato plausibile. Tuttavia:

- **Non era a conoscenza dell'allergia** della vittima alle arachidi, un'informazione riservata alla cerchia piu intima.
- **Non ha mai lasciato il tavolo** durante l'intera serata, come confermato da piu testimoni.
- La telefonata minacciosa riguardava una disputa commerciale, non un piano omicida.

Pellegrini e la **falsa pista della minaccia esplicita**: le sue parole dure lo rendono un sospettato suggestivo, ma mancano sia la conoscenza dell'allergia sia l'opportunita materiale.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (e) — Claudia Fontana? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Claudia, figlia ed erede della vittima, aveva il movente classico dell'eredita. Un sospetto che sembra logico. Tuttavia:

- **Non era a conoscenza dell'accordo Springer** che avrebbe cambiato significativamente la distribuzione del patrimonio.
- Era **seduta al tavolo accanto al padre** per tutta la durata della cena.
- Il suo **dolore e stato valutato come genuino** dagli inquirenti e dai testimoni presenti.

Claudia e la **falsa pista dell'ereditiera**: il movente economico apparente crolla quando si esaminano i dettagli. Non sapeva, non poteva, e non voleva.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (f) — Matteo Galli? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Galli nutriva un forte risentimento verso Fontana, e il suo profilo di sospettato e insidioso. Tuttavia:

- **Non ha mai toccato il piatto** della vittima: il suo ruolo non prevedeva alcun contatto con il servizio al tavolo.
- Era **in cucina con le telecamere attive** durante tutto il servizio, come Rizzoli.
- Il **protocollo sugli allergeni** lo esclude dalla catena di contaminazione.

Galli e la **falsa pista del risentimento professionale**: il suo astio era reale, ma le prove fisiche e digitali lo scagionano completamente.

**Punteggio per questa domanda: 0 punti.**
</details>

---

## DOMANDA 2: Qual è il movente?

Selezionate la vostra risposta:

### a) Vendetta professionale per una recensione negativa
### b) Interesse economico diretto
### c) Vendetta personale e professionale: ritorsione per la fine di una relazione, debiti, e la distruzione sistematica della sua carriera
### d) Proteggere un segreto o un'attivita illecita

---

### Feedback Domanda 2

<details>
<summary>Hai risposto (a) — Vendetta professionale per una recensione negativa? Clicca qui.</summary>

**RISPOSTA ERRATA.**

La vendetta per una recensione negativa e il movente che si applicherebbe a figure come Galli o Rizzoli, non alla colpevole. Ilaria Mura non agiva per una semplice critica professionale: la sua motivazione era molto piu profonda e personale, radicata nella distruzione sistematica della sua vita da parte della vittima.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (b) — Interesse economico diretto? Clicca qui.</summary>

**RISPOSTA ERRATA.**

L'interesse economico diretto e il movente apparente di Pellegrini o di Claudia Fontana. Ilaria Mura aveva certamente subito un danno economico, ma il movente immediato non era il profitto: era la **ritorsione per la devastazione totale** che Fontana le aveva inflitto. La differenza e fondamentale: Mura non ha ucciso per guadagnare denaro, ma per vendicarsi di chi le aveva tolto tutto.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (c) — Vendetta personale e professionale? Clicca qui.</summary>

**RISPOSTA CORRETTA!**

Perfetto. Il movente di Ilaria Mura non era il denaro, una recensione o un'attivita illecita: era una **vendetta totale, personale e professionale**, maturata dopo che la vittima aveva sistematicamente distrutto la sua vita.

Fontana, suo ex amante, aveva posto fine alla relazione e poi aveva agito con deliberata crudelta: l'aveva caricata di debiti, aveva usato la propria influenza per chiuderle ogni porta nel settore enogastronomico, e aveva demolito la sua reputazione professionale. Mura si era ritrovata senza carriera, senza risorse e senza futuro.

Le prove del movente:
- **La relazione passata**: confermata da corrispondenza e testimonianze della cerchia intima
- **I debiti accumulati**: documentazione finanziaria che collega il dissesto economico di Mura alle azioni di Fontana
- **La distruzione della carriera**: una serie di referenze negative e pressioni sui datori di lavoro, tutte riconducibili alla vittima
- **La conoscenza dell'allergia**: un'informazione intima, acquisita durante la relazione, trasformata in arma letale

**Punteggio per questa domanda: 1 punto.**
</details>

<details>
<summary>Hai risposto (d) — Proteggere un segreto o un'attivita illecita? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Non esiste alcuna attivita illecita da proteggere in questo caso. Ilaria Mura non stava coprendo un segreto criminale: stava agendo per vendetta contro chi le aveva distrutto la vita. Il movente e personale e professionale, non legato alla protezione di operazioni illegali.

**Punteggio per questa domanda: 0 punti.**
</details>

---

## DOMANDA 3: Come è stato commesso il crimine?

Selezionate la vostra risposta:

### a) Avvelenamento del vino servito durante la cena
### b) Contaminazione del piatto durante la preparazione in cucina
### c) Introduzione di olio di arachidi nel piatto durante il servizio del vino
### d) Sostituzione dell'EpiPen con un dispositivo inefficace

---

### Feedback Domanda 3

<details>
<summary>Hai risposto (a) — Avvelenamento del vino? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Ipotesi logica, data la professione della colpevole, ma le analisi di laboratorio la smentiscono: il **bicchiere di vino della vittima non presentava alcuna traccia** di contaminante. Il vino era pulito. Mura ha sfruttato il suo ruolo di sommelier non per contaminare il vino, ma per avere **accesso legittimo al tavolo** nel momento del servizio, usando la mescita come copertura per agire sul piatto.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (b) — Contaminazione in cucina? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Questa e esattamente la versione che la colpevole **voleva far credere**. L'intera messinscena era progettata per far ricadere la responsabilita sulla cucina e sullo chef Rizzoli. Tuttavia:

- Le **analisi di laboratorio** confermano che la stazione di preparazione dedicata a Fontana era **completamente pulita** da allergeni.
- Il **protocollo allergie** della cucina era rigoroso e documentato.
- La contaminazione e avvenuta **dopo** l'uscita del piatto dalla cucina, durante il tragitto verso il tavolo.

Se hai scelto questa risposta, la colpevole ti ha ingannato con la sua strategia di depistaggio.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (c) — Introduzione di olio di arachidi nel piatto durante il servizio del vino? Clicca qui.</summary>

**RISPOSTA CORRETTA!**

Esattamente. Ilaria Mura ha introdotto **olio di arachidi nel risotto** della vittima approfittando del momento in cui si trovava al tavolo per il **servizio del vino**. Il suo ruolo di sommelier le garantiva accesso diretto e legittimo al tavolo, e il gesto di versare il vino distoglieva l'attenzione dei commensali dal piatto.

Le prove del metodo:
- **Analisi del bicchiere**: il vino era pulito, escludendo la contaminazione della bevanda
- **Analisi della stazione cucina**: nessuna traccia di allergeni, escludendo la contaminazione in preparazione
- **Tracce nella custodia del cavatappi**: residui di olio di arachidi nell'equipaggiamento personale della sommelier
- **Visita alla cantina di 12 minuti**: finestra temporale compatibile con la preparazione della contaminazione
- **Acquisto online**: olio di arachidi ordinato dal suo account nelle settimane precedenti la cena
- **EpiPen**: il dispositivo era funzionante, ma somministrato troppo tardi, confermando che la morte e stata causata dalla reazione allergica, non da un malfunzionamento del dispositivo di emergenza

**Punteggio per questa domanda: 1 punto.**
</details>

<details>
<summary>Hai risposto (d) — Sostituzione dell'EpiPen? Clicca qui.</summary>

**RISPOSTA ERRATA.**

L'EpiPen della vittima era **perfettamente funzionante**. L'analisi forense ha confermato che il dispositivo conteneva la dose corretta di epinefrina e non era stato manomesso. Il problema non era l'EpiPen, ma il **tempo**: la reazione allergica e stata cosi violenta e rapida che il dispositivo e stato somministrato troppo tardi per salvare la vita alla vittima.

**Punteggio per questa domanda: 0 punti.**
</details>

---

## Calcolo del Punteggio Finale

Sommate i punti ottenuti nelle tre domande:

---

### 3 su 3 — MAESTRO INVESTIGATORE

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║            ★ ★ ★  MAESTRO INVESTIGATORE  ★ ★ ★           ║
║                                                           ║
║   Complimenti! Hai risolto il caso in ogni suo aspetto.   ║
║   Hai identificato la colpevole, compreso il movente e    ║
║   ricostruito il metodo con precisione chirurgica.        ║
║                                                           ║
║   Nessuna falsa pista ti ha fuorviato: né lo chef, né     ║
║   la figlia, né il dottore. Hai visto attraverso la       ║
║   messinscena della sommelier e ricostruito la verità.    ║
║                                                           ║
║   Hai dimostrato capacità deduttive eccezionali,          ║
║   attenzione ai dettagli e rigore nell'analisi delle      ║
║   prove. L'Ultima Cena non ha più segreti per te.         ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

### 2 su 3 — INVESTIGATORE ESPERTO

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║            ★ ★  INVESTIGATORE ESPERTO  ★ ★               ║
║                                                           ║
║   Ottimo lavoro! Hai colto gli elementi fondamentali      ║
║   del caso, anche se un dettaglio ti è sfuggito.          ║
║                                                           ║
║   Rileggi i documenti investigativi con attenzione:       ║
║   la risposta che ti manca è nascosta nei dettagli        ║
║   tecnici e nelle prove forensi. Concentrati sulle        ║
║   analisi di laboratorio e sui movimenti dei sospettati.  ║
║                                                           ║
║   Sei sulla buona strada per diventare un Maestro.        ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

### 1 su 3 — INVESTIGATORE IN ERBA

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║              ★  INVESTIGATORE IN ERBA  ★                  ║
║                                                           ║
║   Hai intuito qualcosa, ma il quadro complessivo ti       ║
║   è sfuggito. Non scoraggiarti: anche i migliori          ║
║   investigatori hanno iniziato così.                      ║
║                                                           ║
║   Consiglio: torna ai documenti e concentrati sulle       ║
║   contraddizioni tra gli alibi dichiarati e le prove      ║
║   oggettive. Incrocia le testimonianze con le analisi     ║
║   di laboratorio e i filmati delle telecamere. La         ║
║   verità è nei dettagli che non tornano.                  ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

### 0 su 3 — CASO IRRISOLTO

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║               CASO IRRISOLTO                              ║
║                                                           ║
║   Il caso rimane un mistero... per ora. Non tutto è       ║
║   perduto: ogni grande investigatore ha avuto casi        ║
║   che lo hanno messo in difficoltà.                       ║
║                                                           ║
║   Consiglio: riparti dai documenti iniziali e rileggi     ║
║   con occhi nuovi. Prendi appunti, costruisci una         ║
║   timeline della serata, e soprattutto: non fidarti       ║
║   delle apparenze. Chi aveva accesso al piatto? Chi       ║
║   conosceva l'allergia? Chi aveva un motivo nascosto?     ║
║                                                           ║
║   Puoi anche consultare i suggerimenti nella cartella     ║
║   suggerimenti/ per un aiuto progressivo.                 ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

## Riepilogo Risposte Corrette

| Domanda | Risposta Corretta | Spiegazione Sintetica |
|---------|-------------------|-----------------------|
| **1. Chi?** | **(b) Ilaria Mura** | CCTV la colloca a casa Fontana. Tracce nella custodia del cavatappi. Visita cantina 12 min. Conosceva allergia dalla relazione. Acquisto olio di arachidi online. |
| **2. Perché?** | **(c) Vendetta personale e professionale** | Ex amante che le aveva distrutto carriera, causato debiti e rovinato la reputazione. Ritorsione totale. |
| **3. Come?** | **(c) Olio di arachidi nel risotto durante servizio vino** | Introduzione dell'allergene nel piatto sfruttando il ruolo di sommelier. Cucina pulita. Vino pulito. EpiPen funzionante ma tardivo. |

---

*L'Ultima Cena — Albero Decisionale*
