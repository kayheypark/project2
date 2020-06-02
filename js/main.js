$(document).ready(function () {

/*주메뉴*/
 $(".gnb>ul>li").bind("mouseover focus",function(){
    $(".header_wrap").addClass("on");
 });

 $(".gnb>ul>li").bind("mouseleave blur",function(){
    $(".header_wrap").removeClass("on");
 });


/*프로모션 배너*/
var $bnnNum=0;
var $lastNum=$(".banner_frame>section").size()-1;
var $banner_w=$("body>section").width();

//리사이즈
$(window).resize(function(){
    $banner_w=$("body>section").width();
});

//다음
$(".next").click(function(){
    $bnnNum++;
    if($bnnNum>$lastNum) $bnnNum=0;
    $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
        if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
            $(this).siblings().find("a").addClass("wbtn");
        }else{
            $(this).siblings().find("a").removeClass("wbtn");
        }
        $(".banner_roll a").removeClass("on");
        $(".banner_roll a").eq($bnnNum).addClass("on");
    });
});

//이전
$(".prev").click(function(){
    $bnnNum--;
    if($bnnNum<0) $bnnNum=$lastNum;
    $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
        if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
            $(this).siblings().find("a").addClass("wbtn");
        }else{
            $(this).siblings().find("a").removeClass("wbtn");
        }
        $(".banner_roll a").removeClass("on");
        $(".banner_roll a").eq($bnnNum).addClass("on");
    });
});

var $banner=$(".banner_roll a").click(function(){
    $bnnNum=$banner.index(this);
    $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
        if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
            $(this).siblings().find("a").addClass("wbtn");
        }else{
            $(this).siblings().find("a").removeClass("wbtn");
        }
        $(".banner_roll a").removeClass("on");
        $(".banner_roll a").eq($bnnNum).addClass("on");
    });
});

/*오토배너*/
function autoBanner(){
    //다음 쿼리 그대로 가져옴
    $bnnNum++;
    if($bnnNum>$lastNum) $bnnNum=0;
    $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
        if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
            $(this).siblings().find("a").addClass("wbtn");
        }else{
            $(this).siblings().find("a").removeClass("wbtn");
        }
        $(".banner_roll a").removeClass("on");
        $(".banner_roll a").eq($bnnNum).addClass("on");
    });
}

//일정한 시간동안 계속반복
var $autoBnn=setInterval(autoBanner,5000);

/*재생멈춤*/
var flag=true;
$("a.play").click(function(){
    if(flag){
        clearInterval($autoBnn);
        $(this).toggleClass("play pause");
        flag=false;
    }else{
        //꼭 기존의 변수에다가 setInterval을 넣어야함
        $autoBnn=setInterval(autoBanner,1500);
        $(this).toggleClass("play pause");
        flag=true;
    }
});

//모바일 기기의 방향을 전환(가로/세로)할 때 화면의 너비가 달라지는 것에 대비해서 항상 바른 위치에 있도록 애니메이션 적용
$("body>section").bind("orientationchange",function(){
    $banner_w=$("body>section").width();
    $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear");
});

//모바일에서
$("body>section").bind("swipeleft",function(){
    $(".next").trigger("click");
});
$("body>section").bind("swiperight",function(){
    $(".prev").trigger("click");
});





    //appear 이미지 생성
    //<img src="images/appear/appear_00000.png" alt="로그인버튼" />
    //<img src="images/appear/appear_00056.png" alt="로그인버튼" />
    var appear=""
    for(var i=0;i<57;i++){
        //i가 0~9까지는 0000+i
        if (i<10){
            appear += "<img src='images/appear/appear_0000"+i+".png' alt='로그인버튼' />"
        } else {//그외에는 000+i
           appear += "<img src='images/appear/appear_000"+i+".png' alt='로그인버튼' />"
        }
    }
    $("a.appear").html(appear);

    //loop이미지 생성
    var loop=""
    for(var i=0;i<82;i++){
        //i가 0~9까지는 0000+i
        if (i<10){
            loop += "<img src='images/loop/loop_0000"+i+".png' alt='로그인버튼' />"
        } else {//그외에는 000+i
           loop += "<img src='images/loop/loop_000"+i+".png' alt='로그인버튼' />"
        }
    }
    $("a.loop").html(loop);

    //appear 애니메이션 css
    // .appear img {animation: and 2.85s linear 0.1 normal;}
    // .appear img:nth-child(2) {animation: and 2.85s linear 0s 1 normal;}
    // .appear img:nth-child(4) {animation: and 2.85s linear 0.05s 1 normal;}
    // .appear img:nth-child(3) {animation: and 2.85s linear 0.10s 1 normal;}
    // .appear img:nth-child(4) {animation: and 2.85s linear 0.15s 1 normal;}
    // .appear img:nth-child(4) {animation: and 2.85s linear 0.20s 1 normal;}
    // .appear img:nth-child(5) {animation: ani 2.85s linear 2.80s 1 normal;}
    for(var k=0;k<57;k++){
        $(".appear>img").eq(k).css({"animation":"ani 2.85s linear " + 0.05*k + "s 1 normal"});
    }

    //loop 애니메이션
    for(var k=0;k<82;k++){
        $(".loop>img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s infinite normal"});
    }



    //.quick1 img0~19 이미지생성
    var quick1="";
    for(var i=0;i<20;i++){
        if (i<10){
            quick1 += "<img src='images/quick01/quick01_0000"+i+".png' alt='카드등록안내"+i+"'>"
        } else {
            quick1 += "<img src='images/quick01/quick01_000"+i+".png' alt='카드등록안내"+i+"'>"
        }
    }
    $("span.quick1").html(quick1);
    //마우스 올렸을 때
    $("a.q1").hover(function(){
        //애니실행
        for(var k=0;k<20;k++){
            $(".quick1>img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"});
        }
    },function(){
        $(".quick1>img").css("animation","none");

    });



    //.quick2 img0~19 이미지생성
    var quick2="";
    for(var i=0;i<20;i++){
        if (i<10){
            quick2 += "<img src='images/quick02/quick02_0000"+i+".png' alt='카드등록안내"+i+"'>"
        } else {
            quick2 += "<img src='images/quick02/quick02_000"+i+".png' alt='카드등록안내"+i+"'>"
        }
    }
    $("span.quick2").html(quick2);
    //마우스 올렸을 때
    $("a.q2").hover(function(){
        //애니실행
        for(var k=0;k<20;k++){
            $(".quick2>img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"});
        }
    },function(){
        $(".quick2>img").css("animation","none");

    });



    //.quick3 img0~19 이미지생성
    var quick3="";
    for(var i=0;i<20;i++){
        if (i<10){
            quick3 += "<img src='images/quick03/quick03_0000"+i+".png' alt='카드등록안내"+i+"'>"
        } else {
            quick3 += "<img src='images/quick03/quick03_000"+i+".png' alt='카드등록안내"+i+"'>"
        }
    }
    $("span.quick3").html(quick3);
    //마우스 올렸을 때
    $("a.q3").hover(function(){
        //애니실행
        for(var k=0;k<20;k++){
            $(".quick3>img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"});
        }
    },function(){
        $(".quick3>img").css("animation","none");

    });



    //.quick4 img0~19 이미지생성
    var quick4="";
    for(var i=0;i<20;i++){
        if (i<10){
            quick4 += "<img src='images/quick04/quick04_0000"+i+".png' alt='카드등록안내"+i+"'>"
        } else {
            quick4 += "<img src='images/quick04/quick04_000"+i+".png' alt='카드등록안내"+i+"'>"
        }
    }
    $("span.quick4").html(quick4);
    //마우스 올렸을 때
    $("a.q4").hover(function(){
        //애니실행
        for(var k=0;k<20;k++){
            $(".quick4>img").eq(k).css({"animation":"ani 4.1s linear " + 0.05*k + "s 1 normal"});
        }
    },function(){
        $(".quick4>img").css("animation","none");

    });



//컨텐트2 아티클 애니메이션
$(".content2 article").mouseover(function(){
    $(this).addClass("on");
});
$(".content2 article").mouseout(function(){
    $(this).removeClass("on");
});



});// 독레디닫기