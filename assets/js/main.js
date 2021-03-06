"use strict";

// Preloader

var ssPreloader = function() {

  $(window).on('load', function() {

    $('html, body').animate({
      scrollTop: 0
    }, 'normal');

    $("#preloader").fadeOut("slow", function() {

      $("#preloader-container").delay(300).fadeOut("slow");

    });
  });
};

(function ssInit() {
  ssPreloader();
})();

$(document).ready(function() {

  // Bg Fadeout
  setTimeout(function() {
    $(".background").fadeIn(1000);
  }, 1000);

  // Handler for about
  $('#handleAbout').click(function() {
    $('#about-info').collapse('show');
    $('html, body').animate({
      scrollTop: "500px"
    }, 1000);
  });

  // Handler for about
  $('#sideLinkToAbout').click(function() {
    $('#about-info').collapse('show');
    $('html, body').animate({
      scrollTop: "300px"
    }, 1000);
    $('#sidenav').css('width', '-=250px');
    $("#right-container, header, footer").css({
      "margin-left": "-=250px",
      "opacity": "1"
    });
  });

  // Sidebar menu
  $('#sidenav-trigger').click(function() {
    $('#sidenav').css('width', '+=250px');
    $("#right-container, header, footer").css({
      "margin-left": "+=250px",
      "opacity": "0.3"
    });
  });
  $('#sidenav-close').click(function() {
    $('#sidenav').css('width', '-=250px');
    $("#right-container, header, footer").css({
      "margin-left": "-=250px",
      "opacity": "1"
    });
  });


  // Handler for about
  $('#handleAbout').click(function() {
    $('#about-info').collapse('show');
  });

  // Handler for mix
  $('.mix span').click(function() {
    $('.collapse').collapse('hide');
  });

  // Card animation
  $('.collapse').on('hide.bs.collapse', function() {
    var styles = {
      backgroundImage: 'url("./images/blank-banner.png")'
    }
    $(".background").css(styles);
    $("#" + $(this).attr('aria-labelledby') + " > h2").removeClass('word-underlined');
    $("#" + $(this).attr('aria-labelledby') + " > h2").blur();
  });

  $('.collapse').on('shown.bs.collapse', function() {
    var styles = {
      backgroundImage: 'url(' + $(this).attr('data-image') + ')'
    }
    $(".background").css(styles);
    $("#" + $(this).attr('aria-labelledby') + " > h2").addClass('word-underlined');
  });

  // Tab Accessibility
  $('h2[data-toggle="collapse"]').focus(function() {
    $($(this).attr('data-target')).collapse('show');
  });


});
