var oUl = document.getElementById('scope');
var aLi = oUl.getElementsByTagName('li');

for(var i = 0; i < aLi.length; i++){
	fnTab(aLi[i]);
}

function fnTab(obj){
	var aDiv = obj.getElementsByTagName('div');
	var oTxt = obj.getElementsByTagName('p')[1];
	var iNow = -1;
	var overNum = 0;
	var iBtn = true;
	var arrTxt = ['很差','较差','还行','满意','非常满意'];

	for(var i = 0; i < aDiv.length; i++){
		aDiv[i].index = i;
		//鼠标移入
		aDiv[i].onmouseover = function(){
			fnClear();
			overNum = this.index;
			setColor();
			
			oTxt.innerHTML = arrTxt[this.index];
		}
		//鼠标移出
		aDiv[i].onmouseout = function(){
			fnClear();
			overNum = iNow;
			setColor();
			
			oTxt.innerHTML = iBtn ? '小提示：点击小星星为此次服务评分!' : arrTxt[iNow];
		}
		//鼠标点击
		aDiv[i].onclick = function(){
			iNow = this.index;
			iBtn = false;
		}
	}
	//设置评价星星背景颜色
	function setColor(){
		for(var j = 0; j <= overNum; j++){
			switch(overNum){
				case 0:
				case 1:
					aDiv[j].style.backgroundPosition = '0px -60px';
					break;
				case 2:
					aDiv[j].style.backgroundPosition = '0px -120px';
					break;
				case 3:
					aDiv[j].style.backgroundPosition = '0px -180px';
					break;
				case 4:
					aDiv[j].style.backgroundPosition = '0px -240px';
					break;
			}
		}
	}
	//清除样式
	function fnClear(){
		for (var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.backgroundPosition = '0px 0px';
		};
	}
}