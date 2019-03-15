var oWrap = document.getElementById('wrap');
var aDiv = oWrap.getElementsByTagName('div');
var iNum = 0;
var timer2 = null;
var iBtn = true;

for(var i = 0; i < 20; i++){
	oWrap.innerHTML += '< div style="left:'+i*52+'px;">'+i+'</ div>';
}
document.onclick = function(){
	clearInterval(timer2);
	timer2 = setInterval(function(){
		if(iBtn){
			doMove(aDiv[iNum],{top: 500});
			iNum++;
			if(iNum == aDiv.length){
				clearInterval(timer2);
				iNum = aDiv.length-1;
				iBtn = false;
			}
		}else{
			doMove(aDiv[iNum],{top: 0});
			iNum--;
			if(iNum == -1){
				iNum = 0;
				clearInterval(timer2);
				iBtn = true;
			}
		}
	},70);
}