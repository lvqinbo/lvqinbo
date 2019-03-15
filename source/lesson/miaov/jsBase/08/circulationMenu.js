function getByClass(oParent,sClass){
	var result = [];
	var aEles = oParent.getElementsByTagName('*');
	for (var i = 0; i < aEles.length; i++) {
		if(aEles[i].className == sClass){
			arr.push(aEles[i]);
		}
	};
	return result;
}
window.onload = function(){
	var oWrap = document.getElementById('wrap');
	var oTopDiv = getByClass(oWrap,'topList')[0];
	var aSpan = oTopDiv.getElementsByTagName('span');
	var oListDiv = getByClass(oWrap,'list')[0];
	var aUl = oListDiv.getElementsByTagName('ul');
	var aLi = oListDiv.getElementsByTagName('li');
	var oImg = document.getElementById('img');
	
	var timer = null;
	var iNum = 0;
	var arrUrl = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
	
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			iNum = this.index;
			clearInterval(timer);
			fnTab();
		}
		aLi[i].onmouseout = function(){
			autoMove();
		}
	};

	function autoMove(){
		timer = setInterval(function(){
			iNum++;
			if(iNum == aLi.length/2){
				aUl[0].style.display = 'none';
				aUl[1].style.display = 'block';
				aSpan[0].className = '';
				aSpan[1].className = 'active';
			}
			if(iNum == aLi.length){	
				iNum = 0;
				aUl[0].style.display = 'block';
				aUl[1].style.display = 'none';
				aSpan[0].className = 'active';
				aSpan[1].className = '';
			}
			fnTab();
		},1000);
	}
	autoMove();

	function fnTab(){
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].className = '';
		};
		aLi[iNum].className = 'cur';
		oImg.src = arrUrl[iNum%arrUrl.length];
	}
}