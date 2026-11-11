var e=`# Chapter 3: Interpretation of the Normal Electrocardiogram

## Core Idea
Read every ECG with the same 9-feature system, in the same order: rate/regularity → P → PR → QRS → ST → T → U → QTc → rhythm. Each waveform is judged on four things: contour, duration, amplitude, axis. And never finish without comparing to prior tracings.

## Frameworks Introduced
- **The 9-feature systematic approach**: (1) Rate and regularity, (2) P-wave morphology, (3) PR interval, (4) QRS complex morphology, (5) ST-segment morphology, (6) T-wave morphology, (7) U-wave morphology, (8) QTc interval, (9) Rhythm. Rate/regularity/rhythm group together, but rhythm can only be judged after all eight other features.
  - When to use: every ECG, every time — the order prevents skipping the feature that holds the diagnosis.
- **ECG grid (the ruler)**: Thin lines every 1 mm, thick lines every 5 mm. At 25 mm/s: small square = 0.04 s × 0.1 mV; large square = 0.20 s × 0.5 mV. Vertical = time/intervals/rate; horizontal = amplitude.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-01.jpg" alt="Figure 3.1 — Grid lines on standard ECG paper" loading="lazy">
  <figcaption><b>Figure 3.1.</b> Grid lines on standard ECG paper: small square 1 mm = 0.04 s × 0.1 mV; large square 5 mm = 0.20 s × 0.5 mV.</figcaption>
</figure>
- **Rate methods**: If essentially regular, count large squares between identical waveforms and divide into **300** (1 large square = 300 bpm, 2 = 150, 3 = 100, 4 = 75). If rate >100 bpm, use small squares and divide into **1500** (6 small = 250, 7 = 214) — small differences matter more at fast rates. If irregular, atrial and ventricular rates must be measured separately. Normally equal numbers of P waves and QRS complexes.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-02.jpg" alt="Figure 3.2 — Lead II, counting rate by large squares" loading="lazy">
  <figcaption><b>Figure 3.2.</b> Lead II: counting rate by large squares between complexes — 300, 150, 100, 75, 60, 50, 40 bpm.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-03.jpg" alt="Figure 3.3 — Intervals between waveforms estimate cardiac rate" loading="lazy">
  <figcaption><b>Figure 3.3.</b> Intervals between ECG waveforms can be used to estimate cardiac rate: horizontal axis is seconds and large squares, vertical axis is beats per minute.</figcaption>
</figure>
- **P-wave morphology (4 steps)**: (1) Contour: smooth, monophasic (entirely + or −) in all leads except V1 (and possibly V2), where it is often biphasic (right-atrial first part +, left-atrial final part −). (2) Duration: normally <0.12 s. (3) Amplitude: ≤0.2 mV frontal, ≤0.1 mV precordial. (4) Axis: upright in I, II, aVF, V4–V6; negative in aVR; normal frontal limits 0° to +75°.
  - When to use: a P that merges with the preceding T at fast rates is the first thing to miss — look for it before calling a rhythm "no P waves".

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-04.jpg" alt="Figure 3.4 — Typical normal P wave" loading="lazy">
  <figcaption><b>Figure 3.4.</b> Typical normal P wave. A. Long axis (frontal plane, lead II). B. Short axis (transverse plane, lead V1). LA: left atrium; RA: right atrium.</figcaption>
</figure>
- **PR interval**: Onset P → onset QRS; normally **0.10–0.21 s**. Mostly AV nodal delay, so it varies with rate (shorter at fast rates, longer at slow rates) and age: childhood 0.10–0.12 s, adolescence 0.12–0.16 s, adulthood 0.14–0.21 s. Short PR + normal P axis → fast AV nodal pathway or accessory bundle (preexcitation risk). Long PR + normal P axis → delay somewhere on the normal pathway. P axis <+30° or >+75° suggests an ectopic atrial/low-atrial/AV-nodal origin.
- **QRS morphology**: Higher-frequency, peaked contour (vs rounded P/T). Q waves: any Q in V1–V3 is abnormal; in other leads (except III, aVR) a "normal" Q is tiny — upper limits: I, II, aVL, aVF <0.03 s; V4 <0.02 s; V5, V6 <0.03 s. Absence of small Q in V5/V6 is abnormal. Any Q is normal in III and aVR (rightward orientation). R waves: normally increase V1→V4/V5 (R progression); loss suggests infarction. S waves: large in V1, larger in V2, then progressively smaller V3→V6. QRS duration 0.07–0.11 s (slightly longer in males); measure earliest onset to latest offset across multiple simultaneous leads (a lead can hide onset/offset when the vector is perpendicular to it — e.g. only lead I showed the true 0.12 s in Fig. 3.7). Intrinsicoid deflection = onset Q/R to R peak; reflects endocardium→epicardium activation time. Amplitude: peak-to-peak up to 4 mV can be normal; low voltage = ≤0.5 mV in any limb lead and ≤1.0 mV in any precordial lead (thick chest wall, hypothyroidism, amyloidosis, infiltrative disease).

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-06.jpg" alt="Figure 3.6 — Panoramic display of the precordial leads" loading="lazy">
  <figcaption><b>Figure 3.6.</b> Panoramic display of the precordial leads V1–V6 on one continuous strip: S waves largest in V2 then falling, R waves growing V1→V5.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-07.jpg" alt="Figure 3.7 — QRS complexes in I, II, III" loading="lazy">
  <figcaption><b>Figure 3.7.</b> QRS complexes in I, II, III. Vertical grid lines, 0.04-second time intervals — the onset or end of the QRS may be isoelectric in one lead, so multiple leads must be compared to measure the true duration.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-08.jpg" alt="Figure 3.8 — Magnified QRS, intrinsicoid deflection" loading="lazy">
  <figcaption><b>Figure 3.8.</b> Magnified QRS complex. Double-headed arrow: intrinsicoid deflection (0.05 s) — from onset of Q/R to the R peak.</figcaption>
</figure>
- **QRS axis determination (transitional-lead method)**: (1) Find the transitional lead — QRS most nearly equiphasic (positive ≈ negative). (2) The lead perpendicular to it (hexaxial system) holds the axis. (3) If the QRS in that lead is predominantly positive, the axis equals that lead's positive pole; if negative, its negative pole. Normal frontal axis **−30° to +90°** (positive in I and II). Shortcut: I+ aVF+ → 0° to +90° normal; I− II+ → right-axis deviation (+90° to ±180°); I+ II− → left-axis deviation (−30° to −120°); I− II− → extreme axis deviation (−90° to ±180°). Manual method rounds to nearest 30° — sufficient clinically. Axis moves right→left with age (rightward in neonate, vertical in childhood, leftward in adult); more vertical in thin people, more horizontal in heavy people. Transverse plane: transitional lead usually V3/V4, axis typically 0° to −60°.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-09.jpg" alt="Figure 3.9 — Identifying the QRS frontal plane axis" loading="lazy">
  <figcaption><b>Figure 3.9.</b> Identifying the QRS complex frontal plane axis. The vertical line without an arrow indicates the transitional lead. In A there is no transitional lead — the transition lies between aVF and III.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-10a.jpg" alt="Figure 3.10 — Frontal plane QRS axis" loading="lazy">
  <img src="figures/ch03/fig-3-10b.jpg" alt="Figure 3.10 — Frontal plane QRS axis" loading="lazy">
  <figcaption><b>Figure 3.10.</b> Frontal plane QRS axis: A. +60°, B. +150°, C. −30°, D. −60°, E. −120°. EAD: extreme axis deviation; LAD: left axis deviation; NA: normal axis; RAD: right axis deviation.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-12.jpg" alt="Figure 3.12 — QRS and T axes by age" loading="lazy">
  <figcaption><b>Figure 3.12.</b> A. Young child. B. Young adult. C. Elderly adult. Solid arrows: directions of QRS and T axes in the frontal plane; dashed arrows: in the transverse plane.</figcaption>
</figure>
- **ST segment**: Early repolarization period; J point = QRS/ST junction. Points named by ms beyond J (J+20, J+40, J+60). Normally at TP-segment baseline level. Normal variants: slight upsloping/downsloping/horizontal depression; early repolarization displaces ST up to 0.1 mV toward the T wave; young males may show greater elevation in V2–V3; prolonged QRS alters ST appearance.
- **T-wave morphology**: Smooth, rounded, like the P wave; positive in all leads except aVR (negative) and V1 (biphasic or entirely negative). Duration not measured separately (inside QT). Amplitude: ≤0.5 mV limb, ≤1.5 mV precordial (females ~⅔ of these); ≤0.3 mV in aVL/III, ≤0.5 mV in V1/V6; always greater than the U wave if present; diminishes with age, larger in males. **QRS-T angle**: frontal ≤45°, transverse ≤60° normally; widens in hypertrophy, infarction, conduction disease.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-11.jpg" alt="Figure 3.11 — Normal, normal variant and abnormal ECGs" loading="lazy">
  <figcaption><b>Figure 3.11.</b> A. Normal ECG. B–D. Normal variant ECGs. E. Abnormal ECG. Arrows: ST-segment deviations in precordial leads.</figcaption>
</figure>
- **U-wave morphology**: Absent or small rounded wave after T; same direction as T; ~10% of T amplitude; most prominent in V2–V3; larger at slow rates; merges with P at fast rates; TU junction usually on baseline. Origin uncertain: (1) late Purkinje repolarization, (2) M-cell repolarization, (3) mechanoelectrical afterpotentials.

<figure class="ch-fig">
  <img src="figures/ch03/fig-waves.jpg" alt="P, QRS, T and U waveforms with intervals" loading="lazy">
  <figcaption><b>Unnumbered illustration in the book.</b> Waveforms: P (atrial depolarization), QRS (ventricular depolarization), T and U (ventricular recovery). SA: sinoatrial node; AV: atrioventricular node; His: bundle of His.</figcaption>
</figure>
- **QT and QTc**: QT = onset QRS → end T (tangent method: line through the steepest part of the T's terminal downslope to baseline). QT varies inversely with rate, so correct it: **Bazett: QTc = QT / √RR** (RR in seconds). **Hodges: QTc = QT + 0.00175 × (ventricular rate − 60)** — better at high/low rates. Upper limit ≈ **0.46 s (460 ms)**; slightly longer in adult females, increases with age, states, medications. Requires several regular equal cycles (adaptation is not immediate); T–U fusion makes measurement hard.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-13.jpg" alt="Figure 3.13 — Tangential method for the end of the T wave" loading="lazy">
  <figcaption><b>Figure 3.13.</b> Tangential method for determining the end of the T wave: the end of the T wave is the point where a line fit through the steepest part of the descending T wave intersects the baseline.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-intervals.jpg" alt="ECG segments and intervals" loading="lazy">
  <figcaption><b>Unnumbered illustration in the book.</b> Segments and intervals: P–R segment, P–R interval, QRS interval, S–T segment, Q–T interval, T–P interval.</figcaption>
</figure>
- **Cardiac rhythm (intro)**: Normal = sinus rhythm (SA node origin), **60–100 bpm** awake at rest. <60 = sinus bradycardia, >100 = sinus tachycardia — but "normal" depends on activity (40 bpm in sleep, 200 bpm in exercise can be normal; 90 bpm can be abnormal in either). Sinus arrhythmia = normal respiratory variation (faster on inspiration, slower on expiration); loss of heart-rate variability suggests autonomic/cardiac disease. Abnormal P axis, PR, or QRS morphology patterns (Fig. 3.15–3.17) hint at rhythm origin: short PR + normal P axis + normal QRS → fast AV pathway; short PR + delta wave + wide QRS → ventricular preexcitation (reentry risk); long PR + normal P axis → conduction delay; absent P → obvious rhythm abnormality — the reader must locate the P wave if present.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-14.jpg" alt="Figure 3.14 — Sinus arrhythmia" loading="lazy">
  <figcaption><b>Figure 3.14.</b> Sinus arrhythmia: rate varies with respiration — faster on inspiration, slower on expiration.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-15.jpg" alt="Figure 3.15 — P-wave and PR-interval patterns" loading="lazy">
  <figcaption><b>Figure 3.15.</b> P-wave / PR-interval patterns. A. Normal (PR 0.2 s — the upper limit of normal). B. Ectopic P wave. C. Short PR interval. D. Prolonged PR interval. E. Retrograde P wave. F. Absent P wave. Vertical grid lines, 0.2-second time intervals.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-16.jpg" alt="Figure 3.16 — Short PR, delta wave, prolonged QRS" loading="lazy">
  <figcaption><b>Figure 3.16.</b> A. Normal. B. Short PR with delta wave. C. Normal PR with prolonged QRS. D. Absent P with prolonged QRS. Vertical grid lines, 0.2-second time intervals.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-17.jpg" alt="Figure 3.17 — QRS-to-T relationship" loading="lazy">
  <figcaption><b>Figure 3.17.</b> QRS-to-T relationship. A. Normal. B. Elevated ST. C. Increased T-wave amplitude. D. Prolonged QT interval. E. Increased U-wave amplitude.</figcaption>
</figure>
- **A final word**: Compare to prior tracings — the single most important step. ECGs capture a moment; physiology changes moment to moment. Prior tracings reveal evolving disease and treatment response.

## Key Concepts
- **Systematic approach**: the fixed 9-feature order for every ECG read.
- **Small / large square**: 0.04 s × 0.1 mV vs 0.20 s × 0.5 mV at 25 mm/s, 10 mm/mV.
- **300 method / 1500 method**: rate = 300 ÷ large squares, or 1500 ÷ small squares.
- **Transitional lead**: lead where the QRS is most nearly equiphasic; perpendicular to the axis.
- **Intrinsicoid deflection**: onset of Q/R to peak of R; endocardium→epicardium time.
- **QRS-T angle**: degrees between QRS and T axes (frontal ≤45°, transverse ≤60°).
- **Tangent method**: end of T = steepest terminal downslope extended to baseline.
- **QTc**: rate-corrected QT (Bazett or Hodges); upper limit ~0.46 s.
- **Sinus rhythm**: SA-node origin, 60–100 bpm at rest.
- **Sinus arrhythmia**: normal respiratory rate variation.
- **Heart rate variability**: normal resting variation; loss suggests disease.
- **Ventricular preexcitation**: impulse bypasses AV node via accessory bundle; delta wave, wide QRS, reentry risk.
- **J point**: junction of QRS and ST segment.

## Mental Models
- Use the grid as a calculator: 300 and 1500 are the only two numbers you need for rate.
- Think of the transitional lead as the axis's shadow: where the QRS cancels itself out, the axis is pointing exactly 90° away.
- Think of the PR interval as a stopwatch on the AV node: most of its length is nodal delay, so rate and age move it predictably.
- Think of every "normal variant" ST change as a mimic: early repolarization, young-male V2–V3 elevation, and QRS-prolongation effects must be excluded before calling ST abnormal.
- Think of the prior tracing as the 10th feature: a "new" finding is only new against the old ECG.

## Anti-patterns
- **Measuring QRS duration in one lead**: onset/offset can be isoelectric in a single lead — use multiple simultaneous leads for the true duration.
- **Calling rate from small squares at slow rates**: use large squares under 100 bpm; save the 1500 method for tachycardia.
- **Accepting "no P waves" without hunting**: at fast rates P merges into the preceding T; a missing P is a rhythm diagnosis, not a shrug.
- **Judging QT without rate correction**: an uncorrected QT is meaningless; and measure only after several regular cycles.
- **Reading an ECG in isolation**: without prior tracings you cannot tell new from old — the most common avoidable error in the chapter.

## Reference Tables

### ECG grid at 25 mm/s, 10 mm/mV

| | Time | Voltage |
|---|---|---|
| Small square (1 mm) | 0.04 s (40 ms) | 0.1 mV |
| Large square (5 mm) | 0.20 s (200 ms) | 0.5 mV |

### Rate by squares between identical waveforms

| Large squares | Rate (bpm) | Small squares | Rate (bpm) |
|---|---|---|---|
| 1 | 300 | 6 | 250 |
| 2 | 150 | 7 | 214 |
| 3 | 100 | — | — |
| 4 | 75 | — | — |

### Normal limits — the numbers that matter

| Feature | Normal limit |
|---|---|
| P duration | <0.12 s |
| P amplitude | ≤0.2 mV frontal, ≤0.1 mV precordial |
| P axis (frontal) | 0° to +75° |
| PR interval | 0.10–0.21 s (child 0.10–0.12; adolescent 0.12–0.16; adult 0.14–0.21) |
| QRS duration | 0.07–0.11 s |
| QRS axis (frontal) | −30° to +90° |
| Q-wave duration | I, II, aVL, aVF <0.03 s; V4 <0.02 s; V5, V6 <0.03 s; any Q in V1–V3 abnormal |
| Low QRS voltage | ≤0.5 mV any limb lead; ≤1.0 mV any precordial lead |
| T amplitude | ≤0.5 mV limb, ≤1.5 mV precordial (females ~⅔) |
| QRS-T angle | Frontal ≤45°, transverse ≤60° |
| U wave | ~10% of T amplitude, most prominent V2–V3 |
| QTc upper limit | ~0.46 s (460 ms) |
| Sinus rate (rest, awake) | 60–100 bpm |

### QRS axis shortcut

| Lead I | Lead II (or aVF) | Axis |
|---|---|---|
| + | + | 0° to +90° (normal) |
| − | + | +90° to ±180° (right-axis deviation) |
| + | − | −30° to −120° (left-axis deviation) |
| − | − | −90° to ±180° (extreme axis deviation) |

## Worked Example

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-05.jpg" alt="Figure 3.5 — Normal 12-lead ECG" loading="lazy">
  <figcaption><b>Figure 3.5.</b> Normal 12-lead electrocardiogram presented in the classical format. Arrows: small Q waves; asterisk: minute Q wave.</figcaption>
</figure>
**A full 9-feature read of the normal ECG in Figure 3.5.** (1) Rate: QRS complexes 4 large squares apart → 300/4 = 75 bpm, regular. (2) P: smooth, monophasic, upright in II, <0.12 s, ≤0.2 mV. (3) PR: 0.16 s — within 0.10–0.21 s. (4) QRS: small Q waves only where allowed (none in V1–V3), R progression V1→V5 present, S largest in V2 then falling, duration 0.08 s, axis +60° (positive in I and aVF). (5) ST: isoelectric at J+40/J+60. (6) T: upright except aVR, ≤0.5 mV limb. (7) U: absent. (8) QTc: QT 0.40 s at 75 bpm → QTc = 0.40/√0.80 ≈ 0.45 s — just inside 0.46 s. (9) Rhythm: sinus, regular. Verdict: normal ECG — and the verdict is only complete after confirming no change from the patient's prior tracing.

## Key Takeaways
1. Same 9 features, same order, every ECG — the system is the skill.
2. Grid first: small square 0.04 s × 0.1 mV; rate = 300/large squares, 1500/small squares when fast.
3. P <0.12 s, PR 0.10–0.21 s, QRS 0.07–0.11 s, QRS axis −30° to +90°, QTc ≤0.46 s — the five numbers that anchor every read.
4. Any Q in V1–V3 is abnormal; loss of R progression suggests infarction; low voltage has a strict definition.
5. Axis comes from the transitional lead; the I/aVF shortcut gives the quadrant in seconds.
6. Compare to prior tracings — without them, "new" is a guess.

## Connects To
- **Ch 1**: waveform definitions (P/QRS/T/U, intervals, J point) are the vocabulary used here; the concordance of T with QRS is explained by repolarization order.
- **Ch 2**: axis determination needs the hexaxial system; lead placement quality decides whether any of these measurements can be trusted.
- **Section III (not in this skill)**: rhythm disturbances — this chapter is only the introduction; abnormal P/PR/QRS patterns shown here point forward to it.
`;export{e as default};