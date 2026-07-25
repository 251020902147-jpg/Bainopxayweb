/* Hàm này kích hoạt khi di chuột (onmouseover) hoặc dùng phím tab (onfocus) */
function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    
    // Đổi hình nền của thẻ div thành ảnh nhỏ
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Đổi đoạn text của thẻ div thành thuộc tính alt của ảnh nhỏ
    imageDiv.innerHTML = previewPic.alt;
}

/* Hàm này kích hoạt khi chuột rời đi (onmouseleave) hoặc bỏ chọn phím tab (onblur) */
function unDo() {
    let imageDiv = document.getElementById("image");
    
    // Hardcode (Gắn cứng) lại hình nền trống
    imageDiv.style.backgroundImage = "url('')";
    
    // Hardcode (Gắn cứng) lại đoạn text ban đầu
    imageDiv.innerHTML = "Di chuột qua hoặc dùng phím Tab chọn một hình ảnh bên dưới để hiển thị tại đây.";
}

/* Hàm này thêm thuộc tính tabindex động vào tất cả các ảnh nhỏ */
function addTabIndex() {
    // Thêm thông báo console.log để xác nhận sự kiện onload đã kích hoạt
    console.log("Sự kiện onload đã kích hoạt. Đang thiết lập tabindex cho các hình ảnh...");
    
    let images = document.querySelectorAll('.preview');
    
    // Sử dụng vòng lặp for để lặp qua từng hình ảnh theo yêu cầu
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

// Lắng nghe sự kiện onload của trang web để gọi hàm addTabIndex
window.onload = addTabIndex;