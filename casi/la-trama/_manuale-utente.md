# Manuale del Game Master — La Trama

**Caso:** La Trama | **Protocollo:** CC-LC-2025-0847 | **Versione GM:** 1.0
**Difficoltà:** ⭐⭐⭐⭐⭐ | **Durata tipica:** 4–6 ore

> Questo documento contiene spoiler completi. Leggere solo prima della sessione, non durante.

---

## Preparazione della sessione

### Hardware e accesso
- Tutti i documenti sono file `.md` navigabili da qualsiasi dispositivo. L'ideale è un laptop o tablet condiviso per gruppo, oppure un dispositivo a testa se i giocatori preferiscono dividersi la lettura.
- Se stampate i documenti, usate la cartella `print/` (se presente) che contiene versioni ottimizzate per la stampa. Conservate `solution_documento-master.md` solo per voi.
- Consiglio: un tavolo grande, carta per appunti, pennarelli per la timeline. I giocatori che costruiscono fisicamente la timeline risolvono il caso più spesso.

### Ambiente consigliato
- Silenzio o musica ambientale neutrale (evitate playlist a tema poliziesco che possano suggerire atmosfere).
- Spegnete le notifiche dei dispositivi dei giocatori durante la sessione.
- Preparate la cartella del caso **prima** dell'arrivo dei giocatori: decidete quali documenti saranno visibili nella Fase 1 e teneteli separati dagli altri.

---

## Ordine consigliato dei documenti per fase

Questo è un suggerimento, non un obbligo. I giocatori più esperti possono ricevere tutti i documenti subito — ma la progressione a fasi rende il caso più soddisfacente per la maggior parte dei gruppi.

### FASE 1 — Apertura del caso (30–60 min)
Documenti da rendere disponibili all'inizio:
- `police_rapporto-intervento.md` — il rapporto iniziale dei Carabinieri
- `forensic_report-sopralluogo.md` — rilievi della scena del crimine
- `medical_rapporto-autopsia.md` — referto autoptico
- `map_planimetria-filatura.md` — mappa della fabbrica
- `map_planimetria-merate.md` — mappa del territorio

Obiettivo della fase: i giocatori capiscono dove si trovano, chi è la vittima, e che la scena non è compatibile con un incidente.

### FASE 2 — Allargamento del campo (60–120 min)
Aggiungere:
- `police_verbale-*` (tutti i verbali di interrogatorio — 10 sospetti + 2 testimoni)
- `email_*` (tutta la corrispondenza email)
- `chat_*` (tutti i messaggi)
- `newspaper_*` (articoli di giornale)
- `social_*` (profili e post social)

Obiettivo della fase: i giocatori costruiscono i profili dei sospetti e identificano i moventi. La maggior parte punterà su Davide Marchetti o Federica Colombo — è normale.

### FASE 3 — L'evidenza materiale (60–90 min)
Aggiungere:
- `phone_*` (tabulati telefonici)
- `bank_*` (estratti conto)
- `forensic_report-videosorveglianza.md` (log telecamere e badge)
- Scontrini e ricevute (se inclusi come `note_` o allegati)

Obiettivo della fase: gli alibi si solidificano o crollano. I giocatori iniziano a capire chi era fisicamente presente e quando.

### FASE 4 — La prova chiave (60–90 min)
Aggiungere:
- `forensic_analisi-digitale.md` — **contiene il log GC-Samsung (pag. 4)**
- `legal_audit-infrastruttura-filatura.md` — **contiene l'inventario dispositivi (pag. 8)**
- `forensic_analisi-luminol.md`
- `diary_*` (diari personali)
- `letter_*` e `note_*`
- `report_*` (relazioni tecniche ambientali)
- `legal_*` (contratti, statuto Fondazione)

Obiettivo della fase: il collegamento GC-Samsung diventa disponibile. Chi ha costruito una buona timeline riconosce immediatamente l'importanza del log.

---

## Quando usare gli hint

### Per tempo trascorso
| Tempo | Azione consigliata |
|-------|-------------------|
| 90 min senza progressione significativa | Offrire `hint_livello1` gratuitamente |
| 120 min con sospetto sbagliato ancora dominante | Suggerire che "ci sono prove materiali non ancora esaminate" |
| 150 min | Offrire `hint_livello2` (costo -1 punto) |
| Oltre 5 ore senza soluzione | Rilasciare `hint_livello2` automaticamente, offrire `hint_livello3` |

### Per risposte errate
| Situazione | Azione consigliata |
|------------|-------------------|
| 1 risposta errata presentata formalmente | Confermare l'errore, non dare ulteriori dettagli |
| 2 risposte errate | Offrire `hint_livello2` |
| 3 risposte errate | Offrire `hint_livello3` |

---

## Come gestire chi trova "il colpevole" troppo presto

Accadrà: qualcuno dirà "È Giorgio Colombo" prima di aver trovato la prova del Wi-Fi. Non confermate né smentite. Chiedete invece:

> *"Avete le prove che lo collocano nella fabbrica quella notte? Senza prove materiali, è solo un'ipotesi."*

Questo non è un modo per essere ostici: è la meccanica corretta del caso. La risposta alla Domanda 1 è valida **solo** se accompagnata dalla prova documentale (log GC-Samsung + inventario IT). Se il gruppo non ha ancora esaminato i documenti della Fase 4, non hanno ancora risolto il caso — anche se hanno indovinato.

Se il gruppo arriva a Giorgio Colombo per via logica (movente + accesso + nessun alibi) ma non ha ancora trovato il log, aprite la Fase 4 e dite: *"Avete costruito un caso solido. Ma c'è ancora qualcosa da esaminare."*

---

## Note specifiche su questo caso

**"Giorgio Colombo ha il verbale più corto. È deliberato."**
Il verbale di Colombo (`police_verbale-giorgio-colombo.md`) è notevolmente più breve degli altri. Risponde in modo evasivo, non offre dettagli non richiesti, non fa domande. I giocatori attenti lo noteranno. Non è una prova in sé — ma è un segnale. Colombo è un uomo che ha imparato a non dire più del necessario.

**"I giocatori tenderanno a sospettare Davide o Federica fino alla fine. È normale."**
Davide era fisicamente presente alla Filatura quella notte. Federica ha firmato l'accordo Meridian. Entrambi sembrano colpevoli per la maggior parte del caso. Lasciate che i giocatori seguano queste piste — si sgonfieranno da sole quando esamineranno i log badge e i tabulati telefonici. Non accelerate questo processo.

**"'GC-Samsung' è l'unico collegamento conclusivo. Senza di esso, il caso resta aperto."**
Tutti gli altri elementi (movente, accesso, comportamento) sono circostanziali. Solo il log Wi-Fi mette Giorgio Colombo nella fabbrica in quella finestra temporale precisa. Se il gruppo non trova il log, non ha risolto il caso — indipendentemente da quanto sia convincente la loro ipotesi. Questa è una scelta di design: vuole insegnare la differenza tra "è probabile" e "è provato."

---

## FAQ giocatori frequenti (risposte senza spoiler)

**"Ci sono documenti falsi o fuorvianti nel caso?"**
Tutti i documenti sono acquisiti agli atti e sono autentici nel contesto del caso. Alcuni contengono informazioni incomplete o parziali — ma nessun documento è stato inserito per ingannare deliberatamente i giocatori.

**"Il caso è risolvibile senza tutti i documenti?"**
Tecnicamente sì, ma non in modo completo. La soluzione richiede prove da documenti di categorie diverse. Se sentite di avere una risposta solida ma manca qualcosa, probabilmente c'è ancora un documento che non avete esaminato.

**"Possiamo dividerci i documenti?"**
Sì, ma condividete tutto con il gruppo. Il caso è progettato per essere risolto collettivamente: alcune connessioni emergono solo quando due persone che hanno letto documenti diversi parlano tra loro.

**"La vittima ha un ruolo nell'indagine?"**
La vittima è parte del caso tanto quanto i sospetti. Capire chi era Chiara Tessari — non solo chi sosteneva di essere — è rilevante per comprendere il movente dell'omicidio.

---

## Gestione del tempo

| Fase | Durata normale | Durata se il gruppo è in difficoltà |
|------|---------------|--------------------------------------|
| Fase 1 | 30–45 min | 45–60 min |
| Fase 2 | 60–90 min | 90–120 min |
| Fase 3 | 45–60 min | 60–90 min |
| Fase 4 | 45–60 min | 60–90 min |
| Deliberazione finale | 15–30 min | 30–45 min |
| **Totale** | **3,5–5 h** | **5–6,5 h** |

Se il gruppo supera le 5 ore senza aver individuato la prova chiave, rilasciate `hint_livello2`. Non è una sconfitta — è gestione della sessione. Un caso non risolto lascia un retrogusto amaro che può scoraggiare i giocatori dal tornare.

---

*Manuale riservato al Game Master — Versione 1.0 — Secret Case System*
*Non distribuire ai giocatori — Caso: La Trama — Protocollo CC-LC-2025-0847*
