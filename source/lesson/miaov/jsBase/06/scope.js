alert(a);					// function a (){ alert(4); }
var a = 1;
alert(a);					// 1
function a (){ alert(2); }
alert(a);					// 1
var a = 3;		
alert(a);					// 3
function a (){ alert(4); }
alert(a);					// 3
alert(typeof(a));
a();						//报错 not a function

/////////////////////////////////////////////////

var a = 1;
function fn1(){
	alert(a);				// undefined
	var a = 2;
}
fn1();
alert(a);					// 1

/////////////////////////////////////////////////

var a = 1;
function fn1(){
	alert(a);				// 1
	a = 2;
}
fn1();
alert(a);					// 2

/////////////////////////////////////////////////

var a = 1;
function fn1(a){
	alert(a);				// undefined
	a = 2;
}
fn1();
alert(a);					// 1

/////////////////////////////////////////////////

var a = 1;
function fn1(a){
	alert(a);				// 1
	a = 2;
}
fn1(a);
alert(a);					// 1

/////////////////////////////////////////////////
// 想要获取函数内的值：
var str = '';
function fn1(){
	var a = 'HELLO~';
	str = a;
}
fn1();
alert( str );

function fn2(){
var a = '9999999克拉钻石23456789';
	fn3(a);
}
fn2();

function fn3(a){
	alert(a);
}

/////////////////////////////////////////////////

var num = 0;

function fn1(){
	num++;
}
function fn2(){
	num--;
}

fn2();				// -1
fn1();				// 0
fn2();				// -1
alert(num);			// -1

/////////////////////////////////////////////////

alert(a);			// undefined
alert( fn1 );		// FF 不能对下面的函数进行预解析

var a = 1;
function fn1(){
	alert(123);
}

if( true ){
	
}