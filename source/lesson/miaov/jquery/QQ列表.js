$(function(){
	var h2 = $('h2');
	var ulList = $('.f-list');
	var li = ulList.find('li');
	var oBar = $('.bar');
	var oBarBody = $('.bar-body');
	var downY = 0;
	var scale = 0;
	var iHeight = 0;
	var t = 0;

	// 好友列表展开收起
	$.each(h2,function(idx,ele){
		$(ele).on('click',function(){
			$(this).toggleClass('show');
			$(ulList).eq(idx).toggle();

			if($('#list').height() > 320 ){
				$(oBar).show();
			}else{
				$(oBar).hide();
			}
			iHeight = $('.panel').height() * $('.panel').height() /$('#list').height() -20;
			if(iHeight < 40){
				iHeight = 40;
			}
			$(oBarBody).css('height', iHeight);

		});
	});
	// 好友点击
	li.on('click',function(){
		$(li).attr('class','');
		$(this).attr('class','active');
	});
	// 面板拖拽
	var d1 = new Drag();
	d1.init('qq');
	
	sildeBar();
	// 滚动条
	function sildeBar(){
		oBarBody.mousedown(function(ev){
			downY = ev.pageY - $(this).position().top;
			$(document).mousemove(function(ev){
				t = ev.pageY - downY;
				if(t < 0){
					t = 0;
				}else if(t > oBar.height() - oBarBody.height()){
					t = oBar.height() - oBarBody.height();
				}
				$(oBarBody).css('top', t);

				scale = t / $(oBar).height();
				$('#list').css('top', -scale * ($('#list').height()));

			});
			$(document).mouseup(function(){
				$(document).off();
			});
			return false;
		});
	};
	
})
	function Drag(){
		this.obj = null;
		this.downX = null;
		this.downY = null;
	}
	Drag.prototype.init = function(id){
		this.obj = $('#'+id);
		this.title = this.obj.find('.header');
		var This = this.obj;

		this.title.mousedown(function(ev){
			This.downX = ev.pageX - This.offset().left;
			This.downY = ev.pageY - This.offset().top;

			$(document).mousemove(function(ev){
				This.css('left',ev.pageX - This.downX);
				This.css('top',ev.pageY - This.downY);
			});
			$(document).mouseup(function(){
				$(document).off();
			});
			return false;
		});
	}