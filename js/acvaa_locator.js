$(document).ready(function() {
//------------------------------------------------------------------------------

$("h2").click(function(){
    var country = this.id;
    $("div#"+country).toggle();
    var color = $(this).css("color");
    console.log(color);
    if (color == 'rgb(255, 102, 0)') {
        $(this).css("color", "rgb(204, 204, 204)");
    };
    if (color == 'rgb(204, 204, 204)') {
        $(this).css("color", "rgb(255, 102, 0)");
    };

    });

$(".country").hide();
$("h2").css("color", "rgb(204, 204, 204)");

//------------------------------------------------------------------------------
});