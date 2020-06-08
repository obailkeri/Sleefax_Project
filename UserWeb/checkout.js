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

});