// 面向对象 弹窗组件开发
window.onload = function(){
	var oCodeList = getByClass(document,'codelist')[0];
	readCode('dialog.js',oCodeList);

	var aSpan = document.getElementById('menu').getElementsByTagName('span');

	aSpan[0].onclick = function(){
		var d1 = new Dialog();
		d1.init({
			iNow : 1,
			id : 'win1'
		});
	}
	aSpan[1].onclick = function(){
		var d1 = new Dialog();
		d1.init({
			iNow : 2,
			w : 200,
			h : 170,
			dir : 'right',
			t : '最新消息',
			id : 'win2'
		});
	}
	aSpan[2].onclick = function(){
		var d1 = new Dialog();
		d1.init({
			iNow : 3,
			w : 300,
			h : 260,
			mark : true,
			id : 'win3'
		});
	}
	window.onresize = function(){
		change('win3');
	}
}
function Dialog(){
	this.obj = null;
	this.settings = {
		w : 300,
		h : 180,
		dir : 'center',
		t : '登陆窗口',
		mark: false
	}
}
Dialog.prototype.init = function(opt){
	extend(this.settings, opt);

	if(this.json[opt.iNow] == undefined){
		this.json[opt.iNow] = true;
	}
	
	if(this.json[opt.iNow]){
		this.creatDiv();
		this.closeDialog();
		
		if(this.settings.mark){
			this.createMark();
		}
		this.json[opt.iNow] = false;
	}
}
Dialog.prototype.json = {};
// 动态创建弹窗
Dialog.prototype.creatDiv = function(){
	this.obj = document.createElement('div');
	this.obj.className = 'dialog';
	this.obj.id = this.settings.id;
	this.obj.innerHTML = '< div class="title">< h3>'+this.settings.t+'< /h3>\
	< a href="javascript:;">x< /a>< /div>< div class="content">< /div>';
	document.getElementById('box').appendChild(this.obj);

	this.setData();

}
// 设置弹窗数据
Dialog.prototype.setData = function(){
	this.obj.style.width = this.settings.w + 'px';
	this.obj.style.height = this.settings.h + 'px';

	if(this.settings.dir == 'center'){
		this.obj.style.left = (getPos().vW - this.obj.offsetWidth)/2 + 'px';
		this.obj.style.top = (getPos().vH - this.obj.offsetHeight)/2 + 'px';
	}
	if(this.settings.dir == 'right'){
		this.obj.style.left = (getPos().vW - this.obj.offsetWidth - 20) + 'px';
		this.obj.style.top = (getPos().vH - this.obj.offsetHeight) + 'px';
	}
}
// 删除弹窗
Dialog.prototype.closeDialog = function(){
	var This = this;
	this.oClose = this.obj.getElementsByTagName('a')[0];

	this.oClose.onclick = function(){
		document.getElementById('box').removeChild(This.obj);
		if(This.oMark){
			document.body.removeChild(This.oMark);
		}
		This.json[This.settings.iNow] = true;
	}
}
// 遮罩创建
Dialog.prototype.createMark = function(){
	var oMark = document.createElement('div');
	oMark.id = 'mark';
	this.oMark = oMark;

	this.oMark.style.width = getPos().vW + 'px';
	this.oMark.style.height = getPos().vH + 'px';
	document.body.appendChild(oMark);
}
// 获取可视区宽高
function getPos(){
	return {
		vW : document.documentElement.clientWidth,
		vH : document.documentElement.clientHeight
	}
}
// 对象复制
function extend(obj1, obj2){
	for(var attr in obj2){
		obj1[attr] = obj2[attr];
	}
}
// 从新计算宽高
function change(id){
	var oWindow = document.getElementById(id);
	oWindow.style.left = (getPos().vW - oWindow.offsetWidth)/2 + 'px';
	oWindow.style.top = (getPos().vH - oWindow.offsetHeight)/2 + 'px';
}