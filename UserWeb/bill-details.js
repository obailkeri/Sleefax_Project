
window.onscroll = function() {myFunction()};
window.onload = function() {myFunction()};

var navbar = document.getElementById("navbar-id");

function myFunction() {
    if (window.pageYOffset >= 10) {
        navbar.classList.add("navbar-light");
        document.getElementById("smaller-border").style.backgroundColor = "#227093";
    } else {
        navbar.classList.remove("navbar-light");
        document.getElementById("smaller-border").style.backgroundColor = "white";
    }
}

$(document).ready(function() {

$('#shop-info').on('click', function() {
  $('#shop-info-card').toggleClass('moveDown');
  $('#print-details').toggleClass('move');
});

});