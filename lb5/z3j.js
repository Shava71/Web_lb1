const images = document.getElementsByName("myImage");

//смена местами изображений при наведении
function swapImages(index) {
    if (index > 0) {
        const tempSrc = images[index].src;
        images[index].src = images[index - 1].src;
        images[index - 1].src = tempSrc;
    }
}

//уменьшение размера изображения на 30% при клике
function resizeImage(image) {
    image.width *= 0.7;
    image.height *= 0.7;
}