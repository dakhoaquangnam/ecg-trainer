var e=`# Chương 3: Đọc điện tâm đồ bình thường

## Ý tưởng cốt lõi
Hãy đọc mọi ECG bằng cùng một hệ thống 9 đặc điểm, theo cùng một thứ tự: tần số/tính đều → P → PR → QRS → ST → T → U → QTc → nhịp. Mỗi dạng sóng được đánh giá trên bốn mặt: hình dạng, thời gian, biên độ, trục. Và đừng bao giờ kết thúc mà không so sánh với các bản ghi trước.

## Các khung khái niệm được giới thiệu
- **Cách tiếp cận hệ thống 9 đặc điểm**: (1) Tần số và tính đều đặn, (2) Hình thái sóng P, (3) Khoảng PR, (4) Hình thái phức bộ QRS, (5) Hình thái đoạn ST, (6) Hình thái sóng T, (7) Hình thái sóng U, (8) Khoảng QTc, (9) Nhịp. Tần số/tính đều/nhịp nhóm lại với nhau, nhưng nhịp chỉ có thể đánh giá sau khi đã xét cả tám đặc điểm còn lại.
  - Khi nào dùng: mọi ECG, mọi lần — thứ tự này ngăn bạn bỏ sót đặc điểm giữ chìa khóa chẩn đoán.
- **Lưới ECG (cây thước)**: Các đường mỏng cách nhau mỗi 1 mm, đường đậm cách nhau mỗi 5 mm. Ở tốc độ giấy (paper speed) 25 mm/s: ô nhỏ = 0,04 s × 0,1 mV; ô lớn = 0,20 s × 0,5 mV. Trục dọc = thời gian/khoảng/tần số; trục ngang = biên độ.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-01.jpg" alt="Hình 3.1 — Lưới giấy ECG chuẩn" loading="lazy">
  <figcaption><b>Hình 3.1.</b> Lưới giấy ECG chuẩn: ô nhỏ 1 mm = 0,04 s × 0,1 mV; ô lớn 5 mm = 0,20 s × 0,5 mV.</figcaption>
</figure>
- **Các phương pháp tính tần số**: Nếu về cơ bản đều, hãy đếm số ô lớn giữa các dạng sóng giống hệt nhau rồi chia vào **300** (1 ô lớn = 300 lần/phút, 2 = 150, 3 = 100, 4 = 75). Nếu tần số >100 lần/phút, dùng ô nhỏ và chia vào **1500** (6 ô nhỏ = 250, 7 = 214) — ở tần số nhanh, những khác biệt nhỏ quan trọng hơn. Nếu không đều, tần số nhĩ và tần số thất phải được đo riêng. Bình thường số sóng P và số phức bộ QRS bằng nhau.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-02.jpg" alt="Hình 3.2 — Chuyển đạo II, đếm tần số bằng ô lớn" loading="lazy">
  <figcaption><b>Hình 3.2.</b> Chuyển đạo II: đếm tần số bằng số ô lớn giữa các phức bộ — 300, 150, 100, 75, 60, 50, 40 lần/phút.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-03.jpg" alt="Hình 3.3 — Dùng khoảng giữa các dạng sóng để ước tính tần số" loading="lazy">
  <figcaption><b>Hình 3.3.</b> Dùng khoảng giữa các dạng sóng để ước tính tần số: trục ngang là giây và số ô lớn, trục dọc là nhịp/phút.</figcaption>
</figure>
- **Hình thái sóng P (4 bước)**: (1) Hình dạng: trơn, một pha (hoàn toàn + hoặc −) ở mọi chuyển đạo trừ V1 (và có thể V2), nơi sóng P thường hai pha (phần đầu của nhĩ phải +, phần cuối của nhĩ trái −). (2) Thời gian: bình thường <0,12 s. (3) Biên độ: ≤0,2 mV ở trán, ≤0,1 mV ở trước tim. (4) Trục: hướng lên ở I, II, aVF, V4–V6; âm ở aVR; giới hạn trán bình thường 0° đến +75°.
  - Khi nào dùng: sóng P nhập vào sóng T đứng trước ở tần số nhanh là thứ đầu tiên dễ bỏ sót — hãy tìm nó trước khi gọi một nhịp là "không có sóng P".

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-04.jpg" alt="Hình 3.4 — Sóng P bình thường điển hình" loading="lazy">
  <figcaption><b>Hình 3.4.</b> Sóng P bình thường điển hình. A. Trục dài (mặt phẳng trán, chuyển đạo II). B. Trục ngắn (mặt phẳng ngang, V1). RA: nhĩ phải; LA: nhĩ trái.</figcaption>
</figure>
- **Khoảng PR**: Khởi đầu sóng P → khởi đầu QRS; bình thường **0,10–0,21 s**. Phần lớn là độ trễ ở nút nhĩ thất (nút AV), nên nó thay đổi theo tần số (ngắn hơn ở tần số nhanh, dài hơn ở tần số chậm) và theo tuổi: thời thơ ấu 0,10–0,12 s, thiếu niên 0,12–0,16 s, người lớn 0,14–0,21 s. PR ngắn + trục P bình thường → đường dẫn nhanh qua nút AV hoặc bó phụ (nguy cơ tiền kích thích). PR dài + trục P bình thường → độ trễ ở đâu đó trên đường dẫn bình thường. Trục P <+30° hoặc >+75° gợi ý nguồn gốc nhĩ lạc chỗ/nhĩ thấp/nút AV.
- **Hình thái QRS**: Hình dạng tần số cao hơn, đỉnh nhọn (so với sóng P/T tròn). Sóng Q: bất kỳ sóng Q nào ở V1–V3 cũng là bất thường; ở các chuyển đạo khác (trừ III, aVR) một sóng Q "bình thường" rất nhỏ — giới hạn trên: I, II, aVL, aVF <0,03 s; V4 <0,02 s; V5, V6 <0,03 s. Không có sóng Q nhỏ ở V5/V6 là bất thường. Sóng Q nào cũng bình thường ở III và aVR (hướng sang phải). Sóng R: bình thường tăng dần V1→V4/V5 (tiến triển R); mất tiến triển gợi ý nhồi máu. Sóng S: lớn ở V1, lớn hơn ở V2, rồi nhỏ dần V3→V6. Thời gian QRS 0,07–0,11 s (hơi dài hơn ở nam); đo từ khởi đầu sớm nhất tới kết thúc muộn nhất qua nhiều chuyển đạo đồng thời (một chuyển đạo có thể che khởi đầu/kết thúc khi vectơ vuông góc với nó — vd chỉ chuyển đạo I cho thấy 0,12 s thật trong Hình 3.7). Độ lệch nội tại (intrinsicoid deflection) = khởi đầu Q/R tới đỉnh R; phản ánh thời gian hoạt hóa nội mạc → ngoại mạc. Biên độ: đỉnh–đỉnh tới 4 mV vẫn có thể bình thường; điện thế thấp = ≤0,5 mV ở bất kỳ chuyển đạo chi nào và ≤1,0 mV ở bất kỳ chuyển đạo trước tim nào (thành ngực dày, suy giáp, amyloidosis, bệnh thâm nhiễm).

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-06.jpg" alt="Hình 3.6 — Toàn cảnh các chuyển đạo trước tim" loading="lazy">
  <figcaption><b>Hình 3.6.</b> Toàn cảnh các chuyển đạo trước tim V1–V6 trên một dải liên tục: sóng S lớn nhất ở V2 rồi nhỏ dần, sóng R tăng dần V1→V5.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-07.jpg" alt="Hình 3.7 — Phức bộ QRS ở I, II, III" loading="lazy">
  <figcaption><b>Hình 3.7.</b> Phức bộ QRS ở I, II, III. Đường lưới dọc mỗi 0,04 s — khởi đầu hoặc kết thúc QRS có thể đẳng điện ở một chuyển đạo, nên phải so sánh nhiều chuyển đạo mới đo đúng thời gian thật.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-08.jpg" alt="Hình 3.8 — Phức bộ QRS phóng to, độ lệch nội tại" loading="lazy">
  <figcaption><b>Hình 3.8.</b> Phức bộ QRS phóng to. Mũi tên hai đầu: độ lệch nội tại (0,05 s) — từ khởi đầu Q/R tới đỉnh R.</figcaption>
</figure>
- **Xác định trục QRS (phương pháp chuyển đạo chuyển tiếp)**: (1) Tìm chuyển đạo chuyển tiếp — QRS gần đẳng pha nhất (dương ≈ âm). (2) Chuyển đạo vuông góc với nó (hệ lục trục) giữ trục. (3) Nếu QRS ở chuyển đạo đó chủ yếu dương, trục bằng cực dương của chuyển đạo đó; nếu âm, bằng cực âm của nó. Trục trán bình thường **−30° đến +90°** (dương ở I và II). Cách tắt: I+ aVF+ → 0° đến +90° bình thường; I− II+ → lệch trục phải (+90° đến ±180°); I+ II− → lệch trục trái (−30° đến −120°); I− II− → lệch trục cực độ (−90° đến ±180°). Phương pháp thủ công làm tròn tới 30° gần nhất — đủ dùng trên lâm sàng. Trục dịch phải → trái theo tuổi (hướng phải ở trẻ sơ sinh, thẳng đứng ở trẻ em, hướng trái ở người lớn); thẳng đứng hơn ở người gầy, ngang hơn ở người nặng cân. Mặt phẳng ngang: chuyển đạo chuyển tiếp thường là V3/V4, trục thường 0° đến −60°.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-09.jpg" alt="Hình 3.9 — Xác định trục QRS mặt phẳng trán" loading="lazy">
  <figcaption><b>Hình 3.9.</b> Xác định trục QRS mặt phẳng trán. Đường dọc không mũi tên: chuyển đạo chuyển tiếp. A không có chuyển đạo chuyển tiếp — điểm chuyển nằm giữa aVF và III.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-10a.jpg" alt="Hình 3.10 — Trục QRS mặt phẳng trán" loading="lazy">
  <img src="figures/ch03/fig-3-10b.jpg" alt="Hình 3.10 — Trục QRS mặt phẳng trán" loading="lazy">
  <figcaption><b>Hình 3.10.</b> Trục QRS mặt phẳng trán: A. +60°, B. +150°, C. −30°, D. −60°, E. −120°. EAD: lệch trục cực độ; LAD: lệch trục trái; NA: trục bình thường; RAD: lệch trục phải.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-12.jpg" alt="Hình 3.12 — Trục QRS và trục T theo tuổi" loading="lazy">
  <figcaption><b>Hình 3.12.</b> A. Trẻ nhỏ. B. Người trẻ. C. Người cao tuổi. Mũi tên liền: hướng trục QRS và trục T ở mặt phẳng trán; mũi tên đứt: ở mặt phẳng ngang.</figcaption>
</figure>
- **Đoạn ST**: Giai đoạn tái cực sớm; điểm J (J point) = chỗ nối QRS/ST. Các điểm được đặt tên theo số ms sau điểm J (J+20, J+40, J+60). Bình thường ở mức đường nền của đoạn TP. Các biến thể bình thường: chênh xuống dốc lên/dốc xuống/ngang nhẹ; tái cực sớm đẩy ST lên tới 0,1 mV về phía sóng T; nam trẻ có thể chênh lên nhiều hơn ở V2–V3; QRS kéo dài làm thay đổi hình dạng ST.
- **Hình thái sóng T**: Trơn, tròn, giống sóng P; dương ở mọi chuyển đạo trừ aVR (âm) và V1 (hai pha hoặc hoàn toàn âm). Thời gian không đo riêng (nằm trong QT). Biên độ: ≤0,5 mV ở chi, ≤1,5 mV ở trước tim (nữ ~⅔ các giá trị này); ≤0,3 mV ở aVL/III, ≤0,5 mV ở V1/V6; luôn lớn hơn sóng U nếu có; giảm theo tuổi, lớn hơn ở nam. **Góc QRS-T**: trán ≤45°, ngang ≤60° bình thường; rộng ra trong phì đại (hypertrophy), nhồi máu, bệnh dẫn truyền.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-11.jpg" alt="Hình 3.11 — ECG bình thường, biến thể bình thường và bất thường" loading="lazy">
  <figcaption><b>Hình 3.11.</b> A. ECG bình thường. B–D. Các biến thể bình thường. E. ECG bất thường. Mũi tên: lệch đoạn ST ở chuyển đạo trước tim.</figcaption>
</figure>
- **Hình thái sóng U**: Không có hoặc sóng nhỏ tròn sau sóng T; cùng hướng với sóng T; ~10% biên độ sóng T; nổi bật nhất ở V2–V3; lớn hơn ở tần số chậm; nhập vào sóng P ở tần số nhanh; chỗ nối T–U thường ở đường nền. Nguồn gốc chưa chắc chắn: (1) tái cực muộn của Purkinje, (2) tái cực tế bào M, (3) hậu điện thế cơ–điện.

<figure class="ch-fig">
  <img src="figures/ch03/fig-waves.jpg" alt="Các dạng sóng P, QRS, T, U và các khoảng" loading="lazy">
  <figcaption><b>Hình minh họa (không đánh số trong sách).</b> Các dạng sóng: P (khử cực nhĩ), QRS (khử cực thất), T và U (tái cực thất). SA: nút xoang; AV: nút nhĩ thất; His: bó His.</figcaption>
</figure>
- **QT và QTc**: QT = khởi đầu QRS → cuối sóng T (phương pháp tiếp tuyến: đường thẳng qua phần dốc nhất của đoạn xuống cuối sóng T tới đường nền). QT thay đổi ngược với tần số, nên cần hiệu chỉnh: **Bazett: QTc = QT / √RR** (RR tính bằng giây). **Hodges: QTc = QT + 0,00175 × (tần số thất − 60)** — tốt hơn ở tần số cao/thấp. Giới hạn trên ≈ **0,46 s (460 ms)**; hơi dài hơn ở nữ trưởng thành, tăng theo tuổi, tình trạng, thuốc. Cần nhiều chu kỳ đều nhau liên tiếp (thích nghi không xảy ra ngay); nhập T–U làm việc đo khó khăn.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-13.jpg" alt="Hình 3.13 — Phương pháp tiếp tuyến xác định cuối sóng T" loading="lazy">
  <figcaption><b>Hình 3.13.</b> Phương pháp tiếp tuyến để xác định cuối sóng T: cuối sóng T là điểm đường thẳng qua phần dốc nhất của đoạn xuống sóng T cắt đường nền.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-intervals.jpg" alt="Các đoạn và khoảng trên ECG" loading="lazy">
  <figcaption><b>Hình minh họa (không đánh số trong sách).</b> Các đoạn và khoảng: đoạn P–R, khoảng P–R, khoảng QRS, đoạn S–T, khoảng Q–T, khoảng T–P.</figcaption>
</figure>
- **Nhịp tim (giới thiệu)**: Bình thường = nhịp xoang (nguồn gốc từ nút xoang (nút SA)), **60–100 lần/phút** khi thức lúc nghỉ. <60 = nhịp chậm xoang, >100 = nhịp nhanh xoang — nhưng "bình thường" tùy thuộc hoạt động (40 lần/phút khi ngủ, 200 lần/phút khi gắng sức có thể bình thường; 90 lần/phút có thể bất thường trong cả hai trường hợp). Loạn nhịp xoang = biến thiên hô hấp bình thường (nhanh hơn khi hít vào, chậm hơn khi thở ra); mất biến thiên tần số tim gợi ý bệnh thần kinh tự chủ/tim. Các kiểu trục P, PR, hoặc hình thái QRS bất thường (Hình 3.15–3.17) gợi ý nguồn gốc nhịp: PR ngắn + trục P bình thường + QRS bình thường → đường dẫn nhanh qua nút AV; PR ngắn + sóng delta + QRS rộng → tiền kích thích thất (nguy cơ vòng vào lại); PR dài + trục P bình thường → chậm dẫn truyền; không có sóng P → bất thường nhịp rõ ràng — người đọc phải xác định sóng P nếu có.

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-14.jpg" alt="Hình 3.14 — Loạn nhịp xoang" loading="lazy">
  <figcaption><b>Hình 3.14.</b> Loạn nhịp xoang: tần số thay đổi theo hô hấp — nhanh hơn khi hít vào, chậm hơn khi thở ra.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-15.jpg" alt="Hình 3.15 — Các kiểu sóng P và khoảng PR" loading="lazy">
  <figcaption><b>Hình 3.15.</b> Các kiểu sóng P / khoảng PR. A. Bình thường (PR 0,2 s — giới hạn trên bình thường). B. Sóng P lạc chỗ. C. PR ngắn. D. PR dài. E. Sóng P ngược chiều. F. Không có sóng P. Đường lưới dọc mỗi 0,2 s.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-16.jpg" alt="Hình 3.16 — PR ngắn, sóng delta, QRS kéo dài" loading="lazy">
  <figcaption><b>Hình 3.16.</b> A. Bình thường. B. PR ngắn + sóng delta. C. PR bình thường + QRS kéo dài. D. Không có sóng P + QRS kéo dài. Đường lưới dọc mỗi 0,2 s.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-17.jpg" alt="Hình 3.17 — Quan hệ QRS–T" loading="lazy">
  <figcaption><b>Hình 3.17.</b> Quan hệ QRS–T. A. Bình thường. B. ST chênh lên. C. Biên độ sóng T tăng. D. QT kéo dài. E. Biên độ sóng U tăng.</figcaption>
</figure>
- **Lời cuối**: Hãy so sánh với các bản ghi trước — bước quan trọng nhất. ECG chỉ ghi lại một khoảnh khắc; sinh lý thay đổi từng khoảnh khắc. Các bản ghi trước cho thấy bệnh đang tiến triển và đáp ứng điều trị.

## Các khái niệm chính
- **Cách tiếp cận hệ thống**: thứ tự cố định 9 đặc điểm cho mọi lần đọc ECG.
- **Ô nhỏ / ô lớn**: 0,04 s × 0,1 mV so với 0,20 s × 0,5 mV ở 25 mm/s, 10 mm/mV.
- **Phương pháp 300 / phương pháp 1500**: tần số = 300 ÷ số ô lớn, hoặc 1500 ÷ số ô nhỏ.
- **Chuyển đạo chuyển tiếp**: chuyển đạo mà QRS gần đẳng pha nhất; vuông góc với trục.
- **Độ lệch nội tại**: khởi đầu Q/R tới đỉnh R; thời gian nội mạc → ngoại mạc.
- **Góc QRS-T**: số độ giữa trục QRS và trục T (trán ≤45°, ngang ≤60°).
- **Phương pháp tiếp tuyến**: cuối sóng T = phần dốc xuống cuối dốc nhất kéo dài tới đường nền.
- **QTc**: QT đã hiệu chỉnh theo tần số (Bazett hoặc Hodges); giới hạn trên ~0,46 s.
- **Nhịp xoang**: nguồn gốc từ nút xoang, 60–100 lần/phút lúc nghỉ.
- **Loạn nhịp xoang**: biến thiên tần số hô hấp bình thường.
- **Biến thiên tần số tim**: biến thiên bình thường lúc nghỉ; mất biến thiên gợi ý bệnh.
- **Tiền kích thích thất**: xung động bỏ qua nút AV qua bó phụ; sóng delta, QRS rộng, nguy cơ vòng vào lại.
- **Điểm J**: chỗ nối của QRS và đoạn ST.

## Mô hình tư duy
- Dùng lưới như một máy tính: 300 và 1500 là hai con số duy nhất bạn cần để tính tần số.
- Hãy nghĩ chuyển đạo chuyển tiếp như cái bóng của trục: nơi QRS tự triệt tiêu, trục đang chỉ đúng 90° lệch khỏi đó.
- Hãy nghĩ khoảng PR như một đồng hồ bấm giờ trên nút AV: phần lớn độ dài của nó là độ trễ ở nút, nên tần số và tuổi làm nó dịch chuyển một cách đoán được.
- Hãy nghĩ mọi thay đổi ST "biến thể bình thường" như một kẻ bắt chước: tái cực sớm, chênh lên V2–V3 ở nam trẻ, và ảnh hưởng của QRS kéo dài phải được loại trừ trước khi gọi ST là bất thường.
- Hãy nghĩ bản ghi trước như đặc điểm thứ 10: một phát hiện "mới" chỉ mới khi so với ECG cũ.

## Các sai lầm thường gặp
- **Đo thời gian QRS trên một chuyển đạo**: khởi đầu/kết thúc có thể đẳng điện trên một chuyển đạo đơn lẻ — hãy dùng nhiều chuyển đạo đồng thời để có thời gian thật.
- **Gọi tần số từ ô nhỏ ở tần số chậm**: dùng ô lớn dưới 100 lần/phút; dành phương pháp 1500 cho nhịp nhanh.
- **Chấp nhận "không có sóng P" mà không tìm kiếm**: ở tần số nhanh sóng P nhập vào sóng T đứng trước; sóng P mất là một chẩn đoán nhịp, không phải chuyện bỏ qua.
- **Đánh giá QT mà không hiệu chỉnh theo tần số**: QT chưa hiệu chỉnh là vô nghĩa; và chỉ đo sau nhiều chu kỳ đều nhau.
- **Đọc ECG tách rời**: không có bản ghi trước, bạn không thể phân biệt mới với cũ — lỗi thường gặp nhất có thể tránh được trong chương này.

## Bảng tham chiếu

### Lưới ECG ở 25 mm/s, 10 mm/mV

| | Thời gian | Điện thế |
|---|---|---|
| Ô nhỏ (1 mm) | 0,04 s (40 ms) | 0,1 mV |
| Ô lớn (5 mm) | 0,20 s (200 ms) | 0,5 mV |

### Tần số theo số ô giữa các dạng sóng giống hệt nhau

| Ô lớn | Tần số (lần/phút) | Ô nhỏ | Tần số (lần/phút) |
|---|---|---|---|
| 1 | 300 | 6 | 250 |
| 2 | 150 | 7 | 214 |
| 3 | 100 | — | — |
| 4 | 75 | — | — |

### Giới hạn bình thường — những con số quan trọng

| Đặc điểm | Giới hạn bình thường |
|---|---|
| Thời gian sóng P | <0,12 s |
| Biên độ sóng P | ≤0,2 mV trán, ≤0,1 mV trước tim |
| Trục P (trán) | 0° đến +75° |
| Khoảng PR | 0,10–0,21 s (trẻ em 0,10–0,12; thiếu niên 0,12–0,16; người lớn 0,14–0,21) |
| Thời gian QRS | 0,07–0,11 s |
| Trục QRS (trán) | −30° đến +90° |
| Thời gian sóng Q | I, II, aVL, aVF <0,03 s; V4 <0,02 s; V5, V6 <0,03 s; sóng Q nào ở V1–V3 cũng bất thường |
| Điện thế QRS thấp | ≤0,5 mV bất kỳ chuyển đạo chi nào; ≤1,0 mV bất kỳ chuyển đạo trước tim nào |
| Biên độ sóng T | ≤0,5 mV chi, ≤1,5 mV trước tim (nữ ~⅔) |
| Góc QRS-T | Trán ≤45°, ngang ≤60° |
| Sóng U | ~10% biên độ sóng T, nổi bật nhất ở V2–V3 |
| Giới hạn trên QTc | ~0,46 s (460 ms) |
| Tần số xoang (nghỉ, thức) | 60–100 lần/phút |

### Cách tắt xác định trục QRS

| Chuyển đạo I | Chuyển đạo II (hoặc aVF) | Trục |
|---|---|---|
| + | + | 0° đến +90° (bình thường) |
| − | + | +90° đến ±180° (lệch trục phải) |
| + | − | −30° đến −120° (lệch trục trái) |
| − | − | −90° đến ±180° (lệch trục cực độ) |

## Ví dụ minh họa

<figure class="ch-fig">
  <img src="figures/ch03/fig-3-05.jpg" alt="Hình 3.5 — ECG 12 chuyển đạo bình thường" loading="lazy">
  <figcaption><b>Hình 3.5.</b> ECG 12 chuyển đạo bình thường, trình bày theo format cổ điển. Mũi tên: sóng Q nhỏ; dấu *: sóng Q rất nhỏ.</figcaption>
</figure>
**Đọc đầy đủ 9 đặc điểm của ECG bình thường trong Hình 3.5.** (1) Tần số: các phức bộ QRS cách nhau 4 ô lớn → 300/4 = 75 lần/phút, đều. (2) Sóng P: trơn, một pha, hướng lên ở II, <0,12 s, ≤0,2 mV. (3) PR: 0,16 s — trong khoảng 0,10–0,21 s. (4) QRS: sóng Q nhỏ chỉ ở nơi cho phép (không có ở V1–V3), tiến triển R V1→V5 có, sóng S lớn nhất ở V2 rồi giảm dần, thời gian 0,08 s, trục +60° (dương ở I và aVF). (5) ST: đẳng điện ở J+40/J+60. (6) Sóng T: hướng lên trừ aVR, ≤0,5 mV ở chi. (7) Sóng U: không có. (8) QTc: QT 0,40 s ở 75 lần/phút → QTc = 0,40/√0,80 ≈ 0,45 s — vừa trong 0,46 s. (9) Nhịp: xoang, đều. Kết luận: ECG bình thường — và kết luận chỉ hoàn chỉnh sau khi xác nhận không thay đổi so với bản ghi trước của bệnh nhân.

## Điểm chính cần nhớ
1. Cùng 9 đặc điểm, cùng thứ tự, mọi ECG — hệ thống chính là kỹ năng.
2. Lưới trước tiên: ô nhỏ 0,04 s × 0,1 mV; tần số = 300/số ô lớn, 1500/số ô nhỏ khi nhanh.
3. P <0,12 s, PR 0,10–0,21 s, QRS 0,07–0,11 s, trục QRS −30° đến +90°, QTc ≤0,46 s — năm con số neo mọi lần đọc.
4. Sóng Q nào ở V1–V3 cũng bất thường; mất tiến triển R gợi ý nhồi máu; điện thế thấp có định nghĩa chặt chẽ.
5. Trục lấy từ chuyển đạo chuyển tiếp; cách tắt I/aVF cho góc phần tư trong vài giây.
6. So sánh với các bản ghi trước — không có chúng, "mới" chỉ là phỏng đoán.

## Liên hệ tới
- **Chương 1**: định nghĩa dạng sóng (P/QRS/T/U, các khoảng, điểm J) là từ vựng dùng ở đây; sự đồng hướng của sóng T với QRS được giải thích bằng thứ tự tái cực.
- **Chương 2**: xác định trục cần hệ lục trục; chất lượng đặt điện cực quyết định bất kỳ phép đo nào trong số này có đáng tin hay không.
- **Phần III (không có trong skill này)**: các rối loạn nhịp — chương này chỉ là phần giới thiệu; các kiểu P/PR/QRS bất thường nêu ở đây hướng tới phần đó.
`;export{e as default};