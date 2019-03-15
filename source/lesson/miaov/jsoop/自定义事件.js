bindEvent(oSpan, 'click', function(){
	console.log('span1');
});
bindEvent(oSpan, 'click', function(){
	console.log('span2');
});
bindEvent(oDiv, 'show', function(){
	console.log('div show');
})
bindEvent(oDiv, 'hide', function(){
	console.log('div hide');
})
// 主动触发调用
fireEvent(oDiv, 'show');
fireEvent(oDiv, 'hide');

// 绑定事件
function bindEvent(obj, evt, fn){

	obj.listener = obj.listener || {};
	obj.listener[evt] = obj.listener[evt] || [];
	obj.listener[evt].push( fn );

	if(obj.addEventListener){
		obj.addEventListener(evt, fn, false);
	}else{
		obj.attachEvent('on'+evt, fn);
	}
}
// 主动触发函数
function fireEvent(obj, evt){
	if(obj.listener){
		for (var i = 0; i < obj.listener[evt].length; i++) {
			obj.listener[evt][i]();
		};
	}
}
	