# COMANDO PROVINCIALE CARABINIERI DI BRESCIA — ANALISI DIGITALE FORENSE

## Reparto Investigazioni Scientifiche — Sezione Telematica

---

**Protocollo:** BS-2026-0147/DIG-F
**Data analisi:** 18-22 gennaio 2026
**Perito analista:** Ing. Paolo Ceruti, Consulente Tecnico del P.M., Sezione Telematica, Carabinieri ROS Brescia
**Oggetto:** Analisi forense dei sistemi digitali e dei dispositivi elettronici sequestrati presso la Clinica Mente Chiara, Monte Isola (BS), in relazione al decesso del Dott. Alessandro Venturi, avvenuto nella notte tra il 16 e il 17 gennaio 2026
**Luogo di riferimento:** Clinica Mente Chiara, Via del Santuario 12, Monte Isola, 25050 (BS)
**Magistrato richiedente:** Dott.ssa Francesca Molinari, Sostituto Procuratore della Repubblica presso il Tribunale di Brescia

---

## 1. Premessa

Il presente rapporto illustra i risultati dell'analisi forense condotta su tutti i dispositivi digitali e i sistemi elettronici presenti nella Clinica Mente Chiara, sequestrati in data 17 gennaio 2026 a seguito del ritrovamento del corpo del Dott. Alessandro Venturi, 62 anni, psichiatra e direttore della struttura. L'analisi si è concentrata sui seguenti elementi:

- Sistema di controllo accessi elettronico (tastierino a codice numerico)
- Router Wi-Fi della clinica e relativi log di connessione
- Computer del Dott. Venturi (MacBook Pro 14", 2023)
- Telefono cellulare della Sig.ra Sara Magnani (iPhone 14)
- Ulteriori dispositivi di rete e registrazione

Tutti i dispositivi sono stati acquisiti secondo le procedure di catena di custodia previste dalla normativa vigente (art. 244-bis c.p.p.) e le copie forensi sono state realizzate con strumenti certificati (Cellebrite UFED Premium, FTK Imager).

---

## 2. Sistema di Controllo Accessi — Tastierino Elettronico

### 2.1 Descrizione del Sistema

La porta della "Sala della Quiete" (studio terapeutico privato del Dott. Venturi, piano terra) è dotata di una serratura elettronica con tastierino numerico a 4 cifre, modello **KABA Paxos Compact**, installata nel marzo 2021. Il sistema registra internamente:
- Data e ora di ogni inserimento di codice
- Codice inserito (crittografato)
- Esito dell'operazione (accesso concesso / negato)
- Stato della serratura (aperta / chiusa)

### 2.2 Codici Registrati nel Sistema

Il sistema prevedeva **tre codici attivi**:

| Codice | Assegnatario | Data attivazione | Note |
|--------|-------------|------------------|------|
| 7493# | Dott. Alessandro Venturi | 15/03/2021 | Codice primario |
| 2861# | Dott.ssa Marta Coletti | 15/03/2021 | Codice secondario — vicedirettrice |
| 5520# | Sara Magnani | 01/09/2022 | Codice terziario — capo infermiera |

### 2.3 Log di Accesso — 16 Gennaio 2026

Di seguito il registro completo degli accessi alla Sala della Quiete nella giornata del 16 gennaio 2026:

| Orario | Codice | Assegnatario | Esito | Stato serratura |
|--------|--------|-------------|-------|-----------------|
| 08:12 | 7493# | Dott. Venturi | Accesso concesso | Aperta |
| 08:14 | — | — | — | Chiusa (dall'interno) |
| 09:30 | 7493# | Dott. Venturi | Accesso concesso | Aperta |
| 09:32 | — | — | — | Chiusa (dall'interno) |
| 12:45 | 7493# | Dott. Venturi | Accesso concesso | Aperta |
| 12:47 | — | — | — | Chiusa (dall'interno) |
| 14:00 | 7493# | Dott. Venturi | Accesso concesso | Aperta |
| 14:03 | — | — | — | Chiusa (dall'interno) |
| 17:30 | 7493# | Dott. Venturi | Accesso concesso | Aperta |
| 17:32 | — | — | — | Chiusa (dall'interno) |
| 18:45 | 7493# | Dott. Venturi | Accesso concesso | Aperta |
| 18:48 | — | — | — | Chiusa (dall'interno) |
| **21:05** | **7493#** | **Dott. Venturi** | **Accesso concesso** | **Aperta** |
| **21:07** | — | — | — | **Chiusa (dall'interno)** |

> **DATO CRITICO:** L'ultimo codice inserito sulla Sala della Quiete risulta essere il codice **7493#** (assegnato al Dott. Venturi) alle ore **21:05** del 16 gennaio 2026. Dopo tale orario, **nessun altro codice è stato inserito**. La porta è rimasta **chiusa dall'interno** continuativamente dalle ore 21:07 fino all'effrazione eseguita dai Carabinieri della Stazione di Sulzano alle ore **11:15 del 17 gennaio 2026**, quando il corpo è stato rinvenuto.

### 2.4 Osservazioni Tecniche

- Non risultano tentativi di accesso con codici errati nella serata del 16 gennaio.
- Il sistema non registra aperture dall'interno (la porta può essere aperta dall'interno senza codice tramite maniglia a rotazione).
- La serratura era in perfetto stato di funzionamento al momento del sequestro.
- **Nota investigativa:** Il fatto che l'ultimo accesso sia avvenuto con il codice di Venturi alle 21:05 indica che la vittima è entrata nella Sala della Quiete e ha chiuso la porta dall'interno alle 21:07. Tuttavia, questo non esclude che una persona fosse già all'interno della stanza prima delle 21:05, o che qualcuno sia entrato insieme a Venturi senza dover inserire un proprio codice. Allo stesso modo, chiunque fosse dentro la stanza poteva uscire dall'interno senza lasciare traccia nel registro elettronico.

---

## 3. Log di Connessione Wi-Fi — Router della Clinica

### 3.1 Infrastruttura di Rete

La Clinica Mente Chiara è dotata di un sistema Wi-Fi composto da un router principale **Ubiquiti UniFi Dream Machine Pro** e **sei access point** distribuiti nella struttura, che consentono di determinare la posizione approssimativa dei dispositivi connessi in base alla potenza del segnale ricevuto:

| Access Point | Posizione | Copertura principale |
|-------------|-----------|---------------------|
| AP-01 | Piano terra — Reception / Ingresso | Hall, reception, corridoio principale |
| AP-02 | Piano terra — Ala terapeutica | Sala della Quiete, studi medici, cucina |
| AP-03 | Piano terra — Archivio e amministrazione | Archivio, ufficio direttrice, sala riunioni |
| AP-04 | Primo piano — Ala pazienti | Camere pazienti, suite Aldrovandi |
| AP-05 | Primo piano — Ala ospiti / personale | Camere ospiti, stanza Magnani, stanza Brambilla |
| AP-06 | Primo piano — Biblioteca e soggiorno | Biblioteca, sala lettura, terrazza coperta |

> **Nota sulla precisione:** La localizzazione basata su access point Wi-Fi consente di determinare l'**area** del dispositivo con una precisione di circa 10-20 metri. Non è possibile distinguere con certezza stanze adiacenti servite dallo stesso access point.

### 3.2 Dispositivi Connessi — Sera del 16 Gennaio 2026

Di seguito il riepilogo delle connessioni Wi-Fi per ciascun dispositivo identificato, con indicazione dell'access point prevalente (segnale più forte) e della fascia oraria di connessione.

---

#### 3.2.1 Dott.ssa Marta Coletti — iPhone 13 (MAC: 4A:7B:C3:D1:E8:F2)

| Fascia oraria | Access Point prevalente | Area stimata | Attività di rete |
|--------------|------------------------|-------------|-----------------|
| 18:00 - 20:10 | AP-02 | Ala terapeutica / studi medici | Navigazione, email |
| **20:15 - 22:20** | **AP-03** | **Archivio e amministrazione** | **Download/upload intenso (trasferimento file)** |
| 22:25 - 22:45 | AP-05 | Ala ospiti (1° piano) | Navigazione leggera |
| 22:45 - 06:00 | AP-05 | Ala ospiti — camera Coletti | Inattivo (standby) |

> **Nota:** La Dott.ssa Coletti risulta nell'area archivio/amministrazione dalle 20:15 alle 22:20, con attività di rete coerente con operazioni di copia e trasferimento file. Questo è **confermato** dalla telecamera di sicurezza dell'archivio (vedi sezione 6).

---

#### 3.2.2 Tommaso Venturi — MacBook Pro 16" (MAC: 8C:2D:E5:F1:A3:B7)

| Fascia oraria | Access Point prevalente | Area stimata | Attività di rete |
|--------------|------------------------|-------------|-----------------|
| 18:00 - 19:30 | AP-01 | Reception / ingresso | Navigazione, streaming |
| **19:45 - 01:30** | **AP-05** | **Camera ospiti — 1° piano** | **Traffico ad alta banda continuo (editing video, rendering)** |
| 01:30 - 07:00 | AP-05 | Camera ospiti | Inattivo (standby) |

> **Nota:** Il laptop di Tommaso Venturi mostra un utilizzo continuo e ad alta intensità di banda tra le 19:45 e le 01:30, coerente con attività di editing video e rendering. I log applicativi del software DaVinci Resolve (estratti in sede di analisi forense del dispositivo) confermano sessioni di editing attive con salvataggi automatici ogni 5 minuti nell'intero arco temporale. **Nessuna interruzione significativa rilevata.**

---

#### 3.2.3 Prof. Riccardo Stein — Samsung Galaxy S23 (MAC: 1F:9A:B4:C6:D8:E0)

| Fascia oraria | Access Point prevalente | Area stimata | Attività di rete |
|--------------|------------------------|-------------|-----------------|
| 18:00 - 19:50 | AP-02 | Ala terapeutica / studi | Navigazione, email |
| **20:00 - 00:00** | **AP-06** | **Biblioteca e soggiorno — 1° piano** | **Navigazione intermittente, email** |
| 00:05 - 00:15 | AP-05 | Ala ospiti (1° piano) | Spostamento |
| 00:15 - 07:00 | AP-05 | Camera ospiti — Stein | Inattivo (standby) |

> **Nota:** Il Prof. Stein risulta nell'area della biblioteca per l'intera serata, dalle 20:00 a mezzanotte. L'attività di rete è intermittente, coerente con consultazione di siti web e corrispondenza email.

---

#### 3.2.4 Luca Brambilla — iPhone 15 Pro Max (MAC: 6E:3C:A1:B5:D9:F4)

| Fascia oraria | Access Point prevalente | Area stimata | Attività di rete |
|--------------|------------------------|-------------|-----------------|
| 18:00 - 20:10 | AP-01 / AP-02 | Reception / ala terapeutica | Navigazione, chiamate VoIP |
| **20:15 - 23:30** | **AP-05** | **Camera ospiti — 1° piano** | **Chiamate vocali continue (rete cellulare + Wi-Fi Calling)** |
| 23:35 - 07:00 | AP-05 | Camera ospiti — Brambilla | Inattivo (standby) |

> **Nota:** Il dispositivo di Brambilla risulta nella camera ospiti dalle 20:15 alle 23:30 con attività vocale continua. I tabulati telefonici (vedi documento separato) confermano chiamate ininterrotte in questa fascia oraria. Ulteriore conferma: il microfono nascosto nel corridoio del primo piano (installato da Tommaso Venturi — vedi sezione 6) ha registrato frammenti delle conversazioni di Brambilla.

---

#### 3.2.5 Sara Magnani — iPhone 14 (MAC: 2B:8D:C7:E3:F5:A9)

| Fascia oraria | Access Point prevalente | Area stimata | Attività di rete |
|--------------|------------------------|-------------|-----------------|
| 18:00 - 19:00 | AP-04 | Ala pazienti — 1° piano | Navigazione, messaggi |
| 19:00 - 20:00 | AP-02 | Ala terapeutica / cucina | Navigazione leggera |
| 20:00 - 20:15 | AP-05 | Ala ospiti / stanza Magnani | Messaggi |
| 20:15 - 20:28 | AP-02 | **Postazione infermieristica** | Messaggi, navigazione |
| **20:28** | **AP-02** | **Postazione infermieristica** | **ULTIMO PING — BATTERIA AL 73%** |
| **20:28 in poi** | **OFFLINE** | **NESSUN DATO** | **NESSUNA ATTIVITÀ** |

> **DATO CRITICO:** Il telefono della Sig.ra Magnani risulta **OFFLINE** dalle ore 20:28 del 16 gennaio 2026. L'ultimo contatto con la rete Wi-Fi (e con la rete cellulare — vedi tabulati) risale alle 20:28, quando il dispositivo era connesso all'access point AP-02 (postazione infermieristica, piano terra). Il livello di batteria rilevato dall'ultimo handshake Wi-Fi era del **73%**. Il dispositivo non si è più riconnesso alla rete fino alle **06:15 del 17 gennaio 2026**, quando risulta nuovamente attivo nell'area dell'AP-05 (camera Magnani, primo piano), con batteria al **71%**.
>
> **Analisi tecnica:** Un telefono con il 73% di batteria residua **non si spegne spontaneamente** per esaurimento energetico. Lo spegnimento o la disattivazione delle connessioni wireless (modalità aereo o spegnimento manuale) in queste condizioni è da considerarsi un'**azione volontaria dell'utente**. Il calo di soli 2 punti percentuali di batteria (da 73% a 71%) in circa 10 ore è coerente con un dispositivo **spento** (non semplicemente in modalità aereo, dove il consumo sarebbe stato maggiore).

---

#### 3.2.6 Beatrice Aldrovandi — iPhone 12 Mini (MAC: 5G:1A:D4:B8:C2:E6)

| Fascia oraria | Access Point prevalente | Area stimata | Attività di rete |
|--------------|------------------------|-------------|-----------------|
| 18:00 - 20:25 | AP-04 | Suite Aldrovandi — 1° piano | Navigazione molto leggera |
| 20:25 - 20:30 | AP-04 | Suite Aldrovandi | Ultimo messaggio WhatsApp inviato |
| **20:30 - 08:00** | **AP-04** | **Suite Aldrovandi** | **Nessuna attività utente (dispositivo in standby)** |

> **Nota:** Il telefono della Sig.ra Aldrovandi resta connesso al Wi-Fi per tutta la notte nell'area della sua suite, ma non registra alcuna attività utente dopo le 20:30. Questo è coerente con la somministrazione del sedativo notturno (Lorazepam 2,5 mg) documentata nel registro farmacologico della clinica alle ore 20:25.

---

#### 3.2.7 Dott. Alessandro Venturi (VITTIMA) — iPhone 15 (MAC: 9H:4E:F7:A2:B6:C1)

| Fascia oraria | Access Point prevalente | Area stimata | Attività di rete |
|--------------|------------------------|-------------|-----------------|
| 18:00 - 18:45 | AP-02 | Ala terapeutica / studi | Email, navigazione |
| 18:45 - 20:50 | AP-01 / AP-02 | Reception / corridoio / cucina | Navigazione intermittente |
| 20:50 - 21:05 | AP-02 | Ala terapeutica | Spostamento |
| **21:05 - 21:12** | **AP-02** | **Sala della Quiete** | **Lettura email** |
| **21:12** | **AP-02** | **Sala della Quiete** | **Ultima attività rilevata** |
| 21:12 - 11:15 (17/01) | AP-02 | Sala della Quiete | Dispositivo connesso ma nessuna attività utente |

> **Nota:** L'ultima attività registrata sul telefono della vittima è la lettura di un'email alle ore 21:12. Il dispositivo resta connesso al Wi-Fi (quindi acceso) ma non mostra più alcuna interazione da parte dell'utente. Questo è coerente con il decesso stimato tra le **21:15 e le 22:00** (vedi rapporto medico-legale).

---

## 4. Computer del Dott. Venturi — MacBook Pro 14" (2023)

### 4.1 Descrizione

Il computer portatile del Dott. Venturi (MacBook Pro 14", chip M2 Pro, 512 GB SSD, S/N: C02ZL3WXLVDN) è stato rinvenuto nella Sala della Quiete, aperto sulla scrivania, in stato di sospensione. L'analisi forense è stata condotta sulla copia bit-a-bit dell'SSD.

### 4.2 File di Ricerca — Cartella "Progetto Mnemoxil"

Nella cartella `~/Documenti/Ricerca/Progetto_Mnemoxil/` sono stati rinvenuti **47 file**, tra cui:

| Nome file | Tipo | Ultima modifica | Dimensione | Contenuto |
|-----------|------|-----------------|------------|-----------|
| Mnemoxil_Protocollo_v3.2.pdf | PDF | 12/11/2025 | 2,4 MB | Protocollo di somministrazione dettagliato |
| Mnemoxil_Risultati_Fase1-3.xlsx | Foglio di calcolo | 03/01/2026 | 890 KB | Risultati sperimentali su 12 soggetti |
| Pazienti_Trattati_RISERVATO.docx | Documento | 08/01/2026 | 156 KB | Elenco dei soggetti trattati con codici identificativi |
| SM_Fase3_Completo.pdf | PDF | 14/10/2025 | 1,1 MB | Report dettagliato — soggetto "S.M." — Fase 3 completata |
| BA_Monitoraggio_Mensile.xlsx | Foglio di calcolo | 10/01/2026 | 340 KB | Monitoraggio cognitivo — soggetto "B.A." |
| Effetti_Collaterali_Report.pdf | PDF | 22/12/2025 | 780 KB | Report sugli effetti collaterali osservati |
| Mnemoxil_Brevetto_Bozza.docx | Documento | 05/01/2026 | 420 KB | Bozza di domanda di brevetto |
| Fornitore_Composti_Chimici.pdf | PDF | 30/11/2025 | 95 KB | Corrispondenza con fornitore di sostanze chimiche |

> **Nota investigativa:** Le iniziali "S.M." corrispondono a **Sara Magnani** (capo infermiera). Le iniziali "B.A." corrispondono a **Beatrice Aldrovandi** (paziente). Il file "SM_Fase3_Completo.pdf" documenta il completamento della "Fase 3" del trattamento Mnemoxil sul soggetto S.M. — descritta nel protocollo come la fase di "consolidamento della nuova narrativa mnestica", ovvero la stabilizzazione dei ricordi modificati.

### 4.3 Email Non Inviata — Bozza a Prof. Stein

Nella cartella "Bozze" del client di posta elettronica (Apple Mail) è stata rinvenuta la seguente email, **mai inviata**:

```
Da: alessandro.venturi@clinicamentechiara.it
A: r.stein@uni-muenchen.de
Oggetto: Questione urgente — Ultimo avvertimento
Data bozza: 16 gennaio 2026, 18:32
Stato: BOZZA (non inviata)

Riccardo,

scrivo per l'ultima volta. Sono passati otto anni e la situazione
non è più tollerabile.

I €50.000 che ti ho versato nel 2018 erano destinati alla ricerca,
non al tuo conto personale. Lo sappiamo entrambi. Hai firmato un
accordo di collaborazione che prevedeva la pubblicazione congiunta
dei risultati entro il 2020. Non hai mai prodotto nulla.

Ho le ricevute dei bonifici, le email in cui accettavi, e la
registrazione della nostra conversazione del 14 marzo 2018 a Monaco.

Se non restituisci l'intero importo entro il 31 gennaio, sarò
costretto a segnalare la questione al Comitato Etico dell'Università
di Monaco e all'Ordine dei Medici di Brescia. Non è una minaccia,
è una constatazione.

Ti ho dato ogni possibilità. Non me ne lasci altre.

Alessandro
```

> **Nota investigativa:** Questa bozza rivela un conflitto finanziario tra Venturi e il Prof. Stein, relativo a una somma di €50.000 versata nel 2018 per una collaborazione di ricerca mai portata a termine. L'email non è stata inviata — non è chiaro se Venturi intendesse inviarla successivamente o se abbia deciso di non farlo.

### 4.4 Attività Pianificata — Eliminazione File

Nell'applicazione "Automator" del MacBook è stato rinvenuto un flusso di lavoro programmato con le seguenti caratteristiche:

```
Nome: "Pulizia_Archivio_Ricerca"
Creato: 14 gennaio 2026, 23:15
Programmato per: Sabato 18 gennaio 2026, ore 06:00
Azione: Eliminazione sicura (sovrascrittura 7 passaggi) della cartella
         ~/Documenti/Ricerca/Progetto_Mnemoxil/
         e di tutti i file contenuti (47 file, 8,9 GB)
Stato: NON ESEGUITO (il computer era in sospensione al momento previsto)
```

> **DATO CRITICO:** Il Dott. Venturi aveva programmato la **cancellazione definitiva** di tutti i file relativi al Progetto Mnemoxil per la mattina di sabato 18 gennaio 2026, con un metodo di sovrascrittura a 7 passaggi che avrebbe reso i dati irrecuperabili. L'operazione non è stata eseguita perché il computer era in stato di sospensione al momento programmato (Venturi era già deceduto). Se la cancellazione fosse avvenuta, l'intera documentazione relativa al Mnemoxil — inclusi i dati sul trattamento dei soggetti S.M. e B.A. — sarebbe stata distrutta.

---

## 5. Analisi Forense del Telefono di Sara Magnani — iPhone 14

### 5.1 Descrizione

Il telefono cellulare della Sig.ra Sara Magnani (iPhone 14, 128 GB, S/N: FK2TP4HMDN6C, colore: mezzanotte) è stato sequestrato in data 17 gennaio 2026 alle ore 14:30 e sottoposto ad estrazione forense completa tramite Cellebrite UFED Premium.

### 5.2 Fotografie — Rullino Fotografico

Nell'album fotografico del dispositivo sono state rinvenute **23 fotografie** scattate il **14 gennaio 2026** tra le ore **02:15 e le 02:48** (orario notturno), tutte relative a documenti cartacei:

| # | Orario | Soggetto della foto | Note |
|---|--------|--------------------|----- |
| 1 | 02:15 | Copertina fascicolo "Progetto Mnemoxil — RISERVATO" | Fascicolo con logo della clinica |
| 2 | 02:16 | Protocollo di somministrazione, pag. 1 | Titolo: "Mnemoxil — Protocollo di Trattamento" |
| 3 | 02:17 | Protocollo di somministrazione, pag. 2 | Dettagli sulle fasi del trattamento |
| 4 | 02:18 | Protocollo di somministrazione, pag. 3 | Fase 3: "Consolidamento narrativa mnestica" |
| 5 | 02:19 | Elenco soggetti trattati | Con iniziali e date di trattamento |
| 6 | 02:21 | Report soggetto "S.M." — pag. 1 | "Soggetto S.M., femmina, 28 anni al momento del trattamento" |
| 7 | 02:22 | Report soggetto "S.M." — pag. 2 | "Relazione sentimentale con il somministratore — conflitto etico" |
| 8 | 02:23 | Report soggetto "S.M." — pag. 3 | "Fase 1: Frammentazione mnestica avviata il 15/09/2017" |
| 9 | 02:24 | Report soggetto "S.M." — pag. 4 | "Fase 2: Sostituzione narrativa completata il 22/11/2017" |
| 10 | 02:25 | Report soggetto "S.M." — pag. 5 | "Fase 3: Consolidamento completato il 14/02/2018" |
| 11 | 02:27 | Report soggetto "S.M." — pag. 6 | Note: "Il soggetto non mostra consapevolezza del trattamento" |
| 12 | 02:28 | Report effetti collaterali | "Possibili flashback in situazioni di stress" |
| 13 | 02:30 | Diario clinico sessioni con S.M. — pag. 1 | Sessioni di "manutenzione" periodiche |
| 14 | 02:32 | Diario clinico sessioni con S.M. — pag. 2 | Sessione ottobre 2025: "Richiamo di controllo" |
| 15 | 02:34 | Corrispondenza con fornitore composti chimici | Ordini di reagenti non registrati |
| 16 | 02:36 | Foglio di calcolo — dati soggetto B.A. | Beatrice Aldrovandi — dati cognitivi |
| 17 | 02:38 | Note personali Venturi su S.M. | "La relazione è stata un errore. Deve restare sepolta." |
| 18 | 02:39 | Note personali Venturi su S.M. (retro) | "Se S.M. ricorda, tutto crolla. Monitorare con attenzione." |
| 19 | 02:41 | Foglio comparativo: Mnemoxil vs terapie standard | Efficacia, rischi, legalità |
| 20 | 02:43 | Contratto di riservatezza (bozza, non firmata) | Tra Venturi e Stein |
| 21 | 02:44 | Ricevuta bonifico €50.000 a Stein | Datata 22/03/2018 |
| 22 | 02:46 | Pagina di diario di Venturi — 12/2025 | "S.M. mostra segni di riemersione. Devo agire." |
| 23 | 02:48 | Pagina di diario di Venturi — 01/2026 | "Cancellare tutto entro sabato. Non restino tracce." |

> **Nota investigativa:** Le fotografie sono state scattate nelle ore notturne del 14 gennaio 2026, presumibilmente nell'ufficio del Dott. Venturi o nella Sala della Quiete. La Magnani disponeva del codice di accesso alla Sala della Quiete (codice 5520#). Le fotografie documentano la scoperta, da parte della Magnani, dell'intero dossier Mnemoxil, incluso il suo fascicolo personale ("S.M."), dal quale emergono: la relazione sentimentale con Venturi nel 2017, il trattamento con Mnemoxil per cancellare i ricordi di tale relazione, e le sessioni di "manutenzione" per monitorare la stabilità della cancellazione mnestica.

### 5.3 Cronologia di Navigazione — Browser Safari

La cronologia del browser Safari del dispositivo rivela le seguenti ricerche rilevanti nel periodo novembre-dicembre 2025:

| Data | Orario | Ricerca / URL | Note |
|------|--------|--------------|------|
| 18/11/2025 | 23:41 | "perdita di memoria inspiegabile cause" | Google |
| 19/11/2025 | 00:12 | "farmaci che cancellano ricordi" | Google |
| 19/11/2025 | 00:25 | "manipolazione memoria umana tecniche" | Google |
| 25/11/2025 | 22:08 | "come vendicarsi di qualcuno senza essere scoperti" | Google |
| 28/11/2025 | 01:15 | "veleni non rilevabili autopsia" | Google |
| 28/11/2025 | 01:22 | "tetrodotossina effetti" | Google |
| 28/11/2025 | 01:34 | "tetrodotossina dose letale umani" | Google |
| 28/11/2025 | 01:47 | "tetrodotossina tempo di azione" | Google |
| 30/11/2025 | 19:55 | "acquisto fugu online Italia" | Google |
| 30/11/2025 | 20:03 | "acquisto pesce palla fugu importazione" | Google |
| 30/11/2025 | 20:18 | "kaiseki imports tokyo" | Google |
| 30/11/2025 | 20:30 | www.kaiseki-imports.co.jp/en/products/fugu | Sito web |
| 30/11/2025 | 20:45 | www.kaiseki-imports.co.jp/en/order | Pagina ordine |
| 02/12/2025 | 14:20 | "casella postale affitto Iseo" | Google |
| 02/12/2025 | 14:28 | "Poste Italiane casella postale Iseo BS" | Google |
| 02/12/2025 | 14:35 | "documenti necessari casella postale" | Google |
| 08/12/2025 | 10:15 | "come preparare tetrodotossina da fugu" | Google |
| 08/12/2025 | 10:30 | "estrazione tetrodotossina organi fugu fegato" | Google |
| 08/12/2025 | 10:48 | "tetrodotossina solubile in acqua calda" | Google |
| 15/12/2025 | 21:02 | www.kaiseki-imports.co.jp/en/order/confirm/TK-2025-8847 | Conferma ordine |

> **Nota investigativa:** La progressione delle ricerche mostra un percorso chiaro: dalla scoperta della manipolazione mnestica (novembre), alla ricerca di un metodo di avvelenamento non rilevabile (fine novembre), all'identificazione della tetrodotossina come veleno d'elezione, all'acquisto del pesce palla da un fornitore giapponese, fino alla ricerca di metodi di estrazione della tossina. Le ricerche sull'"affitto casella postale Iseo" sono coerenti con la necessità di un indirizzo di consegna non riconducibile alla clinica.

### 5.4 Email — Conferma d'Ordine

Nella casella email secondaria `giulia.martinelli.87@protonmail.com` (configurata sul dispositivo e protetta da password, sbloccata in sede di analisi forense) è stata rinvenuta la seguente email:

```
Da: orders@kaiseki-imports.co.jp
A: giulia.martinelli.87@protonmail.com
Data: 15 dicembre 2025, 21:04 (JST) / 13:04 (CET)
Oggetto: Order Confirmation — TK-2025-8847

Dear Customer,

Thank you for your order. Please find below your order details:

ORDER NUMBER: TK-2025-8847
DATE: December 15, 2025

ITEM: Whole Tiger Fugu (Takifugu rubripes) — Fresh, Unfilleted
      Grade: Premium — For Professional Use Only
      Weight: approx. 1.2 kg
QUANTITY: 1
PRICE: ¥55,000 (approx. €340.00)

SHIPPING: International Express (EMS)
TRACKING: JP489271536EE
ESTIMATED DELIVERY: December 22-26, 2025

SHIP TO:
Giulia Martinelli
Casella Postale 47
Poste Italiane — Ufficio di Iseo
Via Roma 15
25049 Iseo (BS)
ITALY

PAYMENT: Visa ending in **4721 (prepaid)
TOTAL CHARGED: ¥55,000 (€340.00)

NOTE: This product is intended for licensed food preparation
professionals only. Kaiseki Imports assumes no liability for
improper handling.

Thank you for choosing Kaiseki Imports.
Kaiseki Imports Co., Ltd.
Tokyo, Japan
```

> **Nota investigativa:** L'ordine è stato effettuato a nome di "Giulia Martinelli" — identità fittizia (vedi sezione 7). Il prodotto ordinato è un esemplare intero di pesce palla (fugu) della specie Takifugu rubripes, i cui organi interni (fegato, ovaie, pelle) contengono concentrazioni letali di tetrodotossina. Il pagamento è avvenuto con carta Visa prepagata intestata a "Giulia Martinelli". L'indirizzo di spedizione è la Casella Postale 47 presso l'ufficio postale di Iseo.

---

## 6. Tracciamento Indirizzo IP — Ordine Online

### 6.1 Analisi

Su richiesta della Procura della Repubblica di Brescia, è stata effettuata un'analisi dell'indirizzo IP dal quale è stato effettuato l'ordine presso il sito www.kaiseki-imports.co.jp in data 15 dicembre 2025.

**Risultati:**

| Parametro | Valore |
|-----------|--------|
| Indirizzo IP sorgente | 93.147.82.214 |
| Provider | Fastweb S.p.A. |
| Contratto intestato a | Clinica Mente Chiara S.r.l. |
| Sede del contratto | Via del Santuario 12, Monte Isola (BS) |
| Tipo di connessione | Fibra ottica FTTH |
| Data e ora connessione | 15/12/2025, ore 21:02 CET |
| Dispositivo | iPhone (User-Agent: Mozilla/5.0; iPhone; CPU iPhone OS 17_2) |

> **Nota investigativa:** L'ordine del pesce fugu è stato effettuato dalla rete Wi-Fi della Clinica Mente Chiara il 15 dicembre 2025 alle ore 21:02, tramite un dispositivo iPhone. Il log del router (vedi sezione 3) mostra che alle ore 21:02 del 15 dicembre 2025 erano connessi alla rete Wi-Fi i seguenti dispositivi iPhone: quello di Sara Magnani (AP-05, area camera) e quello di Beatrice Aldrovandi (AP-04, suite). Dato il contenuto dell'ordine e le ricerche precedenti trovate sul dispositivo della Magnani, l'attribuzione alla Magnani è fortemente supportata.

---

## 7. Registrazioni Audio/Video — Dispositivi di Tommaso Venturi

### 7.1 Microfono Nascosto — Corridoio Primo Piano

Nell'ambito dell'analisi dei dispositivi di Tommaso Venturi (figlio della vittima, regista), è stato rinvenuto un registratore audio digitale **Zoom H1n** posizionato nel corridoio del primo piano, all'interno di un vaso decorativo, nei pressi delle camere ospiti. Il dispositivo è stato configurato per la registrazione continua a partire dalle ore **18:00 del 16 gennaio 2026**.

**Registrazioni rilevanti:**

| Fascia oraria | Contenuto audio | Qualità | Rilevanza |
|--------------|----------------|---------|-----------|
| 18:00-19:30 | Rumori ambientali, passi nel corridoio | Media | Bassa |
| 19:30-20:10 | Conversazione tra Stein e Venturi padre (parziale, lontana) | Bassa | Media — Stein dice: "...i soldi non c'entrano, Alessandro..." |
| 20:15-23:30 | **Frammenti delle telefonate di Brambilla** (voce udibile attraverso la porta della camera) | Media-Buona | **Alta — Confermano che Brambilla era in camera e al telefono** |
| 23:35-01:00 | Silenzio con rumori ambientali occasionali | Bassa | Bassa |

> **Nota investigativa:** Il microfono di Tommaso cattura in modo indiretto le telefonate di Brambilla, confermando che questi si trovava nella propria camera ospiti dalle 20:15 alle 23:30 e che era impegnato in conversazioni telefoniche continue. Tuttavia, il microfono **non copre** la cucina (piano terra, ala opposta), la Sala della Quiete, né la postazione infermieristica. Non vi sono registrazioni video delle aree critiche.

### 7.2 Telecamera di Sicurezza — Archivio

La clinica dispone di un'unica telecamera di sorveglianza, posizionata nell'**archivio** (piano terra, ala amministrativa), installata per proteggere i fascicoli dei pazienti.

**Registrazione 16 gennaio 2026:**

| Orario | Soggetto ripreso | Attività |
|--------|-----------------|----------|
| 20:15 | Dott.ssa Marta Coletti entra nell'archivio | Accende le luci, porta una borsa vuota |
| 20:15-22:18 | Dott.ssa Coletti nell'archivio | Copia fascicoli, organizza documenti, utilizza la fotocopiatrice |
| 22:18 | Dott.ssa Coletti esce dall'archivio | Porta una borsa piena di documenti |

> **Nota investigativa:** La telecamera dell'archivio conferma che la Dott.ssa Coletti si trovava nell'archivio **senza interruzione** dalle 20:15 alle 22:18. In nessun momento lascia l'archivio durante questa fascia oraria. L'omicidio è stimato tra le 21:15 e le 22:00, il che rende **impossibile** la partecipazione della Coletti al crimine.

---

## 8. Casella Postale — Poste Italiane, Iseo

### 8.1 Documenti di Noleggio

A seguito di indagini presso l'ufficio di Poste Italiane di Iseo (Via Roma 15, 25049 Iseo, BS), è stato acquisito il contratto di noleggio della Casella Postale n. 47:

| Parametro | Valore |
|-----------|--------|
| Numero casella | 47 |
| Data apertura | 8 dicembre 2025 |
| Canone annuale | €120,00 |
| Pagamento | Contanti |
| Intestataria | Giulia Martinelli |
| Documento d'identità presentato | Carta d'identità elettronica n. AT7893241 |
| Data di nascita dichiarata | 15/06/1990 |
| Codice fiscale dichiarato | MRTGLI90H55E704W |
| Indirizzo dichiarato | Via Garibaldi 22, 25049 Iseo (BS) |

### 8.2 Verifica dell'Identità

La verifica effettuata presso il Comune di Iseo e l'Anagrafe Centrale ha dato i seguenti risultati:

- **Carta d'identità n. AT7893241:** Non risulta rilasciata da nessun comune italiano. Il formato del numero è corretto ma il documento è un **falso**.
- **Codice fiscale MRTGLI90H55E704W:** Formalmente valido per una "Martinelli Giulia" nata il 15/06/1990, ma **non risulta associato ad alcun contribuente** nell'anagrafe tributaria.
- **Indirizzo Via Garibaldi 22, Iseo:** L'indirizzo esiste ma è sede di un negozio di articoli sportivi. **Nessuna "Giulia Martinelli" è mai stata residente a quell'indirizzo.**

> **Nota investigativa:** L'identità "Giulia Martinelli" è completamente fittizia, creata allo scopo specifico di noleggiare la casella postale e ricevere il pacco contenente il pesce fugu. La scelta del nome "Giulia" è potenzialmente significativa: la sorella di Sara Magnani si chiama **Giulia Magnani** (vedi tabulati telefonici). L'impiegata postale che ha effettuato la registrazione (Sig.ra Patrizia Bortolini) ha dichiarato di non ricordare con precisione la cliente, ma di avere una vaga impressione di "una donna giovane, capelli scuri, abbastanza alta" — descrizione compatibile con Sara Magnani.

---

## 9. Riepilogo e Conclusioni

### 9.1 Quadro Sinottico delle Evidenze Digitali

| Elemento | Dato chiave | Rilevanza investigativa |
|----------|------------|------------------------|
| Tastierino Sala della Quiete | Ultimo accesso 21:05 (codice Venturi) | Definisce la finestra temporale dell'omicidio |
| Wi-Fi — Coletti | Archivio 20:15-22:20 | Alibi confermato |
| Wi-Fi — Tommaso | Camera ospiti 19:45-01:30 | Alibi confermato |
| Wi-Fi — Stein | Biblioteca 20:00-00:00 | Alibi sostanziale |
| Wi-Fi — Brambilla | Camera ospiti 20:15-23:30 | Alibi confermato (anche da microfono) |
| Wi-Fi — Aldrovandi | Suite, inattiva dopo 20:30 | Alibi confermato (sedativo) |
| **Wi-Fi — Magnani** | **OFFLINE dalle 20:28, batteria 73%** | **Anomalia critica — spegnimento volontario** |
| Wi-Fi — Venturi | Sala della Quiete, ultima attività 21:12 | Coerente con ora del decesso |
| Computer Venturi | File Mnemoxil, email bozza a Stein, task eliminazione | Documenta il progetto e l'urgenza di distruzione |
| **Telefono Magnani** | Foto del dossier Mnemoxil, ricerche su tetrodotossina, ordine fugu | **Catena probatoria completa** |
| **IP ordine fugu** | **Rete Wi-Fi della clinica, 15/12/2025** | **L'ordine è partito dalla clinica** |
| Casella postale 47 | Identità fittizia "Giulia Martinelli" | Documento falso, indirizzo inesistente |
| Microfono Tommaso | Conferma alibi Brambilla | Prova indiretta |
| Telecamera archivio | Conferma alibi Coletti | Prova diretta |

### 9.2 Considerazioni Conclusive

L'analisi digitale forense evidenzia un quadro significativo di elementi a carico della Sig.ra **Sara Magnani**, che emerge come l'unica persona priva di un alibi digitale verificabile nella finestra temporale del decesso del Dott. Venturi. Il suo telefono risulta deliberatamente spento (73% di batteria) a partire dalle 20:28, e i dati estratti dal dispositivo documentano:

1. La scoperta del dossier Mnemoxil (foto del 14/01/2026);
2. Ricerche sulla tetrodotossina e sui metodi di avvelenamento (novembre-dicembre 2025);
3. L'acquisto del pesce fugu tramite identità fittizia (15/12/2025);
4. L'utilizzo della rete della clinica per l'ordine online;
5. La creazione di un'identità falsa per il noleggio della casella postale.

Il presente rapporto viene trasmesso al Sostituto Procuratore Dott.ssa Francesca Molinari per le valutazioni di competenza.

---

Brescia, 22 gennaio 2026

**Ing. Paolo Ceruti**
Consulente Tecnico del Pubblico Ministero
Sezione Telematica — Carabinieri ROS Brescia

---

*Documento riservato — Atti di indagine ex art. 329 c.p.p.*
*Protocollo BS-2026-0147/DIG-F*
