// 随机生成颜色
var oBox = document.getElementById('box');

for(var i = 0; i< 30; i++){
	oBox.innerHTML += '< div style="position: absolute; width: 50px; height: 50px; 
	left: '+(i%10) * 52+'px; top: '+Math.floor(i/10) * 52+'px; 
	background: '+randomColor()+';">< /div>';
}

function randomVal(val){
	return Math.floor(Math.random() * (val + 1) );
}

function randomColor(){
	return 'rgb('+ randomVal(255) +','+ randomVal(255) +','+ randomVal(255) +')';
}