function g(sel){
	return document.getElementById(sel);
}
function getTag(oParent,obj){
	return oParent.getElementsByTagName(obj);
}

var oWrap = g('wrap');
var oPrev = getTag(oWrap,'a')[0];
var oNext = getTag(oWrap,'a')[1];
var oImgList = g('imglist');
var oUl = getTag(oImgList,'ul')[0];
var aLi = getTag(oUl,'li');
var aImg = getTag(oUl,'img');
var oImgBox = g('imgbox');
var oImg = getTag(oImgBox,'img')[0];
var oNum = getTag(oImgBox,'span')[0];
var oText = getTag(oImgBox,'p')[0];

var iNow = 0;
var arrImg = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg'];
var arrText = ['图片1','图片2','图片3','图片4'];
//动态创建li列表
for (var i = 0; i < arrImg.length; i++) {
	oUl.innerHTML += '<li><img src="'+arrImg[i]+'"></li>';
};
//初始化函数调用
fnInit();

for (var i = 0; i < aLi.length; i++) {
	aLi[i].index = i;
	//鼠标移入事件
	aLi[i].onmouseover = function(){
		aImg[this.index].style.display = 'block';
		setLiStyle();
	}
	//鼠标移出事件
	aLi[i].onmouseout = function(){
		aImg[this.index].style.display = 'none';
	}
	//鼠标点击事件
	aLi[i].onclick = function(){
		iNow = this.index;
		setLiStyle();
		fnInit();
	}
};
//向左切换
oPrev.onclick = function(){
	iNow--;
	if(iNow == -1){
		iNow = arrImg.length-1;
	}
	fnInit();
	setLiStyle();
}
//向右切换
oNext.onclick = function(){
	iNow++;
	if(iNow == arrImg.length){
		iNow = 0;
	}
	fnInit();
	setLiStyle();
}
//设置li样式
function setLiStyle(){
	for (var j = 0; j < aLi.length; j++) {
		aLi[j].className = '';
	};
	aLi[iNow].className = 'selected';
}
//初始化函数
function fnInit(){
	aLi[iNow].className = 'selected';
	oImg.src = arrImg[iNow];
	oText.innerHTML = arrText[iNow];
	oNum.innerHTML = iNow + 1 +'/'+ arrText.length;
}
