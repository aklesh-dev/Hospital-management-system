/*----------------------------------------------------
# --All stripts here will extends to all pages
------------------------------------------------------*/ 
// --1) If no patient, show message
$(document).ready(function(){
    let verfiy = $("#chk_id").length;
    if(verfiy == 0){
        $("#no-data").text('No patient found !!!');
    }
});

//--2) Time running at real time
setInterval(function(){
    const date = new Date();
    $("#clock").html(
        (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
    );
}, 500);
