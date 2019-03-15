define(function( require, exports, module) {
	
	function hide( aA, aDiv ){
		for (var i = 0; i < aA.length; i++) {
			aA[i].index = i;
			aA[i].onclick = function() {
				var hash = this.dataset.hash;
				if(hash == 'index' && window.location.hash == ''){
					console.log('还未点击过其他页面');
					// return;
				}
				if(hash == window.location.hash.substring(1)) return;
				window.iBtn = false;

				switch( window.location.hash.substring(1) || 'index'){
					case 'index':
							require('indexOut.js').init( aA, aDiv, hash );
					break;
					case 'student':
							require('studentOut.js').init( aA, aDiv, hash );
					break;
					case 'message':
							require('messageOut.js').init( aA, aDiv, hash );
					break;
				}
			}
		};
	}
	exports.hide = hide;
})