var oWrap = document.getElementById('wrap');
var oShowInfo = oWrap.getElementsByClassName('showinfo')[0];
var oTxtIn = document.getElementById('txtin');
var oSelct = document.getElementById('setbg');
var oSendBtn = document.getElementById('sbtn');

// 点击按钮事件
oSendBtn.onclick = function(){
	fnSend();
}
// 键盘事件 ctrl + enter键
document.onkeydown = function(ev){
	var ev = ev || event;
	if(ev.keyCode == 13 && ev.ctrlKey){
		fnSend();
	}
}
// 发送函数
function fnSend(){
	var str = oTxtIn.value;
	var val = oSelct.value;
	var re = /\s/;
	for (var i = 0; i < str.length; i++) {
		if(re.test(str[i])){
			continue;
		}
		switch(val){
			case 'bj':
				oShowInfo.innerHTML += '< span style="background: '+randomColor()+'">'+str[i]+'< /span>';
				break;
			case 'qq':
				oShowInfo.innerHTML += '< span style="background: url(img/qiqiu.png)no-repeat; 
				background-size: cover;">'+str[i]+'< /span>';
				break;
			default:
				oShowInfo.innerHTML += str[i];
				break;
		}
	}
	oTxtIn.value = '';
	oShowInfo.innerHTML +=  '<br>';
}
// 随机函数
function randomVal(val){
	return Math.floor(Math.random() * (val + 1));
}
// 随机颜色
function randomColor(){
	return 'rgb(' + randomVal(255) + ',' + randomVal(255) + ',' + randomVal(255) + ')';
}
