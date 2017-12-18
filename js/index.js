/**
 * Created by Administrator on 2016/8/26.
 */
angular.module("md1",[]).controller("a",function($scope){
    $scope.show1=true;
    $scope.more=
    [

        {"imgName":"images/p16.png","biaoti":"小空间挑战1：小型双人卧室","jieshao":"在小空间发挥创意。我们决定尝试用尽可能小的空间打造租赁的双人卧室。之后我们试了一下！在本系列的第一部分，我们展示了多功能、可移动和分层解决方案创造储物空间和开放式地面空间的方法。","anniu":"小空间"},
        {"imgName":"images/p13.png","biaoti":"大人的放松空间还是儿童的浴室乐园？二者兼得！","jieshao":"家庭浴室可以是父母的庇护所，结束了漫长的一天后，他们可在这里美美地泡个澡，或来个速战速决的提神淋浴。而在这惬意祥和的氛围下还隐藏着什么呢？当然是能够让孩子们享受水花四溅的晚间沐浴乐趣的各种要素。","anniu":"浴室"},
        {"imgName":"images/p2.png","biaoti":"打造与喜欢的事物一起生活的空间","jieshao":"如果比起换电视台你更愿意换颜料卡，为什么不打造一个可以发挥创意的美术空间呢？打造一个家中美术工作室，专供“凌晨两点，想画画”这类念头出现时使用","anniu":"装饰"},
        {"imgName":"images/p15.png","biaoti":"双倍的玩耍、睡觉和成长空间","jieshao":"富有想象力的设计、巧妙的布局加上多功能家具，即使再小的共用卧室也能变成孩子们的游戏乐园。设计师Same Grigg向一个家庭证明，共用卧室并不意味着麻烦加倍，也可能意味着双倍欢乐！","anniu":"儿童房"},
        {"imgName":"images/p1.png","biaoti":"如何保持空间井然有序","jieshao":"最可怕的四个字就是：杂乱不堪。这的确是不可避免的，但是却有办法减少杂乱的程度。以下就是我们让家保持井然有序的方法。","anniu":"装饰"},
        {"imgName":"images/p3.png","biaoti":"不再局促：楼梯下的空间","jieshao":"我们可以想办法好好利用家中的实用空间。有时这些空间就在你面前，你却没发现。或者是楼梯台阶。在此介绍几个方法，帮你利用这些被遗忘的宝贵空间。","anniu":"收纳"},
        {"imgName":"images/p4.png","biaoti":"运用互补色调扩展空间","jieshao":"“颜料可以创造奇迹。”我们猜你可能很少听到这种说法，但是我们的客座博主Agnes Hammar却相信颜色的魔力。精心挑选的色调，可为小公寓打造出格外宽敞的视觉效果。我们说的不仅是墙——给地板和天花板涂上不同色彩，可以营造出屋中屋的效果。以下是Agnes最爱的创意","anniu":"小空间"},
        {"imgName":"images/p5.png","biaoti":"走进我们最爱的厨房","jieshao":"厨房。我们想说，我们已经拍下了我们最爱的厨房图片。每个人都有自己最爱的产品。下面就是我们最爱的一些产品示例。","anniu":"小空间"},

    ]
    var n=0;
    $scope.jiazai=[];
    $scope.add=function(){
        for(var i=n;i<n+2;i++){
            $scope.jiazai.push($scope.more[i]);
        }
        n+=2;

        if($scope.jiazai.length==8){
            $scope.show1=false;

        }
    }

})

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
