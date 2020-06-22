window.onscroll = function() {myFunction()};
window.onload = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset >= 500) {
    $('.float-btn').addClass('d-none');
  }
  else {
    if($('.shop_details_card').hasClass('active')) {
      $('.float-btn').removeClass('d-none');
    }
  }
}

$(document).ready(function() {

$('.shop_details_card').click(function() {
  $('.shop_details_card').removeClass('active');
  $('.float-btn').removeClass('d-none');
  $(this).addClass('active');
});

document.getElementById("myinput").oninput = function() {
  this.style.background = 'linear-gradient(to right, #227093 0%, #227093 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
};

});