$(document).ready(function () {
    var child__height=$(".scroll__child").height()
    $('.scroll').css({
        minHeight: child__height
      });
    ChangeRightBlockSize();
    $(window).on('scroll',function (event) {
        ChangeRightBlockSize();
    });})

function ChangeRightBlockSize() {
    var window_height=$(window).height();
    var window_scroll=$(window).scrollTop();
    var block__height=$(".scroll").height()+$(".scroll").position().top;
    var scroll_toEnd=block__height-window_height-window_scroll;
    if(scroll_toEnd<0){
        $(".scroll__child").toggleClass("can__scroll",false);
    }
    else{
        $(".scroll__child").toggleClass("can__scroll",true);
    }
}