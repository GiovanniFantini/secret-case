# PROVA DOCUMENTALE N. 12 — REGISTRO ACCESSI PALAZZO SCARANI E VIDEOSORVEGLIANZA

## Fascicolo: Caso "La Cattedra Vuota"
### Procura della Repubblica presso il Tribunale di Bologna
### Procedimento penale n. 1247/2025 R.G.N.R.

**Classificazione:** Riservato — Atti d'indagine
**Data di acquisizione:** 10 febbraio 2025
**Acquisiti da:** Nucleo Investigativo CC Bologna / Servizio Sicurezza Alma Mater Studiorum
**Autorizzazione:** Decreto di sequestro n. 278/2025 GIP Bologna
**Riferimento:** Morte di Prof. Renato Marini (nato il 14/03/1962 — deceduto l'8-9/02/2025)

---

## SEZIONE A — SISTEMA DI CONTROLLO ACCESSI

### Specifiche tecniche del sistema

| Parametro | Dettaglio |
|---|---|
| Sistema | Kaba SafeRoute — versione 4.2.1 |
| Installato | Settembre 2019 |
| Manutentore | Kaba Italia S.r.l. — contratto n. 2019/BO/0284 |
| Server | Locale, rack sala server piano terra, Palazzo Scarani |
| Backup | Automatico giornaliero su NAS + backup remoto settimanale |
| Lettori installati | 2 (ingresso principale Via Zamboni 38 + ingresso servizio Via delle Moline) |
| Badge attivi | 127 (al 08/02/2025) |
| Registrazione | Data, ora (precisione al secondo), ID badge, nome titolare, lettore utilizzato, direzione (ENTRY/EXIT) |

### Modalità di funzionamento

- **Ingresso principale (Via Zamboni 38):** Lettore badge per ingresso E uscita. Entrambe le direzioni vengono registrate.
- **Ingresso servizio (Via delle Moline):** Lettore badge **solo per ingresso**. L'uscita avviene tramite maniglione antipanico (push-bar) senza registrazione badge. Il sistema registra quindi solo gli ingressi da questo varco.
- **Orario di libero accesso:** Lun-Ven ore 07:00-20:00 (porte aperte, nessun badge necessario, nessuna registrazione). Sabato e Domenica: accesso solo con badge 24h.
- **Nota:** Il giorno 8 febbraio 2025 era **sabato**. L'accesso all'edificio richiedeva il badge per l'intera giornata.

---

## SEZIONE B — REGISTRO ACCESSI — 8-9 FEBBRAIO 2025

### Estratto completo dei transiti registrati

```
═══════════════════════════════════════════════════════════════════════════
KABA SAFEROUTE — LOG ACCESSI
Edificio: PALAZZO SCARANI — Via Zamboni 38, Bologna
Periodo: 08/02/2025 ore 00:00 — 09/02/2025 ore 23:59
Estratto il: 10/02/2025, ore 09:00
Operatore: Ing. Paolo Guidi (Servizio Sicurezza UniBO)
═══════════════════════════════════════════════════════════════════════════

DATA        ORA       BADGE ID    TITOLARE              LETTORE          DIR.
─────────────────────────────────────────────────────────────────────────────

08/02/2025  14:28:17  MRN-0042    MARINI Renato         Principale       ENTRY
                                   (Prof. Ordinario)     Via Zamboni

08/02/2025  19:02:33  BRN-0038    BRUNI Carlo           Principale       ENTRY
                                   (Prof. Associato)     Via Zamboni

08/02/2025  19:48:11  BRN-0038    BRUNI Carlo           Principale       EXIT
                                   (Prof. Associato)     Via Zamboni

08/02/2025  22:55:04  FBR-0089    FABBRI Laura          Servizio         ENTRY
                                   (RTD-A)               Via delle Moline

09/02/2025  08:12:45  MNC-0007    MANCINI Giuseppe      Principale       ENTRY
                                   (Custode)             Via Zamboni

09/02/2025  08:47:22  MNC-0007    MANCINI Giuseppe      Principale       EXIT
                                   (Custode)             Via Zamboni

09/02/2025  09:03:18  MNC-0007    MANCINI Giuseppe      Principale       ENTRY
                                   (Custode)             Via Zamboni

═══════════════════════════════════════════════════════════════════════════
FINE ESTRATTO — NESSUN ALTRO TRANSITO NEL PERIODO INDICATO
═══════════════════════════════════════════════════════════════════════════
```

---

### Analisi dei singoli transiti

---

#### TRANSITO 1 — MARINI Renato

| Campo | Dettaglio |
|---|---|
| Data/Ora | 08/02/2025, ore 14:28:17 |
| Badge | MRN-0042 |
| Lettore | Ingresso principale, Via Zamboni 38 |
| Direzione | ENTRY |
| Uscita registrata | **NESSUNA** |

> **NOTA:** Il Prof. Marini è entrato nell'edificio alle 14:28 del sabato pomeriggio e non ha mai registrato un'uscita. Il suo corpo è stato rinvenuto la mattina successiva nello Studio 204. L'assenza di un'uscita registrata è coerente con il fatto che il Marini non ha lasciato l'edificio dopo l'ingresso, rimanendo nel suo studio per l'intera serata e notte fino al decesso.

---

#### TRANSITO 2-3 — BRUNI Carlo

| Campo | Dettaglio |
|---|---|
| Ingresso | 08/02/2025, ore 19:02:33 — Ingresso principale |
| Uscita | 08/02/2025, ore 19:48:11 — Ingresso principale |
| Permanenza | **45 minuti e 38 secondi** |

---

#### TRANSITO 4 — Badge FABBRI Laura

| Campo | Dettaglio |
|---|---|
| Data/Ora | 08/02/2025, ore 22:55:04 |
| Badge | FBR-0089 |
| Lettore | Ingresso servizio, Via delle Moline |
| Direzione | ENTRY |
| Uscita registrata | **NESSUNA** (push-bar, nessuna registrazione in uscita) |

---

#### TRANSITO 5-6-7 — MANCINI Giuseppe (custode)

| Campo | Dettaglio |
|---|---|
| Primo ingresso | 09/02/2025, ore 08:12:45 — Ingresso principale |
| Uscita | 09/02/2025, ore 08:47:22 — Ingresso principale |
| Secondo ingresso | 09/02/2025, ore 09:03:18 — Ingresso principale |

---

## SEZIONE C — BADGE NON REGISTRATI — PERSONE DI INTERESSE

Il sistema Kaba SafeRoute **NON ha registrato alcun transito** per le seguenti persone di interesse nell'indagine, nel periodo 8-9 febbraio 2025:

| Persona | Ruolo | Stato badge |
|---|---|---|
| MORETTI Chiara | Studentessa | **Non titolare di badge.** Gli studenti non hanno accesso badge a Palazzo Scarani. Accesso solo durante orario di apertura (Lun-Ven 07-20). |
| SANTINI Marco | Dir. Dipartimento | Badge SNT-0015 — **Nessun transito registrato** nel periodo. Il Santini ha dichiarato di essere stato a casa con la moglie Giulia per tutto il weekend (confermato). |
| CONTI Federica | Ex moglie vittima | **Non titolare di badge.** Personale esterno all'università. Non ha mai avuto accesso autonomo all'edificio. |
| ROSSI Tommaso | Giornalista | **Non titolare di badge.** Personale esterno. Residente a Firenze, Via dei Calzaiuoli 15. Non risulta essere mai entrato in Palazzo Scarani. |
| VALDI Elena | Ricercatrice RTD-B | Badge VLD-0103 — **Nessun transito registrato** con il proprio badge nel periodo. (Ha utilizzato il badge FBR-0089 della Dr.ssa Fabbri.) |

> **NOTA:** L'assenza di transiti per Moretti, Santini, Conti e Rossi **conferma** che nessuna di queste persone è entrata nell'edificio tramite badge durante il weekend. Tuttavia, l'assenza di badge non esclude categoricamente la presenza fisica: sarebbe teoricamente possibile entrare nell'edificio "accodandosi" (tailgating) a un possessore di badge, ma in orario notturno di sabato, con traffico pedonale praticamente nullo, tale ipotesi è considerata altamente improbabile.

---

## SEZIONE D — VIDEOSORVEGLIANZA ESTERNA

### Telecamera Palazzo Scarani — Ingresso principale

| Parametro | Dettaglio |
|---|---|
| Modello | Hikvision DS-2CD2T47G2-L |
| Posizione | Sopra il portone principale, Via Zamboni 38, altezza ~3,2 m |
| Campo visivo | Marciapiede antistante e porzione di carreggiata Via Zamboni, angolo ~120° |
| Registrazione | Continua, 24/7, su NVR locale (Hikvision DS-7608NI) |
| Risoluzione | 4 MP (2688 x 1520) |
| Modalità notturna | Infrarosso + ColorVu (luce visibile supplementare) |

**Visione delle registrazioni 08/02/2025 (estratti significativi):**

| Ora | Evento osservato |
|---|---|
| 14:27 | Prof. Marini arriva a piedi da direzione Piazza Verdi. Indossa cappotto scuro (loden) e sciarpa. Porta valigetta in pelle nella mano destra. Si avvicina al portone, utilizza il badge, entra. |
| 14:55 | Una **BMW Serie 3** di colore **blu scuro** si parcheggia in sosta vietata all'altezza del civico 44 di Via Zamboni (circa 30 m a est dell'ingresso di Palazzo Scarani). La targa è **parzialmente leggibile**: BO 4__ XF (le cifre centrali sono oscurate dall'angolazione e da un veicolo parcheggiato davanti). |
| 19:01 | Prof. Bruni arriva a piedi da direzione Porta San Donato. Usa il badge, entra. |
| 19:48 | Prof. Bruni esce dal portone principale. Si dirige a piedi verso sinistra (direzione Piazza Verdi). |
| 23:15 | La **BMW Serie 3 blu scuro** (stessa già identificata alle 14:55) **lascia il parcheggio** in Via Zamboni e si allontana in direzione est (verso Porta San Donato). La targa posteriore è ora meglio visibile: **BO 4_9 XF** — compatibile con **BO 429 XF**. |

---

### Telecamera Comune di Bologna — Via Zamboni

| Parametro | Dettaglio |
|---|---|
| Sistema | Comune di Bologna — Rete videosorveglianza urbana |
| Posizione | Incrocio Via Zamboni / Via delle Belle Arti, palo n. ZAM-14 |
| Campo visivo | Via Zamboni in direzione est-ovest, marciapiedi e carreggiata |
| Registrazione | Continua, 24/7 |
| Acquisizione | Su richiesta A.G. — Decreto n. 281/2025 |

**Nota:** Questa telecamera si trova a circa 150 m a ovest di Palazzo Scarani. Registra il traffico veicolare e pedonale su Via Zamboni ma **non** copre direttamente l'ingresso del Palazzo.

| Ora | Evento osservato |
|---|---|
| 14:53 | BMW Serie 3 blu scuro, **targa BO 429 XF** (lettura completa, veicolo in transito ravvicinato), transita in Via Zamboni in direzione est. Alla guida: figura femminile (non identificabile con certezza dal video). |
| 23:14 | BMW Serie 3 blu scuro, **targa BO 429 XF**, transita in Via Zamboni in direzione est (allontanandosi dal centro). |

> **NOTA:** La telecamera comunale conferma con certezza la targa **BO 429 XF** (lettura completa alle ore 14:53). Il transito delle 23:14 è coerente di 1 minuto con l'orario di partenza registrato dalla telecamera di Palazzo Scarani (23:15).

---

### Copertura Via delle Moline (ingresso servizio)

**NESSUNA TELECAMERA** è presente su Via delle Moline nel tratto corrispondente all'ingresso di servizio di Palazzo Scarani. La telecamera comunale più vicina (palo MBE-07, incrocio Via delle Moline / Via Augusto Righi) si trova a circa 120 m dall'ingresso di servizio e **non ha campo visivo** sulla porta.

---

## SEZIONE E — RIEPILOGO PRESENZE IN PALAZZO SCARANI — 8 FEBBRAIO 2025 (SERA)

| Ora | Presenti nell'edificio (sulla base dei registri) |
|---|---|
| 14:28 | MARINI |
| 19:02 | MARINI + BRUNI |
| 19:48 | MARINI (Bruni esce) |
| 22:55 | MARINI + persona con badge FABBRI (= VALDI) |
| ~23:20 | MARINI solo (Valdi esce via push-bar — stima investigativa) |
| 23:30-00:30 | MARINI (deceduto) |
| 08:12 (09/02) | MANCINI entra — scoperta del corpo |

---

## SEZIONE F — VERIFICA BADGE ELENA VALDI (VLD-0103)

A fini di completezza, si riporta la configurazione del badge della Dr.ssa Valdi:

```
═══════════════════════════════════════════════
KABA SAFEROUTE — SCHEDA BADGE
═══════════════════════════════════════════════
Badge ID: VLD-0103
Titolare: VALDI Elena (RTD-B, IUS/08)
Emesso il: 15/10/2021
Stato: ATTIVO

PROFILO DI ACCESSO: "Ricercatore Standard"
  Lun-Ven:  07:00 — 22:00  ✓
  Sabato:   08:00 — 14:00  ✓
  Sabato:   14:01 — 07:59  ✗
  Domenica: tutto il giorno ✗
  Festivi:  tutto il giorno ✗

Lettori abilitati:
  Ingresso principale Via Zamboni  ✓
  Ingresso servizio Via delle Moline  ✓

ULTIMO UTILIZZO REGISTRATO:
  07/02/2025, ore 13:42 — Principale — EXIT
  (venerdì, uscita normale)
═══════════════════════════════════════════════
```

> **NOTA:** Se la Valdi avesse utilizzato il proprio badge (VLD-0103) alle ore 22:55 di sabato 8 febbraio, il sistema avrebbe **negato l'accesso** (fuori dalla fascia oraria autorizzata per il sabato: 08:00-14:00). Il badge della Dr.ssa Fabbri (FBR-0089), con profilo "Ricercatore H24", era invece abilitato per l'accesso a qualsiasi ora e giorno.

---

## SEZIONE G — CERTIFICAZIONE DI INTEGRITA' DEL SISTEMA

L'Ing. Paolo Guidi, responsabile del Servizio Sicurezza dell'Alma Mater Studiorum, ha certificato quanto segue in data 10/02/2025:

1. Il sistema Kaba SafeRoute ha funzionato regolarmente e senza interruzioni nel periodo 8-9 febbraio 2025.
2. Non risultano anomalie, errori di sistema o interruzioni di alimentazione elettrica.
3. I log non presentano segni di manomissione, cancellazione o alterazione.
4. L'hash SHA-256 del file di log originale è stato calcolato e conservato prima dell'estrazione: corrisponde al valore presente sul server.
5. Il backup remoto del log conferma i dati estratti (verifica di coerenza completata).

Firma: _Ing. Paolo Guidi_
Data: 10/02/2025

---

*Fine del documento — Prova documentale n. 12*
