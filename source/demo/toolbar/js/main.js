requirejs(['jquery','backtop'],function($, backtop){
	
	$('#backTop').backtop({
		mod: 'move',
		pos: 100
	});

	/*new backtop.BackTop($('#backTop'),{
		mod: 'to'
	});*/

	/*var scroll = new scrollto.ScrollTo({
		dest: 0,
		speed: 1000
	});
	// 点击返回顶部事件
	$('#backTop').on('click',$.proxy(scroll.slowMove,scroll));
	// 监听滚动的高度
	$(window).on('scroll', function(){
		checkPosition( $(window).height() );
	});

	checkPosition( $(window).height() );
	
	// 判断高度检测是否显示还是隐藏
	function checkPosition( pos ){
		if($(window).scrollTop() > pos){
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}
	// 快速到达顶部
	function toTopFast(){
		$('html,body').scrollTop( 0 );
	}
	// 带运动到顶部
	function toTop(){
		$('html,body').animate({scrollTop: 0}, 800);
	}*/

});