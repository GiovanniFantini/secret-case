# POLIZIA POSTALE E DELLE COMUNICAZIONI
## Compartimento [REGIONE] — Sezione Crimini Informatici

---

**RAPPORTO DI ANALISI DIGITALE FORENSE**

| Campo | Dettaglio |
|---|---|
| **Protocollo** | DIGIT-[ANNO]-[NUMERO] |
| **Data di redazione** | [DATA COMPLETA] |
| **Classificazione** | RISERVATO — Atti di indagine |
| **Riferimento caso** | Indagine penale n. [NUMERO CASO] |
| **Tipologia perizia** | Analisi forense su dispositivi digitali |
| **Analista forense** | Isp. Tecnico [NOME COMPLETO] |
| **Qualifica** | Esperto in Digital Forensics — Polizia Postale — Matricola [NUMERO] |
| **Assistenti tecnici** | [NOMI TECNICI] |
| **Certificazioni** | EnCE / GCFA / CHFI / [ALTRA CERTIFICAZIONE] |

---

## 1. OGGETTO DELL'ANALISI E QUESITO PERITALE

**Richiesta di accertamento da parte di:**
[Nome Procuratore / Commissario] - [Qualifica] - in data [DATA]

**Quesito peritale:**
[Esempio: "Procedere all'analisi forense del dispositivo mobile sequestrato al sospettato [NOME] al fine di: 1) recuperare messaggi, chiamate e dati cancellati; 2) ricostruire la timeline delle attività; 3) identificare contatti e comunicazioni rilevanti per l'indagine; 4) verificare la presenza di applicazioni/file collegati al crimine."]

---

## 2. DISPOSITIVI E SUPPORTI SOTTOPOSTI AD ANALISI

### 2.1 Dispositivo n. 1

| Campo | Dettaglio |
|---|---|
| **Numero di reperto** | Prova fisica n. [NUMERO] |
| **Tipo dispositivo** | [Smartphone / Computer / Tablet / Hard disk / USB / Altro] |
| **Marca e modello** | [MARCA] [MODELLO] |
| **Sistema operativo** | [iOS XX.X / Android XX / Windows XX / macOS XX / Linux] |
| **IMEI** (se telefono) | [NUMERO IMEI] |
| **Numero di serie** | [NUMERO SERIALE] |
| **Capacità storage** | [XX] GB |
| **Stato al sequestro** | [Acceso / Spento / Bloccato con PIN/password / Schermo rotto] |
| **Livello batteria** | [XX]% al momento del sequestro |
| **Luogo di sequestro** | [DESCRIZIONE LUOGO] |
| **Data e ora sequestro** | [DATA E ORA] |
| **Sequestrante** | [Nome agente/ufficiale] |

**Documentazione fotografica:** Allegato A — Foto nn. [DA]-[A]

### 2.2 Dispositivo n. 2 (se applicabile)

[Ripetere la tabella per eventuali ulteriori dispositivi analizzati]

---

## 3. METODOLOGIA DI ACQUISIZIONE E ANALISI

### 3.1 Catena di custodia e integrità dei dati

**Protocollo di custodia:**
- Data di ricezione presso laboratorio: [DATA]
- Responsabile della custodia: [NOME]
- Ambiente di analisi: [Laboratorio schermato Faraday / Sala tecnica protetta]
- Isolamento del dispositivo: [Airplane mode / Faraday bag / Altro]

**Verifica dell'integrità:**
Prima di procedere con l'acquisizione, è stato calcolato l'hash crittografico dei dati originali per garantire l'inalterabilità:

| Dispositivo | Algoritmo | Hash Value |
|---|---|---|
| Dispositivo n. 1 | SHA-256 | [CODICE HASH SHA-256] |
| Dispositivo n. 2 | MD5 | [CODICE HASH MD5] |

_Nota: Qualsiasi modifica ai dati originali altererebbe il valore hash. L'hash post-analisi è stato verificato e corrisponde, garantendo che l'analisi è stata condotta in modalità read-only (sola lettura) senza alterare le prove._

### 3.2 Superamento delle protezioni

**Protezione presente:**
- [ ] PIN/Password
- [ ] Blocco biometrico (impronta digitale, riconoscimento facciale)
- [ ] Crittografia hardware/software
- [ ] Nessuna protezione

**Metodo di sblocco utilizzato:**
- [ ] Consenso del proprietario (codice fornito)
- [ ] Ordine dell'autorità giudiziaria e bypass tecnico
- [ ] Tool forense: [NOME TOOL — es: Cellebrite UFED / Oxygen Forensic / XRY / Altro]
- [ ] Attacco brute-force (tempo richiesto: [XX] ore)
- [ ] Altra metodologia: [DESCRIZIONE]

**Esito:**
- ☐ Sblocco riuscito — accesso completo ai dati
- ☐ Sblocco parziale — alcuni dati protetti non accessibili
- ☐ Sblocco non riuscito — dispositivo rimasto bloccato

### 3.3 Strumenti software utilizzati

| Software | Versione | Scopo | Licenza |
|---|---|---|---|
| Cellebrite UFED | [VERSIONE] | Acquisizione mobile forense | [NUMERO LICENZA] |
| Magnet AXIOM | [VERSIONE] | Analisi multi-sorgente | [NUMERO LICENZA] |
| FTK Imager | [VERSIONE] | Acquisizione disco | Open source |
| Autopsy | [VERSIONE] | Analisi disco | Open source |
| SQLite Browser | [VERSIONE] | Analisi database app | Open source |
| Wireshark | [VERSIONE] | Analisi traffico di rete | Open source |

---

## 4. RISULTATI DELL'ANALISI — DISPOSITIVO N. 1

### 4.1 Informazioni generali sul dispositivo

| Campo | Dettaglio |
|---|---|
| **Proprietario registrato** | [NOME COMPLETO] |
| **Numero di telefono principale** | [NUMERO] |
| **Account email configurati** | [EMAIL 1], [EMAIL 2] |
| **Account social configurati** | [WhatsApp, Telegram, Facebook, Instagram, etc.] |
| **Data di primo utilizzo** | [DATA] |
| **Ultimo utilizzo registrato** | [DATA E ORA] |
| **Lingua del sistema** | [LINGUA] |
| **Fuso orario** | [FUSO ORARIO] |

### 4.2 Registro chiamate

**Totale chiamate registrate:** [NUMERO]
- Chiamate in uscita: [NUMERO]
- Chiamate in entrata: [NUMERO]
- Chiamate perse: [NUMERO]

**Chiamate rilevanti per l'indagine:**

| Data e ora | Tipo | Numero | Contatto | Durata | Note |
|---|---|---|---|---|---|
| [DATA] [ORA] | Uscita | [NUMERO] | [NOME] | [XX:XX] | Chiamata effettuata [TEMPO] prima/dopo il crimine |
| [DATA] [ORA] | Entrata | [NUMERO] | [NOME] | [XX:XX] | [Nota rilevante] |
| [DATA] [ORA] | Persa | [NUMERO] | [NOME] | — | [Nota rilevante] |

_**Nota investigativa:** [Commento sull'importanza di queste chiamate per l'indagine]_

### 4.3 Messaggi SMS/MMS

**Totale SMS/MMS:** [NUMERO]
- Inviati: [NUMERO]
- Ricevuti: [NUMERO]
- Cancellati (recuperati): [NUMERO]

**Messaggi rilevanti:**

**Messaggio n. 1**
- **Data e ora:** [DATA] ore [ORA]
- **Mittente:** [NOME/NUMERO]
- **Destinatario:** [NOME/NUMERO]
- **Testo:**
  ```
  [TESTO COMPLETO DEL MESSAGGIO]
  ```
- **Rilevanza:** [Spiegazione del perché questo messaggio è importante per l'indagine]

**Messaggio n. 2**
[Ripetere per ogni messaggio rilevante]

### 4.4 Applicazioni di messaggistica istantanea

#### 4.4.1 WhatsApp

**Account WhatsApp:** [NUMERO DI TELEFONO]
**Totale conversazioni:** [NUMERO]
**Totale messaggi estratti:** [NUMERO]
**Messaggi cancellati (recuperati):** [NUMERO]

**Conversazioni rilevanti per l'indagine:**

**Conversazione con: [NOME CONTATTO / NUMERO]**
- **Periodo analizzato:** Dal [DATA] al [DATA]
- **Totale messaggi:** [NUMERO]

| Data e ora | Mittente | Messaggio | Note |
|---|---|---|---|
| [DATA] [ORA] | [NOME/Tu] | [TESTO MESSAGGIO] | [Eventuali note] |
| [DATA] [ORA] | [NOME/Tu] | [TESTO MESSAGGIO] | **CANCELLATO E RECUPERATO** |
| [DATA] [ORA] | [NOME/Tu] | 📎 [File allegato: foto/video/doc] | Vedi Allegato [X] |

_**Nota investigativa:** [Commento sull'importanza di questa conversazione, contraddizioni con dichiarazioni, etc.]_

#### 4.4.2 Telegram / Signal / Altro

[Ripetere la struttura per ogni app di messaggistica trovata]

### 4.5 Email

**Account email analizzati:** [NUMERO]

**Email rilevanti:**

**Email n. 1**
- **Account:** [INDIRIZZO EMAIL]
- **Data e ora:** [DATA] ore [ORA]
- **Mittente:** [EMAIL MITTENTE] — [NOME]
- **Destinatario/i:** [EMAIL DESTINATARIO/I]
- **Oggetto:** [OGGETTO EMAIL]
- **Corpo del messaggio:**
  ```
  [TESTO COMPLETO DELL'EMAIL]
  ```
- **Allegati:** [DESCRIZIONE ALLEGATI]
- **Rilevanza:** [Commento investigativo]

### 4.6 Cronologia browser e ricerche internet

**Browser utilizzati:** [Chrome / Safari / Firefox / Altro]
**Totale voci di cronologia:** [NUMERO]
**Periodo coperto:** Dal [DATA] al [DATA]

**Ricerche rilevanti:**

| Data e ora | Motore di ricerca | Query di ricerca | URL visitato | Note |
|---|---|---|---|---|
| [DATA] [ORA] | Google | "[TESTO RICERCA]" | [URL] | Ricerca effettuata [TEMPO] prima del crimine |
| [DATA] [ORA] | Google | "[TESTO RICERCA]" | [URL] | **CANCELLATA E RECUPERATA** |

**Siti web visitati di interesse investigativo:**
- [URL 1]: [Descrizione del contenuto e rilevanza]
- [URL 2]: [Descrizione del contenuto e rilevanza]

_**Nota investigativa:** [Esempio: "Le ricerche mostrano un chiaro interesse per [ARGOMENTO] nei giorni precedenti il crimine. Questo è compatibile con una premeditazione."]_

### 4.7 Dati di geolocalizzazione

**GPS e dati di posizione:**

**Fonte dei dati:**
- [ ] Servizi di localizzazione iOS/Android
- [ ] Dati EXIF da foto
- [ ] Cronologia Google Maps
- [ ] App di tracking fitness
- [ ] [Altra fonte]

**Timeline dei movimenti nella data/periodo rilevante:**

| Data e ora | Latitudine | Longitudine | Luogo identificato | Precisione | Fonte |
|---|---|---|---|---|---|
| [DATA] [ORA] | [XX.XXXXX] | [XX.XXXXX] | [DESCRIZIONE LUOGO/INDIRIZZO] | ±[XX] m | [Google Maps / Foto EXIF] |
| [DATA] [ORA] | [XX.XXXXX] | [XX.XXXXX] | [DESCRIZIONE LUOGO/INDIRIZZO] | ±[XX] m | [FONTE] |

**Mappa dei movimenti:** Allegato [X] — Ricostruzione cartografica

_**Nota investigativa:** [Esempio: "I dati di geolocalizzazione collocano il sospettato sulla scena del crimine alle ore [ORA], in contraddizione con quanto dichiarato nel verbale di interrogatorio dove affermava di trovarsi a [LUOGO]."]_

### 4.8 Fotografie e video

**Totale foto:** [NUMERO]
**Totale video:** [NUMERO]
**File cancellati (recuperati):** [NUMERO]

**Contenuti multimediali rilevanti:**

**Foto n. 1**
- **Nome file:** [NOME FILE]
- **Data scatto:** [DATA] ore [ORA] (da metadati EXIF)
- **Luogo scatto:** [COORDINATE GPS / LUOGO]
- **Risoluzione:** [XXXX x XXXX pixel]
- **Dispositivo di acquisizione:** [MODELLO TELEFONO/FOTOCAMERA]
- **Descrizione contenuto:** [Descrizione di cosa ritrae la foto]
- **Rilevanza:** [Perché è importante per l'indagine]
- **Allegato:** Allegato [X]

**Video n. 1**
[Struttura simile]

### 4.9 Applicazioni installate

**Totale applicazioni:** [NUMERO]

**Applicazioni di potenziale interesse investigativo:**

| App | Categoria | Ultimo utilizzo | Note |
|---|---|---|---|
| [NOME APP] | [Categoria] | [DATA] | [Descrizione utilizzo rilevante] |
| Tor Browser | Privacy/Anonimato | [DATA] | App per navigazione anonima |
| [NOME APP] | [Categoria] | [DATA] | [Note] |

### 4.10 Documenti e file

**Totale documenti:** [NUMERO]

**Documenti rilevanti:**

| Nome file | Tipo | Data creazione | Data modifica | Contenuto/Descrizione | Rilevanza |
|---|---|---|---|---|---|
| [NOME] | PDF | [DATA] | [DATA] | [Descrizione contenuto] | [Rilevanza per indagine] |
| [NOME] | DOCX | [DATA] | [DATA] | [Descrizione] | **FILE CANCELLATO E RECUPERATO** |

### 4.11 Calendario e promemoria

**Eventi rilevanti nel calendario:**

| Data e ora | Titolo evento | Luogo | Partecipanti | Note |
|---|---|---|---|---|
| [DATA] [ORA] | [TITOLO] | [LUOGO] | [NOMI] | [Note] |

**Promemoria rilevanti:**
- [Testo promemoria 1] — Creato il [DATA]
- [Testo promemoria 2] — Creato il [DATA]

### 4.12 Contatti della rubrica

**Totale contatti:** [NUMERO]

**Contatti di interesse investigativo:**

| Nome | Numeri di telefono | Email | Note | Frequenza contatti |
|---|---|---|---|---|
| [NOME] | [NUMERO/I] | [EMAIL] | [Relazione con caso] | [Alta/Media/Bassa] |
| [NOME] | [NUMERO/I] | [EMAIL] | [Note] | [Frequenza] |

### 4.13 Dati finanziari e transazioni

**App bancarie trovate:**
- [Nome banca]: Account intestato a [NOME] — Ultimo accesso [DATA]

**App di pagamento:**
- PayPal / Satispay / Apple Pay / Google Pay

**Transazioni rilevanti estratte dalle app:** [Se accessibili]

[Tabella con transazioni rilevanti per l'indagine]

---

## 5. ANALISI DEI DATI CANCELLATI

### 5.1 Metodologia di recupero

**Tecniche utilizzate:**
- [ ] Analisi dello spazio non allocato (unallocated space)
- [ ] Recupero da file system journaling
- [ ] Analisi dei backup automatici (cloud/locale)
- [ ] Carving di file frammentati
- [ ] Analisi di cache e file temporanei

**Strumenti:**
[Elenco degli strumenti specifici utilizzati per il data recovery]

### 5.2 Dati recuperati

**Totale dati recuperati:**
- Messaggi: [NUMERO]
- Foto: [NUMERO]
- Video: [NUMERO]
- File: [NUMERO]
- [Altro tipo]: [NUMERO]

**Elementi più significativi:**

[Elencare i dati cancellati recuperati più importanti per l'indagine, con particolare enfasi su quelli che il sospettato ha tentato di nascondere]

_**Nota investigativa:** [Esempio: "Il sospettato ha cancellato sistematicamente i messaggi scambiati con [NOME] nelle 24 ore precedenti il crimine. Il recupero forense ha permesso di ricostruire l'intera conversazione, che rivela [DETTAGLIO RILEVANTE]."]_

---

## 6. TIMELINE RICOSTRUTTIVA DELLE ATTIVITÀ

**Periodo analizzato:** Dal [DATA] al [DATA]

**Ricostruzione cronologica delle attività rilevanti:**

| Data e ora | Tipo di attività | Dettaglio | Rilevanza |
|---|---|---|---|
| [DATA] [ORA] | Ricerca Google | "come cancellare messaggi whatsapp definitivamente" | Indica consapevolezza e premeditazione |
| [DATA] [ORA] | Messaggio WhatsApp | A [NOME]: "[TESTO]" | [Rilevanza] |
| [DATA] [ORA] | Geolocalizzazione | Posizione: [LUOGO — SCENA DEL CRIMINE] | Colloca il sospettato sulla scena |
| [DATA] [ORA] | Chiamata | A [NOME], durata [XX] min | [Rilevanza] |
| [DATA] [ORA] | Eliminazione dati | Cancellazione di [NUMERO] messaggi e [NUMERO] foto | Tentativo di occultamento |

**Rappresentazione grafica:** Allegato [X] — Timeline visuale

---

## 7. CONTRADDIZIONI CON LE DICHIARAZIONI RESE

**Dichiarazione del sospettato [NOME] in data [DATA]:**
> "[Citazione della dichiarazione resa dal sospettato]"

**Evidenze digitali in contrasto:**

| Dichiarazione | Dato forense | Contraddizione |
|---|---|---|
| "Non ho mai contattato [NOME]" | 47 messaggi WhatsApp e 12 chiamate negli ultimi 3 mesi | Falsa dichiarazione |
| "Ero a casa alle ore [ORA]" | Geolocalizzazione mostra presenza a [LUOGO] | Falso alibi |
| "Ho cancellato solo messaggi pubblicitari" | Messaggi recuperati contengono conversazioni private rilevanti | Tentativo di depistaggio |

---

## 8. ANALISI DI DISPOSITIVI AGGIUNTIVI

### 8.1 Cloud storage e backup

**Account cloud analizzati:**
- [ ] iCloud (Apple) — Account: [EMAIL]
- [ ] Google Drive — Account: [EMAIL]
- [ ] Dropbox — Account: [EMAIL]
- [ ] OneDrive — Account: [EMAIL]

**Dati estratti dal cloud:**
[Descrizione dei dati trovati nei backup cloud che non erano più presenti sul dispositivo fisico]

### 8.2 Smart devices e IoT

**Altri dispositivi connessi individuati:**
- Smartwatch: [MARCA E MODELLO]
- Smart speaker: [MARCA E MODELLO]
- Auto connessa: [MARCA E MODELLO]
- [Altro dispositivo]

**Dati rilevanti da dispositivi smart:**
[Descrizione di eventuali dati aggiuntivi]

---

## 9. CONSIDERAZIONI TECNICHE E LIMITI DELL'ANALISI

**Dati accessibili:**
- ☐ Accesso completo a tutti i dati del dispositivo
- ☐ Accesso parziale — alcune aree protette o crittografate
- ☐ Accesso limitato — crittografia non superabile con i mezzi attuali

**Limitazioni riscontrate:**
[Esempio: "I messaggi scambiati tramite Signal (app crittografata end-to-end) sono stati completamente cancellati e non è stato possibile recuperarli. L'app non mantiene backup non crittografati."]

**Affidabilità temporale:**
[Nota sulla precisione dei timestamp: fuso orario, eventuali modifiche manuali dell'orologio di sistema, etc.]

---

## 10. ALLEGATI TECNICI

- **Allegato A:** Documentazione fotografica del dispositivo al sequestro
- **Allegato B:** Report completo di estrazione Cellebrite/Oxygen
- **Allegato C:** Conversazioni complete (formato PDF)
- **Allegato D:** File multimediali rilevanti (foto/video)
- **Allegato E:** Timeline grafica delle attività
- **Allegato F:** Mappa dei movimenti (geolocalizzazione)
- **Allegato G:** Hash values e certificazione integrità

---

## 11. CONCLUSIONI PERITALI

In risposta al quesito posto dall'Autorità Giudiziaria, si conclude quanto segue:

**1. Recupero dati:**
[Sintesi dei dati recuperati e della loro completezza]

**2. Timeline delle attività:**
[Sintesi della ricostruzione temporale delle attività rilevanti]

**3. Geolocalizzazione:**
[Conclusioni sulla posizione del sospettato nei momenti chiave]

**4. Comunicazioni rilevanti:**
[Sintesi delle comunicazioni che collegano il sospettato al crimine]

**5. Tentativi di occultamento:**
[Conclusioni sui dati cancellati e sul tentativo di depistaggio]

**6. Contraddizioni:**
[Sintesi delle principali contraddizioni tra dichiarazioni e prove digitali]

**Valutazione finale:**
[Valutazione complessiva dell'analista sulla rilevanza delle prove digitali per l'indagine]

---

**Firma dell'analista forense:**

Isp. Tecnico [NOME COMPLETO]
Digital Forensic Examiner — Polizia Postale
Matricola n. [NUMERO]
Certificazioni: [ELENCO CERTIFICAZIONI]

**Data:** [DATA COMPLETA]

**Timbro della Polizia Postale:** ___________________________

---

*Il presente rapporto è stato redatto nel rispetto delle linee guida ISO/IEC 27037:2012 (Digital Evidence), RFC 3227 (Evidence Collection and Archiving), e delle best practices internazionali di digital forensics. L'analisi è stata condotta garantendo l'integrità, l'autenticità e la tracciabilità delle prove digitali.*
