$(document).ready(function() {
  $('a.scroll').smoothScroll();
  $('#skills').find('.skills-expanded').slideUp();
  $('#skills').on('click', function() {
    $(this).find('.skills-expanded').slideToggle();
  });
});
