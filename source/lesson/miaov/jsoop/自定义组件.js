/*
	基于JQ开发的自定义组件：
	配置：evt delay
	方法：nowSel getContent
	事件：beforeClick afterClick

*/
$(function(){
	var t1 = new Tab();
	t1.init('box1');

	var t2 = new Tab();
	t2.init('box2',{
		evts : 'mouseover'
	});
	var t3 = new Tab();
	t3.init('box3',{
		evts : 'mouseover',
		delay : 200
	});
	var t4 = new Tab();
	t4.init('box4',{});
	t4.nowSel(2);

	var t5 = new Tab();
	t5.init('box5',{});
	$('input').eq(0).on('click',function(){
		alert(t5.getTitle());
	});
	$('input').eq(1).on('click',function(){
		alert(t5.getContent());
	});

	var t6 = new Tab();
	t6.init('box6',{});
	
	$(t6).on('beforeClick',function(){
		alert(t6.getContent());
	});
	$(t6).on('afterClick',function(){
		alert(t6.getContent());
	});

});
// 构造函数
function Tab(){
	this.oParent = null;
	this.aSpan = null;
	this.aDiv = null;
	this.iNow = 0;
	this.settings = {
		evts : 'click'
	}
}
// 初始化方法
Tab.prototype.init = function(oParent, opt){
	$.extend(this.settings, opt);
	this.oParent = $('#'+oParent);
	this.aSpan = this.oParent.find('span');
	this.aDiv = this.oParent.find('div');

	this.change();
}
// change方法
Tab.prototype.change = function(){
	var This = this;
	var timer = null;
	this.aSpan.on(this.settings.evts,function(){
		var _this = this;
		if(This.settings.evts == 'mouseover' && This.settings.delay){
			timer = setTimeout(function(){
				This.show(_this);
			},This.settings.delay);
		}else{
			This.show(this);
		}
	}).mouseout(function(){
		clearTimeout(timer);
	});
}
Tab.prototype.show = function(obj){
	var This = this;
	$(This).trigger('beforeClick');
	
	This.aSpan.attr('class','');
	This.aDiv.css('display','none');
	
	This.iNow = $(obj).index();

	$(obj).attr('class','selected');
	This.aDiv.eq($(obj).index()).css('display','block');
	$(This).trigger('afterClick');
}
// 传入下标让当前的元素高亮
Tab.prototype.nowSel = function(idx){
	this.aSpan.attr('class','');
	this.aDiv.css('display','none');
	this.aSpan.eq(idx).attr('class','selected');
	this.aDiv.eq(idx).css('display','block');
	this.iNow = idx;
}
// 获取元素的内容
Tab.prototype.getContent = function(){
	return this.aDiv.eq(this.iNow).html();
}
// 获取元素的标题
Tab.prototype.getTitle = function(){
	return this.aSpan.eq(this.iNow).html();
}