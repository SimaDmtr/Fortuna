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
        });
    });

    $('.menuTrigger').click(function () {
        $('.navMenuWrapper').slideToggle(500);
    })
});

