# 📚 Tipologie Documento - Reference Completo

Guida esaustiva alle 12 tipologie di documento supportate dal sistema Detective Case Viewer, con esempi, best practices ed elementi caratteristici.

---

## 📧 Email

**Prefisso:** `email_`  
**Classe CSS:** `.doc-email`  
**Icona:** ✉️ mail  
**Categoria:** Corrispondenza Privata

### Elementi Caratteristici

- Header con metadata (Da/A/Data/Oggetto)
- Quote indentation per reply (>)
- Firma automatica footer
- Disclaimer legale
- Attachment indicators

### Template Base

```markdown
---
**Da:** mittente@example.com  
**A:** destinatario@example.com  
**Data:** 15 Febbraio 2026, 14:35  
**Oggetto:** [Inserire oggetto email]

---

[Corpo del messaggio...]

Cordiali saluti,

[Nome Mittente]  
[Titolo/Ruolo]

---

<small>
Questa email e gli allegati sono confidenziali.
</small>
```

### Best Practices

- Usa indirizzi email realistici (non inventati)
- Include timestamp precisi e realistici
- Quote message threading per conversazioni (`> testo quotato`)
- Aggiungi firma professionale
- Considera CC/BCC per email aziendali
- Usa formattazione HTML con attenzione (es. `<small>` per disclaimer)

### Esempi d'Uso

- Corrispondenza avvocato-cliente
- Email minaccia anonima
- Scambio tra sospetti
- Conferme appuntamenti sospetti
- Email di lavoro compromettenti

---

## 👮 Rapporto Polizia

**Prefisso:** `police_`  
**Classe CSS:** `.doc-police`  
**Icona:** 🛡️ shield  
**Categoria:** Documenti Ufficiali

### Elementi Caratteristici

- Intestazione ufficiale (Questura/Commissariato)
- Badge number dell'agente
- Protocollo e data
- Timbri e classificazioni (RISERVATO, etc.)
- Firma e badge finale
- Terminologia tecnica poliziesca

### Template Base

```markdown
# POLIZIA DI STATO - QUESTURA DI [CITTÀ]

<div class="document-stamp">🔴 RISERVATO</div>

## RAPPORTO INVESTIGATIVO

**Protocollo:** 2026/[NUMERO]  
**Data:** [GG/MM/AAAA]  
**Agente:** Sost. Comm. [Nome Cognome]  
**Badge:** [NUMERO]

### OGGETTO
[Breve descrizione del caso]

### FATTI ACCERTATI
[Narrazione dettagliata]

### CONCLUSIONI INVESTIGATIVE
[Sintesi]

---

**Firma:** _________________  
Sost. Comm. [Nome Cognome]
```

### Best Practices

- Usa terminologia tecnica ma comprensibile
- Numera protocolli in modo realistico (es. 2026/12345)
- Include badge numbers per autenticità
- Mantieni tono formale e impersonale
- Aggiungi timbri con `<div class="document-stamp">` per classificazioni
- Usa tabelle per elencare prove materiali

### Esempi d'Uso

- Rapporto iniziale scena del crimine
- Verbali interrogatori
- Sintesi investigative
- Timeline eventi ricostruiti
- Report sopralluoghi

---

## 🏥 Referto Medico

**Prefisso:** `medical_`  
**Classe CSS:** `.doc-medical`  
**Icona:** ❤️ heart  
**Categoria:** Documenti Ufficiali

### Elementi Caratteristici

- Intestazione ospedaliera/ASL
- Protocollo ML (Medicina Legale)
- Terminologia medica tecnica
- Sezioni strutturate (Esame Esterno/Interno)
- Conclusioni causa morte ed epoca
- Firma medico legale con ordine professionale

### Template Base

```markdown
# AZIENDA OSPEDALIERA [NOME]
## Servizio di Medicina Legale

### REFERTO AUTOPTICO

**Protocollo:** ML-2026-[NUMERO]  
**Medico Legale:** Dr. [Nome Cognome]

#### DATI ANAGRAFICI SOGGETTO
- **Nome:** [...]
- **Età:** [XX] anni

### ESAME ESTERNO
[Descrizione]

### ESAME INTERNO
[Descrizione organi]

### CONCLUSIONI
**Causa della morte:** [...]  
**Epoca della morte:** [...]
```

### Best Practices

- Usa terminologia medica tecnica (ma spiega passaggi chiave)
- Include misure precise (peso, altezza, temperatura)
- Descrivi rigidità cadaverica e ipostasi
- Stima epoca morte con range orario
- Distingui tra causa (patologia) e modalità (dolosa/suicidio/accidentale)
- Menziona campionamenti per tossicologia

### Esempi d'Uso

- Referto autoptico vittima
- Esami tossicologici
- Certificati medici sospetti
- Referti ospedalieri antecedenti
- Perizie medico-legali

---

## 🔬 Analisi Forense

**Prefisso:** `forensic_`  
**Classe CSS:** `.doc-forensic`  
**Icona:** 🔍 search  
**Categoria:** Documenti Ufficiali

### Elementi Caratteristici

- Intestazione RIS (Reparto Investigazioni Scientifiche)
- Protocollo specifico
- Quesiti tecnici da risolvere
- Metodologia scientifica descritta
- Tabelle con reperti
- Grado di certezza delle conclusioni

### Template Base

```markdown
# 🔬 ANALISI FORENSE - POLIZIA SCIENTIFICA

**Protocollo:** RIS-2026-[NUMERO]  
**Perito:** Dr. [Nome Cognome]

## QUESITO
[Domanda tecnica]

## MATERIALE SOTTOPOSTO AD ESAME
| Codice | Descrizione |
|--------|-------------|
| REP-1 | [...] |

## METODOLOGIA
[Tecniche usate]

## RISULTATI
[Dati analisi]

## CONCLUSIONI TECNICHE
[Risposta al quesito]

**Grado di certezza:** [Alto/Medio/Basso]
```

### Best Practices

- Specifica tecniche scientifiche (DNA, impronte, balistica, etc.)
- Usa codici per reperti (REP-001, etc.)
- Include gradi di certezza percentuali ove possibile
- Descrivi comparazioni con database
- Mantieni rigore scientifico ma leggibilità

### Esempi d'Uso

- Analisi DNA su reperti biologici
- Perizie balistiche armi
- Esami impronte digitali
- Analisi tracce (fibre, capelli)
- Comparazioni documenti (grafologia)

---

## 📖 Diario Personale

**Prefisso:** `diary_`  
**Classe CSS:** `.doc-diary`  
**Icona:** 📕 book  
**Categoria:** Corrispondenza Privata

### Elementi Caratteristici

- Carta invecchiata (stile grafico)
- Scrittura in prima persona
- Linguaggio emotivo e soggettivo
- Date come titoli entry
- Note a margine in corsivo
- Testo cancellato con strikethrough
- Macchie/danni descritti

### Template Base

```markdown
# Diario di [Nome Persona]

---

## [Giorno], [GG Mese AAAA]

Caro diario,

[Scrittura personale ed emotiva]

_[Nota a margine in corsivo]_

~~[Testo cancellato]~~

---

<small style="color: #8b7355">
[Macchia d'acqua visibile nell'angolo]
</small>
```

### Best Practices

- Usa linguaggio informale e personale
- Include emotività e pensieri intimi
- Aggiungi elementi grafici: `~~testo cancellato~~`, `_note a margine_`
- Menziona danni fisici al diario (pagine strappate, macchie)
- Date non sempre consecutive (salti temporali)
- Rivela informazioni gradualmente

### Esempi d'Uso

- Diario della vittima
- Note personali sospetto
- Diario segreto con rivelazioni
- Confessioni scritte
- Piani premeditati

---

## 💬 Chat/WhatsApp

**Prefisso:** `chat_`  
**Classe CSS:** `.doc-chat`  
**Icona:** 💬 message  
**Categoria:** Corrispondenza Privata

### Elementi Caratteristici

- Bubble messages con classi CSS
- Timestamp per messaggio
- Indicatori stato (✓✓ letto)
- Messaggi eliminati recuperati
- Chiamate vocali registrate
- Emoji e indicatori multimedia
- Note forensi su recupero

### Template Base

```markdown
# 💬 Chat WhatsApp

**Chat tra:** [Nome 1] e [Nome 2]  
**Fonte:** Backup forense dispositivo

---

<div class="message-received">
**[Nome 1]** • 09:23  
Ciao, ci sei?
</div>

<div class="message-sent">
**[Nome 2]** • 09:25  
Sì, dimmi
</div>

<div class="message-deleted">
**[Nome 1]** • 14:22  
_🚫 Questo messaggio è stato eliminato_  
**[Recupero forense]:** "[Testo recuperato]"
</div>

---

<small>
✓✓ Messaggi letti  
🔒 Chat crittografata
</small>
```

### Best Practices

- Usa classi `.message-received` e `.message-sent` per bubble
- Include emoji naturalmente
- Mostra messaggi eliminati recuperati forensicamente
- Registra chiamate vocali con durata
- Timestamp realistici (ore notturne sospette, etc.)
- Aggiungi indicatori multimedia (📷 foto inviata)

### Esempi d'Uso

- Conversazioni compromettenti
- Messaggi minatori
- Coordinamento tra complici
- Messaggi cancellati rivelatori
- Prove di alibi falsi

---

## 💰 Estratto Conto

**Prefisso:** `bank_`  
**Classe CSS:** `.doc-bank`  
**Icona:** 💵 dollar  
**Categoria:** Prove Materiali

### Elementi Caratteristici

- Intestazione bancaria
- Numero IBAN
- Periodo riferimento
- Tabella movimenti dettagliata
- Saldo progressivo
- Annotazioni forensi su movimenti sospetti
- Note su autorizzazione rogatoria

### Template Base

```markdown
# 🏦 [NOME BANCA]

## ESTRATTO CONTO CORRENTE

**Intestatario:** [Nome]  
**IBAN:** IT [...]  
**Periodo:** Dal [DATA] al [DATA]

---

### MOVIMENTI

| Data | Descrizione | Dare (-) | Avere (+) | Saldo |
|------|-------------|----------|-----------|--------|
| 01/02 | Saldo iniziale | | | 12.450,00 € |
| 10/02 | **Bonifico urgente** | **-10.000,00 €** | | **2.450,00 €** |

### ANNOTAZIONI FORENSI

⚠️ **Movimento anomalo**: [...]

---

<small>
Acquisito tramite rogatoria bancaria
</small>
```

### Best Practices

- Usa tabelle per chiarezza
- Evidenzia movimenti sospetti in bold
- Include descrizioni realistiche (POS negozi, bonifici)
- Calcola saldi progressivi correttamente
- Aggiungi note forensi per interpretazione
- Menziona autorizzazione giudiziale

### Esempi d'Uso

- Trasferimenti sospetti
- Pagamenti anomali pre-crimine
- Prove di corruzione
- Tracce acquisti rilevanti
- Movimenti verso paradisi fiscali

---

## ⚖️ Documento Legale

**Prefisso:** `legal_`  
**Classe CSS:** `.doc-legal`  
**Icona:** ⚖️ gavel  
**Categoria:** Prove Materiali

### Elementi Caratteristici

- Intestazione notarile
- Repertorio e raccolta
- Linguaggio formale legale
- "Premesso che..." e clausole numerate
- Dati anagrafici completi parti
- Firme multiple
- Registrazione e bolli

### Template Base

```markdown
# ⚖️ ATTO NOTARILE

**Repertorio n.** [NUM]/[ANNO]

**L'anno** duemilaventisei, il giorno [...]

**Avanti a me,** Dr. [Nome], Notaio in [Città]

**Sono comparsi:**
[Dati anagrafici completi]

## PREMESSO CHE
a) [premessa]

## LE PARTI CONVENGONO:

### Articolo 1 - [Titolo]
[Clausola]

---

**Letto, confermato e sottoscritto**

Le Parti: [firme]  
Il Notaio: [firma]
```

### Best Practices

- Usa linguaggio burocratico formale
- Includi dati anagrafici completi (CF, residenze)
- Numera clausole e articoli
- Aggiungi premesse legali standard
- Menziona registrazioni e tasse
- Include tutti i firmatari

### Esempi d'Uso

- Testamenti olografi
- Contratti compromettenti
- Atti di vendita sospetti
- Procure e deleghe
- Accordi pre-matrimoniali

---

## 📰 Articolo Stampa

**Prefisso:** `newspaper_`  
**Classe CSS:** `.doc-newspaper`  
**Icona:** 📰 newspaper  
**Categoria:** Prove Materiali

### Elementi Caratteristici

- Masthead giornale
- Data pubblicazione
- Sezione (Cronaca, Politica, etc.)
- Byline giornalista
- Lead in grassetto
- Quote dirette con fonti
- Box riassuntivi
- Riferimenti articoli correlati

### Template Base

```markdown
# 📰 IL [NOME GIORNALE]

**[Città]** • **[Data]** • Anno [X] N. [XX]

---

<div class="section-badge">CRONACA</div>

## [TITOLO PRINCIPALE]

### [Sottotitolo]

**di [Nome Cognome]** | [email]

---

[**CITTÀ**] – [Lead: prime 2-3 righe con 5 W]

[Corpo articolo con paragrafi brevi]

> "Citazione diretta testimone"  
> — [Nome Fonte], [Ruolo]

### Cosa sappiamo finora

- [Punto 1]
- [Punto 2]

---

<small>
**Articolo correlato a pag [X]:** [titolo]
</small>
```

### Best Practices

- Usa stile giornalistico oggettivo
- Lead con 5 W (who, what, when, where, why)
- Include quote dirette di autorità/testimoni
- Paragrafi brevi e incisivi
- Box riassuntivi per punti chiave
- Riferimenti a sviluppi futuri

### Esempi d'Uso

- Notizie del crimine
- Articoli investigativi
- Scandali pubblici
- Background vittime/sospetti
- Sviluppi caso giudiziari

---

## 📞 Tabulato Telefonico

**Prefisso:** `phone_`  
**Classe CSS:** `.doc-phone`  
**Icona:** 📞 phone  
**Categoria:** Prove Materiali

### Elementi Caratteristici

- Intestazione operatore telefonico
- Autorizzazione giudiziaria
- Tabella chiamate dettagliata
- Informazioni celle (geolocalizzazione)
- Durate precise
- Note investigative su pattern
- Disclaimer GDPR

### Template Base

```markdown
# 📞 TABULATO TELEFONICO

## Operatore: [Nome]

**Autorizzazione:** n. [XXX/AAAA]  
**Utenza:** +39 [NUMERO]  
**Periodo:** [DATE]

---

### DETTAGLIO CHIAMATE

| Data | Ora | Tipo | Numero | Durata | Cella |
|------|-----|------|--------|--------|-------|
| 14/02 | 08:23 | OUT | +39 333 *** | 00:03:42 | MI-01 |
| 14/02 | **18:22** | **OUT** | **+39 320 ***** | **00:47** | **MI-22** |

### LEGENDA CELLE
- **MI-01:** Milano Centro - Raggio 500m
- **MI-22:** Milano Periferia [Zona] - Raggio 1.2km

### NOTE INVESTIGATIVE
⚠️ **Pattern**: [...]

---

<small>GDPR: Trattamento autorizzato per indagini</small>
```

### Best Practices

- Usa tabelle per chiarezza
- Codifica celle con descrizione geografica
- Evidenzia chiamate anomale (durata, orario, posizione)
- Include SMS e dati
- Menziona autorizzazione giudiziaria
- Privacy: oscura numeri parzialmente

### Esempi d'Uso

- Alibi verificati/smentiti tramite celle
- Chiamate sospette orari chiave
- Contatti tra complici
- Pattern di movimento
- Ultima posizione vittima

---

## 📱 Social Media

**Prefisso:** `social_`  
**Classe CSS:** `.doc-social`  
**Icona:** 👥 users  
**Categoria:** Prove Materiali

### Elementi Caratteristici

- Intestazione piattaforma
- Username e bio profilo
- Timestamp precisissimo
- Contatori interazioni
- Sezione commenti
- Metadata forense (device, IP, edit)
- Note su acquisizione legale

### Template Base

```markdown
# 📱 POST SOCIAL MEDIA

## [PIATTAFORMA]

---

### 🔵 [@username]

**[Nome]**  
[Bio]

📍 [Località]

---

**Post del [DATA] alle [ORA]**

[Testo post con emoji e #hashtag]

---

**📸 [Descrizione contenuto visivo]**

---

### 💬 Interazioni

❤️ [num] Mi piace  
💬 [num] Commenti

#### Commenti rilevanti:
**[@user]** • [X ore fa]  
[Commento]

---

### 📊 Metadata Forense
- **Post ID:** [...]
- **Dispositivo:** [...]
- **Modifiche:** [...]

---

<small>Acquisito tramite data retention</small>
```

### Best Practices

- Specifica piattaforma (Instagram/Facebook/Twitter/LinkedIn)
- Include emoji naturalmente
- Mostra interazioni rilevanti
- Aggiungi metadata forensi (device, timestamp, edits)
- Descrivi contenuto visivo (foto/video)
- Menziona acquisizione legale dati

### Esempi d'Uso

- Post compromettenti pre-crimine
- Check-in geolocalizzati
- Commenti rivelatori
- Relazioni nascoste evidenti
- Timeline eventi pubblici

---

## 📷 Fotografia

**Prefisso:** `photo_`  
**Classe CSS:** `.doc-photo`  
**Icona:** 📷 camera  
**Categoria:** Prove Materiali

### Elementi Caratteristici

- Codice reperto
- Descrizione dettagliata contenuto visivo
- Metadata EXIF completi
- Geolocalizzazione
- Annotazioni forensi
- Catena di custodia
- Hash MD5 per integrità

### Template Base

```markdown
# 📷 FOTOGRAFIA - REPERTO VISIVO

## SCHEDA IDENTIFICATIVA

**Codice:** FOTO-2026-[NUM]  
**Acquisizione:** [Data/Ora]  
**Operatore:** Ag. [Nome]  
**Luogo:** [Indirizzo]

---

## DESCRIZIONE CONTENUTO VISIVO

[Descrizione dettagliata cosa raffigura]

### Elementi identificati:
1. **Primo piano:** [...]
2. **Sfondo:** [...]
3. **Dettagli rilevanti:** [...]

---

## METADATA EXIF

| Campo | Valore |
|-------|--------|
| **Data scatto** | [AAAA:MM:GG HH:MM:SS] |
| **Fotocamera** | [Marca Modello] |
| **GPS** | Lat: [...] Lon: [...] |

---

## ANNOTAZIONI FORENSI

🔍 **Elemento interesse:** [...]

---

<small>
Hash MD5: [codice]  
Conservato presso: Deposito prove
</small>
```

### Best Practices

- DESCRIVE la foto (non mostrarla - è un gioco testuale)
- Include EXIF realistici (camera, GPS, timestamp)
- Evidenzia elementi investigativi chiave
- Aggiungi catena custodia
- Menziona hash per integrità digitale
- Nota eventuali modifiche/editing

### Esempi d'Uso

- Foto scena crimine
- Immagini recuperate da telefoni
- Foto social scaricate
- Prove fotografiche alibi
- Immagini sospette (timestamp modificati)

---

## 🎯 Riepilogo Rapido

| Tipo | Prefisso | Categoria | Uso Principale |
|------|----------|-----------|----------------|
| Email | `email_` | Corrispondenza | Comunicazioni private |
| Rapporto Polizia | `police_` | Ufficiali | Indagini formali |
| Referto Medico | `medical_` | Ufficiali | Cause morte, patologie |
| Analisi Forense | `forensic_` | Ufficiali | Prove scientifiche |
| Diario | `diary_` | Corrispondenza | Pensieri intimi, confessioni |
| Chat | `chat_` | Corrispondenza | Messaggi istantanei |
| Estratto Conto | `bank_` | Prove | Transazioni finanziarie |
| Documento Legale | `legal_` | Prove | Contratti, testamenti |
| Articolo Stampa | `newspaper_` | Prove | Background pubblico |
| Tabulato Telefonico | `phone_` | Prove | Chiamate, geolocalizzazione |
| Social Media | `social_` | Prove | Post, interazioni pubbliche |
| Fotografia | `photo_` | Prove | Elementi visivi descritti |

---

## 💡 Tips Generali

### Mix Tipologie

Varia i tipi documento per un caso bilanciato:
- **30% Ufficiali** (police, medical, forensic)
- **25% Corrispondenza** (email, chat, diary)
- **45% Prove** (bank, legal, newspaper, phone, social, photo)

### Coerenza Temporale

Sincronizza timestamp tra documenti:
- Email delle 18:20 + Chiamata tabulato 18:22 = Coerenza
- Post social location + Cella telefonica = Alibi verificabile

### Livelli Informazione

- **Documenti iniziali:** Fatti base (police, newspaper)
- **Documenti intermedi:** Indizi indiretti (chat, social)
- **Documenti finali:** Prove decisive (forensic, bank)

### Red Herrings

Usa false piste con documenti ambigui:
- Email sospetta sospetto innocente
- Movimenti bancari spiegabili ma strani
- Post social mal interpretabili

---

## 📖 Template Completi

Tutti i template sono disponibili in: [template/caso-template/documenti/](../template/caso-template/documenti/)

- `email_template.md`
- `police_template.md`
- `medical_template.md`
- `forensic_template.md`
- `diary_template.md`
- `chat_template.md`
- `bank_template.md`
- `legal_template.md`
- `newspaper_template.md`
- `phone_template.md`
- `social_template.md`
- `photo_template.md`

---

**Creato per Secret Case Detective System v2.0**  
Ultima revisione: Febbraio 2026
