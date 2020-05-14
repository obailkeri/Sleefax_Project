
$('.btn').on('click', function() {
    var $this = $(this);
  $this.button('loading');
    setTimeout(function() {
       $this.button('reset');
   }, 8000);
});

$(document).ready(function() {

$('.list1 .summary').hover(function() {
    $(this).attr('id', 'tr-active');
    var d0 = $("#tr-active .customer-name").text();
    var d1 = $("#tr-active .page-size").text();
    var d2 = $("#tr-active .orient").text();
    var d3 = $("#tr-active .color").text();
    var d4 = $("#tr-active .copies").text();
    var d5 = $("#tr-active .file-type").text();
    var d6 = $("#tr-active .file-size").text();
    var d7 = $("#tr-active .pages").text();

    $("#customer").html(d0);
    $("#data1").html(d1);
    $("#data2").html(d2);
    $("#data3").html(d3);
    $("#data4").html(d4);
    $("#data5").html(d5);
    $("#data6").html(d6);
    $("#data7").html(d7);

    $('#tr-active .callDetails').click(function() {
		$('#tr-active').next().removeClass('d-none');
		$('#tr-active').addClass('d-none');
	});

	$('#tr-active .recover-btn').click(function() {
		$('#tr-active').next().next().removeClass('d-none');
		$('#tr-active').addClass('d-none');
	});

}, function() {
    $(this).removeAttr('id');
});

$('.call-info .close').click(function() {
	$(this).parent().parent().parent().addClass('d-none');
	$(this).parent().parent().parent().prev().removeClass('d-none');
});

$('.recover-doc .close').click(function() {
	$(this).parent().parent().parent().addClass('d-none');
	$(this).parent().parent().parent().prev().prev().removeClass('d-none');
});

});