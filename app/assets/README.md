# Asset Grafici - Secret Case System

Questa cartella contiene asset grafici per migliorare il realismo dei documenti investigativi.

## 📁 Struttura

```
app/assets/
├── textures/           # Texture carta e timbri
│   ├── paper-white.*   # Carta bianca documenti moderni
│   ├── paper-aged.*    # Carta invecchiata diari/archivi
│   ├── stamp-*.png     # Timbri RISERVATO, URGENTE, etc.
│   ├── watermark-*.png # Watermark istituzionali (Questura, Ospedale)
│   └── header-*.png    # Intestazioni ufficiali documenti
└── README.md          # Questa guida
```

## 🎨 Contenuto Attuale

Al momento questa cartella contiene **file .txt placeholder** con istruzioni dettagliate su come creare o trovare ogni asset grafico.

### Texture Carta
- `paper-white.txt` → Carta bianca per documenti ufficiali
- `paper-aged.txt` → Carta invecchiata per diari e documenti storici

### Timbri e Overlay
- `stamp-confidential.png.txt` → Timbro "RISERVATO"
- `stamp-urgente.png.txt` → Timbro "URGENTE"

### Watermark Istituzionali
- `watermark-questura.png.txt` → Watermark Polizia di Stato
- `watermark-ospedale.png.txt` (da creare) → Watermark ospedaliero

### Header Documenti
- `header-police.png.txt` → Intestazione rapporti polizia
- `header-hospital.png.txt` → Intestazione referti ospedalieri

## ✅ Come Aggiungere Asset Reali

### Opzione 1: Creare Immagini Custom
1. Leggi il file `.txt` corrispondente per le specifiche (dimensioni, colori, stile)
2. Crea l'immagine usando:
   - **Photoshop/GIMP** per texture e composizioni
   - **Canva** per timbri e header semplici
   - **Inkscape** per loghi vettoriali
3. Esporta nel formato indicato (PNG con trasparenza o JPG)
4. Salva nella cartella `textures/` con il nome corretto (rimuovi `.txt`)
5. Elimina il file `.txt` placeholder

### Opzione 2: Usare Risorse Royalty-Free
Siti consigliati per trovare texture e immagini:
- [Unsplash](https://unsplash.com) - `old paper texture`, `white paper`
- [Pexels](https://pexels.com) - foto ad alta risoluzione
- [TextureKing](https://textureking.com) - texture seamless
- [Transparent Textures](https://www.transparenttextures.com) - pattern ripetibili

**Licenze**: Verifica sempre che le immagini siano utilizzabili commercialmente (CC0 o simili).

### Opzione 3: Usare Solo CSS (Nessuna Immagine)
Se non vuoi usare immagini, puoi ottenere effetti simili con CSS:

#### Carta Bianca
```css
.document-white {
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  background-image: repeating-linear-gradient(
    0deg, transparent, transparent 2px, 
    rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px
  );
}
```

#### Carta Invecchiata
```css
.document-aged {
  background: radial-gradient(ellipse at center, #fef9ed 0%, #f5e6d3 100%);
  box-shadow: inset 0 0 100px rgba(139, 119, 101, 0.1);
  filter: sepia(0.15);
}
```

#### Timbro "Riservato"
```css
.stamp-confidential {
  display: inline-block;
  padding: 10px 30px;
  border: 4px solid #d32f2f;
  color: #d32f2f;
  font-weight: 900;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.7;
  transform: rotate(-5deg);
  position: absolute;
  top: 20px;
  right: 30px;
}
```

## 📐 Dimensioni Standard

| Tipo Asset | Dimensioni | Formato | Trasparenza |
|------------|-----------|---------|-------------|
| Texture carta | 1200x1600px | PNG/JPG | Opzionale |
| Timbri | 250-350px larghezza | PNG | Sì |
| Watermark | 400x400px | PNG | Sì (opacity 0.1-0.2) |
| Header | 1200x140-150px | PNG/JPG | Opzionale |

## 🔗 Integrazione nel Codice

Gli asset vengono caricati dinamicamente dal sistema di documenti:

```javascript
// In document-renderer.js
applyDocumentStyle(doc) {
  if (doc.type === 'police-report') {
    doc.style.backgroundImage = 'url(/app/assets/textures/paper-white.png)';
    doc.style.watermark = 'url(/app/assets/textures/watermark-questura.png)';
  }
  else if (doc.type === 'diary') {
    doc.style.backgroundImage = 'url(/app/assets/textures/paper-aged.png)';
  }
}
```

## 🎯 Priorità di Implementazione

Se hai tempo limitato, implementa in quest'ordine:

1. **Alta priorità**:
   - `paper-white` (usato da 50% dei documenti)
   - `paper-aged` (diari e testimonianze vecchie)
   - `stamp-confidential` (police reports top-secret)

2. **Media priorità**:
   - `header-police` (professionalità documenti polizia)
   - `header-hospital` (referti medici)
   - `watermark-questura` (autenticità)

3. **Bassa priorità**:
   - Altri timbri custom
   - Watermark specializzati
   - Varianti regionali

## 🚀 Alternative Veloci

Se non hai tempo/risorse per creare asset grafici:

1. **Usa Google Fonts** per differenziare documenti:
   - Documenti ufficiali: `Roboto`, `Open Sans`
   - Diari: `EB Garamond`, `Lora`
   - Macchina da scrivere: `Courier Prime`, `Special Elite`

2. **Usa colori/bordi CSS** per distinguere tipi:
   - Police: bordo blu (#1a237e)
   - Medical: bordo rosso (#c62828)
   - Legal: bordo grigio scuro (#424242)
   - Diary: nessun bordo, sfondo beige

3. **Usa emoji** come placeholder icone:
   - 🚔 Police report
   - 🏥 Medical report
   - 📔 Diary
   - 📧 Email

## 📖 Riferimenti

- [Lucidogen Icons](https://lucidogen.com/) - Icone SVG gratuite
- [Hero Icons](https://heroicons.com/) - Icone usate in icon-library.js
- [CSS Texture Generator](https://css3generator.com/) - Pattern CSS
- [Stamp Generator](https://www.redokun.com/en/stamp-generator) - Crea timbri online

## 🤝 Contributi

Se crei asset grafici di qualità, considera di condividerli con licenza CC0 (pubblico dominio) per aiutare altri progetti simili.

---

**Status**: 🟡 Placeholder mode (solo file .txt con istruzioni)  
**Aggiornato**: 14/02/2026
