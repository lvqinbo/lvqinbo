var aBtn = document.getElementsByTagName('input');
var oUl = document.getElementById('ul1');
var aLi = document.getElementsByTagName('li');

var str = '';
var arr = [];
var num = iNum = 0;
var timer = null;
var onOff = true;
var arrColor = ['#3A5FCD','#008B00','#7A378B','#8B1A1A','#EE9A00','#CD3278'];
	
aBtn[1].onclick = function(){

	var str = parseInt(aBtn[0].value);
	if( aBtn[0].value != ''){
		createLi(str,80,80);
	}else{
		return;
		alert('请输入数量');
	}
}
aBtn[2].onclick = function(){
	createLi(9,100,100);
}

aBtn[3].onclick = function(){
	createLi(81,50,50);
}

function createLi(cNum,W,H){
	if(!onOff)return;
	onOff = false;
	oUl.innerHTML = null;

	timer = setInterval(function(){
		var oLi = document.createElement('li');

		oLi.style.width = W+'px';
		oLi.style.height = H+'px';
		oLi.style.background = arrColor[num%arrColor.length];
		oLi.innerHTML = num+1;
		oLi.style.lineHeight = H+'px';

		if(cNum > 9 && W > 50){
			oUl.style.width = '960px';
		}
		else if(cNum > 9 && W == 50){
			oUl.style.width = '540px';
		}
		else{
			oUl.style.width = '330px';
		}
		oUl.appendChild(oLi);
		
		num++;
		if(num == cNum){
			clearInterval(timer);
			num = 0;
			onOff = true;
		}
	},100);
}
/*------------------之字形------------------*/
var oBox = document.getElementById('box');
var aDiv = oBox.getElementsByTagName('div');
var n = 10;
var len =60;
var num = 0;
var arrColor = ['green','blue','yellow','orange'];

for (var i = 0; i < len; i++) {
	oBox.innerHTML+='<div>'+i+'</div>';
};

for (var i = 0; i < aDiv.length; i++) {
	aDiv[i].style.left = (i%n)* 55 +'px';
	aDiv[i].style.top = Math.floor(i/n)* 55 +'px';

	//判断规律 n*1 2 3 4 5 6 
	//距离规律 n*2-1 n*4-1 n*6-1

	if(i>=n && i<(n*2)){
		aDiv[i].style.left = ((n*2-1)%i) * 55 +'px';
	}
	else if(i >=(n*3) && i < (n*4)){
		aDiv[i].style.left = ((n*4-1)%i) * 55 +'px';
	}
	else if(i >=(n*5) && i <(n*6)){
		aDiv[i].style.left = ((n*6-1)%i) * 55 +'px';
	}
	else if(i >=(n*7) && i <(n*8)){
		aDiv[i].style.left = ((n*8-1)%i) * 55 +'px';
	}
	else if(i >=(n*9) && i <(n*10)){
		aDiv[i].style.left = ((n*10-1)%i) * 55 +'px';
	}
};

var timer = setInterval(function(){
	aDiv[num].style.background = arrColor[num%arrColor.length];
	num ++;
	if(num == len){
		clearInterval(timer);
	}
},200);

/*------------------回字形------------------*/
var oBox = document.getElementById('box');
var aDiv = oBox.getElementsByTagName('div');
var n = 10;
var len =20;
var num = 0;
var arrColor = ['green','blue','yellow','orange'];

for (var i = 0; i < len; i++) {
	oBox.innerHTML+='<div>'+i+'</div>';
};

for (var i = 0; i < aDiv.length; i++) {
	aDiv[i].style.left = (i%n)* 55 +'px';

	//判断规律 n*1 2 3 4 5 6 
	//距离规律 n*2-1 n*4-1 n*6-1
	// 5 3 4 2 3 3
	if(i>4 && i<8){
		aDiv[i].style.left ='220px';
		aDiv[i].style.top = (i%4) * 55 +'px';	
	}
	else if(i>7 && i<12){
		aDiv[i].style.left = (11%i) * 55 +'px';	
		aDiv[i].style.top =Math.floor(i/7)* 165 +'px';
	}
	else if(i>11 && i<14){
		aDiv[i].style.left = '0px';
		aDiv[i].style.top =(14%i)* 55 +'px';
	}
	else if(i>13 && i<17){
		aDiv[i].style.left =(i%13)* 55 +'px';
		aDiv[i].style.top = '55px';
	}
	else if(i>16 && i<20){
		aDiv[i].style.left =(20%i)* 55 +'px';
		aDiv[i].style.top = '110px';
	}
	
}	
var timer = setInterval(function(){
	aDiv[num].style.background = arrColor[num%arrColor.length];
	num ++;
	if(num == len){
		clearInterval(timer);
	}
},200);
