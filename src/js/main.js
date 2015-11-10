global.jQuery = require('jquery');
var $ = global.jQuery;

require('jquery-bridget');
require('masonry-layout');

$(document).ready(function() {

  projectLayout();

  $(window).load(function() {
    setTimeout(function(){
      $('.page-loader').fadeOut(500,function() {
        init();
      });
    }, 500);
	})

  function init() {
    activeNavigationLink();
    // projectLayout();
  }

  // var $navLink = $('.project-list .project-item');

  // add active class to active linked
  function activeNavigationLink() {
    // var pgurl = window.location.href.substr(window.location.href.lastIndexOf("#"));
    // var pgurl = window.location.hash.substr(1);
    // $navLink.each(function(){
    //   if($(this).attr("href") == pgurl ) {
    //     $(this).addClass("active");
    //   }
    // });

    // $navLink.click(function() {
    //   $navLink.removeClass('active');
    //   $(this).addClass('active');
    // });
    var hash = window.location.hash.slice(1);
    $('.project').hide();
    $('#' + hash).show();
  }

  function projectLayout() {
    $('.project-list').masonry({
      itemSelector: '.project-item',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-width'
    });
  }
});
