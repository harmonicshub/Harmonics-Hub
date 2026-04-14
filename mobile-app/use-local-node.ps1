$localNode = "C:\Users\PC\Harmonics\tools\node-v24.14.1-win-x64"
$npmShim = "C:\Program Files\nodejs"

if (-not (Test-Path (Join-Path $localNode "node.exe"))) {
    throw "Local Node runtime not found at $localNode"
}

$env:PATH = "$localNode;$npmShim;$env:PATH"
Write-Host "Local Node runtime enabled from $localNode"
