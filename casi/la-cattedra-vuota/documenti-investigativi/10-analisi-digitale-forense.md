# RELAZIONE DI ANALISI DIGITALE FORENSE

## Procura della Repubblica presso il Tribunale di Bologna
### Proc. N. 2025/1847 — Fascicolo "Cattedra Vuota"

---

**RELAZIONE TECNICA N. ADF-2025/1847-001**

**Oggetto**: Analisi forense dei dispositivi digitali, sistemi di controllo accessi, registrazioni di videosorveglianza e dati telematici acquisiti nell'ambito delle indagini relative al decesso del Prof. Renato Marini

**Data di redazione**: 16 febbraio 2025
**Laboratorio**: Sezione Indagini Telematiche — Polizia Postale e delle Comunicazioni, Compartimento Emilia-Romagna
**Perito incaricato**: Dott. Ing. Alessandro Ferrara, CTU del Tribunale di Bologna, Albo n. 4872
**Assistente tecnico**: Dott.ssa Maria Luisa Bianchi, Analista forense digitale
**Magistrato richiedente**: Dott.ssa Francesca De Luca, Sostituto Procuratore
**Decreto di acquisizione**: N. 2025/1847-SEQ del 11/02/2025

---

## 1. PREMESSA E METODOLOGIA

La presente relazione illustra i risultati dell'analisi forense condotta sui dispositivi digitali e i sistemi informatici acquisiti e/o esaminati nell'ambito del procedimento in oggetto. Le operazioni sono state eseguite nel rispetto delle best practice internazionali per la digital forensics (ISO/IEC 27037:2012, linee guida NIST SP 800-86) e delle disposizioni dell'art. 244 e ss. c.p.p.

Tutti i dispositivi sono stati acquisiti mediante copia forense bit-a-bit con verifica hash (SHA-256). Le catene di custodia sono documentate nei relativi verbali di sequestro.

### Elenco dei reperti digitali analizzati:

| Codice | Descrizione | Proprietario | Sequestro |
|--------|-------------|--------------|-----------|
| DIG-001 | MacBook Pro 14" (2023), S/N C02XXXXXXGN | Prof. Renato Marini | 09/02/2025, Studio 204 |
| DIG-002 | iPhone 15 Pro, 256GB, S/N DNXXXXXXX1 | Prof. Renato Marini | 09/02/2025, Studio 204 |
| DIG-003 | Log sistema controllo accessi Kaba SafeRoute | Università di Bologna | 11/02/2025, Ufficio Tecnico |
| DIG-004 | Registrazioni videosorveglianza Palazzo Scarani | Università di Bologna | 11/02/2025, Portineria |
| DIG-005 | MacBook Air 13" (2022), S/N C02XXXXXXHK | Dr.ssa Elena Valdi | 14/02/2025, Hotel Principe di Savoia, Milano |
| DIG-006 | Log chiave magnetica camera 412 | Hotel Principe di Savoia | 13/02/2025 (acquisizione telematica) |
| DIG-007 | Registrazioni videosorveglianza hotel | Hotel Principe di Savoia | 13/02/2025 (acquisizione telematica) |
| DIG-008 | Dati Telepass, contratto n. TPE-XXXXXXX | Dr.ssa Elena Valdi | 12/02/2025 (acquisizione telematica) |

---

## 2. ANALISI DEL MACBOOK PRO DEL PROF. MARINI (DIG-001)

### 2.1 Stato del dispositivo al momento del sequestro
Il MacBook Pro è stato rinvenuto aperto sulla scrivania dello Studio 204, collegato all'alimentatore, con il 78% di carica residua. Lo schermo mostrava un documento di testo (Microsoft Word) contenente una bozza di articolo accademico dal titolo *"Sovranità costituzionale e governance multilivello: il caso dell'Unione Europea dopo Lisbona"*. Il documento risultava modificato l'ultima volta alle ore **22:48** dell'8 febbraio 2025.

### 2.2 Cronologia delle attività — 8 febbraio 2025

| Ora | Attività | Applicazione | Note |
|-----|----------|-------------|------|
| 14:35 | Accesso al sistema (login) | macOS | Sblocco con Touch ID |
| 14:40 – 16:20 | Navigazione web | Safari | Siti di giornali (Repubblica, Corriere), SSRN, Google Scholar |
| 16:25 – 17:50 | Scrittura | Microsoft Word | Bozza articolo (v. sopra) — 4 salvataggi automatici |
| 18:00 – 18:30 | Email | Apple Mail | 3 email inviate, 7 lette (v. sezione 2.3) |
| 18:35 – 19:10 | Navigazione web | Safari | Sito lichess.org — partita di scacchi online |
| 19:15 – 19:45 | Inattività | — | Schermo in standby (nessun input) |
| 19:50 – 20:30 | Navigazione web | Safari | lichess.org — 2 partite blitz (3+0) |
| 20:35 – 22:30 | Navigazione web / scrittura alternata | Safari / Word | lichess.org (3 partite), intervallate da modifiche alla bozza |
| 22:30 – 22:48 | Scrittura | Microsoft Word | Ultimo periodo di attività. Ultima modifica salvata: 22:48 |
| Dopo 22:48 | Nessuna attività registrata | — | Il sistema non registra ulteriori input fino al sequestro |

**Nota critica**: L'assenza di attività dopo le 22:48 è coerente con l'ipotesi che il Prof. Marini sia stato raggiunto dalla Dr.ssa Valdi poco dopo quell'ora e abbia smesso di lavorare per consumare l'espresso e conversare.

### 2.3 Email rilevanti — Client Apple Mail

**Email inviata il 15/12/2024, ore 11:23**
- **Da**: renato.marini@unibo.it
- **A**: carlo.bruni@unibo.it
- **Oggetto**: Questione riservata
- **Corpo**:

> Caro Carlo,
>
> ho trovato cose interessanti riguardo al paper di Ferrara. Ne parliamo di persona. Ti conviene trovarmi disponibile, perché non sarò l'unico a notare certe somiglianze.
>
> Un caro saluto,
> Renato

**Analisi**: Il riferimento al "paper di Ferrara" è riconducibile al Dr. Alessio Ferrara, ricercatore junior del dipartimento. Il tono dell'email è inequivocabilmente allusivo: Marini segnala a Bruni di aver scoperto il plagio e suggerisce una minaccia velata ("non sarò l'unico a notare"). Questo messaggio costituisce riscontro documentale del ricatto che Marini esercitava su Bruni.

**Email inviata il 08/02/2025, ore 18:12**
- **Da**: renato.marini@unibo.it
- **A**: andrea.marini@outlook.com
- **Oggetto**: Re: Pasqua
- **Corpo**:

> Caro Andrea, mi fa piacere. Vediamo di organizzare, magari una settimana a Rimini come l'anno scorso. Ti abbraccio, papà.

**Nota**: Email di routine al figlio. Nessuna rilevanza investigativa diretta, ma conferma il tono sereno del soggetto nella serata — nessun segno di ansia o paura.

### 2.4 Ricerca di file eliminati

L'analisi dell'area non allocata del disco (APFS) ha rivelato frammenti di file eliminati il **8 febbraio 2025 tra le 19:15 e le 19:45** — intervallo temporale corrispondente al periodo di "inattività" registrato. I frammenti recuperati includono:

- Porzioni di un file PDF denominato (ricostruzione parziale): `Ferrara_paper_confronto_v2.pdf`
- Un file di testo con appunti contenenti le parole chiave: "plagio", "Bruni", "commissione etica", "confronto testuale 78%"
- La cartella `~/Documents/Ricerca/Bruni_dossier/` risulta eliminata in blocco alle 19:32

**Analisi**: La cancellazione di questi file coincide con il periodo in cui il badge del Prof. Carlo Bruni risulta attivo nell'edificio (ingresso 19:02, uscita 19:48). Si conclude con ragionevole certezza che Bruni abbia avuto accesso al computer di Marini durante la sua assenza dallo studio (Marini potrebbe essersi recato in bagno o al piano inferiore) e abbia eliminato i file relativi alle prove del plagio. L'eliminazione non è stata effettuata con software di wiping sicuro, consentendo il recupero parziale dei dati.

---

## 3. ANALISI DELL'IPHONE DEL PROF. MARINI (DIG-002)

### 3.1 Stato del dispositivo
L'iPhone 15 Pro è stato rinvenuto sulla scrivania dello Studio 204, con il 12% di batteria residua, schermo bloccato (codice a 6 cifre + Face ID). Sbloccato con mandato ai sensi dell'art. 254 c.p.p. mediante cooperazione con Apple (procedura di estrazione legale).

### 3.2 Messaggi WhatsApp rilevanti — 8 febbraio 2025

**Conversazione con contatto salvato come "E.V."** (numero +39 347-XXXXXXX, identificato come Dr.ssa Elena Valdi):

| Ora | Mittente | Messaggio |
|-----|----------|----------|
| **19:45** | **Marini** | *Ci vediamo in dipartimento stasera? Ho quella bozza da farti vedere.* |
| **20:10** | **E.V.** | *Passo più tardi, magari ti porto un caffè* ☕ |

**NOTA CRITICA**: Questo scambio di messaggi è di rilevanza probatoria fondamentale. Dimostra che:
1. Il Prof. Marini attendeva la visita della Dr.ssa Valdi nella serata dell'8 febbraio.
2. La Dr.ssa Valdi ha esplicitamente menzionato l'intenzione di portare un caffè — precisamente il veicolo attraverso il quale è stata somministrata la digossina letale.
3. La risposta della Valdi alle 20:10 è stata inviata mentre si trovava ancora a Milano (cena al Ristorante Savini con i colleghi del convegno), confermando la premeditazione: aveva già pianificato di recarsi a Bologna.
4. L'uso dell'emoji del caffè assume, alla luce degli eventi, un significato sinistro.

**Altre conversazioni di rilievo (8 febbraio)**:
- 17:30 — Messaggio a "Portineria Facoltà": *"Mancini, stasera resto fino a tardi. Non mi aspetti."*
- 18:05 — Messaggio a contatto "Carlo B.": *"Dove sei? Devo parlarti."* — **Nessuna risposta** da parte di Bruni.

### 3.3 Cronologia chiamate
Nessuna chiamata in entrata o in uscita dopo le 18:30 dell'8 febbraio. L'ultima chiamata registrata è alle 17:15 (chiamata in uscita verso segreteria di dipartimento, durata 2 minuti e 14 secondi).

---

## 4. SISTEMA DI CONTROLLO ACCESSI — KABA SAFEROUTE (DIG-003)

### 4.1 Descrizione del sistema
L'edificio di Palazzo Scarani, Via Zamboni 38, è dotato di sistema di controllo accessi **Kaba SafeRoute** con lettori badge RFID alle seguenti porte:
- **Ingresso principale** (Via Zamboni 38): lettore bidirezionale (entrata/uscita) + telecamera di sorveglianza
- **Porta di servizio laterale** (lato Via delle Moline): lettore unidirezionale (**solo entrata**), uscita tramite maniglione antipanico (push bar) — **nessuna telecamera**

### 4.2 Registrazioni badge — 8 febbraio 2025

| Ora | Badge | Titolare | Porta | Direzione | Esito |
|-----|-------|----------|-------|-----------|-------|
| 08:12 | M-0047 | Giuseppe Mancini (custode) | Principale | Ingresso | Autorizzato |
| 08:15 | M-0047 | Giuseppe Mancini | Principale | Uscita | Autorizzato |
| 09:03 | F-0128 | Prof.ssa Luisa Gentili | Principale | Ingresso | Autorizzato |
| 12:45 | F-0128 | Prof.ssa Luisa Gentili | Principale | Uscita | Autorizzato |
| **14:30** | **F-0089** | **Prof. Renato Marini** | **Principale** | **Ingresso** | **Autorizzato** |
| **19:02** | **F-0112** | **Prof. Carlo Bruni** | **Principale** | **Ingresso** | **Autorizzato** |
| **19:48** | **F-0112** | **Prof. Carlo Bruni** | **Principale** | **Uscita** | **Autorizzato** |
| **22:55** | **F-0134** | **Dr.ssa Laura Fabbri** | **Servizio** | **Ingresso** | **Autorizzato** |

### 4.3 Analisi critica — Badge F-0134 (Dr.ssa Laura Fabbri)

L'accesso registrato alle **22:55** alla **porta di servizio** con il badge intestato alla **Dr.ssa Laura Fabbri** presenta anomalie decisive:

**Verifica della posizione della Dr.ssa Fabbri**:
- Biglietto aereo Ryanair FR 4512: Bologna (BLQ) → Roma Fiumicino (FCO), **7 febbraio 2025, ore 07:15** (partenza)
- Biglietto aereo Ryanair FR 4513: Roma Fiumicino (FCO) → Bologna (BLQ), **9 febbraio 2025, ore 19:40** (arrivo)
- La Dr.ssa Fabbri era a Roma per l'intero weekend dell'8-9 febbraio, come confermato dai registri di volo e dalla sua dichiarazione.

**Dichiarazione della Dr.ssa Fabbri** (verbale del 14/02/2025):

> *"Ho prestato il mio badge alla Dr.ssa Elena Valdi verso la fine di gennaio, credo il 27 o il 28. Mi ha detto che ne aveva bisogno per accedere al laboratorio di ricerca nel weekend, perché il suo badge non aveva l'abilitazione per gli ingressi fuori orario. Mi è sembrata una richiesta normale — succede spesso tra colleghi. Non mi è venuto in mente di segnalarlo all'ufficio tecnico. Non avevo idea di cosa sarebbe successo."*

**Conclusione**: Il badge F-0134 è stato utilizzato dalla Dr.ssa Elena Valdi per accedere a Palazzo Scarani alle 22:55 dell'8 febbraio 2025, attraverso la porta di servizio laterale, priva di telecamera di sorveglianza. L'assenza di registrazione in uscita è coerente con la configurazione del sistema: la porta di servizio è dotata di maniglione antipanico per l'uscita, senza lettore badge.

### 4.4 Nota sull'assenza di uscita del badge Marini

Il badge del Prof. Marini (F-0089) registra l'ultimo ingresso alle 14:30 e nessuna uscita. Questo è coerente con il fatto che il Prof. Marini non ha mai lasciato l'edificio dopo il suo ingresso — è deceduto nello Studio 204 durante la notte.

---

## 5. VIDEOSORVEGLIANZA — PALAZZO SCARANI (DIG-004)

### 5.1 Telecamera ingresso principale
La telecamera dell'ingresso principale (modello Hikvision DS-2CD2143G2-IU, risoluzione 4MP, visione notturna IR) copre l'atrio e la porta d'ingresso su Via Zamboni 38.

**Registrazioni rilevanti del 8 febbraio**:
- 14:30 — Prof. Marini entra dall'ingresso principale. Visibile chiaramente. Porta una borsa in pelle marrone.
- 19:02 — Prof. Bruni entra dall'ingresso principale. Visibile chiaramente. Porta una valigetta nera.
- 19:48 — Prof. Bruni esce dall'ingresso principale. Passo accelerato. La valigetta appare più gonfia rispetto all'ingresso.

**Nota**: Nessun altro ingresso o uscita dopo le 19:48 dall'ingresso principale fino alla mattina del 9 febbraio (arrivo del custode Mancini alle 08:12).

### 5.2 Porta di servizio
**La porta di servizio laterale NON è coperta da telecamera di videosorveglianza.** Questa lacuna nel sistema di sicurezza è stata segnalata dall'Ufficio Tecnico dell'Ateneo nel rapporto annuale 2023, ma l'installazione di una telecamera non è stata mai autorizzata per ragioni di budget.

---

## 6. HOTEL PRINCIPE DI SAVOIA — MILANO (DIG-006, DIG-007)

### 6.1 Log chiave magnetica — Camera 412 (Dr.ssa Elena Valdi)

| Data | Ora | Evento | Note |
|------|-----|--------|------|
| 07/02/2025 | 15:22 | Check-in / Primo accesso | — |
| 07/02/2025 | 19:08 | Accesso | — |
| 07/02/2025 | 23:45 | Accesso | — |
| 08/02/2025 | 08:15 | Accesso | Rientro dopo colazione |
| 08/02/2025 | 13:10 | Accesso | Rientro dopo sessione mattutina convegno |
| 08/02/2025 | 14:30 | Accesso | — |
| 08/02/2025 | **20:45** | **Accesso** | **Ultimo accesso prima del gap** |
| 08/02/2025 | **01:48** | **Accesso** | **Primo accesso dopo il gap — GAP DI 5 ORE E 3 MINUTI** |
| 09/02/2025 | 08:30 | Accesso | — |
| 09/02/2025 | 11:00 | Check-out | — |

**NOTA CRITICA**: Il gap tra le 20:45 e le 01:48 del 9 febbraio è l'elemento più significativo. Durante queste cinque ore e tre minuti, la chiave magnetica della camera 412 non è stata utilizzata. Questo intervallo è perfettamente compatibile con il viaggio Milano → Bologna → Milano ricostruito sulla base dei dati Telepass (v. sezione 7).

### 6.2 Videosorveglianza hotel

Le telecamere dell'Hotel Principe di Savoia coprono l'ingresso principale, la hall, gli ascensori e un'uscita laterale (ingresso di servizio/personale su Via Palestro).

**Registrazioni rilevanti**:

| Ora | Telecamera | Descrizione |
|-----|------------|-------------|
| **21:08** | Uscita laterale (CAM-07) | Una donna di corporatura snella, altezza stimata 165-170 cm, capelli scuri raccolti, cappotto scuro lungo, esce dall'uscita laterale. La qualità dell'immagine è **bassa** (illuminazione notturna, angolo laterale, risoluzione 720p). L'abbigliamento è compatibile con quello indossato dalla Dr.ssa Valdi durante la sessione pomeridiana del convegno (verificato tramite foto pubblicata sui social dal convegno). Il volto non è chiaramente riconoscibile. |
| **01:45** | Uscita laterale (CAM-07) | La stessa figura (compatibile per corporatura e abbigliamento) rientra dalla medesima uscita laterale. Porta in mano un oggetto — possibilmente una borsa o un marsupio. Qualità immagine: bassa. |

**Nota tecnica**: Le immagini sono state sottoposte ad enhancement digitale (software Amped FIVE) ma la qualità originale non consente un'identificazione biometrica positiva. L'identificazione si basa sulla compatibilità di corporatura, abbigliamento e contesto temporale.

---

## 7. DATI TELEPASS — FIAT 500 (DIG-008)

### 7.1 Dati del veicolo
- **Intestatario Telepass**: Dr.ssa Elena Valdi
- **Contratto**: TPE-XXXXXXX
- **Veicolo associato**: Fiat 500, anno 2021, colore grigio, **targa FE 823 NP**

### 7.2 Transiti autostradali — 8/9 febbraio 2025

| Data | Ora | Casello | Autostrada | Direzione | Corsia |
|------|-----|---------|------------|-----------|--------|
| **08/02/2025** | **21:18** | **Melegnano** | **A1** | **Sud (Bologna)** | Telepass |
| **09/02/2025** | **01:05** | **Modena Nord** | **A1** | **Nord (Milano)** | Telepass |

### 7.3 Ricostruzione del percorso

Sulla base dei dati Telepass e delle distanze autostradali:

- **Milano (Hotel) → Melegnano**: ~20 km, tempo stimato 15-20 minuti. Compatibile con uscita dall'hotel alle 21:08 e passaggio a Melegnano alle 21:18 (10 minuti — percorso urbano breve fino all'imbocco A1).
- **Melegnano → Bologna (uscita Borgo Panigale/tangenziale)**: ~195 km, tempo stimato 1 ora e 30-40 minuti. Arrivo stimato a Bologna: **22:50 circa**.
- **Bologna → Modena Nord**: ~115 km (tangenziale Bologna + A1 Nord), tempo stimato 55-65 minuti. Compatibile con partenza da Bologna intorno alle 00:00-00:10 e passaggio a Modena Nord alle 01:05.
- **Modena Nord → Milano (Hotel)**: ~165 km, tempo stimato 40-50 minuti (traffico notturno minimo). Arrivo stimato a Milano: **01:45-01:55**. Compatibile con il rientro in hotel alle 01:48 (chiave magnetica).

**Conclusione**: I dati Telepass documentano un viaggio di andata e ritorno Milano-Bologna nella notte dell'8-9 febbraio, con tempistiche perfettamente compatibili con l'orario di accesso al Palazzo Scarani (badge Fabbri, 22:55) e con il rientro in hotel (chiave magnetica, 01:48).

---

## 8. ANALISI DEL MACBOOK AIR DELLA DR.SSA VALDI (DIG-005)

### 8.1 Stato del dispositivo
Il MacBook Air è stato sequestrato il 14 febbraio 2025 presso l'Hotel Principe di Savoia (camera 412) in seguito a decreto di perquisizione e sequestro. Il dispositivo era spento e riposto nella borsa della Valdi.

### 8.2 Cronologia browser — Safari (dati recuperati)

**NOTA**: La cronologia del browser Safari è stata **cancellata manualmente** il 9 febbraio 2025 alle ore **08:47** (timestamp del file di log di sistema). La cancellazione è stata effettuata tramite il menu Safari → "Cancella cronologia" → "Tutta la cronologia".

Tuttavia, mediante analisi forense del database SQLite di Safari (`History.db`), dei file di cache e dei record di sistema (`unified log`), è stato possibile recuperare parzialmente la cronologia eliminata:

| Data | Ora | URL | Descrizione |
|------|-----|-----|-------------|
| 07/02/2025 | 22:15 | maps.google.com | Ricerca: **"Milan to Bologna fastest route"** — Risultato: A1 via Melegnano, 2h 10min |
| 07/02/2025 | 22:18 | maps.google.com | Ricerca: "parcheggio Via Belle Arti Bologna" |
| 07/02/2025 | 22:25 | maps.google.com | Visualizzazione Street View: Via delle Moline, Bologna (zona porta di servizio Palazzo Scarani) |
| 08/02/2025 | 13:45 | unibo.it | Accesso area riservata — orari apertura Palazzo Scarani |

**NOTA CRITICA**: La ricerca del percorso Milano-Bologna effettuata la sera del 7 febbraio — il giorno prima dell'omicidio — dimostra la premeditazione. La Dr.ssa Valdi ha pianificato il viaggio con almeno 24 ore di anticipo. La ricerca della zona della porta di servizio tramite Street View conferma la conoscenza pregressa del punto di accesso non sorvegliato.

### 8.3 Email rilevante

**Email inviata il 09/02/2025, ore 02:15**
- **Da**: elena.valdi@unibo.it
- **A**: colombo.maria@unibo.it
- **Oggetto**: Re: Cena
- **Corpo**:

> Cara Maria,
>
> scusa per la cena di stasera. Emicrania terribile, sono dovuta salire in camera. Ora sto un po' meglio, ma domattina sarà dura. Ci vediamo alla sessione delle 9?
>
> Un abbraccio,
> Elena

**Analisi tecnica dell'email**:
- **IP di invio**: 85.18.XXX.XXX — identificato come IP del gateway WiFi dell'Hotel Principe di Savoia, Milano.
- **Timestamp SMTP**: 09/02/2025, 02:15:33 CET
- Questa email è stata inviata **30 minuti dopo il rientro in hotel** (chiave magnetica: 01:48). Il tono è calcolato: l'alibi dell'emicrania viene ribadito per iscritto, creando una traccia documentale della giustificazione per l'assenza dalla cena.

### 8.4 Cancellazione della cronologia

La cancellazione della cronologia del browser effettuata la mattina del 9 febbraio alle 08:47 è un elemento indiziario significativo. La Valdi ha eliminato la cronologia prima di lasciare l'hotel (check-out alle 11:00), presumibilmente per rimuovere le prove della pianificazione del viaggio. La cancellazione, per quanto eseguita correttamente a livello di interfaccia utente, non ha eliminato i record a livello di file system, consentendo il recupero forense sopra descritto.

---

## 9. RIEPILOGO DELLE EVIDENZE DIGITALI E CORRELAZIONI

### 9.1 Quadro indiziario digitale a carico della Dr.ssa Elena Valdi

| # | Evidenza | Fonte | Rilevanza |
|---|----------|-------|-----------|
| 1 | Messaggio WhatsApp "Passo più tardi, magari ti porto un caffè" (20:10) | iPhone Marini (DIG-002) | Prova della premeditazione e del metodo (caffè come veicolo) |
| 2 | Badge Fabbri alle 22:55, porta di servizio | Kaba SafeRoute (DIG-003) | Prova dell'accesso all'edificio con badge prestato |
| 3 | Dichiarazione Fabbri: badge prestato a Valdi | Verbale 14/02/2025 | Identificazione dell'utilizzatrice del badge |
| 4 | Gap chiave magnetica hotel: 20:45 — 01:48 | Log hotel (DIG-006) | Prova dell'assenza dall'hotel per 5+ ore |
| 5 | Telecamera laterale hotel: uscita 21:08, rientro 01:45 | Video hotel (DIG-007) | Conferma visiva dell'uscita e rientro |
| 6 | Telepass Melegnano 21:18 (dir. Bologna) | Dati Telepass (DIG-008) | Prova del viaggio verso Bologna |
| 7 | Telepass Modena Nord 01:05 (dir. Milano) | Dati Telepass (DIG-008) | Prova del viaggio di ritorno verso Milano |
| 8 | Ricerca Google Maps "Milan to Bologna fastest" (07/02, 22:15) | MacBook Valdi (DIG-005) | Prova della premeditazione (giorno precedente) |
| 9 | Ricerca Street View Via delle Moline (07/02, 22:25) | MacBook Valdi (DIG-005) | Conoscenza della porta di servizio non sorvegliata |
| 10 | Email alibi alle 02:15 dall'IP hotel | MacBook Valdi (DIG-005) | Costruzione consapevole dell'alibi |
| 11 | Cancellazione cronologia browser (09/02, 08:47) | MacBook Valdi (DIG-005) | Tentativo di occultamento delle prove |
| 12 | Cessazione attività sul MacBook Marini alle 22:48 | MacBook Marini (DIG-001) | Coerente con l'arrivo della Valdi poco dopo le 22:55 |

### 9.2 Quadro indiziario digitale a carico del Prof. Carlo Bruni

| # | Evidenza | Fonte | Rilevanza |
|---|----------|-------|-----------|
| 1 | Badge alle 19:02 (ingresso) e 19:48 (uscita) | Kaba SafeRoute (DIG-003) | Presenza nell'edificio durante l'orario critico |
| 2 | Cancellazione file "Ferrara_paper_confronto_v2.pdf" e cartella "Bruni_dossier" (19:15-19:45) | MacBook Marini (DIG-001) | Furto/distruzione di dati durante la sua presenza |
| 3 | Email Marini→Bruni 15/12/2024 ("paper di Ferrara") | MacBook Marini (DIG-001) | Prova del ricatto per plagio |
| 4 | Telecamera ingresso: valigetta più gonfia in uscita | Video Palazzo Scarani (DIG-004) | Possibile asportazione di materiale cartaceo |

---

## 10. CONCLUSIONI

L'analisi forense digitale fornisce un quadro indiziario convergente e coerente che colloca la Dr.ssa Elena Valdi all'interno di Palazzo Scarani nella notte dell'8 febbraio 2025, documenta il viaggio Milano-Bologna-Milano, e dimostra la premeditazione dell'azione attraverso le ricerche effettuate il giorno precedente. Il messaggio WhatsApp delle 20:10 ("magari ti porto un caffè") costituisce un elemento particolarmente significativo, in quanto anticipa con precisione il metodo di somministrazione della sostanza tossica.

Parallelamente, l'analisi conferma la presenza non autorizzata del Prof. Carlo Bruni nell'edificio in orario antecedente e la sua attività di cancellazione di file dal computer della vittima — condotta penalmente rilevante (furto di dati / accesso abusivo a sistema informatico, art. 615-ter c.p.) ma non collegata all'omicidio.

Si resta a disposizione per eventuali chiarimenti e integrazioni.

---

**Il Consulente Tecnico d'Ufficio**

Dott. Ing. Alessandro Ferrara
*Albo CTU Tribunale di Bologna, n. 4872*
*Firma digitale apposta*

---

*Procura della Repubblica presso il Tribunale di Bologna*
*Proc. N. 2025/1847 — Fascicolo "Cattedra Vuota"*
*Documento classificato: RISERVATO — Atti d'indagine*
*Allegati: 8 immagini forensi (copia bit-a-bit su supporto crittografato), 3 file video, log estratti*
