# A five-minute tour of NAVRYNT Demo

Start the demo from the repository directory:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. All records and map tracks in the interactive workspace are fictional.

## 1. Follow a case

Open **Investigations** and select **Open case** for `CASE-ALPHA-27 / Harbor Signals`. Read the evidence timeline. Select a source to inspect its origin and limitations. Return to the case, add a session note, then download a sample JSON brief.

Expected: the downloaded brief contains fictional case data and the current session's note. A note does not persist after a page reload. The export is not an automated assessment.

## 2. Inspect a relationship

Open **Entity Graph**, select **Track T-21**, and read the source context in the side panel. Switch the **Show** filter to **Evidence**. Nodes also support Tab and Enter/Space.

Expected: the selected node and context change. Links illustrate relationships in the invented scenario; they do not prove a real-world identity.

## 3. Move through a track

Open **GEOINT**. Move the scenario-time slider, then switch between `T-21` and `T-08`.

Expected: visible observations, selected track and scenario time update. The map is an illustrative SVG scene with generated observations, not a real geographic basemap or a live location service.

## 4. Compute a real hash

Open **Media Forensics** and select a local file of up to 20 MiB. The browser reads its bytes and computes SHA-256 through Web Crypto. Use localhost HTTP or HTTPS; opening the HTML directly from disk is not the supported setup.

Expected: the file's name, size, browser-reported type and SHA-256 appear. The file is not uploaded. A matching hash establishes byte identity, not origin, authenticity or an unbroken chain of custody.

## 5. Explore specialist workflows

Open **Biometric Lab** and switch between Face, Iris, Fingerprint, Voiceprint, Writer-ID and Gait. Select a workflow stage and review the boundary text.

Expected: the interface preview changes. No biometric sample is collected and no model executes. Example scores and research descriptions are not fresh analysis of your data.

Open **Model Studio**, choose a modality/action, and build an example plan. Inspect or download the JSON.

Expected: `demo: true` and `executes: false`. No training, dataset validation, model loading, evaluation or export has taken place.

## Navigation and display

- Use the sidebar or Command/Ctrl + K to switch modules.
- Escape closes dialogs and drawers; focus returns to the opener.
- The theme button switches dark/light mode and stores the preference locally.
- On a narrow screen, use the navigation toggle. Reduced-motion preferences are respected.
- **Project Scope** documents execution and data boundaries.

## Troubleshooting

| Symptom | Check |
|---|---|
| Hashing is unavailable | Serve on localhost or HTTPS in a current Web Crypto-capable browser. |
| Address is already in use | Choose another port, such as `python3 -m http.server 4174 --bind 127.0.0.1`. |
| Notes disappeared | Notes are intentionally session-only and reset on reload. |
| A provider or model does not execute | This repository is a static preview; no backend or live provider client is included. |
| `node` is unavailable | Node is optional for serving; Python validates files/links, and checks JavaScript syntax when Node is present. |
