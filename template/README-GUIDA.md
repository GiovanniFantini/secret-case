# 📚 Guida Template Sistema Unificato

## Struttura Caso Detective

Un caso detective è organizzato in:

### File Sistema (prefisso `_`)
- `_istruzioni-giocatori.md` - Regole del gioco
- `_manuale-utente.md` - Guida per il narratore

### Documenti Investigativi (prefisso tipo)
Tutti i documenti vanno in `documenti/` con prefisso:
- `email_*.md` - Email
- `police_*.md` - Rapporti polizia
- `medical_*.md` - Referti medici
- `diary_*.md` - Diari personali
- `chat_*.md` - Chat/messaggi
- `bank_*.md` - Estratti conto
- `legal_*.md` - Documenti legali
- `newspaper_*.md` - Articoli stampa
- `phone_*.md` - Tabulati telefonici
- `social_*.md` - Post social media
- `photo_*.md` - Descrizioni foto
- `forensic_*.md` - Analisi forensi

### Suggerimenti (prefisso `hint_`)
- `hint_livello1.md` - Suggerimento generico
- `hint_livello2.md` - Suggerimento specifico
- `hint_livello3.md` - Quasi la soluzione

### Soluzioni (prefisso `solution_`)
- `solution_albero-decisionale.md` - Flowchart soluzione
- `solution_documento-master.md` - Spiegazione completa
- `solution_script-narrazione-finale.md` - Narrazione finale

## Convenzioni Naming

**OBBLIGATORIO**: Ogni documento deve avere prefisso tipo + underscore

✅ CORRETTO:
- `email_messaggio-avvocato.md`
- `police_rapporto-interrogatorio.md`
- `diary_diario-vittima.md`

❌ SBAGLIATO:
- `messaggio-avvocato.md` (manca prefisso)
- `email-messaggio-avvocato.md` (dash invece di underscore)

## Come Creare un Nuovo Caso

1. Copia `template/caso-template/` → `casi/il-mio-caso/`
2. Personalizza `_istruzioni-giocatori.md` e `_manuale-utente.md`
3. Crea documenti in `documenti/` usando i template come base
4. Aggiungi suggerimenti progressivi (hint_livello1/2/3)
5. Scrivi la soluzione completa (solution_*)
6. Testa con `npm start` dalla cartella app/

## Best Practices

- Usa terminologia realistica per tipo documento
- Mantieni consistenza nelle date e nomi personaggi
- Progressive disclosure: documenti facili prima, complessi dopo
- 3 livelli hint: generico → specifico → quasi soluzione
- Soluzione completa con tutti i dettagli e narrazione finale

## Distribuzione Indizi

**Percentuali Consigliate**:
- **30% Indizi Diretti** - Prove evidenti che puntano chiaramente al colpevole
- **40% Indizi da Collegare** - Richiedono connessioni tra più documenti
- **20% Indizi Nascosti** - Dettagli sottili che confermano la teoria
- **10% Red Herring** - False piste credibili per aumentare difficoltà

**Esempio di Distribuzione**:
Se il caso ha 20 documenti:
- 6 documenti con indizi diretti (rapporto polizia, interrogatori chiave)
- 8 documenti con indizi da collegare (email + estratti conto + timeline)
- 4 documenti con indizi nascosti (dettagli in foto, note marginali)
- 2 documenti come red herring (falsi sospetti con alibi verificabili)

## Prefissi Documento Completi

### Documenti Ufficiali
- `police_` - Rapporti polizia, verbali interrogatorio, denunce
- `medical_` - Referti medici, autopsie, certificati di morte
- `forensic_` - Analisi forensi, impronte, DNA, balistiche
- `legal_` - Documenti legali, contratti, testamenti, cause

### Comunicazioni Private
- `email_` - Email personali o professionali
- `chat_` - Chat, messaggi istantanei, SMS
- `phone_` - Tabulati telefonici, registrazioni chiamate
- `diary_` - Diari personali, note intime

### Documenti Finanziari
- `bank_` - Estratti conto, movimenti bancari
- `receipt_` - Scontrini, ricevute, fatture
- `invoice_` - Fatture professionali, contratti economici

### Media e Pubblico
- `newspaper_` - Articoli di giornale, cronaca
- `social_` - Post social media (Facebook, Instagram, Twitter)
- `photo_` - Descrizioni fotografiche, prove visive
- `video_` - Trascrizioni video, registrazioni

### Altri
- `letter_` - Lettere cartacee formali o informali
- `note_` - Appunti vari, post-it, promemoria
- `report_` - Report generici, relazioni professionali
- `timeline_` - Timeline ricostruttive
- `map_` - Mappe, planimetrie, schemi luoghi

### File Speciali
- `_` prefisso - File sistema (istruzioni, manuali)
- `hint_` prefisso - Suggerimenti progressivi
- `solution_` prefisso - File soluzione (SPOILER)

## Struttura solution_documento-master.md

Il documento master è il cuore del caso. Deve contenere:

### 1. Informazioni Generali
- Titolo, ambientazione, data, tipo crimine
- Durata gioco, difficoltà, numero giocatori

### 2. Profilo Vittima
- Dati personali completi
- Carriera e reputazione
- Personalità e segreti
- Perché si trovava nel luogo del crimine

### 3. Profili Sospetti (tutti, incluso colpevole)
Per ogni sospettato:
- Biografia e personalità
- Relazione con la vittima
- Movente apparente
- Alibi dichiarato vs alibi reale
- Segreti nascosti
- **Ruolo reale: COLPEVOLE / INNOCENTE / COMPLICE**

### 4. La Soluzione Completa
- **Il Colpevole**: Chi è e perché
- **Il Movente Reale**: Spiegazione dettagliata con prove
- **Il Metodo**: Preparazione, esecuzione, copertura
- **Errori del Colpevole**: Cosa ha permesso di scoprirlo

### 5. Catena Probatoria
- Indizi diretti (30%)
- Indizi da collegare (40%)
- Indizi nascosti (20%)
- Red herring (10%)
- Mappa indizi per documento

### 6. False Piste Dettagliate
Per ogni falsa pista:
- Sospetto coinvolto
- Cosa suggerisce
- Perché sembra credibile
- Documenti che la supportano
- Perché è sbagliata
- Prove che la scagionano

### 7. Timeline Completa
- Eventi preparatori
- Giorno del crimine (ora per ora)
- Scoperta e indagini

### 8. Sistema di Verifica
- 3 domande (Chi? Perché? Come?)
- Opzioni di risposta con feedback
- Sistema di punteggio (0-3)

## Struttura solution_albero-decisionale.md

File interattivo per verificare la soluzione:

### Componenti Obbligatori:
1. **Diagramma di flusso** - Rappresentazione visuale ASCII
2. **Domanda 1: Chi?** - 4-6 opzioni con feedback dettagliato
3. **Domanda 2: Perché?** - 3-4 moventi con spiegazione
4. **Domanda 3: Come?** - 3-4 metodi con prove
5. **Calcolo punteggio** - Badge finale (0-3 punti)
6. **Riepilogo risposte corrette** - Tabella conclusiva

### Formato Feedback:
```markdown
<details>
<summary>Hai risposto (a) — [OPZIONE]? Clicca qui.</summary>

**RISPOSTA CORRETTA/ERRATA**

[Spiegazione dettagliata]

**Punteggio per questa domanda: X punti.**
</details>
```

## Struttura solution_script-narrazione-finale.md

Script drammatico da leggere/registrare dopo la soluzione:

### Sezioni Obbligatorie:
1. **L'Apertura (2-3 min)** - Atmosfera e contesto
2. **La Vittima (2-3 min)** - Chi era, cosa rappresentava
3. **I Sospetti (3-4 min)** - Galleria di ritratti
4. **Le False Piste (2-3 min)** - Smontare ipotesi errate
5. **La Verità (4-5 min)** - Rivelazione del colpevole e metodo
6. **Epilogo (2-3 min)** - Conseguenze e riflessione

**Durata totale**: 12-15 minuti

### Note di Produzione:
- Indicazioni tono vocale tra `[parentesi quadre]`
- Pause segnate con `*[Pausa.]*`
- Timestamp per ogni sezione
- Suggerimenti musicali di sottofondo

## Struttura Suggerimenti Progressivi

### hint_livello1.md - Orientamento Generale
**Quando**: Dopo 60 minuti o 1 tentativo errato
**Contenuto**:
- Indica quale area investigativa rivedere
- Suggerisce tipi di documenti da rileggere
- Orienta verso tipo di prove
- Restringe campo sospettati SENZA rivelare colpevole

**Esempio**:
```
Non concentrate tutta l'attenzione sul movente più ovvio. 
Il vero colpevole aveva accesso a informazioni che solo poche 
persone possedevano. Rileggete attentamente i verbali di 
interrogatorio confrontandoli con il registro delle presenze.
```

### hint_livello2.md - Indizi Specifici
**Quando**: Dopo 90 minuti o 2 tentativi errati
**Contenuto**:
- Segnala contraddizioni specifiche
- Indica documenti chiave da incrociare
- Evidenzia timeline sospette
- Rivela elementi che eliminano sospettati

**Esempio**:
```
Il sospetto X afferma di essere uscito alle 22:15, ma il 
registro telecamere mostra un'uscita alle 23:40. Confrontate 
questa discrepanza con l'orario stimato del crimine nel 
report medico legale.
```

### hint_livello3.md - Quasi-Soluzione
**Quando**: Dopo 120 minuti o 3 tentativi errati
**Contenuto**:
- Identifica il colpevole
- Spiega il movente
- Descrive il metodo
- Elenca prove a supporto

**Esempio**:
```
Il colpevole è [NOME]. Il movente era [MOVENTE DETTAGLIATO]. 
Il metodo consisteva nel [METODO DETTAGLIATO]. Le prove 
chiave sono: [LISTA 5 PROVE CON RIFERIMENTO AI DOCUMENTI].
```

## Calibrazione Difficoltà

### Caso Facile (2-3 ore)
- 3-4 sospettati
- Indizi diretti evidenti
- Poche contraddizioni
- Timeline semplice
- Metodo comprensibile senza competenze tecniche

### Caso Medio (3-4 ore)
- 5-6 sospettati
- Indizi diretti + da collegare
- Alcune contraddizioni da scoprire
- Timeline con sovrapposizioni
- Metodo richiede connessioni logiche

### Caso Difficile (4-6 ore)
- 6-8 sospettati con moventi credibili
- Molti indizi da collegare e nascosti
- Contraddizioni sottili
- Timeline complessa con alibi incrociati
- Metodo tecnico o richiede conoscenze specifiche
- Multiple red herring convincenti

## Testing del Caso

Prima di pubblicare, testa:

### Checklist Qualità:
- [ ] Soluzione unica e inconfutabile
- [ ] Tutte le prove necessarie sono presenti
- [ ] Ogni indizio ha uno scopo
- [ ] False piste sono credibili ma scagionabili
- [ ] Timeline coerente senza contraddizioni involontarie
- [ ] Alibi verificabili con prove concrete
- [ ] Nessuna conoscenza esterna richiesta
- [ ] Documenti leggibili e formattati correttamente
- [ ] Suggerimenti progressivi calibrati
- [ ] Narrazione finale completa e avvincente

### Playtest:
1. Fai giocare 2-3 persone senza aiuti
2. Osserva dove si bloccano
3. Verifica tempo di risoluzione
4. Raccogli feedback su:
   - Chiarezza indizi
   - Bilanciamento difficoltà
   - Soddisfazione soluzione
   - Qualità narrazione

### Metriche Target:
- 80%+ giocatori trova colpevole con Livello 1-2
- Tempo risoluzione entro range stimato ±1 ora
- Nessun giocatore abbandona per frustrazione
- Almeno 1 red herring credibile ha distolto attenzione

## Esempi di Casi

Casi esistenti da studiare come riferimento:
- `casi/eredita-villa-rossi/` - Caso medio, 5 sospetti
- `casi/la-cattedra-vuota/` - Caso difficile, ambiente universitario
- `casi/prezzo-del-silenzio/` - Caso medio-alto, ricatti
- `casi/ultima-cena/` - Caso difficile, cena mistero

## Risorse e Tool

### Strumenti Consigliati:
- **VS Code** - Editor con preview Markdown
- **Obsidian** - Per visualizzare connessioni tra documenti
- **Mermaid** - Per diagrammi di flusso
- **PlantUML** - Per timeline visuali
- **Google Forms** - Per sistema verifica digitale

### Template Utili:
- Template email: `template/caso-template/documenti/email_template.md`
- Template interrogatorio: `template/caso-template/documenti/police_template.md`
- Template referto medico: `template/caso-template/documenti/medical_template.md`
- (I template specifici saranno aggiunti da Agent 3b)

## Domande Frequenti

**Q: Quanti documenti servono per un caso?**
A: Minimo 15-20 per caso medio. Più sospetti = più documenti necessari.

**Q: Tutti i sospetti devono avere un movente?**
A: Sì, ma solo il colpevole ha movente + opportunità + metodo.

**Q: Posso creare documenti senza prefisso?**
A: No. Il sistema di navigazione si basa sui prefissi. Usa `note_` per documenti generici.

**Q: Come nascondo bene gli indizi?**
A: Mettili in documenti secondari, usa linguaggio tecnico, distribuiscili in più file da collegare.

**Q: Quanto deve durare la narrazione finale?**
A: 12-15 minuti. Più corta = troppo sbrigativa. Più lunga = perde attenzione.

**Q: Devo sempre avere 3 livelli di hint?**
A: Sì, ma calibra la rivelazione. Livello 3 è ultimo resort.

## Versioning

Ogni caso dovrebbe tracciare versioni:

```markdown
## Changelog

### v1.0 (2026-02-14)
- Prima release pubblica
- 6 sospetti, 23 documenti
- Testato con 4 gruppi

### v1.1 (2026-02-20)
- Fix: Contraddizione timeline sospetto 3
- Aggiunto hint_livello1 più chiaro
- Migliorata narrazione finale (18min → 14min)
```

## Contribuire

Per contribuire un nuovo caso:

1. Crea branch: `git checkout -b caso/nome-caso`
2. Copia template: `Copy-Item template/caso-template casi/nome-caso -Recurse`
3. Sviluppa caso completo
4. Testa con almeno 2 gruppi
5. Documenta nel README del caso
6. Pull request con descrizione dettagliata

## Licenza e Attribuzione

Quando crei un caso basato su questo template:
- Mantieni riferimento al template originale
- Attribuisci autori nel README del caso
- Indica difficoltà e tempo stimato
- Condividi miglioramenti al template via PR

---

**Ultimo aggiornamento**: 2026-02-14  
**Versione Guida**: 2.0 (Sistema Unificato)  
**Autori**: Secret Case Team

Per domande o supporto, consulta il README principale del progetto.
