var oPanel = document.getElementById('panel');
var oListBox = document.getElementsByClassName('listbox')[0];
var aH3 = oListBox.getElementsByTagName('h3');
var aUl = oListBox.getElementsByTagName('ul');
var arr = [];
//将每个Li存入数组
for(var i = 0; i < aUl.length; i++){
	var oLi = aUl[i].getElementsByTagName('li');
	for(var j = 0; j < oLi.length; j++){
		arr.push(oLi[j]);
	}
}
//好友点击
for(var i = 0; i < arr.length; i++){
	arr[i].onclick = function(){
		for(var j = 0; j < arr.length; j++){
			arr[j].className = '';
		}
		this.className = 'active';
	}
}
//展开收起分组
for (var i = 0; i < aH3.length; i++) {
	aH3[i].index = i;
	
	aH3[i].onclick = function(){
		if(this.className != 'open'){

			for(var j = 0; j < aUl.length; j++) {
				if( j != this.index ){
					aUl[j].style.display = 'none';
					aH3[j].className = 'htitle';
				}
			}
			aUl[this.index].style.display = 'block';
			this.className = 'open';
		}else{
			this.className = 'htitle';
			aUl[this.index].style.display = 'none';
		}
	}
};

drag(oPanel);
//拖拽
function drag(obj){
	var oHead = obj.getElementsByClassName('header')[0];
	oHead.onmousedown = function(ev){
		var ev = ev || event;
		var downx = ev.clientX - obj.offsetLeft;
		var downy = ev.clientY - obj.offsetTop;
		
		document.onmousemove = function(ev){
			var ev = ev || event;
			var L = ev.clientX - downx;
			var T = ev.clientY - downy;

			L = limit(L, 0, (document.documentElement.clientWidth - obj.offsetWidth) );
			T = limit(T, 0, 600 );

			obj.style.left = L + 'px';
			obj.style.top = T + 'px';
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
		return false;
	}
}
//限制范围
function limit(iNow, min, max){
	if(iNow < min){
		return min;
	}else if(iNow > max){
		return max;
	}else {
		return iNow;
	}
}
