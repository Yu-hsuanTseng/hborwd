
$(document).ready(function(){
    $(".Get").mouseenter(function(){
        $(this).addClass('Black');
    });
    $(".Get").mouseleave(function(){
        $(this).removeClass('Black');
    });

    $(".Sign").mouseenter(function(){
        $(this).addClass('SignHover');
    });
    $(".Sign").mouseleave(function(){
        $(this).removeClass('SignHover');
    });

    $(".SignGet").mouseenter(function(){
        $(this).addClass('SignHover');
    });
    $(".SignGet").mouseleave(function(){
        $(this).removeClass('SignHover');
    });

    $(".Buttom").mouseenter(function(){
        $(this).addClass('LogHover');
    });
    $(".Buttom").mouseleave(function(){
        $(this).removeClass('LogHover');
    });

    $(".Social").mouseenter(function(){
        $(this).addClass('SoHover');
    });
    $(".Social").mouseleave(function(){
        $(this).removeClass('SoHover');
    });

    $(".STREAM").mouseenter(function(){
        $(this).addClass('STHover');
    });
    $(".STREAM").mouseleave(function(){
        $(this).removeClass('STHover');
    });

    $(".FloatHB_in > ul >li").mouseenter(function(){
        $(this).addClass('LiHover');
    });
    $(".FloatHB_in > ul >li").mouseleave(function(){
        $(this).removeClass('LiHover');
    });
});


/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

