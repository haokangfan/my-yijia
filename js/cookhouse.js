/**
 * Created by Administrator on 2016/9/1.
 */
$(function(){
    $('.div1').css('width',$('.show .img1').width());
    $('.div1').css('height',$('.show .img1').height());

    $(window).resize(function(){
        $('.div1').css('width',$('.show .img1').width());
        $('.div1').css('height',$('.show .img1').height());

    })
    $('.div2').css('width',$('.show .img2').width());
    $('.div2').css('height',$('.show .img2').height());

    $(window).resize(function(){
        $('.div2').css('width',$('.show .img2').width());
        $('.div2').css('height',$('.show .img2').height());

    })

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
