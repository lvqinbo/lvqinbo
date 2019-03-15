// 对象的引用
// 基本类型： 赋值的时候只是 值 的复制
var a = 8; 
var b = a;
b += 2;
console.log('b的值是：'+b+'，a的值是：'+a); //a=8,b=10;  

// 对象类型： 赋值不仅是值的复制，而且是引用的传递
var aaa = [1,2,3];
var bbb = aaa;
bbb.push(4);

console.log(bbb); //[1,2,3,4]
console.log(aaa); //[1,2,3,4]

var a1 = [1,2,3];
var a2 = a1;
a2 = [1,2,3,4];
console.log(a2); //[1,2,3,4]
console.log(a1); //[1,2,3]

var x = 5; 
var y = 5; 
console.log(x == y); //true  基本类型的比较： 只要值相等就为 true

var arr3 = [1,2,3];
var arr4 = [1,2,3];

console.log(arr3 == arr4); false 对象类型的比较： 必须是值和引用同时相同才行

var arr5 = [1,2,3];
var arr6 = arr5;
console.log(arr5 == arr6); //true

面向对象
// 工厂方法
function factory(name){
	// 原料
	var obj = new Object();
	// 加工
	obj.name = name;

	obj.showInfo = function(){
		console.log(obj.name);
	}
	// 出场
	return obj;
}
var pig = new factory('tom');
pig.showInfo();	// tom
var cat = new factory('dog');
cat.showInfo();

// 面向对象写法
function CreateAnimal(name){
	this.name = name;
	this.showName = function(){
		console.log(this.name);
	}
}
var monkey = new CreateAnimal('孙猴子');
monkey.showName();
var snake = new CreateAnimal('葫芦娃');
snake.showName();

// 面向对象原型 好处： 提高性能
// 去改写公用的方法和属性，让公用的东西在内存中只有一份
1. function 构造函数(){
	this.属性
} 
2. 构造函数.原型.方法 = function(){
	// code
}
3. var 对象1 = new 构造函数();
4. 对象1.方法();

1.function constructor(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
}
2. constructor.prototype.showInfo = function(){
	console.log('名字叫：'+ this.name + ',年龄：' + this.age +',工作：'+ this.job);
}
3. var obj1 = new constructor('Robet',40,'teacher');
4. obj1.showInfo();

// 正常选项卡的写法
// 写法1
window.onload = function(){
	var oWrap = document.getElementById('wrap');
	var aSpan = oWrap.getElementsByTagName('span');
	var aDiv  = oWrap.getElementsByTagName('div');

	for (var i = 0; i < aSpan.length; i++) {
		aSpan[i].index = i;
		// 初始化选中状态
		aSpan[i].className = i == 0 ? 'selected' : '';
		aDiv[i].className = i == 0 ? 'show' : '';
		// 点击改变选择状态
		aSpan[i].onclick = function(){
			for (var i = 0; i < aSpan.length; i++) {
				aSpan[i].className = i == this.index ? 'selected' : '';
				aDiv[i].className = i == this.index ? 'show' : '';
			};
		}
	};
}
// 写法2
window.onload = function(){
	tab('wrap');
	tab('wrap2');

	function tab(id){
		var obj = document.getElementById(id);
		var aSpan = obj.getElementsByTagName('span');
		var aDiv  = obj.getElementsByTagName('div');
		init();
		
		// 初始化
		function init(){
			for(var i = 0, len = aSpan.length; i < len; i++){
				aSpan[i].index = i;
				aSpan[i].className = i == 0 ? 'selected' : '';
				aDiv[i].className = i == 0 ? 'show' : '';
				aSpan[i].onclick = fnSelected;
			}
		}
		// 显示当前选中
		function fnSelected() {
			for(var i = 0, len = aSpan.length; i < len; i++){
				aSpan[i].index = i;
				aSpan[i].className = this.index == i ? 'selected' : '';
				aDiv[i].className = this.index == i ? 'show' : '';
			}
		}
	}
}

// 面向对象选项卡写法
一、先变形
1.尽量不要出现函数嵌套
2.可以有全局变量
3.可以把onload中不是赋值的语句放到单独函数中

二、改写
1.全局变量就是属性
2.函数就是方法
3.onload中创建对象
4.改this指向

window.onload = function(){
	var t1 = new Tab('wrap');
	t1.init();
}
function Tab(id){
	this.obj = document.getElementById(id);
	this.aSpan = this.obj.getElementsByTagName('span');
	this.aDiv = this.obj.getElementsByTagName('div');

	this.init();
}
Tab.prototype.init = function() {
	var This = this;
	for(var i = 0, len = this.aSpan.length; i < len; i++){
		this.aSpan[i].index = i;
		
		this.aSpan[i].className = i == 0 ? 'selected' : '';
		this.aDiv[i].className = i == 0 ? 'show' : '';
		
		this.aSpan[i].onclick = function(){
			This.fnSelected(this);
		}
	}
}
Tab.prototype.fnSelected = function(sel){
	for(var i = 0, len = this.aSpan.length; i < len; i++){
		this.aSpan[i].className = sel.index == i ? 'selected' : '';
		this.aDiv[i].className = sel.index == i ? 'show' : '';
	}
}

// 数组 push方法
var arr = [1,2,3];

Array.prototype.push = function(){
	for(var i = 0; i < arguments.length; i++){
		this[this.length] = arguments[i];
	}
	return this.length;
}

// 包装对象
var str = 'hello';
console.log( typeof( str ));	// string
var str = new String();
console.log( typeof( str ));	// Object

// 获取字符串最后的字母方法
String.prototype.lastVal = function(){
	return this.charAt(this.length-1);
}
console.log( str.lastVal() );	// o

// 获取字符串开头的字母方法
String.prototype.firstVal = function() {
	return this.charAt(0);
}
// 获取字符串返回的下标
String.prototype.indexOf = function(str,num){
	var len = this.length;
	var index = 0;
	var iNum = Number(num) || 0;

	for(var i = iNum; i < len; i++){
		if(this.charAt(i) === str && i !== num){
			index = i;
			break;
		}
	}
	return index;
}
// 原型链 最底层的为Object.prototype == > 对象.prototype == > 对象.num(this.num)
function Sample(){
	this.num = 10;
}
Object.prototype.num = 20;

Object.prototype.num = 30;

var obj = new Sample();
console.log(obj.num);	// 10

// hasOwnProperty: 看看是不是对象自身下的属性
var arr = [];
arr.num = 10;
Array.prototype.num2 = 20;
console.log(arr.hasOwnProperty('num'));	// true
console.log(arr.hasOwnProperty('num2'));// false

// constructor查看对象的构造函数
function CreatePerson(){

}
var p1 = new CreatePerson();
console.log(p1.constructor);	// CreatePerson()

// 系统自动生成的constructor方式也是可以更改的，但更改有可能会出大问题,请不要更改
//这个原型的方法是程序自动生成添加到构造函数内的
CreatePerson.prototype.constructor = Array();
console.log(p1.constructor);	// Array()

// 很多时候我们不经意的便把原型更改了，如下写法
function CreatePerson(){}
CreatePerson.prototype.name = 'john';
CreatePerson.prototype.age = 30;
var p1 = new CreatePerson();
console.log(p1.constructor);	// CreatePerson()
// 将上面的写法改成这样
function CreatePerson(){}
CreatePerson.prototype = {
	name : 'john',
	age : 30
}
var p2 = new CreatePerson();
console.log(p2.constructor);	// Object()
// 此时，需要手动修改，把原型改回来
CreatePerson.prototype = {
	constructor : CreatePerson,
	name : 'john',
	age : 30
}
// constructor属性我们无法找到，哪怕自己手动添加上去的亦无法找到

// instanceof 对象与构造函数原型链上是否有关系
function Animal(){}
var pig = new Animal();
//所有对象 instanceof object 都是true
console.log(pig instanceof Object);	// true

// toString() 系统对象下面都是自带的，自己写的对象都是原型链下面的
var arr = [];
// 比较系统下雨原型链的
console.log(arr.toString() == Object.prototype.toString()); // false

function Aaa(){}
var a1 = new Aaa();
console.log(a1.toString() == Object.prototype.toString()); // true

var arr = [1,2,3];
Array.prototype.toString = function() {
	return this.join('+');
}
console.log(arr.toString());	// 1+2+3

// toString() 可以对数字的进制转换
var num = 255;
// 十六进制转换
console.log(num.toString(16));	// ff
// 八进制转换
console.log(num.toString(8));	// ff

// toString做类型判断
var arr = [];
console.log(Object.prototype.toString.call(arr));	// [object Array]
var json = {};
console.log(Object.prototype.toString.call(json));	// [object Object]
var oDate = new Date();
console.log(Object.prototype.toString.call(oDate));	// [object Date]
var re = new RegExp();
console.log(Object.prototype.toString.call(re));	// [object RegExp]

console.log(Object.prototype.toString.call(arr) == '[object Array]'); // true


// 对象复制
var man = {name : 'mark', age : 20}
var oldman = man;
oldman.age = 50;
console.log(man.age); // 50(i like yonug, do not let me old)

// 复制值的方法
function extend(newVal, oldVal){
	for(var attr in oldVal){
		newVal[attr] = oldVal[attr];
	}
}
var man = {age : 20};
var oldman = {};
extend(oldman, man);
oldman.age = 60;
console.log(man.age); 	// 20

// 继承
继承： 子类不影响父类 子类可以有父类的一些功能（代码复用）
属性的继承： 调用父类的构造函数call
方法的继承： for in :拷贝继承（jquery也是采用拷贝继承extend）

// 拖拽继承
window.onload = function(){
	var d1 = new Drag('div1');
	d1.init();
	var d2 = new limitDrag('div2');
	d2.init();
	var d3 = new dottedDrag('div3');
	d3.init();
}
// 简单拖拽
function Drag(id){
	this.obj = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
}
Drag.prototype.init = function(){
	var This = this;
	this.obj.onmousedown = function(ev){
		var ev = ev || event;
		This.dragDown(ev);
		
		document.onmousemove = function(ev){
			var ev = ev || event;
			This.dragMove(ev);
		}
		document.onmouseup = function(){
			var ev = ev || event;
			This.dragUp();
		}
		return false;
	}
}
Drag.prototype.dragDown = function(ev){
	this.disX = ev.clientX - this.obj.offsetLeft;
	this.disY = ev.clientY - this.obj.offsetTop;
}
Drag.prototype.dragMove = function(ev){
	this.obj.style.left = ev.clientX - this.disX + 'px';
	this.obj.style.top = ev.clientY - this.disY + 'px';
}
Drag.prototype.dragUp = function(){
	document.onmousemove = null;
	document.onmouseup = null;
}
// 限制范围拖拽
function limitDrag(id){
	Drag.call(this,id);
}
extend(limitDrag.prototype, Drag.prototype);
limitDrag.prototype.dragMove = function(ev){
	
	this.limitRange(ev);
	
	this.obj.style.left = this.l + 'px';
	this.obj.style.top = this.t + 'px';
}
limitDrag.prototype.limitRange = function(ev){
	this.l = ev.clientX - this.disX;
	this.t = ev.clientY - this.disY;

	this.l = this.limit(this.l,0, document.documentElement.clientWidth - this.obj.offsetWidth);
	this.t = this.limit(this.t,0, document.documentElement.clientHeight - this.obj.offsetHeight);
}
limitDrag.prototype.limit = function(obj, min, max){
	if(obj < min){
		return min;
	}else if(obj > max){
		return max;
	}else{
		return obj;
	}
}
// 虚线框拖拽
function dottedDrag(id){
	limitDrag.call(this,id);
}
extend(dottedDrag.prototype, limitDrag.prototype);

dottedDrag.prototype.dragDown = function(ev){
	this.createBox();
	this.disX = ev.clientX - this.obj.offsetLeft;
	this.disY = ev.clientY - this.obj.offsetTop;
}	
dottedDrag.prototype.dragMove = function(ev){
	this.limitRange(ev);
	this.box.style.left = this.l + 'px';
	this.box.style.top = this.t + 'px';
}	
dottedDrag.prototype.dragUp = function(ev){

	this.obj.style.left = this.box.offsetLeft + 'px';
	this.obj.style.top = this.box.offsetTop + 'px';
	document.body.removeChild(this.box);
}
dottedDrag.prototype.createBox = function(ev){
	this.box = document.createElement('div');
	this.box.className = 'dottedBox';
	document.body.appendChild(this.box);

	this.box.style.left = this.obj.offsetLeft + 'px';
	this.box.style.top = this.obj.offsetTop + 'px';
}
function extend(obj1,obj2){
	for(var attr in obj2){
		obj1[attr] = obj2[attr];
	}
}

// 类继承：JS是没有类的概念,把JS中的构造函数看做是类
function Person(){
	this.name = [1,2,3];
}
Person.prototype.showInfo = function(){
	console.log(this.name);
}

var F = function (){}
F.prototype = Person.prototype;
Child.prototype = new F;
Child.prototype.constructor = Child;

function Child(){
	Person.call(this);
}
var c1 = new Child();
c1.name.push(4);
c1.showInfo();
var c2 = new Child();
c2.showInfo();

// 原型继承
var someOne = {name : 'hi'}
var someBody = cloneObj(a);
someBody.name = 'hello';

console.log(someBody.name);

function cloneObj(obj){
	var emptyFn = function(){}
	emptyFn.prototype = obj;
	return new emptyFn;
}

// 组件开发
window.onload = function(){
	
	var d1 = new Drag();
	d1.init({
		id : 'div1'
	});
	var d2 = new Drag();
	d2.init({
		id : 'div2',
		fnDown : function(){
			document.title = 'hello';
			
			document.getElementById('div2').style.background = 'pink';
		},
		fnUp : function(){
			document.body.style.background = '#ccc';
		}
	});
	var d3 = new Drag();
	d3.init({
		id : 'div3',
		fnDown : function(){
			document.title = 'i say hi';
		},
		fnUp : function(){
			document.title = 'byebye';
		}
	});
}
function Drag(){
	this.obj = null;
	this.downX = 0;
	this.downY = 0;
	this.settings = {
		fnDown : function(){},
		fnUp : function(){}
	}
}
Drag.prototype.init = function (opt){
	this.obj = document.getElementById(opt.id);
	var This = this;
	extend(this.settings,opt);
	this.obj.onmousedown = function(ev){
		var ev = ev || event;
		This.dragDown(ev);
		This.settings.fnDown();
		document.onmousemove = function(ev){
			var ev = ev || event;
			This.dragMove(ev);
		}
		document.onmouseup = function(){
			This.dragUp();
			This.settings.fnUp();
		}
		return false;
	}
}
Drag.prototype.dragDown = function(ev){
	this.downX = ev.clientX - this.obj.offsetLeft;
	this.downY = ev.clientY - this.obj.offsetTop;
}
Drag.prototype.dragMove = function(ev){
	this.obj.style.left = ev.clientX - this.downX + 'px';
	this.obj.style.top = ev.clientY - this.downY + 'px';
}
Drag.prototype.dragUp = function(){
	document.onmousemove = null;
	document.onmouseup = null;
}

function extend(obj1,obj2){
	for(var attr in obj2){
		obj1[attr] = obj2[attr];
	}
}
