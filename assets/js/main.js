"use strict";

var ssPreloader = function() {

  $(window).on('load', function() {

    // force page scroll position to top at page refresh
    $('html, body').animate({
      scrollTop: 0
    }, 'normal');

    // will first fade out the loading animation
    $("#preloader").fadeOut("slow", function() {

      // will fade out the whole DIV that covers the website.
      $("#preloader-container").delay(300).fadeOut("slow");

    });
  });
};

(function ssInit() {
  ssPreloader();
})();
