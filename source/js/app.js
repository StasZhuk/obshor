$(document).ready(function () {
    console.log('fdgdf');
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

    // Magnific POPAP Sertificats
    $('.sertificats__gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Magnific POPAP FORM Specials
    $('.btn-popup-order').magnificPopup({
        type: 'inline',
        closeBtnInside: true,
        showCloseBtn: true,
        // Delay in milliseconds before popup is removed
        removalDelay: 150,
  
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
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
            prevArrow: '.slider-arrow__prev',
            nextArrow: '.slider-arrow__next',
            dots: true,
            appendDots: '.slider__pagination',
            customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data('thumb');
                return '<span class="slider__item-name"><span class="slider__name-wrap">'+ thumb + '</span></span>';
            },
            responsive: [{
                  breakpoint: 960,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
            }]
        });
        
    })(); 

});