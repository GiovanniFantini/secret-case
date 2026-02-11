# Albero Decisionale per il Sistema di Verifica - La Cattedra Vuota

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
DOMANDA 1: Chi e il colpevole?
  |
  +-- Risposta CORRETTA (B - Dr.ssa Elena Valdi)
  |   |
  |   +-> Registra: 1 punto (1/3)
  |   +-> Feedback: "Esatto! Avete identificato il colpevole."
  |   +-> Vai a DOMANDA 2
  |
  +-- Risposta ERRATA (A / C / D / E)
      |
      +-- Se e il Tentativo 1 di errore
      |   |
      |   +-> Registra: Errore 1
      |   +-> Sblocca: Suggerimenti Livello 1
      |   +-> Feedback specifico per opzione scelta (vedi tabella sotto)
      |   +-> Opzione: [Volete tentare di nuovo?] O [Continuate a Domanda 2?]
      |   +-> Se tentativo di nuovo: goto DOMANDA 1
      |   +-> Se continuate: goto DOMANDA 2
      |
      +-- Se e il Tentativo 2 di errore
      |   |
      |   +-> Registra: Errore 2
      |   +-> Sblocca: Suggerimenti Livello 2
      |   +-> Feedback: "Ancora no. Controllate specificamente: a) I pedaggi autostradali
      |       della notte dell'8 febbraio; b) Il badge usato alle 22:55 e dove si trovava
      |       il suo titolare; c) Chi ha un familiare che assume il farmaco trovato nel sangue."
      |   +-> Opzione: [Volete tentare di nuovo?] O [Continuate a Domanda 2?]
      |   +-> Se tentativo di nuovo: goto DOMANDA 1
      |   +-> Se continuate: goto DOMANDA 2
      |
      +-- Se e il Tentativo 3 di errore
          |
          +-> Registra: Errore 3
          +-> Sblocca: Suggerimenti Livello 3
          +-> Feedback: "Il colpevole e qualcuno che aveva un alibi a Milano ma poteva
              raggiungere Bologna in auto. Qualcuno che ha subito personalmente le molestie
              di Marini e aveva accesso alla digossina tramite un familiare."
          +-> goto DOMANDA 2

DOMANDA 2: Qual e il movente?
  |
  +-- Risposta CORRETTA (B - Proteggere vittime molestie + vendetta personale)
  |   |
  |   +-> Registra: 1 punto (totale N/3)
  |   +-> Feedback: "Corretto! Il movente nasce dalla volonta di proteggere le vittime
  |       e dalla sofferenza personale per anni di abusi impuniti."
  |   +-> Vai a DOMANDA 3
  |
  +-- Risposta ERRATA (A / C / D)
      |
      +-- Se e il Tentativo 1 di errore
      |   |
      |   +-> Registra: Errore 1
      |   +-> Sblocca: Suggerimenti Livello 1
      |   +-> Feedback specifico per opzione scelta (vedi tabella sotto)
      |   +-> Opzione: [Volete tentare di nuovo?] O [Continuate a Domanda 3?]
      |
      +-- Se e il Tentativo 2 di errore
      |   |
      |   +-> Registra: Errore 2
      |   +-> Sblocca: Suggerimenti Livello 2
      |   +-> Feedback: "Rileggete i documenti sulle molestie e il diario personale.
      |       Il colpevole ha subito le stesse molestie che stava vedendo ripetersi
      |       su una persona piu giovane e vulnerabile."
      |   +-> Opzione: [Volete tentare di nuovo?] O [Continuate a Domanda 3?]
      |
      +-- Se e il Tentativo 3 di errore
          |
          +-> Registra: Errore 3
          +-> Sblocca: Suggerimenti Livello 3
          +-> Feedback: "Il movente e personale e protettivo. Il colpevole ha subito
              molestie in prima persona e ha agito per proteggere un'altra vittima,
              dopo che tre denunce in otto anni sono state insabbiate dall'istituzione."
          +-> goto DOMANDA 3

DOMANDA 3: Come e stato commesso il crimine?
  |
  +-- Risposta CORRETTA (A - Digossina nell'espresso)
  |   |
  |   +-> Registra: 1 punto (totale N/3)
  |   +-> Feedback: "Esatto! La digossina e stata disciolta nell'espresso preparato
  |       con la moka della vittima, simulando un arresto cardiaco naturale."
  |   +-> Vai a CALCOLO PUNTEGGIO
  |
  +-- Risposta ERRATA (B / C / D)
      |
      +-- Se e il Tentativo 1 di errore
      |   |
      |   +-> Registra: Errore 1
      |   +-> Sblocca: Suggerimenti Livello 1
      |   +-> Feedback specifico per opzione scelta (vedi tabella sotto)
      |   +-> Opzione: [Volete tentare di nuovo?] O [Andiamo al punteggio?]
      |
      +-- Se e il Tentativo 2 di errore
      |   |
      |   +-> Registra: Errore 2
      |   +-> Sblocca: Suggerimenti Livello 2
      |   +-> Feedback: "Il rapporto tossicologico e la chiave. Confrontatelo con
      |       il contenuto gastrico e con le anomalie trovate nella cucina del
      |       dipartimento. Un oggetto era bagnato, un altro mancava."
      |   +-> Opzione: [Volete tentare di nuovo?] O [Andiamo al punteggio?]
      |
      +-- Se e il Tentativo 3 di errore
          |
          +-> Registra: Errore 3
          +-> Sblocca: Suggerimenti Livello 3
          +-> Feedback: "La digossina (farmaco cardiaco) e stata disciolta nell'espresso.
              La moka era stata lavata di recente, la tazzina era stata lavata e riposta,
              e tracce di digossina erano nel sifone del lavandino."
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
  |            Categoria: Indicazioni ampie (aree di focus senza soluzioni)
  |
  +-- Condizione: Giocatore ha giocato per 90 minuti OR ha 2 risposte sbagliate
  |     |
  |     +-> Sblocca LIVELLO 2 - Suggerimenti Specifici
  |            Categoria: Indicazioni con riferimenti documentali specifici
  |
  +-- Condizione: Giocatore ha giocato per 120 minuti OR ha 3 risposte sbagliate
        |
        +-> Sblocca LIVELLO 3 - Suggerimenti Quasi-Risolutivi
               Categoria: Indicazioni che conducono quasi direttamente alla risposta
```

## Tabella delle Risposte Dettagliata

### DOMANDA 1: Chi e il colpevole?

| Opzione | Risposta | Feedback Breve | Feedback Completo |
|---------|----------|----------------|-------------------|
| A) Prof. Carlo Bruni | Errata | Ha movente ma timing sbagliato | Bruni era nella Facolta la sera dell'omicidio, ma e entrato alle 19:00 e uscito alle 19:50 -- ore prima della morte di Marini. Era li per cancellare dal computer di Marini le prove del plagio che Marini usava per ricattarlo. La moglie mente per coprire il furto di dati, non un omicidio. L'impronta digitale sulla maniglia dello studio si spiega con la visita precedente, non con l'omicidio. |
| B) Dr.ssa Elena Valdi | **Corretta** | Investigatore eccezionale! | Avete identificato il colpevole. Elena Valdi ha guidato da Milano a Bologna nella notte dell'8 febbraio, e entrata nella Facolta con un badge non suo, ha preparato un espresso avvelenato con digossina e lo ha portato a Marini. I dati del Telepass, il badge, la chiave dell'hotel e il telefono spento confermano il suo spostamento. |
| C) Avv. Federica Conti | Errata | Era presente ma non e entrata | Federica era effettivamente in Via Zamboni la sera dell'omicidio, ma non e mai entrata nell'edificio. Era li per sorvegliare Marini nell'ambito di un'indagine privata sui beni occultati durante la separazione. Il suo alibi di Roma e falso, ma nasconde stalking, non omicidio. E lei che ha fatto la segnalazione anonima -- un'azione che un colpevole non farebbe mai. |
| D) Dr. Marco Santini | Errata | Aveva motivo ma era altrove | Santini aveva un motivo forte (le denunce insabbiate potevano distruggere la sua carriera), ma era in un edificio completamente diverso -- gli archivi dell'Ateneo in Via Belle Arti 42 -- dove distruggeva i fascicoli delle denunce. Paradossalmente, Santini voleva Marini vivo e silenzioso: un Marini morto e sotto i riflettori era il suo scenario peggiore. |
| E) Chiara Moretti e Tommaso Rossi | Errata | Vicini ma innocenti | Chiara e Tommaso erano in Piazza Verdi (a 200 metri dalla Facolta) dalle 20:30 alle 21:45 per scambiarsi le registrazioni audio delle molestie. Non sono mai entrati nella Facolta (nessun badge registrato). Marini era ancora vivo quando si sono incontrati. Mentono per proteggere l'inchiesta giornalistica e la fonte, non per coprire un omicidio. |

**Feedback Se Risposta Errata**: "Il colpevole e qualcuno che: a) aveva un alibi apparentemente solido in un'altra citta; b) poteva raggiungere Bologna in auto in poche ore; c) aveva accesso alla sostanza trovata nel sangue di Marini; d) aveva un motivo profondamente personale."

---

### DOMANDA 2: Qual e il movente?

| Opzione | Risposta | Feedback Breve | Feedback Completo |
|---------|----------|----------------|-------------------|
| A) Rivalita accademica e ricatto per plagio | Errata | Movente di Bruni, non del colpevole | Questa e la dinamica tra Bruni e Marini: Marini ricattava Bruni per il plagio. Ma Bruni non e il colpevole. Il vero movente riguarda un tipo di abuso molto piu personale e sistematico delle dinamiche di potere accademico. |
| B) Proteggere le vittime di molestie e vendetta personale per abusi subiti | **Corretta** | Esatto! Un atto disperato contro un sistema complice. | Elena ha subito molestie da Marini per tre anni. Ha visto lo stesso schema ripetersi su Chiara Moretti. Tre denunce insabbiate in otto anni l'hanno convinta che l'istituzione non avrebbe mai agito. Ha ucciso per proteggere Chiara e per la propria sofferenza irrisolta -- un atto in cui giustizia personale e protezione si mescolano inscindibilmente. |
| C) Interesse economico (polizza vita e beni nascosti) | Errata | Movente di Federica, non del colpevole | La polizza vita da 200.000 euro e i beni occultati riguardano Federica Conti, l'ex moglie. Ma Federica non e il colpevole -- faceva stalking per trovare prove nella causa di separazione. Il vero movente non e economico: e molto piu personale. |
| D) Coprire l'insabbiamento istituzionale delle denunce | Errata | Movente di Santini, non del colpevole | Santini aveva il terrore che le denunce insabbiate venissero alla luce, ma la sua reazione e stata distruggere i documenti, non uccidere Marini. Anzi, la morte di Marini ha amplificato l'attenzione mediatica, rendendo piu probabile la scoperta dell'insabbiamento -- esattamente l'opposto di cio che Santini voleva. |

**Feedback Se Risposta Errata**: "Il movente non e economico ne istituzionale. E personale. Cercate chi ha subito in prima persona le azioni piu gravi di Marini e chi stava vedendo la stessa storia ripetersi su qualcun altro."

---

### DOMANDA 3: Come e stato commesso il crimine?

| Opzione | Risposta | Feedback Breve | Feedback Completo |
|---------|----------|----------------|-------------------|
| A) Avvelenamento con digossina disciolta nell'espresso, simulando un arresto cardiaco | **Corretta** | Perfetto! Avete ricostruito il metodo. | Il colpevole ha schiacciato 20 compresse di Lanoxin 0,25 mg (digossina) e le ha disciolte nell'espresso preparato con la moka personale di Marini nella cucina del dipartimento. Un gesto perfettamente naturale nella cultura accademica italiana -- portare un caffe a un collega che lavora di sera. La digossina ha causato un arresto cardiaco in 1-2 ore, simulando una morte naturale in un soggetto gia a rischio cardiovascolare. |
| B) Soffocamento simulato da arresto cardiaco | Errata | No segni fisici | Il rapporto medico-legale non riporta alcun segno di asfissia, soffocamento o compressione. Non ci sono petecchie, lividi sul collo o sul viso, ne segni di lotta. La causa di morte e chimica, non meccanica. Controllate il rapporto tossicologico. |
| C) Iniezione letale durante il sonno | Errata | Nessun segno di iniezione | Il rapporto medico-legale non riporta alcun segno di puntura o iniezione su tutto il corpo. La sostanza e stata ingerita per via orale. Cosa ha ingerito Marini poco prima di morire? Controllate il contenuto gastrico. |
| D) Sostituzione dei farmaci per la pressione con sostanza tossica | Errata | Farmaci originali intatti | I farmaci personali di Marini (Cardioaspirin e atorvastatina) sono stati analizzati e risultano originali, non manomessi. La sostanza letale non proveniva dai suoi farmaci abituali, ma e stata introdotta attraverso un altro veicolo. Cosa c'era nel suo stomaco che non avrebbe dovuto esserci? |

**Feedback Se Risposta Errata**: "La chiave e nel rapporto tossicologico: quale sostanza e stata trovata? E nel contenuto gastrico: cosa aveva bevuto Marini? Poi guardate la cucina: cosa non torna tra gli oggetti trovati e l'ultimo pasto della vittima?"

---

## Risultati Finali e Messaggi

### Punteggio 3/3 - Investigatore Eccezionale

**Titolo**: **INVESTIGATORE ECCEZIONALE**

```
Complimenti straordinari! Avete risolto il caso con maestria assoluta.

Avete identificato correttamente:
- Il colpevole: Dr.ssa Elena Valdi
- Il movente: Proteggere le vittime di molestie e vendetta per anni di abusi subiti
- Il metodo: Digossina nell'espresso, simulando un arresto cardiaco

Avete colto ogni indizio significativo e costruito una teoria logica e coerente.
Non vi siete lasciati ingannare dalle false piste -- e in questo caso ce n'erano
molte, tutte credibili. Siete riusciti a distinguere chi mentiva per nascondere
l'omicidio da chi mentiva per nascondere qualcos'altro.

La Cattedra Vuota ha trovato i suoi investigatori.
```

### Punteggio 2/3 - Buon Investigatore

**Titolo**: **BUON INVESTIGATORE**

```
Ottimo lavoro! Avete colto l'essenza del caso e risolto la maggior parte del puzzle.

Avete identificato correttamente 2 delle 3 componenti critiche del caso.
Questo dimostra una comprensione solida delle dinamiche e una buona capacita
deduttiva.

In un caso come questo, dove tutti i sospetti mentono e le false piste sono
particolarmente credibili, arrivare a 2 risposte corrette e un risultato
eccellente.

Rileggete i documenti che vi hanno messo in difficolta: la risposta era li,
nascosta tra le righe.
```

### Punteggio 1/3 - Investigatore in Erba

**Titolo**: **INVESTIGATORE IN ERBA**

```
Non male per un primo tentativo! Avete catturato un elemento cruciale del caso.

Tuttavia, ci sono significativi buchi nella vostra indagine. Le false piste
di questo caso sono particolarmente ingannevoli -- quasi tutti i sospetti avevano
movente, mezzi e opportunita apparenti.

Consiglio per la prossima volta:
- Incrociate le prove digitali (Telepass, badge, GPS, hotel) con le prove fisiche
- Cercate le incongruenze tra il contenuto gastrico e gli oggetti trovati in cucina
- Chiedetevi: chi aveva accesso alla sostanza specifica trovata nel sangue?
- Non tutti i sospetti che mentono sono assassini

La verita era stratificata: sotto ogni bugia ce n'era un'altra.
```

### Punteggio 0/3 - Caso Irrisolto

**Titolo**: **CASO IRRISOLTO**

```
Il caso rimane un mistero. I vostri tentativi non hanno identificato correttamente
il colpevole, il movente o il metodo.

Non scoraggiatevi: questo e un caso costruito per ingannare. Ogni sospetto aveva
un segreto, ogni alibi era falso, e le false piste erano estremamente credibili.
Districare la verita richiedeva collegare prove da fonti molto diverse.

Consiglio per riprovare o per i prossimi casi:
1. Create una timeline dettagliata su carta grande -- gli orari sono fondamentali
2. Incrociate SEMPRE le prove digitali con le prove fisiche
3. Chiedetevi: chi mente per nascondere cosa? Non tutte le bugie nascondono
   lo stesso segreto
4. Seguite la scienza: il rapporto tossicologico e il punto di partenza

Consultate lo Script di Narrazione Finale per scoprire la verita completa.
La Cattedra Vuota ha ancora molto da insegnare.
```

---

## Note di Implementazione Tecnica

### Versione Fisica (Buste Numerate)

1. Stampare 3 buste numerate (1, 2, 3) con le domande stampate sulla busta
2. Ogni busta contiene cartoncini con le opzioni di risposta
3. Giocatore sceglie un cartoncino
4. Busta viene aperta per rivelare la risposta corretta e il feedback
5. Game Master (se presente) legge il feedback appropriato

### Versione Digitale (Google Forms)

```
Domanda 1: Chi e il colpevole?
[ ] Prof. Carlo Bruni
[ ] Dr.ssa Elena Valdi
[ ] Avv. Federica Conti
[ ] Dr. Marco Santini
[ ] Chiara Moretti e Tommaso Rossi

Domanda 2: Qual e il movente?
[ ] Rivalita accademica e ricatto per plagio
[ ] Proteggere le vittime di molestie e vendetta personale per abusi subiti
[ ] Interesse economico (polizza vita e beni nascosti)
[ ] Coprire l'insabbiamento istituzionale delle denunce

Domanda 3: Come e stato commesso il crimine?
[ ] Avvelenamento con digossina disciolta nell'espresso
[ ] Soffocamento simulato da arresto cardiaco
[ ] Iniezione letale durante il sonno
[ ] Sostituzione dei farmaci con sostanza tossica
```

Utilizzare Google Forms con l'opzione "Mostra punteggio" per feedback immediato.

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
|----------|-------------------|
| Colpevole | Dr.ssa Elena Valdi |
| Movente | Proteggere le vittime di molestie + vendetta personale per abusi subiti |
| Metodo | Digossina disciolta nell'espresso, simulando arresto cardiaco naturale |
| Indizio Principale | Telepass Milano-Bologna + badge Fabbri + digossina nel sangue e nel sifone |
| Falsa Pista Piu Credibile | Bruni nella Facolta alle 19:00 con impronta sulla maniglia |
| Alibi Piu Credibile (Vero) | Chiara + Tommaso: in Piazza Verdi per scambio registrazioni (whistleblowing) |
| Dilemma Morale | Elena e assassina ma anche vittima di un sistema che ha fallito per 8 anni |
