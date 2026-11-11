var e=`# Chapter 21: Implantable Cardiac Pacemakers

## Core Idea

A pacemaker is not a metronome: it senses intrinsic activity and delivers timed impulses only when needed. Reading a paced ECG means answering three questions on every beat — did the device pace, did it capture (a P wave or QRS after the artifact), and did it sense (inhibit or trigger appropriately)? Most "malfunctions" are failures of one of those three functions, and several apparent abnormalities are normal device behavior — a spike landing inside an intrinsic QRS, or a single dropped QRS during a conduction test. The chapter's central clinical thread: right-ventricular (RV) apical pacing itself can harm the heart. Frequent RV pacing causes dyssynchrony and pacing-induced heart failure, so modern practice minimizes RV pacing and, where possible, paces the conduction system (His bundle) or both ventricles (CRT) instead.

## Frameworks Introduced

- **NBG (NASPE/BPEG Generic) code — 5 positions (revised 2002).** I: chamber(s) paced; II: chamber(s) sensed; III: response to sensing; IV: rate modulation; V: multisite pacing. Letters: O = none, A = atrium, V = ventricle, D = dual (A + V); III adds T = triggered, I = inhibited, D = dual (T + I); IV: R = rate modulation; V: O/A/V/D. First three letters in order of importance: pace → sense → respond.
- **Demand mode.** The device senses intrinsic impulses and withholds output while the intrinsic rate exceeds the programmed rate; it paces only when the intrinsic rate falls below the programmed (minimum) rate. All current implantable pacemakers have a built-in demand mode, because the disturbances they treat are often intermittent.
- **Magnet test.** A magnet converts a pacemaker to fixed-rate pacing and disables sensing in all channels. The magnet rate identifies the manufacturer and battery status (see Reference Tables). A magnet on a contemporary transvenous defibrillator (ICD) disables tachycardia therapies *without* changing pacing function.
- **DDD behavior states.** Minimum-rate behavior (atrial rate below the minimum tracking rate → pace atrium and ventricle); tracking behavior (sinus rate above minimum rate → track atrium, pace ventricle at the programmed AV interval); maximum-rate behavior (atrial rate above the programmed maximum tracking rate → ventricular pacing capped at the upper tracking rate). A maximum tracking rate must be programmed to prevent tracking rapid atrial rhythms.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-06.jpg" alt="Figure 21.6 — DDD behavior states" loading="lazy">
  <figcaption><b>Figure 21.6.</b> A: atrial and ventricular minimum-rate-behavior pacing. B: ventricular pacing at the atrially tracked rate with the programmed AV interval. C: ventricular pacing at varying intervals following sensed atrial flutter waves, exhibiting maximum-rate behavior.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-08.jpg" alt="Figure 21.8 — Atrial and ventricular pacing; tracking a rapid sinus rate" loading="lazy">
  <figcaption><b>Figure 21.8.</b> A: arrows, atrial and ventricular pacing. B: arrow, ventricular pacing tracking a rapid sinus rate.</figcaption>
</figure>

- **CRT selection framework.** The ECG selects CRT candidates and guides LV lead site: benefit is greatest with LBBB and prolonged QRS; follow-up ECG verifies capture of both ventricles and optimizes AV and RV–LV intervals.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-18.jpg" alt="Figure 21.18 — CRT: biventricular and LV-only pacing" loading="lazy">
  <figcaption><b>Figure 21.18.</b> A: traditional CRT delivered with pacing of both right and left ventricles, characterized by an R wave in V1 and an initial Q wave in I. B: CRT delivered with left-ventricular–only pacing, the LV stimulus timed to coincide with intrinsic right-bundle activation, which can result in a narrow, more 'normal'-appearing QRS complex.</figcaption>
</figure>

## Key Concepts

- **Pacemaker, pulse generator, leads (glossary).** An *implantable cardiac pacemaker* senses native impulses and/or generates impulses delivered to the myocardium to stimulate contraction. The *pulse generator* (battery, lead ports, processor) sits subcutaneously in the pectoral area. *Pacing electrodes/leads* transmit impulses to the myocardium and, in sensing systems, transmit intrinsic impulses back to the pacemaker. Transvenous leads are screwed into the endocardium of the right atrium and right ventricle; the LV lead sits in an epicardial (coronary sinus) vein. Temporary pacing uses an external generator with transvenous leads or cutaneous patches.
- **Artifacts, capture, sensing (glossary).** Artifacts are high-frequency vertical lines on the ECG representing pacemaker impulses: before a QRS = ventricular pacing with capture; before a P wave = atrial pacing with capture; with no following P wave or QRS = lack of capture. Artifacts can be small and absent in some leads; a biventricular system may show three or even four artifacts. Capture = a paced P wave or QRS follows the artifact; sensing = the device detects intrinsic activity and inhibits (or triggers) accordingly — evaluate pacing and sensing in each chamber. *Fixed-rate pacing* generates impulses only, without sensing or rate variation. *Demand mode* senses intrinsic activity and is inhibited by it. *Oversensing*: non-myocardial signals (e.g. electromagnetic interference, lead fracture) are sensed and inhibit or trigger impulse generation.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-02.jpg" alt="Figure 21.2 — Fixed-rate ventricular and atrial pacing" loading="lazy">
  <figcaption><b>Figure 21.2.</b> A, B: fixed-rate ventricular and atrial pacing systems, respectively. Arrows, small pacing artifacts at 50 beats/min; asterisk, prolonged PR interval.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-03.jpg" alt="Figure 21.3 — Pacing artifact prominent in V5, absent in II" loading="lazy">
  <figcaption><b>Figure 21.3.</b> Arrows, prominent (lead V5) and absent (lead II) pacing artifacts in different leads; asterisks, varying artifact amplitudes (V4) characteristic of digital ECG recordings.</figcaption>
</figure>

- **Pacemaker syndrome; pacemaker-mediated tachycardia; dyssynchrony (glossary).** *Pacemaker syndrome*: neck fullness, light-headedness, occasionally vasovagal syncope from retrograde conduction of ventricular-paced beats; atrial contraction against a closed tricuspid valve during ventricular contraction causes atrial dilation. Loss of AV synchrony (e.g. VVI pacing without an atrial lead) can cause it, so an atrial lead is typically implanted when ventricular pacing is needed, unless permanent atrial fibrillation is present. *Pacemaker-mediated tachycardia*: with a dual-chamber device, a retrograde P wave can be tracked, prompting ventricular pacing and perpetuating the cycle at the device's upper tracking rate. *Dyssynchrony* is loss of synchronous mechanical contraction of the ventricular walls — with LBBB or RV pacing, early septal LV activation/contraction with LV free-wall stretch, then late free-wall contraction with septal bounce.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-15.jpg" alt="Figure 21.15 — Pacemaker syndrome: 1:1 retrograde P waves" loading="lazy">
  <figcaption><b>Figure 21.15.</b> Arrows, retrograde P waves of 1:1 ventricular-to-atrial conduction — pacemaker syndrome.</figcaption>
</figure>

- **Biventricular pacemaker; CRT; defibrillation; single/dual-chamber (glossary).** A *biventricular pacemaker* paces both right and left ventricles; atrial pacing is also included unless chronic atrial arrhythmias prevent it. *Cardiac resynchronization therapy* is biventricular or His-bundle pacing to synchronize ventricular activation and contraction. *Defibrillation* is termination of atrial or ventricular fibrillation by an extrinsic electrical current. A *single-chamber pacemaker* has one lead pacing and sensing one chamber; a *dual-chamber pacemaker* includes atrial and ventricular pacing.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-20.jpg" alt="Figure 21.20 — Biventricular pacing: lead schematic and rhythm strip" loading="lazy">
  <figcaption><b>Figure 21.20.</b> Biventricular pacing. Left, schematic showing atrial, right-ventricular, and left-ventricular lead positions; right, rhythm strip showing two pacing impulses for each QRS, with an interval between pacing of the left and right ventricles. Arrows show the two pacing pulses for each QRS — this interval may be adjusted to optimize ventricular function for CRT.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-01a.jpg" alt="Figure 21.1A — Biventricular pacemaker with three leads" loading="lazy">
  <img src="figures/ch21/fig-21-01b.jpg" alt="Figure 21.1B — Leadless Micra AV pacemaker" loading="lazy">
  <figcaption><b>Figure 21.1.</b> A: biventricular pacemaker with three leads — top: coronary sinus (left-ventricular) pacing lead; middle: right-ventricular pacing lead; bottom: active-fixation pacing lead for the right atrium. B: leadless pacemaker incorporating the pulse generator and pacing electrodes into a single miniature unit — Micra AV Model MC1AVR1.</figcaption>
</figure>

- **Leadless pacemaker; rate modulation; ATP and ICD basics.** A leadless pacemaker packs generator and electrodes into a single miniature unit placed entirely within a heart chamber (e.g. Micra AV Model MC1AVR1); current-generation devices can sense one or more chambers and pace the right ventricle to deliver VDD or VVI pacing. *Rate modulation (R modes)* automatically increases the minimum rate through an activity sensor — piezoelectric crystal, accelerometer, impedance-sensing device (respiratory rate or minute ventilation), or "closed-loop" simulation; maximal sensor rate and maximal tracking rate may be independently programmed. *Antitachycardia pacing (ATP)* is a train of paced beats that terminates a tachycardia (chapter figure shows a five-beat train). Current practice limits ATP to supraventricular tachyarrhythmias; ATP for VT is usually included in an ICD, because ATP can accelerate stable monomorphic VT into unstable polymorphic VT or VF. Transvenous ICDs include full pacemaker functionality against bradyarrhythmias. Subcutaneous ICDs have no intravascular electrodes and offer only painful, battery-costly, high-output emergency post-shock pacing — not indicated for patients at risk of bradyarrhythmia.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-09.jpg" alt="Figure 21.9 — ATP: five-beat train terminating tachycardia" loading="lazy">
  <figcaption><b>Figure 21.9.</b> Arrow, beginning of a five-beat train that terminates the tachycardia; asterisk, return of sinus rhythm.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-10.jpg" alt="Figure 21.10 — ICD: high-energy shock terminating ventricular tachycardia" loading="lazy">
  <figcaption><b>Figure 21.10.</b> Asterisk, high-energy ICD artifact terminating the tachycardia; arrows, return of dual-chamber pacing.</figcaption>
</figure>

- **Algorithms to avoid RV pacing; His-bundle pacing.** Modern dual-chamber pacemakers/defibrillators test for periodic return of intrinsic AV conduction in intermittent second- or third-degree AV block — lengthening the AV interval to promote intrinsic conduction, suspending ventricular pacing for a single cycle, and allowing a single "dropped" QRS before resuming atrial and ventricular pacing with a short AV interval. *His-bundle pacing*: the His-bundle deflection is localized on the intracardiac electrogram from the ventricular pacing lead and the lead is anchored there; in many cases of AV block the level of block is in the AV node or proximal His bundle and can be bypassed by positioning the lead distal to the block. It can correct underlying LBBB or RBBB in 70% to 90% of patients and may serve as an alternative to biventricular pacing for CRT. *Selective capture* (lead usually above the tricuspid valve): artifact followed by an isoelectric interval of at least 30 ms, then a QRS identical to native conduction. *Nonselective capture* (lead usually below the tricuspid valve): stimulus followed immediately by a QRS with initial slurring, then 30 to 40 ms later a sharp QRS with rapid terminal forces; approximately 40 to 60 ms after the spike the QRS becomes identical to intrinsic rhythm — resembling preexcited conduction from an anteroseptal accessory pathway (see Chapter 19).

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-22.jpg" alt="Figure 21.22 — Locating the His bundle by electrogram mapping" loading="lazy">
  <figcaption><b>Figure 21.22.</b> The His bundle can be located using electrogram mapping. The His bundle creates a distinct signal marked by the double-headed arrow.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-23.jpg" alt="Figure 21.23 — Selective His-bundle capture" loading="lazy">
  <figcaption><b>Figure 21.23.</b> Intrinsic conduction on 12-lead ECG (A) and His-bundle paced 12-lead ECG (B). Note the isoelectric interval between the His-bundle pacing spike and QRS onset and the identical QRS morphology between the native and paced QRS complexes — characteristic of successful selective His-bundle capture from a lead positioned above the tricuspid valve.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-24.jpg" alt="Figure 21.24 — Nonselective His-bundle capture" loading="lazy">
  <figcaption><b>Figure 21.24.</b> Intrinsic conduction on 12-lead ECG (A) and His-bundle paced 12-lead ECG (B). Note the lack of isoelectric interval between the His-bundle pacing spike and QRS onset and the 'delta wave' appearance to the QRS onset created by capture of right-ventricular myocardium surrounding the His bundle. Approximately 40 to 60 ms after the pacing spike, the QRS complex becomes identical to intrinsic rhythm — characteristic of nonselective capture.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-19.jpg" alt="Figure 21.19 — Algorithm to minimize ventricular pacing" loading="lazy">
  <figcaption><b>Figure 21.19.</b> Dual-chamber pacemaker algorithm to minimize ventricular pacing. Three atrial pacing artifacts followed by paced P waves, a long AV interval (previously lengthened by the pacemaker to promote intrinsic conduction), with a pacemaker spike superimposed on the QRS. After the fourth atrial paced beat, ventricular pacing is suspended for a single cycle and no QRS is seen — the algorithm allows a single 'dropped' QRS.</figcaption>
</figure>

## Mental Models

- **"Pace → sense → respond": the three-question ECG read.** A spike with no following complex is failure to capture; spikes marching through intrinsic beats without inhibition is failure to sense; missing spikes when the rate is slow is failure to pace (or oversensing inhibiting output).
- **The demand pacemaker as a safety net, not a metronome.** If the intrinsic rate exceeds the programmed rate, the device is silent and its pacing function is invisible on the ECG — seen only when bradycardia occurs or a magnet is applied. If every beat is paced, sensing cannot be evaluated from that strip.
- **DDD approximates normal physiology.** Think of DDD as an artificial AV node: it tracks the atrium, waits the programmed AV interval, then paces the ventricle — shortening the AV interval as rate rises, tracking sinus arrhythmia and atrial premature beats (APBs), and being reset by ventricular premature beats (VPBs). It may lengthen the AV interval for closely coupled APBs and may not sense very closely coupled APBs that fall in its atrial refractory period.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-07.jpg" alt="Figure 21.7 — DDD: sensed and unsensed atrial premature beats" loading="lazy">
  <figcaption><b>Figure 21.7.</b> A: arrow, sensed APB. B: arrow, sensed ventricular premature beat. C: arrow, unsensed atrial premature beat (APB); asterisks, minimum-rate AV pacing following the APB-induced pause, continuing until intrinsic sinus rhythm exceeds this minimum pacing rate.</figcaption>
</figure>

- **The 0.04-second rule: apparent failure to sense can be normal.** Intrinsic activation needs more than 0.04 second to reach the RV apical lead and be sensed. When the intrinsic rate is close to the programmed minimum rate (e.g. atrial fibrillation with intermittent slowing), a pacing artifact can land 0.04 second into an intrinsic QRS — normal function, not failure to sense.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-14.jpg" alt="Figure 21.14 — The 0.04-second rule: spike inside an intrinsic QRS is normal" loading="lazy">
  <figcaption><b>Figure 21.14.</b> Arrow, pacemaker artifact 0.04 second into an intrinsic QRS complex — normal function, not failure to sense.</figcaption>
</figure>

- **Pacing site determines the ECG pattern.** The wavefront spreads from the electrode: RV apex → LBBB pattern in V1 with extreme left-axis deviation (apex → base, superiorly directed); RV outflow tract → inferiorly directed frontal axis (base → apex); LV / distal coronary sinus → RBBB pattern in V1 (LV then RV activation). Biventricular (CRT) pacing → R wave in V1 plus an initial negative-then-positive deflection in lead I; LV-only CRT timed to intrinsic right-bundle conduction can give a narrower, near-normal QRS.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-17.jpg" alt="Figure 21.17 — RV apex and RV outflow tract pacing" loading="lazy">
  <figcaption><b>Figure 21.17.</b> A: right-ventricular apex pacing. B: right-ventricular outflow tract pacing.</figcaption>
</figure>

- **RV apical pacing is a trade-off, not a free lunch.** It rescues bradycardia but creates LBBB-like dyssynchrony; the more the ventricle is paced, the greater the harm — hence minimize-RV-pacing algorithms, CRT, and His-bundle pacing.
- **Spike visibility is a recording artifact, not a device fact.** Modern narrow-spaced leads pace with a 0.4 ms pulse width, so the spike is smaller; older digital ECG machines sampling only once every 2 to 4 ms could miss a spike that fell between samples. Current machines sample at much higher frequency. A missing spike in one lead (absent in lead II, prominent in V5) does not prove the device failed.

## Anti-patterns

- **Calling a spike inside an intrinsic QRS "failure to sense."** If the intrinsic rate is near the programmed minimum rate, the device may not have had time to sense — a spike 0.04 second into an intrinsic QRS is normal. Check the rate relationship first.
- **Diagnosing malfunction from a strip where every beat is paced.** Sensing cannot be evaluated when all cycles are paced; absence of competing intrinsic activity is not evidence of sensing failure.
- **Missing failure to capture because the spikes look regular.** In Figure 21.11, artifacts march regularly at 68 beats/min, uninterrupted by intrinsic beats, with no QRS after most spikes and only a single capture — simultaneous failure of capture and sensing. Regular spikes ≠ working pacemaker.
- **Assuming atrial and ventricular function fail together.** Atrial capture can fail while ventricular pacing is intact (Figure 21.12): check each chamber separately — atrial sensing (inhibition of atrial pacing by sinus beats), atrial capture, ventricular sensing (inhibition after a VPB), ventricular capture.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-12.jpg" alt="Figure 21.12 — Failure of atrial capture, ventricular pacing intact" loading="lazy">
  <figcaption><b>Figure 21.12.</b> First six arrows, minimum-rate pacing without atrial capture; asterisk and last arrow, atrial capture by the pacemaker.</figcaption>
</figure>

- **Treating oversensing as a benign pause.** Ventricular oversensing (electromagnetic interference, lead fracture) inhibits pacing; in a device-dependent patient with complete heart block this produces a long ventricular pause and can cause syncope or bradycardic arrest.
- **Forgetting retrograde conduction — or swapped leads.** VVI pacing with 1:1 ventriculoatrial conduction can cause pacemaker syndrome; in a dual-chamber device the retrograde P can be tracked into pacemaker-mediated tachycardia at the upper tracking rate. Reversal of atrial and ventricular leads at implantation produces paired artifacts in which the first (atrial-channel output) captures the ventricle, while the second falls in the QRS or ST segment; intrinsic beats inhibit both channels, proving sensing is intact — the clue is the order of capture, not a sensing defect (Figure 21.16).

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-16.jpg" alt="Figure 21.16 — Atrial and ventricular leads reversed at implantation" loading="lazy">
  <figcaption><b>Figure 21.16.</b> Arrows, effective ventricular capture by the first of two coupled pacing artifacts; asterisks, intrinsic beats — atrial and ventricular leads reversed at implantation.</figcaption>
</figure>

- **Using a subcutaneous ICD where bradycardia is a risk, or ATP for VT outside an ICD.** The subcutaneous ICD offers only painful, high-energy, temporary post-shock pacing. ATP can accelerate stable monomorphic VT to polymorphic VT (250 beats/min in the chapter's example) or VF; VT ATP belongs in an ICD that can then deliver a high-energy shock.

## Reference Tables

### NBG code (revised NASPE/BPEG Generic Code, 2002)

| Position | Meaning | Letters |
|---|---|---|
| I | Chamber(s) paced | O = none, A = atrium, V = ventricle, D = dual (A + V) |
| II | Chamber(s) sensed | O = none, A = atrium, V = ventricle, D = dual (A + V) |
| III | Response to sensing | O = none, T = triggered, I = inhibited, D = dual (T + I) |
| IV | Rate modulation | O = none, R = rate modulation |
| V | Multisite pacing | O = none, A = atrium, V = ventricle, D = dual (A + V) |

### Common modes

| Mode | Paces / senses / response | Notes |
|---|---|---|
| VVI | V / V / inhibited | Single-chamber; one programmable rate ("minimum rate") |
| AAI | A / A / inhibited | Single-chamber; one programmable rate |
| DDD | A+V / A+V / triggered + inhibited | Dual-chamber; tracks P waves, paces ventricle at programmed AV interval |
| VVIR / AAIR / DDDR | As above | Rate-modulated versions (sensor-driven minimum rate) |
| VDD | V / A+V / dual | Deliverable by leadless devices (with VVI) |

### Magnet (fixed) pacing rates by manufacturer and battery status (beats/min; Table 21.2)

| Battery status | Medtronic | Boston Scientific | Abbott Medical | Biotronik | Sorin |
|---|---|---|---|---|---|
| Beginning of life | 85 | 100 | 98.6 | 90 | 96 |
| Nearing elective replacement | N/A | 90 | N/A | N/A | N/A |
| Elective replacement indicator | 65 | 85 | 86.3 | 80 | 80 |

Below the elective replacement indicator (end of life), the magnet rate becomes unpredictable. N/A = not applicable.

### Malfunction patterns (chapter figures)

| Pattern | ECG clue | Typical cause per chapter |
|---|---|---|
| Failure to capture | Artifact with no following P wave/QRS | Pacing output / lead / threshold problem |
| Failure to sense (undersensing) | Intrinsic beats do not inhibit pacing; spikes march through intrinsic rhythm (e.g. 68/min with only one capture) | Sensing failure |

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-13.jpg" alt="Figure 21.13 — Sensing dysfunction: atrial undersensing and ventricular oversensing" loading="lazy">
  <figcaption><b>Figure 21.13.</b> A: arrow, single undersensed P wave. B: arrows, expected locations of atrial and ventricular pacing artifacts; asterisk, P wave that fails to conduct owing to underlying AV block. C: arrow, expected location of the next ventricular pacing artifact; asterisk, pacing artifact reappearance.</figcaption>
</figure>

| Atrial undersensing (DDD) | A P wave fails to trigger ventricular pacing at the programmed AV delay | Atrial sensing failure |
| Ventricular oversensing | Pacing inhibited in both channels by a signal not visible on surface ECG; long pause in complete heart block (VVI) | Electromagnetic interference; lead fracture |
| Pseudo-failure to sense | Spike 0.04 s into an intrinsic QRS when intrinsic rate ≈ programmed minimum rate | Normal — > 0.04 s needed for activation to reach RV apical lead |
| Loss of LV capture (CRT) | Intermittent loss of R-wave amplitude / loss of RBBB pattern | Increase LV pacing energy or switch LV electrode |

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-21.jpg" alt="Figure 21.21 — CRT at follow-up: intermittent loss of LV capture" loading="lazy">
  <figcaption><b>Figure 21.21.</b> Biventricular pacing at follow-up. Arrows illustrate intermittent loss of left-ventricular capture evidenced by loss of the right-bundle-branch block pattern.</figcaption>
</figure>

| Swapped atrial/ventricular leads | First of each artifact pair captures ventricle; second falls in QRS/ST; intrinsic beats inhibit both channels | Lead reversal at implantation |

## Worked Example

**Case 1 — Is this demand pacemaker working? (Figure 21.4).** A ventricular demand pacemaker has a cycle length of 840 ms (0.84 s). The lead V1 strip shows intrinsic beats that are appropriately sensed — the device withholds output and no spike precedes those QRS complexes. The first intrinsic ventricular activation follows a prolonged PR interval of 0.32 s. Because there is no atrial lead, AV sequential pacing cannot be delivered: retrograde atrial activation appears (first two and last two P waves) intermingled with sinus P waves, with inconsistent PR intervals. Read: sensing is intact; capture cannot be judged from the intrinsic beats alone; and the loss of AV synchrony is the substrate for pacemaker syndrome — the reason an atrial lead is typically implanted when ventricular pacing is needed, unless permanent atrial fibrillation is present.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-04.jpg" alt="Figure 21.4 — Normally functioning ventricular demand pacemaker" loading="lazy">
  <figcaption><b>Figure 21.4.</b> Ventricular demand pacemaker. Arrows, the patient's intrinsic sinus P waves; asterisks, QRS complexes of intrinsic ventricular activation that inhibit impulse generation from the demand pacemaker.</figcaption>
</figure>

**Case 2 — Magnet test (Figure 21.5).** A patient with sinus bradycardia and a single-chamber (ventricular) pacemaker has a magnet applied: the rate jumps to fixed-rate pacing at 100 beats/min. Per Table 21.2, 100 beats/min at beginning of life identifies a Boston Scientific device (Medtronic 85, Abbott 98.6, Biotronik 90, Sorin 96). P waves follow the paced QRS complexes, indicating 1:1 ventriculoatrial conduction. If the same rate were 85 beats/min, the device would be at its elective replacement indicator for Boston Scientific — battery status read straight off the ECG.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-05.jpg" alt="Figure 21.5 — Magnet test: 100 beats/min" loading="lazy">
  <figcaption><b>Figure 21.5.</b> Arrows, magnet application; asterisks, rapid magnet-induced pacing rate (100 beats/min — Boston Scientific at beginning of life).</figcaption>
</figure>

**Case 3 — Combined failure (Figure 21.11).** Pacing artifacts continue regularly at 68 beats/min without interruption by the patient's intrinsic beats, and there is no QRS after most spikes — only a single capture. Read: failure to sense (no inhibition by intrinsic ventricular beats) *and* failure to capture (spikes without QRS). Both functions have failed; a single abnormality does not explain the strip.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-11.jpg" alt="Figure 21.11 — Simultaneous failure to sense and to capture" loading="lazy">
  <figcaption><b>Figure 21.11.</b> Arrows, pacing artifacts; asterisk, the single instance of ventricular capture by the pacemaker — simultaneous failure to sense and to capture.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-summary.jpg" alt="Summary illustration — Ventricular pacing sites" loading="lazy">
  <figcaption><b>Summary illustration.</b> Summary illustration: anatomic locations of the common ventricular pacing sites — RV apex (RVA), RV outflow tract (RVOT), His bundle (HBP), LV epicardial via the coronary sinus, and RV septum.</figcaption>
</figure>

## Key Takeaways

1. Read every paced ECG with three questions: did it pace, did it capture (P wave or QRS after the artifact), did it sense (inhibit or trigger correctly)?
2. NBG code: I = paced, II = sensed, III = response (I inhibited, T triggered, D dual), IV = R rate modulation, V = multisite pacing. VVI/AAI are single-chamber; DDD is dual-chamber, tracks the atrium at the programmed AV interval up to a maximum tracking rate.
3. A magnet converts a pacemaker to fixed-rate pacing with sensing disabled; the magnet rate identifies manufacturer and battery status (e.g. Boston Scientific 100 at beginning of life, 85 at elective replacement indicator).
4. A spike landing 0.04 second into an intrinsic QRS when the intrinsic rate is near the programmed minimum rate is normal function, not failure to sense — activation needs > 0.04 second to reach the RV apical lead.
5. Pacing site is visible on the ECG: RV apex = LBBB in V1 + extreme left-axis deviation; RV outflow tract = inferior axis; LV/coronary sinus = RBBB in V1; biventricular CRT = R in V1 with initial negative deflection in lead I.
6. Frequent RV pacing harms: > 40%–50% RV pacing increased mortality and heart-failure admissions (MOST); > 20% RV burden is associated with pacing-induced heart failure (with male sex and native QRS > 115 ms). 86% of pacemakers are programmed DDD; the DAVID trial showed DDD pacing with an RV lead shortened survival free of heart-failure hospitalization in patients with prior heart failure.
7. CRT benefits patients with LBBB and QRS > 140 ms (males) or > 130 ms (females); LV dyssynchrony is present in 40% with QRS 120 ms and 70% with QRS 150 ms; more than 1 in 3 heart-failure patients have LBBB; up to 30% do not benefit. Follow-up ECG checks capture of both ventricles.
8. Selective His-bundle capture: spike, isoelectric interval ≥ 30 ms, then a QRS identical to native conduction; it corrects LBBB/RBBB in 70%–90% of patients. Nonselective: immediate slurred QRS, identical to intrinsic ~40–60 ms after the spike.
9. Oversensing (electromagnetic interference, lead fracture) can inhibit pacing and cause syncope or bradycardic arrest in a device-dependent patient; undersensing lets spikes march through intrinsic beats; failure to capture leaves spikes with no following complex.
10. ATP for VT belongs in an ICD, because ATP can accelerate stable monomorphic VT to polymorphic VT (250 beats/min in the chapter's example) or VF, which the ICD then terminates with a high-energy shock. Subcutaneous ICDs are not for patients at risk of bradyarrhythmia.

## Connects To

- **Section I (this skill): basic concepts, normal ECG, 12-lead recording.** The bundle-branch patterns used to identify pacing site (LBBB in V1 for RV apical pacing, RBBB in V1 for LV pacing) and the normal PR interval and axis come from Section I; paced QRS interpretation is applied bundle-branch-block morphology.
- **Chapter 19 (accessory pathways / preexcitation).** Nonselective His-bundle capture resembles preexcited conduction from an anteroseptal accessory pathway — compare the two before calling a delta wave.
- **Chapter 21 Summary Illustration.** Anatomic locations of the common ventricular pacing sites (RV apex, RV outflow tract, His bundle, LV).
- **Earlier in this chapter (devices).** Leadless pacemakers (VDD/VVI), biventricular systems, ICDs, and rate-responsive sensors are the hardware behind the modes and malfunction patterns above.
`;export{e as default};