@echo off
echo ================================================================
echo   Setup Case Printer - Generatore PDF Casi Investigativi
echo ================================================================
echo.

REM Verifica Python
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERRORE] Python non trovato!
    echo.
    echo Installa Python da: https://www.python.org/downloads/
    echo Assicurati di spuntare "Add Python to PATH" durante l'installazione
    pause
    exit /b 1
)

echo [OK] Python trovato:
python --version
echo.

REM Installa dipendenze
echo [*] Installazione dipendenze Python...
python -m pip install --upgrade pip
python -m pip install markdown

echo.
echo ================================================================
echo   Installazione WeasyPrint (per PDF)
echo ================================================================
echo.
echo WeasyPrint su Windows richiede GTK3. Ci sono 3 opzioni:
echo.
echo 1. Prova installazione automatica (potrebbe fallire)
echo 2. Usa solo HTML (apri nel browser e salva come PDF)
echo 3. Installa manualmente GTK3 (avanzato)
echo.
set /p choice="Scegli (1/2/3): "

if "%choice%"=="1" (
    echo.
    echo [*] Tentativo installazione WeasyPrint...
    python -m pip install weasyprint
    if errorlevel 1 (
        echo.
        echo [ATTENZIONE] WeasyPrint non installato
        echo Il programma generera' HTML invece di PDF
    ) else (
        echo [OK] WeasyPrint installato!
    )
)

if "%choice%"=="2" (
    echo.
    echo [OK] Il programma generera' HTML
    echo Puoi aprirlo nel browser e stampare come PDF
)

if "%choice%"=="3" (
    echo.
    echo [INFO] Guida installazione GTK3:
    echo 1. Scarica GTK3: https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer
    echo 2. Installa GTK3
    echo 3. Esegui: python -m pip install weasyprint
    echo.
    echo Dopo aver installato GTK3, ri-esegui questo script
    pause
    exit /b 0
)

echo.
echo ================================================================
echo   Setup completato!
echo ================================================================
echo.
echo Per usare il programma:
echo   python case_printer.py
echo.
echo oppure fai doppio click su: run_case_printer.bat
echo.
pause
