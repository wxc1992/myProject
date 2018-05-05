/**
 * Created by dell on 2016/10/25.
 */
window.onload=function(){
    //功能1开始
    var ban=document.getElementById("ban");
    var divs=ban.children;
//       var img1=document.getElementById("img1");
    divs[0].onmouseenter=function(){
        divs[0].style.overflow="inherit";
//           animate(img1,{"width":470,"height":465})
        animate(divs[2],{"width":350,"left":850});
        animate(divs[1],{"width":350,"left":485});
        animate(divs[5],{"width":228,"left":972});
        animate(divs[4],{"width":228,"left":729});
        animate(divs[3],{"width":228,"left":485});

    }
    divs[0].onmouseleave=function() {

//          animate(img1,{"width":390,"height":225});
        animate(divs[2],{"width":390,"left":810});
        animate(divs[1],{"width":390,"left":405});
        animate(divs[5],{"width":390,"left":810});
        animate(divs[4],{"width":390,"left":405});
        animate(divs[3],{"width":390,"left":0});
        divs[0].style.overflow="hidden";

    }
    divs[1].onmouseenter=function(){
        divs[1].style.overflow="inherit";
        animate(divs[1],{"left":365})
        animate(divs[0],{"width":350,"left":0});
        animate(divs[2],{"width":350,"left":850});
        animate(divs[3],{"width":350,"left":0});
        animate(divs[4],{"width":167,"left":850});
        animate(divs[5],{"width":167,"left":1032});

    };
    divs[1].onmouseleave=function(){

        animate(divs[0],{"width":390,"left":0});
        animate(divs[2],{"width":390,"left":810});
        animate(divs[1],{"width":390,"left":405});
        animate(divs[5],{"width":390,"left":810});
        animate(divs[4],{"width":390,"left":405});
        animate(divs[3],{"width":390,"left":0} );
        divs[1].style.overflow="hidden";

    }
    divs[2].onmouseenter=function(){
        divs[2].style.overflow="inherit";
        animate(divs[0],{"width":350,"left":0});
        animate(divs[1],{"width":350,"left":365});
        animate(divs[5],{"width":228,"left":486});
        animate(divs[4],{"width":228,"left":243});
        animate(divs[3],{"width":228,"left":0} );
    }
    divs[2].onmouseleave=function(){
        animate(divs[0],{"width":390,"left":0});
        animate(divs[1],{"width":390,"left":405});
        animate(divs[5],{"width":390,"left":810});
        animate(divs[4],{"width":390,"left":405});
        animate(divs[3],{"width":390,"left":0} );
        divs[2].style.overflow="hidden";
    }
    divs[3].onmouseenter=function(){
        divs[3].style.overflow="inherit";
        animate(divs[5],{"width":350,"left":850});
        animate(divs[4],{"width":350,"left":485});
        animate(divs[8],{"width":228,"left":972});
        animate(divs[7],{"width":228,"left":729});
        animate(divs[6],{"width":228,"left":485});
    }
    divs[3].onmouseleave=function(){
        animate(divs[5],{"width":390,"left":810});
        animate(divs[4],{"width":390,"left":405});
        animate(divs[8],{"width":390,"left":810});
        animate(divs[7],{"width":390,"left":405});
        animate(divs[6],{"width":390,"left":0});
        divs[3].style.overflow="hidden";
    }
    divs[4].onmouseenter=function(){
        divs[4].style.overflow="inherit";
        animate(divs[4],{"left":365})
        animate(divs[3],{"width":350,"left":0});
        animate(divs[5],{"width":350,"left":850});
        animate(divs[6],{"width":350,"left":0});
        animate(divs[7],{"width":167,"left":850});
        animate(divs[8],{"width":167,"left":1032});
    }
    divs[4].onmouseleave=function(){
        animate(divs[3],{"width":390,"left":0});
        animate(divs[5],{"width":390,"left":810});
        animate(divs[4],{"width":390,"left":405});
        animate(divs[8],{"width":390,"left":810});
        animate(divs[7],{"width":390,"left":405});
        animate(divs[6],{"width":390,"left":0} );
        divs[4].style.overflow="hidden";
    }
    divs[5].onmouseenter=function(){
        divs[5].style.overflow="inherit";
        animate(divs[3],{"width":350,"left":0});
        animate(divs[4],{"width":350,"left":365});
        animate(divs[8],{"width":228,"left":486});
        animate(divs[7],{"width":228,"left":243});
        animate(divs[6],{"width":228,"left":0} );
    }
    divs[5].onmouseleave=function(){
        animate(divs[3],{"width":390,"left":0});
        animate(divs[4],{"width":390,"left":405});
        animate(divs[8],{"width":390,"left":810});
        animate(divs[7],{"width":390,"left":405});
        animate(divs[6],{"width":390,"left":0} );
        divs[5].style.overflow="hidden";
    }
    //功能1结束
    //功能2开始
    var showa=document.getElementById("showa");
    var divsn=showa.getElementsByTagName("div");
    var spans=showa.getElementsByTagName("span");
    var closeBtn1=document.getElementById("closeBtn1");
    var closeBtn2=document.getElementById("closeBtn2");
    var closeBtn3=document.getElementById("closeBtn3");
    var closeBtn4=document.getElementById("closeBtn4");
//    console.log(divs);
//    console.log(spans);

    for(var i=0;i<divsn.length;i++){
        divsn[i].index=i;
        divsn[i].onclick=function(event){
            var event=event||window.event;
            animate(spans[this.index],{"left":150,"opacity":1});
            stopPropagation(event);

        }
        closeBtn1.onclick=function(){
            animate(spans[0],{"left":-550,"opacity":0});
        }
        closeBtn2.onclick=function(){
            animate(spans[1],{"left":-550,"opacity":0});
        }
        closeBtn3.onclick=function(){
            animate(spans[2],{"left":-550,"opacity":0});
        }
        closeBtn4.onclick=function(){
            animate(spans[3],{"left":-550,"opacity":0});
        }
    }
    //show下面的轮播图功能实现
    //slider1轮播功能实现；
    var slider1=document.getElementById("slider1");
    var ul1=slider1.children[0];
    var lis1=ul1.children;
    var arr=document.getElementById("arr");
    var imgWidth1=slider1.offsetWidth;
    var pic=0;
    var stitle1=document.getElementById("stitle1");
    var array1=["破墙而出系列-红玫瑰","破墙而出系列-白玫瑰","破墙而出系列-粉红佳人","破墙而出系列-黑色诱惑"];
    //var timer=null;
    arr.onclick=function(){
        if(pic==lis1.length-1){
            ul1.style.left="0px";
            pic=0;
        }
        pic++;
        var target=-pic*imgWidth1;
        animate(ul1,{"left":target});
        console.log(array1[pic]);
        if(pic==lis1.length-1){
            stitle1.innerHTML=array1[0] ;
        }else{
            stitle1.innerHTML=array1[pic];
        }
    }
    /* timer=setInterval(function(){
     arr.click();
     },2000);
     slider1.onmouseenter=function(){
     clearInterval(timer);
     }
     slider1.onmouseleave=function(){
     timer=setInterval(function(){
     arr.click();
     },2000);
     }*/
///slider2轮播功能实现；
    var slider2=document.getElementById("slider2");
    var ul2=slider2.children[0];
    var lis2=ul2.children;
    var arr1=document.getElementById("arr1");
    var imgWidth2=slider2.offsetWidth;
    var pic1=0;
    var stitle2=document.getElementById("stitle2");
    var array2=["从你的全世界路过","我希望有一个如你一般的人","如山间清爽的风","如古城温暖的阳光"];
//    var timer=null;
    arr1.onclick=function(){
        if(pic1==lis2.length-1){
            ul2.style.left="0px";
            pic1=0;
        }
        pic1++;
        var target=-pic1*imgWidth2;
        animate(ul2,{"left":target});
        console.log(array2[pic1]);
        if(pic1==lis2.length-1){
            stitle2.innerHTML=array2[0] ;
        }else{
            stitle2.innerHTML=array2[pic1];
        }
    }
    //slider3功能实现
    var slider3=document.getElementById("slider3");
    var ul3=slider3.children[0];
    var lis3=ul3.children;
    var arr2=document.getElementById("arr2");
    var imgWidth3=slider3.offsetWidth;
    var pic3=0;
    var stitle3=document.getElementById("stitle3");
    var array3=["秀场精彩瞬间","忧郁而高贵","黑色典雅","明媚不忧伤"];
    //    var timer=null;
    arr2.onclick=function(){
        if(pic3==lis3.length-1){
            ul3.style.left="0px";
            pic3=0;
        }
        pic3++;
        var target=-pic3*imgWidth3;
        animate(ul3,{"left":target});
        console.log(array3[pic3]);
        if(pic3==lis3.length-1){
            stitle3.innerHTML=array3[0] ;
        }else{
            stitle3.innerHTML=array3[pic3];
        }
    }
//slider4功能实现
    var slider4=document.getElementById("slider4");
    var ul4=slider4.children[0];
    var lis4=ul4.children;
    var arr3=document.getElementById("arr3");
    var imgWidth4=slider4.offsetWidth;
    var pic4=0;
    var stitle4=document.getElementById("stitle4");
    var array4=["森女系搭配大全","早秋必备","简单中带着一丝可爱","你值得拥有"];
    //    var timer=null;
    arr3.onclick=function(){
        if(pic4==lis4.length-1){
            ul4.style.left="0px";
            pic4=0;
        }
        pic4++;
        var target=-pic4*imgWidth4;
        animate(ul4,{"left":target});
        console.log(array4[pic4]);
        if(pic4==lis4.length-1){
            stitle4.innerHTML=array4[0] ;
        }else{
            stitle4.innerHTML=array4[pic4];
        }
    }
    function stopPropagation(event) {
        //能力检测
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
    //功能3
    var left=document.getElementById("left");
    var right=document.getElementById("right");
    var show=document.getElementById("show");
    var divs3=show.getElementsByTagName("div");
    //console.log(divs);
    divs3[0].onmouseover=function(){
        animate(this.children[1],{"left":0});
        this.children[1].style.display="block";
    }
    divs3[0].onmouseout=function(){
        animate(this.children[1],{"left":-250});
        this.children[1].style.display="none";
    }
    divs3[1].onmouseover=function(){
        animate(this.children[1],{"top":0});
        this.children[1].style.display="block";
    }
    divs3[1].onmouseout=function(){
        animate(this.children[1],{"top":-450});
        this.children[1].style.display="none";
    }
    divs3[2].onmouseover=function(){
        animate(this.children[1],{"left":0});
        this.children[1].style.display="block";
    }
    divs3[2].onmouseout=function(){
        animate(this.children[1],{"left":250});
        this.children[1].style.display="none";
    }
    //二维码
    var show=document.getElementById("show");
    var er=document.getElementById("er");
    var erArr=document.getElementById("erArr");
    var erImg=document.getElementById("erImg");
    var close=document.getElementById("close");
    show.onmouseenter=function(){
        animate(er,{"opacity":1});
    }
    show.onmouseleave=function(){
        animate(er,{"opacity":0});
    }
    erArr.onclick=function(){
        erImg.style.display="block";
    }
    close.onclick=function(){
        erImg.style.display="none";
    }
}
