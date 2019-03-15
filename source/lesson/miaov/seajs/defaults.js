// main.js
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
// drag.js 拖拽
define(function(require,exports,module){
	function drag(obj){
		var disX,disY = 0;
		obj.onmousedown = function(ev){
			var ev = ev || event;
			disX = ev.clientX - obj.offsetLeft;
			disY = ev.clientY - obj.offsetTop;
			
			document.onmousemove = function(ev){
				var ev = ev || event;
				var L = ev.clientX - disX;
				var T = ev.clientY - disY;
				var vW = document.documentElement.clientWidth - obj.offsetWidth;
				var vH = document.documentElement.clientHeight - obj.offsetHeight;
				
				L = require('./scope.js').scope(L,0,vW);
				T = require('./scope.js').scope(T,0,vH);
				
				obj.style.left = L + 'px';
				obj.style.top = T + 'px';
			}
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
			return false;
		}
	}
	exports.drag = drag;
})
// scale.js 缩放
define(function(require,exports,module){
	function scale(obj1,obj2){
		var disX,disY,downW,downH = 0;
		obj2.onmousedown = function(ev){
			var ev = ev || event;
			disX = ev.clientX;
			disY = ev.clientY;
			downW = obj1.offsetWidth;
			downH = obj1.offsetHeight;
			
			document.onmousemove = function(ev){
				var ev = ev || event;
				W = ev.clientX - disX + downW;
				H = ev.clientY - disY + downH;
				
				W = require('./scope.js').scope(W,100,500);
				H = require('./scope.js').scope(H,100,500);
				
				obj1.style.width = W + 'px';
				obj1.style.height = H + 'px';
			}
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
			return false;
		}
	}
	exports.scale = scale;
})
// scope.js 限制范围
define(function(require,exports,module){
	function scope(now,min,max){
		if(now < min){
			return min;
		}else if(now > max){
			return max;
		}else{
			return now;
		}
	}
	exports.scope = scope;
})

