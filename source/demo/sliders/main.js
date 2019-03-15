// 1.定义数据
var data = [
	{img:1,h2:'Creative',h3:'DUET'},
	{img:2,h2:'Friendly',h3:'DEVIL'},
	{img:3,h2:'Tranquilent',h3:'COMPATRIOT'},
	{img:4,h2:'Insecure',h3:'SEEKER'},
	{img:5,h2:'Loveing',h3:'HUSSLER'},
	{img:6,h2:'Passionate',h3:'REBEL'},
	{img:7,h2:'Crazy',h3:'FRIEND'}
];
// 2.通用函数
var g = function(args){
	if(args.substring(0,1) == '.'){
		return document.getElementsByClassName(args.substring(1));
	}
	return document.getElementById(args);
}

// 3.添加幻灯片的所有操作
function addSliders(){
	var tpl_main = g('tpl_main').innerHTML
			.replace(/^\s*/,'')
			.replace(/\s*$/,'');

	var tpl_ctrl = g('tpl_ctrl').innerHTML
			.replace(/^\s*/,'')
			.replace(/\s*$/,'');

	var out_main = [];
	var out_ctrl = [];

	for(var i in data){
		var _html_main = tpl_main
				.replace(/{{index}}/g,data[i].img)
				.replace(/{{h2}}/g,data[i].h2)
				.replace(/{{h3}}/g,data[i].h3)
				.replace(/{{position}}/g,(i%2 ? '':'right') );
		var _html_ctrl = tpl_ctrl
				.replace(/{{index}}/g,data[i].img);
		
		out_main.push(_html_main);
		out_ctrl.push(_html_ctrl);
	}
	g('tpl_main').innerHTML = out_main.join('');
	g('tpl_ctrl').innerHTML = out_ctrl.join('');
}
// 5.显示幻灯片
function showSliders(n){
	// 获取要高亮的图片和按钮
	var mainCurrent = g('main_item_'+ n);
	var ctrlActive = g('ctrl_item_'+ n);
	// 获取获取的图片元素和按钮元素
	var aMain = g('.slide_main_item');
	var aCtrl = g('.slide_ctrl_item');

	for(var i = 0; i < aCtrl.length; i++){
		aMain[i].className = aMain[i].className.replace(' current','');
		aCtrl[i].className = aCtrl[i].className.replace(' active','');
	}
	// 当前元素高亮
	mainCurrent.className += ' current';
	ctrlActive.className += ' active';
}
// 6.图片自动垂直居中
function verticalTop(){
	var picture = g('.picture');
	for(var i = 0; i < picture.length; i++){
		picture[i].style.marginTop = (-1 * picture[i].offsetHeight/2) + 'px';
	};
}

// 4.元素加载完后添加元素
window.onload = function(){
	addSliders();
	showSliders(1);
	setTimeout(verticalTop,100);
}