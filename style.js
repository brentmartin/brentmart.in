$(document).ready(function() {
  $('a.scroll').smoothScroll();
  $('#skills').find('.skills-expanded').slideUp();
  $('#skills').find('h4, p').fadeOut();
  $('#jobs').find('.jobs-expanded').slideUp();
  $('#education').find('.education-expanded').slideUp();
  $('#results').find('.results-expanded').slideUp();
  $('#interests').find('.interests-expanded').slideUp();

  $('#skills').on('click', function() {
    $(this).find('.skills-expanded').fadeToggle(250);
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

  $('#interests').on('click', function() {
    $(this).find('.interests-expanded').slideToggle();
  });

});
