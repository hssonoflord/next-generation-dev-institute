$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "다음세대개발원 웹사이트 서버를 시작합니다..." -ForegroundColor Cyan

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Node.js가 설치되어 있지 않습니다. https://nodejs.org 에서 설치해 주세요." -ForegroundColor Red
  Read-Host "종료하려면 Enter 키를 누르세요"
  exit 1
}

if (-not (Test-Path "node_modules\serve")) {
  Write-Host "필요한 패키지를 설치하는 중..." -ForegroundColor Yellow
  npm install
}

Write-Host ""
Write-Host "서버 주소: http://localhost:8080" -ForegroundColor Green
Write-Host "종료하려면 Ctrl+C 를 누르세요." -ForegroundColor Yellow
Write-Host ""

npm start
