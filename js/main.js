var datas = data;
var oMenu = g('#navbar');
var oContainer = g('#container');
var oBtnShow = g('.menu')[0];
var idx = 0;

/* 手风琴 */
var accrodion = (function(){
	var tpl_main = g('#tpl_imgList').innerHTML
		.replace(/^\s*/,'').replace(/\s*$/,'');
	var arrImg = [];
	var data = datas.ccrodion;
	for(var s in data){
		var html_main = tpl_main
			.replace('{{img}}',data[s].img)
			.replace('{{title}}',data[s].title);
		arrImg.push(html_main);
	}
	g('#tpl_imgList').innerHTML = arrImg.join('');
})();

/* 添加首页网站实例数据 */	
var addWebData = (function(){
	var oMain = g('#content');
	var tpl_main = g('#content').innerHTML;
	var oWrap = oMain.getElementsByClassName('wrapper');

	var data = datas.web;
	var main_arr = [];
	var img_arr = [];

	for (var i = 0; i < data.length; i++) {
		var _html = tpl_main
			.replace('{{h2}}',data[i].h2)
			.replace('{{class}}',data[i].cls)
			.replace('{{theme}}',data[i].theme);

		main_arr.push(_html);
	};
	g('#content').innerHTML = main_arr.join('');

	for (var i = 0; i < data.length; i++) {
		for(var k = 0; k < data[i].img.length; k++){
			var img_html = oWrap[i].innerHTML
				.replace('{{img}}',data[i].img[k])
				.replace('{{link}}',data[i].link[k])
				.replace('{{name}}',data[i].name[k]);
			img_arr.push(img_html);
		}
		oWrap[i].innerHTML = img_arr.join('');
		img_arr.splice(data[i],data[i].img.length);
	}
})();

/* demo数据加载 */
var demoShow = (function(){
	var data = datas.demo;
	var tpl_main = g('#tpl_demoTest').innerHTML
		.replace(/^\s*/,'').replace(/\s*$/,'');

	var main_arr = [];
	for(var s in data){
		var _html = tpl_main.replace('{{img}}',data[s].img)
			.replace('{{title}}',data[s].title)
			.replace('{{sendtime}}',data[s].sendtime)
			.replace('{{link}}',data[s].link)
			.replace('{{info}}',data[s].info);
		main_arr.push(_html);
	}
	g('#tpl_demoTest').innerHTML = main_arr.join('');
})();

/* 返回顶部 */
var backToTop = (function(){
	var topBtn = g('#backTop');
	var viewH = document.documentElement.clientHeight;
	
	topBtn.onclick = function() {
		clearInterval(timer);
		var timer = setInterval(function() {
			var iT = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = (0 - iT) / 10;
			speed = Math.floor(speed);
			if (iT == 0){
				clearInterval(timer);
			}
			document.documentElement.scrollTop = document.body.scrollTop = iT + speed; 
		}, 15);
	}
	checkHeight(viewH);
	// 判断高度
	function checkHeight(pos){
		var iT = document.documentElement.scrollTop || document.body.scrollTop;
		if(iT > pos){
			topBtn.style.WebkitTransform = 'scale(1)';
			topBtn.style.display = 'block';
		}else{
			topBtn.style.WebkitTransform = 'scale(0.01)';
			topBtn.style.display = 'none';
		}
	}
	window.onscroll = function(){
		checkHeight(viewH);
	}
})();

/* 底部固定导航显示隐藏 */
var fixMenu = (function(){
	var oSidebar = g('#ad_sidebar');
	
	var oClose = g('#close');
	var oOpen = g('#open');
	var iW = oSidebar.offsetWidth;
	
	oOpen.onclick = fnShow;
	oClose.onclick = fnHide;
	
	function fnHide(){
		oSidebar.style.transition = '.5s';
		oSidebar.style.left = -view().w + 'px';
		setTimeout(function(){
			oOpen.style.cssText = 'display: block; right: -80px; bottom: 0';
		},500);
	}
	function fnShow(){
		oSidebar.style.transition = '.6s';
		oSidebar.style.left = 0;
		oOpen.style.display = 'none';
	}
})();

/* 底部固定导航 添加数据 */
var sideNav = (function(){
	var data = datas.page;
	var oList = g('#navBox');
	var aTitle = oList.getElementsByClassName('titleItem');
	var aUl = oList.getElementsByTagName('ul');

	// 添加标题
	addData();
	function addData(){
		var tit_arr = [];
		var list_arr = [];

		for(var s in data){
			var tit_html = oList.innerHTML
				.replace('{{title}}',data[s].title)
				.replace('{{hash}}',data[s].hash);
			tit_arr.push(tit_html);
		}
		oList.innerHTML = tit_arr.join('');
	}
	
})();

/* 侧边栏显示隐藏 */
var sidebarNav = (function(){
	var oBtnClose = g('#btn_close');
	var hash = window.location.hash.substr(1) || 'index';
	if( hash == 'index' )return;

	oBtnShow.onclick = navShow;
	oBtnClose.onclick = navClose;
	
	// 打开侧边栏
	function navShow(){
		oMenu.style.left = 0;
		oContainer.style.width = (view().w - oMenu.offsetWidth) + 'px';
		oContainer.style.left = oMenu.offsetWidth + 'px';
		oBtnShow.style.display = 'none';
	}
	// 关闭侧边栏
	function navClose(){
		oMenu.style.left = '-200px';
		oBtnShow.style.display = 'block';
		oContainer.style.width = view().w + 'px';
		oContainer.style.left = 0;
	}
})();

/* 加载主页以外其他页面数据 */
var addPage = (function(){
	var data = datas.page;
	var tpl_page = g('#tpl_page').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');

	var page_arr = [];
	for (var i = 1; i < data.length; i++) {
		var _html = tpl_page
			.replace('{{classname}}',data[i].classname)
			.replace('{{hash}}',data[i].hash)
			.replace('{{id}}',data[i].id);
		page_arr.push(_html);
	};
	g('#tpl_page').innerHTML = page_arr.join('');
})();

// 更改hash值
var changHash = (function(){
	var aItem = g('.navType');
	var aA = g('.titleItem');
	var aPage = g('.page');

	window.onhashchange = function(){
		window.location.reload();
	}
	var firstHash = window.location.hash.substring(1) || 'index';

	for(var i = 0; i < aPage.length; i++){
		aPage[i].style.display = 'none';
		if(firstHash == aPage[i].dataset.hash){
			aPage[i].style.display = 'block';
			aA[i].className = 'selected';
		}
	}
	for(var i = 0; i < aItem.length; i++){
		aItem[i].index = i;
		aItem[i].onclick = function(){
			var hash = this.dataset.hash;
			window.location.hash = hash;
		}
	}
})();

/* 加载其他页面内容 */
var addPageForJs = (function(){
	var data = datas.page;
	var tpl_main = g('.page_details');
	var arr_main = [];
	var iBtn = true;
	for(var s = 1; s < data.length; s++){
		for(var k = 0; k < data[s].content.length; k++){
			var main_html = tpl_main[s-1].innerHTML
			.replace('{{title}}',data[s].content[k].title)
			.replace('{{id}}',data[s].content[k].id)
			.replace('{{intro}}',data[s].content[k].intro)
			.replace('{{href}}',data[s].content[k].href);
			arr_main.push(main_html);
		}
		tpl_main[s-1].innerHTML = arr_main.join('');
		arr_main.splice(data[s],data[s].content.length);
	}

	var hash = window.location.hash.substr(1);
	for(var i = 1; i < data.length; i++){
		if(data[i].hash == hash){
			idx = (i-1);
		}
	}

	showCode(idx)
	function showCode(num){
		for (var i = 0; i < tpl_main.length; i++) {
			var codeBtn = tpl_main[num].getElementsByClassName('code_btn');
			var aCodeNum = tpl_main[num].getElementsByTagName('ol');
		};
		for (var i = 0; i < codeBtn.length; i++) {
			codeBtn[i].index = i;
			codeBtn[i].onoff = true;
			codeBtn[i].onclick = function(){
				
				if(this.onoff){
					createCode(aCodeNum,this.index);
					this.onoff = false;
				}else {
					aCodeNum[this.index].innerHTML = '';
					this.onoff = true;
				}
			}
		};
	}
	// 生成要显示的代码
	function createCode(obj,iNum){
		var data = datas.page;
		var codeUrl;
		var _html = '';

		var _data = data[idx+1].content;
		for (var i = 0; i < _data.length; i++) {
			codeUrl = _data[iNum].code ;
		};
		ajax(codeUrl,function(str){
			var row = str.split('\n');
			for (var j = 0; j < row.length; j++) {
				_html += '<li>'+ row[j] +'</li>';
			};
			obj[iNum].innerHTML = _html;
		});
	}
})();

/* 添加侧边栏内容 */
var addSidebarList = (function(){
	var data = datas.page;
	var tpl_main = g('#tpl_list');
	var aLi = g('#tpl_list').getElementsByTagName('li');
	var aPage = g('.page');

	var list_arr = [];
	var _data = data[idx+1].content;
	for (var i = 0; i < _data.length; i++) {
		var _html = tpl_main.innerHTML
			.replace('{{title}}',_data[i].title)
			.replace('{{id}}',_data[i].id);
		list_arr.push(_html);
	};
	g('#tpl_list').innerHTML = list_arr.join('');

	var aCon = aPage[idx+1].getElementsByClassName('demoWrap');

	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onclick = function(){
			aCon[this.index].parentNode.style.top = -aCon[this.index].offsetTop+'px';
			document.documentElement.scrollTop = document.body.scrollTop = aCon[this.index].offsetTop;
		}
	};
})();

var toolsBar = g('.toolsbar');
var toolsBarHeight = toolsBar[0].getBoundingClientRect().height
var footBarHeight = 100
window.addEventListener('scroll', function() {
	let vh = view().h - footBarHeight
	toolsBar[0].style.top = document.documentElement.scrollTop + vh  - toolsBarHeight + 'px'
})

// 缩放窗口
window.onresize = function(){
	if(document.body.clientWidth < 968){
		oMenu.style.left = '-200px';
	}else{
		// oMenu.style.left = 0;
	}
	oBtnShow.style.display = 'block';
	oContainer.style.left = 0;
	oContainer.style.width = view().w + 'px';
}


/* =====================通用函数================= */
// 选择元素
function g(sel){
	if(sel.charAt(0) == '#'){
		return document.getElementById(sel.substr(1));
	}else if(sel.charAt(0) == '.'){
		return document.getElementsByClassName(sel.substr(1));
	}else{
		return document.getElementsByTagName(sel);
	}
}
// 获取可视区宽高
function view(){
	return {
		w : document.documentElement.clientWidth,
		h : document.documentElement.clientHeight
	}
}