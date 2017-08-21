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
        // other options
    });


    //   nav trigger
    // $('.nav__trigger').on('click', function() {
    //     $('.nav-main').trigger('click');
    // });
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
});