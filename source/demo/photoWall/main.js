var oBox = document.getElementById('box');
var aLi = document.getElementsByTagName('li');

var arrPos = [];
var nowIndex = 2;

//存储li的位置
for (var i = 0; i < aLi.length; i++) {
    arrPos[i] = { left: aLi[i].offsetLeft, top: aLi[i].offsetTop };
};
// 布局转换
for (var i = 0; i < aLi.length; i++) {
    aLi[i].style.left = arrPos[i].left + 'px';
    aLi[i].style.top = arrPos[i].top + 'px';
    aLi[i].style.position = 'absolute';
    aLi[i].style.margin = '0';
    aLi[i].index = i;
};

for (var i = 0; i < aLi.length; i++) {
    fnDrag(aLi[i]);
};

// 拖拽
function fnDrag(obj) {

    obj.onmousedown = function(ev) {
        var ev = ev || event;
        var disX = ev.clientX - obj.offsetLeft;
        var disY = ev.clientY - obj.offsetTop;

        document.onmousemove = function(ev) {
            var ev = ev || event;

            obj.style.left = ev.clientX - disX + 'px';
            obj.style.top = ev.clientY - disY + 'px';
            obj.style.zIndex = nowIndex++;

            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = '';
            };

            var near = getMinDis(obj);

            if (near) {
                near.className = 'active';
            }
        }
        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;

            var near = getMinDis(obj);
            if (near) {
                near.className = '';
                near.style.zIndex = nowIndex++;
                obj.style.zIndex = nowIndex++;

                doMove(near, arrPos[obj.index]);
                doMove(obj, arrPos[near.index]);

                var temp = 0;
                temp = obj.index;
                obj.index = near.index;
                near.index = temp;
            } else {
                doMove(obj, arrPos[obj.index]);
            }
        }
        return false;
        clearInterval(obj.timer);
    }
}
//检查碰撞并判断最小距离的一个
function getMinDis(obj) {
    var iMin = 999999;
    var index = -1;

    for (var i = 0; i < aLi.length; i++) {
        if (obj == aLi[i]) continue;
        var dis = distance(obj, aLi[i]);
        if (collision(obj, aLi[i])) {
            if (iMin > dis) {
                iMin = dis;
                index = i;
            }
        }
    };
    if (index == -1) {
        return null;
    } else {
        return aLi[index];
    }
}
//获取2个元素的距离
function distance(obj1, obj2) {
    var a = obj1.offsetLeft - obj2.offsetLeft;
    var b = obj1.offsetTop - obj2.offsetTop;

    return Math.sqrt(a * a + b * b);
}
//检查碰撞
function collision(obj1, obj2) {
    var obj1T = obj1.offsetTop;
    var obj1R = obj1.offsetLeft + obj1.offsetWidth;
    var obj1B = obj1.offsetTop + obj1.offsetHeight;
    var obj1L = obj1.offsetLeft;

    var obj2T = obj2.offsetTop;
    var obj2R = obj2.offsetLeft + obj2.offsetWidth;
    var obj2B = obj2.offsetTop + obj2.offsetHeight;
    var obj2L = obj2.offsetLeft;

    if (obj2T > obj1B || obj2R < obj1L || obj2B < obj1T || obj2L > obj1R) {
        return false;
    } else {
        return true;
    }
}
