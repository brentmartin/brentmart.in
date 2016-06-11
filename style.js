$(document).ready(function() {
  $('a.scroll').smoothScroll();
  $('#skills').find('.skills-expanded').fadeOut();
  $('#jobs').find('.jobs-expanded').fadeOut();
  $('#education').find('.education-expanded').fadeOut();
  $('#results').find('.results-expanded').fadeOut();
  $('#interests').find('.interests-expanded').fadeOut();

  $('#textbox').find('.button-on').fadeOut();

  $('#skills').on('click', function() {
    $(this).find('.skills-expanded').fadeToggle(250);
  });

  $('#jobs').on('click', function() {
    $(this).find('.jobs-expanded').fadeToggle(250);
  });

  $('#education').on('click', function() {
    $(this).find('.education-expanded').fadeToggle(250);
  });

  $('#results').on('click', function() {
    $(this).find('.results-expanded').fadeToggle(250);
  });

  $('#interests').on('click', function() {
    $(this).find('.interests-expanded').fadeToggle(250);
  });

});
