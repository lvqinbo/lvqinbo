
var oMarkDiv = document.getElementById('mark');
var oStartBtn = document.getElementById('btnBg');
var aInput = oMarkDiv.getElementsByTagName('input');
var aSpan = oMarkDiv.getElementsByTagName('span');
var oP = oMarkDiv.getElementsByTagName('p')[0];

// 点击事件
oStartBtn.onclick = function(){
	fnTimeGo();
	setInterval(fnTimeGo,1000);
}
// 倒计时函数
function fnTimeGo(){
	var oDate = new Date();
	var oNewDate = new Date();

	// 获取输入框的值
	var iYear = parseInt(aInput[0].value);
	var iMonth = parseInt(aInput[1].value);
	var iDay = parseInt(aInput[2].value);

	// 设置事件
	oNewDate.setFullYear(iYear);
	oNewDate.setMonth(iMonth-1);
	oNewDate.setDate(iDay);
	oNewDate.setHours(0);
	oNewDate.setMinutes(0);
	oNewDate.setSeconds(0);

	var remain = Math.floor(oNewDate - oDate)/1000;
	if(remain < 0) return; // 如果输入日期小于当前时间则返回

	oP.innerHTML = '距离<strong>'+iYear+'-'+iMonth+'-'+iDay+'</strong>还剩余';
	aSpan[0].innerHTML = toDou(Math.floor(remain/86400));
	aSpan[1].innerHTML = toDou(Math.floor(remain%86400/3600));
	aSpan[2].innerHTML = toDou(Math.floor(remain%86400%3600/60));
	aSpan[3].innerHTML = toDou(Math.floor(remain%60));
}
// 补零
function toDou(n){
	return n < 10 ? '0'+n : '' + n;
}