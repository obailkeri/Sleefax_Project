
$('.btn').on('click', function() {
  var $this1 = $(this);
  $this1.button('loading');
  setTimeout(function() {
    $this1.button('reset');
  },8000);
});

$(document).ready(function() {

// SHOW CONTACT
$('.contact-text').click(function() {
  $(this).addClass('d-none');
  $(this).next().removeClass('d-none');
});

$('.contact-icon').click(function() {
  tmp = $(this).next().children();
  $(tmp[0]).addClass('d-none');
  $(tmp[1]).removeClass('d-none');
});

// HIDE CONTACT
$('.contact-no').click(function() {
  $(this).addClass('d-none');
  $(this).prev().removeClass('d-none');
});

$('.list1 tr').hover(function() {
    $(this).addClass('tr-active');
}, function() {
    $(this).removeClass('tr-active');
});

});