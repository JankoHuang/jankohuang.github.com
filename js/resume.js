$(document).ready(function(){
    $(".navbar-nav a").click(function(){
        $(this).tab("show")
    });
});
$(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>0){
            $(".aside-bottom").fadeIn(400);
        } else {
            $(".aside-bottom").fadeOut(400);
        }
    });
    $(".aside-bottom").click(function(){
        $('body,html').animate({scrollTop:0},400);
        return false;
    });
});
