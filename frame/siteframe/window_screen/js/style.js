$(document).ready(function(){
	$(".prev,.next").hover(function(){$(this).stop(true,false).fadeTo("show",0.9);
	},function(){$(this).stop(true,false).fadeTo("show",0.4);});
	$(".banner-box").slide({titCell:".hd ul",mainCell:".bd ul",effect:"fold",interTime:3500,delayTime:500,autoPlay:true,autoPage:true,trigger:"click"});
});


    var scrollPic_02 = new ScrollPicleft();
    scrollPic_02.scrollContId = "ISL_Cont10"; // 内容容器ID""
    scrollPic_02.arrLeftId = "Left_Arrow10"; //左箭头ID
    scrollPic_02.arrRightId = "Right_Arrow10"; //右箭头ID
    scrollPic_02.frameWidth = 980; //显示框宽度
    scrollPic_02.pageWidth = 1; //翻页宽度
    scrollPic_02.speed = 1; //移动速度(单位毫秒，越小越快)
    scrollPic_02.space = 1; //每次移动像素(单位px，越大越快)
    scrollPic_02.autoPlay = true; //自动播放
    scrollPic_02.autoPlayTime = 0.03; //自动播放间隔时间(秒)
    scrollPic_02.initialize(); //初始化				

	/*荣誉资质*/
    var scrollPic_hz = new ScrollPicleft();
    scrollPic_hz.scrollContId = "scollImg_ry"; // 内容容器ID""
    scrollPic_hz.arrLeftId = "LeftID_ry"; //左箭头ID
    scrollPic_hz.arrRightId = "RightID_ry"; //右箭头ID
    scrollPic_hz.frameWidth = 245; //显示框宽度
    scrollPic_hz.pageWidth = 245; //翻页宽度
    scrollPic_hz.speed = 10; //移动速度(单位毫秒，越小越快)
    scrollPic_hz.space = 10; //每次移动像素(单位px，越大越快)
    scrollPic_hz.autoPlay = true; //自动播放
    scrollPic_hz.autoPlayTime = 2; //自动播放间隔时间(秒)
    scrollPic_hz.initialize(); //初始化
	
	
    var scrollPic_02 = new ScrollPicleft();
    scrollPic_02.scrollContId = "ISL_Cont12"; // 内容容器ID""
    scrollPic_02.arrLeftId = "Left_Arrow12"; //左箭头ID
    scrollPic_02.arrRightId = "Right_Arrow12"; //右箭头ID
    scrollPic_02.frameWidth = 840; //显示框宽度
    scrollPic_02.pageWidth = 1; //翻页宽度
    scrollPic_02.speed = 1; //移动速度(单位毫秒，越小越快)
    scrollPic_02.space = 1; //每次移动像素(单位px，越大越快)
    scrollPic_02.autoPlay = true; //自动播放
    scrollPic_02.autoPlayTime = 0.03; //自动播放间隔时间(秒)
    scrollPic_02.initialize(); //初始化				


 var CheckIndex = "0";
    var SwichID = "#ProductGroup";
    $(SwichID).find("#chk" + CheckIndex).addClass("tab_menu3");
    $(SwichID).find("#shk" + CheckIndex).show();

    function ShowCheckCP(src) {
        var ob = $(src);
        ob.parent('li').find('a').attr('href', ob.attr('href'));
        $(src).parent('span').children(".p_name").removeClass("tab_menu3");
        $(src).addClass("tab_menu3");
        var Index = $(src).attr("id");
        
        Index = Index.substring(3, Index.length);
        var ShowIndex = "#shk" + Index;
        $(src).parent().parent().parent().children(".pr_list").hide();
        $(src).parent().parent().parent().find(ShowIndex).show();
    }