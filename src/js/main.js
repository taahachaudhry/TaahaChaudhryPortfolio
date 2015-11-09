global.jQuery = require('jquery');
var $ = global.jQuery;

// var $navLink = $('.nav-links a');

// add active class to active linked
function activeNavigationLink() {
  // var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/"));
  // $navLink.each(function(){
  //   if($(this).attr("href") == pgurl ) {
  //     $(this).addClass("active");
  //   }
  // });

  // $navLink.click(function() {
  //   $navLink.removeClass('active');
  //   $(this).addClass('active');
  // });
}

$('document').ready(function() {
  activeNavigationLink();
});
