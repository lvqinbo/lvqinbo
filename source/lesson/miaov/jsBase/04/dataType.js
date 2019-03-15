ECMAScript：标准、核心
HTML 标签类型：block、inline、inline-block、table……
JS中的数据类型：数字、字符串、布尔、函数、对象(obj、[]、{}、null)、未定义

typeof 判断数据类型

var i = 100;
// alert( typeof i );			// number

var s = ' miaov ';
// alert( typeof s );			// string
// alert( s.length );			// 7
// alert( s.charAt(3) );		// 'a'

var b = true;				// 布尔值：true  false
// alert( typeof b );		// boolean
if ( true ) {}
for ( ; false ; ) {  }

var fn = function (){ alert(1); };
// fn();
function fn1(){
	alert(2);
}
// alert( fn1 );
// fn1();

var obj = document;
// alert( typeof obj );				// object  物体、东西、对象
obj.abc = 123;
obj.onOff = true;
obj.fn1 = function (){ alert(1); };
// alert( document.onOff );		// 123
// obj.fn1();

var arr = [ 1,2,3,4 ];
// alert( arr.length );
// arr[2] = 345;
// alert( arr );
// arr.push( 5,6,7 );
// alert( arr );
// alert( typeof arr );		// object

arr.abc = 999;
arr.fn1 = function (){ alert('ok'); };
// alert( arr.abc );
// arr.fn1();

var json = { name:'miaov', age:5  };
// alert( json.name + '今年' + json.age + '岁了' );
// alert( typeof json ); //json

var n = null;
// alert( typeof n );

var u;
// alert( typeof u );			// undefined 未定义
// 表示程序出问题了~~

var a = '+100';
// alert( a+100 );			// '100100'
// alert( Number(a) );		// 100
var a1 = '    ';
// alert( Number(a1) );		// 0
var a2 = true;
// alert( Number(a2) );		// true-1  false-0
var a3 = [ 1 ];
// alert( Number(a3) );		// 1 0
var a4 = null;
// alert( Number(a4) );		// 0

// var b = ' 200px';
// alert( parseInt(b) );	//200

var c = '12.34元';
// alert( parseFloat(c) );	//12.34

var num = '200.45';
if( parseInt(num) == parseFloat(num) ){
	alert( num + '是整数' );
}else{
	alert( num + '是小数' );
}

////////////////////////////////////////////////////////////////////////////

var json = {};
// alert( Number(json) );	//NaN

var u;
// alert( Number(u) );		//NaN

var a3 = function (){ alert(1); };
// alert( Number(a3) );		// NaN

// JS中的数据类型：数字（NaN）、字符串、布尔、函数、对象(obj、[]、{}、null)、未定义

var a = Number('abc');
// alert( a );					// NaN

// NaN：not a number 不是个 数字 的 数字类型

// alert( typeof (a) );			// number

// 一旦写程序中出现：NaN  肯定进行了非法的运算操作
// alert( '200px' -  100 );

// NaN 是 false
if( a ){
	// alert( '真' );
}else{
	// alert( '假' );
}

var abc = [];
// alert( abc === abc );		//true

// NaN 与自己都不相等！！
alert( a === a );				// false
=================isNaN======================
// NaN：not a number 不是个 数字 的 数字类型
// isNaN：Is not a number 是不是不是一个数字（不是数字）

isNaN();					// true			false
// 判断某些值是不是数字
// 不喜欢数字、讨厌数字

// alert( isNaN( function(){ alert(1) } ) );
// alert( isNaN('250') );
// Number()  '250' => 250 => false

// alert( isNaN( [] ) );

显式类型转换（强制类型转换）：
Number()
parseInt()
parseFloat()

隐式类型转换：
	+							200 + '3'	变成字符串
	- * / %						'200' - 3     变成数字
	++ --						变成数字
	> < 						数字的比较 、字符串的比较
	!	取反					把右边的数据类型转成布尔值
	==


alert( Number('……') );		//NaN
alert( '……'-9 );			//NaN

alert( '2' == 2 );			//true

//数字的比较与字符串的比较
alert( '10000000' > '9' ); //false

alert('1000000' > 9); //false

alert( '2' === 2 ); //false