# DRUMMER PRO — GitHub Android APK build

This repository packages the supplied DRUMMER PRO HTML app as an Android APK using Capacitor and GitHub Actions. The workflow uses Android SDK setup v4 (the previous v3 workflow failed because Google removed the deprecated SDK `tools` package).

## Build APK on GitHub

1. Create a new GitHub repository.
2. Extract this ZIP and upload **the contents of the `drummer-pro-github` folder** to the repository root (so `www/`, `package.json`, and `.github/` are at the root).
3. Open the repository's **Actions** tab and choose **Build DRUMMER PRO APK**.
4. Press **Run workflow** (or push to `main`/`master`, which also triggers a build).
5. When it finishes, open the run and download the `drummer-pro-debug-apk` artifact.
6. Extract the artifact ZIP. Install `app-debug.apk` on your Android device (you may need to allow installation from that source).

## Offline data

Songs and setlists are saved on the device using localStorage. They are not synced between devices. Clearing app storage can erase saved data. The app UI and core metronome run from the bundled HTML; any audio/media URLs in the original source may still require network access if they point to remote files.

## Notes

- This workflow builds a **debug APK**, suitable for testing and sideloading. A Play Store release needs a signed release build.
- The source HTML is preserved in `www/index.html`; the hosted records endpoint has been replaced with local offline storage for songs and setlists.
