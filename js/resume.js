$(document).ready(function(){
    $(".navbar-nav a").click(function(){
        $(this).tab("show")
    });
});
$(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $("#returnTop").fadeIn(1000);
        } else {
            $("#returnTop").fadeOut(1000);
        }
    });
    $("#returnTop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
});
