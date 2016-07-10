$(document).ready(function() {
  $('a.scroll').smoothScroll();
  // $('.topic-read-more').add('topic-read-more');
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

/*  performs the following on each specific topic:

  $('#skills').find('.topic-button').on('click', function() {
    $('#skills').find('.topic-button').toggleClass( 'button-off button-on' );
    $('#skills').find('.skills-expanded').fadeToggle(250);
  });

  $('#skills').find('.topic-header').on('click', function() {
    $('#skills').find('.topic-button').toggleClass( 'button-off button-on' );
    $('#skills').find('.skills-expanded').fadeToggle(250);
  });
*/



/*
READ MORE/LESS
================================
  $('#skills').find('.topic-read-more > .topic-read-link').on('click', function() {
    $('#skills').find('.topic-button').toggleClass( 'button-off button-on' );
    $('#skills').find('.topic-read-more').hide();
    $('#skills').find('.topic-read-less').fadeIn(250);
    $('#skills').find('.skills-expanded').fadeIn(250);
  });

  $('#skills').find('.topic-read-less > .topic-read-link').on('click', function() {
    $('#skills').find('.topic-button').toggleClass( 'button-off button-on' );
    $('#skills').find('.topic-read-less').fadeOut(250);
    $('#skills').find('.topic-read-more').delay(250).fadeIn(250);
    $('#skills').find('.skills-expanded').fadeOut(250);
  });
*/


  $('#textbox').find('li:nth-child(1)').on('click', function() {
    $(this).toggleClass('button-off button-on');
    $(this).closest('#textbox').find('#skills').fadeToggle(250);
  });

  $('#textbox').find('li:nth-child(2)').on('click', function() {
    $(this).toggleClass('button-off button-on');
    $(this).closest('#textbox').find('#jobs').fadeToggle(250);
  });

  $('#textbox').find('li:nth-child(3)').on('click', function() {
    $(this).toggleClass('button-off button-on');
    $(this).closest('#textbox').find('#education').fadeToggle(250);
  });

  $('#textbox').find('li:nth-child(4)').on('click', function() {
    $(this).toggleClass('button-off button-on');
    $(this).closest('#textbox').find('#results').fadeToggle(250);
  });

  $('#textbox').find('li:nth-child(5)').on('click', function() {
    $(this).toggleClass('button-off button-on');
    $(this).closest('#textbox').find('#interests').fadeToggle(250);
  });



  $(window).scroll(function () {

      var posTop = $(window).scrollTop() - $('.nav-space').offset().top

    console.log('from .nav-space: '+posTop+' | from top of page: '+$(window).scrollTop());

    if (posTop > 0) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if (posTop < 1) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});
