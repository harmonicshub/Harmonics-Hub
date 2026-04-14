. "$PSScriptRoot\use-local-node.ps1"
$env:CI = "1"
$env:EXPO_NO_TELEMETRY = "1"
& "C:\Program Files\nodejs\npx.cmd" expo start --offline --non-interactive --port 8083 --max-workers 1 --clear
