@echo off
echo.
echo ================================================================
echo    CASE PRINTER - Generatore PDF Casi Investigativi
echo ================================================================
echo.

REM Verifica che Python sia installato
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERRORE] Python non trovato!
    echo.
    echo Esegui prima setup.bat per installare le dipendenze
    pause
    exit /b 1
)

REM Esegui il programma
python case_printer.py

echo.
pause
