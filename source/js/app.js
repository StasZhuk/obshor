$(document).ready(function() {

    (function($) {
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
        gallery:{enabled:true}
        // other options
      });
})
