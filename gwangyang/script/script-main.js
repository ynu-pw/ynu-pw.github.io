$(function(){

    //--------------------------헤더 네비영역-----------------------------------------

    var $nav_menu = $("#nav_wrap > ul > li");
    // var $nav = $("#nav_wrap");
    var $nav_menu_a = $("#nav_wrap > ul > li > a");
    // var $subs = $(".sub");
    // var $sub1_menu = $("#sub1_menu");
    // var $sub1 = $("#sub1");
    
     /* $nav_menu.on("click", function() {
         if($(this).find(".sub").hasClass("active")) {
             $(this).find(".sub").fadeOut().removeClass("active");
         }else {
             $nav_menu.find(".sub").fadeOut().removeClass("active");
             $(this).find(".sub").fadeIn()
                .addClass("active");
         }
     }); */
     $nav_menu.on('mouseover',function(){
        $(this).find('.sub').stop(true).slideDown();
    })
    .on('mouseout',function(){
        $(this).find('.sub').stop(true).slideUp();
    });


    // --------------------------탑메인슬라이드영역-----------------------------------

    var $slide = $("#main_ban_wrap");
    var $container = $("#main_ban");
    var delay = 3000;
    var duration = 400;
    var timerId = 0;
    var photoIndex = 0;

    var $bullets = $("<ul></ul>").attr("id","bullets").appendTo($container);
    $slide.children().each(function() {
        var bullet = $("<a></a>").attr("href","#");
        $("<li></li>").append(bullet).appendTo($bullets);
    });

    var $bulletList = $bullets.find("a");
    $bulletList.eq(photoIndex).addClass("b_on");

    function slideImage() {
        photoIndex++;
        if(photoIndex == $bulletList.length) photoIndex = 0;
        $bulletList.removeClass("b_on")
                    .eq(photoIndex).addClass("b_on");
        
        $slide.animate({left:"-100%"}, duration, function() {
            $slide.removeAttr("style")
                    .children(":first").appendTo($slide);
        });
    }
    timerId = window.setInterval(slideImage,delay);

    $bulletList.on("click", function(event) {
        event.preventDefault();

        var clickedIndex = $bulletList.index(this);
        var step = clickedIndex - photoIndex;

        if(step == 0) return;
        window.clearInterval(timerId);
        photoIndex = clickedIndex;
        $bulletList.removeClass("b_on").eq(photoIndex).addClass("b_on");
        timerId = window.setInterval(slideImage, delay);

        if(step > 0) {
            $slide.animate({left:step*(-100)+"%"}, duration, function() {
                $slide.removeAttr("style")
                        .children(":lt(" + step + ")").appendTo($slide)
            });
        }else {
            $slide.children(":gt("+(step-1)+")").prependTo($slide);
            $slide.css({left:step*(100)+"%"}).animate({left:0}, duration);
        }
    });

    //-----------------------공지사항 탭메뉴영역------------------------------

    var $ntc_tab_btn = $("#ntc_btn_li > li");
    var $ntc_tab_btn_a = $("#ntc_btn_li > li > a");
    var $ntc_tab_box = $(".tb_box");

    $ntc_tab_btn_a.on("click", function(event) {
        event.preventDefault();
    });
    $ntc_tab_btn.on("click", function() {
        var $this = $(this);

        if ($this.hasClass("on")) {
            console.log("This(" + $this.html()+") ntc_btn is already active");
        return;
        }
        console.log("Activate the" +$this.html()+"ntc_btn.")

        $this.addClass("on")
        $this.siblings().removeClass("on");

        var targetSelector = $this.data("target");
        $ntc_tab_box.removeClass("on")
                    .filter(targetSelector)
                    .addClass("on");
    });

    //-------------------뉴스 영역------------------------------------------------
    var $n_slide = $("#news_wrap");
    var n_delay = 3000;
    var n_duration = 500;

    function newsNextSlide() {
        $n_slide.animate({left:"-100%"}, n_duration, function() {
            $n_slide.removeAttr("style")
                .children(":first").appendTo($n_slide);
        }); 
    }
    function newsPrevSlide() {
        $n_slide.prepend($n_slide.children(":last"));
        $n_slide.css("left", "-100%");
        $n_slide.animate({left:0}, n_duration);
    }
    var n_timerId = window.setInterval(newsNextSlide, n_delay);
    var $n_next = $("#n_next");
    var $n_prev = $("#n_prev");
    var $n_pause = $("#n_pause > a");
    $n_next.on("click", function(event) {
        event.preventDefault();
        if($n_slide.is("animated")) return;

        window.clearInterval(n_timerId);
        newsNextSlide();
        n_timerId = window.setInterval(newsNextSlide, n_delay);
    });
    $n_prev.on("click", function(event) {
        event.preventDefault();
        if($n_slide.is(":animated"))return;
        window.clearInterval(n_timerId);
        newsPrevSlide();
        n_timerId = window.setInterval(newsNextSlide, n_delay);
    });
    $n_pause.on("click", function(event) {
        event.preventDefault();
        if($(this).hasClass("pause_on")) {
            $(this).removeClass("pause_on")
            n_timerId = window.setInterval(newsNextSlide, n_delay);
        }else {
            window.clearInterval(n_timerId);
           $(this).addClass("pause_on")
       }
    }
    );
    //------------------알리미 영역----------------------------------------------
    var $a_slide = $("#al_list");
    var a_delay = 3000;
    var a_duration = 400;

    function alNextSlide() {
        $a_slide.animate({left:"-100%"}, a_duration, function() {
            $a_slide.removeAttr("style")
                .children(":first").appendTo($a_slide);
        });
    }
    function alPrevSlide() {
        $a_slide.prepend($a_slide.children(":last"));
        $a_slide.css("left","-100%");
        $a_slide.animate({left:0}, a_duration);
    }
    var a_timerId = window.setInterval(alNextSlide, a_delay);
    var $a_next = $("#next");
    var $a_prev = $("#prev");
    var $a_pause = $("#pause > a");
    $a_next.on("click", function(event) {
        event.preventDefault();
        if($a_slide.is("animated")) return;
        window.clearInterval(a_timerId);
        alNextSlide();
        a_timerId = window.setInterval(alNextSlide, a_delay);
    });
    $a_prev.on("click", function(event) {
        event.preventDefault();
        if($a_slide.is("animated"))return;
        window.clearInterval(a_timerId);
        alPrevSlide();
        a_timerId = window.setInterval(alNextSlide, a_delay);
    });
    $a_pause.on("click", function(event) {
        event.preventDefault();
        if($(this).hasClass("pause_on1")) {
            $(this).removeClass("pause_on1")
            a_timerId = window.setInterval(alNextSlide, a_delay);
        }else {
            window.clearInterval(a_timerId);
            $(this).addClass("pause_on1");
        }
    });

    //----------------------문화행사 영역-----------------------------
    var $c_slide = $("#cul_list");
    var c_delay = 3000;
    var c_duration = 500;

    function culNextSlide() {
        $c_slide.animate({left:"-100%"}, c_duration, function() {
            $c_slide.removeAttr("style")
                .children(":first").appendTo($c_slide);
        });
    }
    function culPrevSlide() {
        $c_slide.prepend($c_slide.children(":last"));
        $c_slide.css("left","-100%");
        $c_slide.animate({left:0}, c_duration);
    }
    var c_timerId = window.setInterval(culNextSlide, c_delay);
    var $c_next = $("#next1");
    var $c_prev = $("#prev1");
    var $c_pause = $("#pause1 > a");
    $c_next.on("click", function(event) {
        event.preventDefault();
        if($c_slide.is("animated")) return;
        window.clearInterval(c_timerId);
        culNextSlide();
        c_timerId = window.setInterval(culNextSlide, c_delay);
    });
    $c_prev.on("click", function(event) {
        event.preventDefault();
        if($c_slide.is("animated"))return;
        window.clearInterval(a_timerId);
        culPrevSlide();
        c_timerId = window.setInterval(culNextSlide, c_delay);
    });
    $c_pause.on("click", function(event) {
        event.preventDefault();
        if($(this).hasClass("pause_on2")) {
            $(this).removeClass("pause_on2")
            c_timerId = window.setInterval(culNextSlide, c_delay);
        }else {
            window.clearInterval(c_timerId);
            $(this).addClass("pause_on2");
        }
    });

    //------------------분야별정보 탭메뉴영역-------------------------------------
    var $in_tab_btn = $("#tab-buttons > li");
    var $in_tab_btn_a = $("#tab-buttons > li > a");
    var $in_tab_box = $(".info_tb_box");

    $in_tab_btn_a.on("click", function(event) {
        event.preventDefault();
    });
    $in_tab_btn.on("click", function() {
        if ($(this).hasClass("on")) {
        return;
        }
        $(this).addClass("on")
        $(this).siblings().removeClass("on");

        var in_target = $(this).data("target");
        $in_tab_box.removeClass("on")
                    .filter(in_target)
                    .addClass("on");
    });
    
    //---------------------푸터 배너모음 슬라이드 영역----------------------
    var $ft_slide = $("#ftn_wrap_list");
    var $ft_container = $("#ftn_wrap");
    var f_delay = 2000;
    var f_duration = 400;

    function nextFtSlide() {
        $ft_slide.animate({left:"-220px"}, f_duration, function() {
            $ft_slide.removeAttr("style")
                    .children(":first").appendTo($ft_slide)
        });
    }
    function prevFtSlide() {
        $ft_slide.prepend($ft_slide.children(":last"));
        $ft_slide.css("left","-220px");
        $ft_slide.animate({left:0}, f_duration);
    }
    var ft_timerId = window.setInterval(nextFtSlide, f_delay);

    $("#ft_next").on("click", function() {
        if($ft_slide. is(":animated"))return;
        window.clearInterval(ft_timerId);
        nextFtSlide();
        ft_timerId = window.setInterval(nextFtSlide, f_delay);
    });
    $("#ft_prev").on("click", function() {
        if($ft_slide.is(":animated"))return;
        window.clearInterval(ft_timerId);
        prevFtSlide();
        ft_timerId = window.setInterval(nextFtSlide, f_delay);
    });
});
