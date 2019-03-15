var oUl = document.getElementById('ul1');
var oUl2 = document.getElementById('ul2');
var timer2 = null;

fnTab(oUl);

timer2 = setTimeout(function(){
	fnTab(oUl2);
},2000);

function fnTab(obj){
	var aDiv = obj.getElementsByTagName('div');
	var num = 0;
	var timer = null;
	var onOff = true;
	
	setInterval(function(){
		change();
	},3000);

	function change(){
		timer = setInterval(function(){
			if(num == aDiv.length){
				clearInterval(timer);
				num = 0;
				onOff =  !onOff;
			}else if(onOff){
				doMove(aDiv[num],{top: 0});
				num++;
			}else{
				doMove(aDiv[num],{top: -30});
				num++;
			}

		},100);
	}
}
	
window.onfocus = function(){
	console.log(1);
	timer = setInterval(change,2000);
	timer2 = setTimeout(function(){
	fnTab(oUl2);
	},2000);
}
window.onblur = function(){
	console.log(2);
	clearInterval(timer);
	clearTimeout(timer2);
}
