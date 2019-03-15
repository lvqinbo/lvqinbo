var oBox = document.getElementById('box');
var aDiv = oBox.getElementsByTagName('div');
var oP = oBox.getElementsByTagName('p')[0];
var aInp = oP.getElementsByTagName('input');

aInp[2].onclick = function(){
	var val = aInp[0].value;
	var pass = Number(aInp[1].value);
	fnPass(val,aDiv[0],pass);
	aInp[0].value = '';
	aInp[1].value = '';
}
aInp[3].onclick = function(){
	var val = aInp[0].value;
	var pass = -Number(aInp[1].value);
	fnPass(val,aDiv[1],pass);
	aInp[0].value = '';
	aInp[1].value = '';
}
function fnPass(val,valOut, num){
	var str = '';
	for (var i = 0; i < val.length; i++) {
		str += String.fromCharCode(val[i].charCodeAt()- num) ;
	};
	valOut.innerHTML = str;
}
