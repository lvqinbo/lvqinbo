var oBtnBox = document.getElementById('btnBar');
var oSpan = oBtnBox.getElementsByTagName('span')[0];
var aBtn = oBtnBox.getElementsByTagName('a');
var oListDiv = document.getElementById('wrap');
var oUl = oListDiv.getElementsByTagName('ul')[0];
var aLi = oUl.getElementsByTagName('li');

var iNum  = 0;
var arr = [];
var onoff = true;
oUl.style.width = aLi.length * aLi[0].offsetWidth + 'px';

for (var i = 0; i < aLi.length; i++) {
	arr.push(aLi[i].offsetLeft);
};
for (var i = 0; i < arr.length; i++) {
	aLi[i].style.position = 'absolute';
	aLi[i].style.left = arr[i] + 'px';
};

aBtn[0].onclick = function(){
	if(!onoff) return;
		onoff = false;
	aBtn[1].className = '';
	this.className = 'active';
	doMove(oSpan,{left : 420});
	fnMoveBack();
}
aBtn[1].onclick = function(){
	if(!onoff) return;
		onoff = false;
	aBtn[0].className = '';
	this.className = 'active';
	doMove(oSpan,{left : 500});
	fnMoveLeft();
} 
function fnMoveBack(){
	clearInterval(timer2);
	var timer2 = setInterval(function(){
		iNum--;
		startMove(aLi[iNum], arr[iNum]);
		// doMove(aLi[iNum],{ left : arr[iNum] });
		if(iNum <= 0){
			clearInterval(timer2);
			iNum = 0;
			onoff = true;
		}
	},150);
}
function fnMoveLeft(){
	clearInterval(timerStop);
	var timerStop = setInterval(function(){
		startMove(aLi[iNum], -oUl.offsetWidth/2 );
		iNum++;
		
		if(iNum >= aLi.length/2){
			clearInterval(timerStop);
			fnNext();
		}
	},150);
}
function fnNext(){
	clearInterval(timerNext);
	var timerNext = setInterval(function(){
		startMove(aLi[iNum], arr[iNum- aLi.length/2] );
		iNum++;
		if(iNum >= aLi.length){
			clearInterval(timerNext);
			onoff = true;
		}
	},150);
}
function startMove(obj,iTarget){
	var speed = 0;
	clearInterval(obj.timer2);
	obj.timer2 = setInterval(function(){
		speed += (iTarget - obj.offsetLeft)/12;
		speed *= 0.7;
		if(Math.abs(obj.offsetLeft - iTarget)<= 1 && Math.abs(speed)<=1 ){
			clearInterval(obj.timer2);
		}
		obj.style.left = obj.offsetLeft + speed + 'px';
	},30);
}