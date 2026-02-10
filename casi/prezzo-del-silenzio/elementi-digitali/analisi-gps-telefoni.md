# ANALISI GPS E LOCALIZZAZIONE TELEFONI

---

## Intestazione

| Campo | Dettaglio |
|-------|-----------|
| Protocollo | GPS-2025/TOR/0187 |
| Fonte | Tabulati telefonici (Ordinanza PM) — Operatori TIM, Vodafone, WindTre |
| Analista | Isp. Dott.ssa Chiara Basso, Polizia Postale |
| Data analisi | 26-27 gennaio 2025 |

---

## Metodologia

L'analisi si basa sulla **localizzazione tramite celle telefoniche** (Cell-ID). Ogni telefono cellulare si connette alla cella (antenna) più vicina. La precisione varia:

| Zona | Precisione stimata |
|------|-------------------|
| Centro urbano (alta densità celle) | 100-300 metri |
| Periferia | 500-1000 metri |
| Zona rurale | 1-3 km |

**Nota:** La localizzazione GPS nativa del telefono (più precisa, 5-10 metri) non è disponibile per i telefoni non sequestrati senza l'analisi diretta del dispositivo.

---

## Telefono 1 — Luca Ferraris (iPhone 15 Pro — TIM)

**Numero:** +39 331 456 7890

| Ora | Cella connessa | Zona coperta | Interpretazione |
|-----|----------------|--------------|-----------------|
| 15:00-15:30 | TO-CEN-042 | Via Nizza / Eataly | Spesa |
| 16:28 | TO-CRO-018 | Via Principe Amedeo / Crocetta | Rientro a casa |
| 17:30-17:38 | TO-CRO-018 | Via Principe Amedeo | Telefonata con Sara |
| 17:45 | TO-CRO-018 | Via Principe Amedeo | Ultimo backup Tresorit |
| 18:00-20:35 | TO-CRO-018 | Via Principe Amedeo | A casa (cena con Valentina) |
| **21:58** | **TO-CRO-018** | **Via Principe Amedeo** | **Factory reset — ultimo segnale prima del reset** |
| Dopo 21:58 | **Nessun segnale** | — | Telefono resettato — non più connesso |

---

## Telefono 2 — Andrea Ferro (iPhone 14 Pro Max — Vodafone)

**Numero:** +39 348 123 4567

| Ora | Cella connessa | Zona coperta | Interpretazione |
|-----|----------------|--------------|-----------------|
| 08:15-19:20 | TO-CFR-007 | Corso Francia / Sede PharmaNova | In ufficio |
| **19:22-19:40** | **TO-CFR-007 → TO-CEN-031** | **Corso Francia → Centro** | **In spostamento** |
| **19:45-20:10** | **TO-CEN-031 → TO-CRO-015** | **Centro → zona Crocetta** | **In spostamento verso Crocetta** |
| **20:50** | **TO-CRO-018** | **Via Principe Amedeo / Crocetta** | **NELLA ZONA DI FERRARIS** |
| **21:00-22:05** | **TO-CRO-018** | **Via Principe Amedeo** | **STAZIONARIO — NELLA ZONA DI FERRARIS** |
| **22:08** | **TO-CRO-018 → TO-SSA-009** | **Crocetta → San Salvario** | **In spostamento** |
| **22:15** | **TO-SSA-009 → TO-CEN-025** | **San Salvario → Piazza Carignano** | **Direzione ristorante** |
| 22:20-23:30 | TO-CEN-025 | Piazza Carignano / Il Cambio | Al ristorante |
| 23:35 | TO-CEN-025 → TO-CGA-003 | Centro → Corso Galileo Ferraris | Rientro a casa |

> **DATO CRITICO:** Il telefono di Ferro è connesso alla cella **TO-CRO-018** (zona Via Principe Amedeo / Crocetta) dalle **20:50 alle 22:05** — esattamente il periodo in cui l'assassino era nell'appartamento di Ferraris. Ferro dichiara di essere stato *"in ufficio in Corso Francia fino alle 19:45"* e poi *"al ristorante dalle 20:00-20:15"*. Il GPS smentisce entrambe le dichiarazioni:
>
> 1. È uscito dall'ufficio alle 19:22 (confermato dal badge)
> 2. Alle 20:50 era nella zona di Ferraris (non al ristorante)
> 3. Alle 22:15 si sposta verso il ristorante (arriva alle 22:20)

---

## Telefono 3 — Sara Ferraris (iPhone 13 — TIM)

**Numero:** +39 339 876 5432

| Ora | Cella connessa | Zona coperta | Interpretazione |
|-----|----------------|--------------|-----------------|
| 17:25-17:38 | TO-SSE-012 | Via San Secondo | Telefonata con Luca (da casa) |
| 18:00-23:59 | TO-SSE-012 | Via San Secondo | **A casa tutta la sera** |
| 00:00-08:00 | TO-SSE-012 | Via San Secondo | A casa tutta la notte |

> **Interpretazione:** Il telefono di Sara resta connesso alla stessa cella per tutta la sera e la notte. **Alibi confermato.**

---

## Telefono 4 — Valentina Ferraris (iPhone 12 — WindTre)

**Numero:** +39 320 654 3210

| Ora | Cella connessa | Zona coperta | Interpretazione |
|-----|----------------|--------------|-----------------|
| 17:50 | TO-CRO-018 | Via Principe Amedeo | In spostamento verso casa del padre |
| 18:00-20:35 | TO-CRO-018 | Via Principe Amedeo | A casa del padre |
| **20:40-20:55** | **TO-CRO-018 → TO-CEN-028** | **Crocetta → Centro** | **In spostamento (a piedi)** |
| **21:00** | **TO-CEN-028 → TO-GAR-005** | **Centro → Via Garibaldi** | **Arrivo dal fidanzato** |
| 21:00-08:00 | TO-GAR-005 | Via Garibaldi | Dal fidanzato tutta la notte |

> **Interpretazione:** Valentina esce dalla zona di Ferraris alle 20:40 e arriva in Via Garibaldi alle 21:00. **Alibi confermato.** Era uscita dall'appartamento prima dell'arrivo dell'assassino.

---

## Telefono 5 — Vittorio Mazza (Samsung Galaxy — TIM)

| Ora | Cella connessa | Zona coperta | Interpretazione |
|-----|----------------|--------------|-----------------|
| 18:30-00:15 | TO-VEM-003 | Corso Vittorio Emanuele II | **In studio legale tutta la sera** |

> **Interpretazione:** **Alibi confermato.** Coerente con badge edificio e telecamere.

---

## Telefono 6 — Paolo Baldini (telefono di servizio — Vodafone)

| Ora | Cella connessa | Zona coperta | Interpretazione |
|-----|----------------|--------------|-----------------|
| 18:00-20:55 | TO-QUE-001 | Via Grasso / Questura | In ufficio |
| **21:00-21:25** | **TO-AUR-008** | **Aurora / Borgo Dora** | **Spostamento** |
| **21:30-22:45** | **TO-AUR-008** | **Borgo Dora** | **Stazionario — zona bar "Il Rifugio"** |
| 22:50-02:00 | TO-QUE-001 | Questura | Rientro in ufficio |

> **Interpretazione:** Il telefono di Baldini si sposta in zona Aurora/Borgo Dora tra le 21:00 e le 22:45, coerente con la sua dichiarazione di aver incontrato l'informatore Bensaid al bar "Il Rifugio" verso le 21:30. **Non era nella zona di Ferraris.** Il buco nell'alibi è spiegato dall'incontro con l'informatore, non dalla presenza sulla scena del crimine.

---

## Riepilogo Posizioni alle 21:30 (Momento Critico)

| Persona | Posizione GPS | Zona | Compatibilità con alibi |
|---------|---------------|------|------------------------|
| **Andrea Ferro** | **TO-CRO-018** | **Via Principe Amedeo** | **INCOMPATIBILE** — dichiara di essere al ristorante |
| Sara Ferraris | TO-SSE-012 | Via San Secondo | COMPATIBILE |
| Valentina Ferraris | TO-GAR-005 | Via Garibaldi | COMPATIBILE |
| Vittorio Mazza | TO-VEM-003 | Corso V. Emanuele II | COMPATIBILE |
| Paolo Baldini | TO-AUR-008 | Aurora / Borgo Dora | PARZIALMENTE COMPATIBILE |

> **Nota per i giocatori:** Solo il telefono di Ferro si trova nella zona dell'appartamento di Ferraris durante il momento critico del delitto. Tutti gli altri sospetti sono altrove. Il GPS non mente.

---

*Isp. Dott.ssa Chiara Basso*
*Polizia Postale — Sezione di Torino*
*Analisi depositata il 27/01/2025*
