$(document).ready(function () {
    $('.messenger__list-item').on('hover',function () {
        $(this).children('.additionalThreePoints').removeClass('hide');
    }, function () {
        $(this).children('.additionalThreePoints').addClass('hide');
    });
});