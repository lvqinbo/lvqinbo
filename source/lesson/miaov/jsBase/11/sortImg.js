var oWrap = document.getElementById('wrap');
var aLi = oWrap.getElementsByTagName('li');
var aP = oWrap.getElementsByTagName('p');
var oControlDiv = oWrap.querySelector('.controlbox');
var aBtn = oControlDiv.getElementsByTagName('a');
var arrPos = [];

// 将li的位置与p的内容添加到数组
for (var i = 0; i < aLi.length; i++) {
	arrPos[i] = [aP[i].innerHTML, aLi[i].offsetLeft, aLi[i].offsetTop];
};
// 随机排序
aBtn[0].onclick = function(){
	arrPos.sort(function(){
		return Math.random() - 0.5;
	});
	fnLayout();
}
// 顺序排序
aBtn[1].onclick = function(){
	arrPos.sort();
	fnLayout();
}
// 倒序排序
aBtn[2].onclick = function(){
	arrPos.sort(function(a,b){
		return parseInt(b) - parseInt(a);
	})
	fnLayout();
}
// 布局转换，让li绝对定位
function fnLayout(){
	for (var i = 0; i < arrPos.length; i++) {
		aLi[i].style.position = 'absolute';
		aLi[i].style.left = arrPos[i][1] + 'px';
		aLi[i].style.top = arrPos[i][2] + 'px';
		aLi[i].style.margin = 0;
	};
}
