$(document).ready(function() {


// Add jQuery here


// EACH CLICK FUCNTION TARGETS THE correct .b-tag FROM THE NAVIGATION
// HIDES ALL .item BY ADDING A CLASS OF HIDE with .addClass 'hide' (A)
// AND REMOVES CLASS OF SHOW FROM ALL .item WITH .removeClass 'show'

// THEN TARGETS THE RIGHT TAGGED ITEM WITH .item.tag
// ADDS THE CLASS OF 'show'
// REMOVES THE CLASS OF 'hide' THAT WAS PREVIOUSLY APPLIED (A)

$('.b-circle').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.circle').addClass('show');
  $('.item.circle').removeClass('hide');
});

$('.b-window').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.window').addClass('show');
  $('.item.window').removeClass('hide');
});

$('.b-plan').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.plan').addClass('show');
  $('.item.plan').removeClass('hide');
});

$('.b-building').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.building').addClass('show');
  $('.item.building').removeClass('hide');
});

$('.b-object').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.object').addClass('show');
  $('.item.object').removeClass('hide');
});

$('.b-red').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.red').addClass('show');
  $('.item.red').removeClass('hide');
});

$('.b-blue').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.blue').addClass('show');
  $('.item.blue').removeClass('hide');
});

$('.b-yellow').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.yellow').addClass('show');
  $('.item.yellow').removeClass('hide');
});

$('.b-brick').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.brick').addClass('show');
  $('.item.brick').removeClass('hide');
});

$('.b-drawing').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.drawing').addClass('show');
  $('.item.drawing').removeClass('hide');
});

$('.b-grid').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.grid').addClass('show');
  $('.item.grid').removeClass('hide');
});

$('.b-photograph').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.photograph').addClass('show');
  $('.item.photograph').removeClass('hide');
});








// dont remvoe this line
});
