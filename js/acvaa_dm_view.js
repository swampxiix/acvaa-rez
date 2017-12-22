$(document).ready(function() {
// ------------------------------------------------------ //

$(".doc_hider").click(function(){
    var category = $(this).attr('id');
    if ($(this).hasClass('fa-caret-down')) {
        $(this).removeClass('fa-caret-down');
        $(this).addClass('fa-caret-right');
    } else if ($(this).hasClass('fa-caret-right')) {
        $(this).removeClass('fa-caret-right');
        $(this).addClass('fa-caret-down');
    };
    $('#'+category+'_content').toggle();
    
    });





// ------------------------------------------------------ //
});