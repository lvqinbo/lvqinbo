var oBox = document.getElementById('box');
var oWrap = getByClass(oBox,'wrap')[0];
var oUp = oWrap.getElementsByTagName('a')[0];
var oDown = oWrap.getElementsByTagName('a')[1];
var oUl = getByClass(oBox,'list')[0];
var aLi = oUl.getElementsByTagName('li');
var num = 0;
var stop = null;
var html = '';
var arrColor = ['#FF00FF','#FF3030','#D15FEE','#CAFF70','#B0E0E6','#5C5C5C','#4169E1','#00CDCD'];

var iH = aLi.length * aLi[0].offsetHeight;
	var vH = oWrap.offsetHeight - 30;
	// 动态创建Li
for (var i = 0; i < arrColor.length; i++) {
	html += '< li style="background: '+arrColor[i]+'">'+i+'</ li>';
};
oUl.innerHTML = html;
// 函数调用
oUp.onmousedown = moveUp;	
oUp.onmouseup = stopMove;
oDown.onmousedown = moveDown;
oDown.onmouseup = stopMove;

// 往上运动
function moveUp(){
	clearInterval(stop);
	stop = setInterval(function(){
		oUl.style.top = -num + 'px';
		if(num < iH - vH){
			num+=5;
		}
	},30);
}
// 往下运动
function moveDown(){
	clearInterval(stop);
	stop = setInterval(function(){
		if(oUl.offsetTop < 30){
			num-=5;
			oUl.style.top = -num + 'px';
		}
	},30);
}
// 关闭定时器
function stopMove(){
	clearInterval(stop);
}