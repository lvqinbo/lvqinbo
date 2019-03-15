var oBox = document.getElementById('imgbox');
var oUl = document.getElementById('list');
var aLi = oUl.getElementsByTagName('li');

var arrImg = ['img/1.png','img/2.png','img/3.png','img/4.png'];
var arrText = ['文字说明一','文字说明二','文字说明三','文字说明四'];
var iNow = 0;

//动态创建控制按钮
for (var i = 0; i < arrImg.length; i++) {
	oUl.innerHTML += '<li></li>';
};

fnTab(oBox);

//Li点击事件
for (var i = 0; i < aLi.length; i++) {
	aLi[i].index = i;
	aLi[i].onclick = function(){
		iNow = this.index;
		for(var j = 0; j < aLi.length; j++){
			aLi[j].className = '';
		}
		this.className = 'active';
		fnTab(oBox);
	}
};
//切换图片和内容函数
function fnTab(obj){
	var oImg = obj.getElementsByTagName('img')[0];
	var oText = obj.getElementsByTagName('p')[0];
	var oNum = obj.getElementsByTagName('span')[0];

	oImg.src = arrImg[iNow];
	oText.innerHTML = arrText[iNow];
	oNum.innerHTML = iNow + 1+ '/' +arrImg.length;

	//初始化第一个li为选中样式
	(function init(){
		aLi[iNow].className = 'active';
		oImg.src = arrImg[iNow];
		oText.innerHTML = arrText[iNow];
		oNum.innerHTML = iNow + 1+ '/' +arrImg.length;
	})();
}