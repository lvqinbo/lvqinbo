var oTabBox = document.getElementById('tabbox');
var aSideUl = document.getElementById('list');
var aSideLi = aSideUl.getElementsByTagName('li');
var aPic = oTabBox.getElementsByTagName('div');
var picimg = ['最热团购','缤纷商城','特惠活动','热销商品'];

var arrImg = [
	['img/pic3.jpg','img/pic4.jpg','img/pic5.jpg','img/pic6.jpg'],
	['img/pic4.jpg','img/pic5.jpg','img/pic6.jpg'],
	['img/pic3.jpg','img/pic4.jpg'],
	['img/pic3.jpg','img/pic4.jpg','img/pic5.jpg']
];
var arrText = [
	['图片1介绍信息','图片2介绍信息','图片3介绍信息','图片4介绍信息'],
	['图片1介绍信息','图片2介绍信息','图片3介绍信息'],
	['图片1介绍信息','图片2介绍信息'],
	['图片1介绍信息','图片2介绍信息','图片3介绍信息']
];

for (var i = 0; i < picimg.length; i++) {
	aSideUl.innerHTML += '< li>'+picimg[i]+'< /li>';
};

aSideLi[0].className = 'active';
for (var i = 0; i < aSideLi.length; i++) {
	aSideLi[i].index = i;
	fnTab(aPic[i],arrImg[i],arrText[i]); 
	
	aSideLi[i].onmouseover = function(){
		for(var j = 0; j < aPic.length; j++ ){
			aPic[j].style.display = 'none';
			aSideLi[j].className = '';
		}
		this.className = 'active';
		aPic[this.index].style.display = 'block';
		fnTab(aPic[this.index],arrImg[this.index],arrText[this.index]);
	}
};

function fnTab(obj, arrImg, arrText){
	var oUlPic = obj.getElementsByTagName('ul')[0];
	var aLiPic = oUlPic.getElementsByTagName('li');
	var oUlText = obj.getElementsByTagName('ul')[1];
	var aLiText = oUlText.getElementsByTagName('li');

	for(var i = 0; i < arrImg.length; i++){
		oUlPic.innerHTML += '< li>< img src="'+arrImg[i]+'" alt="" />< /li>';
		oUlText.innerHTML += '< li>'+arrText[i]+'< /li>';
		aLiText[i].style.width = (oUlText.offsetWidth / arrText.length) + 'px';
	}
	// 初始化
	aLiText[0].className = 'active';
	aLiPic[0].style.display = 'block';

	for (var i = 0; i < aLiText.length; i++) {
		aLiText[i].index = i;
		aLiText[i].onmouseover = function(){
			for(var j = 0; j < aLiText.length; j++){
				aLiText[j].className = '';
				aLiPic[j].style.display = 'none';
			}
			this.className = 'active';
			aLiPic[this.index].style.display = 'block';
		}
	};
}
