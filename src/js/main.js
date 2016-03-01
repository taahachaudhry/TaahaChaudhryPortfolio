global.jQuery = require('jquery');
var $ = global.jQuery;

require('jquery.easing');
require('magnific-popup');

function routesLayout() {
  $('.project').hide();

  var hash = window.location.hash;
  hash = hash.replace(/^#/, '');

  if (hash === '') {
    $('.project-panel').show();
  } else {
    $('.project-panel').hide();
    $("#" + hash).fadeIn();
  }
}

function imageLoad() {
  $('.project-item img').each(function(index) {
    $(this).hide().delay(200 * index).fadeIn(700);
  });
}

function imagePopup() {
  $('.image-link').magnificPopup({
    type:'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in' // CSS transition easing function
    }
  });
}

$(document).ready(function() {

  routesLayout();
  imageLoad();
  imagePopup();

  $(window).on("load", function() {
    $('.page-loader').css('display', 'block');
    setTimeout(function(){
      $('.page-loader').fadeOut(250);
    }, 250);
	})

  $(window).on("load hashchange", function() {
    routesLayout();
	})
});
