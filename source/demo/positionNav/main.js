// jq方式
/*$(document).ready(function(){
	$(window).scroll(function(){
	var top = $(window).scrollTop();
	var item = $('#content').find('.item');
	var menu = $('#menu');

	var currentId = ''; 
	item.each(function(){
		var eles = $(this);

		var itemTop = eles.offset().top;
		if(top > itemTop - 200){
			currentId = '#' + eles.attr('id');
		}else{
			return false;
		}
		var currentLink = menu.find('.selected');
		if(currentId && currentLink.attr('href') != currentId){
			currentLink.removeClass('selected');
			menu.find('[href="'+currentId+'"]').addClass('selected');
		}
	});
	});
});*/
// 原生方式
function getByClass(obj, sClass){
	var eles = document.getElementsByTagName('*');
	var result = [];
	for(var i = 0, len = eles.length; i < len; i++){
		if(eles[i].className == sClass){
			result.push(eles[i]);
		}
	}
	return result;
}
function hasClass(obj, sClass){
	return obj.className.match(new RegExp('(\\s|^)'+ sClass +'(\\s|$)'));
}
function removeClass(obj, sClass){
	if(hasClass(obj, sClass)){
		var re = new RegExp('(\\s|^)'+ sClass +'(\\s|$)');
		obj.className = obj.className.replace(re, '');
	}
}
function addClass(obj, sClass){
	if(!hasClass(obj, sClass)){
		obj.className += ' ' + sClass;
	}
}
window.onload = function(){
	window.onscroll = windowScroll;
	function windowScroll(){
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	var menus = document.getElementById('menu').getElementsByTagName('a');
	var items = getByClass(document.getElementById('content'),'item');
	var currentId = '';
	for(var i = 0, len = items.length; i < len; i++ ){
		var eles = items[i];
		var itemTop = eles.offsetTop;

		if(top > itemTop - 200){
			currentId = eles.id;
		}else{
			break;
		}
		if(currentId){
			for(var j = 0, len = menus.length; j < len; j++){
				var eles2 = menus[j];
				var href = eles2.href.split('#');

				if(href[href.length - 1] != currentId){
					removeClass(eles2, 'selected');
				}else{
					addClass(eles2,'selected');
				}
			}
		}
	}
	}
}