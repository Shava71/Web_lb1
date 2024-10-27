$(document).ready(function () {
    let num1, num2, correctAnswer;

    // Функция для генерации арифметического примера
    function generateCaptcha() {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 + num2;
        $('#captchaLabel').text(`Сколько будет ${num1} + ${num2}?`);
    }

    generateCaptcha();

    $('#commentForm').on('submit', function (e) {
        e.preventDefault();
        const comment = $('#comment').val();
        const captchaInput = $('#captcha').val();

        //Проверка на наличие ссылок
        if (comment.includes('http://') || comment.includes('https://')) {
            $('#message').text('Ссылки в комментариях запрещены.').css('color', 'red');
            return;
        }

        //Проверка капчи
        if (parseInt(captchaInput) !== correctAnswer) {
            $('#message').text('Неправильный ответ на проверочный вопрос.').css('color', 'red');
            generateCaptcha(); 
            return;
        }
        
        $('#message').text('Комментарий успешно отправлен.').css('color', 'green');
        $('#comment').val('');
        $('#captcha').val('');
        generateCaptcha(); 
    });
});