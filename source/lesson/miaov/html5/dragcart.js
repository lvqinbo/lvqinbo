var oBox = document.getElementById('bookBox');
var aBook = getByClass(oBox,'book_e');
var oCart = document.getElementById('cart');
var iNum = 0; 
var allMoney = null;
var obj = {};
var arrColor = ['#FF4500','#FF4040','#EE1289','#C0FF3E','#8B8B00','#FF1493'];

for (var i = 0; i < aBook.length; i++) {
	aBook[i].index = i;

	aBook[i].draggable = true;
	aBook[i].ondragstart = function(ev)
	{
		var oP = this.getElementsByTagName('p')[0];
		var oSpan = this.getElementsByTagName('span')[0];
		var ev = ev || event;
		ev.dataTransfer.setData('title',oP.innerHTML);
		ev.dataTransfer.setData('money',oSpan.innerHTML);
	}
	
	oCart.ondragover = function(ev)
	{
		var ev = ev ||event;
		ev.preventDefault();
	}
	oCart.ondrop = function(ev)
	{
		var ev = ev || event;
		ev.preventDefault();
		var oTitle = ev.dataTransfer.getData('title');
		var oMoney = ev.dataTransfer.getData('money');

		if(!obj[oTitle])
		{
			var oCloumn = document.createElement('p');
			oCloumn.className = 'cart_list';
			
			var oNum = document.createElement('span');
			oNum.innerHTML = 1;
			oNum.className = 'book_num';
			oNum.style.background = arrColor[iNum];
			oCloumn.appendChild(oNum);

			var oT = document.createElement('span');
			oT.innerHTML = oTitle;
			oT.className = 'book_title';
			oCloumn.appendChild(oT);
			
			var oM = document.createElement('span');
			oM.innerHTML = oMoney;
			oM.className = 'book_money';
			oCloumn.appendChild(oM);

			oCart.appendChild(oCloumn);
			obj[oTitle] = 1;
		}
		else
		{
			var oBox1 = document.getElementsByClassName('book_num');
			var oBox2 = document.getElementsByClassName('book_title');

			for (var i = 0; i < oBox2.length; i++) {
				if(oBox2[i].innerHTML == oTitle)
				{
					oBox1[i].innerHTML = parseInt(oBox1[i].innerHTML)+1;
				}
			};
		}
		if(!allMoney){
			allMoney = document.createElement('div');
			allMoney.id = 'moneyTotal';
		}
		iNum += parseFloat(oMoney)*100;
		allMoney.innerHTML = iNum/100+'元';
		oCart.appendChild(allMoney);
	}

};