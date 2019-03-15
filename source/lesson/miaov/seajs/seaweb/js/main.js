define( function( require, exports ){

	var aA = document.querySelector('.navbox').getElementsByTagName('a');
	var aDiv = document.querySelectorAll('.body-item');
	var oMain = document.getElementById('main');
	var oMainItem = oMain.getElementsByTagName('div');

	window.iBtn = true;
	window.onhashchange = function(){
		if(window.iBtn){
			window.location.reload();
		}
	}

	require('show.js').show( aA, aDiv );
	require('hide.js').hide( aA, aDiv );
	
})