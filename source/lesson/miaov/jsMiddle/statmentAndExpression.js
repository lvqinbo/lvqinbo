函数的声明： 
		function 函数名(){}
	栗子：function show(){}
函数表达式：命名函数表达式与匿名函数表达式
	匿名函数：var name =  function (){}
	栗子：var change = function (){}
	有名函数：var name =  function 函数名(){}
	var move = function show(){}
	以下几种表达式：
	1.	(function show(){})
	2.	+function show(){}
	3.	-function show(){}
	4.	~function show(){}
	5.	!function show(){}

	函数声明与函数表达式的区别
		1.函数表达式可以直接在后面加括号执行
		2.函数声明在后面加括号不可执行
	栗子：function show (){ alert('hello')} (); 错误，不可运行
	一下2中都是可正常运行的
	var hi = function show(){
		alert('hello');
	}();
	
	!function show(){
		alert('helloman');
	}();