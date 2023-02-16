

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= 400) {
        $(".page_top").fadeIn ();
        }else{$(".page_top").fadeOut()}
       
    });
});

$(function(){
    $(".page_top").on("click",function(){
        $("html").animate({scrollTop:0},1000);
        return false;
    });
});
