

vQuery.prototype.html = function(str){
	if( str ){
		for(var i = 0; i < this.elements.length; i++){
			this.elements[i].innerHTML = str;
		}
	}else{
		return this.elements[0].innerHTML;
	}
	return this;
}
vQuery.prototype.css = function(attr, val){
	if(arguments.length == 2){	// 设置
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style[attr] = val;
		};
	}else if(arguments.length == 1){ // 获取
		return this.elements[0].style[attr];
	}
}

vQuery.prototype.attr = function(attr, val){
	if(arguments.length == 2){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].setAttribute(attr,val);
		};
	}else if(arguments.length == 1){
		this.elements[0].getAttribute(attr);
	}
}

vQuery.prototype.on = function(evts, fn){
	for (var i = 0; i < this.elements.length; i++) {
		bindEvent(this.elements[i],evts,fn);
	};
	return this;
}

vQuery.prototype.click = function(fn){
	this.on('click',fn);
}
vQuery.prototype.mouseover = function(fn){
	this.on('mouseover',fn);
}
vQuery.prototype.mouseout = function(fn){
	this.on('mouseout',fn);
}
vQuery.prototype.hover = function(fnIn, fnOut){
	this.on('mouseover',fnIn);
	this.on('mouseout',fnOut);
}
vQuery.prototype.hide = function(){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display = 'none';
	};
}
vQuery.prototype.show = function(){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display = 'block';
	};
}
vQuery.prototype.index = function(){
	var idx = 0;
	var elms = this.elements[0].parentNode.children;
	for(var i = 0; i < elms.length; i++){
		if(elms[i] == this.elements[0]){
			idx = i;
		}
	}
	return idx;
}
vQuery.prototype.find = function(sel){
	var arr = [];
	if(sel.charAt(0) == '.'){
		for (var i = 0; i < this.elements.length; i++) {
			arr = arr.concat(getByClass(this.elements[i],sel.substring(1)));
		};
	}else{
		for (var i = 0; i < this.elements.length; i++) {
			arr = arr.concat(toArray(this.elements[i].getElementsByTagName(sel)));
		};
	}
	return $(arr);
}
vQuery.prototype.eq = function(num){
	return $(this.elements[num]);
}
vQuery.prototype.siblings = function(){
	var elms = this.elements[0].parentNode.children;
	var arr = [];

	for (var i = 0; i < elms.length; i++) {
		if(elms[i] != this.elements[0]){
			arr.push(elms[i]);
		}
	};
	
	return $(arr);
}
vQuery.prototype.filter = function(sel){
	var child = this.elements.children;
	var arr = [];
	var arr2 = [];
	if(sel.charAt(0) == '.'){
		for (var i = 0; i < this.elements.length; i++) {
			arr = arr.concat(getByClass(this.elements[i],sel.substring(1)));
		};
	}
	return $(arr);
}

function vQuery(Args){
	this.elements = [];

	switch( typeof(Args) ){
		case 'function':  // 函数
			bindEvent(window,'load',Args);
			break;
		case 'string': 	  // 字符串
			switch( Args.charAt(0) ){
				case '#':  // id
					this.elements.push(document.getElementById(Args.substring(1)));
					break;
				case '.':  // class
					this.elements = getByClass(document, Args.substring(1));
					break;
				default:  // tag
					this.elements = toArray(document.getElementsByTagName(Args));
					break;
			}
			break;
		default: 		  // 对象
			if(Args.constructor == Array){
				this.elements = Args;
			}else{
				this.elements.push(Args);
			}
			break;
	}
}

function $(Args){
	return new vQuery(Args);
}

function bindEvent(obj, evt, fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+evt, fn);
	}else{
		obj.addEventListener(evt, fn, false);
	}
}

function getByClass(oParent, sClass){
	var arr = [];
	var elems = document.getElementsByTagName('*');
	for (var i = 0; i < elems.length; i++) {
		if(elems[i].className == sClass){
			arr.push( elems[i] );
		}
	};
	return arr;
}
function toArray(elems){
	var arr = [];
	for (var i = 0; i < elems.length; i++) {
		arr.push(elems[i]);
	};
	return arr;
}