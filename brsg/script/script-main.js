$(function() {
    
    //----------------------베스트아이템영역----------------------------------
    var $Bslide = $("#best_slide_wrap");
    var $Bcontainer = $(".best_slide_container"); 
    var delay = 2000;
    var duration = 400;

    // 다음이미지
    function nextImageSlide() {
        $Bslide.animate({left:"-33.333%",
                        }, duration, function() {

                        $Bslide.removeAttr("style")
                                .children(":first").appendTo($Bslide)
                        });
    }
    // 이전이미지
    function prevImageSlide() {
        $Bslide.prepend($Bslide.children(":last"));
        $Bslide.css("left","-33.333%");

        $Bslide.animate({left: 0}, duration);
    }

    var timerId = window.setInterval(nextImageSlide, delay);

    // 마우스멈춤
    $Bcontainer.hover(
        function() {
            window.clearInterval(timerId);
        },
        function() {
            timerId = window.setInterval(nextImageSlide, delay);
        }
    )
    // 이전,다음버튼 이동
        $("#next").on("click", function() {
            if($Bslide.is(":animated"))return;

            window.clearInterval(timerId);

            nextImageSlide();

            timerId = window.setInterval(nextImageSlide, delay);
        });

        $("#prev").on("click", function() {
            if($Bslide.is(":animated")) return;
            window.clearInterval(timerId);
            prevImageSlide();
            timerId = window.setInterval(nextImageSlide, delay);
        });
   
        //----------------------메인 슬라이드 영역------------------------------
        $(function() {

            var $Mslide = $("#slide_wrap");
            var $Mcontainer = $(".slide_container");
            /* var $Mbcontainer = $(".bullet_container"); */
            var mdelay = 3000;
            var mduration = 400;
            var photoIndex = 0;
            var MtimerId = 0;
            /* var $bulletList = $(".slide_bullet > li > a"); */
            var $bullets = $("<ul></ul>").attr("class","slide_bullet").appendTo($Mcontainer);
            $Mslide.children().each(function(){
                var bullet = $("<a></a>").attr("href","#");
                $("<li></li>").append(bullet).appendTo($bullets);

            });
                var $bulletList = $bullets.find("a");
                $bulletList.eq(photoIndex).addClass("on");

            function MImageSlide() {
 
                photoIndex++;
                if(photoIndex == $Mslide.children().length) photoIndex = 0;
                            
                $Mslide.animate({left:"-75%",
                                }, mduration, function() {

                                    $Mslide.removeAttr("style")
                                            .children(":first").appendTo($Mslide)
                                });

                                $bulletList.removeClass("on")
                                        .eq(photoIndex).addClass("on");
                                        
                }
                MtimerId = window.setInterval(MImageSlide, mdelay);
            
            /* $Mslide.hover(
                function() {
                    window.clearInterval(MtimerId);
                },
                function() {
                    MtimerId = window.setInterval(MImageSlide, mdelay);
                }
            ) */
            $bulletList.on("click", function(event) {
                event.preventDefault();
                var clickedIndex = $bulletList.index(this);
                var step = clickedIndex - photoIndex;
                
                if(step == 0) return;
                window.clearInterval(MtimerId);
                photoIndex = clickedIndex;
                $bulletList.removeClass("on").eq(photoIndex).addClass("on");
                MtimerId = window.setInterval(MImageSlide, mdelay);
                
                if(step > 0) {
                    
                    $Mslide.animate({left:step*(-75)+"%"}, mduration, function() {
                        $Mslide.removeAttr("style")
                        .children(":lt("+step+")").appendTo($Mslide)
                    });
                }else {
                    
                    $Mslide.children(":gt("+(step-1)+")").prependTo($Mslide);
                    $Mslide.css({left:step*(75)+"%"}).animate({left:"-25%"}, mduration);
                }
            });
        });
        //----------------------실질적 가이드 영역------------------------------
    
        var $Gslide = $("#guide_wrap");
        var $Gcontainer = $("#guide_container");
        var duration = 400;
        var delay = 2000;
        
        function guideImageSlide () {
            $Gslide.animate({
                left:"-25%"
            }, duration, function() {
                $Gslide.removeAttr("style")
                .children(":first").appendTo($Gslide)
            });
        }
        

        var GtimerId = window.setInterval(guideImageSlide, delay);
        $Gcontainer.hover(
            function() {
                window.clearInterval(GtimerId)
            },
            function() {
                
                GtimerId = window.setInterval(guideImageSlide, delay);
            }
        )

        //-------------------신상품영역----------------------------------------------

        var $new1 = $("#product1");
        var $new1_in = $("#product1_h");
        $new1.hover(
            function(){ 
                if($new1_in.hasClass("active")) {
                    $new1_in.removeClass("active")
                }else {
                    $new1_in.addClass("active")
                }
            }
        )
        var $new2 = $("#product2");    
        var $new2_in = $("#product2_h");
        $new2.hover(
            function(){ 
                if($new2_in.hasClass("active")) {
                    $new2_in.removeClass("active")
                }else {
                    $new2_in.addClass("active")
                }
            }
        )
        var $new3 = $("#product3");    
        var $new3_in = $("#product3_h");
        $new3.hover(
            function(){ 
                if($new3_in.hasClass("active")) {
                    $new3_in.removeClass("active")
                }else {
                    $new3_in.addClass("active")
                }
            }
        )
        var $new4 = $("#product4");    
        var $new4_in = $("#product4_h");
        $new4.hover(
            function(){ 
                if($new4_in.hasClass("active")) {
                    $new4_in.removeClass("active")
                }else {
                    $new4_in.addClass("active")
                }
            }
        )
        var $new5 = $("#product5");    
        var $new5_in = $("#product5_h");
        $new5.hover(
            function(){ 
                if($new5_in.hasClass("active")) {
                    $new5_in.removeClass("active")
                }else {
                    $new5_in.addClass("active")
                }
            }
        )
        var $new6 = $("#product6");    
        var $new6_in = $("#product6_h");
        $new6.hover(
            function(){ 
                if($new6_in.hasClass("active")) {
                    $new6_in.removeClass("active")
                }else {
                    $new6_in.addClass("active")
                }
            }
        )
        var $new7 = $("#product7");    
        var $new7_in = $("#product7_h");
        $new7.hover(
            function(){ 
                if($new7_in.hasClass("active")) {
                    $new7_in.removeClass("active")
                }else {
                    $new7_in.addClass("active")
                }
            }
        )
        var $new8 = $("#product8");    
        var $new8_in = $("#product8_h");
        $new8.hover(
            function(){ 
                if($new8_in.hasClass("active")) {
                    $new8_in.removeClass("active")
                }else {
                    $new8_in.addClass("active")
                }
            }
        )
        var $new9 = $("#product9");    
        var $new9_in = $("#product9_h");
        $new9.hover(
            function(){ 
                if($new9_in.hasClass("active")) {
                    $new9_in.removeClass("active")
                }else {
                    $new9_in.addClass("active")
                }
            }
        )
    });

   