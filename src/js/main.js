global.jQuery = require('jquery');
var $ = global.jQuery;

require('jquery.easing');
require('magnific-popup');

function initBeforeLoad() {
  initialLayout();
}

function initialLayout() {
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

  initBeforeLoad();

  $(window).on("load resize hashchange", function() {
    initBeforeLoad();
    $('.page-loader').css('display', 'block');
    setTimeout(function(){
      $('.page-loader').fadeOut(500, function () {
        imagePopup();
      });
    }, 500);
    imagePopup();
	})
});
