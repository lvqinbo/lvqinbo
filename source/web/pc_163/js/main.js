
function showUserInfo(){
	var timerOf = null;
	var timeNav = null;
	var oUserHead = g('.u-head')[0];
	var oUserInfo = g('.p-info')[0];
	var oNavItem = g('.nav-item-sys')[0];
	var oSubMenu = g('.sub_menu')[0];

	oUserHead.onmouseover = function(){
		oUserInfo.style.display = 'block';
	}
	oUserHead.onmouseout = function(){
		timerOf = setTimeout(function(){
			oUserInfo.style.display = 'none';
		},200);
	}
	oUserInfo.onmouseover = function(){
		clearTimeout(timerOf);
	}
	oUserInfo.onmouseout = function(){
		timerOf = setTimeout(function(){
			oUserInfo.style.display = 'none';
		},200);
	}
	
	oNavItem.onmouseenter = function(){
		clearTimeout(timeNav);
		oSubMenu.style.display = 'block';
	}
	oNavItem.onmouseleave = function(){
		timeNav = setTimeout(function(){
			oSubMenu.style.display = 'none';
		},200);
	}
	oSubMenu.onmouseenter = function(){
		clearTimeout(timeNav);
		oNavItem.className += ' f-over';
	}
	oSubMenu.onmouseleave = function(){
		oSubMenu.style.display = 'none';
		oNavItem.className = 'nav-item-sys';
	}
}
showUserInfo();

// 侧边栏数据添加
var sidemenu = sideMenu;
function addSidebarData(){
	var tpl_sidebar = g('#tpl_sidebar').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');

	var sidebar_main = [];
	for(var s in sidemenu){
		var sidebar_html = tpl_sidebar
							.replace('{{title}}',sidemenu[s].title)
							.replace('{{sub_1}}',sidemenu[s].sub_1)
							.replace('{{sub_2}}',sidemenu[s].sub_2)
							.replace('{{sub_3}}',sidemenu[s].sub_3)
							.replace('{{sub_4}}',sidemenu[s].sub_4);
		sidebar_main.push(sidebar_html);	
	}
	g('#tpl_sidebar').innerHTML = sidebar_main.join('');
}
// 侧边栏对应内容创建
var ContentData = sideContent;
function createSidebarContent(){
	var tpl_content = g('#tpl-sidebar-content');

	var content_html = '';
	for(var s in ContentData){
		content_html += '<div class="sidebar-content-wrap">\
						<h3>分类目录</h3>\
						<p class="l-link"></p>\
						<h3>系列课程</h3>\
						<p class="l-list"></p>\
						<img class="sidebar-img" src="" alt="">\
					</div>';
	}
	tpl_content.innerHTML = content_html;
}
var contentData = sideContent;
function addSidebarContent(n){
	var content_item = g('.sidebar-content-wrap');

	var _lesson = '';
	var _list = '';
	var sidebar_main = [],
			lsonArr = [], // 课程数组
			listArr = [], // 列表数组
			imgArr= []; // 图片数组

	for(var i = 0; i < content_item.length; i++){
		lsonArr[i] = content_item[i].getElementsByClassName('l-link')[0];
		listArr[i] = content_item[i].getElementsByClassName('l-list')[0];
		content_item[i].getElementsByClassName('sidebar-img')[0].src = contentData[i].adimg;
	}
	for(var i = 0; i < contentData[n].lesson.length; i++){
		if(i == contentData[n].lesson.length-1){
			_lesson += '<a class="title-m" href="javascript:;">'+contentData[n].lesson[i]+'</a>';
		}else{
			_lesson += '<a class="title-m" href="javascript:;">'+contentData[n].lesson[i]+'</a><span>/</span>';
		}
	}
	for(var i = 0; i < contentData[n].list.length; i++){
		_list += '<a class="title-m" href="javascript:;">'+contentData[n].list[i]+'</a>';
	}
	lsonArr[n].innerHTML = _lesson;
	listArr[n].innerHTML = _list;
}

// 鼠标移入侧边栏菜单
function showSliderContent(){
	var aLi = g('.sidebar-item');
	var aContentLi = g('.sidebar-content-wrap');
	var timer = null;
	for(var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		
		
		aLi[i].onmouseenter = function(){
			addSidebarContent(this.index);
			clearTimeout(timer);
			clearFn();
			aContentLi[this.index].className += ' show';
		}
		aLi[i].onmouseleave = function(){

			timer = setTimeout(clearFn,200);
		}
	};

	for (var i = 0; i < aContentLi.length; i++) {
		aContentLi[i].onmouseenter = function(){
			clearTimeout(timer);
		}
		aContentLi[i].onmouseleave = function(){
			timer = setTimeout(clearFn,200);
		}
	};

	function clearFn(){
		for (var i = 0; i < aContentLi.length; i++) {
			aContentLi[i].className = aContentLi[i].className.replace(/\s*show/,'');
		};
	}
}

/* 幻灯片*/
var slideData = slider;
function showSlider(){
	var tpl_main = g('#tpl_slider_wrap').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
	var tpl_ctrl = g('#tpl_slider_ctrl').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');

	var main = [];
	var ctrl = [];

	for(var s in slideData){
		var main_htlm = tpl_main
							.replace(/{{index}}/g,slideData[s].img)
							.replace('{{img}}',slideData[s].img);
							
		main.push(main_htlm);
		var ctrl_html = tpl_ctrl.replace(/{{index}}/g,slideData[s].img);
		ctrl.push(ctrl_html);
	}
	g('#tpl_slider_wrap').innerHTML = main.join('');
	g('#tpl_slider_ctrl').innerHTML = ctrl.join('');
}

// 点击切换幻灯片
var iNum = 0;
var timer2 = null;

function autoPlay(){
	timer2 = setInterval(function(){
		if(iNum == g('.slider-item').length){
			iNum = 0;
		}
		iNum++;
		switchSlider(iNum);
	},4000);
}
autoPlay();

function switchSlider(n){
	var slider_wrap = g('#slider');
	var slide_item = g('.slider-item');
	var slide_ctrl = g('.ctrl-item')

	iNum = n;
	for(var j = 0, len = slide_item.length; j < len; j++){
		slide_item[j].className = slide_item[j].className.replace(' current', '');
	}
	for(var j = 0, len = slide_ctrl.length; j < len; j++){
		slide_ctrl[j].className = slide_ctrl[j].className.replace(' active', '');
	}
	setTimeout(function(){
		slider_wrap.style.background = slideData[n-1].color;
	},100);
	g('#slider-item-'+n).className += ' current';
	g('#ctrl-item-'+n).className += ' active';
}
g('#slider').onmouseover = function(){
	clearInterval(timer2);
}
g('#slider').onmouseout = function(){
	autoPlay();
}

// 微专业
var microData = microList;
var aLi = g('.micro-item');
function addMicroData(){
	var item = g('#tpl_micro_list').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
	
	g('#tpl_micro_list').style.width = aLi[0].offsetWidth * microData.length + 'px';
	var arr = [];
	for(var s in microData){
		var oLi = item
			.replace('{{title}}',microData[s].title)
			.replace('{{author}}',microData[s].tip)
			.replace(/{{icon}}/g,microData[s].icon);
		arr.push(oLi);
	}
	g('#tpl_micro_list').innerHTML = arr.join('');
}
// 微专业左右切换
var step = 0;
function switchTab(dir){
	var oUl = g('#tpl_micro_list');
	if(dir == 'l'){
		if(step < g('.micro-item').length-3){
			step++;
			doMove(g('#tpl_micro_list'),{left: -1 *step * g('.micro-item')[0].offsetWidth});

		}
	}else if(dir == 'r'){
		if(step > 0){
			step --;
			doMove(g('#tpl_micro_list'),{left: -1 *step * g('.micro-item')[0].offsetWidth});
		}
	}
}
/* 标题及列表 */
var titleData = morebox;
function addTitle(){
	var oWrap = g('.more-box');
	var html = [];

	for(var i = 0; i < titleData.length; i++){
		
		for(j = 0; j <  titleData[i].list.length; j++){
			var _html = oWrap[i].innerHTML.replace(/{{list}}/g,titleData[i].list[j]);
			html.push(_html);
		}
		oWrap[i].innerHTML = html.join('');
		html.splice(titleData[i],titleData[i].list.length);
	}
}
addTitle();


/* 课程数据 */
var datas = data;
function addContentData(){
	var oWrap = g('.imgbox-wrap');
	var arrData = [];
	var html = [];

	for(var s in datas){
		arrData.push(datas[s]);
	}
	for(var i = 0; i < arrData.length; i++){
		for(var j = 0; j < arrData[i].length; j++){
		
		var _html = oWrap[i].innerHTML.replace(/{{img}}/g,arrData[i][j].img)
											.replace(/{{title}}/g,arrData[i][j].title)
											.replace(/{{name}}/g,arrData[i][j].name)
											.replace(/{{author}}/g,arrData[i][j].author)
											.replace(/{{discount}}/g,arrData[i][j].discount)
											.replace(/{{normal}}/g,arrData[i][j].normal);
			html.push(_html);
		}
		oWrap[i].innerHTML = html.join('');
		html.splice(arrData[i],arrData[i].length);
	}
}
addContentData();

/* 右边侧边栏的内容 */
var more = getMore;
function addRightBarData(){
	var imgList = g('.getmore');
	var textList = g('.ad-list')
	var html = [];

	/* 图片数据添加 */
	for(var i = 0; i < more.length; i++){
		imgList[i].innerHTML = imgList[i].innerHTML.replace(/{{img}}/g,more[i].img);
	}
	/* 列表内容数据添加 */
	for(var i = 0; i < more.length; i++){
		for(j = 0; j <  more[i].title.length; j++){
			var _html = textList[i].innerHTML.replace(/{{title}}/g,more[i].title[j]);
			html.push(_html);
		}
		textList[i].innerHTML = html.join('');
		html.splice(more[i],more[i].title.length);
	}
}
addRightBarData();

/* 底部合作单位 */
var joinData = majorList;
function joinMajor(){
	var tpl_main = g('#tpl_major-wrap').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
	var majorArr = [];
	var oUlW = 0;
	for(var s in joinData){
		var major_html = tpl_main.replace('{{major}}',joinData[s]);
		majorArr.push(major_html);
	}
	g('#tpl_major-wrap').innerHTML = majorArr.join('');
}
var iH = 0;
function toUpMove(){
	var item = g('.major-item');
	var oUl = g('#tpl_major-wrap');

	setInterval(function(){
		iH++;
		oUl.style.top = (-iH * item[0].offsetHeight) + 'px';
		if(iH >= (oUl.offsetHeight / item[0].offsetHeight)-1){
			iH = 0;
		}
	},4000);
}
toUpMove();

// 通用函数
function bindEvent(obj, evts, cbFn){
	if(obj.addEventListener){
		obj.addEventListener(evts, cbFn, false);
	}
	else{
		obj.attachEvent('on'+evts, cbFn);
	}
}

function g(sel){
	if(sel.charAt(0) == '.'){
		return document.getElementsByClassName(sel.substr(1));
	}else if(sel.charAt(0) == '#'){
		return document.getElementById(sel.substr(1));
	}else{
		return document.getElementsByTagName(sel);
	}
}
window.onload = function(){
	addSidebarData();
	createSidebarContent();
	showSlider();
	switchSlider(1);
	addMicroData();
	joinMajor();
	showSliderContent();
}