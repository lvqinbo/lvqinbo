
define(function(require, exports){

	function hide(aBtn, aPage){
		for(var i = 0; i < aBtn.length; i++){
			aBtn[i].index = i;
			aBtn[i].onclick = function(){
				var hash = this.dataset.hash;
				
				window.location.hash = hash;
			
			}
		}
	}

	exports.hide = hide;
})