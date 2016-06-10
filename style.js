$(document).ready(function() {
  $('a.scroll').smoothScroll();
  $('#skills').find('.skills-expanded').slideUp();
  $('#jobs').find('.jobs-expanded').slideUp();
  $('#education').find('.education-expanded').slideUp();
  $('#results').find('.results-expanded').slideUp();
  $('#skills').on('click', function() {
    $(this).find('.skills-expanded').slideToggle();
  });

  $('#jobs').on('click', function() {
    $(this).find('.jobs-expanded').slideToggle();
  });

  $('#education').on('click', function() {
    $(this).find('.education-expanded').slideToggle();
  });

  $('#results').on('click', function() {
    $(this).find('.results-expanded').slideToggle();
  });
});
