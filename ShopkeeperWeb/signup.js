
function validate1(val) {
    v1 = document.getElementById("name");
    v2 = document.getElementById("mobno");
    v3 = document.getElementById("email");
    v4 = document.getElementById("pwd");
    v5 = document.getElementById("cpwd");

    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;
    flag5 = true;

    if(val>=1 || val==0) {
        if(v1.value == "") {
            v1.style.borderColor = "red";
            flag1 = false;
        }
        else {
            v1.style.borderColor = "#3F8FB0";
            flag1 = true;
        }
    }

    if(val>=2 || val==0) {
        if(v2.value == "") {
            v2.style.borderColor = "red";
            flag2 = false;
        }
        else {
            v2.style.borderColor = "#3F8FB0";
            flag2 = true;
        }
    }

    if(val>=3 || val==0) {
        if(v3.value == "") {
            v3.style.borderColor = "red";
            flag3 = false;
        }
        else {
            v3.style.borderColor = "#3F8FB0";
            flag3 = true;
        }
    }

    if(val>=4 || val==0) {
        if(v4.value == "") {
            v4.style.borderColor = "red";
            flag4 = false;
        }
        else {
            v4.style.borderColor = "#3F8FB0";
            flag4 = true;
        }
    }

    if(val>=5 || val==0) {
        if(v5.value == "") {
            v5.style.borderColor = "red";
            flag5 = false;
        }
        else {
            v5.style.borderColor = "#3F8FB0";
            flag5 = true;
        }
    }

    flag = flag1 && flag2 && flag3 && flag4 && flag5;

    return flag;
}

function validate2(val) {
    v1 = document.getElementById("shop-name");
    v2 = document.getElementById("shop-no");
    v3 = document.getElementById("shop-loc");
    v4 = document.getElementById("from-time");
    v5 = document.getElementById("to-time");
    
    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;
    flag5 = true;

    if(val>=1 || val==0) {
        if(v1.value == "") {
            v1.style.borderColor = "red";
            flag1 = false;
        }
        else {
            v1.style.borderColor = "#3F8FB0";
            flag1 = true;
        }
    }

    if(val>=2 || val==0) {
        if(v2.value == "") {
            v2.style.borderColor = "red";
            flag2 = false;
        }
        else {
            v2.style.borderColor = "#3F8FB0";
            flag2 = true;
        }
    }

    if(val>=3 || val==0) {
        if(v3.value == "") {
            v3.style.borderColor = "red";
            flag3 = false;
        }
        else {
            v3.style.borderColor = "#3F8FB0";
            flag3 = true;
        }
    }

    if(val>=4 || val==0) {
        if(v4.value == "") {
            v4.style.borderColor = "red";
            flag4 = false;
        }
        else {
            v4.style.borderColor = "#3F8FB0";
            flag4 = true;
        }
    }

    if(val>=5 || val==0) {
        if(v5.value == "") {
            v5.style.borderColor = "red";
            flag5 = false;
        }
        else {
            v5.style.borderColor = "#3F8FB0";
            flag5 = true;
        }
    }

    flag = flag1 && flag2 && flag3 && flag4 && flag5;

    return flag;
}

function validate3(val) {
    v1 = document.getElementById("price1");
    v2 = document.getElementById("price2");
    v3 = document.getElementById("price3");
    v4 = document.getElementById("price4");
    
    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;

    if(val>=1 || val==0) {
        if(v1.value == "") {
            v1.style.borderColor = "red";
            flag1 = false;
        }
        else {
            v1.style.borderColor = "#3F8FB0";
            flag1 = true;
        }
    }

    if(val>=2 || val==0) {
        if(v2.value == "") {
            v2.style.borderColor = "red";
            flag2 = false;
        }
        else {
            v2.style.borderColor = "#3F8FB0";
            flag2 = true;
        }
    }

    if(val>=3 || val==0) {
        if(v3.value == "") {
            v3.style.borderColor = "red";
            flag3 = false;
        }
        else {
            v3.style.borderColor = "#3F8FB0";
            flag3 = true;
        }
    }

    if(val>=4 || val==0) {
        if(v4.value == "") {
            v4.style.borderColor = "red";
            flag4 = false;
        }
        else {
            v4.style.borderColor = "#3F8FB0";
            flag4 = true;
        }
    }

    flag = flag1 && flag2 && flag3 && flag4;

    return flag;
}

$(document).ready(function(){

var current_fs, next_fs, previous_fs;

$(".next").click(function(){

    str1 = "next1";
    str2 = "next2";
    str3 = "next3";

    if(!str1.localeCompare($(this).attr('id')) && validate1(0) == true) {
        val1 = true;
    }
    else {
        val1 = false;
    }

    if(!str2.localeCompare($(this).attr('id')) && validate2(0) == true) {
        val2 = true;
    }
    else {
        val2 = false;
    }

    if(!str3.localeCompare($(this).attr('id')) && validate3(0) == true) {
        val3 = true;
    }
    else {
        val3 = false;
    }

    if((!str1.localeCompare($(this).attr('id')) && val1 == true) || (!str2.localeCompare($(this).attr('id')) && val2 == true) || (!str3.localeCompare($(this).attr('id')) && val3 == true)) {
        current_fs = $(this).parent().parent().parent().parent();
        next_fs = $(this).parent().parent().parent().parent().next();

        st = "tab4";
        if(!st.localeCompare($(next_fs).attr('id'))) {
          $("#progressbar").addClass('d-none');  
          $("#sign_up").addClass('d-none');  
        }
        
        $(current_fs).removeClass("show");
        $(next_fs).addClass("show");

        $("#progressbar li").eq($(".tab").index(next_fs)).addClass("active");
        
        current_fs.animate({}, {
            step: function() {

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });

                next_fs.css({
                    'display': 'block'
                });
            }
        });
    }
});

$(".prev").click(function(){
    
    current_fs = $(this).parent().parent().parent().parent();
    previous_fs = $(this).parent().parent().parent().parent().prev();
    
    $(current_fs).removeClass("show");
    $(previous_fs).addClass("show");

    $("#progressbar li").eq($(".tab").index(next_fs)).removeClass("active");

    current_fs.animate({}, {
        step: function() {

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });

            previous_fs.css({
                'display': 'block'
            });
        }
    });
});

$(document).on('click', '.addbreak', function(){
  $(this).parent().parent().parent().append('<div class="row justify-content-left mt-2"><div class="col-12 col-md-2" style="color:#57B1D5; font-weight: bold; font-size: 15px;"><div class="px-auto mt-1"> BREAK TIME</div></div><div class="col-6 col-md-3 text-muted text-sm">From : &nbsp;<input required type="time"></div><div class="col-5 col-md-3 text-muted text-sm mt-2 my-md-0">To : &nbsp;<input required type="time" ></div><div class="col-4 col-md-2" style="text-align: center;"><div class="sub-btn remove remove-break">Remove</div></div></div>');
});

$(document).on('click', '.addday', function(){
  $(this).parent().parent().parent().parent().append('<div class="add-break-box mt-5"><div class="row justify-content-left mt-3"><div class="col-12 col-md-2 mb-2 ml-0"><select class="select-day"><option>Mon-Fri</option><option>Sat-Sun</option><option>Mon</option><option>Tues</option><option>Wed</option><option>Thur</option><option>Fri</option><option>Sat</option><option>Sun</option></select></div><div class="col-6 col-md-3 px-auto text-muted text-sm">From : &nbsp;<input required type="time"></div><div class="col-5 col-md-3 px-auto text-muted text-sm mb-2 mb-md-0">To : &nbsp;<input required type="time"></div><div class="col-4 col-md-2" style="text-align: center;"><div class="sub-btn addbreak">Add Break</div></div><div class="col-4 col-md-2" style="text-align: left;"><div class="sub-btn remove remove-day">Remove</div></div></div></div>');
});

$(document).on('click', '.remove-break', function(){
  $(this).parent().parent().remove();
});

$(document).on('click', '.remove-day', function(){
  $(this).parent().parent().parent().remove();
});

$('.radio-group .days').click(function(){
    $(this).toggleClass('selected');
});

});