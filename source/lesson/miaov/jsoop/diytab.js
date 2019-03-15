/*
	配置参数：
	sel 要初始化选项卡是下标（默认为0）
	事件：
	evt 鼠标点击或者鼠标移入（默认为点击）
	delay 延迟 事件必须是鼠标移入
	方法： 
	getSelCont() 获取当前选中元素的内容
	getSelTitle() 获取当前选择元素的标题
	beforeClick() 点击前触发
	afterClick() 点击后触发
*/
window.onload = function(){
	var t1 = new Tab();
	t1.init({
		id : 'tab1',
	});
	var t2 = new Tab();
	t2.init({
		id : 'tab2',
		evts : 'mouseover',
		sel : 2
	});
	var t3 = new Tab();
	t3.init({
		id : 'tab3',
		evts : 'mouseover',
		delay : 300
	});
	for (var i = 0; i < t3.aDiv.length; i++) {
		myAddEvent(t3.aDiv[i],'click',function(){
			t3.getSelCont();
		});
		myAddEvent(t3.aBtn[i],'click',function(){
			t3.getSelTitle();
		});
	};

	var t4 = new Tab();
	t4.init({
		id : 'tab4',
		sel : 3
	});
	myAddEvent(t4.oParent,'beforeClick',function(){
		t4.getSelCont();
	});
	fireEvent(t4.oParent, 'beforeClick');
}
function Tab(){
	this.oParent = null;
	this.aBtn = null;
	this.aDiv = null;
	this.iNow = 0;

	this.settings = { // 默认参数
		evts : 'click',
		sel : 0
	}
}
// 初始化
Tab.prototype.init = function(opt){
	extend(this.settings, opt);

	this.oParent = document.querySelector('#'+opt.id);
	this.aBtn = this.oParent.getElementsByTagName('span');
	this.aDiv = this.oParent.getElementsByTagName('div');
	this.iNow = this.settings.sel;
	this.change();
}
// 点击改变样式
Tab.prototype.change = function(){
	var This = this;
	var timer = null;
	for(var i = 0; i < this.aBtn.length; i++){
		this.aBtn[i].index = i;	
		
		this.aBtn[i].className = i == this.settings.sel ? 'selected' : '';
		this.aDiv[i].style.display = i == this.settings.sel ? 'block' : 'none';

		myAddEvent(this.aBtn[i],this.settings.evts,function(){
			var _this = this;
			if(This.settings.evts == 'mouseover' && This.settings.delay){
				timer = setTimeout(function(){
					This.show(_this);
				},This.settings.delay);
			}else{
				This.show(this);
			}
		},false);
		myAddEvent(this.aBtn[i],'mouseout',function(){
			clearTimeout(timer);
		});
	}
}
// 选中状态
Tab.prototype.show = function(obj){
	var This = this;
	for(var i = 0; i < this.aBtn.length; i++){
		this.aBtn[i].className = i == obj.index ? 'selected' : '';
		this.aDiv[i].style.display = i == obj.index ? 'block' : 'none';	
		this.iNow = obj.index;		
	}
}
// 获取选项卡内容
Tab.prototype.getSelCont = function(){
	console.log(this.aDiv[this.iNow].innerHTML);
}
// 获取选项卡标题
Tab.prototype.getSelTitle = function(){
	console.log(this.aBtn[this.iNow].innerHTML);
}
// 绑定事件
function myAddEvent(obj,ev,fn){
	obj.listener = obj.listener || {};
	obj.listener[ev] = obj.listener[ev] || [];
	obj.listener[ev].push(fn);

	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}
	else {
		obj.addEventListener(ev,fn,false);
	}
}
// 主动触发
function fireEvent(obj, ev, fn){
	if(obj.listener){
		for (var i = 0; i < obj.listener[ev].length; i++) {
			obj.listener[ev][i]();
		};
	}
}
// 对象复制
function extend(obj1,obj2){
	for(var attr in obj2){
		obj1[attr] = obj2[attr];
	}
}