$(document).ready(function() {

$('.payment-box .pay-opt').click(function(){
	$('.pay-opt').removeClass('selected');
    $(this).addClass('selected');
});

$('#pay-upi').click(function() {
	$('#upi-card').removeClass('d-none');
})

$('#pay-pickup').click(function() {
	$('#upi-card').addClass('d-none');
})

$('.color-format').click(function(){
	$('.color-format').removeClass('selected');
    $(this).addClass('selected');
});

$('.pages-opt').click(function(){
	if($(this).val()==2) {
		$(this).parent().next().removeClass('d-none');
	}
	else {
		$(this).parent().next().addClass('d-none');
	}
})

$('#shop-info').on('click', function() {
  $('#shop-info-card').toggleClass('moveDown');
  $('#print-details').toggleClass('move');
});

});