# ESAME FORENSE DISPOSITIVI DIGITALI E LOG DI RETE (Pag. 1 di 5)
**Polizia Postale e delle Comunicazioni - Sezione Cybercrime**

## 1. TELEFONO VITTIMA (iPhone 15 Pro, Chiara Tessari)
- **Stato al recupero:** Acceso, nessuna password richiesta in quanto bloccato sull'app nativa fotocamera (modalità stand-by dello schermo).
- **Ultima Attività Sensibile:** Ore 22:52 locali del 14/03/2025. Scatto fotografico annullato o tentativo di inquadramento dell'area sottostante la passerella dell'ala storica. 
- **Celle Telefoniche Agganciate:** Merate Centro / Torre D per l'intera giornata.

---
# ESAME FORENSE DISPOSITIVI DIGITALI (Pag. 2 di 5)

## 2. COMPUTER VITTIMA E MAIL RECUPERATE (MacBook Air)
- Analisi drive SSD interna: cartelle di lavoro ordinate, nessuna cifratura avanzata anomala rispetto agli standard aziendali.
- **Estrazione Posta (Mail.app):**
  - Ultima email in uscita rilevante: Ore 18:30 a *Avv. Riccardo Ferri*. Oggetto: "Rif. documenti per lunedì". 
  - Testo: *"Riccardo, ti confermo che ho le bozze con me in Filatura. Ho l'intenzione di leggerle qui stasera in tranquillità prima del weekend. Lunedì procediamo con Meridian se tutto torna."*
- **Sincronizzazione Cloud:** Regolare. Nessun documento eliminato nelle 48h precedenti al decesso.

---
# ESAME FORENSE DISPOSITIVI DIGITALI (Pag. 3 di 5)

## 3. ANALISI CELLE E TRAFFICO - MAPPA SOSPETTI
Acquisizione macro-celle (BTS) sul raggio territoriale brianzolo/lecchese per la fascia 22:00-01:00 del 14-15 marzo.
*(Vedi allegato "phone_tabulati-sospetti-celle" per dettaglio righe).*
Sintesi traffico generico: 
- Registrato movimento trasversale del dispositivo associato a Marchetti Davide (da Montevecchia a Merate tra le 23:10 e le 23:20).
- Telefono Horvat Anya risulta in stato "non raggiungibile/spento" dalle ore 22:30 per ragioni tecniche o esaurimento batteria.
- Il telefono intestato a Sala Marco aggancia cella di Lecco, coerente con l'alibi casalingo, registrando però una chiamata pre-pagata di 4 minuti in ingresso alle 23:10.

---
# ESAME FORENSE DISPOSITIVI DIGITALI (Pag. 4 di 5)

## 4. LOG SERVER E RETE WI-FI AZIENDALE "Filatura-Internal"
Analisi dump del gestore router mesh posto al piano terra e primo piano. 
**Richiesta Dati:** Dispositivi collegati via DHCP nella finestra 22:00 - 01:00 della notte dell'omicidio.
**Output di sistema (Dispositivi autenticati o noti pre-memorizzati):**

| TIMESTAMP COLLEGAM. | DISPOSITIVO / HOSTNAME | MAC ADDRESS | DISCONNESSIONE | DURATA | TIPO DISP. |
|---------------------|------------------------|-------------|----------------|--------|------------|
| 22:01 | HP-LaserJet-M506 | 00:1A:2B:3C:XX | 01:00 (attivo) | / | Stampante |
| 22:15 | CT-iPhone (Tessari) | F4:0B:44:XX:XX | 01:00 (attivo) | / | Smartphone |
| 22:20 | IoT-Termo-Nord | A8:B9:C0:XX:XX | 01:00 (attivo) | / | Sensore Termico|
| 22:22 | Reception-iPad | DD:11:22:33:XX | 01:00 (attivo) | / | Tablet Ufficio |
| 22:45 | SmartTV-Lobby | B8:27:EB:12:XX | 01:00 (attivo) | / | Monitor Smart |
| 22:53 | **GC-Samsung** | A4:77:33:F2:1B:9C | 23:22 | 29 min | Smartphone |
| 23:05 | Vodafone-Booster | E0:4F:43:XX:XX | 01:00 (attivo) | / | Ripetitore |
| 23:10 | IoT-Alarm-Panel | 00:08:9B:XX:XX | 01:00 (attivo) | / | Pannello Sicur. |

*(Nota dell'analista: Il router assegna IP automaticamente ai dispositivi già associati in passato purché si trovino all'interno della sagoma dell'edificio con raggio di 20 metri. "GC-Samsung" si è collegato autonomamente in quella precisa mezz'ora di buco)*

---
# ESAME FORENSE DISPOSITIVI DIGITALI (Pag. 5 di 5)

## 5. RECOVERY DI MESSAGGISTICA CANCELLATA
- **Chat WhatsApp Vittima:** Nessun messaggio cancellato rintracciato nel dump locale post 12 marzo. Ultime iterazioni conformi all'attività lavorativa regolare e familiare tesa.
- **Mail eliminata in cestino server:** Rinvenuta mail archiviata da 10 giorni. *Mittente Anonimo (ProtonMail)*: "Lo sappiamo tutti cosa c'è sotto la Filatura. Pagate o raccontiamo." - Nessun IP di provenienza rintracciabile a causa di proxy concatenati. Inviata al reparto crimini finanziari/ambientali per opportuni riscontri incrociati.
