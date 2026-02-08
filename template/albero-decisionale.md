# Albero Decisionale per il Sistema di Verifica

---

## Struttura dell'Albero

Questo documento descrive il flusso logico del sistema di verifica, definendo come i giocatori procedono nella risoluzione e come il sistema risponde ai loro tentativi.

---

## Flusso Principale

```
INIZIO
  |
  v
[I giocatori dichiarano di voler tentare la soluzione]
  |
  v
DOMANDA 1: Chi e il colpevole?
  |
  +-- Risposta CORRETTA --> Registra punto (1/3) --> Vai a Domanda 2
  |
  +-- Risposta ERRATA --> Registra errore
        |
        +-- Tentativo 1 --> Sblocca Suggerimenti Livello 1
        |                    Invita a continuare l'indagine
        |                    Vai a Domanda 2 (comunque)
        |
        +-- Tentativo 2 --> Sblocca Suggerimenti Livello 2
        |                    Vai a Domanda 2
        |
        +-- Tentativo 3 --> Sblocca Suggerimenti Livello 3
                             Vai a Domanda 2

DOMANDA 2: Qual e il movente?
  |
  +-- Risposta CORRETTA --> Registra punto (N/3) --> Vai a Domanda 3
  |
  +-- Risposta ERRATA --> Registra errore --> Vai a Domanda 3

DOMANDA 3: Come e stato commesso il crimine?
  |
  +-- Risposta CORRETTA --> Registra punto (N/3)
  |
  +-- Risposta ERRATA --> Registra errore
  |
  v
CALCOLO PUNTEGGIO FINALE
  |
  v
[Mostra risultato e spiegazione]
  |
  FINE
```

---

## Gestione dei Suggerimenti

```
SISTEMA SUGGERIMENTI
  |
  +-- Condizione: 60 min trascorsi O 1 errore
  |     --> Rendi disponibile Livello 1
  |
  +-- Condizione: 90 min trascorsi O 2 errori
  |     --> Rendi disponibile Livello 2
  |
  +-- Condizione: 120 min trascorsi O 3 errori
        --> Rendi disponibile Livello 3
```

---

## Tabella delle Risposte

### Domanda 1 - Chi e il colpevole?

| Opzione | Risposta | Feedback |
|---------|----------|----------|
| A) [Nome] | Errata | [Motivo per cui non e il colpevole - breve] |
| B) [Nome] | **Corretta** | [Conferma] |
| C) [Nome] | Errata | [Motivo] |
| D) [Nome] | Errata | [Motivo] |

### Domanda 2 - Qual e il movente?

| Opzione | Risposta | Feedback |
|---------|----------|----------|
| A) [Movente] | Errata | [Perche non e questo il movente] |
| B) [Movente] | **Corretta** | [Conferma] |
| C) [Movente] | Errata | [Perche non e questo] |

### Domanda 3 - Come e stato commesso?

| Opzione | Risposta | Feedback |
|---------|----------|----------|
| A) [Metodo] | Errata | [Perche non e questo il metodo] |
| B) [Metodo] | **Corretta** | [Conferma] |
| C) [Metodo] | Errata | [Perche non e questo] |

---

## Risultati Finali

| Punteggio | Titolo | Messaggio |
|-----------|--------|-----------|
| 3/3 | Investigatore Eccezionale | "Complimenti! Avete risolto il caso in modo brillante. Ogni indizio e stato colto e collegato con maestria." |
| 2/3 | Buon Investigatore | "Ottimo lavoro! Avete colto l'essenza del caso, anche se qualche dettaglio vi e sfuggito." |
| 1/3 | Investigatore in Erba | "Non male per un primo tentativo. Rileggete le prove con occhio piu critico." |
| 0/3 | Caso Irrisolto | "Il caso resta un mistero. Consultate la soluzione completa per scoprire cosa vi e sfuggito." |

---

## Note di Implementazione

- In versione fisica: usare buste numerate per le risposte
- In versione digitale: usare logica condizionale (Google Forms, Typeform, o HTML/JS)
- Tenere traccia del tempo trascorso per attivare i suggerimenti appropriati
- Fornire sempre un feedback costruttivo, mai punitivo
