function g(sel){
	return document.getElementById(sel);
}
function getTag(oParent,obj){
	return oParent.getElementsByTagName(obj);
}
var oWrap = g('wrap');	//外层div
var oImgBox = g('imgbox');	//图片div
var aBtn = getTag(oWrap,'span');	//切换按钮
var oPrev = getByClass(oImgBox,'prev')[0];	//左按钮
var oNext = getByClass(oImgBox,'next')[0];	//右按钮
var oUl = getByClass(oImgBox,'imglist')[0];	//包着图片的ul
var aLi = getTag(oUl,'li');	//里面的li
var oText = getTag(oImgBox,'p');	//图片信息元素

var iNum = 0;
var iBtn = false;
var arr = ['图片1','图片2','图片3','图片4','图片5'];

//初始化
oText[0].innerHTML = iNum + 1 +'/'+ arr.length;
oText[1].innerHTML = arr[iNum];
oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';
//顺序切换
aBtn[0].onclick = function(){
	iBtn = false;
	clearStyle();
	this.className = 'btn active';
	oBtnText.innerHTML = '图片按照顺序切换！';
}
//循环切换
aBtn[1].onclick = function(){
	iBtn = true;
	clearStyle();
	this.className = 'btn active';
	oBtnText.innerHTML = '图片将循环切换！';
}
//往左边
oPrev.onclick = function(){
	Tab(-1);
}
//往右边
oNext.onclick = function(){
	Tab(1);
}
//清除按钮样式
function clearStyle(){
	for(var i = 0; i < aBtn.length; i++){
		aBtn[i].className = '';
	}
}
function Tab(num){
	if(num > 0){ //++
		iNum++;
		if(iNum == aLi.length){
			iNum = iBtn > 0 ?  0 : aLi.length-1;
		}
	}else{
		iNum--;
		if(iNum == -1){
			iNum = iBtn > 0 ? aLi.length-1 : 0;
		}
	}
	oText[0].innerHTML = iNum + 1 +'/'+ arr.length;
	oText[1].innerHTML = arr[iNum];
	oUl.style.left = -iNum * aLi[0].offsetWidth + 'px';
}
function getByClass(oParent,sClass){
	var arr = [];
	var eles = oParent.getElementsByTagName('*');
	for(var i = 0, len = eles.length; i < len; i++){
		if(eles[i].className == sClass){
			arr.push(eles[i]);
		}
	}
	return arr;
}