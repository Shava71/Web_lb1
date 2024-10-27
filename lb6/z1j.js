$(document).ready(function(){
    $("#leftButton").click(function(){
        $("#movableElement").animate({ left: "-=100px" }, 500); //Сдвиг влево на 100px за 0.5 секунды
    });

    $("#rightButton").click(function(){
        $("#movableElement").animate({ left: "+=100px" }, 500); //Сдвиг вправо на 100px за 0.5 секунды
    });
});