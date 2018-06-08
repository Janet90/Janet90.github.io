

$(document).ready(function() {


// Add jQuery here

$("#box").click(function() {
  $('html, body').animate({
      scrollTop: $("#box").offset().top
  }, 2000);
});


$('.e-hearts').mouseenter(function() {
    $('.p-hearts').addClass('p-show');
  });

$('.e-hearts').mouseleave(function() {
    $('.p-hearts').removeClass('p-show');
  });

$('.e-flag').mouseenter(function() {
    $('.p-flag').addClass('p-show');
  });

$('.e-flag').mouseleave(function() {
    $('.p-flag').removeClass('p-show');
  });















  });
