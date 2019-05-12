$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        item: 1,
        autoplayTimeout: 5000,
        autoplay: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 2
            },
            1366: {
                items: 4
            },
        }
    })

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

});
