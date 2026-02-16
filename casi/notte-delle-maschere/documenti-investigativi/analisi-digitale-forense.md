# QUESTURA DI IMPERIA — SEZIONE INDAGINI TELEMATICHE
## RELAZIONE DI ANALISI FORENSE DIGITALE

---

**PROCEDIMENTO**: Indagini relative al decesso di Edoardo Marinetti
**PROTOCOLLO**: IM-2026-0871/DIG-1
**DATA RELAZIONE**: 12 febbraio 2026
**ANALISTA**: Sovrintendente Laura Ferretti, Polizia Postale e delle Comunicazioni — Sezione di Genova
**RICHIESTA**: Ispettore Capo Matteo Ferraro, Squadra Mobile di Imperia
**AUTORIZZAZIONE**: Decreto del PM Dott.ssa Angela Ferro, Procura della Repubblica di Imperia, n. 287/2026 del 9 febbraio 2026

---

### 1. PREMESSA

La presente relazione illustra i risultati dell'analisi forense condotta su dispositivi elettronici e sistemi informatici sequestrati e acquisiti nell'ambito delle indagini sulla morte del sig. Edoardo Marinetti, avvenuta nella notte tra il 7 e l'8 febbraio 2026 presso il Grand Hotel Riviera Palace di Sanremo.

L'analisi è stata condotta presso il Laboratorio di Informatica Forense della Polizia Postale di Genova, secondo le procedure previste dalla L. 48/2008 e dalle best practices internazionali (ISO/IEC 27037:2012), garantendo la catena di custodia e l'integrità dei dati.

---

### 2. DISPOSITIVI E SISTEMI ANALIZZATI

| Reperto | Descrizione | Provenienza | Hash SHA-256 immagine forense |
|---|---|---|---|
| **REP-DIG-01** | Apple iPhone 15 Pro, 256GB, colore Titanio Nero | Effetti personali della vittima (Marinetti) | `a3f7c9...d412e8` |
| **REP-DIG-02** | Apple MacBook Pro 14", M3 Pro, 512GB | Camera 305, Grand Hotel (stanza di Damiani) | `b8e2a1...f903c7` |
| **REP-DIG-03** | Apple iPhone 14, 128GB, colore Blu | Effetti personali del dott. Roberto Mancini | `c5d4f6...a721b3` |
| **REP-DOC-01** | Registri informatizzati farmacia ospedaliera | Ospedale San Martino, Genova — acquisizione da remoto | `d9f3e2...b845a9` |

---

### 3. ANALISI DEL REPERTO REP-DIG-01 — iPhone 15 Pro di Edoardo Marinetti

#### 3.1 Stato del dispositivo

Il dispositivo è stato rinvenuto nella tasca interna della giacca della vittima. Risultava bloccato con codice a 6 cifre e Face ID. Lo sblocco è stato effettuato mediante strumentazione Cellebrite UFED Premium v7.68, con autorizzazione del PM.

#### 3.2 Applicazione di messaggistica — WhatsApp

L'analisi dell'applicazione WhatsApp (versione 24.25.81) ha evidenziato 847 conversazioni attive. Si riportano di seguito le conversazioni di maggiore rilevanza investigativa:

**Conversazione con "Avv. Damiani" (ultimo messaggio: 7 febbraio, ore 18:42)**

| Data/Ora | Mittente | Testo |
|---|---|---|
| 05/02, 10:15 | Damiani | "Tutto pronto per sabato. Confermi che il discorso è quello concordato?" |
| 05/02, 10:22 | Marinetti | "Confermo. Ma potrei aggiungere qualcosa di mio. Ho delle sorprese." |
| 05/02, 10:23 | Damiani | "Edoardo, attieniti al copione. Non è il momento di improvvisare." |
| 05/02, 10:30 | Marinetti | "Tu pensa alla parte legale. Io penso al resto. 😉" |
| 07/02, 18:42 | Damiani | "Arrivo in hotel tra 20 min. Dobbiamo parlare." |

**Conversazione con "Ferro G." (ultimo messaggio: 6 febbraio, ore 22:10)**

| Data/Ora | Mittente | Testo |
|---|---|---|
| 06/02, 21:55 | Marinetti | "Gianluca, ci vediamo domani sera. Spero che tu abbia riflettuto sulla mia proposta." |
| 06/02, 22:08 | Ferro | "Non ho niente su cui riflettere. Lasciami in pace." |
| 06/02, 22:10 | Marinetti | "Peccato. Pensavo che un uomo con i tuoi... trascorsi sportivi... volesse proteggere la sua reputazione. A domani." |

**Conversazione con "Mancini R." (ultimo messaggio: 7 febbraio, ore 15:05)**

| Data/Ora | Mittente | Testo |
|---|---|---|
| 03/02, 09:30 | Marinetti | "Roberto, ho bisogno di un favore medico. Urgente. Ci vediamo?" |
| 03/02, 09:45 | Mancini | "Di che si tratta?" |
| 03/02, 09:47 | Marinetti | "Non al telefono. Pranzo mercoledì?" |
| 07/02, 15:05 | Mancini | "Edoardo, dopo stasera non mi cercare più. Sono serio." |

#### 3.3 Applicazione "Private Notes" — Note criptate

Sul dispositivo è stata rinvenuta l'applicazione "Private Notes" (versione 3.2.1), protetta da password separata (decrittata mediante attacco di forza bruta: durata 14 ore). L'applicazione conteneva 23 note, organizzate in una cartella denominata **"Dossier"**. Ogni nota corrisponde a un nominativo. Si riportano le intestazioni e gli estratti rilevanti:

| Nota | Intestazione | Contenuto sintetico |
|---|---|---|
| 01 | "Damiani — il bravo avvocato" | Riferimenti a "conti offshore Damiani, Liechtenstein," "appropriazione fondi clienti," "Federica sa?" |
| 02 | "Mancini — il dottore perfetto" | "Diagnosi errata 2019 — paziente deceduto," "copertura ospedaliera," "Elena in trappola" |
| 03 | "Teresa — la moglie fedele" | "Dipendenza Xanax + alcol," "incidente Aurelia maggio 2024," "copertura polizia locale" |
| 04 | "Cabrini — l'imprenditrice" | "Fatture false 2020-2024," "operai in nero cantiere Bordighera," "evasione stimata 1.2M" |
| 05 | "Ferro — il campione" | "Match-fixing 2019-2023," "8 partite truccate," "sindacato Singapore," "debiti 800K" |
| 06 | "Marchetti — la professoressa" | "Relazione con cognato Matteo M.," "Andrea sa? Andrea con dottoranda," "castello di bugie" |
| 07 | "Don Marcello — il santo" | "Figlio Leonardo 1997," "Maria Ferrara Ventimiglia," "fondi parrocchiali 2000€/mese da 28 anni" |
| 08 | "Sereni — la paladina" | "Valentina Blanc 2001-2011 Milano," "escort di lusso," "cliente 2006-2009," "centro = silenzio" |

**Nota investigativa**: Il "Dossier" presente nell'applicazione Private Notes costituisce la prova documentale dell'attività sistematica di raccolta informazioni e ricatto condotta dalla vittima ai danni di tutti i soggetti presenti al gala. Ogni nota contiene informazioni dettagliate e verificabili che conferiscono alla vittima un potere coercitivo straordinario su ciascun sospettato.

#### 3.4 Foto e multimedia

Nell'album fotografico sono state rinvenute 14 immagini di rilevanza investigativa, tra cui:
- Fotografie di documenti bancari intestati a terzi (Cabrini, Damiani)
- Screenshot di conversazioni WhatsApp di terzi (presumibilmente ottenuti tramite accesso fisico ai dispositivi)
- Una foto di Leonardo Ferrara in uniforme da cameriere al Grand Hotel, scattata il 15 gennaio 2026

#### 3.5 Ultimo utilizzo del dispositivo

L'ultimo sblocco del dispositivo risulta alle ore 23:38 del 7 febbraio 2026. Non sono state registrate attività successive.

---

### 4. ANALISI DEL REPERTO REP-DIG-02 — MacBook Pro di Avv. Stefano Damiani

#### 4.1 Stato del dispositivo

Il computer portatile è stato sequestrato nella camera 305 del Grand Hotel Riviera Palace, in uso all'Avv. Stefano Damiani. Il dispositivo era in modalità sleep e protetto da password utente (decrittata mediante strumentazione forense).

#### 4.2 Cronologia del browser — Safari

L'analisi della cronologia del browser Safari ha evidenziato l'utilizzo sistematico di una VPN commerciale (NordVPN, account intestato a "S. Damiani"). Tuttavia, un **DNS leak** (fuga di richieste DNS non criptate) ha permesso di ricostruire parte della navigazione effettivamente svolta:

**Richieste DNS non criptate recuperate (periodo 15 gennaio — 7 febbraio 2026):**

| Data | Richiesta DNS | Interpretazione |
|---|---|---|
| 17/01/2026 | `resolve: 3g2upl4pq6kufc4m.onion` | Tentativo di accesso a marketplace Tor tramite browser standard (errore di configurazione) |
| 19/01/2026 | `resolve: duckduckgo.com/q=syringe+pen+mechanism+veterinary+pressurized` | Ricerca di meccanismo a siringa tipo penna, a pressione, per uso veterinario |
| 20/01/2026 | `resolve: duckduckgo.com/q=succinylcholine+detection+post+mortem+time` | Ricerca su rilevabilità post-mortem della succinilcolina |
| 20/01/2026 | `resolve: duckduckgo.com/q=succinylcholine+mechanism+death+cardiac+arrest` | Ricerca su meccanismo di morte da succinilcolina |
| 22/01/2026 | `resolve: duckduckgo.com/q=how+to+use+bitcoin+anonymously` | Ricerca su utilizzo anonimo di Bitcoin |
| 25/01/2026 | `resolve: wasabiwallet.io` | Accesso a servizio di wallet Bitcoin con mixing integrato |
| 27/01/2026 | `resolve: alphabaymarket.onion` | Tentativo di accesso a marketplace darknet |
| 02/02/2026 | `resolve: amazon.it/tracking` | Controllo spedizione Amazon |
| 05/02/2026 | `resolve: duckduckgo.com/q=succinylcholine+injection+site+neck+invisible` | Ricerca su sito di iniezione non rilevabile per succinilcolina |

**Nota tecnica**: Il DNS leak è stato causato dall'impostazione errata del client VPN, che non reindirizzava le richieste DNS attraverso il tunnel crittografato. Le richieste DNS sono state catturate dal resolver DNS del provider Internet dell'hotel (Fastweb Business) e acquisite con decreto del PM.

#### 4.3 Transazioni Bitcoin

L'analisi del file di configurazione del wallet Wasabi (rinvenuto nella cartella `~/Library/Application Support/WasabiWallet/`) ha permesso di ricostruire la seguente attività:

| Data | Tipo | Importo | Destinazione | Note |
|---|---|---|---|---|
| 25/01/2026 | Acquisto BTC | 0.015 BTC (≈ €1.420) | Wallet locale | Acquisto tramite exchange Bisq (P2P, non KYC) |
| 27/01/2026 | Invio BTC | 0.015 BTC | Indirizzo esterno `bc1q7k9...f3m2` | Pagamento a venditore marketplace |

L'indirizzo destinatario `bc1q7k9...f3m2` è associato, secondo le analisi di blockchain forensics (collaborazione con Chainalysis), a un venditore attivo su marketplace darknet specializzato nella vendita di forniture mediche e veterinarie senza prescrizione.

#### 4.4 Tracking spedizione Amazon

Nella cronologia è stata rinvenuta una consultazione ripetuta (2-6 febbraio) del tracking di una spedizione Amazon con consegna presso un Amazon Locker situato in Via Aurelia 142, Albenga (SV):

- **Ordine**: Componenti meccanici di precisione (molle, cilindri in acciaio inox, O-ring) — acquistati singolarmente, apparentemente non correlati
- **Consegna**: 3 febbraio 2026, Locker "Albenga Centro," ritirato alle 18:22
- **Account Amazon**: Intestato a "Marco Verdi" — nome fittizio, email `m.verdi847@protonmail.com`

**Nota investigativa**: La combinazione dei componenti meccanici (Amazon Locker) con il meccanismo a siringa pressurizzata (marketplace darknet) è compatibile con l'assemblaggio di un dispositivo di iniezione dissimulato — tipo "penna-siringa" — come quello ipotizzato dal medico legale quale arma del delitto.

#### 4.5 Email e comunicazioni

L'account email principale (`s.damiani@studiolegale-damiani.it`) conteneva comunicazioni ordinarie di natura professionale. Non sono state rinvenute email di rilevanza investigativa diretta.

È stato tuttavia individuato un secondo account email, configurato tramite l'applicazione Thunderbird in modalità portatile (cartella nascosta `~/.thunderbird-portable/`):

- **Account**: `giustizia.vera@protonmail.com`
- **Contenuto**: 4 email inviate nel periodo 15 gennaio — 5 febbraio 2026, tutte indirizzate a `m.verdi847@protonmail.com` (plausibilmente un secondo account dello stesso Damiani) contenenti appunti tecnici su "il progetto," riferimenti a tempistiche e "il momento giusto"

---

### 5. ANALISI DEL REPERTO REP-DIG-03 — iPhone 14 di Filippo Mancini

#### 5.1 Stato del dispositivo

Il dispositivo è stato consegnato volontariamente dal dott. Filippo Mancini in data 8 febbraio 2026. Lo sblocco è stato effettuato con il consenso del proprietario (codice fornito).

#### 5.2 Conversazioni WhatsApp rilevanti

**Conversazione con "Avv. Damiani" (periodo 29 gennaio — 1 febbraio 2026)**

*Per la trascrizione integrale si rimanda all'Allegato D (Chat WhatsApp Damiani-Mancini). Di seguito si riportano i messaggi di maggiore rilevanza investigativa.*

| Data/Ora | Mittente | Testo |
|---|---|---|
| 29/01, 13:55 | Damiani | "Filippo, ho bisogno del tuo aiuto. È urgente. Libeccio sta molto male." |
| 29/01, 14:05 | Damiani | "Mi serve la succinilcolina. Il veterinario mi aveva detto che è la soluzione più rapida e umana per un cavallo nelle sue condizioni. [...] 2 fiale da 100mg ciascuna, per sicurezza." |
| 29/01, 14:06 | Mancini | "Stefano... sai che non è semplice. La succinilcolina è un farmaco ospedaliero, sottoposto a registro." |
| 29/01, 14:08 | Damiani | "Lo so. Ma tu sei primario di anestesiologia. Se qualcuno può aiutarmi sei tu. Non posso lasciarlo soffrire così, Filippo." |
| 30/01, 18:22 | Mancini | "Fatto. Ho le fiale. 2x100mg succinilcolina cloruro, lotto n. SC-2025-4471, scadenza 09/2027. Ho registrato il prelievo come 'utilizzo in sala operatoria — intervento programmato'." |
| 30/01, 18:23 | Damiani | "Sei un angelo, Filippo. Non lo dimenticherò." |
| 01/02, 15:22 | Damiani | "Grazie di tutto, Filippo. Un peso in meno sul cuore." |

**Nota investigativa**: La conversazione WhatsApp presenta Damiani che chiede a Mancini 2 fiale di succinilcolina con la motivazione della soppressione umanitaria del cavallo "Libeccio". Il messaggio di Mancini delle 18:22 del 30 gennaio ("Fatto. Ho le fiale.") coincide temporalmente con l'accesso anomalo del badge del dott. Mancini alla farmacia ospedaliera (cfr. Sezione 6). Si noti che il cavallo "Libeccio" risulta deceduto il 15/03/2024 (cfr. certificato veterinario Dott. Ferretti) — quasi due anni prima della richiesta.

#### 5.3 Registro accessi badge — Ospedale San Martino

Dal sistema informatico dell'Ospedale San Martino di Genova è stato acquisito il log degli accessi del badge n. SM-4721, intestato al dott. Filippo Mancini, alla farmacia ospedaliera:

| Data | Ora accesso | Ora uscita | Turno di servizio |
|---|---|---|---|
| 30/01/2026 | 22:15 | 22:28 | Turno terminato alle 18:00 |

L'accesso del 30 gennaio alle ore 22:15, avvenuto **oltre quattro ore dopo la fine del turno di servizio** del dott. Mancini, non risulta giustificato da alcuna emergenza medica o richiesta formale registrata nel sistema ospedaliero.

---

### 6. ANALISI DEL REPERTO REP-DOC-01 — Registri Farmacia Ospedaliera San Martino

#### 6.1 Inventario succinilcolina

L'analisi dei registri informatizzati della farmacia ospedaliera dell'Ospedale San Martino di Genova ha evidenziato la seguente discrepanza nell'inventario del farmaco **Succinilcolina Cloruro 100mg/5ml — fiale per uso iniettabile**:

| Dato | Valore |
|---|---|
| **Giacenza registrata al 29/01/2026** | 48 fiale |
| **Utilizzi registrati 30/01 — 08/02/2026** | 6 fiale (tutte per interventi chirurgici documentati) |
| **Giacenza attesa all'08/02/2026** | 42 fiale |
| **Giacenza effettiva all'08/02/2026** | 40 fiale |
| **Discrepanza** | **−2 fiale (200 mg totali)** |

#### 6.2 Analisi degli accessi alla farmacia nel periodo critico

| Data | Ora | Badge | Nominativo | Giustificazione |
|---|---|---|---|---|
| 30/01, 08:12 | 08:12-08:25 | SM-3105 | Farm. Dott.ssa Giulia Neri | Routine (apertura mattutina) |
| 30/01, 10:40 | 10:40-10:52 | SM-4102 | Inf. Paolo Rossi | Prelievo farmaci — registrato |
| 30/01, 14:15 | 14:15-14:30 | SM-3105 | Farm. Dott.ssa Giulia Neri | Inventario settimanale |
| **30/01, 22:15** | **22:15-22:28** | **SM-4721** | **Dott. Roberto Mancini** | **NESSUNA — fuori orario di servizio** |
| 31/01, 08:10 | 08:10-08:22 | SM-3105 | Farm. Dott.ssa Giulia Neri | Routine (apertura mattutina) |

#### 6.3 Sistema di videosorveglianza farmacia

La farmacia ospedaliera è dotata di un sistema di videosorveglianza interno. Tuttavia, il sistema risultava **fuori servizio** nella fascia oraria 21:30-23:00 del 30 gennaio 2026, a causa di un "aggiornamento firmware programmato" inserito nel sistema di gestione dal terminale della sala server. L'inserimento dell'aggiornamento risulta effettuato il 28 gennaio 2026 alle 16:45 da un terminale non autenticato con credenziali specifiche (accesso generico "admin_manutenzione").

**Nota investigativa**: La concomitanza tra il malfunzionamento programmato delle telecamere della farmacia e l'accesso non giustificato del dott. Mancini suggerisce una pianificazione premeditata del prelievo del farmaco. È necessario verificare chi avesse accesso alle credenziali "admin_manutenzione" e se il dott. Mancini o l'Avv. Damiani avessero competenze informatiche sufficienti per tale operazione.

---

### 7. RICOSTRUZIONE DELLA CRONOLOGIA DEGLI EVENTI (ELEMENTI DIGITALI)

Sulla base dell'analisi complessiva dei reperti digitali, si ricostruisce la seguente cronologia:

| Data | Evento | Fonte |
|---|---|---|
| 15-20/01/2026 | Damiani effettua ricerche su succinilcolina, meccanismi a siringa, rilevabilità post-mortem | REP-DIG-02 (DNS leak) |
| 22/01/2026 | Damiani ricerca modalità di utilizzo anonimo di Bitcoin | REP-DIG-02 (DNS leak) |
| 25/01/2026 | Damiani acquista 0.015 BTC tramite exchange P2P | REP-DIG-02 (wallet Wasabi) |
| 27/01/2026 | Damiani invia 0.015 BTC a venditore darknet (meccanismo penna-siringa) | REP-DIG-02 (wallet Wasabi) |
| 28/01/2026 | Disattivazione programmata telecamere farmacia ospedaliera per il 30/01 | REP-DOC-01 |
| 29/01/2026 | Damiani contatta Mancini via WhatsApp chiedendo "il cavallo" (succinilcolina) | REP-DIG-03 |
| 30/01/2026 | Mancini accede alla farmacia ospedaliera alle 22:15 (fuori turno) | REP-DOC-01, REP-DIG-03 |
| 30/01/2026 | Damiani ringrazia Mancini ("Hai fatto la cosa giusta") | REP-DIG-03 |
| 03/02/2026 | Damiani ritira componenti meccanici da Amazon Locker ad Albenga | REP-DIG-02 |
| 05/02/2026 | Damiani ricerca "sito di iniezione non rilevabile — collo" | REP-DIG-02 (DNS leak) |
| 07/02/2026 | Ultima attività sul telefono di Marinetti alle 23:38 | REP-DIG-01 |

**Il collegamento tra l'acquisto online del meccanismo (27 gennaio) e la richiesta del farmaco (29 gennaio) suggerisce una pianificazione metodica dell'omicidio in un arco temporale di circa 12 giorni.**

---

### 8. CONCLUSIONI

L'analisi forense digitale ha prodotto i seguenti elementi di rilevanza investigativa:

1. **L'Avv. Stefano Damiani** ha condotto ricerche approfondite sulla succinilcolina (meccanismo d'azione, rilevabilità post-mortem, sito di iniezione), su meccanismi di iniezione dissimulati come penna-siringa, e ha effettuato un acquisto tramite criptovaluta su marketplace darknet, il tutto nel periodo 15 gennaio — 5 febbraio 2026.

2. **Il dott. Roberto Mancini**, sollecitato da Damiani con messaggi WhatsApp riferiti a "il cavallo" (identificato come succinilcolina), ha avuto accesso alla farmacia ospedaliera in orario non giustificato (22:15 del 30/01), in concomitanza con la disattivazione programmata delle telecamere di sorveglianza della farmacia stessa.

3. **La farmacia ospedaliera** presenta una discrepanza di inventario di esattamente 2 fiale di succinilcolina (200 mg totali), compatibile quantitativamente con una dose letale.

4. **Il telefono della vittima** conteneva un dossier completo di informazioni compromettenti su tutti i sospettati, confermando il profilo di Marinetti come ricattatore sistematico.

5. **La cronologia degli eventi digitali** delinea una pianificazione dell'omicidio su un arco di circa 12 giorni (dal 25 gennaio al 7 febbraio 2026), con una chiara ripartizione dei ruoli tra Damiani (pianificazione, acquisizione dell'arma, esecuzione) e Mancini (fornitura del farmaco).

---

**Il presente referto si compone di n. 8 sezioni e relativi allegati digitali (immagini forensi dei dispositivi).**

Il Sovrintendente analista: Laura Ferretti _______________
Polizia Postale e delle Comunicazioni — Sezione di Genova

*Relazione chiusa il 12 febbraio 2026*
*Protocollo IM-2026-0871/DIG-1*
