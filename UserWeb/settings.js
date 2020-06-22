
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

document.getElementById("tab2").style.display = "none";    
document.getElementById("tab3").style.display = "none";
document.getElementById("tab4").style.display = "none";

function openTab1(){
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab1").style.display = "block";
    document.getElementById("tab4").style.display = "none";     
    var element = document.getElementById("b1");
    element.classList.add("active");
    var element = document.getElementById("b2");
    element.classList.remove("active");
    var element = document.getElementById("b3");
    element.classList.remove("active");
    var element = document.getElementById("b4");
    element.classList.remove("active");
}
function openTab2(){
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab2").style.display = "block";
    document.getElementById("tab4").style.display = "none";     
    var element = document.getElementById("b2");
    element.classList.add("active");
    var element = document.getElementById("b1");
    element.classList.remove("active");
    var element = document.getElementById("b3");
    element.classList.remove("active");
    var element = document.getElementById("b4");
    element.classList.remove("active");
}
function openTab3(){
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "block";
    document.getElementById("tab4").style.display = "none";     
    var element = document.getElementById("b3");
    element.classList.add("active");
    var element = document.getElementById("b1");
    element.classList.remove("active");
    var element = document.getElementById("b2");
    element.classList.remove("active");
    var element = document.getElementById("b4");
    element.classList.remove("active");
}
function openTab4(){
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab4").style.display = "block";
    document.getElementById("tab3").style.display = "none";
    var element = document.getElementById("b4");
    element.classList.add("active");
    var element = document.getElementById("b1");
    element.classList.remove("active");
    var element = document.getElementById("b2");
    element.classList.remove("active");
    var element = document.getElementById("b3");
    element.classList.remove("active");
}
function enable_input1_1(){
    var inputs = document.getElementById("input1_1")
    inputs.disabled = false;
}

function enable_input1_2(){
    var inputs = document.getElementById("input1_2")
    inputs.disabled = false;
}

function enable_input1_3(){
    var inputs = document.getElementById("input1_3")
    inputs.disabled = false;
}

function disable_input(){
    var inputs2 = document.getElementsByClassName("fo");
    var x = document.getElementById("save1");
    x.style.display = "none";
    for (i=0;1<inputs2.length;i++){
        inputs2[i].disabled = true;
    } 
}

$(function() {
    function ratingEnable() {
        $('#example-square').barrating('show', {
            theme: 'bars-square',
            showValues: true,
            showSelectedRating: false
        });
    }
    ratingEnable();
});

$(document).ready(function() {

    $(".fo").change(function(){
        $("#save1").show();
    });

    $(".issue-group .issue").click(function() {
        $(this).toggleClass('selected');
    });

});