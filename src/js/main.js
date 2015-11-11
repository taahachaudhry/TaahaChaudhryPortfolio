global.jQuery = require('jquery');
var $ = global.jQuery;

require('jquery-bridget');
require('masonry-layout');

$(document).ready(function() {

  initBeforeLoad();

  $(window).on("load resize", function() {
    setTimeout(function(){
      $('.page-loader').fadeOut(500,function() {
        init();
      });
    }, 500);
	})

  $(window).on("resize", function() {
    $('.page-loader').css('display', 'block');
    init();
	})

  function initBeforeLoad() {
    projectLayout();
  }

  function init() {
    initBeforeLoad();
    activeNavigationLink();
  }

  function projectLayout() {
    $('.project-list').masonry({
      itemSelector: '.project-item',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-width'
    });
  }

  var $projectLink = $('.project-list .project-item');

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
    $projectLink.on('click', function () {
      var hash = window.location.hash.slice(1);
      $('.project').hide();
      $('#' + hash).show();
    })
  }
});
