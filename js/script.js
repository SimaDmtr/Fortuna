$(document).ready(function () {

    $("#leftTabs").tabs();
    $( ".tab" ).tabs();

    var num = 0, len = $('.articlesNav').length-1;
    $( ".next, .prev" ).on("click",function() {
        num += $(this).is(".next") ? 1 : -1;
        num === len && (num = 0);
        num === -1 && (num = len -1)
        $( ".tab" ).tabs( "option", "active", num );
    });
    (function($) {
        $(function() {

            $('.articlesNav  li').click(function() {
                $('html, body').animate({scrollTop: 0},500);
                return false;
            })

        })
    })(jQuery)
    
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 1,
            dots: false,
            nav: true,
        });
    });
    $('.menuTrigger').click(function () {
        $('.navMenuWrapper').slideToggle(500);
    })
});

