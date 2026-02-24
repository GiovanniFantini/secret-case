# COMANDO PROVINCIALE CARABINIERI DI BRESCIA — ANALISI DATI GPS / POSIZIONAMENTO CELLULARE

## Reparto Investigazioni Scientifiche — Laboratorio Analisi Digitali

---

**Protocollo:** BS-2026-0147/GPS-1
**Data analisi:** 19-21 gennaio 2026
**Perito analista:** Ing. Paolo Ceruti, Consulente Tecnico del P.M., Sezione Telematica, Carabinieri ROS Brescia
**Oggetto:** Analisi dei dati GPS e di posizionamento cellulare relativi a n. 7 soggetti — sera e notte tra il 16 e il 17 gennaio 2026
**Luogo di riferimento:** Clinica Mente Chiara, Via del Santuario 12, Monte Isola, 25050 (BS)
**Coordinate clinica:** 45°43'18"N, 10°04'52"E
**Magistrato richiedente:** Dott.ssa Francesca Molinari, Sostituto Procuratore

---

## 1. Metodologia

I dati di posizionamento sono stati acquisiti da tre fonti complementari:

1. **GPS integrato nei dispositivi mobili** — dati estratti dai telefoni sequestrati (precisione: 5-8 metri in ambienti esterni, 15-25 metri in ambienti interni a causa dell'attenuazione del segnale satellitare)
2. **Triangolazione celle telefoniche** — dati forniti dagli operatori TIM, Vodafone e WindTre tramite la BTS BS-MI-0247 di Peschiera Maraglio (precisione: 200-500 metri — copertura dell'intera isola da un'unica cella)
3. **Rete Wi-Fi della clinica** — log di connessione dei dispositivi ai sei access point distribuiti nella struttura (precisione: 10-20 metri, basata sulla potenza del segnale RSSI)

> **Nota sulla geolocalizzazione a Monte Isola:** L'isola è servita da un'unica BTS cellulare, il che rende la triangolazione praticamente inutile per distinguere posizioni all'interno dell'isola. L'analisi si basa pertanto principalmente sui dati **GPS** (quando disponibili) e sulla **rete Wi-Fi** della clinica. L'analisi combinata GPS + Wi-Fi consente di determinare l'**edificio** e l'**area interna** con ragionevole affidabilità.
>
> **Condizioni meteo:** La sera del 16 gennaio 2026, Monte Isola era investita da un forte temporale lacustre con vento da nord-est (45-60 km/h), pioggia intensa e visibilità ridotta. Le condizioni meteo rendevano impossibili i collegamenti in battello con la terraferma tra le 18:00 del 16 gennaio e le 09:00 del 17 gennaio, isolando di fatto tutte le persone presenti sull'isola.

---

## 2. Planimetria di Riferimento — Clinica Mente Chiara

### Piano Terra (PT)
```
┌─────────────────────────────────────────────────────┐
│                                                       │
│   ┌─────────┐  ┌──────────┐  ┌──────────────────┐   │
│   │Reception│  │  Cucina  │  │   Sala della     │   │
│   │ AP-01   │  │  (no AP) │  │   Quiete         │   │
│   └─────────┘  └──────────┘  │   AP-02          │   │
│                               └──────────────────┘   │
│   ┌──────────────────┐  ┌──────────────────────┐     │
│   │ Studi medici     │  │ Archivio /           │     │
│   │ Postaz. inferm.  │  │ Amministrazione      │     │
│   │ AP-02            │  │ AP-03 + Telecamera   │     │
│   └──────────────────┘  └──────────────────────┘     │
│                                                       │
└─────────────────────────────────────────────────────┘
```

### Primo Piano (1P)
```
┌─────────────────────────────────────────────────────┐
│                                                       │
│   ┌──────────────────┐  ┌──────────────────────┐     │
│   │ Ala pazienti     │  │ Ala ospiti /         │     │
│   │ Suite Aldrovandi │  │ personale            │     │
│   │ AP-04            │  │ AP-05               │     │
│   └──────────────────┘  │ Camera Magnani       │     │
│                          │ Camera Tommaso       │     │
│   ┌──────────────────┐  │ Camera Brambilla     │     │
│   │ Biblioteca /     │  │ Camera Stein         │     │
│   │ Soggiorno        │  │ Camera Coletti       │     │
│   │ AP-06            │  └──────────────────────┘     │
│   └──────────────────┘                                │
│                                                       │
└─────────────────────────────────────────────────────┘
```

---

## 3. Dati di Posizionamento per Soggetto

### 3.1 DOTT.SSA MARTA COLETTI

**Dispositivo:** Samsung Galaxy S22 — Operatore: Vodafone
**Camera assegnata:** Camera ospiti n. 3, primo piano (AP-05)

| Orario | Posizione GPS | Access Point Wi-Fi | Area stimata | Precisione |
|--------|--------------|-------------------|-------------|-----------|
| 18:00 - 20:10 | 45°43'18.2"N, 10°04'52.1"E | AP-02 | Piano terra — Studi medici | ±15 m |
| **20:15 - 22:20** | **45°43'18.4"N, 10°04'51.8"E** | **AP-03** | **Piano terra — Archivio** | **±12 m** |
| 22:25 - 22:40 | Spostamento rilevato | AP-03 → AP-05 | Transito verso primo piano | — |
| 22:45 - 06:00 | 45°43'18.1"N, 10°04'52.4"E | AP-05 | Primo piano — Camera ospiti | ±15 m |

> **Analisi:** La Dott.ssa Coletti risulta stabilmente nell'area dell'archivio (piano terra, ala amministrativa) dalle 20:15 alle 22:20. Questo dato è **confermato** dalla telecamera di sicurezza dell'archivio. La distanza dall'archivio alla cucina è di circa 35 metri, e dalla cucina alla Sala della Quiete ulteriori 15 metri. Sarebbe stato impossibile raggiungere queste aree e tornare senza essere ripresa dalla telecamera dell'archivio in uscita. **Alibi confermato.**

---

### 3.2 TOMMASO VENTURI

**Dispositivo:** iPhone 15 Pro — Operatore: WindTre
**Camera assegnata:** Camera ospiti n. 1, primo piano (AP-05)

| Orario | Posizione GPS | Access Point Wi-Fi | Area stimata | Precisione |
|--------|--------------|-------------------|-------------|-----------|
| 18:00 - 19:30 | 45°43'18.0"N, 10°04'52.0"E | AP-01 | Piano terra — Reception | ±12 m |
| 19:30 - 19:45 | Spostamento rilevato | AP-01 → AP-05 | Transito verso primo piano | — |
| **19:45 - 01:30** | **45°43'18.3"N, 10°04'52.6"E** | **AP-05** | **Primo piano — Camera ospiti** | **±15 m** |
| 01:30 - 07:00 | 45°43'18.3"N, 10°04'52.6"E | AP-05 | Primo piano — Camera ospiti | ±15 m |

> **Analisi:** Il dispositivo di Tommaso resta nella sua camera ospiti al primo piano senza interruzioni dalle 19:45 alle 01:30. I log del software DaVinci Resolve confermano attività di editing continua con salvataggi ogni 5 minuti. Il traffico Wi-Fi mostra un utilizzo di banda elevato e costante, coerente con operazioni di rendering video. **Nessuna interruzione rilevata. Alibi confermato.**

---

### 3.3 PROF. RICCARDO STEIN

**Dispositivo:** Samsung Galaxy S23 — Operatore: Deutsche Telekom (roaming)
**Camera assegnata:** Camera ospiti n. 4, primo piano (AP-05)

| Orario | Posizione GPS | Access Point Wi-Fi | Area stimata | Precisione |
|--------|--------------|-------------------|-------------|-----------|
| 18:00 - 19:50 | 45°43'18.2"N, 10°04'52.2"E | AP-02 | Piano terra — Studi medici | ±15 m |
| 19:50 - 20:00 | Spostamento rilevato | AP-02 → AP-06 | Transito verso primo piano | — |
| **20:00 - 00:00** | **45°43'18.5"N, 10°04'52.8"E** | **AP-06** | **Primo piano — Biblioteca** | **±12 m** |
| 00:05 - 00:15 | Spostamento rilevato | AP-06 → AP-05 | Transito nel corridoio | — |
| 00:15 - 07:00 | 45°43'18.3"N, 10°04'52.5"E | AP-05 | Primo piano — Camera ospiti | ±15 m |

> **Analisi:** Il Prof. Stein risulta nell'area della biblioteca al primo piano per l'intera fascia critica (20:00 - 00:00). L'attività di rete mostra navigazione intermittente e la chiamata alla linea di assistenza per il gioco d'azzardo (20:30, durata 22 min). Tuttavia, si noti che la biblioteca è al primo piano e la cucina è al piano terra: Stein avrebbe potuto scendere al piano terra, ma ciò avrebbe comportato uno spostamento rilevabile dall'access point (passaggio da AP-06 a AP-02). **Non risultano cambi di access point tra le 20:00 e le 00:00.** Alibi sostanziale.

---

### 3.4 LUCA BRAMBILLA

**Dispositivo:** iPhone 15 Pro Max — Operatore: Vodafone
**Camera assegnata:** Camera ospiti n. 2, primo piano (AP-05)

| Orario | Posizione GPS | Access Point Wi-Fi | Area stimata | Precisione |
|--------|--------------|-------------------|-------------|-----------|
| 18:00 - 20:10 | 45°43'18.1"N, 10°04'52.0"E | AP-01 / AP-02 | Piano terra — varie aree | ±15 m |
| 20:10 - 20:15 | Spostamento rilevato | AP-02 → AP-05 | Transito verso primo piano | — |
| **20:15 - 23:30** | **45°43'18.3"N, 10°04'52.5"E** | **AP-05** | **Primo piano — Camera ospiti** | **±15 m** |
| 23:30 - 07:00 | 45°43'18.3"N, 10°04'52.5"E | AP-05 | Primo piano — Camera ospiti | ±15 m |

> **Analisi:** Il dispositivo di Brambilla resta stabilmente al primo piano (area camere ospiti) dalle 20:15 alle 23:30. I tabulati telefonici confermano **7 chiamate di lavoro consecutive** nella stessa fascia oraria. Il microfono nascosto di Tommaso Venturi nel corridoio del primo piano ha registrato la voce di Brambilla provenire dalla sua camera. **Alibi tripamente confermato (GPS/Wi-Fi + tabulati + registrazione audio).**

---

### 3.5 SARA MAGNANI

**Dispositivo:** iPhone 14 — Operatore: TIM
**Camera assegnata:** Camera personale infermiera, primo piano (AP-05)

| Orario | Posizione GPS | Access Point Wi-Fi | Area stimata | Precisione |
|--------|--------------|-------------------|-------------|-----------|
| 18:00 - 19:00 | 45°43'18.4"N, 10°04'52.7"E | AP-04 | Primo piano — Ala pazienti | ±15 m |
| 19:00 - 20:00 | 45°43'18.2"N, 10°04'52.1"E | AP-02 | Piano terra — Ala terapeutica / Cucina | ±20 m |
| 20:00 - 20:15 | 45°43'18.3"N, 10°04'52.5"E | AP-05 | Primo piano — Camera Magnani | ±15 m |
| 20:15 - 20:28 | 45°43'18.2"N, 10°04'52.2"E | AP-02 | Piano terra — **Postazione infermieristica** | ±15 m |
| **20:28** | **45°43'18.2"N, 10°04'52.2"E** | **AP-02** | **Piano terra — Postaz. infermieristica** | **±15 m** |
| **20:28 in poi** | **NESSUN DATO GPS** | **OFFLINE** | **POSIZIONE SCONOSCIUTA** | **—** |
| | | | | |
| 06:15 (17/01) | 45°43'18.3"N, 10°04'52.5"E | AP-05 | Primo piano — Camera Magnani | ±15 m |

> **DATO CRITICO — ANALISI DETTAGLIATA:**
>
> Il telefono di Sara Magnani fornisce l'ultimo fix GPS alle ore **20:28** del 16 gennaio 2026, con coordinate corrispondenti all'area della postazione infermieristica al piano terra. Al momento dell'ultimo rilevamento:
>
> - **Livello batteria: 73%**
> - **Stato connessione Wi-Fi: connesso ad AP-02**
> - **Stato connessione cellulare: agganciato a BTS BS-MI-0247**
> - **Ultimo SMS ricevuto: 20:28, dalla sorella Giulia ("Come stai?")**
>
> Dopo le 20:28, il dispositivo **non trasmette più alcun segnale** — né GPS, né Wi-Fi, né cellulare. Il telefono si riattiva alle **06:15 del 17 gennaio** nella camera di Magnani al primo piano, con una batteria al **71%**.
>
> **Valutazione tecnica:**
>
> Un telefono iPhone 14 con il **73% di batteria residua non si spegne spontaneamente** per esaurimento energetico. I parametri tecnici del dispositivo sono i seguenti:
>
> | Parametro | Valore |
> |-----------|--------|
> | Soglia di spegnimento automatico iOS | 1% (o temperatura estrema < -10°C) |
> | Batteria al momento della disconnessione | 73% |
> | Temperatura ambiente stimata nella clinica | 20-22°C |
> | Differenza batteria 20:28 (16/01) → 06:15 (17/01) | 73% → 71% = -2% in ~10 ore |
> | Consumo medio iPhone 14 spento | ~0,2%/ora |
> | Consumo medio iPhone 14 in standby (schermo off) | ~1-2%/ora |
> | Consumo medio iPhone 14 in modalità aereo | ~0,5%/ora |
>
> Il calo di **soli 2 punti percentuali** in circa 10 ore è coerente con un dispositivo **completamente spento** (non in standby né in modalità aereo, dove il consumo sarebbe stato superiore). Questo indica che il telefono è stato **manualmente spento** dall'utente alle 20:28 e **manualmente riacceso** alle 06:15.
>
> **Implicazione investigativa:** Sara Magnani ha spento deliberatamente il proprio telefono alle 20:28 del 16 gennaio 2026. Da quel momento, i suoi spostamenti all'interno della clinica sono **non tracciabili**. Nella finestra temporale tra le 20:28 e le 06:15, la Magnani avrebbe potuto trovarsi in **qualsiasi area della clinica**, inclusa la cucina (dove veniva preparata la camomilla per il Dott. Venturi) e il corridoio esterno alla Sala della Quiete.
>
> **Confronto con la dichiarazione:** La Magnani ha dichiarato nell'interrogatorio che "il telefono si è scaricato durante la sera". Questa affermazione è **tecnicamente falsa**. Un telefono al 73% di batteria non si scarica. Il dato del 71% al riavvio conferma inoltre che il dispositivo era **spento**, non semplicemente disconnesso.

---

### 3.6 BEATRICE ALDROVANDI

**Dispositivo:** iPhone 12 Mini — Operatore: TIM
**Alloggio:** Suite paziente, primo piano (AP-04)

| Orario | Posizione GPS | Access Point Wi-Fi | Area stimata | Precisione |
|--------|--------------|-------------------|-------------|-----------|
| 18:00 - 20:25 | 45°43'18.4"N, 10°04'52.7"E | AP-04 | Primo piano — Suite Aldrovandi | ±15 m |
| **20:30 - 08:00** | **45°43'18.4"N, 10°04'52.7"E** | **AP-04** | **Primo piano — Suite Aldrovandi** | **±15 m** |

> **Analisi:** Il dispositivo di Beatrice Aldrovandi resta nella sua suite al primo piano per l'intera notte, senza alcun cambiamento di posizione. Il telefono è connesso ma non mostra attività utente dopo le 20:30, coerente con la somministrazione del sedativo notturno (Lorazepam 2,5 mg alle 20:25, come documentato nel registro farmacologico). A 68 anni e con diagnosi di deterioramento cognitivo, sotto l'effetto del sedativo, la Sig.ra Aldrovandi non avrebbe potuto lasciare la sua suite. **Alibi confermato.**

---

### 3.7 DOTT. ALESSANDRO VENTURI (VITTIMA)

**Dispositivo:** iPhone 15 — Operatore: TIM
**Alloggio:** Appartamento direttore (piano terra, adiacente alla clinica — non coperto da Wi-Fi clinica)

| Orario | Posizione GPS | Access Point Wi-Fi | Area stimata | Precisione |
|--------|--------------|-------------------|-------------|-----------|
| 18:00 - 18:45 | 45°43'18.2"N, 10°04'52.1"E | AP-02 | Piano terra — Studi medici | ±15 m |
| 18:45 - 20:50 | Varie posizioni | AP-01 / AP-02 | Piano terra — varie aree | ±20 m |
| 20:50 - 21:05 | 45°43'18.2"N, 10°04'52.1"E | AP-02 | Piano terra — Ala terapeutica | ±15 m |
| **21:05 - 21:12** | **45°43'18.2"N, 10°04'52.0"E** | **AP-02** | **Piano terra — Sala della Quiete** | **±12 m** |
| **21:12 in poi** | **45°43'18.2"N, 10°04'52.0"E** | **AP-02** | **Sala della Quiete — NESSUNA ATTIVITA' UTENTE** | **±12 m** |

> **Analisi:** Il Dott. Venturi entra nella Sala della Quiete alle 21:05 (confermato dal log del tastierino elettronico — codice 7493#). L'ultima interazione con il telefono avviene alle 21:12 (lettura di un'email). Dopo tale orario, il telefono resta acceso e connesso ma non viene più toccato, coerente con il decesso della vittima stimato tra le 21:15 e le 22:00. Il dispositivo è rimasto nella Sala della Quiete fino al suo sequestro il mattino seguente.

---

## 4. Mappa Riepilogativa — Posizioni alle 20:30 del 16 Gennaio 2026

```
CLINICA MENTE CHIARA — POSIZIONI ALLE 20:30

PRIMO PIANO:
┌────────────────────────────────────────────────────────┐
│                                                          │
│   [ALDROVANDI]        [TOMMASO]  [BRAMBILLA]            │
│   Suite - AP-04       Camera    Camera                   │
│   Sotto sedativo      Editing   Al telefono              │
│   CONFERMATO          AP-05     AP-05                    │
│                       CONFERM.  CONFERMATO               │
│                                                          │
│   [STEIN]             [COLETTI rientro ~22:25]          │
│   Biblioteca          [MAGNANI rientro ~06:15]          │
│   AP-06               AP-05                              │
│   CONFERMATO                                             │
│                                                          │
└────────────────────────────────────────────────────────┘

PIANO TERRA:
┌────────────────────────────────────────────────────────┐
│                                                          │
│   [Reception]    [Cucina]      [SALA DELLA QUIETE]      │
│   AP-01          (non coperta)  AP-02                    │
│                                 [VENTURI entra 21:05]    │
│                                                          │
│   [Post. inferm.]              [COLETTI]                │
│   AP-02                         Archivio - AP-03         │
│   [MAGNANI ultimo                CONFERMATA da camera    │
│    segnale 20:28]                                        │
│   POI: ???                                               │
│                                                          │
└────────────────────────────────────────────────────────┘
```

> **Nota critica sulla cucina:** La cucina della clinica **non è coperta da access point Wi-Fi** né da telecamere di sorveglianza. È posizionata tra la reception (AP-01) e l'ala terapeutica (AP-02). Un dispositivo nella cucina potrebbe agganciare sia AP-01 sia AP-02, rendendo la localizzazione ambigua. Tuttavia, poiché il telefono di Magnani era **spento**, la sua presenza in cucina non può essere né confermata né esclusa tramite dati digitali.

---

## 5. Analisi della Finestra Temporale Critica

### 5.1 Timeline Ricostruita (20:00 — 22:00)

| Orario | Evento | Fonte |
|--------|--------|-------|
| 20:00 | Aldrovandi in suite. Coletti entra in archivio alle 20:15. | Wi-Fi, telecamera |
| 20:15 | Brambilla in camera, inizia le telefonate. | Wi-Fi, tabulati |
| 20:15 | Coletti nell'archivio (confermata da telecamera). | Telecamera |
| 20:25 | Somministrazione Lorazepam ad Aldrovandi (registro farmaci). | Registro clinico |
| 20:28 | **Ultimo segnale dal telefono di Magnani. Batteria 73%.** | Wi-Fi, GPS, BTS |
| ~20:28 | **Magnani spegne il telefono. Da qui: POSIZIONE IGNOTA.** | Analisi tecnica |
| 20:30 | Stein in biblioteca, chiama linea gioco d'azzardo. | Wi-Fi, tabulati |
| ~20:45 | **[LACUNA] — La camomilla viene preparata in cucina.** | — |
| ~21:00 | **[LACUNA] — La camomilla viene consegnata alla Sala della Quiete.** | — |
| 21:05 | Venturi entra nella Sala della Quiete (codice 7493#). | Tastierino |
| 21:07 | Porta chiusa dall'interno. | Tastierino |
| 21:12 | Ultima attività sul telefono di Venturi (lettura email). | Wi-Fi |
| 21:15-22:00 | **Decesso stimato del Dott. Venturi.** | Rapporto medico-legale |
| 22:18 | Coletti esce dall'archivio. | Telecamera |
| 06:15 (17/01) | Telefono di Magnani si riattiva. Batteria 71%. | Wi-Fi, BTS |

### 5.2 Soggetti con Posizione Verificata nella Finestra 20:30 — 22:00

| Soggetto | Posizione | Verifica | Poteva accedere alla cucina? |
|----------|-----------|----------|------------------------------|
| Coletti | Archivio (PT) | Telecamera | **No** — ripresa continuamente |
| Tommaso | Camera ospiti (1P) | Wi-Fi + log DaVinci | **Improbabile** — traffico continuo |
| Stein | Biblioteca (1P) | Wi-Fi + tabulati | **Teoricamente sì** — ma nessun cambio AP |
| Brambilla | Camera ospiti (1P) | Wi-Fi + tabulati + microfono | **No** — confermato da 3 fonti |
| Aldrovandi | Suite (1P) | Wi-Fi + sedativo | **No** — sotto sedativo |
| **Magnani** | **SCONOSCIUTA** | **Telefono spento** | **Sì — posizione non tracciabile** |

---

## 6. Conclusioni

L'analisi GPS e di posizionamento cellulare evidenzia che nella finestra temporale critica (20:30 — 22:00 del 16 gennaio 2026), **Sara Magnani è l'unica persona** la cui posizione non è verificabile. Tutti gli altri soggetti presenti nella clinica hanno una posizione confermata da almeno una fonte digitale indipendente.

Lo spegnimento del telefono della Magnani alle 20:28 — con una batteria al 73% — costituisce un'anomalia tecnica significativa che contraddice la sua dichiarazione ("il telefono si è scaricato"). L'analisi del consumo di batteria (2% in 10 ore) conferma che il dispositivo è stato **manualmente spento**, non semplicemente disconnesso o esaurito.

La cucina della clinica — luogo in cui veniva abitualmente preparata la camomilla serale del Dott. Venturi — non è coperta da telecamere né da access point Wi-Fi dedicati. La preparazione e consegna della bevanda avvelenata avrebbe potuto avvenire in quest'area senza lasciare tracce digitali, a condizione che l'autore avesse preventivamente disattivato il proprio dispositivo di comunicazione.

---

Brescia, 21 gennaio 2026

**Ing. Paolo Ceruti**
Consulente Tecnico del Pubblico Ministero
Sezione Telematica — Carabinieri ROS Brescia

---

*Documento riservato — Atti di indagine ex art. 329 c.p.p.*
*Protocollo BS-2026-0147/GPS-1*
