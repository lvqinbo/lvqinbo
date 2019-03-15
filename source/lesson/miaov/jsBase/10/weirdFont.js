var oDiv = document.getElementById('box');
var oP = oDiv.getElementsByTagName('p')[0];
var oIn = oDiv.getElementsByTagName('input')[0];
var oBtn = oDiv.getElementsByTagName('input')[1];

var str = '';
var html = '';

oBtn.onclick = function(){
	if(fnCheck(oIn.value)){
		str = oIn.value;
	}
	for(var i = 10000; i <= str; i++){
		html += String.fromCharCode(i );
	}
	oP.innerHTML = html;
}

function fnCheck(str){
	if(str == ''){
		alert('还没输入');
	}else if(str.charAt(0) == '0' || str.charAt(0) > 5 ){
		alert('开头不能为0或大于5的数');
	}else if(parseInt(str) != parseFloat(str)){
		alert('请输入整数');
	}else if(str.length < 5 || str.length > 5){
		alert('不要超过5位或小于5位');
	}else{
		return true;
	}
}