
define(function(require, exports, module){

	var aItem = g('.navType');
	var aPage = g('.page');

	window.onhashchange = function(){
		window.location.reload();
	}

	require('show.js').show(aItem, aPage);
	require('hide.js').hide(aItem, aPage);
});