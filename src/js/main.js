global.jQuery = require('jquery');
var $ = global.jQuery;

require('jquery-bridget');
require('masonry-layout');

require('jquery.easing');
require('magnific-popup');

function initBeforeLoad() {
  initialLayout();
  projectLayout();
}

function projectLayout() {
  $('.project-list').masonry({
    itemSelector: '.project-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-width'
  });
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
      easing: 'ease-in-out' // CSS transition easing function
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
	})
});
