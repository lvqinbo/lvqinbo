var oControlDiv = document.querySelector('.control');
var oTxt = document.getElementById('textin');
var oMoveBtn = document.querySelector('.movebtn');
var oUl = oControlDiv.getElementsByTagName('ul')[0];
var aTxtNum = oControlDiv.getElementsByTagName('span')[0];
var aLi = oControlDiv.getElementsByTagName('li');
var outTxt = document.querySelector('.newtext');
var iNum = 0;
var timer = null;
// 鼠标点击
oMoveBtn.onclick = function(){
	oUl.style.display = 'block';
	doMove(oUl,{opacity : 100});
	textMove();
}
// 文字移动函数
function textMove(){
	var str = oTxt.value;

	clearInterval(timer);
	timer = setInterval(function(){
		clearStyle();
		outTxt.innerHTML += str[iNum];
		iNum++;

		aTxtNum.innerHTML = iNum + '/' + str.length;
		aLi[iNum%aLi.length].className = 'active';

		if(iNum == str.length){
			clearInterval(timer);
			clearStyle();
			oUl.style.opacity = 0;
			oUl.style.display = 'none';
		}
	},30);
}
// 清除li样式
function clearStyle(){
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].className = '';
	};
}
// 运动框架函数
function doMove(obj, json, fnEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iBtn = true;
		for(var attr in json){
			var cur = 0;
			
			if(attr == 'opacity'){
				cur = Math.round(parseFloat(getStyle(obj, attr))*100);
			}else{
				cur = parseInt(getStyle(obj, attr));
			}

			var speed = (json[attr] - cur)/6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(cur != json[attr]){
				iBtn = false;
			}

			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity: '+(cur + speed)+')';
				obj.style.opacity = (cur + speed)/100;
			}else{
				obj.style[attr] = (cur + speed) + 'px';
			}
		}
		if(iBtn){
			fnEnd && fnEnd();
		}
	},30);
}
// 获取非行间样式
function getStyle(obj, name){ 
	return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name];
}