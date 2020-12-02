$(document).ready(function () {

    /* Call-Widget */
    var autoHeight = $('.box-text').height();
    $(".call-box").hover(
        function () {
            $(this).children("a").children(".box-text").stop().animate({
                "height": "100%"
            }, "medium");
            $(this).find("p.hover-text").show();
        },
        function () {
            $(this).children("a").children(".box-text").stop().animate({
                "height": autoHeight
            }, "medium");
            $(this).find("p.hover-text").hide();
        }
    );

    /* Hover link Nav */
    if ($(window).width()>768) {
        var spanCircle = $("<span class='circle-decoration'></span>")
        $("nav ul li a").hover(
            function () {
                $(this).append(spanCircle);
            },
            function () {
                $("span").remove(".circle-decoration")
            }
        );
    }

    /* Hamburgher Menù Responsive */
    var isOpenMenu = false;
    $("button.hamburgher-menu img").click(function () {
        $("div.nav-responsive").slideToggle();
        $('div.carousel').finish();
        if (!isOpenMenu) {
            $('div.carousel').animate({marginTop: '225px', transition: '0.2 ease-in-out'});
            $('div.hero').animate({marginTop: '225px', transition: '0.2 ease-in-out'});
        }else {
            $('div.carousel').animate({marginTop: '0', transition: '0.2 ease-in-out'});
            $('div.hero').animate({marginTop: '0', transition: '0.2 ease-in-out'});
        }
        isOpenMenu = !isOpenMenu;
    });

    /* Carousel Gallery Thumb Image Border */
    $('ul.carousel__thumbnails li').click(function() {
        $('ul.carousel__thumbnails li').removeClass('img-thumb-clicked');
        $(this).addClass('img-thumb-clicked');
    })
})