/*
如何在一个网站或者一个页面，去书写你的JS代码：
1.js的分层（功能）：jquery(tools) 组件(ui) 应用(app)
2.js的规划（管理）: 避免全局变量和方法(命名空间，闭包，面向对象)，模块化(seaJs,requireJs)
*/

window.onload = function(){
	hictrip.app.toBanner();
	hictrip.app.toSel();
}
var hictrip = {};	//命名空间
hictrip.tools = {};	//工具层
hictrip.ui = {}; 	//组件层

hictrip.tools.getStyle = function(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}

//光标移入移出
hictrip.ui.toChange = function(obj,str){
	obj.onfocus = function(){
		if(this.value == str){
			this.value = '';
		}
	}
	obj.onblur = function(){
		if(this.value == ''){
			this.value = str;
		}
	}
}
// 淡入淡出
hictrip.ui.fadeIn = function(obj){
	var value = 0;
	clearInterval(obj.timerIn);
	obj.timerIn = setInterval(function(){
		var iSpeed = 5;
		if(value == 100){
			clearInterval(obj.timerIn);
		}else{
			value += iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity:'+value+')';
		}
	},30);
}
hictrip.ui.fadeOut = function(obj){
	var value = 100;
	clearInterval(obj.timerOut);
	obj.timerOut = setInterval(function(){
		var iSpeed = -5;
		if(value == 0){
			clearInterval(obj.timerOut);
		}else{
			value += iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity:'+value+')';
		}
	},30);
}
hictrip.ui.fade = function(obj,itarget){
	var iCur = hictrip.tools.getStyle(obj,'opacity')*100;
	if(iCur == itarget) return;
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 0;
		iSpeed = iCur < itarget ? 5 : -5;

		if(iCur == itarget){
			clearInterval(obj.timer);
		}else{
			iCur += iSpeed;
			obj.style.opacity = iCur/100;
			obj.style.filter = 'alpha(opacity:'+iCur+')';
		}
	},30);
}

hictrip.app = {};	//应用层
// 光标移入与移出
hictrip.app.toTip = function(){}

hictrip.app.toBanner = function(){
	var oDiv = document.getElementById('div1');
	oDiv.onmouseover = function(){
		hictrip.ui.fade(this,10);
}

hictrip.app.toSel = function(){
	var oBox = document.getElementById('box');
	var aDt = oBox.getElementsByTagName('dt');
	var aUl = oBox.getElementsByTagName('ul');
	var aH3 = oBox.getElementsByTagName('h3');

	for (var i = 0; i < aDt.length; i++) {
		aDt[i].index = i;
		
		aDt[i].onclick = function(ev){
			var ev = ev || event;
			var This = this;
			for (var i = 0; i < aUl.length; i++) {
				aUl[i].style.display = 'none';
			};
			aUl[this.index].style.display = 'block';

			document.onclick = function(){
				aUl[This.index].style.display = 'none';
			}
			ev.cancelBubble = true;
		}
	};
	for (var i = 0; i < aUl.length; i++) {
		aUl[i].index = i;
		(function(ul){
			var aLi = ul.getElementsByTagName('li');
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].index = i;
				aLi[i].onmouseover = function(){
					for (var i = 0; i < aLi.length; i++) {
						if(this.index != i){
							aLi[i].className = '';
						}
					};
					this.className = 'active';
				}
				aLi[i].onclick = function(){
					aH3[this.parentNode.index].innerHTML = this.innerHTML;
				}
			};
		})(aUl[i]);
	};
}
