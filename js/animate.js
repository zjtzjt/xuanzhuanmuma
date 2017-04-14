/**
 * Created by Administrator on 2016/12/9.
 */
// 封装缓动动画
function animate(obj, json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var falg = true;
        for (var k in json) {
            if(k==="opacity"){
                var leader = getStyle(obj, k)*100;// 因为 opacity 的取值范围是0-1 所以为了方便计算放大100倍
                var tager = json[k]*100;
                var step = (tager - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader/100;
            }else if(k==="zIndex"){
                obj.style.zIndex=json[k];
            }else if(k==="backgroundColor"){
                obj.style.backgroundColor=json[k];
            }
            else{
                var leader = parseInt(getStyle(obj, k)) || 0;// 如果获取的是NaN 给他加个默认值0；
                var tager = json[k];
                var step = (tager - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }

//                if(tager==leader){
//                    clearInterval(obj.timer);
//                }
            if (tager !== leader) {
                falg = false;
            }
        }
        if (falg) {
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }

    }, 15)
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}