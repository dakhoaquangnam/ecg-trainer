var e=`# Chương 21: Máy tạo nhịp tim cấy ghép

## Ý tưởng cốt lõi

Máy tạo nhịp không phải là một cái máy đếm nhịp (metronome): nó cảm nhận hoạt động nội tại và chỉ phát xung đúng lúc khi cần. Đọc một ECG có tạo nhịp nghĩa là trả lời ba câu hỏi trên mỗi nhịp — máy có tạo nhịp không, có bắt được nhịp không (có sóng P hoặc QRS sau xung tạo nhịp [artifact] không), và có cảm nhận đúng không (ức chế hoặc kích hoạt một cách phù hợp không)? Hầu hết các "trục trặc" đều là thất bại của một trong ba chức năng đó, và một số bất thường nhìn qua tưởng là bệnh thực ra lại là hoạt động bình thường của máy — một xung rơi vào trong một QRS nội tại, hoặc một QRS bị bỏ qua duy nhất trong lúc kiểm tra dẫn truyền. Chủ đề lâm sàng trung tâm của chương: tự thân việc tạo nhịp ở mỏm thất phải (right-ventricular — RV) đã có thể gây hại cho tim. Tạo nhịp RV thường xuyên gây mất đồng bộ và suy tim do tạo nhịp, vì vậy thực hành hiện đại giảm thiểu tạo nhịp RV và, khi có thể, tạo nhịp ở hệ dẫn truyền (bó His) hoặc cả hai thất (CRT) thay thế.

## Các khung khái niệm được giới thiệu

- **Mã NBG (NASPE/BPEG Generic) — 5 vị trí (sửa đổi 2002).** I: buồng được tạo nhịp; II: buồng được cảm nhận; III: đáp ứng với cảm nhận; IV: điều biến tần số; V: tạo nhịp đa vị trí. Các chữ cái: O = không, A = nhĩ, V = thất, D = kép (A + V); vị trí III thêm T = kích hoạt (triggered), I = ức chế (inhibited), D = kép (T + I); IV: R = điều biến tần số; V: O/A/V/D. Ba chữ cái đầu theo thứ tự quan trọng: tạo nhịp → cảm nhận → đáp ứng.
- **Chế độ nhu cầu (Demand mode).** Máy cảm nhận các xung nội tại và giữ không phát xung khi nhịp nội tại vượt quá tần số đã lập trình; nó chỉ tạo nhịp khi nhịp nội tại giảm xuống dưới tần số đã lập trình (tần số tối thiểu). Tất cả máy tạo nhịp cấy ghép hiện nay đều có chế độ nhu cầu tích hợp, vì các rối loạn mà chúng điều trị thường là từng lúc.
- **Thử nghiệm nam châm (Magnet test).** Nam châm chuyển máy tạo nhịp sang tạo nhịp tần số cố định và vô hiệu hóa cảm nhận ở mọi kênh. Tần số khi đặt nam châm giúp nhận diện nhà sản xuất và tình trạng pin (xem Bảng tham chiếu). Nam châm đặt trên máy khử rung cấy ghép qua tĩnh mạch (ICD) hiện đại sẽ vô hiệu hóa các liệu pháp chống nhịp nhanh *mà không* thay đổi chức năng tạo nhịp.
- **Các trạng thái hoạt động của DDD.** Hoạt động ở tần số tối thiểu (nhịp nhĩ dưới tần số theo dõi tối thiểu → tạo nhịp nhĩ và thất); hoạt động theo dõi (nhịp xoang trên tần số tối thiểu → theo dõi nhĩ, tạo nhịp thất theo khoảng AV đã lập trình); hoạt động ở tần số tối đa (nhịp nhĩ trên tần số theo dõi tối đa đã lập trình → tạo nhịp thất bị giới hạn ở tần số theo dõi trên). Phải lập trình một tần số theo dõi tối đa để tránh theo dõi các nhịp nhĩ nhanh.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-06.jpg" alt="Hình 21.6 — Các trạng thái hoạt động của DDD" loading="lazy">
  <figcaption><b>Hình 21.6.</b> A: tạo nhịp nhĩ và thất ở tần số tối thiểu. B: tạo nhịp thất theo nhịp nhĩ được theo dõi với khoảng AV đã lập trình. C: tạo nhịp thất theo các sóng cuồng nhĩ được cảm nhận, thể hiện hành vi ở tần số tối đa.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-08.jpg" alt="Hình 21.8 — Tạo nhịp nhĩ-thất và theo dõi nhịp xoang nhanh" loading="lazy">
  <figcaption><b>Hình 21.8.</b> A: mũi tên — tạo nhịp nhĩ và thất. B: mũi tên — tạo nhịp thất theo dõi nhịp xoang nhanh.</figcaption>
</figure>

- **Khung lựa chọn CRT.** ECG giúp chọn ứng viên CRT và hướng dẫn vị trí đặt điện cực thất trái: lợi ích lớn nhất khi có block nhánh trái (LBBB) và QRS kéo dài; ECG theo dõi giúp xác minh bắt nhịp ở cả hai thất và tối ưu hóa khoảng AV và khoảng RV–LV.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-18.jpg" alt="Hình 21.18 — CRT: tạo nhịp hai thất và chỉ tạo nhịp thất trái" loading="lazy">
  <figcaption><b>Hình 21.18.</b> A: CRT truyền thống — tạo nhịp cả thất phải và thất trái, đặc trưng bởi sóng R ở V1 và sóng Q ban đầu ở I. B: CRT chỉ tạo nhịp thất trái, xung thất trái được căn thời gian trùng với kích hoạt bó phải nội tại, có thể cho QRS hẹp, trông 'bình thường' hơn.</figcaption>
</figure>

## Các khái niệm chính

- **Máy tạo nhịp, bộ phát xung, điện cực (bảng thuật ngữ).** *Máy tạo nhịp tim cấy ghép (implantable cardiac pacemaker)* cảm nhận các xung tự nhiên và/hoặc tạo ra các xung truyền đến cơ tim để kích thích co bóp. *Bộ phát xung (pulse generator)* (pin, cổng điện cực, bộ xử lý) nằm dưới da ở vùng ngực. *Điện cực tạo nhịp / dây dẫn (pacing electrodes/leads)* truyền xung đến cơ tim và, trong các hệ thống có cảm nhận, truyền các xung nội tại trở lại máy tạo nhịp. Dây dẫn qua tĩnh mạch được vặn vào nội mạc của nhĩ phải và thất phải; dây dẫn thất trái nằm trong một tĩnh mạch thượng mạc (xoang vành). Tạo nhịp tạm thời dùng bộ phát xung ngoài với dây dẫn qua tĩnh mạch hoặc miếng dán trên da.
- **Xung tạo nhịp (artifacts), bắt nhịp (capture), cảm nhận (sensing) (bảng thuật ngữ).** Xung tạo nhịp là những đường dọc tần số cao trên ECG, đại diện cho xung của máy tạo nhịp: trước một QRS = tạo nhịp thất có bắt nhịp; trước một sóng P = tạo nhịp nhĩ có bắt nhịp; không có sóng P hoặc QRS theo sau = mất bắt nhịp. Xung tạo nhịp có thể nhỏ và vắng mặt ở một số chuyển đạo; một hệ thống hai thất có thể cho thấy ba hoặc thậm chí bốn xung tạo nhịp. Bắt nhịp (capture) = có sóng P hoặc QRS được tạo nhịp theo sau xung; cảm nhận (sensing) = máy phát hiện hoạt động nội tại và ức chế (hoặc kích hoạt) tương ứng — hãy đánh giá tạo nhịp và cảm nhận ở từng buồng. *Tạo nhịp tần số cố định (fixed-rate pacing)* chỉ tạo xung, không có cảm nhận hay thay đổi tần số. *Chế độ nhu cầu (demand mode)* cảm nhận hoạt động nội tại và bị nó ức chế. *Cảm nhận quá mức (oversensing)*: các tín hiệu không phải cơ tim (ví dụ nhiễu điện từ, gãy dây dẫn) bị cảm nhận và ức chế hoặc kích hoạt việc tạo xung.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-02.jpg" alt="Hình 21.2 — Tạo nhịp tần số cố định ở thất và nhĩ" loading="lazy">
  <figcaption><b>Hình 21.2.</b> A, B: hệ thống tạo nhịp thất và nhĩ tần số cố định, tương ứng. Mũi tên: các xung tạo nhịp nhỏ ở tần số 50 lần/phút; dấu sao: khoảng PR kéo dài.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-03.jpg" alt="Hình 21.3 — Xung tạo nhịp nổi bật ở V5, vắng mặt ở II" loading="lazy">
  <figcaption><b>Hình 21.3.</b> Mũi tên: xung tạo nhịp nổi bật (chuyển đạo V5) và vắng mặt (chuyển đạo II) ở các chuyển đạo khác nhau; dấu sao: biên độ xung biến đổi (V4), đặc trưng của bản ghi ECG số.</figcaption>
</figure>

- **Hội chứng máy tạo nhịp; nhịp nhanh do máy tạo nhịp; mất đồng bộ (bảng thuật ngữ).** *Hội chứng máy tạo nhịp (pacemaker syndrome)*: cảm giác đầy ở cổ, choáng váng, đôi khi ngất do phản xạ phế vị (vasovagal) vì dẫn truyền ngược của các nhịp thất được tạo nhịp; nhĩ co bóp chống lại van ba lá đang đóng trong lúc thất co bóp gây giãn nhĩ. Mất đồng bộ nhĩ-thất (ví dụ tạo nhịp VVI không có điện cực nhĩ) có thể gây ra hội chứng này, vì vậy thường cấy thêm điện cực nhĩ khi cần tạo nhịp thất, trừ khi có rung nhĩ vĩnh viễn. *Nhịp nhanh do máy tạo nhịp (pacemaker-mediated tachycardia)*: với máy hai buồng, một sóng P ngược có thể bị theo dõi, thúc đẩy tạo nhịp thất và duy trì vòng lặp ở tần số theo dõi trên của máy. *Mất đồng bộ (dyssynchrony)* là mất sự co bóp cơ học đồng bộ của các thành thất — với LBBB hoặc tạo nhịp RV, vách liên thất thất trái kích hoạt/co bóp sớm kèm theo thành tự do thất trái bị kéo giãn, sau đó thành tự do co bóp muộn kèm theo vách nảy ngược.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-15.jpg" alt="Hình 21.15 — Hội chứng máy tạo nhịp: sóng P ngược 1:1" loading="lazy">
  <figcaption><b>Hình 21.15.</b> Mũi tên: các sóng P ngược của dẫn truyền thất–nhĩ 1:1 — hội chứng máy tạo nhịp.</figcaption>
</figure>

- **Máy tạo nhịp hai thất; CRT; khử rung; một buồng / hai buồng (bảng thuật ngữ).** *Máy tạo nhịp hai thất (biventricular pacemaker)* tạo nhịp cả thất phải và thất trái; tạo nhịp nhĩ cũng được bao gồm trừ khi loạn nhịp nhĩ mạn tính ngăn cản. *Liệu pháp tái đồng bộ tim (cardiac resynchronization therapy — CRT)* là tạo nhịp hai thất hoặc tạo nhịp bó His để đồng bộ hóa sự kích hoạt và co bóp của thất. *Khử rung (defibrillation)* là chấm dứt rung nhĩ hoặc rung thất bằng một dòng điện bên ngoài. *Máy tạo nhịp một buồng (single-chamber pacemaker)* có một dây dẫn tạo nhịp và cảm nhận một buồng; *máy tạo nhịp hai buồng (dual-chamber pacemaker)* gồm tạo nhịp nhĩ và thất.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-20.jpg" alt="Hình 21.20 — Tạo nhịp hai thất: sơ đồ dây dẫn và dải nhịp" loading="lazy">
  <figcaption><b>Hình 21.20.</b> Tạo nhịp hai thất. Trái: sơ đồ vị trí các dây dẫn nhĩ, thất phải và thất trái; phải: dải nhịp cho thấy hai xung tạo nhịp cho mỗi QRS, với một khoảng giữa tạo nhịp thất trái và thất phải. Mũi tên chỉ hai xung tạo nhịp cho mỗi QRS — khoảng này có thể điều chỉnh để tối ưu hóa chức năng thất trong CRT.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-01a.jpg" alt="Hình 21.1A — Máy tạo nhịp hai thất với ba dây dẫn" loading="lazy">
  <img src="figures/ch21/fig-21-01b.jpg" alt="Hình 21.1B — Máy tạo nhịp không dây Micra AV" loading="lazy">
  <figcaption><b>Hình 21.1.</b> A: máy tạo nhịp hai thất với ba dây dẫn — trên: dây dẫn xoang vành (tạo nhịp thất trái); giữa: dây dẫn thất phải; dưới: dây dẫn nhĩ phải cố định chủ động. B: máy tạo nhịp không dây tích hợp bộ phát xung và điện cực trong một thiết bị thu nhỏ duy nhất — Micra AV Model MC1AVR1.</figcaption>
</figure>

- **Máy tạo nhịp không dây; điều biến tần số; ATP và kiến thức cơ bản về ICD.** Máy tạo nhịp không dây (leadless pacemaker) gói bộ phát xung và điện cực vào một thiết bị thu nhỏ duy nhất đặt hoàn toàn trong một buồng tim (ví dụ Micra AV Model MC1AVR1); các máy thế hệ hiện tại có thể cảm nhận một hoặc nhiều buồng và tạo nhịp thất phải để cung cấp tạo nhịp VDD hoặc VVI. *Điều biến tần số (rate modulation — chế độ R)* tự động tăng tần số tối thiểu nhờ một cảm biến hoạt động — tinh thể áp điện (piezoelectric crystal), gia tốc kế (accelerometer), thiết bị cảm nhận trở kháng (tần số hô hấp hoặc thông khí phút), hoặc mô phỏng "vòng kín" (closed-loop); tần số cảm biến tối đa và tần số theo dõi tối đa có thể được lập trình độc lập. *Tạo nhịp chống nhịp nhanh (antitachycardia pacing — ATP)* là một chuỗi các nhịp được tạo nhịp để chấm dứt một cơn nhịp nhanh (hình trong chương cho thấy một chuỗi năm nhịp). Thực hành hiện nay giới hạn ATP cho các loạn nhịp nhanh trên thất; ATP cho nhịp nhanh thất thường được tích hợp trong ICD, vì ATP có thể làm nhịp nhanh thất đơn hình ổn định tăng tốc thành nhịp nhanh thất đa hình không ổn định hoặc rung thất. ICD qua tĩnh mạch bao gồm đầy đủ chức năng tạo nhịp chống lại các loạn nhịp chậm. ICD dưới da không có điện cực trong mạch máu và chỉ cung cấp tạo nhịp khẩn cấp sau sốc với công suất cao, gây đau và tốn pin — không chỉ định cho bệnh nhân có nguy cơ loạn nhịp chậm.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-09.jpg" alt="Hình 21.9 — ATP: chuỗi năm nhịp chấm dứt cơn nhịp nhanh" loading="lazy">
  <figcaption><b>Hình 21.9.</b> Mũi tên: bắt đầu chuỗi năm nhịp (ATP) chấm dứt cơn nhịp nhanh; dấu sao: trở lại nhịp xoang.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-10.jpg" alt="Hình 21.10 — ICD: sốc năng lượng cao chấm dứt nhịp nhanh thất" loading="lazy">
  <figcaption><b>Hình 21.10.</b> Dấu sao: xung khử rung năng lượng cao của ICD chấm dứt cơn nhịp nhanh; mũi tên: trở lại tạo nhịp hai buồng.</figcaption>
</figure>

- **Các thuật toán tránh tạo nhịp RV; tạo nhịp bó His.** Máy tạo nhịp hai buồng / máy khử rung hiện đại kiểm tra định kỳ sự trở lại của dẫn truyền AV nội tại trong block AV độ hai hoặc độ ba từng lúc — kéo dài khoảng AV để thúc đẩy dẫn truyền nội tại, tạm ngưng tạo nhịp thất trong một chu kỳ duy nhất, và cho phép một QRS "bị bỏ qua" duy nhất trước khi tiếp tục tạo nhịp nhĩ và thất với khoảng AV ngắn. *Tạo nhịp bó His (His-bundle pacing)*: độ lệch của bó His được xác định trên điện đồ trong tim từ dây dẫn tạo nhịp thất và dây dẫn được neo tại đó; trong nhiều trường hợp block AV, vị trí block nằm ở nút AV hoặc bó His gần và có thể vượt qua bằng cách đặt dây dẫn ở phía xa vị trí block. Nó có thể sửa chữa LBBB hoặc RBBB tiềm ẩn ở 70% đến 90% bệnh nhân và có thể dùng thay cho tạo nhịp hai thất trong CRT. *Bắt nhịp chọn lọc (selective capture)* (dây dẫn thường ở trên van ba lá): xung tạo nhịp rồi một khoảng đẳng điện ít nhất 30 ms, sau đó là một QRS giống hệt dẫn truyền tự nhiên. *Bắt nhịp không chọn lọc (nonselective capture)* (dây dẫn thường ở dưới van ba lá): xung kích thích rồi ngay lập tức một QRS có đoạn dốc lài ở đầu, sau đó 30 đến 40 ms một QRS sắc nét với lực cuối nhanh; khoảng 40 đến 60 ms sau xung, QRS trở nên giống hệt nhịp nội tại — giống như dẫn truyền tiền kích thích (preexcitation) từ một đường phụ trước-vách (xem Chương 19).

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-22.jpg" alt="Hình 21.22 — Xác định bó His bằng bản đồ điện đồ" loading="lazy">
  <figcaption><b>Hình 21.22.</b> Bó His có thể được xác định bằng bản đồ điện đồ. Bó His tạo ra một tín hiệu riêng biệt được đánh dấu bằng mũi tên hai đầu.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-23.jpg" alt="Hình 21.23 — Tạo nhịp bó His chọn lọc" loading="lazy">
  <figcaption><b>Hình 21.23.</b> Dẫn truyền nội tại trên ECG 12 chuyển đạo (A) và ECG tạo nhịp bó His (B). Lưu ý khoảng đẳng điện giữa xung tạo nhịp bó His và khởi phát QRS, và hình thái QRS giống hệt nhau giữa QRS tự nhiên và QRS được tạo nhịp — đặc trưng của bắt nhịp bó His chọn lọc thành công từ dây dẫn đặt trên van ba lá.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-24.jpg" alt="Hình 21.24 — Tạo nhịp bó His không chọn lọc" loading="lazy">
  <figcaption><b>Hình 21.24.</b> Dẫn truyền nội tại trên ECG 12 chuyển đạo (A) và ECG tạo nhịp bó His (B). Lưu ý không có khoảng đẳng điện giữa xung tạo nhịp bó His và khởi phát QRS, và QRS khởi phát có dạng 'sóng delta' do bắt nhịp cơ thất phải quanh bó His. Khoảng 40–60 ms sau xung, QRS trở nên giống hệt nhịp nội tại — đặc trưng của bắt nhịp không chọn lọc.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-19.jpg" alt="Hình 21.19 — Thuật toán giảm thiểu tạo nhịp thất" loading="lazy">
  <figcaption><b>Hình 21.19.</b> Thuật toán máy tạo nhịp hai buồng để giảm thiểu tạo nhịp thất. Ba xung tạo nhịp nhĩ rồi các sóng P được tạo nhịp, một khoảng AV dài (máy đã kéo dài để thúc đẩy dẫn truyền nội tại), với một xung máy chồng lên QRS; sau nhát nhĩ được tạo nhịp thứ tư, tạo nhịp thất bị tạm ngưng một chu kỳ và không thấy QRS — máy cho phép một QRS 'bị bỏ qua' duy nhất.</figcaption>
</figure>

## Các mô hình tư duy

- **"Tạo nhịp → cảm nhận → đáp ứng": cách đọc ECG theo ba câu hỏi.** Một xung không có phức bộ theo sau là thất bại bắt nhịp; các xung chạy xuyên qua các nhịp nội tại mà không bị ức chế là thất bại cảm nhận; thiếu xung khi nhịp chậm là thất bại tạo nhịp (hoặc cảm nhận quá mức ức chế đầu ra).
- **Máy tạo nhịp nhu cầu là lưới an toàn, không phải máy đếm nhịp.** Nếu nhịp nội tại vượt quá tần số đã lập trình, máy im lặng và chức năng tạo nhịp của nó không nhìn thấy được trên ECG — chỉ thấy khi xảy ra nhịp chậm hoặc khi đặt nam châm. Nếu mọi nhịp đều được tạo nhịp, không thể đánh giá cảm nhận từ đoạn ECG đó.
- **DDD gần giống sinh lý bình thường.** Hãy nghĩ DDD như một nút AV nhân tạo: nó theo dõi nhĩ, chờ khoảng AV đã lập trình, rồi tạo nhịp thất — rút ngắn khoảng AV khi tần số tăng, theo dõi loạn nhịp xoang và ngoại tâm thu nhĩ (atrial premature beats — APB), và bị thiết lập lại bởi ngoại tâm thu thất (ventricular premature beats — VPB). Nó có thể kéo dài khoảng AV đối với các APB ghép gần và có thể không cảm nhận được các APB ghép rất gần rơi vào thời kỳ trơ của nhĩ.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-07.jpg" alt="Hình 21.7 — DDD: APB được cảm nhận, không được cảm nhận" loading="lazy">
  <figcaption><b>Hình 21.7.</b> A: mũi tên — ngoại tâm thu nhĩ (APB) được cảm nhận. B: mũi tên — ngoại tâm thu thất được cảm nhận. C: mũi tên — APB không được cảm nhận; dấu sao — tạo nhịp AV ở tần số tối thiểu sau khoảng ngừng do APB gây ra, tiếp tục cho tới khi nhịp xoang nội tại vượt tần số tối thiểu này.</figcaption>
</figure>

- **Quy tắc 0,04 giây: thất bại cảm nhận biểu kiến có thể là bình thường.** Hoạt động nội tại cần hơn 0,04 giây để đến được điện cực ở mỏm RV và được cảm nhận. Khi nhịp nội tại gần bằng tần số tối thiểu đã lập trình (ví dụ rung nhĩ với chậm từng lúc), một xung tạo nhịp có thể rơi vào 0,04 giây sau khi bắt đầu một QRS nội tại — đó là chức năng bình thường, không phải thất bại cảm nhận.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-14.jpg" alt="Hình 21.14 — Quy tắc 0,04 giây: xung rơi vào QRS nội tại là bình thường" loading="lazy">
  <figcaption><b>Hình 21.14.</b> Mũi tên: xung tạo nhịp rơi vào 0,04 giây sau khi bắt đầu một QRS nội tại — chức năng bình thường, không phải thất bại cảm nhận.</figcaption>
</figure>

- **Vị trí tạo nhịp quyết định mẫu ECG.** Sóng lan truyền từ điện cực: mỏm RV → mẫu LBBB ở V1 với lệch trục trái cực độ (từ mỏm → đáy, hướng lên trên); đường ra RV → trục trán hướng xuống dưới (từ đáy → mỏm); thất trái / xoang vành xa → mẫu RBBB ở V1 (thất trái rồi thất phải kích hoạt). Tạo nhịp hai thất (CRT) → sóng R ở V1 cộng với độ lệch âm rồi dương ở chuyển đạo I; tạo nhịp chỉ thất trái trong CRT được căn thời gian theo dẫn truyền bó phải nội tại có thể cho QRS hẹp hơn, gần bình thường.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-17.jpg" alt="Hình 21.17 — Tạo nhịp mỏm thất phải và đường ra thất phải" loading="lazy">
  <figcaption><b>Hình 21.17.</b> A: tạo nhịp mỏm thất phải. B: tạo nhịp đường ra thất phải.</figcaption>
</figure>

- **Tạo nhịp mỏm RV là một sự đánh đổi, không phải bữa trưa miễn phí.** Nó cứu nhịp chậm nhưng tạo ra mất đồng bộ giống LBBB; thất càng được tạo nhịp nhiều thì hại càng lớn — vì vậy mới có các thuật toán giảm thiểu tạo nhịp RV, CRT và tạo nhịp bó His.
- **Khả năng nhìn thấy xung là đặc tính của bản ghi, không phải của máy.** Các dây dẫn hiện đại có khoảng cách hẹp tạo nhịp với độ rộng xung 0,4 ms, nên xung nhỏ hơn; các máy ECG số cũ chỉ lấy mẫu một lần mỗi 2 đến 4 ms có thể bỏ sót một xung rơi giữa hai lần lấy mẫu. Các máy hiện nay lấy mẫu ở tần số cao hơn nhiều. Một xung vắng mặt ở một chuyển đạo (vắng ở chuyển đạo II, nổi bật ở V5) không chứng minh máy đã hỏng.

## Những sai lầm cần tránh

- **Gọi một xung nằm trong một QRS nội tại là "thất bại cảm nhận".** Nếu nhịp nội tại gần bằng tần số tối thiểu đã lập trình, máy có thể chưa kịp cảm nhận — một xung rơi vào 0,04 giây sau khi bắt đầu một QRS nội tại là bình thường. Hãy kiểm tra mối quan hệ tần số trước.
- **Chẩn đoán trục trặc từ một đoạn ECG mà mọi nhịp đều được tạo nhịp.** Không thể đánh giá cảm nhận khi mọi chu kỳ đều được tạo nhịp; không có hoạt động nội tại cạnh tranh không phải là bằng chứng của thất bại cảm nhận.
- **Bỏ sót thất bại bắt nhịp vì các xung trông đều đặn.** Trong Hình 21.11, các xung chạy đều đặn ở 68 lần/phút, không bị gián đoạn bởi các nhịp nội tại, không có QRS sau hầu hết các xung và chỉ có một lần bắt nhịp duy nhất — thất bại bắt nhịp và thất bại cảm nhận đồng thời. Xung đều đặn ≠ máy tạo nhịp đang hoạt động.
- **Cho rằng chức năng nhĩ và thất hỏng cùng nhau.** Bắt nhịp nhĩ có thể hỏng trong khi tạo nhịp thất vẫn nguyên vẹn (Hình 21.12): hãy kiểm tra từng buồng riêng biệt — cảm nhận nhĩ (ức chế tạo nhịp nhĩ bởi các nhịp xoang), bắt nhịp nhĩ, cảm nhận thất (ức chế sau một VPB), bắt nhịp thất.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-12.jpg" alt="Hình 21.12 — Thất bại bắt nhịp nhĩ, tạo nhịp thất còn nguyên" loading="lazy">
  <figcaption><b>Hình 21.12.</b> Sáu mũi tên đầu: tạo nhịp ở tần số tối thiểu mà không bắt được nhĩ; dấu sao và mũi tên cuối: máy tạo nhịp bắt được nhĩ.</figcaption>
</figure>

- **Coi cảm nhận quá mức là một khoảng nghỉ lành tính.** Cảm nhận quá mức ở thất (nhiễu điện từ, gãy dây dẫn) ức chế tạo nhịp; ở một bệnh nhân phụ thuộc máy với block tim hoàn toàn, điều này tạo ra một khoảng nghỉ thất dài và có thể gây ngất hoặc ngừng tim do nhịp chậm.
- **Quên dẫn truyền ngược — hoặc dây dẫn bị đảo.** Tạo nhịp VVI với dẫn truyền thất-nhĩ 1:1 có thể gây hội chứng máy tạo nhịp; trong máy hai buồng, sóng P ngược có thể bị theo dõi thành nhịp nhanh do máy tạo nhịp ở tần số theo dõi trên. Đảo ngược dây dẫn nhĩ và thất khi cấy ghép tạo ra các cặp xung trong đó xung đầu tiên (đầu ra kênh nhĩ) bắt được thất, trong khi xung thứ hai rơi vào QRS hoặc đoạn ST; các nhịp nội tại ức chế cả hai kênh, chứng tỏ cảm nhận còn nguyên vẹn — manh mối nằm ở thứ tự bắt nhịp, không phải ở khiếm khuyết cảm nhận (Hình 21.16).

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-16.jpg" alt="Hình 21.16 — Dây dẫn nhĩ và thất bị đảo khi cấy ghép" loading="lazy">
  <figcaption><b>Hình 21.16.</b> Mũi tên: thất được bắt hiệu quả bởi xung đầu tiên trong mỗi cặp xung tạo nhịp; dấu sao: các nhịp nội tại — dây dẫn nhĩ và thất bị đảo khi cấy ghép.</figcaption>
</figure>

- **Dùng ICD dưới da khi có nguy cơ nhịp chậm, hoặc dùng ATP cho nhịp nhanh thất ngoài ICD.** ICD dưới da chỉ cung cấp tạo nhịp tạm thời sau sốc với năng lượng cao, gây đau. ATP có thể làm nhịp nhanh thất đơn hình ổn định tăng tốc thành nhịp nhanh thất đa hình (250 lần/phút trong ví dụ của chương) hoặc rung thất; ATP cho nhịp nhanh thất thuộc về ICD, nơi có thể phát sốc năng lượng cao sau đó.

## Bảng tham chiếu

### Mã NBG (mã NASPE/BPEG Generic sửa đổi, 2002)

| Vị trí | Ý nghĩa | Các chữ cái |
|---|---|---|
| I | Buồng được tạo nhịp | O = không, A = nhĩ, V = thất, D = kép (A + V) |
| II | Buồng được cảm nhận | O = không, A = nhĩ, V = thất, D = kép (A + V) |
| III | Đáp ứng với cảm nhận | O = không, T = kích hoạt, I = ức chế, D = kép (T + I) |
| IV | Điều biến tần số | O = không, R = điều biến tần số |
| V | Tạo nhịp đa vị trí | O = không, A = nhĩ, V = thất, D = kép (A + V) |

### Các chế độ thường gặp

| Chế độ | Tạo nhịp / cảm nhận / đáp ứng | Ghi chú |
|---|---|---|
| VVI | V / V / ức chế | Một buồng; một tần số lập trình được ("tần số tối thiểu") |
| AAI | A / A / ức chế | Một buồng; một tần số lập trình được |
| DDD | A+V / A+V / kích hoạt + ức chế | Hai buồng; theo dõi sóng P, tạo nhịp thất theo khoảng AV đã lập trình |
| VVIR / AAIR / DDDR | Như trên | Các phiên bản điều biến tần số (tần số tối thiểu theo cảm biến) |
| VDD | V / A+V / kép | Có thể dùng trên máy không dây (cùng với VVI) |

### Tần số tạo nhịp khi đặt nam châm (cố định) theo nhà sản xuất và tình trạng pin (lần/phút; Bảng 21.2)

| Tình trạng pin | Medtronic | Boston Scientific | Abbott Medical | Biotronik | Sorin |
|---|---|---|---|---|---|
| Đầu đời | 85 | 100 | 98,6 | 90 | 96 |
| Sắp đến chỉ báo thay thế theo chương trình | N/A | 90 | N/A | N/A | N/A |
| Chỉ báo thay thế theo chương trình | 65 | 85 | 86,3 | 80 | 80 |

Dưới chỉ báo thay thế theo chương trình (cuối đời), tần số khi đặt nam châm trở nên không thể dự đoán. N/A = không áp dụng.

### Các mẫu trục trặc (hình trong chương)

| Mẫu | Manh mối trên ECG | Nguyên nhân thường gặp theo chương |
|---|---|---|
| Thất bại bắt nhịp | Xung tạo nhịp không có sóng P/QRS theo sau | Vấn đề về công suất tạo nhịp / dây dẫn / ngưỡng |
| Thất bại cảm nhận (cảm nhận kém) | Các nhịp nội tại không ức chế tạo nhịp; các xung chạy xuyên qua nhịp nội tại (ví dụ 68 lần/phút với chỉ một lần bắt nhịp) | Thất bại cảm nhận |

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-13.jpg" alt="Hình 21.13 — Rối loạn cảm nhận: cảm nhận nhĩ kém và cảm nhận quá mức ở thất" loading="lazy">
  <figcaption><b>Hình 21.13.</b> A: mũi tên — một sóng P không được cảm nhận. B: mũi tên — vị trí dự kiến của các xung tạo nhịp nhĩ và thất; dấu sao — sóng P không dẫn truyền do block AV tiềm ẩn. C: mũi tên — vị trí dự kiến của xung tạo nhịp thất tiếp theo; dấu sao — xung tạo nhịp xuất hiện trở lại.</figcaption>
</figure>

| Cảm nhận nhĩ kém (DDD) | Một sóng P không kích hoạt tạo nhịp thất theo khoảng AV đã lập trình | Thất bại cảm nhận nhĩ |
| Cảm nhận quá mức ở thất | Tạo nhịp bị ức chế ở cả hai kênh bởi một tín hiệu không nhìn thấy trên ECG bề mặt; khoảng nghỉ dài trong block tim hoàn toàn (VVI) | Nhiễu điện từ; gãy dây dẫn |
| Thất bại cảm nhận giả | Xung rơi vào 0,04 s sau khi bắt đầu một QRS nội tại khi nhịp nội tại ≈ tần số tối thiểu đã lập trình | Bình thường — cần > 0,04 s để hoạt động đến được điện cực mỏm RV |
| Mất bắt nhịp thất trái (CRT) | Mất từng lúc biên độ sóng R / mất mẫu RBBB | Tăng năng lượng tạo nhịp thất trái hoặc đổi điện cực thất trái |

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-21.jpg" alt="Hình 21.21 — CRT khi theo dõi: mất bắt nhịp thất trái từng lúc" loading="lazy">
  <figcaption><b>Hình 21.21.</b> Tạo nhịp hai thất khi theo dõi. Mũi tên minh họa mất bắt nhịp thất trái từng lúc, thể hiện bằng mất mẫu block nhánh phải.</figcaption>
</figure>

| Dây dẫn nhĩ/thất bị đảo | Xung đầu tiên của mỗi cặp xung bắt được thất; xung thứ hai rơi vào QRS/ST; các nhịp nội tại ức chế cả hai kênh | Đảo ngược dây dẫn khi cấy ghép |

## Ví dụ minh họa

**Ca 1 — Máy tạo nhịp nhu cầu này có đang hoạt động không? (Hình 21.4).** Một máy tạo nhịp thất nhu cầu có chu kỳ dài 840 ms (0,84 s). Đoạn chuyển đạo V1 cho thấy các nhịp nội tại được cảm nhận đúng — máy giữ không phát xung và không có xung nào đi trước các phức bộ QRS đó. Nhịp nội tại thất đầu tiên theo sau một khoảng PR kéo dài 0,32 s. Vì không có điện cực nhĩ, không thể tạo nhịp AV tuần tự: kích hoạt nhĩ ngược xuất hiện (hai sóng P đầu tiên và hai sóng P cuối cùng) xen lẫn với các sóng P xoang, với các khoảng PR không nhất quán. Kết luận: cảm nhận còn nguyên vẹn; không thể đánh giá bắt nhịp chỉ từ các nhịp nội tại; và mất đồng bộ AV là cơ chất của hội chứng máy tạo nhịp — lý do thường cấy thêm điện cực nhĩ khi cần tạo nhịp thất, trừ khi có rung nhĩ vĩnh viễn.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-04.jpg" alt="Hình 21.4 — Máy tạo nhịp thất nhu cầu hoạt động bình thường" loading="lazy">
  <figcaption><b>Hình 21.4.</b> Máy tạo nhịp thất nhu cầu. Mũi tên: các sóng P xoang nội tại; dấu sao: các QRS do kích hoạt thất nội tại ức chế máy tạo xung nhu cầu.</figcaption>
</figure>

**Ca 2 — Thử nghiệm nam châm (Hình 21.5).** Một bệnh nhân nhịp chậm xoang với máy tạo nhịp một buồng (thất) được đặt nam châm: tần số nhảy lên tạo nhịp tần số cố định ở 100 lần/phút. Theo Bảng 21.2, 100 lần/phút ở đầu đời xác định đó là máy Boston Scientific (Medtronic 85, Abbott 98,6, Biotronik 90, Sorin 96). Các sóng P theo sau các QRS được tạo nhịp, cho thấy dẫn truyền thất-nhĩ 1:1. Nếu cùng tần số đó là 85 lần/phút, máy sẽ đang ở chỉ báo thay thế theo chương trình của Boston Scientific — đọc tình trạng pin thẳng từ ECG.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-05.jpg" alt="Hình 21.5 — Thử nghiệm nam châm: tần số 100 lần/phút" loading="lazy">
  <figcaption><b>Hình 21.5.</b> Mũi tên: lúc đặt nam châm; dấu sao: tần số tạo nhịp nhanh do nam châm gây ra (100 lần/phút — Boston Scientific ở đầu đời).</figcaption>
</figure>

**Ca 3 — Thất bại kết hợp (Hình 21.11).** Các xung tạo nhịp tiếp tục đều đặn ở 68 lần/phút mà không bị gián đoạn bởi các nhịp nội tại của bệnh nhân, và không có QRS sau hầu hết các xung — chỉ có một lần bắt nhịp duy nhất. Kết luận: thất bại cảm nhận (không bị ức chế bởi các nhịp thất nội tại) *và* thất bại bắt nhịp (xung không có QRS theo sau). Cả hai chức năng đều đã hỏng; một bất thường đơn lẻ không giải thích được đoạn ECG này.

<figure class="ch-fig">
  <img src="figures/ch21/fig-21-11.jpg" alt="Hình 21.11 — Thất bại cảm nhận và bắt nhịp đồng thời" loading="lazy">
  <figcaption><b>Hình 21.11.</b> Mũi tên: các xung tạo nhịp; dấu sao: lần bắt nhịp thất duy nhất của máy tạo nhịp — thất bại cảm nhận và bắt nhịp đồng thời.</figcaption>
</figure>

<figure class="ch-fig">
  <img src="figures/ch21/fig-summary.jpg" alt="Hình tóm tắt — Các vị trí tạo nhịp thất" loading="lazy">
  <figcaption><b>Hình tóm tắt.</b> Hình minh họa tóm tắt: vị trí giải phẫu của các vị trí tạo nhịp thất thường gặp — mỏm thất phải (RVA), đường ra thất phải (RVOT), bó His (HBP), thượng mạc thất trái qua xoang vành và vách thất phải.</figcaption>
</figure>

## Điểm cần nhớ

1. Đọc mọi ECG có tạo nhịp bằng ba câu hỏi: máy có tạo nhịp không, có bắt được nhịp không (sóng P hoặc QRS sau xung tạo nhịp), có cảm nhận đúng không (ức chế hoặc kích hoạt đúng)?
2. Mã NBG: I = tạo nhịp, II = cảm nhận, III = đáp ứng (I ức chế, T kích hoạt, D kép), IV = R điều biến tần số, V = tạo nhịp đa vị trí. VVI/AAI là một buồng; DDD là hai buồng, theo dõi nhĩ theo khoảng AV đã lập trình tới tần số theo dõi tối đa.
3. Nam châm chuyển máy tạo nhịp sang tạo nhịp tần số cố định với cảm nhận bị vô hiệu hóa; tần số khi đặt nam châm giúp nhận diện nhà sản xuất và tình trạng pin (ví dụ Boston Scientific 100 ở đầu đời, 85 ở chỉ báo thay thế theo chương trình).
4. Một xung rơi vào 0,04 giây sau khi bắt đầu một QRS nội tại khi nhịp nội tại gần bằng tần số tối thiểu đã lập trình là chức năng bình thường, không phải thất bại cảm nhận — hoạt động cần > 0,04 giây để đến được điện cực mỏm RV.
5. Vị trí tạo nhịp nhìn thấy được trên ECG: mỏm RV = LBBB ở V1 + lệch trục trái cực độ; đường ra RV = trục hướng xuống dưới; thất trái/xoang vành = RBBB ở V1; CRT hai thất = sóng R ở V1 với độ lệch âm ban đầu ở chuyển đạo I.
6. Tạo nhịp RV thường xuyên gây hại: tạo nhịp RV > 40%–50% làm tăng tử vong và nhập viện do suy tim (MOST); gánh nặng RV > 20% liên quan đến suy tim do tạo nhịp (kèm giới tính nam và QRS tự nhiên > 115 ms). 86% máy tạo nhịp được lập trình DDD; thử nghiệm DAVID cho thấy tạo nhịp DDD với dây dẫn RV rút ngắn thời gian sống không phải nhập viện do suy tim ở bệnh nhân có suy tim trước đó.
7. CRT có lợi cho bệnh nhân có LBBB và QRS > 140 ms (nam) hoặc > 130 ms (nữ); mất đồng bộ thất trái có ở 40% khi QRS 120 ms và 70% khi QRS 150 ms; hơn 1 trong 3 bệnh nhân suy tim có LBBB; tới 30% không có lợi. ECG theo dõi kiểm tra bắt nhịp ở cả hai thất.
8. Bắt nhịp bó His chọn lọc: xung, khoảng đẳng điện ≥ 30 ms, rồi QRS giống hệt dẫn truyền tự nhiên; nó sửa chữa LBBB/RBBB ở 70%–90% bệnh nhân. Không chọn lọc: QRS dốc lài ngay lập tức, giống hệt nhịp nội tại ~40–60 ms sau xung.
9. Cảm nhận quá mức (nhiễu điện từ, gãy dây dẫn) có thể ức chế tạo nhịp và gây ngất hoặc ngừng tim do nhịp chậm ở bệnh nhân phụ thuộc máy; cảm nhận kém để các xung chạy xuyên qua các nhịp nội tại; thất bại bắt nhịp để lại các xung không có phức bộ theo sau.
10. ATP cho nhịp nhanh thất thuộc về ICD, vì ATP có thể làm nhịp nhanh thất đơn hình ổn định tăng tốc thành nhịp nhanh thất đa hình (250 lần/phút trong ví dụ của chương) hoặc rung thất, rồi ICD chấm dứt bằng sốc năng lượng cao. ICD dưới da không dùng cho bệnh nhân có nguy cơ loạn nhịp chậm.

## Liên hệ với

- **Phần I (skill này): khái niệm cơ bản, ECG bình thường, ghi 12 chuyển đạo.** Các mẫu block nhánh dùng để nhận diện vị trí tạo nhịp (LBBB ở V1 khi tạo nhịp mỏm RV, RBBB ở V1 khi tạo nhịp thất trái) và khoảng PR bình thường cùng trục đến từ Phần I; diễn giải QRS được tạo nhịp là áp dụng hình thái block nhánh.
- **Chương 19 (đường phụ / tiền kích thích).** Bắt nhịp bó His không chọn lọc giống dẫn truyền tiền kích thích từ một đường phụ trước-vách — hãy so sánh hai thứ trước khi gọi là sóng delta.
- **Hình minh họa tóm tắt Chương 21.** Vị trí giải phẫu của các vị trí tạo nhịp thất thường gặp (mỏm RV, đường ra RV, bó His, thất trái).
- **Phần trước trong chương này (thiết bị).** Máy tạo nhịp không dây (VDD/VVI), hệ thống hai thất, ICD và cảm biến đáp ứng tần số là phần cứng đứng sau các chế độ và mẫu trục trặc ở trên.
`;export{e as default};