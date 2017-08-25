$(document).ready(function () {

    (function ($) {
        $(".nav-slimscroll").slimScroll({
            height: '100vh',
            railOpacity: 0.5,
            size: '4px',
            position: 'left',
            distance: '2px',
            color: '#000'
        })
    })($);

    $('.sertificats__gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    // Menu NAV adaptive
    $(".nav__trigger").click(function() {
        if ($(".nav__trigger").hasClass('active')) {
                $(".nav__trigger").removeClass('active');
                $(".nav__trigger").removeClass('no-animation');
                $(".nav-main").slideToggle("0.5", "linear");
        }
        else {
            $(".nav__trigger").addClass('active');
            $(".nav__trigger").removeClass('no-animation');
            $(".nav-main").slideToggle("0.5", "linear");
            
        }
    });
    $(window).resize(function() {
        if($(window).width() >= 992) {
            $(".nav-main").css('display', 'block'); 
        }
        else {
            $(".nav-main").css('display', 'none'); 
        }
        return false;
    });


//  SQUARE MOBILE CLICK

    (function() {
            $('.squares__link').on('click', function(e) {
                e.preventDefault();

                var $this = $(this),
                    item = $this.closest('.squares__item'),
                    list = $this.closest('.squares__list'),
                    items = list.find('.squares__item');

                if($(window).width() <= 480) {
                    if(!item.hasClass('active')) {
                        items.removeClass('active');
                        item.addClass('active');
                    }
                    else {
                        item.removeClass('active');
                    }
                }
            });
    })();

    // SLICK CAROUSEL OBSOR COMPANY PAGE
    (function() {

        $('.company-obshor__slider').slick({
            // dots: true,
            // customPaging : function() {
            //     return '<a class="index-slider__dots"></a>';
            // },
            prevArrow: '.slider-arrow__prev',
            nextArrow: '.slider-arrow__next'
        });
        
    })(); 

});