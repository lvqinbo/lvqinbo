// 通用函数
var getId = function(id){
	return document.getElementById(id);
}
var get_tpl = function(id){
	return getId("tpl_" + id).innerHTML;
}
var getByClass = function( sClass ){
	return document.getElementsByClassName( sClass );
}
var getView = function(){
	return {
		vW : document.body.clientWidth,
		vH : document.body.clientHeight
	}
}
// 格式化数据
var list = {};

for (var i = 0; i < data.length; i++) {
	var date = new Date( data[i].date );
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var lunar = GetLunarDateString( date );

	if(!list[year]) { list[year] = {} };
	if(!list[year][month]) {list[year][month] = [] };

	var item = data[i];

	item.year = year;
	item.month = month;
	item.lunar = lunar[0] + '<br>&nbsp;&nbsp;&nbsp;' + lunar[1];
	item.like_format = item.like < 1000 ? item.like : (item.like / 10000).toFixed(1) + '万';

	list[year][month].push( item );
};
// 插入时序菜单数据
var tpl_scrubber_list = [];
var tpl_year  = get_tpl( 'scrubber_year' );
var tpl_month = get_tpl( 'scrubber_month' );

for( y in list ){
	var html_year = tpl_year.replace(/\{year\}/g, y);

	var html_month = [];
	for( m in list[y] ){
		html_month.unshift(tpl_month.replace(/\{year\}/g, y).replace(/\{month\}/g, m));
	}
	html_year = html_year.replace(/\{list\}/g, html_month.join(''));
	
	tpl_scrubber_list.unshift( html_year );
}

getId('scrubber').innerHTML = '<a href="javascript:;" onclick="scrollTo( 0 )">现在</a>'+tpl_scrubber_list.join('') + '<a href="javascript:;" class="scrubber_year" onclick="scrollTo(getView().vH )">出生</a>';

// 时序菜单的 HTML 文件
var tpl_content_list = [];
var tpl_year  = get_tpl( 'content_year' );
var tpl_month = get_tpl( 'content_month' );
var tpl_item  = get_tpl( 'content_item' );

for( y in list ){
	var html_year = tpl_year.replace(/\{year\}/g, y);

	var html_month = [];
	for( m in list[y] ){

		var html_itme = [];
		for( i in list[y][m] ){
			var item_data = list[y][m][i];
			var item_html = tpl_item
				.replace(/\{date\}/g, item_data.date)
				.replace(/\{lunar\}/g, item_data.lunar)
				.replace(/\{intro\}/g, item_data.intro)
				.replace(/\{media\}/g, item_data.media)
				.replace(/\{like\}/g, item_data.like)
				.replace(/\{comment\}/g, item_data.comment)
				.replace(/\{like_format\}/g, item_data.like_format);
			html_itme.push( item_html );
		}
		html_month.unshift( tpl_month.replace(/\{year\}/g, y).replace(/\{month\}/g, m).replace(/\{list\}/g, html_itme.join('')) );

	}
	html_year = html_year.replace(/\{list\}/g,html_month.join(''));
	tpl_content_list.unshift( html_year );
}
getId('content').innerHTML = tpl_content_list.join('') + '<div class="content_year content_month" id="content_month_0_0">出生</div>';


// 滚动到
var scrollTo = function( to ){
	var start = document.body.scrollTop;
	fx(function( now ){
		window.scroll(0, now);
	},start, to);

}

// 获取高度
var getTop = function( el ){
	return el.offsetTop + 240;
}

// 年份 月份点击处理
var showYear = function( year ){
	// console.log( year );
	var c_year = getId('content_year_'+ year);
	var top = getTop( c_year );
	scrollTo( top );
	expand_year(year, getId('scrubber_year_'+ year) );
}
var showMonth = function( year, month ){
	// console.log( year , month);
	var c_month = getId('content_month_'+year+'_'+month+'');
	var top = getTop( c_month );
	scrollTo( top );
	highlightMonth( getId('scrubber_month_'+year+'_'+month+'') );
}

// 高亮处理月份
var highlightMonth = function( element ){
	var months = getByClass('scrubber_month');
	for (var i = months.length - 1; i >= 0; i--) {
		months[i].className = months[i].className.replace(/current/g, "");
	};
	element.className = element.className + ' current';
}

// 展开年份的月份 和 高亮
var expand_year = function( year, element ){
	var months = getByClass('scrubber_month');
	var show_month = getByClass('scrubber_month_in_'+ year);
	var years = getByClass('scrubber_year');
	
	for (var i = months.length - 1; i >= 0; i--) {
		months[i].style.display = 'none';
	};
	for(var i = show_month.length - 1; i >= 0; i--){
		show_month[i].style.display = 'block';
	}
	for (var i = years.length - 1; i >= 0; i--) {
		years[i].className = years[i].className.replace(/active/g,"");
	};
	element.className = element.className + ' active';
}

var update_scrubber_year = function( top ){
	var years = getId('content').getElementsByClassName('content_year');
	var tops = [];
	for(var i = 0; i < years.length; i++){
		tops.push( years[i].offsetTop );
	}
	for(var i = 1; i < tops.length; i++){
		if( top > tops[i-1] && top < tops[i]){
			var year = years[i-1].innerHTML;
			var s_year = getId('scrubber_year_'+ year);
			expand_year( year, s_year);
		}
	}
}
var update_scrubber_month = function( top ){
	var months = getId('content').getElementsByClassName('content_month');
	var tops = [];
	for (var i = 0; i < months.length; i++) {
		tops.push(months[i].offsetTop);
	};

	for (var i = 0; i < tops.length; i++) {
		if( top > tops[i] && top < tops[i+1]){
			var id = months[i].id;
			highlightMonth( getId( id.replace('content','scrubber') ) );
		}
	};
}

// 页面滚动处理 固定菜单位置 自动展开
window.onscroll = function(){
	var _top = document.body.scrollTop;
	var scrubber = getId('scrubber');
	if( _top > 200 ){
		scrubber.style.position = 'fixed';
		scrubber.style.top = '60px';
		scrubber.style.left = (getView().vW - 960)/2 + 'px';
	}else{
		scrubber.style.position = '';
		scrubber.style.top = '';
		scrubber.style.left = '';
	}
	update_scrubber_year( _top );
	update_scrubber_month( _top );
}