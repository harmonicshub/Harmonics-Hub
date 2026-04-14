# HARMONICS HUB Mobile App

Production-oriented Expo mobile app for HARMONICS HUB, built from the current website content and connected to the website backend for live content and submissions.

## Scope

This app currently includes:

- Expo Router bottom-tab navigation
- branded Android app configuration and build profiles
- live content fetch from the website backend
- business inquiry and academy registration submissions
- website-linked resources and article previews

## Stack

- Expo
- React Native
- Expo Router
- PHP backend API

## Run Locally

This workspace now includes a repaired local Node runtime in `C:\Users\PC\Harmonics\tools\node-v24.14.1-win-x64`, so you can run the Expo app without relying on the broken system Node install.

If you want to use the standard commands after enabling the local runtime:

```bash
npm install
npx expo install expo-router react-native-screens react-native-safe-area-context
npm run start
```

Use these helper scripts from PowerShell:

```powershell
.\use-local-node.ps1
.\start-local.ps1
.\build-apk-local.ps1
```

`start-local.ps1` uses Expo offline mode, a fixed port, non-interactive startup, and a reduced worker count to be more reliable on this machine.

Then open the Expo project on:

- Android emulator
- iOS simulator
- Expo Go

## Notes

- The app consumes live content from `https://harmonicshub.com/api/content.php`.
- Form submissions are sent to `https://harmonicshub.com/api/submit.php`.
- `eas.json` includes Android build profiles for both production builds and APK output.
- The current Android package id assumption is `com.harmonicshub.mobile`.
- The local Node repair uses the official portable Node.js runtime inside `C:\Users\PC\Harmonics\tools`.
