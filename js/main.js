$(document).ready(function(){    

    //
    let n = 0;

    $(".header .menu_box").click(function(){
        //console.log($(window).height());
        
        //$(this).addClass("ham");  
        //prepend() 앞에 요소의 안쪽 앞에 마크업태그를 추가      
        
        if(n==0){
            //console.log(n);
            //먼저 remove처리, 클릭시 menuback 지속 발생하는것을 방지 
            $(".menuback").remove(); 
            $(this).prepend("<div class='menuback'></div>");  
            $(".menuback").css({
                "height":$(window).height()     // 윈도우 높이값을 가져와라
            });
            n=1;
            console.log("1="+n);
        } else {
            //console.log(n);
            $(".menuback").addClass("move");
            n=0;
            console.log("0="+n);
        }        
        return false;
        
    });



    //scroll header fixed
    $(window).scroll(function() {    
        let scroll = $(window).scrollTop();
         //console.log(scroll);
        if (scroll >= 50) {
            //console.log('a');
            $(".header").addClass("stiky");
        } else {
            //console.log('a');
            $(".header").removeClass("stiky");
        }
    });

    //상단으로 
    $(".to_top > a").click(function(){
        $("html,body").animate({
            scrollTop: 0
        },1000);

    });
    //shop 플로팅 배너
    $(window).scroll(function(){        
        let scroll2 = $(window).scrollTop();
        let _height = $(document).height() - $(window).height() - $("footer").outerHeight();
        if (scroll2 >= _height) {
            $(".shop").addClass("stiky");
        } else {
            $(".shop").removeClass("stiky");
        }
    });

});

