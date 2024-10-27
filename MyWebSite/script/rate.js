$(document).ready(function () {
    let selectedRating = 0;

    $('.rate-btn').click(function () {
        selectedRating = 0;
        $('#selectedRating').text('');
        $('#rateModal').modal('show');
    });

    $('#starRating .star').click(function () {
        selectedRating = $(this).data('rating');
        $('#selectedRating').text(`Вы выбрали рейтинг: ${selectedRating} из 5`);
        $('#starRating .star').each(function () {
            $(this).css('color', $(this).data('rating') <= selectedRating ? 'gold' : 'gray');
        });
    });

    $('#saveRating').click(function () {
        if (selectedRating > 0) {
            $('#rateModal').modal('hide');
            alert(`Спасибо за вашу оценку: ${selectedRating} из 5`);
            
        } else {
            alert('Пожалуйста, выберите рейтинг перед сохранением.');
        }
    });
});
