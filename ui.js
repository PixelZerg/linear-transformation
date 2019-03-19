// matrix brackets
$('.matrix .lbrac').css("opacity","1");
$('.matrix .rbrac').css("opacity","1");

$(window).on('resize', function(){
    var top = 25+$('.matrix').prevAll().outerHeight(true);
    $('.matrix .lbrac').css("top", top);
    $('.matrix .rbrac').css("top", top);

    $('.matrix .rbrac').css("left", $('.matrix').outerWidth()-6);
}).resize();