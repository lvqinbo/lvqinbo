var oDiv = document.getElementById('list');
var aLi = oDiv.getElementsByTagName('li');
var oCart = document.getElementById('cart');
var obj = {};
var totalMoney = null;
var num = 0;
for (var i = 0; i < aLi.length; i++) {
	aLi[i].draggable = true;

	//拖拽开始
	aLi[i].ondragstart = function(){
		var aP = this.getElementsByTagName('p')[0];
		var aSpan = this.getElementsByTagName('span')[0];
		
		var ev = ev || event;
		ev.dataTransfer.setData('name',aP.innerHTML);
		ev.dataTransfer.setData('money',aSpan.innerHTML);
	}
	// 过拽经过
	oCart.ondragover = function(ev){
		var ev =  ev || event;
		ev.preventDefault();

	}
	// 释放
	oCart.ondrop = function(ev){
		var ev = ev || event;
		// 将数据传过去
		var oTitle = ev.dataTransfer.getData('name');
		var oMoney = ev.dataTransfer.getData('money');

		if( !obj[oTitle]){ // 判断元素是否已创建
			var oP = document.createElement('p');
			var oNum = document.createElement('span');
			oNum.innerHTML = 1;
			oNum.className = 'number';
			oP.appendChild(oNum);
			
			var oName = document.createElement('span');
			oName.innerHTML = oTitle;
			oName.className = 'title';
			oP.appendChild(oName);
			
			var oPrice = document.createElement('span');
			oPrice.innerHTML = oMoney;
			oPrice.className = 'price';
			oP.appendChild(oPrice);

			oCart.appendChild(oP);
			obj[oTitle] = 1;
		}else{
			var oBook1 = document.getElementsByClassName('number');
			var oBook2 = document.getElementsByClassName('title');
			
			for (var i = 0; i < oBook1.length; i++) {
				if(oBook2[i].innerHTML == oTitle){
					oBook1[i].innerHTML = parseInt(oBook1[i].innerHTML )+ 1;
				}
			};
		}
		if( !totalMoney ){ // 判断总价钱是否创建
			totalMoney = document.createElement('div');
			totalMoney.id = 'allMoney'; 
		}
		num  +=  parseFloat(oMoney)*100; // 处理浮点数精度
		totalMoney.innerHTML = (num /100) + '元';
		oCart.appendChild(totalMoney);
	}
};