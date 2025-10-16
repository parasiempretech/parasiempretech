@echo off
title Verificación de entorno Tailwind + Next
color 0A
echo =====================================================
echo      🔍 INICIO DE VERIFICACION DE ENTORNO
echo =====================================================

echo.
echo ✅ Version de Node:
node -v

echo.
echo ✅ Version de NPM:
npm -v

echo.
echo -----------------------------------------------------
echo 🔍 Verificando TailwindCSS...
echo -----------------------------------------------------
npm list tailwindcss 2>nul
if %errorlevel% neq 0 (
  echo ❌ TailwindCSS no encontrado. Instalando...
  npm install -D tailwindcss postcss autoprefixer
)

echo.
echo -----------------------------------------------------
echo 🔍 Verificando PostCSS y Autoprefixer...
echo -----------------------------------------------------
npm list postcss autoprefixer 2>nul

echo.
echo -----------------------------------------------------
echo 🧱 Probando compilacion de Tailwind...
echo -----------------------------------------------------
npx tailwindcss -i ./src/app/globals.css -o ./out-test.css --minify >nul 2>&1
if exist out-test.css (
  echo ✅ Compilacion correcta.
  del out-test.css
) else (
  echo ❌ Error: Tailwind no pudo compilar globals.css
)

echo.
echo -----------------------------------------------------
echo 🔄 Actualizando Browserslist...
echo -----------------------------------------------------
npx update-browserslist-db@latest --update-db >nul 2>&1
echo ✅ Browserslist actualizado.

echo.
echo =====================================================
echo        ✅ ENTORNO VERIFICADO CORRECTAMENTE
echo =====================================================
pause
