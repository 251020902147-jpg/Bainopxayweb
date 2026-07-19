
function upDate(previewPic) {

    console.log("Sự kiện onmouseover đã kích hoạt!");
    console.log("Thuộc tính alt: " + previewPic.alt);
    console.log("Thuộc tính source: " + previewPic.src);

   
    document.getElementById('image').innerHTML = previewPic.alt;

    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}


function unDo() {
 
    document.getElementById('image').style.backgroundImage = "url('')";

  
    document.getElementById('image').innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}