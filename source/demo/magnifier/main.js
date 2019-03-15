var oSmallBox = g('small_box');
var oMark = g('mark');
var oFloat = g('float');
var oSmallImg = oSmallBox.getElementsByTagName('img')[0];
var oBigBox = g('big_box');
var oBigImg = oBigBox.getElementsByTagName('img')[0];

oMark.onmouseover = function(){
	oFloat.style.display = 'block';
	oBigBox.style.display = 'block';
}
oMark.onmouseout = function(){
	oFloat.style.display = 'none';
	oBigBox.style.display = 'none';
}
oMark.onmousemove = function(ev){
	var oFloatW = oFloat.offsetWidth;
	var oFloatH = oFloat.offsetHeight;
	var oSmallBoxW = oSmallBox.offsetWidth;
	var oSmallBoxH = oSmallBox.offsetHeight;
	var oBigBoxW = oBigBox.offsetWidth;
	var oBigBoxH = oBigBox.offsetHeight;

	var ev = ev || event;
	var left = ev.clientX - oSmallBox.offsetLeft -  oFloatW/2;
	var top = ev.clientY - oSmallBox.offsetTop -  oFloatH/2;

	if(left < 0 ){
		left = 0;
	}else if(left > oSmallBoxW - oFloatW){
		left = oSmallBoxW - oFloatW;
	}
	if(top < 0){
		top = 0;
	}else if(top > oSmallBoxH - oFloatH){
		top = oSmallBoxH - oFloatH;
	}

	oFloat.style.left = left + 'px';
	oFloat.style.top = top + 'px';

	var percentX = left / (oSmallBoxW - oFloatW);
	var percentY = top / (oSmallBoxH - oFloatH);
	
	oBigImg.style.left = -percentX * (oBigImg.offsetWidth - oBigBoxW) + 'px';
	oBigImg.style.top = -percentY * (oBigImg.offsetHeight - oBigBoxH) + 'px';
}
// 选择ID函数
function g(sel){
	return document.getElementById(sel);
}
