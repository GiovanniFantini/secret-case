@echo off
echo 🔍 Detective Case Viewer - Avvio Rapido
echo ======================================
echo.

REM Check if node is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js non trovato!
    echo Installa Node.js da: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js trovato
node --version
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installazione dipendenze...
    call npm install
    echo.
)

REM Check if casi folder exists
if not exist "..\casi" (
    echo ⚠️  ATTENZIONE: La cartella 'casi' non esiste!
    echo Creala e aggiungi i tuoi casi investigativi.
    echo.
    set /p risposta="Vuoi creare una cartella casi di esempio? (S/N): "
    if /i "%risposta%"=="S" (
        mkdir "..\casi\caso-esempio\documenti-investigativi"
        mkdir "..\casi\caso-esempio\prove-documentali"
        mkdir "..\casi\caso-esempio\elementi-digitali"
        mkdir "..\casi\caso-esempio\suggerimenti"
        echo # Caso di Esempio > "..\casi\caso-esempio\istruzioni-giocatori.md"
        echo ✓ Cartella 'casi\caso-esempio' creata!
    )
    echo.
)

echo 🚀 Avvio del server...
echo Una volta avviato, apri il browser su: http://localhost:3000
echo.
echo Premi Ctrl+C per fermare il server
echo.
echo ======================================
echo.

call npm start
pause
