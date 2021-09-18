$(document).ready(function () {
   
    $('.menu__more-button').on('click',function () {
        $(this).toggleClass('active');
        $(this.nextElementSibling).toggleClass('active');

    });

    $('#menu__button__burger').on('click', function () {
        $(this).toggleClass('show');
    });


    $('.dropdown__itemsBlock>li').on('click',function(){
        $(this).closest('.inputWrapper').children('.input__dropdown').val($(this).children('.dropdown__itemWithImage_text').text());
    });

    var openedDropdown = false;
    $('.input__dropdown').on('click', function () {
        if (openedDropdown === false) {
            var parent = $(this).parent();
            $(parent).children('.dropdown__itemsBlock').removeClass('hide');
            $(parent).children('.arrow_down_SVG').addClass('arrow_down_SVG_inverted');
            openedDropdown = true;
        }
        else {
            var input__dropdown = $('.input__dropdown').parent();
            $(input__dropdown).children('.dropdown__itemsBlock').addClass('hide');
            $(input__dropdown).children('.arrow_down_SVG').removeClass('arrow_down_SVG_inverted');
            openedDropdown = false;
        }
    });

    $(document).on('mouseup', function (e){
        var input__dropdown = $('.input__dropdown').parent();

        if (!input__dropdown.is(e.target)  && input__dropdown.has(e.target).length === 0) {
            $(input__dropdown).children('.dropdown__itemsBlock').addClass('hide');
            $(input__dropdown).children('.arrow_down_SVG').removeClass('arrow_down_SVG_inverted');
            openedDropdown = false;
        }
    });

/*    $('.input__dropdown').blur(function(){
        $('.input__dropdown').parent().children('.dropdown__itemsBlock').each(function (i, elem) {
            $(elem).addClass('hide');
        })
        $('.arrow_down_SVG').removeClass('arrow_down_SVG_inverted');
    });*/

    $('.inputMessageBlock-smiles').on('click',function () {
        $(this).toggleClass('inputMessageBlock-smiles-active');
        $('.menu__smileMenu').toggleClass('hide');
        return false;
    });

    $('.inputMessageBlock-smiles').on('mousedown', function() {
        return false;
    });

    $('.favouriteIcon').on('click',function(){
        $(this).toggleClass('active');
    });
});