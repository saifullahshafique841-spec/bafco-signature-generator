# Vibration Analyst Lab

An interactive study lab for vibration analysis (ISO CAT III level). Learn to collect data you can trust with a step-by-step guide and a VA5 Pro or VA3 Pro style instrument to practise on, analyse a year of route data in a DDS-style window, follow a guide for each kind of machine, simulate faults and diagnose them, plan instrument settings, work through Chapters 3 to 5 and Chapter 12 (journal bearings) section by section, see Chapter 11 (rolling bearings) in eight simulators and Chapter 15 (gearboxes) in eleven, and learn phase with animated lessons and a free-play phase simulator.

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

Version 2.6 installs over the earlier app and keeps your settings.

## On a phone

The lab opens as an app: a Home screen with every section, a bottom bar (Home, Collect, Analyze, Learn, Labs) with a switcher for the sections in each group, and the bars slide away while you read. The back button returns to Home. Choose a Light, Dark or Auto theme in Settings (the gear on Home).

## Reading each screen

Every section uses the same colour code:

- **Settings** (yellow edge, sliders badge and an *Adjust* tag): the parameters you can change. Sliders have yellow knobs, dropdowns have an arrow, and the current value sits in a pill.
- **Results** (screen badge): charts, readouts and tables that update as soon as you change a setting.
- **Notes and checks** (book or question badge): key points, rule cards and quick questions.

## New in 2.6

- **Ch 15 · Gearbox simulators**, a new section under Learn: Chapter 15 of the CAT III manual as eleven simulators. Each one starts with the simple idea in everyday words and pictures (two circles of dancers, a bell that rings when knocked, a wheel with a bump, stacking photos, a merry-go-round of gears), with predictions to make, then moves to the analyst's view with the formulas and the manual's pages. Each has "Words to know", a one-line "Remember it", a free explore mode and a challenge of five rounds: every set has a number, so you can play the same set again, and your best score is kept. Why gearboxes fail and the parts of a gear mesh, with root causes to find; the gear types and their forces; speeds and gear mesh frequencies, worm drives included; common factors, the assembly phase and hunting tooth frequencies and ghosts, with a meeting grid and a circular plot; a healthy gearbox, Fmax and lines, and time synchronous averaging; tooth wear and tooth load, with the gear's natural frequency ringing; the look-alikes (an eccentric gear, backlash with a load test, misaligned gears, spokes), also side by side; cracked, broken and spalled teeth, with time cursors to measure the gap between knocks, why the waveform matters, and wear particle analysis; planetary gearboxes (configurations, the fit rule, every speed from one equation, where to look); measuring a gearbox (location, direction, mounting, resolution, the VA5 Pro and DDS field names, and a whole setup for a three-stage gearbox); and a whole-chapter diagnosis: fifteen faults on randomly drawn gearboxes, solved with zoom, the low end, the circular plot, the load test and the waveform, and scored on the diagnosis and on the clue that decides it.
- One gear model drives all eleven simulators and is checked by 114 tests against the chapter's worked examples, including the sideband spacing of every fault. The Gear lab, the gearbox guide and the Setup planner now use the same model for speeds, gear mesh, common factors and the Fmax and resolution rules. Where the manual prints something wrong (a worm with 7.5 flights, the planetary sign errors, a worked example whose teeth cannot fit), the simulators follow the correct version and say so.
- The Gear lab, the gearbox machine guide, the Chapter 4 gearbox section, the Setup planner's gearbox machines and the fault simulator's eccentricity card link to the new simulators.
- Faster drawing of dense waveforms and spectra on phones.

## New in 2.5

- **Two new groups.** The bottom bar is now Home · Collect · Analyze · Learn · Labs: Collect holds the data collection guide, the practice instrument, the setup planner and the settings map; Analyze holds the DDS practice, the machine guides, the fault simulator and the diagnose challenge.
- **Data collection guide** (Collect), 15 steps, each with a simulation and a caption that follows the controls: plan the program from the P-F interval; VA3 Pro or VA5 Pro for each job; the sensor, ICP and sensitivity; mounting and its frequency response; points, axes and the load zone; speed from a tacho, detection or entry; lines, averages and the route clock; the same conditions every time; the demodulation band; ACMT for slow machines; the route between DDS and the instrument; ISO, Adash and statistical limits; run-up and bump tests; greasing with Lubri and ultrasound; and how to spot bad data. The key points cite the CAT III (C), VA5 Pro (VA5), VA3 Pro (VA3) and DDS (DDS) manuals by page.
- **Practice instrument** (Collect): a VA5 Pro or VA3 Pro style analyser measuring a motor and pump on a bench. Set up sensors and the tacho, build sets and measurements, run a route, use FASIT, the Meter screens, Runup, the Bump test, Lubri, the strobe and the Balancer, with 18 drills that check each step against the manual pages.
- **DDS practice** (Analyze): a DDS-style analysis window on a year of route data from the four machines of a pump house: the tree with its alarms, the Data List, trends against ISO 20816, Adash and user limits, spectra with harmonic and sideband cursors, Locate Peak, bearing labels, waterfalls, Set Speed, Set Limits by Statistics, Confirm, notes and reports, and the route download from the practice instrument, with 12 drills.
- **Machine guides** (Analyze), 11 guides following the CAT III manual: the workflow from alarm to report with a confidence and status rating; look-alike faults narrowed down one question at a time; electric motors (2xLF, slip, pole pass, rotor bars and motor current); centrifugal pumps (vane pass, the pump curve, cavitation and turbulence); fans and blowers (with ISO 14694); compressors; gearboxes (gear mesh, sidebands, assembly phase, hunting tooth and the waveform); rolling-element bearings (a defect frequency calculator and the four stages); journal bearings (oil whirl and whip); belt drives; and couplings.
- The setup planner names its Adash DDS fields as the DDS manual does (for example Demod-Spectrum and Estimated Measurement Time).
- The practice instrument and the DDS practice imitate the screens for training only; they are not Adash products and carry no Adash branding.

## New in 2.4

- **Ch 11 · Rolling bearing simulators**, a new section under Learn: Chapter 11 of the CAT III manual as eight simulators, one per topic. Each has a guided story (predict, then watch), a free explore mode, a challenge, and its own save button that can record the whole story as a highlight reel with captions. Why bearings fail and how the vibration moves down in frequency as damage grows; the four defect frequencies counted from a turning bearing (BPFO + BPFI = N, and the 22312 with one roller more); why a routine velocity spectrum misses early damage (dynamic range, sampling, mounting, position and a linear scale); the four stages with their remaining life and actions; enveloping step by step, with a playhead that runs through every screen in time with the bearing; Shock Pulse, PeakVue and Spike Energy, and a 9.5 RPM dryer bearing; the stage-three patterns of each defect; and Air washer #1 followed from its first sign to its failure, with the chapter's other cases as challenges. Where the manual's rule and the physics differ (the life lost to 10 % more load, one more rolling element), the simulators show both.

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
| Data collection guide | 15 steps from planning the program to spotting bad data, each with a simulation, the manual pages and check questions |
| Practice instrument | A VA5 Pro or VA3 Pro style analyser on a motor and pump bench, with 18 step-checked drills |
| Setup planner | Best Fmax, lines, waveform and demodulation settings for a machine |
| Settings map | Change one setting and follow its effect through all the others |
| DDS practice | A year of route data from four machines in a DDS-style analysis window, with 12 drills |
| Machine guides | The analysis workflow, look-alike faults, and a guide for motors, pumps, fans, compressors, gearboxes, bearings, belts and couplings |
| Fault simulator | Pick a fault; see the machine, spectrum, waveform, phase and orbit respond |
| Diagnose challenge | A hidden fault to find by measuring like a route |
| Ch 3 · Signal processing | From the sensor to the spectrum, section by section |
| Ch 4 · Time waveform | Setting up, reading and recognising time waveforms |
| Ch 5 · Phase | How phase separates unbalance, misalignment, bent shaft, looseness and more |
| Ch 11 · Rolling bearing simulators | Eight simulators with a guided story, explore mode and challenge each: why bearings fail, defect frequencies, what routine spectra miss, the four stages, enveloping, Shock Pulse, PeakVue and Spike Energy, defect patterns, and case studies |
| Ch 15 · Gearbox simulators | Eleven simulators, simple idea first: why gears fail, gear types, speeds, common factors and hunting tooth, a healthy gearbox and TSA, wear and load, look-alike faults, broken and spalled teeth, planetary sets, measuring, and a diagnosis on random gearboxes; challenges of five rounds with a best score |
| Ch 12 · Journal bearings | Proximity probes, the Keyphasor, orbits and the shaft centerline; unbalance, preload, oil whirl and whip, and rubs, section by section |
| Phase animations | Thirteen animated phase lessons in plain words, including the three speed zones (rigid rotor, critical speed, flexible rotor) and finding the heavy spot from a phase reading, plus a free-play phase simulator with missions |
| Bearing, Gear, Balancing, Resonance labs | Defect frequencies, sidebands, single-plane balancing, Bode and bump tests |
| Fan balancing | Field balancing of a fan: place the laser tacho and accelerometer, set the Adash to AR or WR, find the heavy spot, size the trial weight and split the correction over the blades |
| Heavy & high spot simulator | A rotor in 3D with a strobe view, polar plot, phase waveform and Bode plot in step: a guided tour, free exploring, vector balancing with trim runs, and a find-the-heavy-spot challenge |

## Notes

- Everything runs in your browser. Nothing is uploaded; your settings stay on your device.
- Signals are idealised teaching models. Real machines add noise, speed changes and several faults at once.
- Page references point to the CAT III manual (C:), the Adash VA5 Pro, VA3 Pro and DDS manuals (VA5:, VA3:, DDS:), the iVibe reference (iV) and other study material. The manuals themselves are not included.
- Fonts: IBM Plex Sans, IBM Plex Mono and Barlow Condensed (SIL Open Font License), embedded so the app works offline.
