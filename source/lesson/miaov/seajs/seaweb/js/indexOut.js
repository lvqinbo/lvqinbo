define( function( require, exports, module ) {

	function init( aA, aDiv, hash ){
		for (var i = 0; i < aDiv.length; i++) {
			if(aDiv[i].dataset.hash == 'index'){
				doMove( aDiv[i], {opacity: 0},function(){
					window.location.hash = hash;
					require('show.js').show( aA, aDiv );
				});
			}
		};
	}
	exports.init = init;
})