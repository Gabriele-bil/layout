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
    var spanCircle = $("<span class='circle-decoration'></span>")
    $("nav ul li a").hover(
        function () {
            $(this).append(spanCircle);
        },
        function () {
            $("span").remove(".circle-decoration")
        }
    );

    /* Magnific Popup */
    $(".gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

})