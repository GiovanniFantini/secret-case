# Albero Decisionale per il Sistema di Verifica - L'Eredità Avvelenata di Villa Rossi

## Flusso Principale

```
INIZIO GIOCO
  |
  v
[Giocatori completano l'analisi dei documenti]
  |
  v
[Dichiarano di voler rispondere alle 3 domande di verifica]
  |
  v
DOMANDA 1: Chi è il colpevole?
  |
  +-- Risposta CORRETTA (Giulia Rossi)
  |   |
  |   +-> Registra: 1 punto (1/3)
  |   +-> Feedback: "Esatto! Avete identificato il colpevole."
  |   +-> Vai a DOMANDA 2
  |
  +-- Risposta ERRATA (Francesca / Santini / Pietro / Marco / Altro)
      |
      +-- Se è il Tentativo 1 di errore
      |   |
      |   +-> Registra: Errore 1
      |   +-> Sblocca: Suggerimenti Livello 1
      |   +-> Feedback: "Non è il colpevole. Rileggete i verbali di interrogatorio e cercate contraddizioni nei tempi."
      |   +-> Opzione: [Volete tentare di nuovo?] O [Continuate comunque a Domanda 2?]
      |   +-> Se tentativo di nuovo: goto DOMANDA 1
      |   +-> Se continuate: goto DOMANDA 2
      |
      +-- Se è il Tentativo 2 di errore
      |   |
      |   +-> Registra: Errore 2
      |   +-> Sblocca: Suggerimenti Livello 2
      |   +-> Feedback: "Ancora no. Controllate specificamente: a) Il video di sorveglianza mostra chi era in cucina nei 10 minuti prima del servizio del dessert? b) Chi aveva accesso al laboratorio privato di Andrea? c) Chi aveva il motivo finanziero più forte?"
      |   +-> Opzione: [Volete tentare di nuovo?] O [Continuate a Domanda 2?]
      |   +-> Se tentativo di nuovo: goto DOMANDA 1
      |   +-> Se continuate: goto DOMANDA 2
      |
      +-- Se è il Tentativo 3 di errore
          |
          +-> Registra: Errore 3
          +-> Sblocca: Suggerimenti Livello 3
          +-> Feedback: "Il colpevole è un membro della famiglia nucleare (non ospiti, non staff), qualcuno che stava perdendo molto dal nuovo testamento, e qualcuno che aveva accesso fisico al laboratorio di Andrea."
          +-> goto DOMANDA 2

DOMANDA 2: Qual è il motivo esatto?
  |
  +-- Risposta CORRETTA (Eredità/Testamento: proteggere la quota dai 400 ai 50 milioni)
  |   |
  |   +-> Registra: 1 punto (totale N/3)
  |   +-> Feedback: "Corretto! Era tutto una questione di soldi e protezione dell'eredità."
  |   +-> Vai a DOMANDA 3
  |
  +-- Risposta ERRATA (Vendetta / Protezione da Francesca / Altro)
      |
      +-- Se è il Tentativo 1 di errore
      |   |
      |   +-> Registra: Errore 1
      |   +-> Sblocca: Suggerimenti Livello 1
      |   +-> Feedback: "Non è il motivo primario. Focalizzatevi sugli aspetti finanziari. Chi guadagna e chi perde dall'eredità di Andrea?"
      |   +-> Opzione: [Volete tentare di nuovo?] O [Continuate a Domanda 3?]
      |
      +-- Se è il Tentativo 2 di errore
      |   |
      |   +-> Registra: Errore 2
      |   +-> Sblocca: Suggerimenti Livello 2
      |   +-> Feedback: "Controllate l'email di Fermi sull'argomento 'Nuovo testamento Andrea Rossi'. Ci sono numeri precisi sulla riduzione dell'eredità."
      |   +-> Opzione: [Volete tentare di nuovo?] O [Continuate a Domanda 3?]
      |
      +-- Se è il Tentativo 3 di errore
          |
          +-> Registra: Errore 3
          +-> Sblocca: Suggerimenti Livello 3
          +-> Feedback: "Il motivo è unicamente finanziario. Il colpevole stava per perdere 350 milioni di euro a causa di una modifica al testamento. Questo è il movente."
          +-> goto DOMANDA 3

DOMANDA 3: Come è stato commesso il crimine?
  |
  +-- Risposta CORRETTA (Ricina aggiunta al semifreddo prima del servizio)
  |   |
  |   +-> Registra: 1 punto (totale N/3)
  |   +-> Feedback: "Esatto! La ricina è stata inserita nel piatto di dessert in cucina."
  |   +-> Vai a CALCOLO PUNTEGGIO
  |
  +-- Risposta ERRATA (Veleno nel vino / Ricina nel caffè / Altro)
      |
      +-- Se è il Tentativo 1 di errore
      |   |
      |   +-> Registra: Errore 1
      |   +-> Sblocca: Suggerimenti Livello 1
      |   +-> Feedback: "Non è il metodo esatto. Guardate la timeline: quando esattamente Andrea ha iniziato a sentirsi male? Qual è il suo collegamento con quale piatto?"
      |   +-> Opzione: [Volete tentare di nuovo?] O [Andiamo al punteggio?]
      |
      +-- Se è il Tentativo 2 di errore
      |   |
      |   +-> Registra: Errore 2
      |   +-> Sblocca: Suggerimenti Livello 2
      |   +-> Feedback: "Andrea è morto circa 25 minuti dopo aver mangiato il dessert. Controllate il rapporto medico legale su quando la ricina agisce nel corpo. Controllate anche il verbale di Sofia sulla scomparsa/riapparizione del piatto di dessert dalla cucina."
      |   +-> Opzione: [Volete tentare di nuovo?] O [Andiamo al punteggio?]
      |
      +-- Se è il Tentativo 3 di errore
          |
          +-> Registra: Errore 3
          +-> Sblocca: Suggerimenti Livello 3
          +-> Feedback: "Il colpevole è entrato in cucina per soli 2 minuti prima che il dessert fosse servito. Controllate il video: cosa succede al piatto in quel momento? Ricordate: la ricina è una polvere. Come si mescola in un semifreddo?"
          +-> goto CALCOLO PUNTEGGIO

CALCOLO PUNTEGGIO FINALE
  |
  v
[Sistema conta: Quante risposte corrette? 0/3, 1/3, 2/3 o 3/3?]
  |
  v
MOSTRA RISULTATO
  |
  +-- Se 3/3: "Investigatore Eccezionale"
  |
  +-- Se 2/3: "Buon Investigatore"
  |
  +-- Se 1/3: "Investigatore in Erba"
  |
  +-- Se 0/3: "Caso Irrisolto"
  |
  v
[Mostra spiegazione personalizzata in base al punteggio]
  |
  v
[Offerta: Lettura dello Script di Narrazione Finale oppure fine del gioco]
  |
  v
FINE
```

## Gestione dei Suggerimenti

```
SISTEMA SUGGERIMENTI PROGRESSIVO
  |
  +-- Condizione: Giocatore ha giocato per 60 minuti OR ha 1 risposta sbagliata
  |     |
  |     +-> Sblocca LIVELLO 1 - Suggerimenti Generici
  |            Categoria: Broad hints (focus areas without solutions)
  |
  +-- Condizione: Giocatore ha giocato per 90 minuti OR ha 2 risposte sbagliate
  |     |
  |     +-> Sblocca LIVELLO 2 - Suggerimenti Specifici
  |            Categoria: Document-specific hints (controllate pagina X, sezione Y)
  |
  +-- Condizione: Giocatore ha giocato per 120 minuti OR ha 3 risposte sbagliate
        |
        +-> Sblocca LIVELLO 3 - Suggerimenti Quasi-Risolutivi
               Categoria: Near-solution hints (quasi direttamente la risposta)
```

## Tabella delle Risposte Dettagliata

### DOMANDA 1: Chi è il colpevole?

| Opzione | Risposta | Feedback Breve | Feedback Completo |
|---------|----------|---|---|
| A) Francesca Morelli | Errata | Ha motivo ma no accesso | Francesca aveva motivo finanziario, sì, ma il video di sorveglianza mostra che non ha mai lasciato il tavolo nei 10 minuti critici prima che Andrea mangiasse il dessert. Ha un alibi solido. |
| B) Giulia Rossi | **Corretta** | Investigatore eccezionale! | Avete identificato il colpevole. Giulia è la figlia che avrebbe perso 350 milioni dal nuovo testamento. Aveva accesso al laboratorio di Andrea e al video di sorveglianza è visibile in cucina nei momenti critici. |
| C) Dr. Leonardo Santini | Errata | Accesso ma no movimento | Santini aveva motivo (veniva denunciato da Andrea), ma l'alibi è solido: era in cucina con Sofia negli ultimi 10 minuti prima della morte di Andrea. Non ci sono tracce di ricina nelle sue ricerche online. |
| D) Pietro Rossi | Errata | Manca competenza tecnica | Pietro è disperato per soldi, ma non ha accesso al laboratorio di Andrea. Non ha tracce di ricerca su veleni online. È troppo maldestro e impaurito per commettere un omicidio così sofisticato. |

**Feedback Se Risposta Errata**: "Il colpevole è qualcuno che: a) ha accesso a veleni o capacità di acquisirli; b) non ha un alibi solido per il momento del'avvelenamento; c) ha un motivo finanziario MOLTO forte."

### DOMANDA 2: Qual è il motivo esatto?

| Opzione | Risposta | Feedback Breve | Feedback Completo |
|---------|----------|---|---|
| A) Vendetta per i matrimoni falliti del padre | Errato | Fattore minore, non primario | La vendetta personale è un fattore nella psiche di Giulia, ma non il motivo primario. È la giustificazione emotiva che Giulia usa con se stessa, non il vero movente razionale. |
| B) Eredità - Proteggere la quota testamentaria dalla riduzione | **Corretto** | Esatto! Era tutto sui soldi. | L'email di Fermi mostra che il nuovo testamento avrebbe ridotto la quota di Giulia da 400 milioni a soli 50 milioni di euro. Una perdita di 350 milioni. Questo era il motivo primario. |
| C) Proteggere la famiglia dalla manipolazione di Francesca | Errato | Razionalizzazione, non motivo | Questo è come Giulia RAZIONALIZZA il crimine nel suo mindset ("sto proteggendo la famiglia"), ma il vero motivo è il denaro. Se non ci fosse stata la minaccia testamentaria, Giulia non avrebbe agito. |

**Feedback Se Risposta Errata**: "Il motivo non è emotivo o interpersonale. È finanziario. Guardate i numeri nel testamento. Quanto stava per perdere il colpevole?"

### DOMANDA 3: Come è stato commesso il crimine?

| Opzione | Risposta | Feedback Breve | Feedback Completo |
|---------|----------|---|---|
| A) Veleno aggiunto al vino durante i brindisi | Errato | Tempi sbagliati | Andrea è morto circa 25 minuti DOPO il dessert. Se fosse stato il vino, sarebbe morto prima. Inoltre, il test tossicologico del vino di Andrea non mostra tracce di ricina. |
| B) Ricina aggiunta al semifreddo al pistachio poco prima del servizio | **Corretto** | Perfetto! Hai risolto il metodo. | Il colpevole è entrato in cucina per 2 minuti mentre il dessert era sulla vaniglia (confermato dal video). Ha mescolato ricina in polvere nel semifreddo. Andrea lo ha mangiato 5 minuti dopo. 20-25 minuti dopo l'assunzione, è collassato. |
| C) Ricina in polvere mescolata nel caffè dopo cena | Errato | Tempi sbagliati | Andrea non ha avuto caffè. È morto prima del servizio del caffè. La timeline medica mostra che la morte è avvenuta 25 minuti dopo il dessert, non ore dopo (come sarebbe con il caffè). |

**Feedback Se Risposta Errata**: "Il timing è la chiave. Andrea è morto 25 minuti dopo il dessert. Che cosa ha mangiato esattamente in quel momento? Come potrebbe il colpevole aver avuto accesso a quel piatto?"

---

## Risultati Finali e Messaggi

### Punteggio 3/3 - Investigatore Eccezionale

**Titolo**: 🔍 **INVESTIGATORE ECCEZIONALE** 🔍

**Messaggio Principale**:
```
Complimenti straordinari! Avete risolto il caso con maestria assoluta.

Avete identificato correttamente:
✓ Il colpevole: Giulia Rossi
✓ Il motivo: Proteggere l'eredità dalla riduzione testamentaria (350 milioni in gioco)
✓ Il metodo: Ricina aggiunta al dessert

Avete colto ogni indizio significativo e costruito una teoria logica e coerente.
Ogni collegamento è stato tracciato perfettamente. Non vi siete lasciati ingannare
dalle false piste. Questo è il lavoro di un investigatore di classe mondiale.

Andrea Rossi avrebbe approvato il vostro lavoro investigativo.
```

### Punteggio 2/3 - Buon Investigatore

**Titolo**: 👮 **BUON INVESTIGATORE** 👮

**Messaggio Principale**:
```
Ottimo lavoro! Avete colto l'essenza del caso e risolto la maggior parte del puzzle.

Avete identificato correttamente 2 delle 3 componenti critiche del caso.
Questo dimostra una comprensione solida della situazione e una buona capacità
deduttiva.

Qualche dettaglio vi è sfuggito, ma la vostra teoria è fondamentalmente corretta.
Questo è il tipo di investigatore che avrebbe risolto il caso in una vera indagine,
anche se avrebbe potuto beneficiare di ulteriori ore di revisione.

Con un po' più di attenzione ai dettagli, avreste ottenuto il massimo.
```

### Punteggio 1/3 - Investigatore in Erba

**Titolo**: 🕵️ **INVESTIGATORE IN ERBA** 🕵️

**Messaggio Principale**:
```
Non male per un primo tentativo! Avete catturato un elemento cruciale del caso.

Tuttavia, ci sono significativi buchi nella vostra indagine. Avete correttamente
identificato una parte del puzzle, ma vi siete persi su altre due componenti altrettanto
importanti.

Consiglio: Rileggete i documenti che vi hanno portato al dubbio. In particolare,
prestate attenzione a:
- Le timeline esatte e le contraddizioni di alibi
- La "carta del denaro": chi guadagna? Chi perde? Quanto?
- L'accesso fisico a strumenti e veleni

Rimettetevi al lavoro! Questo caso ha soluzione e voi siete sulla strada giusta.
```

### Punteggio 0/3 - Caso Irrisolto

**Titolo**: ❌ **CASO IRRISOLTO** ❌

**Messaggio Principale**:
```
Il caso rimane un mistero. I vostri tre tentativi non hanno identificato correttamente
il colpevole, il motivo, o il metodo.

Non è una sconfitta: gli omicidi sofisticati sono difficili. Questo caso è costruito
per ingannare. Ci sono false piste credibili e dettagli nascosti.

Consiglio per la prossima volta:
1. Create una timeline dettagliata su carta grande
2. Costruite una tabella "Chi guadagna da cosa" per ogni sospetto
3. Cercate le CONTRADDIZIONI tra testimonanze - uno deve stare mentendo
4. Non scartate nessuno basato su apparenze. Tutti hanno segreti.

Consultate la Soluzione Completa e lo Script di Narrazione Finale per scoprire
cosa vi è sfuggito. Potrete così imparare da questa indagine e fare meglio la prossima volta.
```

---

## Note di Implementazione Tecnica

### Versione Fisica (Buste Numerate)

1. Stampare 3 series di buste numerate (1, 2, 3)
2. Ogni busta contiene le 4 opzioni di risposta su cartoncini separati
3. Giocatore sceglie un cartoncino senza aprire la busta
4. Busta viene aperta per rivealre la risposta
5. Game Master (se presente) legge il feedback appropriato

### Versione Digitale (Google Forms)

```
Domanda 1: Chi è il colpevole?
[ ] Francesca Morelli
[ ] Giulia Rossi
[ ] Dr. Leonardo Santini
[ ] Pietro Rossi

Domanda 2: Qual è il motivo esatto?
[ ] Vendetta per matrimoni falliti
[ ] Eredità - proteggere la quota dai 400 ai 50 milioni
[ ] Proteggere dalla manipolazione di Francesca

Domanda 3: Come è stato commesso?
[ ] Veleno nel vino
[ ] Ricina nel dessert
[ ] Ricina nel caffè
```

Utilizzare Google Forms con l'opzione "Mostra punteggio" per feedback immediato.

### Versione HTML/JavaScript

Script logico che:
- Conta le risposte corrette
- Sblocca suggerimenti basato su tempo/tentativi
- Mostra messaggio finale personalizzato
- Consente di leggere lo script di narrazione finale

### Timing e Attivazione Suggerimenti

```javascript
// Pseudocodice
if (tempo_trascorso >= 60 minuti OR tentativi_sbagliati >= 1) {
    sblocca_suggerimenti_livello_1();
}

if (tempo_trascorso >= 90 minuti OR tentativi_sbagliati >= 2) {
    sblocca_suggerimenti_livello_2();
}

if (tempo_trascorso >= 120 minuti OR tentativi_sbagliati >= 3) {
    sblocca_suggerimenti_livello_3();
}

mostra_risultato(punteggio_finale);
```

---

## Chiave di Verifica Rapida per il Game Master

| Elemento | Risposta Corretta |
|----------|---|
| Colpevole | Giulia Rossi |
| Motivo | Eredità: proteggere la quota dai 400 ai 50 milioni |
| Metodo | Ricina aggiunta al semifreddo prima del servizio |
| Indizio Principale | Video di sorveglianza mostra Giulia in cucina + email di Fermi sul testamento |
| Alibi Più Credibile (Falso) | Francesca: "Ero seduta accanto a lui tutto il tempo" |
| Alibi Più Credbile (Vero) | Marco: registrazioni telefoniche confermano la telefonata asiatica |
