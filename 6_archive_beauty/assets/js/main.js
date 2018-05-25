$(document).ready(function() {


// Add jQuery here


// EACH CLICK FUCNTION TARGETS THE correct .b-tag FROM THE NAVIGATION
// HIDES ALL .item BY ADDING A CLASS OF HIDE with .addClass 'hide' (A)
// AND REMOVES CLASS OF SHOW FROM ALL .item WITH .removeClass 'show'

// THEN TARGETS THE RIGHT TAGGED ITEM WITH .item.tag
// ADDS THE CLASS OF 'show'
// REMOVES THE CLASS OF 'hide' THAT WAS PREVIOUSLY APPLIED (A)

$('.b-makeup').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.makeup').addClass('show');
  $('.item.makeup').removeClass('hide');
});

$('.b-skin').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.skin').addClass('show');
  $('.item.skin').removeClass('hide');
});

$('.b-hair').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.hair').addClass('show');
  $('.item.hair').removeClass('hide');
});

$('.b-perfume').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.perfume').addClass('show');
  $('.item.perfume').removeClass('hide');
});


$('.b-advertisment').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.advertisment').addClass('show');
  $('.item.advertisment').removeClass('hide');
});

$('.b-pink').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.pink').addClass('show');
  $('.item.pink').removeClass('hide');
});

$('.b-face').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.face').addClass('show');
  $('.item.face').removeClass('hide');
});

$('.b-tools').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.tools').addClass('show');
  $('.item.tools').removeClass('hide');
});








// dont remvoe this line
});
