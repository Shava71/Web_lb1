 // Функция для изменения стиля текста при наведении или щелчке
 function changeTextStyle() {
    const text = document.querySelector('.text');
    text.style.fontSize = "6pt";
    text.style.color = "white";
    text.style.backgroundColor = "black";
}

// Обработчик события для изменения изображения и подписи при нажатии клавиши
document.addEventListener("keydown", function () {
    const image = document.getElementById("myImage");
    const caption = document.getElementById("caption");

    // Меняем изображение и цвет подписи
    image.src = "/lb5/2.png"; // Замените на URL второго изображения
    caption.style.color = "red";
});