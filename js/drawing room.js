/**
 * Created by Administrator on 2016/8/29.
 */

    angular.module("md1",[]).controller("a",function($scope){
        $scope.i=1;
        $scope.next=function(){
            $scope.i++;
            if($scope.i==15){
                $scope.i=1;
            }
        }
        $scope.prev=function(){
            $scope.i--;
            if($scope.i==0){
                $scope.i=14;
            }
        }

    })



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