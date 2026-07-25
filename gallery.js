// Hàm này kích hoạt khi di chuột (onmouseover) hoặc dùng phím tab (onfocus)
function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    
    // Đổi hình nền của thẻ div thành ảnh nhỏ
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Lấy thuộc tính alt của ảnh nhỏ và đặt vào trong span văn bản
    imageDiv.innerHTML = "<span class='image-text'>" + previewPic.alt + "</span>";
}

// Hàm này kích hoạt khi chuột rời đi (onmouseleave) hoặc bỏ chọn phím tab (onblur)
function unDo() {
    let imageDiv = document.getElementById("image");
    
    // Hardcode (Gắn cứng) lại hình nền trống
    imageDiv.style.backgroundImage = "url('')";
    
    // Hardcode (Gắn cứng) lại đoạn text ban đầu
    imageDiv.innerHTML = "<span class='image-text'>Di chuột qua hoặc dùng phím Tab để xem ảnh to.</span>";
}

// Thêm thuộc tính tabindex động
function addTabIndex() {
    console.log("Sự kiện onload đã kích hoạt. Đang thiết lập tabindex cho các hình ảnh...");
    let images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}
window.onload = addTabIndex;