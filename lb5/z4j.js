
 function changeTextStyle() {
    const text = document.querySelector('.text');
    text.style.fontSize = "6pt";
    text.style.color = "white";
    text.style.backgroundColor = "black";
}

document.addEventListener("keydown", function () {
    const image = document.getElementById("myImage");
    const caption = document.getElementById("caption");

    image.src = "/lb5/2.png"; 
    caption.style.color = "red";
});