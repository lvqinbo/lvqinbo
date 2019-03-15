var oWrap = document.getElementById('wrap');
var oBgColor = oWrap.getElementsByTagName('p')[0];
var oText = oWrap.getElementsByTagName('p')[1];
var aDiv = oText.getElementsByTagName('div');
var num = 0;
var str = '';

for(var i = 0; i < 10; i++){
	str += '< div style="width: 50px; height: 50px; position: absolute; left: '+i * 50+'px; top: 0px; text-align: center; line-height: 50px; font-size: 30px;">+< /div>';
}
oText.innerHTML = str;

document.onclick = function(){
	oBgColor.style.width = 0;
	oBgColor.style.opacity = 100;
	doMove(oBgColor,{ width: 500, opacity : 20},function(){
		doMove(oBgColor,{opacity : 0});
	});
	
	var timer = setInterval(function(){
		doMove(aDiv[num],{ top: -200, opacity: 0});
		num++;
		if(num == aDiv.length){
			clearInterval(timer);
			num = 0;
			setTimeout(function(){
				oText.innerHTML = str;
			},300);
		}
	},70);
}
