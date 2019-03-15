/*
	事件委托：利用冒泡原理，把事件加到父级上，减少操作
	好处：1.提高性能 2.新添加的元素也有之前的事件

	event对象：事件源 ：不管在哪个事件中，只要你操作的那个元素就是事件源

	IE下 window.event.srcElement
	标准下 target

	nodeName 找到事件源的标签名
*/
var oUl = document.getElementById('ul1');
	var aLi = oUl.getElementsByTagName('li');
	var oWrap = document.getElementById('wrap');
	var aInput = oWrap.getElementsByTagName('input');
	
	// 普通的写法，给每个li加事件，如果li比较多，性能会差
	/*for (var i = 0; i < aLi.length; i++) {
		aLi[i].onmouseover = function(){
			this.style.background = 'red';
		}

		aLi[i].onmouseout = function(){
			this.style.background = '';
		}
	};*/
	// 事件委托，通过委托ul来给li加事件
	oUl.onmouseover = function(ev){
		var ev = ev || event;
		var target = ev.target || ev.srcElement;
		if(target.nodeName.toLowerCase() == 'li'){
			target.style.background = '#f0f0f0';
		}
	}
	oUl.onmouseout = function(ev){
		var ev = ev || event;
		var target = ev.target || ev.srcElement;
		if(target.nodeName.toLowerCase() == 'li'){
			target.style.background = '';
		}
	}
	// 通过事件委托，动态创建的元素同样拥有之前元素的事件
	aInput[1].onclick = function(){
		fnCreateLi();
	}
	// 键盘事件 回车键
	document.onkeydown = function(ev){
		var ev = ev || event;
		if(ev.keyCode == 13){
			fnCreateLi();
		}
	}
	// 动态创建li
	function fnCreateLi(){
		var oLi = document.createElement('li');
		oLi.innerHTML = aInput[0].value;
		oUl.insertBefore(oLi,aLi[0]);
	}