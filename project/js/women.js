/**
 * Created by Administrator on 2016/10/20.
 */
/**
 * Created by HUCC on 2016/10/19.
 */
//修改缓动框架
//能够给任意对象 同时修改多个属性
function animate(obj, json, fn) {
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    //k  json[k]

    obj.timer = setInterval(function () {
        //获取当前值
        var flag = true;//大家的动画是不是都到了重点
        for (var k in json) {
            if (k == "opacity") {
                //1. parseInt 改成parseFloat
                //2. 把leader和target放大100倍
                //3. 设置的时候，除以100并且去掉px

                //难点：小数做不了动画
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);//auto
                leader = parseFloat(leader) || 0;//如果没有这个样式，默认给0
                //leader使用getStyle是带单位的

                //让目标值扩大一百倍去做动画
                target = target * 100;
                leader = leader * 100;


                var step = (target - leader) / 40;//最少跑1px
                if (step > 0) {
                    step = Math.ceil(step);
                } else {
                    step = Math.floor(step);
                }
                leader = leader + step;
                obj.style[attr] = leader / 100;
                obj.style["filter"] = "alpha(opacity=" + leader + ")";

                //等所有的属性都到了终点的时候才清除定时器
                if (leader != target) {
                    flag = false;//如果发现还没有到终点，赶紧吼一嗓子
                }
            }
            else if(k === "zIndex"){
                //如果是zIndex属性，就直接设置
                obj.style["zIndex"] = json[k];
            }
            else if(k === "transform"){
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);//auto
                leader = parseInt(leader) || 0;//如果没有这个样式，默认给0
                //leader使用getStyle是带单位的
                var step = (target - leader) / 80;//最少跑1px
                if (step > 0) {
                    step = Math.ceil(step);
                } else {
                    step = Math.floor(step);
                }
                leader = leader + step;
                obj.style[attr] = leader + "px";//px不能丢

                //等所有的属性都到了终点的时候才清除定时器
                if (leader != target) {
                    flag = false;//如果发现还没有到终点，赶紧吼一嗓子
                }
            }
            else {
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);//auto
                leader = parseInt(leader) || 0;//如果没有这个样式，默认给0
                //leader使用getStyle是带单位的
                var step = (target - leader) / 80;//最少跑1px
                if (step > 0) {
                    step = Math.ceil(step);
                } else {
                    step = Math.floor(step);
                }
                leader = leader + step;
                obj.style[attr] = leader + "px";//px不能丢

                //等所有的属性都到了终点的时候才清除定时器
                if (leader != target) {
                    flag = false;//如果发现还没有到终点，赶紧吼一嗓子
                }
            }


        }

        //如果这个时候flag是true，说明假设是成立的
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }

        }

    }, 15);


}

//获取指定元素指定的样式
function getStyle(obj, attr) {
    //能力检测
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

function client() {

    return {
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}

function scroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}



// 第一部分js

// 配置单1
var datas = [
    {
        "top": 50,
        "left": 50,
        "zIndex":5

    },//0
    {
        "top": 100,
        "left": 100,
        "zIndex":3
    },//1
    {
        "top": 200,
        "left": 200,
        "zIndex":2
    },//2
    {
        top: 300,
        left: 300,
        "zIndex":1
    },//3
    {
        "top": 400,
        "left": 400,
        "zIndex":6
    },//4
    {
        "top": 500,
        "left": 500,
        "zIndex":4
    }//5
];
// 配置单2
var datas1 = [
    {
        "top": 150,
        "left": 164,
        "zIndex":1

    },//0
    {
        "top": 100,
        "left": 780,
        "zIndex":3
    },//1
    {
        "top": 352,
        "left": 217,
        "zIndex":4
    },//2
    {
        top: 416,
        left: 782,
        "zIndex":4
    },//3
    {
        "top": 372,
        "left": 481,
        "zIndex":6
    },//4
    {
        "top": 98,
        "left": 510,
        "zIndex":4
    }//5
];
// 找对象
var box = document.getElementById("jian5");
var part_top = box.children[2];
var ul = part_top.children[0];
var lis = ul.children;


// 2 页面滚动到此位置需要执行的动画
// window.onscroll = function () {
//var scrollHeight = scroll().scrollTop;
//var part_topHeight = part_top.offsetTop;
//if(scrollHeight > part_topHeight){
for(var i = 0; i < lis.length; i++){
    var li  = lis[i];
    var data = datas[i];
    animate(li,data, function () {
        for(var i = 0; i < lis.length; i++){
            var li1 = lis[i];
            var data1 = datas1[i];
            animate(li1,data1, function () {
                for(var i = 0 ; i < lis.length; i++){
                    lis[i].className = "li"+i;
                }
            });
        }
    });

    //}

}

//}


//第三部分内容
$(function () {
    // 找 第一部分里面的li
    var i = 0;
    var j = 0;
    var dis = $(".part_top").css("opacity");
    $(".part_top > ul > li").click(function () {
        var idx = $(this).index();
        console.log(1);
        i++;
        $(this).parent().parent().css({
            "background":"#000",
            "opacity":"0.3"}
        );
        $(".part_center").fadeToggle(1000).find("li").eq(idx).css("zIndex", i)
    })
    $(".part_center > ul > li").click(function () {
        var idx = $(this).index();
        if (idx == 5) {
            j = 0;
            $(".part_center > ul > li").eq(0).css("zIndex",1).siblings().css("zIndex",0)
        }
        j++;
        $(this).next().css("zIndex", j);

    })
    $(".butt").click(function () {

        $(".part_center").fadeOut(1000);
        $(".part_top ").css( "background","#2f4f4f")
        $(".part_top ").animate({
            "opacity":"1"
        },1000)
    })


})

