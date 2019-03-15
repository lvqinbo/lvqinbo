define( function( require, exports, module) {
	function init( obj,hash ){
		doMove( obj, {opacity: 100},function(){
			window.iBtn = true;

			var data = require('../data/dataStudent.js').arr;
			require('setData.js').load( obj,data,hash );
		});
	}
	exports.init = init;
})