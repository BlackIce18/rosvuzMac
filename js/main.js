$(document).ready(function () {
   
    $('.menu__more-button').click(function () {
        $(this).toggleClass('active');
        $(this.nextElementSibling).toggleClass('active');

    });

    $('#menu__button__burger').click(function () {
        $(this).toggleClass('show');
    });

    $('.input__dropdown').click(function () {
        var parent = $(this).parent();
        $(parent).children('.dropdown__itemsBlock').toggleClass('hide');
        $(parent).children('.arrow_down_SVG').toggleClass('arrow_down_SVG_inverted');
    });

    $('.dropdown__itemsBlock>li').click(function(){
        $(this).closest('.inputWrapper').children('.input__dropdown').val($(this).children('.dropdown__itemWithImage_text').text());
    })

/*    $('.input__dropdown').blur(function(){
        $('.input__dropdown').parent().children('.dropdown__itemsBlock').each(function (i, elem) {
            $(elem).addClass('hide');
        })
        $('.arrow_down_SVG').removeClass('arrow_down_SVG_inverted');
    });*/

    $('.inputMessageBlock-smiles').click(function () {
        $(this).toggleClass('inputMessageBlock-smiles-active');
        $('.menu__smileMenu').toggleClass('hide');
        return false;
    });

    $('.inputMessageBlock-smiles').on('mousedown', function() {
        return false;
    });

    $('.favouriteIcon').click(function(){
        $(this).toggleClass('active');
    });
});