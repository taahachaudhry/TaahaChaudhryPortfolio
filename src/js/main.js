global.jQuery = require('jquery');
var $ = global.jQuery;

require('jquery-bridget');
require('masonry-layout');

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

$(document).ready(function() {

  initBeforeLoad();

  $(window).on("load resize hashchange", function() {
    initBeforeLoad();
    $('.page-loader').css('display', 'block');
    setTimeout(function(){
      $('.page-loader').fadeOut(500);
    }, 500);
	})
});
