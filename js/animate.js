(function($) { 
    $(".shaitu_ul_border ul li a").live('click',function(event) {
       $(this).parent().parent().parent().hide();
      $('.shaitubtn_ul').children('li').removeClass('red');
    });
    $(".shaitubtn_ul li a").live('click',function(event) {
        $(this).parent().parent().siblings('.shaitu_ul_border').show();
        var src = $(this).children('img').attr("src");
        var srcList = src.split("!");   
        var srcListName = srcList[1].split(".");
        $(this).parent().parent().siblings('.shaitu_ul_border').find("img").attr("src",srcList[0]+"!middle."+srcListName[1]);
    });
    $(".shaitubtn_ul").each(function(index, val) {
        if($(this).children('li').length == 0){
            $(this).parent().parent().parent().hide();
        }
        if($(this).children('li').length == 1){
            $(this).siblings('.shaitu_ul_border').find('.arrowLeft').hide();
            $(this).siblings('.shaitu_ul_border').find('.arrowRight').hide();
        }
    });
    $(".arrowRight").live('click', function(event) {
        var s = $(this).parent().siblings('.shaitubtn_ul').children('li').length;
        var index1 = 0;
        var src;
        var srcList = "";
        var srcListName = "";
        //得到当前的下标 
        $(this).parent().siblings('.shaitubtn_ul').children('li').each(function(index, val) {
            if($(this).hasClass("red")){
                index1 = $(this).index()+1;
            }
        });

        //如果最后一张
        if(s == index1){
            $(this).parent().siblings('.shaitubtn_ul').children('li').removeClass('red');
            $(this).parent().siblings('.shaitubtn_ul').children('li').eq(0).addClass('red');
            src = $(this).parent().siblings('.shaitubtn_ul').children('li').eq(0).find("img").attr("src");
            srcList = src.split("!");   
            srcListName = srcList[1].split(".");
            $(this).siblings('.shaitu_ul').find("img").attr("src",srcList[0]+"!middle."+srcListName[1]);
            index1 = 0;
        }

        //红框移动状态
        $(this).parent().siblings('.shaitubtn_ul').children('li').removeClass('red');
        $(this).parent().siblings('.shaitubtn_ul').children('li').eq(index1).addClass('red');
        //图片移动状态
        src = $(this).parent().siblings('.shaitubtn_ul').children('li').eq(index1).find("img").attr("src");
        srcList = src.split("!");   
        srcListName = srcList[1].split(".");
        $(this).siblings('.shaitu_ul').find("img").attr("src",srcList[0]+"!middle."+srcListName[1]);
    });
    $(".arrowLeft").live('click', function(event) {
        var s = $(this).parent().siblings('.shaitubtn_ul').children('li').length;
        var index1 = 0;
        var src;
        var srcList = "";
        var srcListName = "";
        //得到当前的下标
        $(this).parent().siblings('.shaitubtn_ul').children('li').each(function(index, val) {
            if($(this).hasClass("red")){
                index1 = $(this).index()-1;
            }
        });

        //如果第一张
        if(index1 == 0){
            $(this).parent().siblings('.shaitubtn_ul').children('li').removeClass('red');
            $(this).parent().siblings('.shaitubtn_ul').children('li').eq(-s).addClass('red');
            src = $(this).parent().siblings('.shaitubtn_ul').children('li').eq(-s).find("img").attr("src");
            srcList = src.split("!");   
            srcListName = srcList[1].split(".");
            $(this).siblings('.shaitu_ul').find("img").attr("src",srcList[0]+"!middle."+srcListName[1]);
            index1 = -s;
        }

        //红框移动状态
        $(this).parent().siblings('.shaitubtn_ul').children('li').removeClass('red');
        $(this).parent().siblings('.shaitubtn_ul').children('li').eq(index1).addClass('red');
        //图片移动状态
        src = $(this).parent().siblings('.shaitubtn_ul').children('li').eq(index1).find("img").attr("src");
        srcList = src.split("!");   
        srcListName = srcList[1].split(".");
        $(this).siblings('.shaitu_ul').find("img").attr("src",srcList[0]+"!middle."+srcListName[1]);
    });
    $(".shaitubtn_li").live('click',function(event) {
        var src = $(this).find('img').attr("src");
        var index = $(this).index();
        // $(this).parent().siblings('.shaitu_ul_border').find("img").attr("src",src);
        $(this).parent().children('li').removeClass('red');
        $(this).parent().children('li').eq(index).addClass('red');
    });
})(jQ);