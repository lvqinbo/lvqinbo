window.onload = function(){
	var aDiv = document.getElementsByTagName('div');
	var oMark = document.getElementById('mark');
	var oUlHide = document.getElementById('ul_hide');
	var aList = document.getElementsByClassName('list');

	var timer = null;
	var timer2 = null;
	var timer3 = null;
	var speed2 = 80;
	
	fnTab(aDiv[0],1);
	fnTab(aDiv[1],2);
	
	// 鼠标移入导航栏
	for (var i = 0; i < aList.length; i++) {
		aList[i].onmouseover = function(){
			clearTimeout(timer3);
			startMove(this.offsetLeft);
		}
		aList[i].onmouseout = function(){
			timer3 = setTimeout(function(){
				startMove(0);
			},100);
		}
	};
	// 鼠标移入遮罩
	oMark.onmouseover = function(){
		clearTimeout(timer3);
	}
	// 鼠标移出遮罩
	oMark.onmouseout = function(){
		startMove(0);
	}

	function fnTab(id,num){
		var aLi = id.getElementsByTagName('li');
		
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].onmouseover = function(){
				switch(num){
					case 1 : spring(this,270,'collision');break;
					case 2 : spring(this,270);break;
				}
			}
			aLi[i].onmouseout = function(){
				switch(num){
					case 1 : spring(this,30,'collision');break;
					case 2 : spring(this,30);break;
				}	
			}
		}
	}
	// 
	function spring(obj,iTarget,way){
		var speed = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			speed += (iTarget - obj.offsetHeight)/8;
			speed *= 0.75;
			
			var H = obj.offsetHeight + speed;
			if(way == 'collision'){
				// 兼容IE低版本
				if( H > 270){
					H = 270;
					speed *= -1;
				}else if(H < 30 ){
					H = 30;
					speed *= -1;
				}

				if( Math.abs(speed)<= 1 && Math.abs(iTarget - obj.offsetHeight)<=1){
					clearInterval(obj.timer);
					obj.style.height = iTarget + 'px';
					speed = 0;
				}
			}
			obj.style.height =  H + 'px';	
		},30);
	}
	// 
	function startMove(iTarget){
		clearInterval(timer2);
		timer2 = setInterval(function(){
			speed2 += ( iTarget - oMark.offsetLeft )/6;
			speed2 *= 0.75;

			if( Math.abs(speed2)<= 1 && Math.abs( iTarget - oMark.offsetLeft) <= 1 ){
				clearInterval(timer2);
				oMark.style.left = iTarget + 'px';
				oUlHide.style.left = - iTarget + 'px';
				speed2 = 0;
			}else
			{
				oMark.style.left = oMark.offsetLeft + speed2 + 'px';
				oUlHide.style.left = -oMark.offsetLeft + 'px';
			}
		},30);
	}
}