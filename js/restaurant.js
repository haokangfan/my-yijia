/**
 * Created by Administrator on 2016/9/1.
 */
$(function(){
    $(window).scroll(function(){

        if($(this).scrollTop()>100){
            $(".tubiao").css("opacity","1");
        }else{
            $(".tubiao").css("opacity","0");
        }
        if($("footer").offset().top-$(this).scrollTop()<700){
            $(".tubiao").css("bottom","100px");
        }else {
            $(".tubiao").css("bottom","0");
        }
    })
})