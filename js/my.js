/**
 * Created by Administrator on 2016/12/9.
 */
window.onload=function(){

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
    //找人

    // 做事先找人
    var flag = true;
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    // 给小箭头添加 鼠标经过显示 离开隐藏的事件
    wrap.onmouseover=function(){
        animate(arrow,{"opacity":1})
    };
    wrap.onmouseout=function(){
        animate(arrow,{"opacity":0})
    }
    // 给ul中的li 和配置单对应起来
   function assigen(){
       for(var i=0;i<lis.length;i++){
           animate(lis[i],config[i],function(){
                flag = true;
           });
       }
   }
    assigen();
    // 点击右箭头
    arrRight.onclick=function(){
        if(flag){
            flag = false;
            config.push(config.shift());
            assigen();
        }
    }
    arrLeft.onclick=function(){
        if(flag){
            flag = false;
            config.unshift(config.pop());
            assigen();
        }
    }
}
