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

var d0, d1, d2, d3, d4, d5, d6, d7, d8;

d0 = $(".customer-name").text();
d1 = $(".active .page-size").text();
d2 = $(".active .orient").text();
d3 = $(".active .color").text();
d4 = $(".active .copies").text();
d5 = $(".active .file-type").text();
d6 = $(".active .file-size").text();
d7 = $(".active .pages").text();
d8 = $(".active .file-name").text();

$("#file-heading").html(d8);
$("#customer").html(d0);
$("#data1").html(d1);
$("#data2").html(d2);
$("#data3").html(d3);
$("#data4").html(d4);
$("#data5").html(d5);
$("#data6").html(d6);
$("#data7").html(d7);

$('.btn-od').click(function() {
    $(this).parent().parent().parent().parent().find('.active').removeClass('active');
    $(this).parent().parent().parent().addClass('active');

    d0 = $(".customer-name").text();
    d1 = $(".active .page-size").text();
    d2 = $(".active .orient").text();
    d3 = $(".active .color").text();
    d4 = $(".active .copies").text();
    d5 = $(".active .file-type").text();
    d6 = $(".active .file-size").text();
    d7 = $(".active .pages").text();
    d8 = $(".active .file-name").text();

    $("#file-heading").html(d8);
    $("#customer").html(d0);
    $("#data1").html(d1);
    $("#data2").html(d2);
    $("#data3").html(d3);
    $("#data4").html(d4);
    $("#data5").html(d5);
    $("#data6").html(d6);
    $("#data7").html(d7);
});

});