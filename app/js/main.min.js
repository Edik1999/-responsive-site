jQuery(document).ready(function(){

    var header = $('.header');
    var nav = $('.nav--header');

    window.onscroll = function(){
        if(window.pageYOffset > header.height()) {
            nav.addClass('nav--move');
        } else {
            nav.removeClass('nav--move');
        }
    }

    $('#mc-form').ajaxChimp({
        url: 'https://gmail.us20.list-manage.com/subscribe/post?u=635d509e02b60a0f3a3a7605e&amp;id=8621170612'
    });

    $(document).on('click', '.burger', function(){
        $(this).toggleClass('is-active');
        $('.header__nav-wrap').toggleClass('is-active');
    });
});