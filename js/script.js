$(document).ready(function () {

    $("#leftTabs").tabs();
    $(".tab").tabs();

    var num = 0, len = $('.articlesNav').length - 1;
    $(".next, .prev").on("click", function () {
        num += $(this).is(".next") ? 1 : -1;
        num === len && (num = 0);
        num === -1 && (num = len - 1)
        $(".tab").tabs("option", "active", num);
    });


    $(".tabsLeft li,.articlesNav  li").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");

    });
    $(document).ready(function () {
        $(".cardLeft").owlCarousel({
            items: 1,
            dots: false,

        });
    });
    $(document).ready(function () {
        $(".cardBack").owlCarousel({
            items: 1,
            dots: false,
            mouseDrag: false,
            touchDrag:false
        });
    });

    if($(window).width() < 767) {
        $(document).ready(function () {
            $(".mobile").owlCarousel({
                items: 1,
                dots: false,
                startPosition:1,
                loop: true
            });
        });
    }else{
        $(document).ready(function () {
            $(".mobile").owlCarousel({
                items: 1,
                dots: false,
                mouseDrag: false,
                touchDrag:false
            });
        });
    }

    $('.trigger').click(function () {
        if($(this).hasClass('pressed')){
            $(this).removeClass('pressed')
        }else{
        $(this).addClass('pressed')}
        $('.navMenu').slideToggle(500);
    });

    $(".burger").click(function() {
        if($('.leftNavWrapper').hasClass("show")){
            $('.leftNavWrapper').removeClass("show")
        } else{
            $('.leftNavWrapper').addClass("show")
        }
    });
    $(".leftNavList li").click(function () {
        $('.leftNavWrapper').removeClass("show");
    })


});

