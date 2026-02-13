# REGISTRO ACCESSI
## [NOME EDIFICIO / STRUTTURA / AREA RISERVATA]

---

**SISTEMA DI CONTROLLO ACCESSI — LOG DELLE ENTRATE E USCITE**

| Campo | Dettaglio |
|---|---|
| **Ubicazione** | [INDIRIZZO COMPLETO] |
| **Tipo di struttura** | [Azienda / Condominio / Uffici / Hotel / Ospedale / Club privato / Altro] |
| **Sistema di accesso** | Badge magnetico / Codice PIN / Biometrico / Chiave fisica / Citofono / Registro cartaceo |
| **Fornitore sistema** | [NOME AZIENDA] — Tel. [NUMERO] |
| **Responsabile sicurezza** | [NOME E COGNOME] — Tel. [NUMERO] |
| **Numero totale accessi registrati** | [NUMERO] ingressi autorizzati |
| **Periodo di archiviazione** | [XX] mesi |
| **Data inizio registrazioni** | [DATA] |

---

## MAPPA DEGLI ACCESSI CONTROLLATI

**Pianta dell'edificio con punti di accesso:** [Allegato A]

| ID Accesso | Ubicazione | Tipo | Orario operativo | Livello sicurezza | Note |
|---|---|---|---|---|---|
| ACC-01 | Ingresso principale | Badge + PIN | 24/7 | Alto | Accesso per tutti gli autorizzati |
| ACC-02 | Ingresso dipendenti (retro) | Solo Badge | 06:00 - 22:00 | Medio | Solo personale interno |
| ACC-03 | Parcheggio sotterraneo | Sbarra automatica | 24/7 | Basso | Rilevamento targa + badge |
| ACC-04 | Sala server (2° piano) | Biometrico | 24/7 | Massimo | Solo [NUMERO] persone autorizzate |
| ACC-05 | Uscita di sicurezza (lato est) | Antipanico | 24/7 (solo uscita) | — | Uscita di emergenza, allarme se aperta |
| ACC-06 | [DESCRIZIONE] | [TIPO] | [ORARIO] | [LIVELLO] | [Note] |

---

## ELENCO PERSONE AUTORIZZATE

**Aggiornato al:** [DATA]

| ID Utente | Nome e Cognome | Ruolo/Qualifica | Tipo badge | Livello accessi | Data rilascio | Scadenza | Stato |
|---|---|---|---|---|---|---|---|
| U-0001 | [NOME COMPLETO] | [Dirigente / Dipendente / Ospite] | Badge permanente | Totale | [DATA] | — | Attivo |
| U-0002 | [NOME COMPLETO] | [RUOLO] | Badge permanente | Limitato (ACC-01, ACC-02) | [DATA] | — | Attivo |
| U-0003 | [NOME COMPLETO] | [RUOLO] | Badge temporaneo | Limitato (ACC-01) | [DATA] | [DATA] | Scaduto |
| U-0004 | [NOME COMPLETO] | [RUOLO] | Badge permanente | Totale | [DATA] | — | **Revocato il [DATA]** |

**Legenda livelli di accesso:**
- **Totale:** Accesso a tutti i varchi controllati
- **Limitato:** Accesso solo ad aree specifiche (indicate tra parentesi)
- **Temporaneo:** Accesso limitato nel tempo (visitatori, fornitori, manutentori)

---

## REGISTRO ACCESSI — [DATA RILEVANTE]

**Data analizzata:** [DATA COMPLETA — es: Sabato 8 marzo 2025]
**Periodo di interesse investigativo:** Dalle ore [ORA INIZIO] alle ore [ORA FINE]

---

### LOG COMPLETO DEGLI ACCESSI

| Ora | Varco | Direzione | ID Utente | Nome | Badge n. | Metodo | Esito | Note |
|---|---|---|---|---|---|---|---|---|
| 06:12:34 | ACC-02 | Ingresso | U-0012 | [Nome Dipendente] | 3456 | Badge | ✓ Autorizzato | Primo accesso della giornata |
| 06:45:18 | ACC-01 | Ingresso | U-0023 | [Nome Dipendente] | 2387 | Badge + PIN | ✓ Autorizzato | PIN corretto |
| 07:30:12 | ACC-01 | Ingresso | — | [Nome Visitatore] | Temp-089 | Badge temporaneo | ✓ Autorizzato | Badge ospite valido fino alle 18:00 |
| 08:15:45 | ACC-04 | Ingresso | U-0005 | [Nome Tecnico] | 4521 | Biometrico (impronta) | ✓ Autorizzato | Accesso sala server |
| 09:22:03 | ACC-01 | Ingresso | U-0031 | [Nome Sospetto] | 8823 | Badge | ✓ Autorizzato | **PERSONA DI INTERESSE** |
| 09:22:55 | ACC-02 | Tentativo | — | [Sconosciuto] | 9999 | Badge | ✗ Negato | **ANOMALIA: Badge revocato** |
| 11:47:19 | ACC-03 | Ingresso | U-0031 | [Nome Sospetto] | 8823 | Badge | ✓ Autorizzato | Accesso parcheggio sotterraneo |
| 12:03:27 | ACC-03 | Uscita | U-0031 | [Nome Sospetto] | 8823 | Badge | ✓ Autorizzato | Permanenza parcheggio: 16 minuti |
| 14:35:48 | ACC-02 | Ingresso | U-0018 | [Nome Dipendente] | 6732 | Badge | ✓ Autorizzato | Rientro dopo pausa pranzo |
| 15:42:11 | ACC-05 | Uscita | — | [Sconosciuto] | — | Antipanico | ⚠️ Allarme | **ANOMALIA: Uscita emergenza aperta — Allarme attivato** |
| 15:43:05 | ACC-05 | — | — | — | — | Manuale | — | Allarme disattivato da [Nome Responsabile] |
| 18:08:33 | ACC-01 | Uscita | U-0031 | [Nome Sospetto] | 8823 | Badge | ✓ Autorizzato | **Uscita definitiva** |
| 18:45:22 | ACC-01 | Uscita | U-0023 | [Nome Dipendente] | 2387 | Badge | ✓ Autorizzato | Uscita fine turno |
| 22:17:45 | ACC-02 | Ingresso | U-0007 | [Nome Addetto] | 5512 | Badge | ✓ Autorizzato | Turno notturno |

---

## ANALISI DETTAGLIATA DEGLI ACCESSI DI INTERESSE

### PERSONA 1 — [Nome Sospetto] (ID Utente: U-[XXXX])

**Profilo:**
- **Ruolo:** [Dipendente / Visitatore / Fornitore / Altro]
- **Badge n.:** [NUMERO]
- **Livello di accesso:** [Totale / Limitato]
- **Autorizzazione rilasciata da:** [Nome responsabile] in data [DATA]

**Riepilogo accessi nella data del [DATA]:**

| Ora | Varco | Direzione | Durata permanenza |
|---|---|---|---|
| 09:22:03 | ACC-01 (Ingresso principale) | Ingresso | — |
| 11:47:19 | ACC-03 (Parcheggio) | Ingresso | 16 minuti |
| 12:03:27 | ACC-03 (Parcheggio) | Uscita | — |
| 18:08:33 | ACC-01 (Ingresso principale) | Uscita | — |

**Tempo totale di permanenza:** [XX] ore e [XX] minuti (dalle 09:22 alle 18:08)

**Analisi comportamentale:**
[Nome Sospetto] ha effettuato [NUMERO] accessi nella giornata. L'accesso al parcheggio sotterraneo alle ore 11:47 con permanenza di 16 minuti è [più lungo / più breve / anomalo rispetto] ai normali tempi di transito. [Aggiungere osservazioni rilevanti per l'indagine: orari compatibili/incompatibili con dichiarazioni, accessi a zone sensibili, permanenze prolungate, ecc.]

**Confronto con dichiarazioni:**
Nel verbale di interrogatorio, [Nome Sospetto] ha dichiarato:
> *"[Citazione della dichiarazione]"*

I dati del registro accessi [confermano / contraddicono / parzialmente confermano] questa versione.

**Discrepanze rilevate:**
- [Esempio: "Dichiara di essere uscito alle ore [ORA], ma il registro mostra uscita alle ore [ORA REALE]"]
- [Esempio: "Nega di aver avuto accesso all'area [X], ma il log mostra accesso tramite varco ACC-[XX] alle ore [ORA]"]

---

### PERSONA 2 — [Nome Altra Persona] (ID Utente: U-[XXXX])

[Ripetere la stessa struttura di analisi per eventuali altre persone di interesse]

---

## ANOMALIE ED EVENTI SOSPETTI

### Anomalia n. 1 — Tentativo di accesso con badge revocato

**Data e ora:** [DATA] ore [ORA]
**Varco:** ACC-[XX] — [Descrizione ubicazione]
**Badge utilizzato:** n. [NUMERO]
**Intestatario badge:** [Nome — se noto]
**Stato badge:** Revocato in data [DATA] per [motivo]
**Esito:** Accesso negato dal sistema

**Rilevanza investigativa:**
[Spiegazione del perché questo tentativo è sospetto: ex dipendente licenziato, badge segnalato smarrito/rubato, tentativo di accesso non autorizzato, ecc.]

**Registrazione video:** CAM-[XX] — Allegato [X]

---

### Anomalia n. 2 — Apertura porta di emergenza

**Data e ora:** [DATA] ore [ORA]
**Varco:** ACC-05 — Uscita di sicurezza lato est
**Modalità:** Apertura antipanico (dall'interno)
**Allarme:** Attivato automaticamente
**Disattivazione allarme:** Ore [ORA] da parte di [Nome Responsabile]

**Rilevanza investigativa:**
L'apertura della porta di emergenza avviene [TEMPO] [prima/dopo] l'evento criminale. Non è stato possibile identificare chi ha aperto la porta dall'interno, in quanto il sistema antipanico non richiede badge. La telecamera CAM-[XX] potrebbe aver ripreso l'evento.

---

### Anomalia n. 3 — [Descrizione Anomalia]

[Continuare con ulteriori anomalie rilevate]

---

## ACCESSI FUORI ORARIO

**Definizione di "fuori orario":** [Esempio: "Accessi effettuati tra le 22:00 e le 06:00 nei giorni feriali, o in qualsiasi orario durante weekend e festivi"]

**Accessi fuori orario nel periodo [DATA INIZIO] — [DATA FINE]:**

| Data | Ora | Nome | Ruolo | Varco | Motivo dichiarato | Autorizzazione |
|---|---|---|---|---|---|---|
| [DATA] | 23:15 | [Nome] | [Ruolo] | ACC-01 | Lavoro straordinario | Autorizzato da [Nome] |
| [DATA] | 02:34 | [Nome] | [Ruolo] | ACC-04 | Manutenzione server | Autorizzato da [Nome] |
| [DATA] | 19:47 | [Nome] | [Ruolo] | ACC-02 | [Motivo] | **NON AUTORIZZATO** |

**Note investigative:**
[Commento sugli accessi fuori orario rilevanti per l'indagine, eventuali pattern sospetti, mancanza di autorizzazioni, ecc.]

---

## BADGE TEMPORANEI E VISITATORI

**Registro badge temporanei rilasciati nel periodo [DATA INIZIO] — [DATA FINE]:**

| Badge n. | Rilasciato a | Data rilascio | Validità | Motivo visita | Autorizzato da | Riconsegnato |
|---|---|---|---|---|---|---|
| Temp-089 | [Nome Visitatore] | [DATA] ore [ORA] | Giornaliero | Riunione con [Nome] | [Nome Dipendente] | ✓ Sì, ore [ORA] |
| Temp-090 | [Nome Fornitore] | [DATA] ore [ORA] | 3 giorni | Lavori di manutenzione | Ufficio Tecnico | ✗ Non riconsegnato |
| Temp-091 | [Nome] | [DATA] ore [ORA] | Giornaliero | [Motivo] | [Nome] | ✓ Sì, ore [ORA] |

**Badge temporanei non riconsegnati:**
- Badge n. Temp-[XXX] — Rilasciato a [Nome] in data [DATA] — **Non restituito** — Segnalato in data [DATA]

---

## CONFRONTO REGISTRO ACCESSI E ALTRI DOCUMENTI

### Confronto con registro telecamere

| Persona | Orario ingresso (badge) | Orario ingresso (video) | Discrepanza | Note |
|---|---|---|---|---|
| [Nome] | 09:22:03 | 09:21:58 | -5 secondi | Normale (ritardo sistema) |
| [Nome] | 14:35:48 | 14:37:12 | +1 min 24 sec | **ANOMALIA: Potrebbe essere entrato "al seguito" di qualcun altro** |

**Tailgating (accesso al seguito):**
[Descrizione di eventuali casi in cui una persona appare su video ma non nel registro accessi, suggerendo che sia entrata subito dopo qualcun altro sfruttando la porta aperta]

### Confronto con dichiarazioni rese

[Tabella comparativa tra quanto dichiarato nei verbali di interrogatorio e quanto risulta dal registro accessi — evidenziare discrepanze]

---

## REPORT PERIODICI E STATISTICHE

**Statistiche mensili (mese di [MESE]):**
- Totale accessi registrati: [NUMERO]
- Media accessi giornalieri: [NUMERO]
- Accessi fuori orario: [NUMERO]
- Badge temporanei rilasciati: [NUMERO]
- Allarmi attivati: [NUMERO]
- Tentativi di accesso negati: [NUMERO]

**Accessi medi per persona (top 10):**

| Nome | Totale accessi mensili | Media giornaliera |
|---|---|---|
| [Nome 1] | [NUMERO] | [NUMERO] |
| [Nome 2] | [NUMERO] | [NUMERO] |

---

## INTEGRITÀ DEI DATI E BACKUP

**Sistema di backup:**
- Backup automatico ogni [PERIODO]
- Conservazione backup: [XX] mesi
- Ubicazione backup: [Server locale / Cloud / NAS / Altro]

**Verifica integrità:**
- Hash MD5 del file di log: [CODICE HASH]
- Hash SHA-256: [CODICE HASH]

_Nota: I file di log originali sono stati sigillati digitalmente per garantire l'autenticità delle prove._

**Esportazione dati per autorità:**
- Data esportazione: [DATA]
- Formato: [Excel / CSV / PDF / Database SQL]
- Supporto: [DVD / USB / Altro]
- Consegnato a: [Procura / Polizia Giudiziaria]

---

## LIMITAZIONI DEL SISTEMA

**Limitazioni tecniche rilevate:**
- [ ] Il sistema registra solo gli accessi autorizzati, non i tentativi manuali di apertura forzata
- [ ] Le porte di emergenza (antipanico) possono essere aperte dall'interno senza badge
- [ ] In caso di interruzione di corrente, alcune porte si aprono automaticamente (fail-safe)
- [ ] Il sistema non rileva il "tailgating" (accesso al seguito di un autorizzato)
- [ ] [Altra limitazione]

**Eventi non registrabili:**
[Esempio: "Movimenti interni all'edificio tra aree non sorvegliate da varchi controllati", "Accesso tramite finestre o aperture non monitorate", ecc.]

---

## NOTE CONCLUSIVE

**Sintesi degli elementi rilevanti per l'indagine:**

1. [Esempio: "[Nome Sospetto] ha effettuato accesso alla struttura alle ore [ORA], rimanendo all'interno per [XX] ore. Ciò è compatibile/incompatibile con la sua versione dei fatti."]

2. [Esempio: "L'apertura anomala della porta di emergenza alle ore [ORA] potrebbe aver consentito l'ingresso/uscita di una persona senza registrazione nel sistema."]

3. [Esempio: "Il badge n. [XXXX], revocato in data [DATA], è stato utilizzato per un tentativo di accesso negato alle ore [ORA]. L'ex titolare del badge è [Nome], attualmente [status]."]

**Raccomandazioni:**
- Confrontare i dati con le registrazioni delle telecamere per identificare eventuali accessi "al seguito"
- Interrogare [Nome Responsabile] in merito alla disattivazione dell'allarme alle ore [ORA]
- Verificare la posizione degli smartphone dei sospetti tramite celle telefoniche per confermare/smentire la presenza nella struttura

---

**Documento redatto da:**

[NOME E COGNOME]
Responsabile Sicurezza / Tecnico di Polizia Giudiziaria
Data: [DATA]

**Firma:** ___________________________

---

**Allegati:**
- Allegato A: Planimetria con ubicazione varchi di accesso
- Allegato B: File di log originale (supporto digitale)
- Allegato C: Confronto incrociato con registro telecamere

---

*Il presente registro è stato compilato conformemente alle disposizioni in materia di sicurezza e protezione dei dati personali. I dati sono trattati esclusivamente per finalità di sicurezza e, su richiesta dell'Autorità Giudiziaria, per finalità di indagine penale.*
