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
