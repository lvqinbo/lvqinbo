小型个人jquery库封装

// 创建对象函数
function $(vArg){
	return new vQuery(vArg);
}
// 构造函数
function vQuery(vArg){
	this.elements = [];	// 选择元素的集合

	switch(typeof vArg){
		case 'function':
			bindEvent(window,'load',vArg);
		break;
		case 'string':
			switch(vArg.charAt(0)){
				case '#': //id
					this.elements.push(document.getElementById(vArg.substring(1)));
					break;
				case '.': //class
					this.elements = getByClass(document,vArg.substring(1) );
					break;
				default: //tag
					this.elements = toArray(document.getElementsByTagName(vArg));
					break;
			}
			break;
		case 'object':
			if(vArg.constructor == Array){
				this.elements = vArg;
			}else{
				this.elements.push(vArg);
			}
			break;
	}
}
// css样式设置和获取
vQuery.prototype.css = function(attr, val){
	
	if(arguments.length == 2){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style[attr] = val;
		};
	}else if(arguments.length == 1){
		if(typeof attr == 'object'){
			for(var j in attr){
				for (var i = 0; i < this.elements.length; i++) {
					this.elements[i].style[j] = attr[j];
				};
			}
		}else{
			return getStyle(this.elements[0], attr);
		}
	}
	return this;
}
// 属性设置和获取
vQuery.prototype.attr = function(attr, val){
	if(arguments.length == 2){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].setAttribute(attr, val);
		};
	}else if(arguments.length == 1){
		return this.elements[0].getAttribute(attr);
	}
	return this;
}
// 根据传入下返回下标的元素
vQuery.prototype.eq = function(num){
	return $(this.elements[num]);
}
// 获取元素的下标
vQuery.prototype.index = function(){
	var eles = this.elements[0].parentNode.children;
	for (var i = 0; i < eles.length; i++) {
		if(eles[i] == this.elements[0]){
			return i;
		}
	};
}
// 查找选中元素的兄弟节点
vQuery.prototype.siblings = function(){
	var eles = this.elements[0].parentNode.children;
	var arr = [];
	for (var i = 0; i < eles.length; i++) {
		if(this.elements[0] != eles[i]){
			arr.push(eles[i]);
		}
	};
	return $(arr);
}
// 找到选择对象下的元素
vQuery.prototype.find = function(sel){
	var arr = [];
	if(sel.charAt(0) == '.'){
		for (var i = 0; i < this.elements.length; i++) {
			arr = arr.concat(getByClass(this.elements[i], sel.substring(1)));
		};
	}else{
		for (var i = 0; i < this.elements.length; i++) {
			arr = arr.concat(toArray(this.elements[i].getElementsByTagName(sel)));
		};
	}
	return $(arr);
}
// html 
vQuery.prototype.html = function(str){
	if( str ){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].innerHTML = str;
		};
	}else{
		return this.elements[0].innerHTML;
	}
	return this;
}
// 绑定事件函数
vQuery.prototype.on = function(evts, fn){
	for (var i = 0; i < this.elements.length; i++) {
		bindEvent(this.elements[i], evts, fn);
	};
	return this;
}
// 左键点击
vQuery.prototype.click = function(fn){
	this.on('click',fn);
	return this;
}
// 鼠标移入
vQuery.prototype.mouseover = function(fn){
	this.on('mouseover',fn);
	return this;
}
// 鼠标移出
vQuery.prototype.mouseout = function(fn){
	this.on('mouseout',fn);
	return this;
}
// 隐藏
vQuery.prototype.hide = function(){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display = 'none';
	};
	return this;
}
// 显示
vQuery.prototype.show = function(){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display = 'block';
	};
	return this;
}
// 鼠标移入移出
vQuery.prototype.hover = function(fnIn, fnOut){
	this.on('mouseover', fnIn);
	this.on('mouseout', fnOut);
	return this;
}
// 工具方法
$.trim = function(str){
	return str.replace(/^\s+|\s+$/g, '');
}
$.proxy = function(){}
$.makeArray = function(){}
$.inArray = function(){}

$.extend = function(json){
	for(var attr in json){
		$[attr] = json[attr];
	}
}
// 扩展工具方法
$.fn = {};
$.fn.extend = function(json){
	for(var attr in json){
		vQuery.prototype[attr] = json[attr];
	}
}

// 获取class
function getByClass(oParent, sClass){
	var result = [];
	var eles = oParent.getElementsByTagName('*');
	for(var i = 0, len = eles.length; i < len; i++){
		if( eles[i].className == sClass ){
			result.push( eles[i] );
		}
	}
	return result;
}
// 绑定事件
function bindEvent(obj, evt, fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+evt, function(){
			// 阻止默认事件
			if(fn() == false){
				window.event.cancelBubble = true;
				return false;
			}
		});
	}else{
		obj.addEventListener(evt, function(ev){
			if( fn() == false ){
				ev.preventDefault();
				ev.cancelBubble = true;
			}
		}, false);
	}
}
// 转换数组
function toArray(elems){
	var arr = [];
	for (var i = 0; i < elems.length; i++) {
		arr.push( elems[i] );
	};
	return arr;
}
function getStyle(obj, name){
	return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name];
}