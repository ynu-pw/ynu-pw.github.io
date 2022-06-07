//  $(function() {
window.addEventListener("load", function () {
    var $sec = $(".sec");
    //var secHeight = $(".sec").outerHeight();
    var secScrollTop = [];
    var dist = 100;
    var extraValue = -120;

    function hideSec(sec) {
        sec.css("opacity", 0);

        if(sec.hasClass("bottom"))
        sec.css({transform:"translateY("+dist+"px)"});
        else if(sec.hasClass("left"))
        sec.css({transform:"translateX("+dist+"px)"});
    }

    $sec.each(function() {
        var $this = $(this);
        hideSec($this);
        var scrollTop = $this.offset().top + $this.outerHeight() + extraValue;
        secScrollTop.push(scrollTop);
        console.log(secScrollTop);
    });

    $(window).on("scroll", function() {
        
        var scrollTop = $(window).scrollTop() + $(window).height();
        secScrollTop.forEach(function(pos, index) {
            if(scrollTop >= pos) {
                $sec.eq(index).removeAttr("style");
            }
        });
    });
});

