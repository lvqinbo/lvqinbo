
var oUl = g('list');
var aLi = getTag(oUl,'li');
var oP = g('p1');
var aSpan = getTag(oUl,'span');
var aEm = getTag(oUl,'em');
var aStrong = getTag(oUl,'strong');

var arr = [];
//先将数组插入0
for(var i = 0; i < aEm.length; i++){
	arr.push(0);
}
//商品加减函数调用
for(var i = 0; i < aLi.length; i++){
	fnTab(aLi[i]);
}

function sum(){
	var totalPrice = 0;
	var iMax = 0;
	var num = 0;
	
	for (var i = 0; i < aStrong.length; i++) {
		totalPrice += parseFloat(aStrong[i].innerHTML);
		num += parseInt(aSpan[i].innerHTML);
		
		//如果商品的数量不为O，则加入数组，
		if(aSpan[i].innerHTML != 0){
			arr[i] = aEm[i].innerHTML;
		}else{
			arr[i] = 0;
		}
	};
	//判断单价最大的商品
	for(var i = 0; i < arr.length; i++){
		if(iMax < arr[i]){
			iMax = arr[i];
		}
	}
	oP.innerHTML = '商品的总件数：'+ num +'件，最贵的物品单价为：'+ iMax +'元，商品总价为：'+ totalPrice +'元';
}

function fnTab(obj){
	var aInp = obj.getElementsByTagName('input');
	var oNum = obj.getElementsByTagName('span')[0];
	var oUnitcost = obj.getElementsByTagName('em')[0];
	var oSubtotal = obj.getElementsByTagName('strong')[0];
	var iNum = Number(oNum.innerHTML);
	var oPrice = parseFloat(oUnitcost.innerHTML);
	//--
	aInp[0].onclick = function(){
		if(iNum > 0){
			iNum--;
		}
		oNum.innerHTML = iNum;
		oSubtotal.innerHTML = (iNum * oPrice) + '元';
		sum();
	}
	//++
	aInp[1].onclick = function(){
		iNum++;
		oNum.innerHTML = iNum;
		oSubtotal.innerHTML = (iNum * oPrice) + '元';
		sum();
	}
}
function g(sel){
	return document.getElementById(sel);
}
function getTag(oParent,obj){
	return oParent.getElementsByTagName(obj);
}
