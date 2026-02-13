#!/usr/bin/env python3
"""
Case Printer - Generatore PDF per Casi Investigativi
Autore: Claude per l'utente
Descrizione: Scansiona i casi disponibili e genera PDF stampabili ben formattati
"""

import os
import sys
import markdown
from pathlib import Path
from datetime import datetime

# Configurazione cartelle
CASI_DIR = "casi"
OUTPUT_DIR = "output_pdf"

# Struttura del caso (ordine di stampa)
SEZIONI_CASO = [
    ("README.md", "📄 Panoramica del Caso"),
    ("istruzioni-giocatori.md", "📋 Istruzioni per i Giocatori"),
    ("manuale-utente.md", "📖 Manuale Utente"),
    ("documento-master.md", "🔐 Documento Master (Soluzione)"),
    ("albero-decisionale.md", "🌳 Albero Decisionale"),
    ("documenti-investigativi", "🔍 Documenti Investigativi"),
    ("prove-documentali", "📃 Prove Documentali"),
    ("elementi-digitali", "💻 Elementi Digitali"),
    ("suggerimenti", "💡 Suggerimenti Progressivi"),
    ("script-narrazione-finale.md", "🎭 Script Narrazione Finale"),
]


class CasePrinter:
    def __init__(self):
        self.casi_dir = Path(CASI_DIR)
        self.output_dir = Path(OUTPUT_DIR)
        self.output_dir.mkdir(exist_ok=True)
        
    def get_available_cases(self):
        """Restituisce lista dei casi disponibili"""
        if not self.casi_dir.exists():
            print(f"❌ Errore: La cartella '{CASI_DIR}' non esiste!")
            return []
        
        casi = [d for d in self.casi_dir.iterdir() if d.is_dir()]
        return sorted(casi, key=lambda x: x.name)
    
    def display_cases(self, casi):
        """Mostra i casi disponibili in modo carino"""
        print("\n" + "="*60)
        print("🔍 CASI INVESTIGATIVI DISPONIBILI")
        print("="*60 + "\n")
        
        for idx, caso in enumerate(casi, 1):
            caso_name = caso.name.replace("-", " ").title()
            print(f"  {idx}. {caso_name}")
            
            # Mostra info dal README se esiste
            readme = caso / "README.md"
            if readme.exists():
                with open(readme, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                    for line in lines[1:15]:  # Prime righe per info rapida
                        if line.startswith("**Tipo di Crimine**:"):
                            print(f"     └─ {line.strip()}")
                        elif line.startswith("**Difficoltà**:"):
                            print(f"     └─ {line.strip()}")
                            break
        print("\n" + "="*60)
    
    def choose_case(self, casi):
        """Permette all'utente di scegliere un caso"""
        while True:
            try:
                scelta = input("\n🎯 Scegli il numero del caso (o 'q' per uscire): ").strip()
                
                if scelta.lower() == 'q':
                    print("\n👋 Uscita dal programma.")
                    return None
                
                idx = int(scelta) - 1
                if 0 <= idx < len(casi):
                    return casi[idx]
                else:
                    print(f"❌ Numero non valido. Scegli tra 1 e {len(casi)}")
            except ValueError:
                print("❌ Input non valido. Inserisci un numero o 'q'")
    
    def collect_files(self, caso_path):
        """Raccoglie tutti i file del caso in ordine logico"""
        files_collected = []
        
        for file_pattern, section_name in SEZIONI_CASO:
            full_path = caso_path / file_pattern
            
            if full_path.is_file():
                # È un file singolo
                files_collected.append({
                    'section': section_name,
                    'files': [full_path],
                    'is_folder': False
                })
            elif full_path.is_dir():
                # È una cartella
                md_files = sorted(full_path.glob("*.md"))
                if md_files:
                    files_collected.append({
                        'section': section_name,
                        'files': md_files,
                        'is_folder': True
                    })
        
        return files_collected
    
    def generate_html(self, caso_path, files_data):
        """Genera l'HTML da convertire in PDF"""
        caso_name = caso_path.name.replace("-", " ").title()
        
        html = f"""<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>{caso_name} - Dossier Completo</title>
    <style>
        @page {{
            size: A4;
            margin: 2cm 1.5cm;
            @top-center {{
                content: "{caso_name}";
                font-family: 'Georgia', serif;
                font-size: 10pt;
                color: #666;
            }}
            @bottom-center {{
                content: "Pagina " counter(page) " di " counter(pages);
                font-size: 9pt;
                color: #999;
            }}
        }}
        
        body {{
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
        }}
        
        h1 {{
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
            font-size: 2.2em;
            page-break-before: always;
            margin-top: 0;
        }}
        
        h1:first-of-type {{
            page-break-before: auto;
        }}
        
        h2 {{
            color: #34495e;
            border-left: 5px solid #e74c3c;
            padding-left: 15px;
            margin-top: 30px;
            font-size: 1.6em;
        }}
        
        h3 {{
            color: #7f8c8d;
            margin-top: 25px;
            font-size: 1.3em;
        }}
        
        h4 {{
            color: #95a5a6;
            font-size: 1.1em;
        }}
        
        .cover {{
            text-align: center;
            padding: 100px 0;
            page-break-after: always;
        }}
        
        .cover h1 {{
            font-size: 3em;
            border: none;
            margin-bottom: 20px;
            color: #2c3e50;
        }}
        
        .cover .subtitle {{
            font-size: 1.2em;
            color: #7f8c8d;
            font-style: italic;
        }}
        
        .cover .date {{
            margin-top: 40px;
            font-size: 1em;
            color: #95a5a6;
        }}
        
        .section-divider {{
            page-break-before: always;
            text-align: center;
            padding: 80px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0 -1.5cm;
            padding-left: 1.5cm;
            padding-right: 1.5cm;
        }}
        
        .section-divider h1 {{
            border: none;
            color: white;
            font-size: 2.5em;
            margin: 0;
            page-break-before: auto;
        }}
        
        .file-header {{
            background-color: #ecf0f1;
            padding: 15px;
            border-left: 5px solid #3498db;
            margin-top: 40px;
            page-break-after: avoid;
        }}
        
        .file-header h3 {{
            margin: 0;
            color: #2c3e50;
        }}
        
        table {{
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
            font-size: 0.9em;
        }}
        
        th, td {{
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }}
        
        th {{
            background-color: #3498db;
            color: white;
            font-weight: bold;
        }}
        
        tr:nth-child(even) {{
            background-color: #f2f2f2;
        }}
        
        blockquote {{
            border-left: 4px solid #e74c3c;
            padding-left: 20px;
            margin-left: 0;
            color: #555;
            font-style: italic;
            background-color: #fef5f5;
            padding: 15px 20px;
        }}
        
        code {{
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }}
        
        pre {{
            background-color: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            border-left: 3px solid #3498db;
        }}
        
        pre code {{
            background: none;
            padding: 0;
        }}
        
        ul, ol {{
            margin: 15px 0;
            padding-left: 30px;
        }}
        
        li {{
            margin: 8px 0;
        }}
        
        hr {{
            border: none;
            border-top: 2px solid #ecf0f1;
            margin: 30px 0;
        }}
        
        .warning {{
            background-color: #fff3cd;
            border-left: 5px solid #ffc107;
            padding: 15px;
            margin: 20px 0;
        }}
        
        .info {{
            background-color: #d1ecf1;
            border-left: 5px solid #17a2b8;
            padding: 15px;
            margin: 20px 0;
        }}
        
        strong {{
            color: #2c3e50;
        }}
        
        a {{
            color: #3498db;
            text-decoration: none;
        }}
        
        a:hover {{
            text-decoration: underline;
        }}
    </style>
</head>
<body>

<div class="cover">
    <h1>🔍 {caso_name}</h1>
    <div class="subtitle">Dossier Investigativo Completo</div>
    <div class="date">Generato il {datetime.now().strftime("%d %B %Y alle %H:%M")}</div>
</div>

"""
        
        # Aggiungi ogni sezione
        for section_data in files_data:
            section_name = section_data['section']
            files = section_data['files']
            is_folder = section_data['is_folder']
            
            # Divisorio di sezione
            html += f"""
<div class="section-divider">
    <h1>{section_name}</h1>
</div>
"""
            
            # Processa i file della sezione
            for file_path in files:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Se è in una cartella, mostra nome file
                if is_folder:
                    file_name = file_path.stem.replace("-", " ").title()
                    html += f"""
<div class="file-header">
    <h3>📄 {file_name}</h3>
</div>
"""
                
                # Converti markdown a HTML
                md = markdown.Markdown(extensions=['tables', 'fenced_code', 'nl2br'])
                html_content = md.convert(content)
                html += html_content + "\n\n"
        
        html += """
</body>
</html>
"""
        return html
    
    def save_to_pdf(self, html_content, caso_path):
        """Salva l'HTML come PDF usando weasyprint, o HTML come fallback"""
        caso_name = caso_path.name
        
        # Prova prima a generare PDF
        try:
            from weasyprint import HTML, CSS
            
            output_file = self.output_dir / f"{caso_name}_completo.pdf"
            
            print(f"\n⏳ Generazione PDF in corso...")
            HTML(string=html_content).write_pdf(output_file)
            
            print(f"✅ PDF generato con successo!")
            print(f"📁 Percorso: {output_file.absolute()}")
            
            # Mostra dimensione file
            size_mb = output_file.stat().st_size / (1024 * 1024)
            print(f"📊 Dimensione: {size_mb:.2f} MB")
            
            return output_file
            
        except ImportError:
            print("\n⚠️  WeasyPrint non è installato")
            print("📝 Genero HTML invece (funziona perfettamente!)")
            
        except Exception as e:
            print(f"\n⚠️  Errore nella generazione PDF: {e}")
            print("📝 Genero HTML come alternativa...")
        
        # Fallback: salva HTML
        html_file = self.output_dir / f"{caso_name}_completo.html"
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"\n✅ HTML generato con successo!")
        print(f"📁 Percorso: {html_file.absolute()}")
        
        # Mostra dimensione file
        size_kb = html_file.stat().st_size / 1024
        print(f"📊 Dimensione: {size_kb:.2f} KB")
        
        print("\n💡 Come usare l'HTML:")
        print("   1. Fai doppio click sul file HTML")
        print("   2. Si aprirà nel browser")
        print("   3. Premi Ctrl+P (o Cmd+P su Mac)")
        print("   4. Seleziona 'Salva come PDF'")
        print("   5. Hai il tuo PDF professionale!")
        
        return html_file
    
    def run(self):
        """Esegue il programma principale"""
        print("\n" + "🔍"*30)
        print("   CASE PRINTER - Generatore PDF Casi Investigativi")
        print("🔍"*30)
        
        # Ottieni casi disponibili
        casi = self.get_available_cases()
        
        if not casi:
            print("\n❌ Nessun caso trovato nella cartella 'casi/'")
            return
        
        # Mostra e scegli caso
        self.display_cases(casi)
        caso_selezionato = self.choose_case(casi)
        
        if not caso_selezionato:
            return
        
        print(f"\n🎯 Caso selezionato: {caso_selezionato.name.replace('-', ' ').title()}")
        
        # Raccogli file
        print("📚 Raccolta documenti...")
        files_data = self.collect_files(caso_selezionato)
        total_files = sum(len(s['files']) for s in files_data)
        print(f"   └─ {len(files_data)} sezioni trovate")
        print(f"   └─ {total_files} documenti totali")
        
        # Genera HTML
        print("\n🔨 Generazione HTML...")
        html_content = self.generate_html(caso_selezionato, files_data)
        
        # Salva PDF
        output_file = self.save_to_pdf(html_content, caso_selezionato)
        
        # Chiedi se generare altro caso
        print("\n" + "="*60)
        risposta = input("\n🔄 Vuoi generare un altro caso? (s/n): ").strip().lower()
        if risposta == 's':
            self.run()
        else:
            print("\n✨ Grazie per aver usato Case Printer!")
            print("👋 Arrivederci!\n")


def main():
    printer = CasePrinter()
    printer.run()


if __name__ == "__main__":
    main()
