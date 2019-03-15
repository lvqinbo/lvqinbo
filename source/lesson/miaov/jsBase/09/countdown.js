var oWrap = document.querySelector('#wrapper');
var oSetDate = document.querySelector('.setdate');
var aInp = oSetDate.getElementsByTagName('input');
var oShowDate = document.querySelector('.showdate');
var aSpan = oShowDate.getElementsByTagName('span');
var oDisDate = document.querySelector('.disdate');
var oBtn = document.querySelector('#btn');

oBtn.onclick = function(){
	setDate();
	setInterval(setDate,1000);
}

function setDate(){
	var nowDate = new Date();
	var newDate = new Date();

	var iYear = parseInt(aInp[0].value);
	var iMon = parseInt(aInp[1].value);
	var iDay = parseInt(aInp[2].value);
	var iH = parseInt(aInp[3].value);

	newDate.setFullYear(iYear);
	newDate.setMonth(iMon-1);
	newDate.setDate(iDay);
	newDate.setHours(iH);
	newDate.setMinutes(0);
	newDate.setSeconds(0);

	var t = Math.floor((newDate - nowDate)/1000);
	if(t < 0) return;

	aSpan[0].innerHTML = toDou(Math.floor(t/86400));
	aSpan[1].innerHTML = toDou(Math.floor(t%86400/3600));
	aSpan[2].innerHTML = toDou(Math.floor(t%86400%3600/60));
	aSpan[3].innerHTML = toDou(Math.floor(t%60));

	oDisDate.innerHTML = '距离 <span>'+iYear+'-'+iMon+'-'+iDay+'-'+iH+'时</span> 还剩余';
}
function toDou(n){
	return n < 10 ? '0' + n : '' + n;
}