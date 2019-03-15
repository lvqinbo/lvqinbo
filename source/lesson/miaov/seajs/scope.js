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
