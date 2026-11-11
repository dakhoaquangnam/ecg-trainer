var e=`# Chapter 1: Cardiac Electrical Activity

## Core Idea
The ECG is the body-surface summation of cardiac cellular electricity. One rule explains every deflection: depolarization moving toward a lead's positive pole writes upward; the conduction system's anatomy (SA node → AV node → His → bundles → Purkinje) dictates the order and timing of everything you see.

## Frameworks Introduced
- **Voltage–time plot**: ECG plots voltage (vertical) vs time (horizontal). Horizontal = rate, regularity, activation intervals. Vertical = summed voltage of all cardiac cells at that instant. Abnormalities may appear on one tracing or only across serial tracings.
- **Lead as viewpoint**: Each electrode pair is one lead, one "view" of cardiac electricity from its body-surface position. 12 routine leads = 12 views. Reversing a lead's poles gives the reciprocal view.

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-06.jpg" alt="Figure 1.6 — Single-channel ECG recording" loading="lazy">
  <figcaption><b>Figure 1.6.</b> Single-channel electrocardiogram recording. The symbols are the same as in Figure 1.3. Black semiovals represent the electrodes.</figcaption>
</figure>
- **Cardiac cycle (electrical ↔ mechanical)**: Electrical systole (depolarization, action potential) triggers mechanical systole (contraction); electrical diastole (repolarization) triggers mechanical diastole (relaxation). Brief delay between electrical and mechanical onset in both phases.
  - When to use: whenever a waveform must be matched to a mechanical event.
- **Single-cell action potential**: Resting cell is negative inside. Incoming impulse → positive ions cross the membrane → depolarization (electrical systole) → contraction. Ions pumped out → repolarization (brief initial phase, plateau, rapid phase) → relaxation. Cell can then be reactivated.

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-03.jpg" alt="Figure 1.3 — Cardiac cycle in a single myocardial cell" loading="lazy">
  <figcaption><b>Figure 1.3.</b> Cardiac cycle in a single myocardial cell. A, lightning bolt: electrical impulse; +, positive ions; −, negative ions. B, horizontal line: level of zero (0) potential.</figcaption>
</figure>
- **Depolarization/repolarization wavefront rule**: Depolarization spreading toward the positive electrode = positive (upward) deflection; all cells depolarized = baseline. Repolarization beginning where depolarization began = negative (downward) deflection. A flat baseline also occurs when the net vector is perpendicular to the lead.

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-04.jpg" alt="Figure 1.4 — Cardiac cycle in a series of myocardial cells" loading="lazy">
  <figcaption><b>Figure 1.4.</b> Cardiac cycle in a series of myocardial cells. The symbols are the same as in Figure 1.3.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-05.jpg" alt="Figure 1.5 — Single-cell recording combined with an ECG" loading="lazy">
  <figcaption><b>Figure 1.5.</b> Single-cell recording combined with an electrocardiogram. The symbols are the same as in Figure 1.3.</figcaption>
</figure>
  - When to use: read any deflection's direction by asking "which way is the wavefront moving relative to this lead's positive pole?"
- **Pacemaking and conduction system**: Specialized noncontractile cells in nodes, bundles, branches, fascicles. They generate impulses and set conduction speed. Intrinsic rate fastest in atria, slowest in ventricles; autonomic balance (sympathetic vs parasympathetic) modulates it.
  - SA node: high right atrium near SVC junction; dominant pacemaker, highly autonomically responsive.
  - AV node: low right atrium by the septum; **only** normal atria→ventricles path (fibrous/fatty tissue blocks all others); slows conduction to synchronize atrial kick.
  - His bundle → right/left bundle branches → Purkinje fascicles (subendocardial networks) → slow endocardium→epicardium spread. Base activates last, so pumping is most efficient (outflow valves are at the base).

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-07a.jpg" alt="Figure 1.7 — Cardiac pacemaking and conduction system" loading="lazy">
  <img src="figures/ch01/fig-1-07b.jpg" alt="Figure 1.7 — Cardiac pacemaking and conduction system" loading="lazy">
  <img src="figures/ch01/fig-1-07c.jpg" alt="Figure 1.7 — Cardiac pacemaking and conduction system" loading="lazy">
  <figcaption><b>Figure 1.7.</b> Special cells of the cardiac pacemaking and conduction system. A. Anterior aspect with all chambers removed to reveal the AV and ventricular conduction system. B. Lateral aspect. C. Left bundle branch with anterior and posterior fascicles.</figcaption>
</figure>
- **Long-axis (base–apex) view**: Negative electrode right shoulder, positive left lower chest, parallel to septa (like −aVR). P entirely positive; QRS predominantly positive.

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-01.jpg" alt="Figure 1.1 — Frontal plane: MRI and heart chambers" loading="lazy">
  <figcaption><b>Figure 1.1.</b> A. Frontal plane magnetic resonance image. B. Chambers of the heart. LA, left atrium; LV, left ventricle; RA, right atrium; RV, right ventricle.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-08.jpg" alt="Figure 1.8 — Optimal sites for long-axis recording" loading="lazy">
  <figcaption><b>Figure 1.8.</b> Optimal sites for recording long-axis cardiac electrical activity. Black semiovals represent the electrodes. L, left; R, right.</figcaption>
</figure>
- **Short-axis (left–right) view**: Negative left posterior thorax, positive right anterior thorax, perpendicular to septa (like V1). P and T diphasic; QRS predominantly negative.

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-02.jpg" alt="Figure 1.2 — Transverse plane: MRI and heart chambers" loading="lazy">
  <figcaption><b>Figure 1.2.</b> A. Transverse plane magnetic resonance image, as viewed from below. B. Chambers of the heart. LA, left atrium; LV, left ventricle; RA, right atrium; RV, right ventricle.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-13.jpg" alt="Figure 1.13 — Recording sites for left vs right-sided activity" loading="lazy">
  <figcaption><b>Figure 1.13.</b> Optimal recording sites for left- versus right-sided cardiac electrical activity, as viewed from above. Black semiovals represent the electrodes. LA, left atrium; LV, left ventricle; RA, right atrium; RV, right ventricle.</figcaption>
</figure>
- **Waveform naming (positional convention)**:
  - P wave = atrial activation (first part right atrium, middle both, final part left atrium).
  - Q = negative wave at QRS onset. R = predominant positive wave of QRS, whether or not preceded by Q. S = negative deflection after R. R′ = second positive deflection. QS = monophasic negative QRS. Monophasic/diphasic/triphasic = 1/2/3 components (e.g. RS, QR, RSR′, QRS).
  - T wave = ventricular recovery. U wave = small upright wave after T, source uncertain.

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-10.jpg" alt="Figure 1.10 — QRS complex waveforms and alphabetical terms" loading="lazy">
  <figcaption><b>Figure 1.10.</b> QRS complex waveforms and their alphabetical terms: monophasic, biphasic, triphasic, QS, Q, RS.</figcaption>
</figure>
- **Intervals and segments**: PR interval = onset P → onset QRS (atrial → ventricular activation). PR segment = end P → onset QRS. QRS interval = onset → end of ventricular activation. ST segment = end QRS → onset T (J point = QRS/ST junction). QT interval = onset QRS → end T. TP segment = end T/U → onset P; used as the isoelectric baseline for amplitude measurement. At slow rates PR, ST, TP segments are all isoelectric.

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-11.jpg" alt="Figure 1.11 — LV action potential and surface ECG waveforms" loading="lazy">
  <figcaption><b>Figure 1.11.</b> A, action potential of left-ventricular myocardial cells; B, long-axis body surface ECG waveforms.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-12.jpg" alt="Figure 1.12 — ECG segments and intervals (long axis)" loading="lazy">
  <figcaption><b>Figure 1.12.</b> Magnified cardiac long-axis viewpoint of electrocardiogram segments and time intervals.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-14.jpg" alt="Figure 1.14 — ECG segments and intervals (short axis)" loading="lazy">
  <figcaption><b>Figure 1.14.</b> Magnified cardiac short-axis viewpoint of electrocardiogram segments and time intervals.</figcaption>
</figure>

## Key Concepts
- **Action potential**: intracellular electrical recording of a cell being activated.
- **Depolarization**: inside of cell loses its negative charge relative to outside as positive ions enter.
- **Repolarization**: inside of cell restored to negative; begins with brief phase, plateau, then rapid phase.
- **Systole / diastole**: active (depolarization/contraction) vs resting (repolarization/relaxation) periods, electrical and mechanical.
- **SA node**: dominant pacemaker, high right atrium near superior vena cava.
- **AV node**: delays atrial→ventricular conduction; only normal inter-chamber path.
- **Bundle of His / bundle branches / fascicles**: fast Purkinje conduction to ventricles.
- **Isoelectric line**: baseline; neither positive nor negative potential.
- **J point**: junction of QRS complex and ST segment.
- **Deflection**: any ECG waveform, upward (positive) or downward (negative).

## Mental Models
- Use "toward positive = up, away = down, perpendicular = flat" for every deflection you see.
- Think of the AV node as a gate, not a wire: its delay is the feature, and it is the only door between atria and ventricles.
- Think of the T wave's concordance as a paradox resolved by timing: epicardium repolarizes first, so the recovery wavefront travels opposite to depolarization — same deflection direction.
- Think of P-wave shape as a clock of atrial activation: first third right atrium, last third left atrium; in V1 this splits into a biphasic wave.

## Anti-patterns
- **Reading a flat baseline as "no activity"**: a flat line also means the vector is perpendicular to the lead — check other leads before concluding.
- **Treating the T wave as "depolarization-like"**: it is recovery; its upright direction is explained by repolarization order, not by depolarization direction.
- **Assuming one cell's signal is recordable**: a single cell's voltage is far too small; the surface ECG needs large groups of cells activating together.

## Reference Tables

### Cardiac cycle terms (Table 1.1)

| | Systole | Diastole |
|---|---|---|
| Electrical | Activation / Excitation / Depolarization | Recovery / Repolarization |
| Mechanical | Shortening / Contraction / Emptying | Lengthening / Relaxation / Filling |

### Long-axis vs short-axis recording

| | Long axis (base–apex) | Short axis (left–right) |
|---|---|---|
| Negative electrode | Right shoulder | Left posterior thorax |
| Positive electrode | Left lower chest | Right anterior thorax |
| Analogous standard lead | −aVR | V1 |
| P wave | Entirely positive | Diphasic |
| QRS | Predominantly positive | Predominantly negative |
| T wave | Same direction as QRS | Biphasic |

## Worked Example

<figure class="ch-fig">
  <img src="figures/ch01/fig-1-09.jpg" alt="Figure 1.9 — P, QRS, T and U waveforms" loading="lazy">
  <figcaption><b>Figure 1.9.</b> Waveforms. P, atrial activation; Q, R, and S, ventricular activation; T and U, ventricular recovery. AV, atrioventricular; SA, sinoatrial.</figcaption>
</figure>
**Reconstructing Figure 1.9 (the long-axis waveform sequence).** Starting from the SA node in the right atrium: the P wave begins (first part = right-atrial activation), its middle marks left-atrial activation beginning, its final part marks left-atrial completion. AV nodal activation starts mid-P and proceeds slowly through the P's final portion. Atrial recovery is too small to see (may distort the PR segment). His bundle and bundle branches activate during the PR segment but write nothing on the surface ECG. Then the QRS complex: simultaneous right + left ventricular activation. Then the T wave: ventricular recovery, deflected the same way as the QRS because epicardial cells repolarize first. A small U wave may follow. Reading any 12-lead ECG is this same sequence viewed from 12 angles.

<figure class="ch-fig">
  <img src="figures/ch01/fig-summary-a.jpg" alt="Chapter 1 summary illustration" loading="lazy">
  <img src="figures/ch01/fig-summary-b.jpg" alt="Chapter 1 summary illustration" loading="lazy">
  <img src="figures/ch01/fig-summary-c.jpg" alt="Chapter 1 summary illustration" loading="lazy">
  <img src="figures/ch01/fig-summary-d.jpg" alt="Chapter 1 summary illustration" loading="lazy">
  <figcaption><b>Chapter 1 summary illustration (unnumbered in the book).</b> The conduction system (SA node, AV node, His bundle, bundle branches, Purkinje fibers); the waveform sequence with the PR interval; depolarization and repolarization phases (endocardium–epicardium); P/QRS/T/U color-coded by activation phase.</figcaption>
</figure>

## Key Takeaways
1. ECG = voltage vs time; it is the summed electricity of all myocardial cells, not a single cell.
2. Deflection direction is decided by wavefront direction relative to the lead's positive pole.
3. The AV node is the only normal atria→ventricles route, and its delay synchronizes the heartbeat.
4. P = atria, QRS = ventricles, T = ventricular recovery; U is small and of uncertain origin.
5. PR interval, QRS interval, QT interval and the J point are defined by onsets and ends of these waves — measure them the same way every time.
6. Long-axis and short-axis views are the two viewpoints all 12 standard leads are built from.

## Connects To
- **Ch 2**: the long/short-axis views become leads −aVR and V1; the conduction system explains Einthoven's leads and the hexaxial system.
- **Ch 3**: every waveform and interval defined here is measured systematically there; the P/QRS/T naming convention is the vocabulary of the 9-feature read.
`;export{e as default};