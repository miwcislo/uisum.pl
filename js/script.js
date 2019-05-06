$(document).ready(function () {
//    $('.owl-carousel').owlCarousel({
//        loop: true,
//        item: 1,
//        nav: true,
//        autoplayTimeout: 5000,
//        autoplay: true,
//        animateOut: 'fadeOut',
//        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
//        responsive: {
//            0: {
//                items: 1
//            },
//        }
//    })

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

    $(".header-btn").click(function () {
        
    });
});
