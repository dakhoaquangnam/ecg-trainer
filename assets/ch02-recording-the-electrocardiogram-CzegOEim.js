var e=`# Chapter 2: Recording the Electrocardiogram

## Core Idea
The 12-lead ECG is two clock faces: six limb leads in the frontal plane (hexaxial system) and six precordial leads in the transverse plane. Every lead is a bipolar recording between a positive pole and a negative pole; Wilson's central terminal supplies the negative pole for nine of them. Placement errors are the commonest source of a "wrong" ECG.

## Frameworks Introduced
- **Standard 12-lead ECG**: Two viewpoints from Chapter 1 (base–apex, left–right) plus 10 more. Six frontal-plane leads + six transverse-plane leads. One body-surface electrode = the positive pole of each lead; the negative pole is a single electrode or Wilson's central terminal (average of multiple electrodes).
- **Einthoven's limb leads (I, II, III)**: RA–LA (I: LA +, RA −), RA–LL (II: LL +, RA −), LA–LL (III: LL +, LA −). Right leg = ground. Positive poles placed leftward/inferiorly so waveforms are mostly upright (forces point toward the apex). These three are the only leads using two body-surface electrodes.
  - When to use: limb-lead problems are always Einthoven problems first — check I, II, III before blaming the machine.
- **Einthoven triangle / triaxial system**: I, II, III at 60° to each other form an equilateral triangle; moved to intersect at the heart's center they give three views 60° apart.
- **Wilson central terminal and V leads**: Connecting RA + LA + LL through resistors creates a central terminal (~zero potential) used as the negative pole. A lead using it + a body-surface positive pole is a **V lead**.
- **Augmented leads (aV, Goldberger)**: Disconnecting the central terminal from the limb serving as positive pole "augments" the small signal → aVR, aVL, aVF. aVR fills the I–II gap, aVF the II–III gap, aVL the III–I gap.
  - **Einthoven's law: I + III = II.** Derived: aVR = −½(I + II); aVL = I − ½(II); aVF = II − ½(I); aVR + aVL + aVF = 0. Modern machines record only I and II and compute the rest in real time.
- **Hexaxial system**: I, II, III + aVR, aVL, aVF = six frontal views 30° apart (except aVR at −150°). Clock-face convention: I at 0°, + clockwise to +180°, − counterclockwise to −180°. II +60°, aVF +90°, III +120°, aVL −30°, aVR −150°.
- **Precordial leads V1–V6**: Wilson central terminal as negative pole + chest electrode as positive pole; no augmentation needed. V1 4th ICS right of sternum; V2 4th ICS left of sternum; V3 midway between V2 and V4; V4 5th ICS midclavicular line; V5 anterior axillary line lateral to V4; V6 midaxillary line lateral to V5. In women, V4/V5 under the breast. Angles ~30° apart (clock positions 11, 12, 1, 2, 3, 4 viewed from above).
- **Lead-reversal patterns**: RA–LA reversal (commonest): I inverted, II↔III swapped, aVR↔aVL swapped, aVF correct. RA on right leg: extremely low amplitude in lead II. LA on right leg: extremely low amplitude in lead III. LA–LL reversal (hardest to detect): III inverted, I↔II and aVL↔aVF swapped. V1↔V2 reversal distorts the precordial pattern. Limb reversal with right-leg ground produces near-zero leg-to-leg potential.
  - When to use: an "impossible" ECG (e.g. inverted I with upright aVR) is a placement error until proven otherwise.
- **Cabrera sequence**: Frontal leads in one orderly sequence aVL → I → −aVR → II → aVF → III (aVR inverted to −aVR), giving six spatially contiguous leads and five contiguous pairs; endorsed by the 2000 ESC/ACC consensus. Panoramic display runs left→right (aVL→III) then right→left (V1→V6), covering a 150° arc in both planes.
- **24-lead ECG**: Inverting all 12 leads gives 11 additional views; all 24 around the two clock faces give complete panoramic displays.
- **Continuous monitoring**: Standard sites are poor for monitoring (muscle artifact). Limb electrodes moved to torso (Mason-Likar) alter all limb leads and the central terminal; missing chest leads are derived. Compare monitoring tracings to a monitoring baseline, not to a standard 12-lead.
  - **MCL1** (modified chest lead V1: + at V1 position, − near left shoulder): best for atrial activity and left/right differentiation at the bedside.
  - **Holter**: AHA recommends a "V1-type" lead for rhythm (positive 4th right ICS 2.5 cm from sternum, negative below left clavicle); modern 3 orthogonal leads.
  - **EASI system**: 5 electrodes (E, A, S, I + ground) → derived 12-lead via transformation matrix. **SMART**: records I, II, V2, V5; reconstructs V1, V3, V4, V6. Advantages: fewer electrodes, clear landmarks, reproducibility, cost/time savings.
- **Alternative placement indications**: standard site unavailable (amputation, burns, bandages — place as close as possible and label the lead); specific abnormality (P waves hidden in T waves at fast rates — move V1 up one ICS, or V1+ with xiphoid −, or transesophageal; situs inversus dextrocardia — reverse arm electrodes, record V1R–V6R; right-ventricular disease — V3R/V4R; infants — V4R replaces V3).
- **Key practical points** (6 rules): (1) electrodes: maximum adhesion, minimum noise/impedance (AAMI standards); (2) skin contact essential — dry wipe only; poor contact/movement → baseline wander (gradual) or shifting baseline (abrupt); (3) calibration 1 mV = 10 mm (note if reduced to 5 mm); (4) paper speed 25 mm/s (note any change; faster = clearer morphology, slower = more cycles for rhythm); (5) artifacts: external 50/60 Hz line current (straighten wires along the body) vs internal (tremor, shivering, hiccups → noisy baseline); (6) patient supine — note any other position (side-lying, torso elevation shifts the heart and changes the tracing).

## Key Concepts
- **Lead**: potential difference between a positive and a negative body-surface electrode.
- **Central terminal (Wilson)**: RA+LA+LL connected through 5,000 Ω resistors; serves as negative pole for V leads.
- **V lead**: central terminal negative + exploring positive electrode.
- **aV lead**: augmented V lead; central terminal disconnected from the positive-pole limb.
- **Einthoven triangle**: equilateral triangle of leads I, II, III in the frontal plane.
- **Hexaxial system**: six frontal-plane leads, 30° apart.
- **Precordial**: on the thorax directly over the heart.
- **Intercostal space (ICS)**: space between ribs; landmark for V-lead placement.
- **MCL1**: modified V1 for monitoring atrial activity.
- **Artifact**: waveform from a non-myocardial source.
- **Baseline wander / shifting baseline**: gradual vs abrupt instability of the isoelectric line.
- **Mason-Likar**: torso limb-electrode positions for monitoring.
- **EASI / SMART**: reduced-electrode systems that reconstruct a 12-lead ECG.

## Mental Models
- Think of the 12 leads as 12 cameras around the heart: a "missing" view is a placement problem, not a heart problem.
- Think of the central terminal as a synthetic "zero" made by averaging three limbs — that is why all V leads share it.
- Think of aVR as the "upside-down" lead: normally negative, so an upright aVR is a red flag for arm reversal (or dextrocardia).
- Think of monitoring leads as a different instrument: never compare a Mason-Likar tracing to a standard 12-lead baseline.

## Anti-patterns
- **Comparing monitoring to standard baselines**: torso electrodes change every lead; use a monitoring baseline.
- **Ignoring aVR**: a positive QRS in aVR with negative I is usually arm reversal, not disease.
- **Accepting an ECG without checking placement**: even small precordial shifts distort waveforms; serial comparison demands identical placement.
- **Forgetting to note nonstandard placement**: an unlabeled alternative site becomes a false diagnosis for the next reader.

## Code Examples
<!-- Not applicable — no code in this chapter. Formulas preserved exactly: -->
- Einthoven's law: \`I + III = II\`
- \`aVR = −½(I + II)\` · \`aVL = I − ½(II)\` · \`aVF = II − ½(I)\` · \`aVR + aVL + aVF = 0\`

## Reference Tables

### Frontal-plane lead angles

| Lead | Angle | Positive pole |
|---|---|---|
| I | 0° | Left arm |
| II | +60° | Left leg |
| III | +120° | Left leg (neg: left arm) |
| aVR | −150° | Right arm |
| aVL | −30° | Left arm |
| aVF | +90° | Left leg |

### Precordial electrode placement

| Lead | Position |
|---|---|
| V1 | 4th ICS, right of sternum |
| V2 | 4th ICS, left of sternum |
| V3 | Midway between V2 and V4 |
| V4 | 5th ICS, midclavicular line |
| V5 | Anterior axillary line, lateral to V4 |
| V6 | Midaxillary line, lateral to V5 |

### Common lead reversals

| Reversal | Effect |
|---|---|
| Right arm ↔ left arm | I inverted; II↔III swapped; aVR↔aVL swapped; aVF correct |
| Right arm electrode on right leg | Extremely low amplitude in lead II |
| Left arm electrode on right leg | Extremely low amplitude in lead III |
| Left arm ↔ left leg | III inverted; I↔II swapped; aVL↔aVF swapped (hardest to detect) |
| V1 ↔ V2 | Precordial pattern distorted |

### Monitoring systems

| System | Electrodes | What is recorded |
|---|---|---|
| Mason-Likar | Standard precordial + torso limb sites | 12 leads, altered vs standard |
| EASI | 5 (E, A, S, I + ground) | Derived 12-lead |
| SMART | I, II, V2, V5 | V1, V3, V4, V6 reconstructed |
| MCL1 | + at V1, − near left shoulder | Atrial activity, bedside rhythm |

## Worked Example
**Spotting an RA–LA reversal.** A tracing shows lead I entirely inverted (negative P, negative QRS, negative T) while aVR is upright and lead II looks like lead III. Apply the reversal table: RA–LA reversal inverts I, swaps II↔III, swaps aVR↔aVL, leaves aVF correct. The pattern fits exactly — the "abnormal" ECG is a placement error. Correct the electrodes and re-record; do not diagnose dextrocardia or infarction from the reversed tracing.

## Key Takeaways
1. 12 leads = 6 frontal (hexaxial) + 6 precordial; Wilson's central terminal is the negative pole for nine of them.
2. I + III = II; aV leads derive from I and II — modern machines compute them.
3. V1–V6 sit on bony landmarks (ICS 4–5, MCL/AAL/MAL); small shifts distort waveforms.
4. The commonest placement error is RA–LA reversal — recognize its signature, don't misdiagnose it.
5. Cabrera sequence (aVL→III) and the 24-lead view give spatially contiguous displays for ischemia.
6. Monitoring (Mason-Likar, EASI, SMART) is a different instrument — compare only to monitoring baselines.
7. Calibration 1 mV = 10 mm, speed 25 mm/s, patient supine; note every deviation on the tracing.

## Connects To
- **Ch 1**: long/short-axis views become −aVR and V1; the conduction-system anatomy explains why lead orientation matters.
- **Ch 3**: electrode placement quality determines whether the 9-feature read is trustworthy; axis determination uses the hexaxial system built here.
`;export{e as default};