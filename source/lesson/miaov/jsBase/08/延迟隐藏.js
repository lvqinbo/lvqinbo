var oParent = document.getElementById('panel');
var oHead = document.getElementById('hide');
var timer = null;

oParent.onmouseover = show;
oParent.onmouseout = hide;

oHead.onmouseover = show;
oHead.onmouseout = hide;

function show(){
	clearTimeout(timer);
	oHead.style.display = 'block';
}
function hide(){
	timer = setTimeout(function(){
		oHead.style.display = 'none';
	},500);
}