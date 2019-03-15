var oBox = document.getElementById('box');

var oUl = getByClass(oBox,'msg')[0];	
var oControl = getByClass(oBox,'control')[0];
var oSend = oControl.getElementsByTagName('a')[0];
var oInp = oControl.getElementsByTagName('input')[0];
var oHead = oControl.getElementsByTagName('img')[0];

var iBtn = true;
var html = '';
//点击切换头像
oHead.onclick = function(){
	this.src = iBtn > 0 ? 'small2.jpg' : 'small.jpg';
	iBtn = !iBtn;
}
//鼠标点击发送信息
oSend.onclick = fnSend;
//键盘按下回车发送信息
document.onkeydown = function(ev){
	var ev = ev || event;
	if( ev.keyCode == 13 ){
		fnSend();
	}
}
//发送信息函数
function fnSend(){
	var sClass = '';
	sClass = iBtn > 0 ? 'left' : 'right';
	var re = /^\s/;
	if( oInp.value == '' || re.test(oInp.value) ){
		alert('请输入要发送的内容！');
		return;
	}
	html = '< li class="'+sClass+'">< img src="'+oHead.src+'" alt="haha"><span>'+oInp.value+'</span></li >' + html;

	oUl.innerHTML = html;
	oInp.value = '';
}