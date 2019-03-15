闭包
1.什么是闭包？
		函数嵌套函数，内部的函数可以引用外部的参数和变量,参数和变量不会被垃圾回收机制收回
	2.闭包有什么好处？应用在哪里？
		希望一个变量长期驻扎在内存
		避免全局变量的污染
		私有成员的存在
	3.闭包需要注意的地方？
		IE下会引发内存泄露
	用法：
		1.模块化代码
		2.在循环中直接找到对应的索引
		
function test(){
	var a = 6;
	function fn(){
		alert(a);
	}
	return fn;
}
var result = test();
result();
test()();
==============================
全局变量
var a = 1;
function aaa(){
	a++;
	alert(a);
}
aaa(); // 2
aaa(); // 3

局部变量
function aaa(){
	var a = 1;
	a++;
	alert(a);
}
aaa(); // 2
aaa(); // 2

function aaa(){
	var a = 1;
	return function(){
		a++;
		alert(a);
	}
}
var num = aaa();
num();	// 2
num();  // 3

// 模块化代码
var sum = (function(){
	var a = 8;
	
	function add(){
		a++;
		console.log(a);
	}
	function add2(){
		a++;
		console.log(a);
	}
	return {
		ret1 : add,
		ret2 : add2
	}
})();
sum.ret1(); //9
sum.ret2(); //10
==============================
for(var i = 0; i < aLi.length; i++){
	(function(i){
		aLi[i].onclick = function(){
			alert(i);
		}
	})(i);
}

for(var i = 0; i < aLi.length; i++){
	aLi[i].onclick = (function(i){
		return function(){
			alert(i);
		}
	})(i);
}
==============================
//IE下内存泄漏问题
window.onload = function(){
	var oDiv = document.getElementById('div1');
	oDiv.onclick = function(){
		alert(oDiv.id);
	}
	// 解决方法
	window.unonload=function()
	{
		oDiv.onclick = null;
	}
}
