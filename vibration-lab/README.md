# Vibration Analyst Lab

An interactive study lab for vibration analysis (ISO CAT III level). Simulate faults and diagnose them, plan instrument settings, work through Chapters 3 to 5 and Chapter 12 (journal bearings) section by section, and learn phase with animated lessons and a free-play phase simulator.

**Open the lab:** https://saifullahshafique841-spec.github.io/bafco-signature-generator/vibration-lab/

<img src="qr.png" alt="QR code that opens the lab" width="180">

## Put it on your iPhone or iPad

**Quickest:** open the link above in **Safari**, tap **Share**, then **Add to Home Screen**.

**Or use the iPhone install file, [VibrationAnalystLab.mobileconfig](VibrationAnalystLab.mobileconfig)**, which you can also send by WhatsApp, email or AirDrop:

1. Open the file on the iPhone: AirDrop it, open it from Mail, or tap the link in Safari and allow the download. If Safari puts it in Downloads, open it from the **Files** app. From WhatsApp, save it to Files first.
2. Open **Settings**, tap **Profile Downloaded** near the top, then **Install** and enter your passcode.
3. The **Vibration Lab** icon is now on the Home Screen. It opens full screen like an app and keeps working offline after the first launch.

The iPhone shows the file as "Not Verified" because it is not signed with a paid Apple certificate. It only adds the Home Screen icon and changes nothing else. To remove it, delete the icon, or go to Settings → General → VPN & Device Management.

**Saving on iPhone:** the GIF, video, picture and backup buttons open the iPhone share sheet. Choose **Save Image** or **Save Video** to keep it in Photos, or **Save to Files**. After a long recording, tap **Save to Photos or Files** once more to open the sheet.

## Android app

Download **[VibrationAnalystLab.apk](VibrationAnalystLab.apk)** on your Android phone and tap it to install (allow installs from your browser if asked; Play Protect may warn because it is not from the Play Store: choose **Install anyway**). Or open the link in Chrome and choose **Install app** from the menu.

Version 2.3 installs over the earlier app and keeps your settings.

## On a phone

The lab opens as an app: a Home screen with every section, a bottom bar (Home, Diagnose, Setup, Learn, Labs) with a switcher for the sections in each group, and the bars slide away while you read. The back button returns to Home. Choose a Light, Dark or Auto theme in Settings (the gear on Home).

## Reading each screen

Every section uses the same colour code:

- **Settings** (yellow edge, sliders badge and an *Adjust* tag): the parameters you can change. Sliders have yellow knobs, dropdowns have an arrow, and the current value sits in a pill.
- **Results** (screen badge): charts, readouts and tables that update as soon as you change a setting.
- **Notes and checks** (book or question badge): key points, rule cards and quick questions.

## New in 2.3

- **Ch 12 · Journal bearings**, a new chapter under Learn in 18 sections, each with its own simulation and a caption that follows the controls, the key points with their CAT III page (C:12-…), try-it steps and check questions: what proximity probes see inside an oil-film bearing; bearing designs and the oil wedge; the eddy-current probe and its proximitor (A.C. and D.C.); sensitivity, linear range and polarity (200 mV/mil, so 5 mil pk-pk reads 1 V pk-pk, and closer means less negative); the X/Y probe convention and what a swap does to the orbit; the Keyphasor; building the orbit from two waveforms; direct and filtered orbits; slow-roll glitch compensation; collector settings (Fmax, lines, revolutions and time synchronous averaging); the shaft centerline and eccentricity ratio; preload (banana and figure 8); precession and the blank–bright order; unbalance and misalignment orbits; counting dots and loops; oil whirl and oil whip on a run-up waterfall, with its own button to save the run-up as a GIF; rubs at ½X, ⅓X and ¼X; and a diagnose-it trainer. Displacement in µm or mils.

## New in 2.2

- **Heavy & high spot simulator**, a new section under Labs: one rotor with a heavy spot, seen four ways at once and all in step. A 3D machine (the disc whirls towards the high spot and the probe lights up as it sweeps past), a strobe view with the vibration vector and the polar plot its tip draws, the probe and tach signals with the phase reading, a Bode plot of every run-up, and the hand-and-ball picture. Take the guided tour (predict, then watch), explore freely, balance the rotor with a trial weight, the vector method and trim runs, or find a hidden heavy spot from a phase reading in the challenge. Count phase + with rotation (Adash) or + against rotation.
- **Finding the heavy spot**, a new phase animation told the way Adash's *Secrets of imbalance* videos explain it: a five-blade fan with a clip, a tacho and one sensor. The phase reading becomes an arrow (the vibration vector); correct it for the kind of signal (displacement as read, velocity −90°, acceleration −180°), for where the sensor sits and for the speed (about +180° above the first resonance), then put the trial mass on the opposite side. Switch between Adash's + with rotation and the + against rotation convention.

## New in 2.1

- **Three speed zones**, a new phase animation in plain words: speed a rotor from below to above its critical speed and watch the heavy spot and the high spot, which point it spins about (geometric centre or centre of mass), the shaft bending in a side view, and a table of the three zones (rigid rotor, resonant mode, flexible rotor) with the row for the present speed lit up.
- **iPhone install file** and saving through the iPhone share sheet (see above).

## New in 2.0

- **Search** every section, chapter topic, animation, fault and term; a result opens the exact place (for example Ch 3 · Nyquist and aliasing).
- **Your progress**: lessons done (Chapters 3–5 and the phase animations), check questions right first time, challenge score and your day streak.
- **Save and notes**: save any screen and write notes on it; find them under Saved.
- **Save any animation** as a GIF, a video or a PNG picture: the GIF button on every phase animation, and the download button on every chart and moving picture.
- **Settings**: theme, text size up to 200 % in the Android app, reduced motion, haptics, and a backup file to move your progress to another phone.
- A three-screen welcome on first launch that suggests where to start for your goal.

## What's inside

| Tab | What you can do |
|---|---|
| Fault simulator | Pick a fault; see the machine, spectrum, waveform, phase and orbit respond |
| Diagnose challenge | A hidden fault to find by measuring like a route |
| Setup planner | Best Fmax, lines, waveform and demodulation settings for a machine |
| Settings map | Change one setting and follow its effect through all the others |
| Ch 3 · Signal processing | From the sensor to the spectrum, section by section |
| Ch 4 · Time waveform | Setting up, reading and recognising time waveforms |
| Ch 5 · Phase | How phase separates unbalance, misalignment, bent shaft, looseness and more |
| Ch 12 · Journal bearings | Proximity probes, the Keyphasor, orbits and the shaft centerline; unbalance, preload, oil whirl and whip, and rubs, section by section |
| Phase animations | Thirteen animated phase lessons in plain words, including the three speed zones (rigid rotor, critical speed, flexible rotor) and finding the heavy spot from a phase reading, plus a free-play phase simulator with missions |
| Bearing, Gear, Balancing, Resonance labs | Defect frequencies, sidebands, single-plane balancing, Bode and bump tests |
| Fan balancing | Field balancing of a fan: place the laser tacho and accelerometer, set the Adash to AR or WR, find the heavy spot, size the trial weight and split the correction over the blades |
| Heavy & high spot simulator | A rotor in 3D with a strobe view, polar plot, phase waveform and Bode plot in step: a guided tour, free exploring, vector balancing with trim runs, and a find-the-heavy-spot challenge |

## Notes

- Everything runs in your browser. Nothing is uploaded; your settings stay on your device.
- Signals are idealised teaching models. Real machines add noise, speed changes and several faults at once.
- Page references point to the CAT III manual (C:), the iVibe reference (iV) and other study material. The manuals themselves are not included.
- Fonts: IBM Plex Sans, IBM Plex Mono and Barlow Condensed (SIL Open Font License), embedded so the app works offline.
