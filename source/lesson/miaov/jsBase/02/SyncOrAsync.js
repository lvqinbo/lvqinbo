function g(sel){
	return document.getElementById(sel);
}
function getTag(oParent,obj){
	return oParent.getElementsByTagName(obj);
}
var oControlBox = g('controlbox');
var aBtn = getTag(oControlBox,'a');
var oImgBox = g('imgbox');
var aLi = getTag(oImgBox,'li');
var oImg = getTag(oImgBox,'img')[0];
var arrImg = ['img/1.jpg','img/2.jpg','img/3.jpg'];
var iNow = 0;
var iBtn = true;
//下一张
aBtn[0].onclick = function(){
	iNow++;
	iNow%=arrImg.length;
	oImg.src = arrImg[iNow%arrImg.length];
	iBtn ? asynFn() : acrossFn();
}
//同步控制
aBtn[1].onclick = function(){
	iBtn = true;
	this.className = 'selected';
	aBtn[2].className = '';
	iBtn ? asynFn() : acrossFn();
}
//异步控制
aBtn[2].onclick = function(){
	iBtn = false;
	this.className = 'selected';
	aBtn[1].className = '';
	iBtn ? asynFn() : acrossFn();
}
//点击事件
for (var i = 0; i < aLi.length; i++) {
	aLi[i].index = i;
	aLi[i].onclick = function(){
		iNow = this.index;
		oImg.src = arrImg[iNow%arrImg.length];
		iBtn ? asynFn() : acrossFn();
	}
};
asynFn();
//异步函数
function acrossFn(){
	clearFn(); 
	aLi[iNow].className = 'active';
	aLi[aLi.length-1-iNow].className = 'active';
}
//同步函数
function asynFn(){
	clearFn(); 
	if(iNow > 2){
		aLi[iNow].className = 'active';
		aLi[iNow-3].className = 'active';
	}else{
		aLi[iNow].className = 'active';
		aLi[iNow+3].className = 'active';
	}
}
//清除样式
function clearFn(){
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].className = '';
	};
}