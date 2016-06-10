$(document).ready(function() {
  $('a.scroll').smoothScroll();
  $('#skills').find('.skills-expanded').slideUp();
  $('#jobs').find('.jobs-expanded').slideUp();
  $('#skills').on('click', function() {
    $(this).find('.skills-expanded').slideToggle();
  });

  $('#jobs').on('click', function() {
    $(this).find('.jobs-expanded').slideToggle();
  });
});
