# VOCABMASTER (Website học từ vựng tiếng anh)

## 1. Mục tiêu bài toán:

- Mục tiêu của đề tài này là xây dựng một trang web học từ vựng tiếng Anh trực tuyến, nhằm giúp mọi người có thể học thêm được các từ vựng tiếng Anh phổ thông và nâng cao một cách hiệu quả, tiết kiệm thời gian và chi phí.

## 2. Sơ đồ chức năng hệ thống:

## 3. Thiết kế giao diện:

### 3.1 Màn hình trang chủ

![example](../web_vocab_master/imgReadme/HomePage.png)

### 3.2 Màn hình đăng nhập

![example](../web_vocab_master/imgReadme/login.png)

- Giao diện để người dùng điền thông tin đăng nhập, bao gồm email và mật khẩu
- Đăng nhập bằng Google

### 3.3 Màn hình đăng ký

![example](../web_vocab_master/imgReadme/signup.png)

### 3.4 Màn hình tổ chức khóa học

![example](../web_vocab_master/imgReadme/KhoaHoc.png)

- Giao diện người dùng chọn khóa học trên website. Người dùng chọn 1 trong các khóa học hiện trên thanh điều hướng bên trái màn hình. Chọn “Bắt đầu” để bắt đầu để chọn khóa học đó.

### 3.5 Màn hình tổ chức khóa học

![example](../web_vocab_master/imgReadme/BaiHoc.png)

- Giao diện người dùng chọn chủ đề trên website. Người dùng chọn 1 trong các chủ đề hiện trên màn hình. Chọn “Bắt đầu” để bắt đầu quá trình học. Nếu chủ đề có màu xanh có nghĩa là chủ đề đó đã hoàn thành và không được học lại.

### 3.6 Màn hình tổ chức từ vựng

#### 3.6.1 Màn hình hiển thị hình ảnh kèm câu ví dụ

![example](../web_vocab_master/imgReadme/TuVung1.png)

- Hệ thống sẽ hiển thị một hình ảnh để gợi nhớ người dùng những liên tưởng đến từ vựng cần điền. Bên cạnh đó, có nút hình cái loa, biểu tượng cho âm thanh, để người dùng bấm vào để nghe từ vựng đó (với tốc độ thường). Nút kế bên là “Đọc chậm”, để người dùng nghe từ vựng với một tốc độ chậm hơn.

#### 3.6.2 Màn hình hiển thị từ vựng, phiên âm, nghĩa từ vựng

![example](../web_vocab_master/imgReadme/TuVung2.png)

- Giao diện hệ thống hiển thị nghĩa từ vựng cho người dùng học. Bao gồm cách viết, cách đọc (phiên âm) và nghĩa của từ. Người dùng chọn “Tiếp tục” để qua phần tiếp theo, hoặc chọn “Mình đã thuộc từ này” để từ này không xuất hiện trong lần học này nữa.

#### 3.6.3 Màn hình hiển thị điền từ

![example](../web_vocab_master/imgReadme/TuVung3.png)

- Giao diện hệ thống yêu cầu người dùng học phải nghe và viết lại từ. Người dùng sẽ nghe và viết lại từ vào ô trống. Sau khi nghe và điền vào ô trống, người dùng nhấp vào “Kiểm tra”. Nếu đúng, hệ thống sẽ chuyển sang từ vựng tiếp theo. Nếu sai, hệ thống hiển thị đáp án trong một hình chữ nhật màu đỏ (như trên hình).

### 3.7 Màn hình tổ chức ôn tập

![example](../web_vocab_master/imgReadme/OnTap.png)

- Giao diện hệ thống hiển thị biểu đồ số lượng từ người dùng đã học. Khi người dùng chọn “Ôn tập” trên thanh điều hướng, hệ thống hiển thị một biểu đồ chỉ số lượng từ mà người dùng đã học và được chia theo cấp độ thuộc (ở ví dụ trên là 4). Các từ sẽ được sắp xếp theo “cấp độ thuộc”. Như trong hình, người dùng sẽ ôn tập 4 từ, trong đó, có một từ có cấp độ là 1, ba từ có cấp độ là 3. Người dùng chọn “Ôn tập ngay” để quá trình ôn tập được bắt đầu.

#### 3.7.1 Giao diện câu hỏi ôn tập của người dùng

![example](../web_vocab_master/imgReadme/CauHoiOnTap.png)

- Giao diện hệ thống sẽ hiển thị nghĩa của từ và người dùng sẽ điền từ vào ô trống. Nếu điền đúng, hệ thống sẽ chuyển tới từ vựng tiếp theo. Nếu sai, hệ thống sẽ thông báo người dùng nhập sai (như hình trên). Người dùng có thể chọn “Mình không nhớ từ này” để hệ thống bỏ qua và chuyển ngay sang từ vựng tiếp theo. Những từ vựng mà người dùng không nhớ sẽ được lặp lại trong những lần ôn tập tiếp theo.

### 3.8 Giao diện sổ tay của người dùng

![example](../web_vocab_master/imgReadme/SoTay.png)

- Nếu người dùng chọn mục “Sổ Tay” trên thanh trạng thái sẽ chuyến đến bộ từ vựng người dùng đã học thuộc và chia theo cấp độ thuộc để người dùng tra từ. Các từ được chia thành các “cấp độ”, từ “cấp độ 1” đến “cấp độ 8”. Người dùng chọn tra từ theo từng cấp độ trên hiện trên trang.

## 4. Video

Youtube: https://youtu.be/vsUOs2lA6X4
