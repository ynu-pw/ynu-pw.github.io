$(function() {

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

    //-----------------인기검색어 롤링영역-----------------------------------------------
    var $rolling = $("#rolling");
    var delay = 3000;
    var duration = 400;

    window.setInterval(function() {
        $rolling.css({
            top:"-100%",
            transitionDuration : duration + "ms"
        });

        window.setTimeout(function() {
            $rolling.append($rolling.children(":first"))
                .removeAttr("style");
        },duration);
    },delay);
    //-----------------------------------------------------------------------------------

    var $menu = $("#s_m_list > li");
    var $menu_a = $("#s_m_list > li > a");
    $menu_a.on("click", function(event) {
        event.preventDefault();
    });
    $menu.children("a").on("click", function() {
        var isOn = $(this).parent().hasClass("m_on");
        if(isOn) {
            $(this).next("ul").slideUp()
                .parent().removeClass("m_on");
        }else {
            $menu.filter(".m_on").removeClass("m_on").children("ul").slideUp();
            $(this).next("ul").slideDown()
                .parent().addClass("m_on");
        }
    });
    //-----------------------사이드메뉴 영역---------------------------------------------
    //-- 푸터--------------------
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