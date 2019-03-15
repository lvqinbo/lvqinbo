var oBox = document.getElementById('box');
var oImgContainer = document.getElementById('imgBox');
var vW = document.documentElement.clientWidth;

var iWidth = 230; //宽
var iSpace = 10; //间距
var iOutWidth = iWidth + iSpace;
var cells = 0; //列
var arrL = []; //存放的left位置
var arrT = []; //存放的top位置
var iPage = 0;
var iBtn = true;

function setCell(){
	cells = Math.floor(vW / iOutWidth); //列
	oBox.style.width = cells * iOutWidth - iSpace + 'px';
}
setCell();

for (var i = 0; i < cells; i++) {
	arrT.push(0);
	arrL.push(i * iOutWidth);
};

function getData(){
	if(iBtn){
    iBtn = false;
		ajax('getPics.php?cpage='+iPage,function(data){
		var data = JSON.parse(data);
		for (var i = 0; i < data.length; i++) {
			var oImg = document.createElement('img');
			oImg.src = data[i].preview;
			oImgContainer.appendChild(oImg);
			
			var iHeight = (iWidth / data[i].width) * data[i].height;
			oImg.style.width = iWidth + 'px';
			oImg.style.height = iHeight + 'px';

			//设置定位
			var minHeight = getShort();
			oImg.style.left = arrL[minHeight] + 'px';
			oImg.style.top = arrT[minHeight] + 'px';

			arrT[minHeight] += iHeight + 10;
			iBtn = true;
		};
		});
	}
}
getData();
window.onscroll = function(){
	var vH = document.documentElement.clientHeight;
	var sT = document.documentElement.scrollTop || document.body.scrollTop;
	var minHeight = getShort();
	if(arrT[minHeight] + oImgContainer.offsetTop < sT + vH){
		if(iBtn){
			iPage++;
		}
		getData();
	}
}
window.onresize = function(){
	setCell();
	arrL = [];
	arrT = [];

	for (var i = 0; i < cells.length; i++) {
		arrT.push(0);
		arrL.push(i* iOutWidth);
	};
	var aImg = oImgContainer.getElementsByTagName('img');
	for (var i = 0; i < aImg.length; i++) {
		
		var minHeight = getShort();
		aImg[i].style.left = arrL[minHeight] +'px';
		aImg[i].style.top = arrT[minHeight] +'px';

		arrT[minHeight] += aImg[i].height + 10;
	};
}
function getShort(){
	var index = 0;
	var iT = arrT[0];
	for (var i = 1; i < arrT.length; i++) {
		if(arrT[i] < iT){
			iT = arrT[i];
			index = i;
		}
	};
	return index;
}