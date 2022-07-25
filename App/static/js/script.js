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
