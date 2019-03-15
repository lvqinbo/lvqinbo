$(function(){
	var oTxt = $('.msg');
	var oBtn = $('.sbtn');
	var re = /\D/;
	var iBtn = true;

	$('.txtbox').find('img').on('click',function(){
		$(this).attr('src',iBtn ? 'img/2.jpg' : 'img/1.jpg');
		iBtn = !iBtn;
	})
	
	oBtn.on('click',function(){
		send();
	});
	document.onkeydown = function(ev){
		var ev = ev || event;
		if(ev.keyCode == 13 && ev.ctrlKey){
			send();
		}
	}
	function send(){
		var sClass = 'sty-l';
		var iSrc = 'img/1.jpg';

		sClass = iBtn ? 'sty-l' : 'sty-r';
		iSrc = iBtn ? 'img/1.jpg' : 'img/2.jpg';
		if( oTxt.val() == '' ){
			alert('请输入一些内容！');
		}else{

			$('.list').prepend('< li class="'+sClass+'">< img src="'+iSrc+'" alt="">< span>'+oTxt.val()+'< /span>< /li>');
		}
		oTxt.val('');
	}
})