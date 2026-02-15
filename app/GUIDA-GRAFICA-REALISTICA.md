# 🎨 Guida Rapida: Grafica Realistica

## 📖 Come Usare

### Visualizzazione Schermo
I documenti ora utilizzano:
- **Texture carta**: Grana sottile visibile a schermo
- **Ombre multiple**: Profondità naturale 3D
- **Watermark**: Filigrane molto sottili
- **Timbri realistici**: Con bordi multipli e rotazione

Nessuna configurazione necessaria - funziona automaticamente! 📱💻

### Stampa Realistica 🖨️

#### 1. Apri Preview Stampa
- **Chrome/Edge**: `Ctrl+P` (Windows) o `Cmd+P` (Mac)
- **Firefox**: `Ctrl+P` (Windows) o `Cmd+P` (Mac)

#### 2. Impostazioni Raccomandate

**✅ Da Attivare:**
- ☑️ **Grafica di sfondo** (Background graphics)
- ☑️ **Colori di sfondo** (Background colors)
- 📄 **Formato**: A4
- 📐 **Margini**: Predefiniti
- 🎨 **Colore**: Sì (non B&N)

**Chrome/Edge:**
```
Altre impostazioni →
☑️ Grafica di sfondo
```

**Firefox:**
```
Aspetto →
☑️ Stampa sfondi
```

#### 3. Carta Consigliata
- **Peso**: 90-100 g/m²
- **Tipo**: Bianca opaca
- **FinishDocument**: Matte (non lucida)

#### 4. Qualità Stampa
- **Risoluzione**: Minimo 300 DPI
- **Qualità**: Alta/Massima
- **Modalità**: Colore

### Tipi Documento

Ogni tipo ha grafica specifica:

| Tipo | Texture | Bordo | Colore Header |
|------|---------|-------|---------------|
| 🛡️ Polizia | Grana ufficiale | Blu scuro (8px) | Blu scuro |
| ⚕️ Medico | Carta bianca | Azzurro (6px) | Azzurro cielo |
| 🔬 Forense | Grana tecnica | Grigio+Arancio | Nero/grigio |
| ⚖️ Legale | Pergamena | Marrone (3px) | Beige/oro |
| 📧 Email | Carta moderna | Blu (3px) | Bianco/grigio |
| 📔 Diario | Invecchiata | Beige (5px) | Beige seppia |
| 📰 Giornale | Newsprint | Grigio (2px) | Nero |
| 🏦 Bancario | Carta professionale | Blu (6px) | Blu bancario |
| 📞 Telefonico | Tecnica | Viola (8px) | Viola scuro |

### Watermark e Timbri

#### Watermark (Filigrane)
- Opacità molto bassa (2.5%)
- Visibili solo con luce giusta
- Non invadenti nella lettura
- Preservati in stampa

#### Timbri Ufficiali
- Colore: Rosso (#dc2626)
- Rotazione: -5° a -8°
- Bordi: 4-5px double/solid
- Ombre: Multiple layers

**Esempi:**
- `RISERVATO` (documenti ufficiali)
- `CONFIDENZIALE` (rapporti polizia)
- `URGENTE` (comunicazioni)

### Browser Supportati

| Browser | Schermo | Stampa | Note |
|---------|---------|---------|------|
| Chrome 90+ | ✅ Ottimo | ✅ Ottimo | Raccomandato |
| Edge 90+ | ✅ Ottimo | ✅ Ottimo | Raccomandato |
| Firefox 88+ | ✅ Ottimo | ✅ Ottimo | Ottimo |
| Safari 14+ | ✅ Buono | ⚠️ Buono | Texture ridotte |

### Risoluzione Problemi

#### ❌ I colori non si stampano
**Soluzione**: Attiva "Grafica di sfondo" nelle impostazioni stampa

#### ❌ Le texture non sono visibili
**Soluzione**: 
1. Verifica risoluzione stampante (min 300 DPI)
2. Attiva "Qualità alta" 
3. Usa carta 90+ g/m²

#### ❌ Watermark troppo visibile
**Soluzione**: Già ottimizzato - se ancora troppo, è intenzionale per autenticità

#### ❌ Timbri non colorati
**Soluzione**: 
1. Stampa a colori (non B&N)
2. Attiva "Colori di sfondo"
3. Verifica cartuccie colore

### Performance

#### Schermo
- Caricamento: +0.1s (texture SVG inline)
- Rendering: Nessun impatto (GPU accelerated)
- Memoria: +50KB per documento

#### Stampa
- Generazione PDF: +0.5-1s
- Dimensione: +50-100KB
- Qualità: Nitida fino 600 DPI

### Personalizzazioni Avanzate

Per modificare i livelli di texture, edita [document-types.css](styles/document-types.css):

```css
/* Aumenta texture (più visibile) */
opacity: 0.04  /* era 0.02 */

/* Riduci texture (meno visibile) */
opacity: 0.01  /* era 0.02 */
```

### Esempi Risultati

**Prima**: Documento piatto, senza texture
**Dopo**: Documento con grana carta, ombre, watermark sottile

**Prima Stampa**: B&N, senza texture
**Dopo Stampa**: Colori preservati, texture visibile, timbri colorati

---

## 📚 Documentazione Completa

Vedi [GRAFICA-MIGLIORAMENTI.md](GRAFICA-MIGLIORAMENTI.md) per:
- Dettagli tecnici texture
- Metriche realismo
- SVG Data URI explained
- Print color adjust
- Testing checklist completa

---

## 🆘 Supporto

**Problemi?** 
1. Verifica impostazioni browser
2. Controlla impostazioni stampante
3. Consulta sezione "Risoluzione Problemi"
4. Leggi documentazione completa

**Feedback?**
Suggerimenti per miglioramenti sempre benvenuti!

---

**Versione**: 2.1.0  
**Ultimo aggiornamento**: 15 Febbraio 2026
