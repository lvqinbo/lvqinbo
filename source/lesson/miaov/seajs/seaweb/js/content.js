define( function( require, exports, module ){
	function init( aDiv ){
		for (var i = 0; i < aDiv.length; i++) {
			aDiv[i].innerHTML += '';
		};
	}
	exports.init = init;
})