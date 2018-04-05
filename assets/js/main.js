"use strict";

// Preloader

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

$(document).ready(function() {
  setTimeout(function() {
    $(".background").fadeIn(1000);
  }, 1000);

  // Preload images

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function() {
      $('<img/>')[0].src = this;
    });
  }

  preload([
    "./images/mobile-banner.png",
    "./images/smartpill-banner.png",
    "./images/inforest-banner.png",
    "./images/edge-banner.png",
    "./images/civicrm-banner.png",
    "./images/about-banner.png"
  ]);


  // Handler for about

  $('#handleAbout').click(function() {
    $('#about-info').collapse('show');
  });


  // Card animation

  $('.card-header').mouseover(function() {
    $(this).children().addClass('word-underlined');
  });

  $('.card-header').mouseout(function() {
    $(this).children().removeClass('word-underlined');
  });

  $('.collapse').on('hide.bs.collapse', function() {
    var styles = {
      backgroundImage: 'url("./images/blank-banner.png")'
    }
    $(".background").css(styles);
    $("#" + $(this).attr('aria-labelledby') + " > h2").removeClass('word-underlined');

  });

  $('.collapse').on('shown.bs.collapse', function() {
    var styles = {
      backgroundImage: 'url(' + $(this).attr('data-image') + ')'
    }
    $(".background").css(styles);
    $("#" + $(this).attr('aria-labelledby') + " > h2").addClass('word-underlined');
  });
});
