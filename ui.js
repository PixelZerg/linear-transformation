// matrix brackets
$('.matrix .lbrac').css("opacity","1");
$('.matrix .rbrac').css("opacity","1");

$(window).on('resize', function(){
    $('.matrix .rbrac').css("left",$('.matrix').outerWidth()-6);
}).resize();