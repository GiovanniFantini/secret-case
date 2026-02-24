# Albero Decisionale — L'Ultima Seduta

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
              │   (e)    │ │  errata  │ │ risposte │
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
  │   (a)    │ │  errata  │ │ risposte │
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

## DOMANDA 1: Chi ha ucciso il Dr. Venturi?

Selezionate la vostra risposta:

### a) Dr.ssa Marta Coletti
### b) Tommaso Venturi
### c) Beatrice Aldrovandi
### d) Prof. Riccardo Stein
### e) Sara Magnani
### f) Luca Brambilla

---

### Feedback Domanda 1

<details>
<summary>Hai risposto (a) — Dr.ssa Marta Coletti? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Comprensibile: la vicedirettrice aveva accesso a ogni angolo della clinica e un rapporto professionale teso con Venturi, il che la rende una sospettata credibile. Tuttavia:

- Coletti si trovava nell'**archivio della clinica dalle 20:15 alle 22:20**, intenta a copiare file clinici riservati. La telecamera di sicurezza del corridoio dell'archivio conferma i suoi movimenti con continuita.
- La sua attivita notturna non era criminale ma **etica**: stava raccogliendo prove sulla sperimentazione illegale del Mnemoxil per presentare un esposto all'EMA (Agenzia Europea per i Medicinali).
- Il suo movente apparente — la rivalita professionale e i dati clinici falsificati — era reale, ma la sua risposta non fu l'omicidio bensi la **denuncia alle autorita regolatorie**.

Coletti e la **falsa pista della collega ambiziosa**: aveva le ragioni per odiare Venturi, ma la sua ribellione prese la strada della legge, non del veleno.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (b) — Tommaso Venturi? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Il figlio che odiava il padre — un classico del giallo, e un sospettato naturale. Tommaso aveva rancore da vendere e una presenza inquietante nella clinica quella sera. Tuttavia:

- I **log di attivita del suo laptop** mostrano un editing video continuo e ininterrotto dalle 19:45 all'01:30 nella sua stanza. I file di progetto di Adobe Premiere confermano salvataggi automatici ogni tre minuti.
- I **registri WiFi della clinica** collocano il suo dispositivo nella stanza 204 per tutta la durata della serata, senza interruzioni.
- Tommaso stava montando le riprese del suo **documentario segreto** sulla clinica del padre — un progetto nato dal risentimento, certo, ma la sua arma era la telecamera, non il veleno.

Tommaso e la **falsa pista del figlio rinnegato**: il suo odio per il padre era autentico, ma la sua vendetta era cinematografica, non chimica.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (c) — Beatrice Aldrovandi? Clicca qui.</summary>

**RISPOSTA ERRATA.**

La ricca paziente manipolata — una donna con i mezzi economici per procurarsi qualsiasi cosa e con ragioni profonde per detestare chi la stava ingannando. Tuttavia:

- Beatrice aveva assunto **Lorazepam 2,5 mg (ansiolitico/sedativo)** alle 20:25, come da prescrizione serale. Le analisi tossicologiche confermano che era in stato di **incoscienza farmacologica** dalle 21:00 in poi.
- A sessantotto anni e con le sue condizioni fisiche, **non aveva la capacita materiale** di preparare e somministrare il veleno, tanto meno in stato di sedazione.
- Beatrice non sapeva nemmeno di essere manipolata: la sua **ignara fiducia** nel Dr. Venturi era totale, il che esclude qualsiasi premeditazione.

Beatrice e la **falsa pista della paziente milionaria**: i suoi soldi e la sua vulnerabilita la rendono un bersaglio narrativo suggestivo, ma quella sera dormiva mentre il veleno faceva il suo corso.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (d) — Prof. Riccardo Stein? Clicca qui.</summary>

**RISPOSTA ERRATA.**

L'ex mentore caduto in disgrazia — un uomo che aveva venduto la propria integrita accettando denaro sporco, e che aveva ogni ragione per temere l'esposizione pubblica. Tuttavia:

- Stein trascorse l'intera serata nella **biblioteca della clinica**, come confermato dai registri WiFi del suo telefono e del suo tablet.
- Un dettaglio quasi comico lo inchioda al suo alibi: un **libro macchiato di caffe** trovato sul tavolo della biblioteca presenta tracce di DNA compatibili con Stein, collocandolo fisicamente in quella stanza.
- Stein aveva accettato una **tangente di 50.000 euro** da Venturi per coprire le irregolarita del Mnemoxil — era complice, non nemico. Uccidere Venturi avrebbe significato perdere il proprio protettore e rischiare l'esposizione.

Stein e la **falsa pista del mentore corrotto**: la sua colpa era reale — aveva tradito l'etica accademica per denaro — ma il suo crimine era la connivenza, non l'omicidio.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (e) — Sara Magnani? Clicca qui.</summary>

**RISPOSTA CORRETTA!**

Eccellente lavoro investigativo. Sara Magnani, la capoinfermiera, e la colpevole. Le prove chiave che avrebbero dovuto condurti a lei:

- La **telecamera del corridoio** la riprende alle 20:58 mentre percorre il corridoio con il vassoio della camomilla serale, diretta verso la sala terapia del Dr. Venturi.
- **Tracce di tetrodotossina** sono state rinvenute nel lavandino e nel mortaio della cucina della clinica, dove Sara preparo la tisana avvelenata.
- Un **ordine online di un kit per la preparazione del fugu** e stato rintracciato fino al suo indirizzo personale, con consegna datata dicembre 2025.
- Le sue **impronte digitali** sono state trovate sull'armadio farmaceutico contenente i fascicoli del Mnemoxil — un armadio al quale non avrebbe dovuto accedere.
- Il suo **badge identificativo**, dimenticato sulla scrivania del suo ufficio anziche portato con se come da protocollo, suggerisce un tentativo di dissimulare i propri spostamenti quella sera.
- Il **telefono risultava spento** dalle 20:30 alle 22:00, l'unica finestra temporale critica della serata.

**Punteggio per questa domanda: 1 punto.**
</details>

<details>
<summary>Hai risposto (f) — Luca Brambilla? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Il rappresentante farmaceutico con i suoi affari oscuri — un uomo il cui lavoro consisteva nel vendere farmaci e la cui presenza nella clinica quella sera solleva domande legittime. Tuttavia:

- I **tabulati telefonici** confermano che Brambilla fu impegnato in telefonate continue dalle 20:15 alle 23:30, con interlocutori verificati — colleghi, dirigenti della casa farmaceutica, un avvocato.
- I **registri WiFi** collocano il suo telefono nella sala riunioni al piano terra per l'intera serata.
- Il **microfono nascosto** che Tommaso Venturi aveva piazzato nella sala riunioni per il suo documentario registro le conversazioni di Brambilla, confermando la sua presenza e la sua voce in modo continuo.

Brambilla e la **falsa pista dell'uomo d'affari ambiguo**: i suoi interessi economici nel contratto Nexalyn lo rendono moralmente discutibile, ma quella sera era troppo impegnato a fare affari al telefono per avvelenare chicchessia.

**Punteggio per questa domanda: 0 punti.**
</details>

---

## DOMANDA 2: Qual è il movente?

Selezionate la vostra risposta:

### a) Rivalita professionale e dati clinici falsificati
### b) Interesse economico legato al contratto Nexalyn
### c) Recuperare la propria identita rubata e proteggere le prove della manipolazione mentale di Venturi
### d) Vendetta familiare per l'abbandono della madre

---

### Feedback Domanda 2

<details>
<summary>Hai risposto (a) — Rivalita professionale e dati clinici falsificati? Clicca qui.</summary>

**RISPOSTA ERRATA.**

La rivalita professionale e la falsificazione dei dati clinici descrivono il mondo della Dr.ssa Coletti, non della colpevole. Coletti aveva scoperto le irregolarita del Mnemoxil e stava agendo per denunciarle alle autorita — il suo conflitto con Venturi era professionale e la sua risposta fu legale, non violenta. Sara Magnani non agiva per carriera o per dati falsificati: il suo movente era immensamente piu personale, radicato nel furto della propria identita e dei propri ricordi.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (b) — Interesse economico legato al contratto Nexalyn? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Il contratto Nexalyn e il territorio di Luca Brambilla, il rappresentante farmaceutico. Brambilla aveva interessi economici enormi nella clinica — il suo "Piano B" prevedeva accordi paralleli e commissioni nascoste — ma questo e il suo mondo, non quello di Sara. La capoinfermiera non aveva alcun interesse economico nel contratto Nexalyn. Il suo movente non aveva nulla a che fare con il denaro: aveva a che fare con sei mesi di vita cancellati e un'identita rubata.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (c) — Recuperare la propria identita rubata e proteggere le prove della manipolazione mentale? Clicca qui.</summary>

**RISPOSTA CORRETTA!**

Perfetto. Il movente di Sara Magnani non era il denaro, la carriera o una faida familiare: era il **recupero della propria identita rubata** e la **protezione delle prove** che documentavano la manipolazione mentale subita.

Nel 2017, Sara ebbe una relazione con il Dr. Venturi. Al termine della relazione, Venturi utilizzo il suo farmaco sperimentale — il Mnemoxil — per **cancellare completamente i ricordi di Sara** relativi a quei sei mesi. Per otto anni, Sara visse senza sapere che un pezzo della sua vita era stato sottratto.

Nell'ottobre 2025, i primi **flashback** iniziarono a emergere: una mano sulla spalla, un profumo, sogni che non riusciva a collocare. A dicembre 2025, trovo il fascicolo: *"S.M. — Fase 3 completata — nessun ricordo rilevato."* La verita la devasto.

Il 5 gennaio 2026, Sara scopri che Venturi intendeva **distruggere tutte le prove** della sperimentazione illegale del Mnemoxil. Doveva agire: non solo per vendetta, ma per impedire che l'unica documentazione della violenza subita scomparisse per sempre.

Le prove del movente:
- **Il fascicolo "S.M."**: documentazione clinica della cancellazione mnemonica, trovata nell'armadio farmaceutico con le impronte di Sara
- **I flashback di ottobre 2025**: confermati dal diario personale di Sara e da una visita medica registrata
- **L'ordine di distruzione dei file**: datato 3 gennaio 2026, firmato da Venturi, che prevedeva l'eliminazione di tutta la documentazione Mnemoxil entro il 10 gennaio
- **La relazione del 2017**: confermata da corrispondenza digitale recuperata e da testimonianze indirette del personale dell'epoca

**Punteggio per questa domanda: 1 punto.**
</details>

<details>
<summary>Hai risposto (d) — Vendetta familiare per l'abbandono della madre? Clicca qui.</summary>

**RISPOSTA ERRATA.**

La vendetta familiare per l'abbandono materno e il rancore che appartiene a Tommaso Venturi, il figlio del dottore. Tommaso portava il peso di un padre assente e di una madre trascurata — un risentimento profondo che lo spinse a infiltrarsi nella clinica con telecamere nascoste per smascherare il padre. Ma Tommaso non e il colpevole, e il suo movente non si applica a Sara. La capoinfermiera non aveva legami familiari con Venturi: il suo dolore era di natura completamente diversa — non l'abbandono di un genitore, ma il furto della propria mente.

**Punteggio per questa domanda: 0 punti.**
</details>

---

## DOMANDA 3: Come è stato commesso il crimine?

Selezionate la vostra risposta:

### a) Tetrodotossina disciolta nella camomilla serale preparata in cucina
### b) Iniezione di veleno durante una visita nella sala terapia
### c) Sostituzione dei farmaci di Venturi con una sostanza letale
### d) Avvelenamento del cibo durante la cena

---

### Feedback Domanda 3

<details>
<summary>Hai risposto (a) — Tetrodotossina nella camomilla serale? Clicca qui.</summary>

**RISPOSTA CORRETTA!**

Esattamente. Sara Magnani dissolse **tetrodotossina** (il veleno del pesce palla, o fugu) nella **camomilla serale** che preparo personalmente nella cucina della clinica. Il suo ruolo di capoinfermiera le garantiva accesso esclusivo e legittimo alla preparazione delle tisane serali dei pazienti e dello staff medico.

Le prove del metodo:
- **Analisi tossicologiche**: tetrodotossina rilevata nel residuo di camomilla nella tazza del Dr. Venturi
- **Tracce nel lavandino e nel mortaio**: residui di TTX nella cucina della clinica, compatibili con la dissoluzione della tossina
- **Telecamera del corridoio, ore 20:58**: Sara percorre il corridoio con il vassoio della camomilla, diretta alla sala terapia
- **Kit per la preparazione del fugu**: ordinato online a dicembre 2025, consegnato all'indirizzo personale di Sara
- **Esclusivita della preparazione**: Sara era l'unica persona che preparava la camomilla serale del Dr. Venturi, un'abitudine consolidata da anni
- **La sala terapia chiusa dall'interno**: Venturi si chiuse nella stanza dopo aver bevuto la camomilla, come faceva ogni sera. La paralisi indotta dalla tetrodotossina lo rese incapace di chiamare aiuto o raggiungere la porta

La tetrodotossina fu la scelta perfetta: agisce lentamente, paralizza i muscoli senza alterare la coscienza. Venturi — l'uomo che rubava i ricordi — mori pienamente cosciente, ricordando tutto.

**Punteggio per questa domanda: 1 punto.**
</details>

<details>
<summary>Hai risposto (b) — Iniezione di veleno durante una visita? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Un'ipotesi ragionevole: Sara, in quanto infermiera, aveva certamente le competenze e l'accesso per praticare un'iniezione. Tuttavia:

- L'**autopsia** non ha rilevato **alcun segno di iniezione** sul corpo del Dr. Venturi. Nessun punto di ingresso, nessun ematoma da ago, nessuna traccia cutanea.
- L'analisi tossicologica ha confermato che la tetrodotossina fu **ingerita per via orale**, non iniettata.
- La sala terapia era **chiusa dall'interno**: Venturi si chiudeva a chiave ogni sera per la sua sessione di meditazione serale. Nessuno entro nella stanza dopo la consegna della camomilla.

Se hai scelto questa risposta, hai identificato correttamente le competenze della colpevole ma non il metodo: Sara uso la sua posizione non per un'iniezione, ma per avvelenare una bevanda che solo lei preparava.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (c) — Sostituzione dei farmaci? Clicca qui.</summary>

**RISPOSTA ERRATA.**

Un'ipotesi plausibile, dato che Sara aveva accesso all'armadio farmaceutico. Tuttavia:

- Tutti i **farmaci personali** del Dr. Venturi sono stati analizzati durante le indagini e sono risultati **integri e conformi** alla composizione originale.
- L'armadio farmaceutico al quale Sara accedette conteneva i **fascicoli del Mnemoxil**, non i medicinali personali di Venturi. Le sue impronte su quell'armadio dimostrano che cerco le prove della propria cancellazione mnemonica, non che manomise dei farmaci.
- La causa della morte fu **tetrodotossina ingerita per via orale**, non una reazione a farmaci alterati.

Se hai scelto questa risposta, hai colto che Sara aveva accesso ai farmaci, ma il suo piano era piu sottile: non sostitui le medicine, avveleno un rituale quotidiano — la camomilla della sera.

**Punteggio per questa domanda: 0 punti.**
</details>

<details>
<summary>Hai risposto (d) — Avvelenamento del cibo durante la cena? Clicca qui.</summary>

**RISPOSTA ERRATA.**

L'avvelenamento del cibo e l'ipotesi piu intuitiva, ma le prove la escludono completamente:

- La cena della clinica fu servita nella **sala comune alle 19:30**. Tutti i presenti — staff e pazienti — consumarono lo **stesso pasto** preparato dalla cucina centralizzata.
- **Nessun altro commensale** manifesto sintomi di alcun tipo, escludendo una contaminazione alimentare generale.
- Le **analisi di laboratorio** sul cibo residuo non rilevarono alcuna traccia di tossine o sostanze anomale.
- La tetrodotossina fu somministrata **dopo la cena**, attraverso la camomilla serale — una bevanda preparata individualmente da Sara, non un piatto condiviso.

Se hai scelto questa risposta, l'intuizione e corretta — si tratta di avvelenamento — ma il veicolo non fu il cibo comune, bensi una bevanda personale preparata con cura letale.

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
║   Nessuna falsa pista ti ha fuorviato: né l'archivista    ║
║   notturna, né il figlio regista, né il mentore corrotto. ║
║   Hai visto attraverso il silenzio della capoinfermiera   ║
║   e ricostruito la verità nascosta nel profumo della      ║
║   camomilla.                                              ║
║                                                           ║
║   Hai dimostrato capacità deduttive eccezionali,          ║
║   attenzione ai dettagli e rigore nell'analisi delle      ║
║   prove. L'Ultima Seduta non ha più segreti per te.       ║
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
║   della Clinica Mente Chiara. Concentrati sui movimenti   ║
║   notturni, sulle tracce chimiche e sui fascicoli del     ║
║   Mnemoxil. Chi aveva accesso alla cucina? Chi preparava  ║
║   la camomilla? Chi aveva sei mesi di vita da reclamare?  ║
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
║   oggettive. Chi si muoveva nei corridoi della clinica    ║
║   quella sera? Chi aveva accesso al veleno? Chi aveva     ║
║   un segreto più profondo di tutti gli altri? Incrocia    ║
║   i registri WiFi, le telecamere e le analisi             ║
║   tossicologiche. La verità è nei dettagli che non        ║
║   tornano — e nel profumo di una tisana.                  ║
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
║   timeline della serata alla Clinica Mente Chiara.        ║
║   Chi preparava le tisane serali? Chi conosceva le        ║
║   abitudini del dottore? Chi aveva ricordi rubati e       ║
║   un'identità da ricostruire? Segui la camomilla —        ║
║   dalla cucina alla sala terapia — e troverai la verità.  ║
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
| **1. Chi?** | **(e) Sara Magnani** | Telecamera corridoio ore 20:58 con vassoio. Tracce TTX in cucina. Ordine kit fugu a dicembre 2025. Impronte su armadio Mnemoxil. Badge lasciato sulla scrivania. Telefono spento 20:30-22:00. |
| **2. Perché?** | **(c) Recuperare la propria identita rubata** | Venturi uso il Mnemoxil per cancellare i ricordi della loro relazione del 2017. Sara scopri il fascicolo "S.M." e dovette agire prima che Venturi distruggesse le prove. |
| **3. Come?** | **(a) Tetrodotossina nella camomilla serale** | TTX disciolta nella tisana preparata in cucina. Tracce nel lavandino e mortaio. Sara unica persona che preparava la camomilla di Venturi. Sala terapia chiusa dall'interno. |

---

*L'Ultima Seduta — Albero Decisionale*
