$(document).ready(function() {
  $('a.scroll').smoothScroll();
  $('.topic').fadeOut();
  $('#skills').find('.skills-expanded').fadeOut();
  $('#jobs').find('.jobs-expanded').fadeOut();
  $('#education').find('.education-expanded').fadeOut();
  $('#results').find('.results-expanded').fadeOut();
  $('#interests').find('.interests-expanded').fadeOut();
  $('#textbox').find('.button-on').fadeOut();


/*
SEE MORE BUTTON ON EACH TOPIC
================================
*/
  $('.topic').find('.topic-button').on('click', function() {
    $(this).closest('.topic').find('.topic-button').toggleClass( 'button-off button-on' );
    $(this).closest('.topic').find('.topic-expanded').fadeToggle(250);
    $(this).closest('.topic').find('.topic-collapse').toggle();
  });


/*
NAVBAR BUTTONS
================================
*/
  $('#textbox').find('li:nth-child(1)').on('click', function() {
    $(this).toggleClass( 'button-off button-on' );
    $(this).closest('#textbox').find('#skills').fadeToggle(250);
  });

  $('#textbox').find('li:nth-child(2)').on('click', function() {
    $(this).toggleClass( 'button-off button-on jobs-button' );
    $(this).closest('#textbox').find('#jobs').fadeToggle(250);
  });

  $('#textbox').find('li:nth-child(3)').on('click', function() {
    $(this).toggleClass( 'button-off button-on' );
    $(this).closest('#textbox').find('#education').fadeToggle(250);
  });

  $('#textbox').find('li:nth-child(4)').on('click', function() {
    $(this).toggleClass( 'button-off button-on' );
    $(this).closest('#textbox').find('#results').fadeToggle(250);
  });

  $('#textbox').find('li:nth-child(5)').on('click', function() {
    $(this).toggleClass( 'button-off button-on' );
    $(this).closest('#textbox').find('#interests').fadeToggle(250);
    $('#textbox').find('.interests-button').toggleClass( 'interests-button' );
  });


/*
FIXED NAVBAR ON SCROLL
================================
*/

  $(window).scroll(function () {
      var posTop = $(window).scrollTop() - $('.nav-space').offset().top
    if (posTop > 0) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if (posTop < 1) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});
