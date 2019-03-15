function g(sel){
	if(sel.charAt(0) == '.'){
		return document.getElementsByClassName(sel.substr(1));
	}else{
		return document.getElementById(sel);
	}
}

var oPhoto = g('photo');
var oPhotoL = g('photoleft');
var oPhotoR = g('photoright');
var oPrev = g('.prev')[0];
var oNext = g('.next')[0];

var arrImgL = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg'];
var arrTextL = ['左边图片1','左边图片2','左边图片3','左边图片4'];
var arrImgR = ['img/1.png','img/2.png','img/3.png'];
var arrTextR = ['右边图片1','右边图片2','右边图片3'];
var iNow = 0;

imgTab(oPhotoL,arrTextL,arrImgL);
imgTab(oPhotoR,arrTextR,arrImgR);

oPrev.onclick = function(){
	if(iNow > 0){
		iNow--;
	}
	imgTab(oPhotoL,arrTextL,arrImgL);
	imgTab(oPhotoR,arrTextR,arrImgR);
}
oNext.onclick = function(){
	iNow++;
	imgTab(oPhotoL,arrTextL,arrImgL);
	imgTab(oPhotoR,arrTextR,arrImgR);
}

function imgTab(obj,arrText,arrNum){
	var oImg = obj.getElementsByTagName('img')[0];
	var oP = obj.getElementsByTagName('p')[0];
	var oSpan = obj.getElementsByTagName('span')[0];

	init();
	//初始化
	function init(){
		oImg.src = arrNum[iNow%arrNum.length];
		oP.innerHTML = arrText[iNow%arrText.length];
		oSpan.innerHTML = iNow%arrNum.length + 1+'/'+ arrNum.length;
	}
	obj.onclick = function(){
		iNow++;
		init();
	}
}
