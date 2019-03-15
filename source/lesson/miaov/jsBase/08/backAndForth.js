var oWrap = document.getElementById('wrap');
var aLi = oWrap.getElementsByTagName('li');
var oImg = oWrap.getElementsByTagName('img')[0];

var arrUrl = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
var iNow = 0;
var timer1 , timer2 = null;

fnTab();
// 鼠标移入移出函数
function fnTab(){
	for(var i = 0; i < aLi.length; i++){
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			iNow = this.index;
			setStyle();
			clearInterval(timer1);
		}
		aLi[i].onmouseout = function(){
			autoPlay1();
		}
	}
}
autoPlay1();
// 自动播放函数
function autoPlay1(){
	timer1 = setInterval(function(){
		setStyle();
		iNow++;
		if(iNow == aLi.length){
			clearInterval(timer1);
			iNow = aLi.length-1;
			setTimeout(autoPlay2,1000);
		}
	},1000);
}
// 自动返回函数
function autoPlay2(){
	timer2 = setInterval(function(){
		setStyle();
		iNow--;
		if(iNow == -1){
			clearInterval(timer2);
			iNow = 0;
			setTimeout(autoPlay1,1000);
		}
	},1000);
}
// 设置样式与对应的图片显示
function setStyle(){
	for(var j = 0; j < aLi.length; j++){
		aLi[j].className = '';
	}
	aLi[iNow].className = 'active';
	oImg.src = arrUrl[iNow % arrUrl.length];
}