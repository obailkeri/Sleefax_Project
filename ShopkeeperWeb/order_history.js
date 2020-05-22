
$('.btn').on('click', function() {
    var $this = $(this);
  $this.button('loading');
    setTimeout(function() {
       $this.button('reset');
   }, 8000);
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
    $(this).attr('id', 'tr-active');
    var d0 = $("#tr-active .customer-name").text();
    var d1 = $("#tr-active .page-size").text();
    var d2 = $("#tr-active .orient").text();
    var d3 = $("#tr-active .color").text();
    var d4 = $("#tr-active .copies").text();
    var d5 = $("#tr-active .file-type").text();
    var d6 = $("#tr-active .file-size").text();
    var d7 = $("#tr-active .pages").text();
    var d8 = $("#tr-active .status").text();

    var success = "success";
    var failed = "failed";

    $("#customer").html(d0);
    $("#data1").html(d1);
    $("#data2").html(d2);
    $("#data3").html(d3);
    $("#data4").html(d4);
    $("#data5").html(d5);
    $("#data6").html(d6);
    $("#data7").html(d7);
    if(d8.localeCompare(success)) {
    	$("#data82").removeClass('d-none');
    	$("#data92").removeClass('d-none');
    	$("#data81").addClass('d-none');
    	$("#data91").addClass('d-none');
    }
    if(d8.localeCompare(failed)){
    	$("#data81").removeClass('d-none');
    	$("#data91").removeClass('d-none');
    	$("#data82").addClass('d-none');
    	$("#data92").addClass('d-none');
    }

}, function() {
    $(this).removeAttr('id');
});

});