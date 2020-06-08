$(document).ready(function() {

$(document).on('click', '.remove-file', function(){
    $(this).parent().parent().remove();
});

$('.radio-grp .radio-opt').click(function(){
	$('.radio-opt').removeClass('selected');
    $(this).addClass('selected');

	$('.file-prop').removeClass('selected');
    $(".file-prop").eq($(".radio-opt").index(this)).addClass("selected");
});

$('.color-format').click(function(){
	$('.color-format').removeClass('selected');
    $(this).addClass('selected');
});

});