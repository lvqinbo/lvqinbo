define(function(require,exports,module){
	var oRed = document.getElementById('div1');
	var oInDiv = document.getElementById('div2');
	var oBlue = document.getElementById('square');
	var oWrap = document.getElementById('wrap');
	var oBtn = oWrap.getElementsByTagName('input')[0];
	
	require('./drag.js').drag(oBlue);
	oBtn.onclick = function(){
		oRed.style.display = 'block';
		require('./scale.js').scale(oRed,oInDiv);
	}
});
