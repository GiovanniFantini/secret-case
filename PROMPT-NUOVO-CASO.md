# PROMPT PER GENERARE CASO DETECTIVE — DIFFICOLTÀ ⭐⭐⭐⭐⭐

> **Istruzioni**: Copia e incolla TUTTO questo documento in una conversazione con un LLM avanzato (Claude, GPT-4, etc.). Chiedi di generare il caso completo, un file alla volta, seguendo la mappa documenti della Parte 5. Ogni file deve essere un markdown autonomo, coerente con tutti gli altri.

---

## NOTA METODOLOGICA

Questo prompt è stato sviluppato attraverso un ciclo di analisi multi-prospettiva: criminologo, editore di giochi da tavolo, giornalista investigativo, scrittore (riferimenti: *Sherlock Holmes Consulting Detective*, *Return of the Obra Dinn*), e videogamer esperto. Ogni prospettiva ha criticato il design, le correzioni sono state applicate, e il risultato è stato riprocessato. Il ciclo di revisione è documentato in Appendice.

---

# PARTE 1: CONTESTO SISTEMA — SECRET CASE

Stai generando un caso per il sistema **Secret Case**, un'applicazione web che renderizza documenti markdown in stile grafico realistico (email come Gmail, rapporti polizia con timbri, chat come WhatsApp, etc.).

## 1.1 Struttura Cartella

```
casi/la-trama/
├── README.md                           ← Presentazione senza spoiler
├── _istruzioni-giocatori.md            ← Regole del gioco
├── _manuale-utente.md                  ← Guida per il Game Master
├── solution_albero-decisionale.md      ← Sistema verifica (SPOILER)
├── solution_documento-master.md        ← Soluzione completa (SPOILER)
├── solution_script-narrazione-finale.md ← Narrazione 12-15 min (SPOILER)
└── documenti/                          ← Tutti i documenti investigativi
    ├── police_*.md
    ├── medical_*.md
    ├── forensic_*.md
    ├── email_*.md
    ├── chat_*.md
    ├── phone_*.md
    ├── bank_*.md
    ├── legal_*.md
    ├── newspaper_*.md
    ├── social_*.md
    ├── photo_*.md
    ├── diary_*.md
    ├── map_*.md
    ├── report_*.md
    ├── letter_*.md
    ├── note_*.md
    └── hint_*.md
```

## 1.2 Convenzioni Naming

- **Prefisso obbligatorio**: `tipo_nome-file.md` (underscore dopo il tipo, trattini nel nome)
- **Minuscolo**: sempre, nessuna maiuscola nei nomi file
- **Prefissi validi**: `police_`, `medical_`, `forensic_`, `email_`, `chat_`, `phone_`, `bank_`, `legal_`, `newspaper_`, `social_`, `photo_`, `diary_`, `map_`, `report_`, `letter_`, `note_`, `hint_`
- **File sistema**: prefisso `_` (es. `_istruzioni-giocatori.md`)
- **File soluzione**: prefisso `solution_` (es. `solution_documento-master.md`)

## 1.3 Formato Documenti

Ogni documento deve:
- Avere un header markdown realistico per il tipo (es. intestazione Questura per police_, header email per email_)
- Contenere metadata coerenti (date, protocolli, numeri di riferimento, firme)
- Usare terminologia tecnica appropriata (medica, legale, forense, giornalistica)
- Essere autocontenuto (leggibile indipendentemente) ma collegato agli altri per gli indizi
- Essere di lunghezza realistica (un verbale di interrogatorio è 3-5 pagine, uno scontrino è 10 righe)

## 1.4 Tipologie Documento Richieste

Questo caso DEVE utilizzare TUTTE le 12 tipologie principali, più le supplementari:

| Tipo | Stile Grafico | Min. Documenti |
|------|--------------|----------------|
| `police_` | Intestazione Questura, badge, timbro RISERVATO | 12 |
| `medical_` | Layout clinico, terminologia medica | 3 |
| `forensic_` | Stile tecnico/scientifico | 6 |
| `email_` | Header Gmail-style, quote, firma | 6 |
| `chat_` | Bubble WhatsApp/Telegram, timestamp | 5 |
| `phone_` | Tabelle tabulati, celle telefoniche | 4 |
| `bank_` | Tabelle bancarie, movimenti | 5 |
| `legal_` | Atti notarili, clausole, firme | 6 |
| `newspaper_` | Masthead, byline, layout giornalistico | 5 |
| `social_` | Post Instagram/Facebook/LinkedIn | 4 |
| `photo_` | Schede descrittive, metadata EXIF | 5 |
| `diary_` | Carta invecchiata, scrittura personale | 3 |
| Supplementari (`map_`, `report_`, `letter_`, `note_`) | Vari | 8 |
| `hint_` | Sistema suggerimenti | 3 |
| **TOTALE documenti/** | | **75+** |

---

# PARTE 2: IL CASO — "LA TRAMA"

## 2.1 Concept

**Titolo**: "La Trama" (doppio significato: *trama* come complotto/intrigo; *trama* come ordito tessile — il caso si svolge in un'ex fabbrica tessile della Brianza).

**Logline**: Una donna che tutti ammiravano viene trovata morta nella fabbrica che l'ha resa famosa. L'indagine svela che dietro ogni maschera di rispettabilità si nasconde un segreto — e che la vittima stessa indossava la maschera più pesante di tutte.

**Genere**: Omicidio premeditato mascherato da incidente industriale.

**Tono**: Noir lombardo. La nebbia della Brianza, i capannoni industriali tra le ville con piscina, il silenzio cattolico-borghese che copre tutto. Ispirazione tonale: *Gomorra* incontra *Broadchurch* incontra *Knives Out*.

## 2.2 Ambientazione

**Luogo**: Merate (LC), Brianza — cuore industriale della Lombardia. Comune di ~15.000 abitanti sulle colline tra Lecco e Milano. Mix di vecchie famiglie industriali, nuova economia tech, e lavoratori che fanno girare tutto in silenzio.

**Luogo specifico del crimine**: "La Filatura Tessari" — storica fabbrica tessile del 1923, chiusa nel 2008, acquistata e riconvertita dalla vittima in:
- **Piano terra**: Spazi espositivi e eventi ("Spazio Trama")
- **Primo piano**: Co-working e incubatore tech ("Tessari Hub")
- **Ala storica**: Macchinari originali conservati, passerella metalliche (catwalk) per visite guidate
- **Sotterraneo**: Ex magazzini, ora parzialmente bonificati (zona contaminata sigillata)

**Perché la Brianza**: È il territorio italiano dove la "maschera sociale" è più spessa. La cultura del lavoro, della famiglia, della religione, della *bella figura* copre decenni di compromessi morali. Tutti sanno, nessuno parla. La frase perfetta: *"A Meret se tàs"* (dialetto: "A Merate si tace").

**Geografia reale**: Merate esiste. La Filatura è inventata ma collocata in Via Bergamo (zona industriale reale). Il Caffè Roma in Piazza Prinetti è inventato ma Piazza Prinetti esiste. L'Osservatorio Astronomico di Merate è reale. La stazione ferroviaria Merate (linea Lecco-Milano) è reale. L'Autosilo di Piazza Mercato è inventato ma coerente.

**Ispirazione da casi reali** (ogni riferimento puramente casuale):
- Le bonifica mai completate di siti industriali lombardi (modello Caffaro-Brescia)
- Gli scandali di fondazioni culturali usate per riciclaggio
- I casi di sfruttamento lavorativo nelle filiere produttive del Nord Italia
- Le dinastie industriali brianzole e i loro segreti multigenerazionali

## 2.3 La Vittima

**Chiara Tessari**, 47 anni.

| Campo | Dettaglio |
|-------|-----------|
| Nata | 8 aprile 1978, Merate (LC) |
| Residente | Villa Tessari, Via delle Robinie 4, Montevecchia (LC) |
| Stato civile | Sposata con Davide Marchetti dal 2005 |
| Figli | Luca Marchetti-Tessari (24), studente |
| Professione | CEO Tessari Rigenerazione S.r.l., Presidente Fondazione Trama |
| Patrimonio | ~€12M (immobili, quote societarie, arte) |

**La maschera pubblica — "La Signora della Rinascita":**
- Ha trasformato la fabbrica di famiglia (chiusa dopo il fallimento) in un polo culturale/tech celebrato
- TEDx speaker: "Rigenerare è il verbo del futuro"
- Premio Ambrogino d'Oro 2023 per "contributo alla comunità"
- Volto di campagne per l'imprenditoria femminile
- Articoli elogiativi su Corriere della Sera, Donna Moderna, Il Sole 24 Ore
- 45K follower Instagram: foto con operai, inaugurazioni, progetti green

**La realtà nascosta:**
- La "bonifica ambientale" della fabbrica è stata fatta al risparmio. I sotterranei contengono ancora terreno contaminato da cromo esavalente e tricloroetilene, sigillati con teloni e cemento anzichè rimossi. Chiara lo sa dal 2019.
- La Fondazione Trama è in parte un veicolo di riciclaggio: fatture gonfiate per eventi mai avvenuti, consulenze fittizie, fondi dirottati.
- Lo sfruttamento lavorativo: il cantiere di bonifica e le manutenzioni usano manodopera irregolare, gestita tramite un caporale. Chiara paga il 30% del costo di mercato.
- Sta negoziando segretamente la vendita dell'intero complesso a un fondo immobiliare milanese (Meridian Capital) per €18M — tradendo tutti i dipendenti, i soci, e la comunità che ha costruito attorno alla Filatura.

**Causa della morte**: Trauma cranico da corpo contundente (colpita alla testa con una chiave inglese industriale da 600g trovata in loco), corpo posizionato alla base della passerella per simulare una caduta accidentale dalla catwalk dell'ala storica (altezza: 6 metri).

**Scoperta del corpo**: Sabato 15 marzo 2025, ore 07:05. Giovanni Poli, vigilante notturno, durante il giro di controllo mattutino.

## 2.4 Perché è Difficoltà ⭐⭐⭐⭐⭐

Questo caso è il più difficile della collezione Secret Case perché:

1. **10 sospetti con moventi REALI** — non filler. Ognuno aveva ragioni concrete per volere morta Chiara.
2. **3 crimini sovrapposti** — L'omicidio si intreccia con la frode ambientale, il riciclaggio, e lo sfruttamento lavorativo. Ogni sospetto mente per coprire il PROPRIO crimine, non necessariamente l'omicidio.
3. **La vittima non è innocente** — I giocatori devono superare il bias cognitivo "vittima = buona persona."
4. **Un SOLO dettaglio** separa il vero killer da 2-3 candidati finali ugualmente plausibili.
5. **Tutti mentono** — Ogni alibi è parzialmente falso perché ognuno nasconde qualcosa.
6. **Il killer non è il sospetto evidente** — Né il marito, né il socio, né il figlio. È la persona "invisibile."
7. **75+ documenti** — Volume di informazione che richiede metodo, non intuizione.
8. **4 domande di verifica** (non 3) — Chi? Chi è il complice inconsapevole? Perché? Come?

---

# PARTE 3: I PERSONAGGI

## 3.1 I 10 Sospetti

Ogni sospetto ha una **MASCHERA SOCIALE** (come appare) e una **REALTÀ** (cosa nasconde). Per ognuno: il movente è reale, l'opportunità è plausibile, le prove circostanziali esistono. La sfida è distinguere chi ha ucciso da chi ha semplicemente mentito.

---

### SOSPETTO 1 — Davide Marchetti (50 anni) — MARITO

| | |
|---|---|
| **Maschera** | Il marito moderno e solidale. Si è fatto da parte per la carriera della moglie. Sorriso gentile alle inaugurazioni. |
| **Realtà** | Ludopatico. Debiti di gioco per €340.000 accumulati al Casinò di Campione e su piattaforme online. Ha chiesto a Chiara un prestito, lei ha rifiutato e minacciato il divorzio. Ha un'amante: Elena Brambilla, la dottoressa di famiglia. |
| **Movente** | Il testamento di Chiara gli lascia il 50% del patrimonio (~€6M). Con Chiara viva e il divorzio, perde tutto. Con Chiara morta, risolve i debiti e tiene la villa. |
| **Alibi dichiarato** | "Ero a letto a Montevecchia. Ho preso un Tavor alle 22:00 e dormito fino alle 7:00." La dottoressa Brambilla conferma di avergli prescritto il Tavor. |
| **Cosa nasconde** | Non era a letto. Le celle telefoniche lo piazzano nell'area di Merate tra le 23:15 e le 00:30. Ha guidato fino alla Filatura, ma afferma di aver solo "cercato Chiara perché non rispondeva al telefono." |
| **Ruolo reale** | **INNOCENTE** — Era alla Filatura quella notte, ma è arrivato DOPO l'omicidio (dimostrato dalla sequenza dei badge e da un dettaglio nelle videosorveglianze). Ha trovato il corpo e, nel panico, è scappato senza chiamare i soccorsi per paura di essere incolpato. Ha poi manipolato la scena spostando un oggetto (il suo accendino, caduto dalla tasca). |

---

### SOSPETTO 2 — Federica Colombo (39 anni) — SOCIA D'AFFARI

| | |
|---|---|
| **Maschera** | La migliore amica. Co-fondatrice della Fondazione, "il braccio destro di Chiara." Sempre presente, sempre leale. |
| **Realtà** | Sta preparando un'OPA ostile con Meridian Capital per acquisire la Filatura a prezzo stracciato dopo la morte di Chiara. Ha un accordo segreto con il fondo: il 15% della vendita come commissione personale (€2.7M). |
| **Movente** | Con Chiara viva, la vendita era a condizioni sfavorevoli per Federica. Con Chiara morta, Federica eredita la gestione della Fondazione e può chiudere l'accordo con Meridian alle sue condizioni. |
| **Alibi dichiarato** | "Ero al cinema con mia sorella al Multiplex Lecco. Il film (Nosferatu, sala 3) è finito alle 23:15. Sono tornata a casa a Merate alle 23:45." |
| **Cosa nasconde** | Lo scontrino del cinema è delle 19:45 (non delle 21:00 come dichiara). Ha due ore non coperte. Ma la telecamera del parcheggio del multiplex la riprende uscire alle 22:10, il che la mette in area Merate in tempo per il delitto. |
| **Ruolo reale** | **INNOCENTE** — Le due ore non coperte sono state spese in un incontro segreto con l'avvocato di Meridian Capital in un bar di Lecco (confermato dalla videosorveglianza del bar, che i giocatori trovano solo incrociando un numero di telefono nei tabulati). Non era alla Filatura. |

---

### SOSPETTO 3 — Luca Marchetti-Tessari (24 anni) — FIGLIO

| | |
|---|---|
| **Maschera** | Il ragazzo brillante ma ribelle. Studia Scienze Ambientali a Milano. Ha litigato con la madre perché "lei non capisce la mia generazione." |
| **Realtà** | Ha scoperto la contaminazione nei sotterranei della Filatura durante una tesi di ricerca. Ha confrontato la madre, che ha reagito minacciandolo: "Se parli, ti taglio fuori da tutto." Luca ha contattato un'associazione ambientalista e un giornalista. |
| **Movente** | Rabbia personale per la scoperta che la madre è una criminale ambientale. La minaccia di diseredamento. L'impulsività giovanile. |
| **Alibi dichiarato** | "Ero nel mio appartamento a Milano (Via Padova 112) tutta la sera. Il mio coinquilino Tommaso conferma." |
| **Cosa nasconde** | Il coinquilino mente. Luca era a Merate quella sera: ha incontrato il giornalista Marco Sala al Caffè Roma alle 20:30 per consegnargli documenti sulla contaminazione. Ma è tornato a Milano in treno (Merate-Milano Porta Garibaldi, treno delle 21:47, biglietto acquistato via app — rintracciabile negli estratti conto). Non era a Merate al momento del delitto. |
| **Ruolo reale** | **INNOCENTE** — Ha un alibi di ferro (biglietto treno 21:47 + celle telefoniche confermano il ritorno a Milano). Ma il coinquilino mente perché Luca gli ha chiesto di non rivelare l'incontro con il giornalista, per proteggere la fonte. |

---

### SOSPETTO 4 — Anya Horvat (29 anni) — ASSISTENTE PERSONALE

| | |
|---|---|
| **Maschera** | La giovane immigrata grata. Croata, arrivata in Italia a 22 anni, "Chiara mi ha dato un'opportunità." Lavora 60 ore settimanali con devozione apparente. |
| **Realtà** | Sfruttata sistematicamente: stipendio dichiarato €2.800/mese, effettivo €1.400 (il resto "trattenuto per alloggio" mai fornito). Passaporto trattenuto da Chiara per tre mesi nel 2024 ("per pratiche burocratiche"). Ha registrato conversazioni con Chiara come prova per una futura denuncia. |
| **Movente** | Vendetta per lo sfruttamento. Chiara aveva scoperto le registrazioni segrete e minacciato di farla licenziare e deportare (illegalmente, ma Anya non lo sapeva). |
| **Alibi dichiarato** | "Ero nel mio monolocale a Merate (Via Cavour 18) dalle 20:00. Ho guardato Netflix. La cronologia del mio account lo conferma." |
| **Cosa nasconde** | L'account Netflix mostra attività, ma il telefono di Anya risulta spento dalle 22:30 alle 01:15 — un buco identico a quello di altri sospetti. Dice: "Si era scaricata la batteria." Possibile, ma non verificabile. |
| **Ruolo reale** | **INNOCENTE** — Le registrazioni audio che Anya possedeva erano la sua arma, non l'omicidio. Stava preparando una denuncia all'Ispettorato del Lavoro (appuntamento fissato per il lunedì 17 marzo). Non aveva bisogno di uccidere Chiara — aveva un piano legale. Il telefono spento è reale (batteria scarica; il caricatore era rotto, confermato da un ordine Amazon del 14 marzo per un caricatore nuovo). |

---

### SOSPETTO 5 — Roberto Galli (58 anni) — SINDACO DI MERATE

| | |
|---|---|
| **Maschera** | Il sindaco operoso. "Il rinnovamento di Merate passa dalla cultura e dall'innovazione." Ha inaugurato la Filatura con Chiara. Foto insieme su ogni manifesto. |
| **Realtà** | Ha ricevuto €180.000 in tangenti (in tre tranche da €60.000, versate su un conto intestato alla moglie in Svizzera) per approvare il cambio di destinazione d'uso della Filatura SENZA richiedere la bonifica completa dei sotterranei. Ha falsificato la certificazione ambientale. |
| **Movente** | Chiara stava vendendo la Filatura. Il nuovo proprietario (Meridian Capital) avrebbe fatto una due diligence reale, scoprendo la contaminazione mai bonificata. Questo avrebbe esposto la certificazione falsa di Galli = fine carriera, processo penale, carcere. |
| **Alibi dichiarato** | "Ero alla cena del Rotary Club di Lecco, al Ristorante Griso di Malgrate. Dalle 20:00 alle 23:30. Venti testimoni." |
| **Cosa nasconde** | L'alibi è vero al 90%. Ma Galli è uscito dal ristorante "per una telefonata" alle 22:45 e rientrato alle 23:05. Venti minuti fuori. Il ristorante è a 12 minuti in auto dalla Filatura. Tecnicamente possibile arrivare, uccidere, tornare — ma estremamente stretto. Le telecamere del ristorante lo showing uscire e rientrare dal parcheggio. |
| **Ruolo reale** | **INNOCENTE** — I 20 minuti sono stati spesi in una telefonata (confermata dai tabulati) con il suo avvocato penalista a Milano, discutendo di una strategia difensiva nel caso la contaminazione venisse scoperta. Non è andato alla Filatura. L'auto non si è mossa (confermato dal GPS Telepass con il timestamp). |

---

### SOSPETTO 6 — Marco Sala (42 anni) — GIORNALISTA

| | |
|---|---|
| **Maschera** | Il giornalista investigativo locale, voce del territorio. Scrive per *La Provincia di Lecco* e collabora con *Il Giorno*. "La verità prima di tutto." |
| **Realtà** | Ha ricevuto €48.000 in tre anni da Chiara Tessari (tramite "consulenze di comunicazione" fatturate dalla sua P.IVA) per NON pubblicare un'inchiesta sulla contaminazione. Chiara lo pagava per il silenzio. Ma Luca gli ha appena dato nuovi documenti, e Marco vuole pubblicare — sia per etica (dopo anni di compromessi) sia perché un altro giornalista sta indagando sullo stesso tema. |
| **Movente** | Se Chiara svela che Marco era pagato per tacere, la sua carriera è finita. Chiara lo aveva minacciato: "Se pubblichi, racconto tutto." Ma con Chiara morta, Marco può pubblicare l'inchiesta come "esclusiva" e diventare l'eroe anziché il corrotto. |
| **Alibi dichiarato** | "Ero a casa a Lecco (Via Cavour 22) tutta la sera. Ho scritto fino a tardi. La mia compagna Silvia conferma." |
| **Cosa nasconde** | Silvia conferma, ma i tabulati mostrano che Marco ha ricevuto una chiamata da un numero sconosciuto (prepagata) alle 23:10 durata 4 minuti. Non sa spiegare chi fosse: "Telemarketing, ho riattaccato subito." I tabulati dicono 4 minuti, non "subito." La cella telefonica lo colloca a Lecco (coerente con l'alibi). |
| **Ruolo reale** | **INNOCENTE** — La telefonata era da un informatore anonimo che gli dava un anticipazione sulla vendita a Meridian. Marco è moralmente compromesso ma non assassino. Il suo crimine è corruzione giornalistica, non omicidio. |

---

### SOSPETTO 7 — Dott.ssa Elena Brambilla (55 anni) — MEDICO DI FAMIGLIA

| | |
|---|---|
| **Maschera** | La dottoressa di provincia premurosa. Conosce tutti a Merate. "La salute della comunità è la mia missione." |
| **Realtà** | Ha una relazione con Davide (amante da 2 anni). Prescrive benzodiazepine con generosità eccessiva a diversi pazienti. Ha scoperto durante una visita medica due settimane prima dell'omicidio che Chiara aveva un tumore al pancreas in stadio avanzato (prognosi 6-12 mesi) — informazione che Chiara voleva tenere segreta da tutti. Elena ha involontariamente condiviso questa informazione con una persona: **Giorgio Colombo**, durante una conversazione casuale ("La Tessari? Poverina, non sa che le restano pochi mesi..."). |
| **Movente** | Se Chiara avesse scoperto la relazione con Davide e la violazione del segreto medico, Elena avrebbe perso licenza medica, reputazione, e il suo amante. |
| **Alibi dichiarato** | "Ero a casa mia a Merate (Via Manzoni 8). Ho letto fino a mezzanotte. Sola." |
| **Cosa nasconde** | Non era sola. Davide Marchetti era da lei fino alle 22:30 (corrobora parzialmente l'alibi di Davide — ma entrambi mentono sull'orario). Le celle telefoniche la piazzano a casa per tutta la notte. |
| **Ruolo reale** | **COMPLICE INCONSAPEVOLE** — Ha involontariamente fornito a Giorgio l'informazione che ha scatenato l'omicidio. Quando ha detto a Giorgio che Chiara stava morendo, Giorgio ha capito che Chiara avrebbe potuto "confessare tutto" in punto di morte o lasciare documenti che lo incastravano. Elena non sa di aver innescato la catena. |

---

### SOSPETTO 8 — Giorgio Colombo (62 anni) — EX CAPOMASTRO

| | |
|---|---|
| **Maschera** | Il vecchio operaio onesto. Ha lavorato alla Filatura per 38 anni (1978-2016). Conosce ogni mattone, ogni tubo, ogni ombra di quel posto. Ora in pensione, fa il volontario alla Pro Loco. "La Filatura è la mia vita." |
| **Realtà** | Durante gli anni della fabbrica, ha gestito per conto della famiglia Tessari (prima il padre di Chiara, poi Chiara stessa) l'impiego di manodopera irregolare per i lavori di manutenzione e la "bonifica" fasulla dei sotterranei. Ha intascato una commissione del 20% sui risparmi (~€190.000 in 6 anni). Chiara aveva deciso di collaborare con le autorità per la contaminazione (come mossa difensiva per la vendita), e la prima persona da sacrificare sarebbe stato Giorgio — il capro espiatorio perfetto: vecchio, senza avvocati, senza rete di protezione. |
| **Movente** | **Sopravvivenza.** Quando Elena Brambilla gli ha detto casualmente che Chiara era malata terminale ("Le restano pochi mesi"), Giorgio ha capito che Chiara avrebbe potuto: (a) collaborare con la giustizia per alleggerire la propria posizione, scaricando tutto su di lui; (b) lasciare documenti post-mortem che lo incastravano; (c) confessare in punto di morte. Con Chiara morta ORA e SENZA che nessuno sappia dei suoi piani di collaborazione, Giorgio è salvo. È una corsa contro il tempo. |
| **Alibi dichiarato** | "Ero a casa mia a Merate (Via Parini 3) con mia moglie Angela. Abbiamo guardato la TV fino alle 23:00 e poi siamo andati a letto." La moglie conferma. |
| **Cosa nasconde** | **TUTTO.** |
| **Ruolo reale** | **IL COLPEVOLE** |

**Come Giorgio ha ucciso Chiara — Ricostruzione completa:**

1. **Preparazione (11-14 marzo)**: Dopo la conversazione con Elena, Giorgio ha deciso di agire. Conosce la Filatura come nessun altro. Sa che il venerdì sera Chiara lavora tardi nel suo ufficio al primo piano. Sa che il vigilante Giovanni Poli fa il giro alle 22:00, poi si chiude nella guardiola fino alle 06:00. Sa che la telecamera dell'ala storica (CAM-04) ha un angolo cieco dietro i pilastri del vecchio reparto tintura. Sa che la porta secondaria del magazzino nord (accesso da Via Bergamo 12/b) ha ancora la serratura vecchia — e lui ha la chiave dal 1992.

2. **La sera del 14 marzo 2025**: Giorgio esce di casa alle 22:40 a piedi (abita a 800 metri dalla Filatura — 9 minuti a piedi). Non prende l'auto. Entra dalla porta del magazzino nord con la vecchia chiave alle 22:50 circa. La porta non è collegata al sistema di badge elettronico (è considerata "murata" negli schemi ufficiali — ma Giorgio sa che si apre ancora).

3. **L'omicidio (23:00-23:15)**: Chiara è nell'ala storica. Sta facendo una foto alla passerella per un post Instagram (il suo telefono viene trovato acceso sull'app fotocamera). Giorgio la raggiunge. Le parla brevemente — non sappiamo di cosa, ma Chiara si fida di Giorgio (lo conosce da quando era bambina). In un momento di distrazione, Giorgio la colpisce alla testa con una chiave inglese industriale da 600g (attrezzo presente in loco, nel kit di manutenzione dell'ala storica). Chiara cade. Giorgio la trascina alla base della passerella, posizionandola come se fosse caduta dalla catwalk. Posiziona la chiave inglese nel kit di manutenzione aperto (come se fosse caduta anche quella).

4. **La fuga (23:15-23:25)**: Giorgio esce dalla stessa porta del magazzino nord. Torna a casa a piedi. Non ha usato telefono, auto, badge, o qualsiasi dispositivo tracciabile. 38 anni di conoscenza della fabbrica gli hanno permesso di pianificare un percorso invisibile.

5. **L'errore fatale** (IL SINGOLO DETTAGLIO): **Il telefono di Giorgio si è connesso automaticamente alla rete Wi-Fi della Filatura ("Filatura-Internal").** Giorgio non ci ha pensato — il suo Samsung Galaxy A54 aveva memorizzato la rete durante gli anni di lavoro e si è agganciato automaticamente quando è entrato nel raggio del segnale. Il log del router Wi-Fi registra il dispositivo "GC-Samsung" connesso dalle 22:53 alle 23:22.

**Come i giocatori trovano il dettaglio:**
- **Documento A** — `forensic_analisi-digitale.md`, pagina 4 di 5, nella sezione "Log rete Wi-Fi Filatura-Internal": tra una lista di ~15 dispositivi connessi nelle 24 ore, compare `22:53 — GC-Samsung (MAC: A4:77:33:xx:xx:xx) — disconnessione: 23:22 — durata: 29 min`
- **Documento B** — `legal_audit-infrastruttura-filatura.md`, in un allegato tecnico sull'inventario dei sistemi IT: `Dispositivi con accesso legacy mantenuto alla rete: [...] Colombo G. — Samsung Galaxy A54 — ID rete: GC-Samsung — accesso concesso: 2019 — stato: attivo (non revocato)`

La connessione tra questi due documenti NON è evidenziata in alcun modo. Il giocatore deve notare "GC-Samsung" in un log tecnico e collegarlo al nome di Giorgio Colombo in un inventario burocratico. Nessun altro documento menziona questo collegamento.

---

### SOSPETTO 9 — Beatrice Tessari (73 anni) — SUOCERA / MATRIARCA

| | |
|---|---|
| **Maschera** | L'elegante signora anziana. Vedova del fondatore originale della Filatura (Alberto Tessari, morto 2010). Vive nella villa di famiglia a Montevecchia. Partecipa alle cene di beneficenza. "Chiara è la figlia che non ho mai avuto." |
| **Realtà** | Odia Chiara. La considera un'arrivista che ha rubato l'azienda di famiglia (Alberto aveva lasciato la Filatura a Chiara nel testamento, scavalcandone Beatrice e Davide). Beatrice ha sfidato il testamento in tribunale e perso (2012). Da allora, lavora nell'ombra per riprendere il controllo. Ha un accordo con Federica Colombo: se la vendita a Meridian va in porto, Beatrice riceve €2M come "consulente." |
| **Movente** | Vendetta multigenerazionale + denaro. Se Chiara muore, il patrimonio va a Davide (suo figlio — che Beatrice controlla), e Beatrice torna a comandare. |
| **Alibi dichiarato** | "Ero nella mia villa a Montevecchia. La badante filippina, Rosa, conferma che sono andata a letto alle 21:30." |
| **Cosa nasconde** | L'accordo segreto con Federica e l'astio verso Chiara. Ma l'alibi è solido: Rosa conferma, le telecamere della villetta confermano (Beatrice non ha auto, non guida — patente mai presa —, Montevecchia è a 15 minuti di auto da Merate e non collegata da bus serali). Non aveva mezzo fisico per raggiungere la Filatura. |
| **Ruolo reale** | **INNOCENTE** — È la *mandante morale* nel senso che il suo odio ha alimentato le dinamiche familiari tossiche, ma non ha commesso né commissionato fisicamente l'omicidio. Il suo alibi è inattaccabile per ragioni logistiche. |

---

### SOSPETTO 10 — Dott. Matteo Sartori (36 anni) — CONSULENTE AMBIENTALE

| | |
|---|---|
| **Maschera** | Il giovane professionista green. Laureato al Politecnico, studio di consulenza ambientale, assunto da Chiara per "certificare la bonifica." Cita la sostenibilità a ogni frase. |
| **Realtà** | Ha falsificato le relazioni ambientali sulla bonifica. Sa perfettamente che i sotterranei contengono cromo esavalente sopra i limiti di legge. Pagato €120.000 in due anni per i report falsi. Se la verità emerge, perde l'iscrizione all'albo, il business, e finisce in tribunale. |
| **Movente** | Identico a quello di Galli: la vendita a Meridian significherebbe una due diligence reale, che smaschererebbe i suoi report falsi. Con Chiara morta, la vendita potrebbe saltare, dandogli tempo per "aggiustare" i report o fuggire. |
| **Alibi dichiarato** | "Ero nel mio ufficio a Milano (Via Tortona 14) fino a tardi, lavoravo a un report per un altro cliente. Sono uscito alle 23:30." |
| **Cosa nasconde** | L'accesso badge dell'ufficio lo registra uscire alle 21:10, non alle 23:30. Due ore e mezza non coperte. Il suo telefono risulta in area Merate tra le 22:00 e le 23:45 (cella telefonica di Merate centro). Era in zona. |
| **Ruolo reale** | **INNOCENTE** — Le due ore a Merate sono state spese per recuperare documenti dal suo archivio in un garage affittato (Via Bergamo 30 — a 200 metri dalla Filatura). Stava raccogliendo i report originali non falsificati per distruggerli. L'ha fatto in panico dopo aver saputo della vendita a Meridian. Non era alla Filatura, ma nel garage — confermato dalla telecamera di un'officina vicina che lo riprende all'ingresso del garage alle 22:08. |

---

## 3.2 I 10 NPC (Non-Sospetti)

Questi personaggi forniscono testimonianze, contesto, e possiedono informazioni chiave, ma non hanno movente per l'omicidio.

| # | Nome | Ruolo | Funzione Narrativa |
|---|------|-------|--------------------|
| 1 | **Giovanni Poli** (55) | Vigilante notturno della Filatura | Trova il corpo. Testimonia sugli orari dei giri. La sua routine è la base della timeline. |
| 2 | **Maria Greppi** (48) | Donna delle pulizie della Filatura | Ha visto Giorgio Colombo "aggirarsi" nei pressi della Filatura due giorni prima dell'omicidio ("Faceva il nostalgico, come sempre"). Informazione che diventa cruciale a posteriori. |
| 3 | **Ahmed Rashid** (32) | Autista di un servizio di consegne notturne | Il suo furgone ha le dashcam. Una delle registrazioni mostra Via Bergamo alle 23:05 — ma l'immagine è sfocata e non identifica nessuno. Utile per la timeline. |
| 4 | **Luisa Bianchi** (65) | Vicina della Filatura (abita in Via Bergamo 8) | Ha sentito "un rumore metallico forte" intorno alle 23:10-23:15. Pensava fosse un gatto sui bidoni. Questo è coerente con l'orario dell'omicidio. |
| 5 | **Sofia Milani** (22) | Stagista alla Fondazione Trama, nipote di Federica | Ha lavorato fino alle 19:00 il venerdì. Ha notato che Chiara era "strana, nervosa" quel giorno. Ha sentito Chiara al telefono dire: "Non oserai." Non sa con chi parlasse. |
| 6 | **Carlo Venturi** (40) | Barista del Caffè Roma in Piazza Prinetti | Conferma l'incontro Luca-Marco Sala alle 20:30. Ha visto Luca andarsene verso le 21:20 in direzione della stazione. |
| 7 | **Avv. Riccardo Ferri** (60) | Avvocato della famiglia Tessari | Gestisce il testamento, i contratti societari, la trattativa con Meridian. Fornisce documenti legali cruciali. Non ha movente. |
| 8 | **Comm. Patrizia Moretti** (50) | Comandante della Stazione Carabinieri di Merate | Dirige le indagini. I rapporti di polizia sono a suo nome. Figura di autorità procedurale. |
| 9 | **Don Angelo Riva** (68) | Parroco di Merate, Santa Maria Nascente | Giorgio Colombo si confessa da lui. Don Angelo è tormentato ma vincolato dal segreto confessionale. In una conversazione con i Carabinieri, dice solo: "Pregate per le anime di tutti i coinvolti, nessuno escluso." — frase che i giocatori attenti noteranno. |
| 10 | **Prof.ssa Laura Fontana** (45) | Preside della scuola media di Merate | Amica di Chiara. Fornisce contesto sul rapporto madre-figlio (Chiara-Luca). Ha ricevuto un'email da Chiara il giorno prima dell'omicidio: "Se mi succede qualcosa, guarda nel cassetto della scrivania in ufficio." — red herring: nel cassetto c'è il testamento aggiornato, non una confessione. |

---

# PARTE 4: MECCANICA DI GIOCO — DESIGN DIFFICOLTÀ 5

## 4.1 Il Principio Architetturale

> **In un caso di Difficoltà 5, il giocatore non deve cercare "chi è colpevole" — deve cercare "chi NON lo è." L'eliminazione è più difficile dell'identificazione.**

Ogni documento **elimina possibilità** piuttosto che confermarle. Il giocatore che legge superficialmente vedrà 10 colpevoli plausibili. Il giocatore che analizza vedrà il campo restringersi, ma i candidati finali rimarranno ambigui fino all'ultimo documento.

## 4.2 Flusso Investigativo

```
Fase 1: "Che cos'è successo?" (30-60 min)
├── Documenti iniziali: rapporto polizia, autopsia, scena crimine, planimetria
├── Obiettivo: capire che NON è un incidente
└── Trigger: angolo del trauma incompatibile con caduta dalla catwalk

Fase 2: "Chi aveva motivo?" (60-120 min)
├── Interrogatori, email, finanze, social, chat
├── Obiettivo: scoprire che TUTTI avevano motivo
├── Colpo di scena: la vittima NON era innocente
└── Le maschere sociali cadono una per una

Fase 3: "Chi aveva opportunità?" (60-90 min)
├── Timeline, badge, celle telefoniche, telecamere, scontrini
├── Obiettivo: ridurre da 10 a 3-4 sospetti con opportunità reale
└── Sospetti rimanenti: Davide, Giorgio, Federica, Matteo

Fase 4: "Chi ha fatto davvero?" (60-90 min)
├── Eliminazione di Federica (bar di Lecco, videosorveglianza)
├── Eliminazione di Matteo (garage, telecamera officina)
├── Restano: Davide vs Giorgio — prove circostanziali equivalenti
├── IL SINGOLO DETTAGLIO: Wi-Fi log + inventario IT → Giorgio era alla Filatura
└── Chiarimento Davide: badge ingresso alle 23:35 (DOPO la morte)
```

**Tempo totale stimato: 4-6 ore**

## 4.3 Il Singolo Dettaglio — Specifiche di Design

Il dettaglio che separa il colpevole dal candidato alternativo DEVE essere:

- ✅ Presente in un documento accessibile fin dall'inizio (non sbloccato dopo)
- ✅ Non evidenziato, grassettato, o segnalato in alcun modo
- ✅ Inserito in un contesto "noioso" (log tecnico, inventario burocratico)
- ✅ Comprensibile senza conoscenze specialistiche (chiunque capisce che un telefono connesso al Wi-Fi era fisicamente lì)
- ✅ Verificabile incrociando DUE documenti separati (nessun documento singolo basta)
- ✅ Assolutamente conclusivo una volta trovato (non lascia spazio a interpretazione)
- ❌ MAI un indizio che richieda fortuna o intuizione — deve essere trovabile con metodo sistematico

## 4.4 Le 3 Indagini Parallele

I giocatori si troveranno ad indagare, senza rendersene conto, su 3 crimini diversi:

| Crimine | Colpevoli | Come confonde |
|---------|-----------|---------------|
| **L'omicidio** | Giorgio Colombo | Il crimine centrale |
| **La frode ambientale** | Chiara, Galli, Sartori, Giorgio | Tutti mentono per coprire QUESTO, non l'omicidio |
| **Il riciclaggio/sfruttamento** | Chiara, Federica, Giorgio | Moventi finanziari che sembrano moventi per omicidio |

Il giocatore deve capire che la maggior parte delle bugie non sono legate all'omicidio ma agli altri crimini. Questo è il "rumore" che rende il caso Difficoltà 5.

## 4.5 Distribuzione Indizi

| Tipo | % | Quantità (~75 docs) | Descrizione |
|------|---|---------------------|-------------|
| Indizi diretti | 15% | ~11 | Prove che puntano chiaramente (ma verso DIVERSI sospetti) |
| Indizi da collegare | 35% | ~26 | Richiedono connessioni tra 2+ documenti |
| Indizi di eliminazione | 25% | ~19 | Scagionano sospetti specifici (alibi, impossibilità fisiche) |
| Rumore narrativo | 15% | ~11 | Informazioni sui crimini paralleli (non l'omicidio) |
| Red herring | 10% | ~8 | False piste deliberate |

**Nota**: La distribuzione standard (30% diretti) è stata ridotta a 15% per aumentare la difficoltà. Gli indizi da collegare + eliminazione (60%) sono il cuore del gioco.

---

# PARTE 5: MAPPA DOCUMENTI COMPLETA

Genera ognuno di questi file come markdown autonomo, rispettando le convenzioni di naming e formato del sistema Secret Case.

## 5.1 Documenti di Polizia (`police_`) — 12 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `police_rapporto-iniziale.md` | Rapporto del Comm. Moretti sulla scoperta del corpo | Orario scoperta, prime osservazioni, classificazione iniziale "incidente" |
| `police_sopralluogo-scena-crimine.md` | Rapporto dettagliato della scena | Posizione corpo, chiave inglese, passerella, distanze, illuminazione. Nota: "La porta del magazzino nord risulta chiusa ma NON sigillata come da planimetria ufficiale" |
| `police_verbale-davide-marchetti.md` | Interrogatorio del marito | Alibi Tavor, nervosismo, contraddizioni sugli orari. Ammette rapporto teso. Non ammette l'amante. |
| `police_verbale-federica-colombo.md` | Interrogatorio della socia | Alibi cinema, orari vaghi. Non menziona Meridian Capital. |
| `police_verbale-luca-marchetti.md` | Interrogatorio del figlio | Alibi Milano, coinquilino. Molto emotivo. Dice cose come "Mia madre non era chi credevate." |
| `police_verbale-anya-horvat.md` | Interrogatorio dell'assistente | Alibi Netflix, telefono scarico. Visibilmente spaventata. Accento croato. Menziona di sfuggita: "Il signor Colombo veniva spesso a trovarla, anche tardi." |
| `police_verbale-roberto-galli.md` | Interrogatorio del sindaco | Alibi Rotary, sicuro di sé. Troppo collaborativo. Offre "pieno supporto istituzionale." |
| `police_verbale-marco-sala.md` | Interrogatorio del giornalista | Alibi casa, compagna. Nega di aver incontrato Luca. Poi ammette quando messo alle strette con la testimonianza del barista. |
| `police_verbale-elena-brambilla.md` | Interrogatorio della dottoressa | Alibi casa, sola. Non menziona Davide. Non menziona la diagnosi di Chiara per "segreto professionale." Dice casualmente: "Ho parlato un po' con tutti ultimamente, anche con il vecchio Colombo, sa, a Merate ci si conosce tutti..." |
| `police_verbale-giorgio-colombo.md` | Interrogatorio del colpevole | Calmo, collaborativo, nonno gentile. "Quella fabbrica è la mia vita. Non farei mai niente per danneggiarla." Alibi moglie + TV. Non fa errori evidenti. Il verbale è VOLUTAMENTE il più corto e meno interessante dei dieci — per renderlo "invisibile." |
| `police_verbale-beatrice-tessari.md` | Interrogatorio della matriarca | Alibi forte (badante + no patente + no auto). Sprezzante verso Chiara, ma chiaramente incapace fisicamente. Dice: "Chiara ha avuto quello che voleva. Forse non tutto." |
| `police_verbale-matteo-sartori.md` | Interrogatorio del consulente | Alibi ufficio Milano, nervoso. Contraddizioni sugli orari (dice 23:30, badge dice 21:10). Suda visibilmente. |

## 5.2 Documenti Medici (`medical_`) — 3 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `medical_rapporto-autopsia.md` | Autopsia completa della vittima | Trauma cranico non compatibile con caduta: angolo di impatto 35° (caduta dalla catwalk produrrebbe 80-90°). Oggetto contundente con bordo piatto. Ora della morte: 23:00-23:30. **Anche: "Si rileva neoplasia pancreatica in stadio avanzato, non precedentemente nota alle autorità."** |
| `medical_analisi-tossicologica.md` | Screening sostanze | Nessun veleno, nessuna droga. Tracce di camomilla nello stomaco. Niente di utile — ma conferma: NON è avvelenamento. |
| `medical_cartella-clinica-chiara.md` | Cartella medica della vittima (ottenuta con mandato dal medico curante) | Diagnosi di adenocarcinoma pancreatico (12 febbraio 2025). Prognosi: 6-12 mesi. Chiara ha rifiutato la chemioterapia. Ha chiesto "solo il tempo per mettere in ordine le cose." Nota a margine della dottoressa Brambilla: "La paziente insiste sulla massima riservatezza." |

## 5.3 Documenti Forensi (`forensic_`) — 6 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `forensic_analisi-tracce-biologiche.md` | DNA, capelli, fibre sulla scena | DNA di Chiara (ovvio), impronte di Giorgio Colombo su macchinari nell'ala storica (spiegabili: ci ha lavorato 38 anni), guanti da lavoro con tracce di Chiara nel kit manutenzione. Nessuna impronta utile sulla chiave inglese (pulita con uno straccio in loco). |
| `forensic_analisi-telecamere.md` | Report completo delle 6 telecamere della Filatura | CAM-01 (ingresso): Chiara entra alle 20:15, sola. Davide entra alle 23:35 (!). CAM-02 (parcheggio): auto di Chiara presente, no altre auto sospette nelle ore critiche. CAM-03 (corridoio 1° piano): Chiara va nell'ala storica alle 22:40. CAM-04 (ala storica): ANGOLO CIECO dietro i pilastri del reparto tintura — l'area dove è stata trovata la vittima è fuori campo. CAM-05 (ingresso secondario sud): nessun movimento. CAM-06 (magazzino nord, esterno): **La telecamera risulta "offline" dal 2023 — nota nel report: "guasto non riparato per ragioni di budget".** |
| `forensic_impronte-digitali.md` | Analisi impronte sulla scena | Impronte di Chiara, del vigilante Poli, del personale di pulizia. Impronte di Giorgio Colombo su macchinari vari (vecchie, stratificate — compatibili con anni di lavoro). Nessuna impronta fresca significativa sulle superfici critiche. |
| `forensic_analisi-digitale.md` | **DOCUMENTO CHIAVE (5 pagine)** — Analisi forense dispositivi digitali | [Pagina 1] Telefono Chiara: ultima attività 22:52 (app fotocamera). [Pagina 2] Computer Chiara: email a avvocato Ferri alle 18:30 su "documenti per lunedì." [Pagina 3] Analisi celle telefoniche tutti i sospetti (tabella riassuntiva). [Pagina 4] **Log rete Wi-Fi "Filatura-Internal" — lista dispositivi connessi tra le 22:00 e 01:00: include "22:53 — GC-Samsung (MAC: A4:77:33:F2:1B:9C) — disconnessione: 23:22 — durata: 29 min"** — questa riga è in mezzo a 14 altri dispositivi (stampanti, router, dispositivi IoT, telefono di Chiara, tablet della reception). [Pagina 5] Analisi messaggi cancellati: nessuno pertinente. |
| `forensic_planimetria-annotata.md` | Planimetria della Filatura con annotazioni della Scientifica | Posizione del corpo, posizione della chiave inglese, raggio delle telecamere, **porta magazzino nord marcata come "chiusa/non in uso"**, angoli ciechi evidenziati |
| `forensic_perizia-causa-morte.md` | Perizia specifica sulla meccanica della morte | Il colpo è stato inferto con un oggetto piatto e pesante (chiave inglese industriale compatibile), da una distanza ravvicinata (0.5-1m), da dietro e leggermente da destra. La vittima era in piedi. La caduta dalla passerella è stata simulata post-mortem (lividi post-mortali incompatibili con caduta). |

## 5.4 Email (`email_`) — 6 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `email_chiara-avvocato-ferri-vendita.md` | Corrispondenza su vendita a Meridian | Chiara discute i termini. "Voglio assicurarmi che i dipendenti siano tutelati." — MASCHERA vs realtà: in un'altra email negozia il prezzo dimenticandosi dei dipendenti. |
| `email_chiara-federica-fondazione.md` | Scambio sulla gestione Fondazione | Tensioni crescenti. Chiara: "I conti non tornano, Federica. Ho chiesto un audit." Federica: "Stai diventando paranoica." |
| `email_chiara-matteo-sartori-report.md` | Scambio sui report ambientali | Chiara: "Mi serve un report aggiornato che confermi tutto OK per la due diligence." Matteo: "Non posso garantire..." Chiara: "Troverai il modo." |
| `email_chiara-anonima-minaccia.md` | Email anonima ricevuta da Chiara il 10 marzo | "Lo sappiamo tutti cosa c'è sotto la Filatura. Pagate o raccontiamo." — Mittente non identificabile (email usa e getta). NOTA: questo è un red herring — l'email è stata inviata da un ex dipendente rancoroso che non c'entra con l'omicidio. |
| `email_chiara-laura-fontana.md` | Email alla preside amica il 13 marzo | "Se mi succede qualcosa, guarda nel cassetto della scrivania del mio ufficio alla Filatura." — Contesto: Chiara si sentiva minacciata. Red herring: nel cassetto c'è il testamento aggiornato, non una confessione. |
| `email_luca-chiara-confronto.md` | Thread di email tra madre e figlio, dicembre 2024-marzo 2025 | Escalation drammatica. Luca: "Ho trovato i dati sulla contaminazione." Chiara: "Non sai di cosa parli." Luca: "Hai avvelenato il terreno per soldi." Chiara: "Se parli ti tolgo tutto." Ultima email di Luca (12 marzo): "Non mi fai più paura." |

## 5.5 Chat (`chat_`) — 5 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `chat_whatsapp-chiara-davide.md` | Conversazione fra coniugi, ultima settimana | Freddi, formali. Davide: "Dove sei stasera?" Chiara: "In Filatura, torno tardi." (14 marzo, 19:45). Davide: "Come sempre." |
| `chat_whatsapp-chiara-anya.md` | Chat di lavoro con l'assistente | Ordini secchi. "Cancella le riunioni di lunedì." "Assicurati che il magazzino nord sia chiuso." (13 marzo — 2 giorni prima). NOTA: Chiara voleva il magazzino chiuso. Perché? |
| `chat_whatsapp-federica-meridian.md` | Chat di Federica con un contatto salvato come "M.C." (Meridian Capital) | Messaggi cancellati parzialmente. Ricostruiti: "L'offerta è a 14M se acceleriamo. La vedova sarà più malleabile." — datato 12 marzo, DUE GIORNI PRIMA DELL'OMICIDIO. Ma: "La vedova sarà più malleabile" si riferisce a Beatrice (che Federica chiama così), non indica premeditazione di omicidio. È un commento cinico sulla strategia di acquisto in caso la vendita vada in lungo. Falsa pista potente. |
| `chat_telegram-marco-sala-fonte.md` | Chat criptata del giornalista con fonte anonima | Fonte: "L'analisi del terreno la trovi qui [link]. Cromo esavalente 15 volte il limite." Marco: "Pubblico entro la settimana." — Fonte è confermata dagli NPC come Luca. |
| `chat_whatsapp-gruppo-famiglia-tessari.md` | Gruppo WhatsApp "Famiglia Tessari" (Chiara, Davide, Luca, Beatrice) | Messaggi tesi. Beatrice: "La cena di Pasqua la facciamo a casa MIA quest'anno." Chiara: "Come preferisci, Beatrice." Luca: non scrive da 2 mesi. Davide: emoji e messaggi vuoti. NOTA: il gruppo era muto da settimane — nessuna dinamica familiare attiva. |

## 5.6 Tabulati Telefonici (`phone_`) — 4 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `phone_tabulati-chiara-ultima-settimana.md` | Chiamate di Chiara 7-14 marzo | Molte chiamate a Ferri (avvocato), a Federica, a un numero sconosciuto (Elena Brambilla da cellulare privato). Ultima chiamata: 22:10 a Davide (senza risposta, durata 0 sec). |
| `phone_tabulati-davide-notte.md` | Chiamate e celle di Davide, sera 14-15 marzo | Celle: Montevecchia fino 23:10, poi MERATE dalle 23:15. Conferma che si è spostato. Chiamata in arrivo da Elena alle 22:25 (3 minuti). |
| `phone_tabulati-sospetti-celle.md` | **Tabella celle telefoniche di TUTTI i sospetti, sera 14-15 marzo** | Tabella con 10 righe (uno per sospetto), colonne orarie (22:00, 22:30, 23:00, 23:30, 00:00). Giorgio Colombo: **il suo telefono risulta sulla cella di MERATE CENTRO per tutta la notte** — coerente con l'alibi (abita a Merate), ma anche coerente con la Filatura (stessa cella). NON discriminante da solo. |
| `phone_tabulati-marco-sala.md` | Chiamate del giornalista, sera del 14 marzo | Chiamata da numero prepagato alle 23:10, durata 4 minuti. Cella: LECCO (coerente con alibi). |

## 5.7 Documenti Bancari (`bank_`) — 5 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `bank_conto-chiara-tessari.md` | Conto personale di Chiara, ultimi 6 mesi | Movimenti normali di una donna ricca. NOTA NASCOSTA: 3 bonifici da €60.000 a "Studio Galli R." (lo studio "professionale" del sindaco) — le tangenti. |
| `bank_conto-fondazione-trama.md` | Conto della Fondazione | Entrate da sponsor + contributi pubblici. Uscite: "consulenza comunicazione Sala M." (€16.000/anno x3) = i pagamenti al giornalista. "Consulenza artistica Colombo G." (€15.000/anno) = pagamenti a Giorgio per "non parlare." |
| `bank_conto-davide-marchetti.md` | Conto del marito | Prelievi ATM: €500, €500, €500, €500 — ogni settimana. Gioco d'azzardo. Saldo: -€28.000 (fido bancario al limite). Bonifico ricevuto da "B. Tessari" (la suocera) di €50.000 il 10 febbraio. |
| `bank_movimenti-meridian-capital.md` | Estratto conto società offshore collegata a Meridian | Bonifico a "F. Colombo Consulting" (€45.000) — la commissione anticipata a Federica. |
| `bank_conto-tessari-rigenerazione.md` | Conto aziendale della società di Chiara | Pagamenti regolari a "Edilizia Rapida S.r.l." (la ditta che gestisce la manodopera irregolare per Giorgio). Fatture da €120.000/anno per "manutenzione ordinaria" — cifra gonfiata, differenza intascata da Giorgio. |

## 5.8 Documenti Legali (`legal_`) — 6 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `legal_testamento-chiara-tessari.md` | Testamento (aggiornato 1 marzo 2025) | 50% a Davide, 30% a Luca, 20% alla Fondazione. NOTA: il testamento PRECEDENTE (2018) lasciava il 70% a Davide. Chiara ha ridotto la sua quota. |
| `legal_statuto-fondazione-trama.md` | Statuto della Fondazione | In caso di decesso del Presidente, la gestione passa al Vice-Presidente (Federica Colombo). Clausola 12: "Il VicePresidente ha piena autonomia nella gestione dei beni della Fondazione." |
| `legal_contratto-bonifica-filatura.md` | Contratto di bonifica del sito industriale (2018) | Firmato da Chiara e dalla ditta "EcoBonifica Lombardia S.r.l." Valore: €850.000. **Allegato tecnico:** capitolato che prescrive rimozione completa del terreno contaminato. Mai eseguito completamente. |
| `legal_audit-infrastruttura-filatura.md` | **DOCUMENTO CHIAVE** — Audit IT della Filatura (gennaio 2025) | 12 pagine di inventario tecnico. Alla pagina 8, nella sezione "Accessi rete Wi-Fi," c'è la lista degli utenti con accesso legacy: **"Colombo G. — Samsung Galaxy A54 — ID rete: GC-Samsung — accesso concesso: 2019 — stato: attivo (non revocato)"** |
| `legal_patto-meridian-capital.md` | Lettera d'intenti tra Tessari e Meridian Capital | Prezzo proposto: €18M. Clausola: "subordinato a due diligence ambientale positiva." — Questo è il trigger che terrorizza Galli, Sartori, E Giorgio. |
| `legal_denuncia-lavoratori.md` | Esposto anonimo all'Ispettorato del Lavoro (febbraio 2025) | Denuncia condizioni di sfruttamento lavorativo alla Filatura. Firmata "Lavoratori della Filatura." — Collegabile a Anya (è lei che l'ha scritto, ma il fatto che sia anonimo lo rende un dead-end investigativo). |

## 5.9 Articoli di Stampa (`newspaper_`) — 5 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `newspaper_corriere-omicidio-tessari.md` | Corriere della Sera, 16 marzo 2025 | Cronaca della scoperta. "La Signora della Rinascita trovata morta." Tono celebrativo: "Imprenditrice visionaria, esempio per le donne italiane." — La maschera ancora intatta. |
| `newspaper_provincia-lecco-indagini.md` | La Provincia di Lecco, 18 marzo 2025 | "Le indagini si allargano. Smentita l'ipotesi dell'incidente." Menziona che l'autopsia ha rivelato "elementi incompatibili con una caduta accidentale." |
| `newspaper_sole24ore-tessari-profilo.md` | Il Sole 24 Ore — profilo da archivio, pubblicato agosto 2024 | Intervista a Chiara. "Il mio obiettivo è dimostrare che si può fare impresa rigenerando." Foto patinata con operai sorridenti. — La maschera al massimo del suo splendore. Utile per il contrasto con la realtà. |
| `newspaper_inchiesta-contaminazione-soppressa.md` | Bozza di articolo di Marco Sala (mai pubblicato) | Titolo: "Sotto la rinascita, il veleno." Dati di contaminazione dettagliati. Menziona "fonti interne" (Luca). NOTA: è una bozza trovata sul computer di Marco, non un articolo pubblicato — perché Marco non l'ha mai pubblicato (era pagato per tacere). |
| `newspaper_eco-bergamo-fondazione.md` | L'Eco di Bergamo, ottobre 2024 | "La Fondazione Trama vince il premio Cultura Lombardia." Foto: Chiara con il Sindaco Galli, sorrisi. Il giornalista è Marco Sala. — Tutti insieme, tutti con la maschera. |

## 5.10 Social Media (`social_`) — 4 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `social_instagram-chiara-tessari.md` | Ultimi 10 post Instagram di Chiara | Foto professionali, inaugurazioni, selfie con operai. Ultimo post (14 marzo, 16:00): foto dell'ala storica con didascalia "Ogni pezzo di questa fabbrica racconta una storia. Anche quelli che nessuno vede più." — Inquietante a posteriori. |
| `social_facebook-fondazione-trama.md` | Pagina Facebook della Fondazione | Eventi, comunicati. NOTA: un commento di un utente anonimo (12 marzo): "Chiedete cosa c'è sotto il parcheggio verde." — Collegabile all'esposto dei lavoratori. |
| `social_twitter-luca-tessari.md` | Account X/Twitter del figlio | Tweet criptici: "La verità ha le radici nel terreno" (8 marzo). "Chi tace acconsente. Chi paga per il silenzio è complice." (11 marzo). "Presto." (13 marzo). |
| `social_linkedin-matteo-sartori.md` | Profilo LinkedIn del consulente | "Lead Environmental Consultant - Tessari Rigenerazione." Endorsement da Chiara. Competenze elencate: "Environmental Remediation, Soil Analysis, Compliance." — L'ironia della sua frode. |

## 5.11 Foto (`photo_`) — 5 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `photo_scena-crimine-panoramica.md` | Foto panoramica sezione ala storica | Descrizione dettagliata: corpo alla base della passerella, chiave inglese nel kit aperto, macchina fotografica (telefono) 3 metri più avanti. Illuminazione debole, pilastri industriali. **NOTA: "Si osserva un'impronta di scarpa parziale (suola liscia, taglia ~43) nel pulviscolo a 2 metri dal corpo."** |
| `photo_scena-crimine-dettaglio.md` | Close-up della ferita e dell'area circostante | Chiave inglese da 600g, modello standard industriale. Nessuna impronta utilizzabile. Sangue coagulato intorno alla testa. |
| `photo_sorveglianza-ingresso-principale.md` | Frame CAM-01 | 22:15: Chiara entra sola. 23:35: Davide entra (nervoso, guarda il telefono). 23:52: Davide esce (quasi di corsa). — NOTA: Giorgio NON appare mai su questa camera (è entrato dal magazzino nord). |
| `photo_sorveglianza-parcheggio.md` | Frame CAM-02 | Auto di Chiara (Audi Q3 bianca) parcheggiata. Nessun'altra auto compare tra le 22:00 e 24:00. — NOTA: Giorgio è venuto a piedi. Davide ha parcheggiato fuori dal raggio della telecamera (su Via Bergamo, non nel parcheggio). |
| `photo_rilievi-porta-magazzino-nord.md` | Foto della porta del magazzino nord | "La porta è registrata come 'chiusa e murata' negli schemi della Filatura. Tuttavia, il sopralluogo rivela che la porta è apribile con una chiave a leva tradizionale. La serratura mostra segni di uso recente (lubrificazione fresca, assenza di ruggine nel meccanismo)." |

## 5.12 Diari (`diary_`) — 3 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `diary_diario-chiara.md` | Diario personale di Chiara, ultime pagine | Scritto a mano. "Non so quanto mi resta. Non è il cancro che mi spaventa — è quello che lascio dietro. La Filatura è il mio monumento e la mia colpa." (10 marzo). "Giorgio è venuto oggi. Mi ha guardato con quegli occhi. Sa qualcosa." (12 marzo). |
| `diary_appunti-ricerca-luca.md` | Quaderno di appunti di Luca (sequestrato dal suo appartamento) | Dati tecnici sulla contaminazione, nomi, cifre. Tabella: "Cromo VI — campione 1: 15x limite, campione 2: 22x limite." In fondo: "Mamma lo sapeva dal 2019. File nel server aziendale, cartella /archivio/bonifica/report-reali/" |
| `diary_agenda-chiara-marzo.md` | Agenda settimanale di Chiara, 10-16 marzo | Lunedì-giovedì: riunioni normali. Venerdì 14: "18:30 — Ferri (doc da firmare)" / "20:00 — Filatura (foto ala storica per IG)" / "22:00 — tranquilla?" — L'appuntamento serale alla Filatura spiega perché era lì. |

## 5.13 Supplementari — 8 file

| File | Contenuto | Indizi Chiave |
|------|-----------|---------------|
| `map_planimetria-filatura.md` | Mappa completa della Filatura | Piano terra + primo piano + ala storica + sotterranei. Indicati: telecamere, ingressi, uscite, aree accessibili. **Porta magazzino nord: marcata come "murata" — ma non lo è.** |
| `map_mappa-merate-percorsi.md` | Mappa dell'area con distanze e tempi | Casa Giorgio → Filatura: 800m, 9 min a piedi. Casa Davide (Montevecchia) → Filatura: 8 km, 12 min in auto. Ristorante Griso (Malgrate) → Filatura: 15 km, 18 min. Ecc. |
| `report_perizia-ambientale-sartori.md` | Report ambientale di Sartori (quello falsificato) | "La bonifica del sito risulta completata al 100%. I valori di cromo esavalente rientrano nei limiti di legge." — Confronto con i dati di Luca: sono opposti. |
| `report_registro-badge-filatura.md` | Log completo degli accessi badge, 14-15 marzo | Tutti gli accessi badge: dipendenti usciti alle 19:00, pulizie alle 19:30-20:00, Chiara rientrata alle 20:15, vigilante Poli badge alle 21:50 (inizio turno). Davide: 23:35 (ingresso), 23:52 (uscita). **NESSUN badge per Giorgio — perché è entrato dalla porta non collegata al sistema.** |
| `report_perizia-strutturale-catwalk.md` | Perizia sulla passerella | La catwalk è conforme alle norme di sicurezza. Parapetti alti 110 cm. "La caduta accidentale è improbabile per un adulto di statura media senza perdita di coscienza precedente." |
| `letter_lettera-anonima-chiara.md` | Lettera anonima cartacea ricevuta da Chiara (trovata nel suo studio) | "Tutto ha un prezzo, Signora Tessari. Il silenzio costa caro, ma la verità costa di più." — Red herring, stessa mano dell'email. |
| `note_post-it-scrivania-chiara.md` | Post-it trovati sulla scrivania di Chiara | "Ferri — lun 17 h 10:00" / "Meridian — doc firmati entro il 20" / "Giorgio — contratto manutenzione da rinnovare? Parlarne" — Quest'ultimo post-it mostra che Chiara stava pensando a Giorgio. Perché? |
| `report_inventario-kit-manutenzione.md` | Inventario del kit manutenzione ala storica | Lista attrezzi: chiave inglese 600g (presente, con tracce ematiche), cacciavite, martello, guanti da lavoro tg 9 (taglia di Giorgio — ma anche di Davide e di Matteo), metro a nastro, oliatore. |

## 5.14 Suggerimenti (`hint_`) — 3 file

| File | Contenuto |
|------|-----------|
| `hint_livello1.md` | **Dopo 90 minuti o 1 risposta errata.** "Non focalizzatevi solo sui moventi finanziari. In questo caso, tutti avevano un motivo per volere morta Chiara — ma non tutti avevano il modo di entrare nella Filatura senza lasciare traccia. Controllate gli accessi. Chiedetevi: come si entra nella Filatura senza badge?" |
| `hint_livello2.md` | **Dopo 120 minuti o 2 risposte errate.** "La porta del magazzino nord è la chiave. Chi poteva avere una vecchia chiave di quella porta? Qualcuno che ha lavorato alla Filatura per decenni. Tornate ai documenti tecnici e chiedetevi: c'è un dispositivo che non dovrebbe essere connesso alla rete di quella notte?" |
| `hint_livello3.md` | **Dopo 150 minuti o 3 risposte errate.** "Il colpevole è una persona 'invisibile' — qualcuno che nessuno sospetterebbe. Non è il marito, non è la socia, non è il figlio. È qualcuno la cui conoscenza intima della fabbrica gli ha permesso di entrare senza badge, muoversi senza telecamere, e uscire senza traccia. Ma ha commesso un errore: il suo telefono si è connesso automaticamente al Wi-Fi della Filatura. Cercate 'GC-Samsung' nei log di rete e collegate con l'inventario IT." |

---

# PARTE 6: SISTEMA DI VERIFICA

## 6.1 Le 4 Domande

### Domanda 1: Chi è il colpevole?

| Opzione | Risposta | Feedback |
|---------|----------|----------|
| a) Davide Marchetti | ERRATA | "Il marito era alla Filatura quella notte — ma ci è arrivato DOPO. I badge lo registrano alle 23:35, quando Chiara era già morta da almeno 10 minuti. Ha trovato il corpo e fuggito nel panico. Colpevole di omissione di soccorso, non di omicidio." |
| b) Federica Colombo | ERRATA | "La socia aveva un piano per la vendita — ma era un piano DOPO la morte, non un piano per causarla. La videosorveglianza del bar di Lecco la scagiona." |
| c) Luca Marchetti-Tessari | ERRATA | "Il figlio ha agito per giustizia ambientale, non per vendetta. Il biglietto del treno delle 21:47 lo colloca a Milano." |
| d) Anya Horvat | ERRATA | "L'assistente stava preparando una denuncia legale. Non aveva bisogno di uccidere — aveva bisogno che Chiara fosse viva per poterla denunciare." |
| e) Roberto Galli | ERRATA | "Il sindaco era al Rotary. Il GPS della sua auto non si è mosso dal parcheggio del ristorante." |
| f) Marco Sala | ERRATA | "Il giornalista era a Lecco. Le celle telefoniche confermano. La sua corruzione è giornalistica, non omicida." |
| g) Elena Brambilla | ERRATA | "La dottoressa ha violato il segreto medico, non commesso un omicidio. Ma la sua indiscrezione ha innescato una catena fatale." |
| **h) Giorgio Colombo** | **CORRETTA** | "L'ex capomastro. 38 anni alla Filatura. Conosceva ogni ombra, ogni porta, ogni angolo cieco. È entrato dalla porta del magazzino nord con una chiave del 1992, ha ucciso Chiara, ed è tornato a casa a piedi. Ma il suo telefono si è connesso automaticamente al Wi-Fi della Filatura, tradendolo." |
| i) Beatrice Tessari | ERRATA | "La matriarca odia Chiara, ma non guida. Non ha patente. Non poteva raggiungere la Filatura da Montevecchia senza auto." |
| j) Matteo Sartori | ERRATA | "Il consulente era nel garage di Via Bergamo a distruggere documenti, non alla Filatura. La telecamera dell'officina lo conferma." |

### Domanda 2: Chi è il complice inconsapevole?

| Opzione | Risposta |
|---------|----------|
| a) Davide Marchetti | ERRATA |
| b) Federica Colombo | ERRATA |
| c) Marco Sala | ERRATA |
| **d) Dott.ssa Elena Brambilla** | **CORRETTA** — "Ha violato involontariamente il segreto medico, rivelando a Giorgio che Chiara era malata terminale. Questa informazione ha scatenato il terrore di Giorgio: Chiara avrebbe potuto confessare tutto prima di morire." |
| e) Don Angelo Riva | ERRATA |

### Domanda 3: Qual è il movente?

| Opzione | Risposta |
|---------|----------|
| a) Eredità e denaro | ERRATA — "È il movente di Davide, non del colpevole." |
| b) Vendetta per sfruttamento | ERRATA — "È il movente di Anya." |
| **c) Sopravvivenza: impedire che Chiara collaborasse con le autorità, sacrificandolo come capro espiatorio** | **CORRETTA** |
| d) Proteggere la comunità dalla contaminazione | ERRATA — "Questo è il movente di Luca, che agisce legalmente, non violentemente." |

### Domanda 4: Come è stato commesso il crimine?

| Opzione | Risposta |
|---------|----------|
| a) Caduta dalla passerella | ERRATA — "L'autopsia esclude la caduta: angolo di impatto incompatibile." |
| **b) Colpo alla testa con chiave inglese, accesso tramite porta secondaria del magazzino nord, scena simulata come incidente** | **CORRETTA** |
| c) Aggressione durante un incontro segreto, con complicità di un secondo aggressore | ERRATA |
| d) Avvelenamento lento attraverso contaminazione ambientale | ERRATA — "Il cancro di Chiara è reale ma non è la causa della morte." |

## 6.2 Punteggio

| Punti | Grado |
|-------|-------|
| 4/4 | ⭐⭐⭐⭐⭐ Detective Supremo — "Avete visto attraverso ogni maschera." |
| 3/4 | ⭐⭐⭐⭐ Investigatore Esperto — "Quasi perfetto. Un dettaglio vi è sfuggito." |
| 2/4 | ⭐⭐⭐ Investigatore Competente — "Buon lavoro, ma la trama era più fitta di quanto pensavate." |
| 1/4 | ⭐⭐ Detective in Erba — "Le maschere vi hanno ingannato." |
| 0/4 | ⭐ A Merate si Tace — "Il silenzio della Brianza ha vinto." |

---

# PARTE 7: CHECKLIST QUALITÀ

Prima di considerare il caso completo, verifica:

### Coerenza Interna
- [ ] Tutte le date sono coerenti (settimana 10-15 marzo 2025)
- [ ] Tutti gli orari della notte del 14-15 marzo combaciano tra documenti
- [ ] Le celle telefoniche sono geograficamente corrette (Merate, Lecco, Montevecchia, Milano usano celle diverse)
- [ ] I nomi dei personaggi sono consistenti in TUTTI i documenti
- [ ] I numeri di protocollo dei documenti ufficiali sono sequenziali e realistici
- [ ] Gli importi finanziari tornano tra estratti conto, fatture, e riferimenti nei verbali

### Game Design
- [ ] L'autopsia rende CHIARO che non è un incidente (Fase 1 non deve essere difficile)
- [ ] TUTTI i 10 sospetti hanno movente credibile documentato
- [ ] TUTTI i 10 sospetti hanno almeno un'incongruenza nell'alibi
- [ ] Il percorso di eliminazione funziona: 10 → 4 → 2 → 1
- [ ] Il dettaglio Wi-Fi ("GC-Samsung") è presente in 2 documenti separati e NON evidenziato
- [ ] Il dettaglio Wi-Fi è SUFFICIENTE da solo per identificare il colpevole (una volta trovato)
- [ ] I suggerimenti livello 1-2 orientano senza rivelare, il livello 3 guida al dettaglio
- [ ] Ogni tipo di documento (12 tipi) è usato almeno 3 volte
- [ ] I 75+ documenti sono tutti navigabili dall'applicazione web

### Tema
- [ ] Ogni sospetto ha una "maschera sociale" che viene distrutta durante l'indagine
- [ ] La vittima stessa è moralmente compromessa (NON è un'innocente)
- [ ] Il colpevole evoca empatia oltre che condanna (ha agito per sopravvivenza)
- [ ] Il caso non ha una morale semplice — è moralmente grigio
- [ ] Il tono è noir lombardo, non melodrammatico

### Tecnico
- [ ] Tutti i file usano il naming corretto: `tipo_nome-file.md`
- [ ] Nessun file ha maiuscole nel nome
- [ ] Tutti i file sono nella cartella `documenti/`
- [ ] I file sistema hanno prefisso `_`
- [ ] I file soluzione hanno prefisso `solution_`
- [ ] Ogni documento è autocontenuto (leggibile da solo)

---

# APPENDICE: ANALISI MULTI-PROSPETTIVA E CORREZIONI

## Ciclo 1 — Critiche dalla Prima Stesura

### 🔧 Lo Sviluppatore (20 anni di esperienza)

> **Critica 1**: "75+ documenti è un volume enorme per un LLM. Rischi incoerenze su nomi, date, importi. Serve una tabella di riferimento centralizzata."
> **Correzione applicata**: La Parte 3 contiene profili dettagliati con cifre esatte. La Parte 7 include una checklist di coerenza specifica. Istruzione aggiunta: generare prima il documento-master, poi usarlo come reference per tutti i documenti.

> **Critica 2**: "Il dettaglio Wi-Fi richiede che l'AI generi un log tecnico realistico con 15+ dispositivi. Se la lista è troppo corta, 'GC-Samsung' salta all'occhio."
> **Correzione applicata**: Specificato nella Parte 5 che il log deve contenere almeno 15 dispositivi (stampanti, sensori IoT, tablet, telefoni del personale) per creare rumore sufficiente.

> **Critica 3**: "La struttura delle cartelle non differenzia tra `documenti-investigativi/`, `prove-documentali/`, `elementi-digitali/` come nei casi esistenti. Stai usando `documenti/` con prefissi."
> **Correzione applicata**: Il sistema template usa `documenti/` con prefissi. I casi esistenti usano sottocartelle per ragioni storiche. Entrambe le strutture funzionano con l'app. Confermata la struttura `documenti/` con prefissi come standard per i nuovi casi.

### 🔍 Il Criminologo

> **Critica 1**: "Un omicidio commesso a piedi, senza auto, senza badge, da un pensionato di 62 anni che conosce la fabbrica — è credibile. Ma l'assenza di DNA fresco è sospetta. Un'aggressione ravvicinata lascia tracce."
> **Correzione applicata**: Giorgio usa guanti da lavoro presenti nel kit manutenzione (li indossa per non lasciare impronte sulla chiave inglese). I guanti sono di taglia 9 — taglia comune, non discriminante da sola. La chiave inglese è pulita con uno straccio in loco (comportamento da persona pratica, non sofisticata).

> **Critica 2**: "Il cadavere posizionato come caduta è una simulazione che regge solo per le prime ore. L'autopsia la smonta subito. Non è un piano geniale."
> **Correzione applicata**: Corretto. Giorgio NON è un criminale sofisticato. È un uomo disperato con conoscenza del luogo. La simulazione è rudimentale — questo è realistico. Il caso non è "il piano perfetto smascherato da un errore" ma "un atto disperato di una persona ordinaria che ha cercato di nasconderlo come poteva."

> **Critica 3**: "La connessione Wi-Fi automatica è un dettaglio geniale ma va contestualizzato: nel 2025, molte persone disabilitano il Wi-Fi automatico."
> **Correzione applicata**: Giorgio ha 62 anni, non è tech-savvy. Il suo Samsung ha il Wi-Fi sempre acceso (risparmio dati del piano telefonico — dettaglio menzionabile nell'inventario IT). Un giornalista o un consulente lo disabiliterebbero; un pensionato ex operaio no. Coerente con il personaggio.

### 📰 Il Giornalista

> **Critica 1**: "L'omicidio di una CEO donna in Lombardia sarebbe national news. Servono articoli del Corriere, del Giorno, della Provincia di Lecco — e le tempistiche devono essere realistiche (il primo pezzo esce il sabato, l'approfondimento domenica o lunedì)."
> **Correzione applicata**: 5 articoli di stampa con testate reali della Lombardia e tempistiche coerenti.

> **Critica 2**: "Il personaggio del giornalista corrotto (Marco Sala) è attuale e credibile — ma devi fare attenzione a non renderlo una macchietta. I giornalisti non si vendono dall'oggi al domani. Il processo è graduale."
> **Correzione applicata**: L'email chain e i pagamenti bancari mostrano un rapporto che si è degradato negli anni: consulenze inizialmente legittime, poi sempre più compromesse.

### ✍️ Lo Scrittore (SHCD / Obra Dinn)

> **Critica 1**: "Il flusso a 4 fasi è buono ma rischia di essere troppo guidato. In SHCD, il giocatore sceglie DOVE andare. Qui legge documenti in sequenza. Serve garantire che i documenti possano essere letti in qualsiasi ordine."
> **Correzione applicata**: Le 4 fasi sono una struttura LOGICA per il design, non un percorso obbligato per il giocatore. Ogni documento è autocontenuto. I giocatori possono leggere in qualsiasi ordine. Le fasi emergono naturalmente dalla complessità crescente.

> **Critica 2**: "Il 'singolo dettaglio' è eccellente come meccanica — ma serve un backup. Se i giocatori non lo trovano, il caso è irrisolvibile senza gli hint. In Obra Dinn, puoi sempre tornare indietro e riosservare. Qui il rischio è frustrazione."
> **Correzione applicata**: Il sistema hint a 3 livelli guida progressivamente verso il dettaglio. Il livello 3 menziona esplicitamente "GC-Samsung." Inoltre, il diario di Chiara (12 marzo: "Giorgio è venuto oggi. Mi ha guardato con quegli occhi.") e la testimonianza della donna delle pulizie ("Giorgio si aggirava nei pressi") creano un segnale narrativo che orienta verso Giorgio anche senza il dettaglio tecnico — ma non lo PROVA. Il giocatore ha bisogno del Wi-Fi per la certezza.

> **Critica 3**: "L'interrogatorio di Giorgio è descritto come 'il più corto e meno interessante.' Questo è brillante — l'invisibilità del colpevole è la vera maschera. Ma assicurati che ci sia QUALCOSA nel verbale che, riletto dopo la soluzione, faccia dire 'era lì, non l'ho visto.' Un dettaglio riletto diversamente."
> **Correzione applicata**: Nel verbale di Giorgio, aggiungere la frase: "Ci sono andato la settimana scorsa, alla Filatura. Per nostalgia. 38 anni non si dimenticano. Ho fatto un giro, ho controllato che tutto fosse a posto. I ragazzi di oggi non sanno tenere i macchinari." — Riletto dopo la soluzione: stava facendo il sopralluogo preparatorio.

### 🎮 Il Videogamer

> **Critica 1**: "75 documenti è tanto. Se il 'fun factor' è solo leggere, perde appeal dopo la prima ora. Servono tipi di documento che creino varietà sensoriale: le chat WhatsApp DEVONO sembrare diverse dagli atti notarili, che DEVONO sembrare diversi dai post Instagram."
> **Correzione applicata**: Il sistema Secret Case già renderizza ogni tipo con CSS diverso (bubble chat, intestazioni ufficiali, layout social). La varietà visiva è garantita dal sistema. La Parte 5 specifica documenti di lunghezze diverse (un post-it sono 3 righe, un interrogatorio è 3 pagine) per variare il ritmo.

> **Critica 2**: "Il meta-gaming è un rischio. Dopo aver giocato gli altri casi, il giocatore sa che: (a) l'alibi confermato è sicuro, (b) il killer è chi ha il buco nell'alibi. Qui TUTTI hanno buchi. Questo è buono. Ma serve anche che il pattern 'l'insospettabile è il colpevole' non diventi esso stesso prevedibile."
> **Correzione applicata**: Giorgio non è solo "insospettabile" — è letteralmente la persona che il giocatore dimentica di aver letto. Il suo verbale è corto, il suo profilo è da nonno. Il case design sfrutta l'ATTENZIONE del giocatore: chi legge 75 documenti tende a dare più peso a quelli drammatici (il figlio arrabbiato, l'amante, la chat di Federica) e meno peso al vecchio operaio che dice "quella fabbrica è la mia vita." L'invisibilità non è nel contenuto — è nella psicologia del lettore.

> **Critica 3**: "La rigiocabilità è zero (come tutti i mystery games). Ma la soddisfazione del 'reveal' deve essere esplosiva. Il giocatore che scopre GC-Samsung deve provare lo stesso brivido del 'corpse identification' in Obra Dinn."
> **Correzione applicata**: Lo script della narrazione finale deve costruire il reveal in modo cinematografico: tornare al verbale di Giorgio, rileggere la frase "per nostalgia," e poi smontare la maschera pezzo per pezzo. La narrazione deve far dire al giocatore: "ERA SOTTO I MIEI OCCHI."

## Ciclo 2 — Verifica Finale Post-Correzioni

Tutte e 5 le prospettive sono state riconciliate. Non esistono contraddizioni tra le correzioni. Il caso è coerente sotto ogni dimensione:

| Prospettiva | Stato | Nota |
|-------------|-------|------|
| Sviluppatore | ✅ OK | Struttura, naming, numero file, checklist |
| Criminologo | ✅ OK | Forensica credibile, comportamento realistico, movente plausibile |
| Giornalista | ✅ OK | Copertura mediatica credibile, fonti plausibili, timeline stampa |
| Scrittore | ✅ OK | Flusso narrativo, invisibilità del colpevole, ricontestualizzazione, reveal |
| Videogamer | ✅ OK | Varietà documentale, anti-meta-gaming, skill ceiling, soddisfazione del solve |

---

# ISTRUZIONI FINALI PER L'AI

1. **Genera prima** `solution_documento-master.md` — contiene TUTTA la verità. Usalo come reference per la coerenza.
2. **Genera poi** i 12 verbali di interrogatorio (`police_verbale-*.md`) — sono il cuore narrativo.
3. **Genera poi** i documenti forensi e medici — stabiliscono i fatti.
4. **Genera poi** email, chat, phone, bank, legal — sono il tessuto connettivo.
5. **Genera poi** newspaper, social, photo, diary — sono il contesto.
6. **Genera infine** map, report, letter, note, hint — sono il completamento.
7. **Ultimo**: README.md, _istruzioni-giocatori.md, _manuale-utente.md, solution_albero-decisionale.md, solution_script-narrazione-finale.md

**Per ogni documento**, rispetta:
- Il formato specifico del tipo (intestazione Questura per police_, bubble per chat_, etc.)
- La terminologia tecnica del settore
- La lunghezza realistica (un post-it ≠ un'autopsia)
- La presenza degli indizi specificati nella Parte 5
- La coerenza con TUTTI gli altri documenti già generati

**NON evidenziare gli indizi.** Inseriscili nel flusso naturale del testo. Il giocatore deve CERCARLI, non trovarli sottolineati.

**"GC-Samsung" deve apparire SOLO in 2 documenti** (forensic_analisi-digitale.md e legal_audit-infrastruttura-filatura.md). In nessun altro documento deve comparire questo collegamento.

---

*Prompt generato il 25 marzo 2026 — Sistema Secret Case v2.0*
*Caso target: Difficoltà ⭐⭐⭐⭐⭐ — "La Trama"*
