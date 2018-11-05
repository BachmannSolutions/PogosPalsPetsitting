/* ================================= 
  J
==================================== */

/* ---- custom cursor ---- */

$(document).ready(function(){
    $(".nav-link").hover(function(){
        $(this).css('font-size', "1.5rem" );
    });
    $(".nav-link").mouseleave(function(){
        $(this).css('font-size', "1rem" );
    });
});