# AUDIT INFRASTRUTTURALE — RETI, SICUREZZA E SISTEMI IT
**Tessari Rigenerazione S.r.l. — Dipartimento Amministrativo**
**Aggiornamento semestrale: Gennaio 2025**
**Redatto da:** Studio Tecnico Informatico Previtali & Associati, Lecco
**Protocollo interno:** TRsrl-IT-2025-01

---

## 1. IMPIANTO DI VIDEOSORVEGLIANZA (CCTV)

Il sistema di videosorveglianza poggia su circuito chiuso con registrazione su DVR centralizzato ubicato nella sala server al piano terra (Locale CED).

**Camere operative (gennaio 2025):**

| ID | Posizione | Stato | Risoluzione | Copertura |
|----|-----------|-------|-------------|-----------|
| CAM-01 | Ingresso principale (Via Bergamo fronte) | Operativa | 1080p | Varco pedonale e veicolare |
| CAM-02 | Parcheggio interno | Operativa | 720p | Area sosta veicoli |
| CAM-03 | Corridoio 1° piano — Tessari Hub | Operativa | 1080p | Accesso uffici e scale |
| CAM-04 | Ala Storica (navata principale) | Operativa | 720p | Macchinari espositivi — angolo cieco noto (vedi nota) |
| CAM-05 | Ingresso secondario sud | Operativa | 720p | Porta di servizio lato sud |
| CAM-06 | Magazzino Nord (esterno) | **NON OPERATIVA** | — | Fuori servizio da settembre 2023 per guasto hardware. Sostituzione non ancora approvata nel budget. |

**Note tecniche CAM-04:** L'obiettivo della CAM-04 non copre la zona retrostante i pilastri in muratura del vecchio reparto tintura (area di circa 18 mq). Il posizionamento delle piantane originali dei telai a vapore crea un cono d'ombra permanente che non è eliminabile senza riposizionamento strutturale della camera. Questo limite è stato segnalato nella relazione tecnica del luglio 2022 (rif. TRsrl-CCTV-2022-07) senza seguito.

**Raccomandazione:** Aggiunta di mini-camera supplementare nell'area non coperta di CAM-04. Costo stimato: €320 + posa in opera.

---

## 2. SISTEMA CONTROLLO ACCESSI BADGE

Il sistema di controllo accessi elettronico copre i seguenti varchi:

- Ingresso principale (Via Bergamo, fronte edificio)
- Ingresso secondario sud
- Ascensore e scale lato hub al 1° piano
- Accesso locale CED (server room)

**Varchi NON coperti dal sistema badge:**
La porta in ferro del Magazzino Nord (accesso da Via Bergamo 12/b) non è integrata nel sistema di controllo elettronico. Le planimetrie catastali riportano questo varco come "chiuso e murato" a seguito della ristrutturazione del 2011. Il sopralluogo tecnico del presente audit ha verificato che la porta è fisicamente presente e dotata di serratura meccanica tradizionale a leva (cilindro yale tipo anni '90). Lo stato della serratura non è stato verificato. **Si raccomanda verifica fisica e, se necessario, sigillatura definitiva o integrazione nel sistema badge.**

---

## 3. INFRASTRUTTURA DI RETE E WI-FI

**Rete principale:** SSID `Filatura-Internal` — protocollo WPA3-Enterprise, gestita tramite controller Cisco Meraki.

**Copertura:** I router sono stati tarati con potenza ridotta (low-gain) per confinare il segnale all'interno del perimetro fisico dell'edificio. Le murature in pietra primaria brianzola (spessore medio 65 cm) e il cemento armato anni '60 bloccano il segnale in modo naturale. Il segnale `Filatura-Internal` non è rilevabile all'esterno dell'edificio da più di 3-4 metri dalle aperture.

**Funzione Auto-Join:** I dispositivi precedentemente registrati si riconnettono automaticamente alla rete senza intervento dell'utente, non appena entrano nel raggio di copertura.

**Dispositivi permanenti registrati (IoT e infrastruttura):**

| ID dispositivo | Tipo | Funzione | Stato |
|----------------|------|----------|-------|
| Filatura-NVR-01 | DVR videosorveglianza | Registrazione CCTV | Attivo |
| Meraki-AP-01/02/03 | Access point | Rete Wi-Fi | Attivo |
| HUB-Printer-01 | Stampante HP LaserJet | Stampa uffici hub | Attivo |
| HUB-Printer-02 | Stampante Canon | Stampa reception | Attivo |
| Tablet-Reception | Tablet Samsung | Prenotazioni spazio | Attivo |
| Sensore-Temp-01/02 | Sensori temperatura | Monitoraggio archivio | Attivo |
| SmartLock-CED | Serratura smart | Accesso server room | Attivo |
| Termostato-PT | Termostato Netatmo | Climatizzazione piano terra | Attivo |
| Termostato-1P | Termostato Netatmo | Climatizzazione 1° piano | Attivo |

**Dispositivi personali con accesso legacy mantenuto alla rete:**

La seguente lista riporta i dispositivi personali (non aziendali) a cui è stato concesso accesso permanente alla rete `Filatura-Internal` in passato e per i quali l'accesso non è stato revocato alla cessazione del rapporto lavorativo. Si raccomanda revisione e revoca immediata per tutti i soggetti non più attivi.

| Nominativo | Dispositivo | ID rete | MAC address | Accesso concesso | Stato |
|------------|-------------|---------|-------------|-----------------|-------|
| Tessari C. | iPhone 15 Pro | CT-iPhone15 | 3C:22:FB:xx:xx:xx | 2024 | Attivo (dipendente) |
| Horvat A. | Samsung Galaxy S22 | AH-Samsung | 58:A0:23:xx:xx:xx | 2023 | Attivo (dipendente) |
| Milani S. | iPhone 14 | SM-iPhone14 | 1A:4F:66:xx:xx:xx | 2024 | Attivo (stagista) |
| Colombo G. | Samsung Galaxy A54 | GC-Samsung | A4:77:33:F2:1B:9C | 2019 | Attivo (non revocato) |
| Rossi M. | iPhone 11 | MR-iPhone11 | 2B:8C:44:xx:xx:xx | 2020 | Attivo (non revocato) |
| Ferrari L. | Huawei P30 | LF-Huawei | 7D:11:90:xx:xx:xx | 2021 | Attivo (non revocato) |
| Brenna T. | Samsung Galaxy A32 | TB-Samsung | 9E:55:12:xx:xx:xx | 2018 | Attivo (non revocato) |

**Raccomandazione:** Revocare immediatamente gli accessi dei soggetti non più in servizio (Colombo G., Rossi M., Ferrari L., Brenna T.) per ridurre la superficie di attacco della rete aziendale.

---

## 4. STATO GENERALE E PRIORITÀ DI INTERVENTO

| Priorità | Intervento | Costo stimato |
|----------|-----------|---------------|
| Alta | Sostituzione CAM-06 (Magazzino Nord) | €480 + posa |
| Alta | Verifica e sigillatura porta Magazzino Nord | €150 |
| Alta | Revoca accessi legacy rete Wi-Fi (7 utenti) | €0 (operazione software) |
| Media | Camera supplementare angolo cieco CAM-04 | €320 + posa |
| Bassa | Aggiornamento firmware DVR | €0 |

**Firma Responsabile IT:** Ing. Marco Previtali
**Data:** 22 gennaio 2025
