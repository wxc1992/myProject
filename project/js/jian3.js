/**
 * Created by Administrator on 2016/10/23.
 */

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var bg = document.getElementById("bg");

var lunbo = document.getElementById("lunbo");
var screen = lunbo.children[0];
var ul = screen.children[0];
var ulList = ul.children;
var ol = screen.children[1];
var arr = document.getElementById("arr");
var leftArr = document.getElementById("left");
var rightArr = document.getElementById("right");
var imgWidth = screen.offsetWidth;

//轮播开始
//2.1 动态生成li
for(var i = 0; i < ulList.length; i++){
    var li = document.createElement("li");
    ol.appendChild(li);
    li.innerHTML = i + 1;
}
//2.12获取olList
var olList = ol.children;
olList[0].className = "current"
//2.2 生成一张假图片
var cloneLi = ul.children[0].cloneNode(true);
ul.appendChild(cloneLi);
//3.简单轮播图功能
//3.1给所有的li注册事件
for(var i = 0; i < olList.length; i++){
    var li = olList[i];
    li.index = i;
    li.onmouseover = function () {
        //3.2让当前的li高亮（排他）
        //干掉所有人
        for(var i = 0; i < olList.length; i++){
            olList[i].className = "";
        }
        //复活自己
        this.className = "current";
        //3.3让ul移动
        var idx = this.index;
        var target = -idx * imgWidth;
        animatejian3(ul,target);
//            pic = idx;
//            square = idx;

    }
}
//4.左右焦点功能
//4.1鼠标经过盒子，箭头显示
lunbo.onmouseover = function () {
    arr.style.display = "block";
    //5.2鼠标经过时，暂停轮播
    //clearInterval(timer);
}
//4.2鼠标离开盒子，箭头隐藏
lunbo.onmouseout = function () {
    arr.style.display = "none";
    //5.2鼠标离开时，继续轮播

    //timer = setInterval(function () {
    //    rightArr.click();
    //},1000)
}

//4.3点击右箭头
var pic = 0;
var square = 0;
rightArr.onclick = function () {
    if(pic == ulList.length - 1){
        pic = 0;
        ul.style.left = "0";
    }
    pic++;
    target = - pic * imgWidth;
    console.log(target);

    animatejian3(ul,target);

    //6.1同步点击右箭头
    //先干掉所有小方块样式
    if(square == olList.length - 1){
        square = 0;
    }else{
        square++;
    }
    for(var i = 0; i < olList.length; i++){
        olList[i].className = "";
    }
    //复活小方块样式
    olList[square].className = "current";
}
//4.4点击左箭头
leftArr.onclick = function () {
    if(pic == 0){
        pic = ulList.length - 1;
        ul.style.left = -pic * imgWidth + "px";
    }
    pic--;
    target = -pic * imgWidth;
    animatejian3(ul,target);
}


//轮播结束



//展示区开始
bg.onclick = function () {
    animatejian3(one,0);
    function timer1(){
        animatejian3(two,212);
    }
    setTimeout(timer1,1000);

    function timer2(){
        animatejian3(three,0);
    }
    setTimeout(timer2,500);

    function timer3(){
        animatejian3(four,0);
    }
    setTimeout(timer3,1500);


    function timer4(){
        animatejian3(five,235);
    }
    setTimeout(timer4,2000);

    function timer5(){
        animatejian3(six,424);
    }
    setTimeout(timer5,2500);

    function timer6(){
        animatejian3(seven,772);
    }
    setTimeout(timer6,3000);

    function timer7(){
        animatejian3(eight,772);
    }
    setTimeout(timer7,3500);

    function timer8(){
        animatejian3(nine,695);
    }
    setTimeout(timer8,4000);
}
