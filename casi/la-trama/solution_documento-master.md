# DOCUMENTO MASTER — SOLUZIONE COMPLETA
## Caso: "La Trama" — Secret Case ⭐⭐⭐⭐⭐
**⚠️ SPOILER TOTALE — Solo per il Game Master ⚠️**

---

## 1. IL COLPEVOLE

**Giorgio Colombo, 62 anni — ex capomastro della Filatura Tessari (1978–2016)**

Giorgio ha ucciso Chiara Tessari nella notte tra il 14 e il 15 marzo 2025, tra le 23:00 e le 23:15, nell'ala storica della Filatura. Causa della morte: trauma cranico da colpo inferto con chiave inglese industriale da 600g (repertata in loco). La scena è stata simulata per sembrare una caduta accidentale dalla passerella.

---

## 2. IL MOVENTE

**Sopravvivenza: impedire che Chiara lo sacrificasse come capro espiatorio**

Giorgio ha gestito per decenni, per conto prima del padre di Chiara e poi di Chiara stessa, l'impiego di manodopera irregolare e la "bonifica" fasulla dei sotterranei della Filatura. In sei anni ha intascato circa €190.000 in commissioni (20% sui risparmi sul costo reale della manodopera). La Fondazione gli corrisponde ancora €15.000/anno con causale "consulenza artistica."

La catena degli eventi che ha innescato l'omicidio:

1. Chiara viene diagnosticata con adenocarcinoma pancreatico in stadio avanzato (12 febbraio 2025, prognosi 6-12 mesi). Chiede la massima riservatezza alla dottoressa Brambilla.
2. La dottoressa Brambilla, involontariamente, menziona la malattia di Chiara a Giorgio Colombo durante una conversazione casuale: *"La Tessari? Poverina, non sa che le restano pochi mesi..."*
3. Giorgio capisce che una persona che sa di stare morendo potrebbe collaborare con le autorità per alleggerire la propria posizione, scaricare le responsabilità su di lui, o lasciare documenti post-mortem che lo incastrano. È vecchio, senza avvocati, senza rete di protezione: sarebbe il capro espiatorio perfetto.
4. Chiara sta anche trattando la vendita della Filatura a Meridian Capital per €18M, subordinata a una due diligence ambientale. Una due diligence reale smaschererebbe la bonifica fasulla — e Giorgio.
5. Giorgio decide che l'unica via d'uscita è agire prima che Chiara possa farlo.

---

## 3. IL COMPLICE INCONSAPEVOLE

**Dott.ssa Elena Brambilla, 55 anni — medico di famiglia**

Elena non sa di aver innescato la catena degli eventi. Ha violato il segreto professionale in modo casuale, durante una conversazione con Giorgio, credendo di fare un commento pietoso su una paziente. Non è coinvolta nell'omicidio, ma la sua indiscrezione ne è la causa remota.

---

## 4. LA RICOSTRUZIONE DELL'OMICIDIO

### Preparazione (11–14 marzo 2025)
Dopo aver appreso della malattia di Chiara, Giorgio pianifica nei giorni successivi. Conosce la Filatura come nessun altro:
- Sa che il venerdì sera Chiara lavora tardi
- Sa che il vigilante Poli si chiude nella guardiola dopo il giro delle 22:00
- Sa che la CAM-04 dell'ala storica ha un angolo cieco dietro i pilastri del reparto tintura
- Sa che la CAM-06 del magazzino nord è fuori servizio dal 2023
- Conserva dal 1992 la chiave della porta secondaria del magazzino nord (Via Bergamo 12/b), che non è integrata nel sistema badge e risulta "murata" nelle planimetrie ufficiali — ma non lo è davvero

### La sera del 14 marzo 2025
- **22:40** — Giorgio esce di casa (Via Parini 3, 800 metri dalla Filatura)
- **22:50** — Entra dalla porta del magazzino nord con la vecchia chiave
- **22:53** — Il suo Samsung Galaxy A54 (ID rete: `GC-Samsung`, MAC: A4:77:33:F2:1B:9C) si connette automaticamente alla rete `Filatura-Internal`, rete che aveva memorizzato durante gli anni di lavoro. L'accesso legacy non era mai stato revocato
- **22:40–23:00** — Giorgio si muove nell'ala storica attraverso percorsi che conosce a memoria, evitando il campo visivo della CAM-04
- **~23:00** — Chiara è nell'ala storica: sta fotografando la passerella per un post Instagram (il telefono è trovato acceso sull'app fotocamera a 3 metri dal corpo)
- **23:00–23:15** — Giorgio si avvicina. Chiara si fida di lui — lo conosce da quando era bambina. In un momento di distrazione, Giorgio la colpisce alla testa con la chiave inglese da 600g presente nel kit di manutenzione dell'ala storica. Chiara cade. Giorgio la trascina alla base della passerella, posizionandola per simulare una caduta accidentale. Indossa guanti da lavoro presenti nel kit (taglia 9), pulisce la chiave inglese con uno straccio, la rimette nel kit aperto
- **23:15–23:22** — Giorgio si dirige verso l'uscita del magazzino nord
- **23:22** — Il telefono si disconnette dalla rete Wi-Fi (durata connessione: 29 minuti)
- **23:25** — Giorgio rientra a casa a piedi. Non ha usato auto, badge, telefono, nulla di tracciabile

### Dopo l'omicidio
- **23:35** — Davide Marchetti entra dalla CAM-01 (è uscito di casa dopo l'ultima chiamata senza risposta di Chiara). Trova il corpo. Nel panico, fugge senza chiamare i soccorsi — ha paura di essere incolpato anche per via dei debiti. Lascia accidentalmente cadere il proprio accendino, che raccoglie in fretta manipolando minimamente la scena
- **23:52** — Davide esce (CAM-01)
- **07:05 del 15 marzo** — Giovanni Poli trova il corpo durante il giro mattutino

---

## 5. LA PROVA REGINA

**La connessione Wi-Fi automatica del telefono di Giorgio**

Il dispositivo `GC-Samsung` (Samsung Galaxy A54 di Giorgio Colombo) è registrato nei log della rete `Filatura-Internal` con connessione dalle **22:53** alle **23:22** del 14 marzo 2025.

Questo dettaglio è distribuito su **due documenti separati**, nessuno dei quali lo segnala esplicitamente:

- **`forensic_analisi-digitale.md`** (pagina 4 di 5) — Log rete Wi-Fi: tra 15 dispositivi connessi nelle 24 ore, compare la riga `22:53 — GC-Samsung (MAC: A4:77:33:F2:1B:9C) — disconnessione: 23:22 — durata: 29 min`
- **`legal_audit-infrastruttura-filatura.md`** (sezione 3, tabella accessi legacy) — Inventario dispositivi rete: `Colombo G. | Samsung Galaxy A54 | GC-Samsung | A4:77:33:F2:1B:9C | 2019 | Attivo (non revocato)`

Il giocatore deve incrociare i due documenti per collegare "GC-Samsung" al nome "Colombo G." Nessun altro documento stabilisce questo collegamento.

**Perché è conclusivo:** L'audit IT certifica che il segnale `Filatura-Internal` non esce dal perimetro fisico dell'edificio (murature spesse 65 cm, router tarati low-gain). La presenza del MAC address sul log del router prova che il dispositivo — e chi lo portava — era fisicamente dentro la Filatura tra le 22:53 e le 23:22, esattamente nella finestra temporale della morte di Chiara (23:00–23:15).

---

## 6. PERCHÉ GLI ALTRI NON SONO COLPEVOLI

| Sospetto | Alibi definitivo / Esclusione |
|----------|-------------------------------|
| **Davide Marchetti** | Badge ingresso CAM-01: 23:35 — dopo la morte. Ha trovato il corpo e fuggito |
| **Federica Colombo** | Videosorveglianza bar di Lecco la colloca in riunione con l'avvocato Meridian durante la finestra critica |
| **Luca Marchetti** | Biglietto treno Merate–Milano ore 21:47 + celle telefoniche confermano rientro a Milano |
| **Anya Horvat** | Non aveva bisogno di uccidere: stava preparando denuncia legale (appuntamento ITL lunedì 17 marzo) |
| **Roberto Galli** | GPS Telepass: auto ferma nel parcheggio del Ristorante Griso per tutta la durata della cena Rotary |
| **Marco Sala** | Cella telefonica: Lecco per tutta la notte. Corruzione giornalistica, non omicidio |
| **Elena Brambilla** | Celle telefoniche: casa per tutta la notte. Complice inconsapevole, non omicida |
| **Beatrice Tessari** | Nessun mezzo di trasporto (no patente, no auto, no bus serali da Montevecchia) |
| **Matteo Sartori** | Telecamera officina in Via Bergamo 30 lo riprende al garage alle 22:08 — stava distruggendo documenti |

---

## 7. I TRE CRIMINI PARALLELI

Il caso contiene tre filoni criminali sovrapposti che generano il "rumore" caratteristico della difficoltà 5:

### Crimine 1 — L'omicidio (crimine centrale)
**Colpevole:** Giorgio Colombo. Movente: sopravvivenza.

### Crimine 2 — La frode ambientale
**Colpevoli:** Chiara Tessari (committente), Giorgio Colombo (esecutore), Matteo Sartori (certificatore), Roberto Galli (funzionario corrotto). I sotterranei contengono cromo esavalente 15-22 volte il limite di legge. La bonifica del 2018 (valore contratto: €850.000) è stata eseguita parzialmente: i materiali contaminati sono stati coperti, non rimossi.

### Crimine 3 — Il riciclaggio e lo sfruttamento
**Colpevoli:** Chiara Tessari, Federica Colombo (per la Fondazione), Giorgio Colombo (caporalato). La Fondazione Trama è utilizzata parzialmente per dirottare fondi pubblici tramite fatture false e consulenze fittizie. I lavori di manutenzione della Filatura sono eseguiti da manodopera irregolare reclutata tramite Edilizia Rapida S.r.l.

**La maggior parte delle bugie dei sospetti riguarda i crimini 2 e 3, non l'omicidio.** Questo è il cuore della difficoltà 5.

---

## 8. INDIZI NARRATIVI SU GIORGIO (RILETTI DOPO LA SOLUZIONE)

I seguenti elementi, che in fase investigativa sembrano secondari, acquistano significato diverso dopo la soluzione:

- **`diary_diario-chiara.md`, 12 marzo:** *"Giorgio è venuto oggi. Mi ha guardato con quegli occhi. Sa qualcosa."* — Giorgio stava facendo il sopralluogo preparatorio
- **`police_verbale-giorgio-colombo.md`:** *"Ci sono andato giusto la settimana scorsa, alla Filatura. Per nostalgia. 38 anni non si dimenticano. Ho fatto un giro, ho controllato che tutto fosse a posto."* — Sopralluogo preparatorio ammesso, frainteso come nostalgia
- **`police_verbale-anya-horvat.md`:** *"Il signor Colombo veniva spesso a trovarla, anche tardi."* — Accesso abituale che normalizza la sua presenza
- **`police_verbale-elena-brambilla.md`:** *"Ho parlato un po' con tutti ultimamente, anche con il vecchio Colombo, sa, a Merate ci si conosce tutti..."* — La fonte dell'informazione sulla malattia di Chiara
- **`bank_conto-fondazione-trama.md`:** Pagamenti a "Colombo G." per €15.000/anno come "consulenza artistica" — Giorgio era pagato per il silenzio sulla bonifica
- **`note_post-it-scrivania-chiara.md`:** Post-it *"Giorgio — contratto manutenzione da rinnovare? Parlarne"* — Chiara stava pensando a Giorgio; lui lo sapeva
- **`social_post-chiara-instagram.md`:** Ultimo post di Chiara (14 marzo, 16:00): foto ala storica con didascalia *"Ogni pezzo di questa fabbrica racconta una storia. Anche quelli che nessuno vede più."* — Inconsapevolmente profetica

---

## 9. LE 4 RISPOSTE CORRETTE

1. **Chi è il colpevole?** → Giorgio Colombo
2. **Chi è il complice inconsapevole?** → Dott.ssa Elena Brambilla
3. **Qual è il movente?** → Sopravvivenza: impedire che Chiara collaborasse con le autorità e lo sacrificasse come capro espiatorio per la frode ambientale
4. **Come è stato commesso il crimine?** → Colpo alla testa con chiave inglese industriale, accesso tramite porta secondaria del magazzino nord (non nel sistema badge), scena simulata come caduta accidentale dalla passerella

---

## 10. PUNTEGGIO

| Punti | Grado |
|-------|-------|
| 4/4 | ⭐⭐⭐⭐⭐ Detective Supremo — "Avete visto attraverso ogni maschera." |
| 3/4 | ⭐⭐⭐⭐ Investigatore Esperto — "Quasi perfetto. Un dettaglio vi è sfuggito." |
| 2/4 | ⭐⭐⭐ Investigatore Competente — "Buon lavoro, ma la trama era più fitta di quanto pensavate." |
| 1/4 | ⭐⭐ Detective in Erba — "Le maschere vi hanno ingannato." |
| 0/4 | ⭐ A Merate si Tace — "Il silenzio della Brianza ha vinto." |
