$(function(){
	var oWrap = $('#wrap');
	var oBtn = $('#wrap input');
	var oClose = $('#cbtn');
	var dialog = null;

	// 创建弹窗
	oBtn.on('click',function(){
		if(dialog) return;
	
		dialog = $('< div class="dialog">< div class="dialog-title">< h3>登陆< /h3>'+
			'< a href="javascript:;">x< /a>< /div>< div class="dialog-body">content< /div>< /div>');

		// 插入到oWrap父级里
		oWrap.append(dialog);
		setData(dialog);
 		// 关闭弹窗
 		$(dialog).find('a').on('click',function(){
 			$(dialog).remove();
 			dialog = null;
 		});
		});
		// 窗口改变大小
		$(window).on('resize',function(){
			setData(dialog);
		})
		
	// 设置弹窗位置居中
	function setData(obj){
		obj.css('left',($(window).width() - obj.outerWidth() )/2);
		obj.css('top',($(window).height() - obj.outerHeight() )/2);
	}
})