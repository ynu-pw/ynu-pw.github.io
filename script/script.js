$(function() {
  // ---------------------- 페이지 스크롤------------------------------
  /* 기본 제거 */
    window.addEventListener("wheel", function(event){
      event.preventDefault();
    }, {passive:false});

    var $html = $("html");
    $html.animate({scrollTop:0});

    $(window).on("wheel", function(event){
      if($html.is(":animated")) return;

      var cntScrollTop = $(window).scrollTop();
      var pageHeight = $(window).height();
      var docHeight = $(document).height();
      var delta = event.originalEvent.deltaY;
      var dist = 0;
      if(delta > 0) {
        
          if(cntScrollTop >= docHeight - pageHeight) return;
          dist = cntScrollTop + pageHeight;

          var over = dist % pageHeight;
          dist -= over;
      }else {

        if(cntScrollTop == 0) return;
        dist = cntScrollTop - pageHeight;

        var over = dist % pageHeight;
        if(over > 0) {
          over = pageHeight - over;
          dist += over;
        }
      }
      $html.animate({scrollTop:dist});
    });
     
    // indicator 영역---------------------------------------------------------------------------------
  $(function(){

    $(window).on("scroll",function(){
      var link = $(".navbar > ul > li > a.dot");
      var top = $(window).scrollTop();

      $(".panel").each(function(){
          var id = $(this).attr("id");
          var height = $(this).height();
          var offset = $(this).offset().top- 150;
          if(top >= offset && top < offset + height) {
              link.removeClass("active");
              
              $(".navbar").find('[data-scroll="'+ id + 
              '"]').addClass("active");
            } 
            
            
      });
    });

    var $menu = $(".navbar > ul > li"),
    $contents = $("section");
        $menu.click(function(x){
          x.preventDefault();
          $(this).addClass('active').siblings().removeClass('active');
          var idx = $(this).index();
          var section = $contents.eq(idx);
          var sectionDistance = section.offset().top;
          
          $('html').stop().animate({
            scrollTop:sectionDistance
          });
        });

  });
    // ----------------web popup-----------------------------------------------------
    
    $("#brsg").click(function(){
        $(".brsg_modal").fadeIn();
      });
      $(".brsg_modal").click(function(){
        $(this).fadeOut();
      });

      $("#gwang").click(function(){
        $(".gwang_modal").fadeIn();
      });
      $(".gwang_modal").click(function(){
        $(this).fadeOut();
      });

      $("#pascu").click(function(){
        $(".pascu_modal").fadeIn();
      });
      $(".pascu_modal").click(function(){
        $(this).fadeOut();
      });
    // -------------------- 그래픽 슬라이드----------------------------------------
      var $slide = $("#artwork");
      var $container = $("#graphic");
      var delay = 3000;
      var duration = 400;

      /* 다음 이미지슬라이드 */
      function nextImageSlide() {
        $slide.animate({left:"-75%"},duration, function(){
            $slide.removeAttr("style")
                  .children(":first").appendTo($slide);
        });
      }
      /* 이전 이미지슬라이드 */
      function prevImageSlide() {
          $slide.prepend($slide.children(":last"));
          $slide.css("left","-75%");
          $slide.animate({left:"-25%"},duration);
      }

      /* 타이머 */
      var timerId = window.setInterval(nextImageSlide,delay); 

      /* 다음버튼 클릭시 */
      $("#next").on("click", function() {
        if($slide.is(":animated")) return;

        window.clearInterval(timerId); /* 타이머해제 */
        nextImageSlide();
        timerId = window.setInterval(nextImageSlide,delay); /* 재등록 */
      });
      /* 이전버튼 클릭시 */
      $("#prev").on("click", function() {
        if($slide.is(":animated")) return;
        window.clearInterval(timerId);
        prevImageSlide();
        timerId = window.setInterval(nextImageSlide, delay);
      });
  });