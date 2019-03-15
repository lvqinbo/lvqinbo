
define(function(require, exports, module){

	function show(aBtn, aPage){

		var firstHash = window.location.hash.substring(1) || 'index';

		for(var i = 0; i < aPage.length; i++){
			aPage[i].style.display = 'none';
			if(firstHash == aPage[i].dataset.hash){
				aPage[i].style.display = 'block';
			}
		}
	}

	exports.show = show;
})