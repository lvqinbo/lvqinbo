// 元素选择函数
function g(sel){
	if(sel.charAt(0) == '.'){
		return document.getElementsByClassName(sel.substr(1));
	}else if(sel.charAt(0) == '#'){
		return document.getElementById(sel.substr(1));
	}else{
		return document.getElementsByTagName(sel);
	}
}
// 获取class
function getChild(oParent, sel){
	return oParent.getElementsByTagName(sel);
}

var oSkin = g('.skin');
var oMin = g('.main');
var oUl = g('#list');
var aLi = getChild(oUl,'li');
var arrPos = [];

// 换皮肤
oSkin.onclick = function(){
	oMin.style.background = randomColor();
}
for (var i = 0; i < aLi.length; i++) {
	arrPos[i] = {left: aLi[i].offsetLeft, top: aLi[i].offsetTop};
};
for (var i = 0; i < arrPos.length; i++) {
	aLi[i].style.position = 'absolute';
	aLi[i].style.left = arrPos[i].left + 'px';
	aLi[i].style.top = arrPos[i].top + 'px';
	aLi[i].style.margin = 0;
};

// 随机颜色
function randomVal(val){
	return Math.floor(Math.random()*(val+1));
}
function randomColor(){
	return 'rgb('+randomVal(255)+','+randomVal(255)+','+randomVal(255)+')';
}
function getByClass(oParent, sClass){
	var arr = [];
	var elems = oParent.getElementsByTagName('*');
	for (var i = 0; i < elems.length; i++) {
		if(elems[i].className == sClass){
			arr.push(elems[i]);
		}
	};
	return arr;
}
// 拖拽调用
for (var i = 0; i < aLi.length; i++) {
	drag(aLi[i]);
};
// 拖拽
function drag(obj){
	
	var downX, downY = 0;
	obj.onmousedown = function(ev){
		var ev = ev || event;
		obj.className = 'mousemove';
		downX = ev.clientX - obj.offsetLeft;
		downY = ev.clientY - obj.offsetTop;
		document.onmousemove = function(ev){
			var ev = ev || event;
			obj.style.left = ev.clientX - downX + 'px';
			obj.style.top = ev.clientY - downY + 'px';
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
		return false;
	}
}
function getStyle(obj, attr){
	return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj,false)[attr];
}
function doMove(obj, json, fnEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iBtn = true;
		for(var attr in json){
			var iCur = 0;
			if( attr == 'opacity'){
				iCur = Math.round(parseFloat(getStyle(obj, attr))*100);
			}else{
				iCur = parseInt(getStyle(obj, attr));
			}

			var speed = (json[attr] - iCur )/6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(json[attr] != iCur){
				iBtn = false;
			}

			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity: '+(iCur+speed)+')';
				obj.style.opacity = (iCur + speed)/100;
			}else{
				obj.style[attr] = (iCur + speed) + 'px';
			}
		}
		if( iBtn ){
			fnEnd && fnEnd();
		}
	},1000/60);
}
// 修改titile
var change = (function(){
	var oP = g('#change');
	var aInp = getChild(oP,'input');
	var oTxt = getChild(oP,'p')[0];
	aInp[1].onclick = function(){
		oTxt.innerHTML = aInp[0].value;
		aInp[0].title = '文本框的标题被改变了';
	}
})();
// 显示隐藏
var showhide = (function(){
	var oP = g('#showhide');
	var oInp = getChild(oP,'input')[0];
	var oDiv = g('.range')[0];
	var iBtn = true;
	oDiv.style.cssText = 'width: 280px; height: 100px; background: red; display: none;'
	oInp.onclick = function(){
		oDiv.style.display = iBtn ? 'block' : 'none';
		oInp.value = iBtn ? '点击隐藏' : '点击显示';
		iBtn = !iBtn;
	}
})();

var savename = (function(){
	var oPrt = g('#savename');
	var oDiv = getByClass(oPrt,'range')[0];
	var oChk = getChild(oPrt,'input')[1];
	oDiv.style.cssText = 'width: 260px; padding: 10px; background: '+randomColor()+'; display: none;';

	oChk.onmouseover = function(){
		oDiv.style.display = 'block';
	}
	oChk.onmouseout = function(){
		oDiv.style.display = 'none';
	}
})();
// className
var clsName = (function(){
	var oPrt = g('#clsName');
	var oBtn = getChild(oPrt,'input')[0];
	var oDiv = getByClass(oPrt,'litbox')[0];

	oBtn.onclick = function(){
		oDiv.className = 'litbox-item';
	}
})();
// 全选反选
var chkbox = (function(){
	var oPrt = g('#chkbox');
	var oCtrbox = getByClass(oPrt,'ctrbox')[0];
	var aInp = getChild(oCtrbox,'input');
	var oChkbox = getByClass(oPrt,'chkbox')[0];
	var aInput = getChild(oChkbox,'input');
	var iBtn = true;

	aInp[0].onclick = function(){
		for (var i = 0,n=0; i < aInput.length; i++) {
			aInput[i].checked && n++;
			aInput[i].checked = !aInput[i].checked;
		};
		aInp[0].value = n != 0 ? '全选' : '反选';
	}
	aInp[1].onclick = function(){
		for (var i = 0; i < aInput.length; i++) {
			aInput[i].checked = false;
		};
	}
})();

// 设置样式
var setAttr = (function(){
	var oPrt = g('#setAttr');
	var oDiv = getByClass(oPrt,'div1')[0];
	var aInp = getChild(oPrt,'input');
	oDiv.style.cssText = 'width: 100px; height: 50px; border: 1px solid #999; margin-top: 10px;';

	aInp[2].onclick = function(){
		oDiv.style[aInp[0].value] = aInp[1].value;
	}
})();

var tab = (function(){
	var oTab = getByClass(document,'tab')[0];
	var aBtn = getChild(oTab,'span');
	var aDiv = getByClass(oTab,'tab-body-item');

	aBtn[0].className =  'selected';
	aDiv[0].style.display = 'block';
	for (var i = 0; i < aBtn.length; i++) {
		aBtn[i].index = i;
		
		aBtn[i].onmouseover = function(){
			for (var i = 0; i < aBtn.length; i++) {
				aBtn[i].className = i == this.index ? 'selected': '';
				aDiv[i].style.display = i == this.index ? 'block' : 'none';
			};
		};
	}
})();
// 简易日历
var calender = (function(){
	var oPrt = getByClass(document,'calender')[0];
	var aP = getChild(oPrt,'p');
	var oCon = getByClass(document,'cont')[0];
	var aStrong = getChild(oCon,'strong')[0];
	var aSpan = getChild(oCon,'span');
	var arr=[
		'1月的活动，我们去哪玩',
		'2月的活动，我们去哪玩',
		'3月的活动，我们去哪玩',
		'4月的活动，我们去哪玩',
		'5月的活动，我们去哪玩',
		'6月的活动，我们去哪玩',
		'7月的活动，我们去哪玩',
		'8月的活动，我们去哪玩',
		'9月的活动，我们去哪玩',
		'10月的活动，我们去哪玩',
		'11月的活动，我们去哪玩',
		'12月的活动，我们去哪玩'
    ];
	for (var i = 0; i < aP.length; i++) {
		aP[i].index = i;
		aP[i].onmouseover = function(){
			for (var k = 0; k < aP.length; k++) {
				aP[k].className = k == this.index ? 'active' : '';
			};
			oCon.innerHTML = '<strong>'+(this.index+1)+'月</strong><p>'+arr[this.index]+'</p>';
		}
	};
})();

// 简单计算
var addnum = (function(){
	var oPrt = g('#addnum');
	var aInp = getChild(oPrt,'input');
	var oTxt = getChild(oPrt,'p')[0];
	var num = 0;

	
	for (var i = 0; i < aInp.length-3; i++) {
		aInp[i].index = i;
		aInp[i].onclick = function(){
			for (var i = 0; i < aInp.length-3; i++) {
				aInp[i].style.background = '';
			};
			this.style.background = '#f60';
			num = this.index;
		}
	};
	aInp[5].onkeydown = onlyNum;
	aInp[6].onkeydown = onlyNum;
	aInp[7].onclick = function(){
		if(aInp[5].value == '' || aInp[6].value == '' )return;
		var result = 0;
		var n1 =  parseFloat(aInp[5].value);
		var n2 = parseFloat(aInp[6].value);
		
		switch(num){
			case 0:
				result = n1 + n2;
				break;
			case 1:
				result = n1 - n2;
				break;
			case 2:
				result = n1 * n2;
				break;
			case 3:
				result = n1 / n2;
				break;
			case 4:
				result = n1 % n2;
				break;
		}
		oTxt.innerHTML = '计算结果：' + result;
	}
	// 只允许输入数字
	function onlyNum(ev) {
		var ev = ev || event;
		if(ev.keyCode !=8 && ev.keyCode !=37 && ev.keyCode !=39 && ev.keyCode <48 || ev.keyCode >57 ){
			return false;
		}	
	}
})();
// 整数取模计算时间
var delivery = (function(){
	var oPrt = g('#delivery');
	var aInp = getChild(oPrt,'input');
	var oTxt = getChild(oPrt,'p')[0];
	aInp[1].onclick = function(){
		if(aInp[0].value == '') return;
		var num = parseFloat(aInp[0].value);
		var iDay = num < 86400 ? Math.floor(num/86400) : Math.floor(num % 86400);
		var iH =  num < 3600 ? Math.floor(num/3600) : Math.floor(num%86400/3600);
		var iM =  Math.floor(num%86400%3600/60);
		var iS = Math.floor(num % 60);
		oTxt.innerHTML = iDay+'天'+iH+'时'+iM+'分'+iS+'秒';
	}
})();

// 简单数码时钟
var colock = (function(){
	var oPrt = g('#colock');
	var aImg = getChild(oPrt,'img');

	setInterval(toTime,1000);

	toTime();
	function toTime(){
		
		var oDate = new Date();
		var str = toDou(oDate.getHours())+toDou(oDate.getMinutes()) + toDou(oDate.getSeconds());

		for (var i = 0; i < aImg.length; i++) {
			aImg[i].src = 'img/'+str.charAt(i)+'.png';
		};
	}

	function toDou(n){
		return n = n < 10 ? '0'+n : ''+n;
	}
})();

// div排序
var boxsort = (function(){
	var oPrt = g('#boxsort');
	var aInp = getChild(oPrt,'input');
	var oConDiv = getByClass(oPrt,'content')[0];
	var aDiv = getByClass(oPrt,'list-item');
	var arr = [];

	for (var i = 0; i < aDiv.length; i++) {
		aDiv[i].style.background = randomColor();
		arr.push(aDiv[i]);
	};
	aInp[0].onclick = function(){
		arr.sort(function(n1,n2){
			var n1 = parseInt(n1.innerHTML);
			var n2 = parseInt(n2.innerHTML);

			return n1 - n2;
		});
		for (var i = 0; i < arr.length; i++) {
			oConDiv.appendChild(arr[i]);
		};
	}
	aInp[1].onclick = function(){
		arr.sort(function(n1,n2){
			var n1 = parseInt(n1.innerHTML);
			var n2 = parseInt(n2.innerHTML);

			return n2 - n1;
		});
		for (var i = 0; i < arr.length; i++) {
			oConDiv.appendChild(arr[i]);
		};
	}
	aInp[2].onclick = function(){
		arr.sort(function(){
			return Math.random() - 0.5;
		});
		for (var i = 0; i < arr.length; i++) {
			oConDiv.appendChild(arr[i]);
		};
	}
})();

// 表格排序
var myTab = (function(){
	var oPrt = g('#tab1');
	var oTab = getChild(oPrt,'table')[0];
	var aInp = getChild(oPrt,'input');
	var arr = [];
	var iRow = oTab.tBodies[0].rows;
	changeColor();
	function changeColor(){
		for(var i = 0; i < iRow.length; i++){
		iRow[i].index = i;
		// 隔行变色
			iRow[i].onmouseover = function(){
				for (var k = 0; k < iRow.length; k++) {
					iRow[k].style.background = k == this.index ? 'yellow' : 'none';
				};
			}
			iRow[i].onmouseout = function(){
				this.style.background = 'none';
			}
			arr.push(iRow[i]);
		}
	}
	aInp[0].onclick = function(){
		arr.sort(function(n1,n2){
			var a = n1.cells[1].innerHTML.charAt(0);
			var b = n2.cells[1].innerHTML.charAt(0);
			return b - a;
		});
		for (var i = 0; i < arr.length; i++) {
			oTab.tBodies[0].appendChild(arr[i]);
		};
		changeColor();
	}
	aInp[1].onclick = function(){
		arr.sort(function(n1,n2){
			var a = n1.cells[1].innerHTML.charAt(0);
			var b = n2.cells[1].innerHTML.charAt(0);
			return a - b;
		});
		for (var i = 0; i < arr.length; i++) {
			oTab.tBodies[0].appendChild(arr[i]);
		};
		changeColor();
	}
	aInp[2].onclick = function(){
		arr.sort(function(n1,n2){
			var a = n1.cells[0].innerHTML;
			var b = n2.cells[0].innerHTML;
			return b - a;
		});
		for (var i = 0; i < arr.length; i++) {
			oTab.tBodies[0].appendChild(arr[i]);
		};
		changeColor();
	}
	aInp[3].onclick = function(){
		arr.sort(function(n1,n2){
			var a = n1.cells[0].innerHTML;
			var b = n2.cells[0].innerHTML;
			return a - b;
		});
		for (var i = 0; i < arr.length; i++) {
			oTab.tBodies[0].appendChild(arr[i]);
		};
		changeColor();
	}
	aInp[4].onclick = function(){
		arr.sort(function(n1,n2){
			var a = n1.cells[2].innerHTML;
			var b = n2.cells[2].innerHTML;
			return a - b;
		});
		for (var i = 0; i < arr.length; i++) {
			oTab.tBodies[0].appendChild(arr[i]);
		};
		changeColor();
	}
	aInp[5].onclick = function(){
		arr.sort(function(n1,n2){
			var a = n1.cells[2].innerHTML;
			var b = n2.cells[2].innerHTML;
			return b - a;
		});
		for (var i = 0; i < arr.length; i++) {
			oTab.tBodies[0].appendChild(arr[i]);
		};
		changeColor();
	}
})();
// 表格查找
var search = (function(){
	var oPrt = g('#tab2');
	var aInp = getChild(oPrt,'input');
	var oTab = getChild(oPrt,'table')[0];
	var iRow = oTab.tBodies[0].rows;
	var arr = [];

	changeColor();
	function changeColor(){
		for(var i = 0; i < iRow.length; i++){
		iRow[i].index = i;
		// 隔行变色
			iRow[i].onmouseover = function(){
				for (var k = 0; k < iRow.length; k++) {
					iRow[k].style.background = k == this.index ? 'yellow' : 'none';
				};
			}
			iRow[i].onmouseout = function(){
				this.style.background = 'none';
			}
		}
	}
	aInp[1].onclick = function(){
		if(aInp[0].value == '') return;
		for (var i = 0; i < iRow.length; i++) {
			var oStab = iRow[i].cells[1].innerHTML.toLowerCase();
			var oStxt = aInp[0].value.toLowerCase();

			var arr = oStxt.split(',');
			iRow[i].style.background = '';
			for (var k = 0; k < arr.length; k++) {
				if(oStab.search(arr[k]) != -1){
					iRow[i].style.background = 'red';
				}
			};
		};
	}
})();

// 表格添加
var addTab = (function(){
	var oPrt = g('#tab3');
	var oTab = getChild(oPrt,'table')[0];
	var aInp = getChild(oPrt,'input');
	var orderNum = oTab.tBodies[0].rows.length+1;

	aInp[2].onclick = function(){
		if(aInp[0].value == '' || aInp[1].value == '') return;
		var oTr = document.createElement('tr');
		var oTd = document.createElement('td');
		oTd.innerHTML = orderNum++;
		oTr.appendChild(oTd);
		var oTd = document.createElement('td');
		oTd.innerHTML = aInp[0].value;
		oTr.appendChild(oTd);

		var oTd = document.createElement('td');
		oTd.innerHTML = aInp[1].value;
		oTr.appendChild(oTd);

		var oTd = document.createElement('td');
		oTd.innerHTML = '<a href="javascript:;">删除</a>';
		oTr.appendChild(oTd);

		oTab.tBodies[0].appendChild(oTr);

		oTd.getElementsByTagName('a')[0].onclick = function(){
			if(confirm('你确定要删除吗？')){
				oTab.tBodies[0].removeChild(this.parentNode.parentNode);
			}else{
				return false;
			}
		}
	}
	var isFind = true;
	aInp[3].onclick = function(){
		if(aInp[0].value == '') return;
		for (var i = 0; i < oTab.tBodies[0].rows.length; i++) {
			var oStab = oTab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
			var oStxt = aInp[0].value.toLowerCase();
			var arr = oStxt.split(',');
			
			oTab.tBodies[0].rows[i].style.background = '';

			for (var j = 0; j < arr.length; j++) {
				if( oStab.search(arr[j]) != -1){
					isFind = false;
					oTab.tBodies[0].rows[i].style.background = 'red';
				}
			};
		};
		if( isFind ){
			alert('抱歉，没有找到!');
		}
	}
	for (var i = 0; i < oTab.tBodies[0].rows.length; i++) {
		oTab.tBodies[0].rows[i].index = i;
		oTab.tBodies[0].rows[i].onmouseover = function(){
			for (var j = 0; j < oTab.tBodies[0].rows.length; j++) {
				oTab.tBodies[0].rows[j].style.background = j == this.index ? 'yellow':'none';
			};
		}
		oTab.tBodies[0].rows[i].onmouseout = function(){
			this.style.background = '';
		}
	};
})();
// 选中文字分享
var share = (function(){
	var oPrt = g('#share');
	var oDiv = getByClass(oPrt,'share-body')[0];
	var oSpan = getChild(oDiv,'span')[0];

	oDiv.onmouseover = function(){
		doMove(oDiv,{left: 0});
	}
	oDiv.onmouseout = function(){
		doMove(oDiv,{left : -60});
	}
})();
// 自定义滚动条
var scrollbar = (function(){
	var oPrt = g('#scrollbar');
	var oConDiv = getByClass(oPrt,'content')[0];
	var oTxt = getChild(oConDiv,'p')[0];
	var oBar = getChild(oConDiv,'div')[0];
	var onUp = true;
	oConDiv.onmouseover = function(){
		oBar.style.display = 'block';
		doMove(oBar,{opacity : 100});
	}
	oConDiv.onmouseout = function(){
		if(!onUp){
			doMove(oBar,{opacity : 0});
			oBar.style.display = 'none';
		}
	}

	oBar.onmousedown = function(ev){
		var ev = ev || event;
		onUp = true;
		var downY = ev.clientY - oBar.offsetTop;
		document.onmousemove = function(ev){
			var ev = ev || event;
			var t = ev.clientY - downY;
			if(t < 0){
				t = 0;
			}else if( t > oConDiv.offsetHeight - oBar.offsetHeight ){
				t = oConDiv.offsetHeight - oBar.offsetHeight;
			}
			var scale = t / ( oConDiv.offsetHeight - oBar.offsetHeight );
			oTxt.style.top = -scale * ( oTxt.offsetHeight - oConDiv.offsetHeight) + 'px';
			oBar.style.top = t + 'px';
		}
		document.onmouseup = function(){
			onUp = false;
			oBar.style.display = 'none';
			document.onmousemove = null;
			document.onmouseup = null;
		}
		return false;
	}
})();
// 打开新窗口
var winopen = (function(){
	var oPrt = g('#winopen');
	var aInp = getChild(oPrt,'input');
	aInp[1].onclick = function(){
		var newWin = window.open('about:blank','_blank');
		newWin.document.write(aInp[0].value);
	}
	aInp[2].onclick = function(){
		window.open('closewindow.html','_blank');
	}
})();
// 登陆
var login = (function(){
	var oPrt = g('#login');
	var aInp = getChild(oPrt,'input');

	aInp[2].onclick = function(){
		if(aInp[3].checked){
			setCookie('username', aInp[0].value, 14);
		}
	}
	function setCookie(name, value, iDay){
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + iDay);
		document.cookie = name + '=' + value+';expires='+oDate;
	}
	function getCookie(name){
		var arr1 = document.cookie.split('; ');
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('=');
			if(arr2[0] == name){
				return arr[1];
			}
		};
		return '';
	}
})();

// 返回顶部
var toTop = (function(){
	var toTopBtn = g('#backTop');
	toTopBtn.onclick = function(){
		go(100);
	};

	function move(){
		document.body.scrollTop = 0;
	}
	function go(h){
		document.body.scrollTop = h + 'px';
	}
})();
