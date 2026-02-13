# ANALISI DIGITALE FORENSE

---

## Intestazione

| Campo | Dettaglio |
|-------|-----------|
| Protocollo | DIG-2025/TOR/0187-F1 |
| Data analisi | 23-26 gennaio 2025 |
| Analista | Isp. Dott.ssa Chiara Basso, Polizia Postale — Sezione di Torino |
| PM richiedente | Dott.ssa Silvia Marchetti, Procura della Repubblica di Torino |
| Oggetto | Analisi forense dispositivi digitali — Caso Ferraris |

---

## Dispositivo 1 — Laptop Apple MacBook Pro

| Campo | Dettaglio |
|-------|-----------|
| Modello | MacBook Pro 14" (2023) |
| Serial | C02F94VNML |
| Stato al ritrovamento | Aperto, in standby, connesso al Wi-Fi domestico |

### File "addio.txt" — La Nota di Suicidio

| Attributo | Valore |
|-----------|--------|
| Nome file | addio.txt |
| Contenuto | "Non ce la faccio più. Perdonatemi." |
| Data creazione | **18/01/2025, ore 21:52:14** |
| Ultima modifica | 18/01/2025, ore 21:52:38 |
| Durata scrittura | ~24 secondi |
| Applicazione | TextEdit |

> **Nota dell'analista:** Il file è stato creato alle **21:52**. Secondo il rapporto medico-legale, il midazolam rilevato nel sangue (concentrazione 0,42 mg/L) provoca sedazione significativa entro 20-30 minuti dall'ingestione. Si rimanda alla relazione medico-legale per la valutazione dell'effettiva capacità cognitiva della vittima a quell'orario.

### Analisi stilistica della nota

| Elemento | Osservazione |
|----------|--------------|
| Lunghezza | 6 parole — estremamente breve |
| Contenuto emotivo | Generico, nessun riferimento specifico |
| Nomi citati | **Nessuno** — non menziona la figlia Valentina né l'ex moglie Sara |
| Stile | Incongruente con lo stile di Ferraris (scrittore prolifico e dettagliato) |
| Firma | Assente |

> **Osservazione dell'analista:** Nelle lettere di suicidio autentiche, è comune trovare riferimenti a persone care, spiegazioni, disposizioni. L'assenza totale di nomi propri in un uomo con forti legami familiari è un **elemento anomalo**.

### File cancellati dal laptop

L'analisi del disco con software forense (Cellebrite UFED) ha rivelato **la cancellazione recente di una cartella intera**:

| Cartella | Contenuto stimato | Data cancellazione |
|----------|-------------------|-------------------|
| `/Users/luca/Documenti/Inchiesta_PharmaNova/` | ~45 file (documenti, PDF, registrazioni audio, immagini) | **18/01/2025, ore 21:54** |

I file sono stati cancellati tramite **svuotamento del Cestino** — operazione che richiede intenzionalità. Tuttavia, i settori del disco non sono stati sovrascritti e **alcuni frammenti sono recuperabili** (vedi sezione successiva).

### Frammenti recuperati

| # | Nome file (parziale) | Tipo | Contenuto recuperabile |
|---|---------------------|------|----------------------|
| 1 | `bozza_articolo_v3...` | .docx | Parziale (~40%) — titolo: "Il Farmaco della Morte: Le Sperimentazioni Segrete di PharmaNova" |
| 2 | `intervista_fam_Mor...` | .mp3 | Non recuperabile |
| 3 | `documenti_interni_...` | .pdf | Non recuperabile |
| 4 | `timeline_neurovasc...` | .xlsx | Parziale (~20%) — date e nomi |

---

## Dispositivo 2 — iPhone 15 Pro

| Campo | Dettaglio |
|-------|-----------|
| Modello | iPhone 15 Pro |
| IMEI | 356789012345678 |
| Stato al ritrovamento | Schermo bloccato, telefono acceso |

### Stato del dispositivo

> **Nota dell'analista:** Il telefono è stato sottoposto a un **factory reset** (ripristino alle impostazioni di fabbrica). L'operazione è stata eseguita il **18/01/2025 alle 21:58** (timestamp rilevato dal sistema di gestione Apple). Questo ha cancellato tutti i dati: contatti, messaggi, foto, app, cronologia chiamate.

| Dato | Prima del reset | Dopo il reset |
|------|-----------------|---------------|
| Contatti | ~380 | 0 |
| Messaggi | ~12.000 | 0 |
| Foto/Video | ~4.200 | 0 |
| App installate | ~67 | App di sistema |
| Email | ~3.500 | 0 |

> **Osservazione:** Un individuo che compie un gesto autolesivo non esegue un factory reset del telefono. Questa operazione richiede diversi passaggi (Impostazioni → Generali → Trasferisci o inizializza → Inizializza contenuto e impostazioni → Conferma) ed è **incompatibile con un atto impulsivo di suicidio**.

---

## Dispositivo 3 — Backup Cloud (Tresorit)

L'analisi dell'account email della vittima ha rivelato l'utilizzo di un servizio di **backup crittografato** (Tresorit, server in Svizzera). Le credenziali sono state ottenute tramite ordinanza del PM al provider.

| Campo | Dettaglio |
|-------|-----------|
| Account | luca.ferraris@tresorit.com |
| Ultimo backup | **18/01/2025, ore 17:45** (backup automatico giornaliero) |
| Spazio utilizzato | 12,4 GB |

### Contenuto del backup

Il backup contiene l'**intera cartella dell'inchiesta su PharmaNova**, sincronizzata automaticamente prima della cancellazione manuale delle 21:54:

| Cartella/File | Dimensione | Descrizione |
|---------------|-----------|-------------|
| `bozza_articolo_v3_finale.docx` | 2,1 MB | Articolo completo — 47 pagine |
| `interviste/` | 890 MB | 12 registrazioni audio (familiari vittime, ex dipendenti) |
| `documenti_interni/` | 3,2 GB | 34 PDF di documenti interni PharmaNova |
| `prove_finanziarie/` | 156 MB | Estratti conto, fatture, bonifici |
| `timeline_neurovasc7.xlsx` | 4,8 MB | Cronologia completa della sperimentazione |
| `foto_documenti/` | 1,8 GB | Foto di documenti cartacei |
| `note_investigative.txt` | 234 KB | Appunti e ipotesi di Ferraris |

> **Nota tecnica:** L'assassino ha cancellato i file dal laptop e resettato il telefono. Tuttavia, un backup automatico su piattaforma cloud ha preservato parte del materiale. Consultate il documento "Documenti inchiesta Ferraris" per il contenuto recuperato.

---

## Dispositivo 4 — Computer di lavoro del Dott. Andrea Ferro

Su ordinanza del PM (N. 2025/1287), è stato analizzato il computer dell'ufficio del Dott. Andrea Ferro presso la sede di PharmaNova S.p.A. (Corso Francia 110, Torino).

| Campo | Dettaglio |
|-------|-----------|
| Tipo | Dell Latitude 5540 |
| Intestatario | PharmaNova S.p.A. — Ufficio CEO |
| Utilizzatore | Dott. Andrea Ferro |

### Cronologia di navigazione web — Ricerche rilevanti

| Data | Ora | Ricerca / URL | Browser |
|------|-----|--------------|---------|
| 03/01/2025 | 14:22 | "ferita arma da fuoco tempia angolo sparo" | Chrome |
| 03/01/2025 | 14:35 | "suicidio arma da fuoco caratteristiche forensi" | Chrome |
| 03/01/2025 | 15:10 | "regolamentazione sperimentazioni cliniche fase III Europa" | Chrome |
| 08/01/2025 | 11:15 | "midazolam rilevamento tossicologia post mortem" | Chrome |
| 08/01/2025 | 11:42 | "midazolam emivita sedazione dose orale" | Chrome |
| 08/01/2025 | 14:30 | "farmacovigilanza segnalazione reazioni avverse AIFA normativa" | Chrome |
| 12/01/2025 | 09:50 | "residui di sparo distribuzione mano suicidio omicidio differenze" | Chrome |
| 15/01/2025 | 16:30 | "ripristino fabbrica iPhone eliminare tutti i dati" | Chrome |
| 15/01/2025 | 16:45 | "come cancellare file Mac definitivamente" | Chrome |
| 15/01/2025 | 17:10 | "data retention policy documenti aziendali GDPR" | Chrome |

> **Nota dell'analista:** Le ricerche si concentrano su tre aree tematiche: balistica forense, farmacologia (midazolam) e cancellazione di dati digitali. Sono alternate a ricerche di natura aziendale/normativa (farmacovigilanza, data retention, sperimentazioni cliniche). Le ricerche sono state effettuate su Chrome, browser non predefinito aziendale (l'azienda utilizza Edge).

| Data | Evento | Ora |
|------|--------|-----|
| 18/01/2025 | Ingresso | 08:15 |
| 18/01/2025 | **Uscita** | **19:22** |
| 18/01/2025 | Nessun rientro | — |

> **Osservazione:** Ferro dichiara di essere uscito dall'ufficio "verso le 19:45" e di essere arrivato al ristorante "verso le 20:15-20:20". Il badge registra l'uscita alle **19:22** — oltre 20 minuti prima di quanto dichiarato. L'appartamento di Ferraris è a circa 15-20 minuti di auto dalla sede di PharmaNova.

---

## Conclusioni dell'Analista

1. La nota di suicidio è stata creata alle **21:52** — la capacità cognitiva della vittima a quell'orario richiede valutazione alla luce dei risultati tossicologici.

2. I file dell'inchiesta sono stati cancellati dal laptop alle **21:54** e il telefono è stato resettato alle **21:58** — operazioni in sequenza ravvicinata.

3. Il backup cloud su Tresorit ha preservato l'intera cartella dell'inchiesta — l'autore della cancellazione non ne era a conoscenza.

4. Il computer aziendale del Dott. Andrea Ferro contiene ricerche su balistica forense, midazolam e cancellazione dati, alternate a ricerche di natura aziendale/normativa.

5. Il badge aziendale di Ferro registra l'uscita alle 19:22, con una discrepanza rispetto alla dichiarazione.

---

*Isp. Dott.ssa Chiara Basso*
*Polizia Postale — Sezione di Torino*
*Relazione depositata il 27/01/2025*
