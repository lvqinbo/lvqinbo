var oUl = document.getElementById('ul1');
var aLi = document.getElementsByTagName('li');
var oP = document.getElementsByTagName('p')[0];
var aSpan = oP.getElementsByTagName('span');

var iNow = 0;
var speed = 0;
var timer = null;
var str =  str2 = '';
var arrUrl = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];

// 创建li和span小点
for(var i = 0; i <  arrUrl.length; i++){
	str += '< li>< img src="'+arrUrl[i]+'" >< /li>';
	str2 += '< span></span>';
}
oUl.innerHTML = str;
oP.innerHTML = str2;
oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px'; //Ul的宽度
aSpan[0].className = 'active';  //第一个点高亮

drag(oUl);
function drag(obj){
	var disX = 0;
	var downX = 0;
	obj.onmousedown = function(ev){
		var ev = ev || event;
		disX = ev.clientX - obj.offsetLeft;
		downX = ev.clientX;
		document.onmousemove = function(ev){
			var ev = ev || event;
			obj.style.left = ev.clientX - disX + 'px';
		}
		document.onmouseup = function(ev){
			var ev = ev || event;
			document.onmousemove = null;
			document.onmouseup = null;

			if( ev.clientX < downX ){
				if( iNow < aLi.length-1){ iNow++; }
				startMove(obj,- iNow * aLi[0].offsetWidth);
				fnClear();
			}else{
				if( iNow > 0){ iNow--; }
				startMove(obj,- iNow * aLi[0].offsetWidth);
				fnClear();
			}
		}
			//禁止图片默认拖拽
			return false;
		}
	}
// 弹性拖拽运动
function startMove(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		speed += ( iTarget - obj.offsetLeft )/6;
		speed *= 0.75;

		if( Math.abs( speed )<= 1 && Math.abs( obj.offsetLeft )<= 1 ){
			clearInterval(obj.timer);
			obj.style.left = iTarget + 'px';
			speed = 0;
		}else{
			obj.style.left = obj.offsetLeft + speed + 'px';
		}
	},30);
}
// 清除小点的样式
function fnClear(){
	for (var i = 0; i < aSpan.length; i++) {
		aSpan[i].className = '';
	};
	aSpan[iNow].className = 'active';
}
