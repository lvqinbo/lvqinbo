var oDiv = document.getElementById('wrap');
var oImg = document.getElementById('img1');
var aImg = document.getElementsByTagName('img');
var oLastImg = oImg;

var x = 0;
var i = 0;
var speedX = 0;
var prevx = 0;
var timer = null;

for(i = 1; i < 77; i++){
	
	(function(newImg){
		var oImg = new Image();
		oImg.onload = function(){
			newImg.src = this.src;
		}
		oImg.src = 'img/miaov ('+i+').jpg';
		
		newImg.style.display = 'none';
		oDiv.appendChild(newImg);
	})(document.createElement('img'));
	
}

document.onmousedown = function(ev){
	var ev = ev || event;
	var disx = ev.clientX - x;
	clearInterval(timer);

	document.onmousemove = function(ev){
		var ev = ev || event;
		x = ev.clientX - disx;
		fnRoll();
		speedX = x - prevx;
		prevx = x;
	}
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmouseup = null;
		startMove();
	}
	return false;
}
function startMove(){

	timer = setInterval(function(){
		x += speedX;
		speedX>0 ? speedX--: speedX++;

		if(speedX == 0){
			clearInterval(timer);
		}
		fnRoll();
	},30);
}

function fnRoll(){
	var l = parseInt(-x/10);
	if(l > 0){
		l = l % 77;
	}else{
		l = l + -Math.floor(l/77)*77;
	}
	oLastImg.style.display = 'none';
	aImg[l].style.display = 'block';
	oLastImg = aImg[l];
}
