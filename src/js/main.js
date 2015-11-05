global.jQuery = require('jquery');
var $ = global.jQuery;

$('document').ready(function() {

  var $navLink = $('.nav-links a');

  $navLink.click(function() {
    $navLink.removeClass('active');
    $(this).addClass('active');
  });

});
