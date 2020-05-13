
$('.btn').on('click', function() {
  var $this1 = $(this);
  $this1.button('loading');
  setTimeout(function() {
    $this1.button('reset');
  },8000);
});

function displaycn(){
  var trd = $(this).parent("tr");
  var rowid = trd.attr("id");
  $(rowid).children(".cwrite").hide();
}

$(document).ready(function(){

$('.list1 tr').hover(function()
{
    $(this).addClass('tr-active');
},function()
{
    $(this).removeClass('tr-active');
});

});