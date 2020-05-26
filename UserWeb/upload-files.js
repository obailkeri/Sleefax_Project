$(document).ready(function() {

$(document).on('click', '.remove-file', function(){
    $(this).parent().parent().remove();
});

$('.radio-grp .radio-opt').click(function(){
	$('.radio-opt').removeClass('selected');
    $(this).addClass('selected');
});

});