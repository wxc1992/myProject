/**
 * Created by Administrator on 2016/10/20.
 */
$(document).ready(function() {

    //背景图轮播器
    var banner_index = 0;  //计数器
    setInterval(function () {
        if (banner_index >= $('.main-banner .cycle').length) {
            banner_index = 0;
            $('.main-banner .cycle').css('zIndex', '-2');
        }
        $('.main-banner .cycle').removeClass('tool');
        $('.main-banner .cycle').eq(banner_index).css('zIndex', banner_index - 1).addClass('tool');
        banner_index++;
    }, 5000);


    $('.about_us li').hover(function () {
        $(this).find('.screen').fadeIn();
    }, function () {
        $(this).find('.screen').fadeOut();
    });

    /*logo淡入*/
    $('#banner .inner').animate({
        top: '200px',
        opacity: 1
    }, 1500);

    //更多跳转
    $('#banner .inner i').click(function () {
        $('html,body').animate({
            'scrollTop': '800px'
        }, 1000);
    });


    //延迟加载
    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();
        var client = $(window).height();


        var $about = $('.main_a .about');
        if (scrollTop + client > $about.offset().top) {
            $about.animate({
                opacity: 1,
                marginTop: '300px'
            }, 1500);
        }


        var $brand = $('.main_b .brand');
        if (scrollTop + client > $brand.offset().top + $brand.outerHeight() / 2) {
            $brand.animate({
                opacity:1
            },3000);
        }


    });


    //main_b.brand 图片经过特效
    $('.main_b .brand').find('.famous').hover(function () {
        $(this).css('zIndex', 1);
    }, function () {
        $(this).css('zIndex', 0);
    });


    $('.main_b .brand').find('.famous').on('click', function () {

        $('.main_b .source>h3').css({
            left: '0px',
            opacity: 0
        }).animate({
            left: '100px',
            opacity: 1
        }, 1000);
        $('.main_b .source>p').css({
            left: '0px',
            opacity: 0
        }).animate({
            left: '100px',
            opacity: 1
        }, 1000);
    });


    $(".main_c .down li").hover(function () {
        $(this).children('.screen').fadeIn();
        $(this).children('h3').stop().animate({
            opacity: 1,
            top: '40px'
        });

    }, function () {
        $(this).children('.screen').stop().fadeOut();
        $(this).children('h3').stop().animate({
            opacity: 0,
            top: '0px'
        });
    });

    var date = [
        {h3:'MaoHuiHui',span:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        {h3:'SunJiaJia',span:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        {h3:'LiuXie',span:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        {h3:'XieShuMing',span:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        {h3:'DuanPengFei',span:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        {h3:'HuYuan',span:'The tiger in the heart of the rose'}

    ];


    $(".main_c .down").on('click', "li",function(){
        //console.log($(this).parent().parent().index());
        var index = $(this).index();
        $('.main_c .in h3').fadeOut(500,function(){
            $(this).text(date[index].h3);
        }).fadeIn(500);


        $('.main_c .in span').fadeOut(500,function(){
            $(this).text(date[index].span);
        }).fadeIn(500);


/*        $('.main_c .in h3').;
        $('.main_c .in span').text(date[index].span);

        $('.main_c .in h3').fadeIn();
        $('.main_c .in span').fadeIn();*/

    });




    /*回到顶部*/
    $('.back-to-top').click(function(){
        $('html,body').animate({
            'scrollTop':0
        });
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > $(window).height()){
            $('.back-to-top').fadeIn();
        }else{
            $('.back-to-top').fadeOut();
        }

    });
    $(window).trigger('scroll');





});
