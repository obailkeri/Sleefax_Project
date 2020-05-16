$(".tb").click(function(){
    
    $(".tb").removeClass("tb-active");
    $(this).addClass("tb-active");

    current_fs = $(".active");

    next_fs = $(this).attr('id');
    next_fs = "#" + next_fs + "1";

    $(".block").removeClass("active");
    $(next_fs).addClass("active");

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

function enable_input(){
    var inputs = document.getElementsByClassName("fo1");

    for (i=0;1<inputs.length;i++){
        inputs[i].disabled = false;
    } 
}

$(".fo1").change(function(){
    $("#edit1").hide();
    $("#save1").show();
}); 

function disable_input(){
    var x = document.getElementById("edit1");
    var y = document.getElementById("save1");
    y.style.display = "none";
    x.style.display = "block";
    var inputs = document.getElementsByClassName("fo1");
    for (i=0;1<inputs.length;i++){
        inputs[i].disabled = true;
    }
}

function enable_input2(){
    var inputs2 = document.getElementsByClassName("fo2");
    for (i=0;1<inputs2.length;i++){
        inputs2[i].disabled = false;
    } 
}

$(".fo2").change(function(){
    $("#edit2").hide();
    $("#save2").show();
});

function disable_input2(){
    var x = document.getElementById("edit2");
    var y = document.getElementById("save2");
    y.style.display = "none";
    x.style.display = "block";
    var inputs = document.getElementsByClassName("fo2");
    for (i=0;1<inputs.length;i++){
        inputs[i].disabled = true;
    }
}