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
