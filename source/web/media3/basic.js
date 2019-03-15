$(function(){
	$('a.mobile').on('click',function(){
		$('.asidebar').slideToggle('fast');
	});


	$('#menu a').on('click',function(){
		$('#menu a').attr('class','');
		$(this).attr('class','select');
	});

	window.onresize = function(){
		if( $(window).width() > 320 ){
			$('.asidebar').show();
		}
	};

});