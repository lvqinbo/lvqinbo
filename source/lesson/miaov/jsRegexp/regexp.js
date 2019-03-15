// 正则的写法
var re = new RegExp('a');
var re = /a/;

// 正则默认：匹配成功就结束，不会继续匹配
// 如果想全部查找，就要加g（全局匹配）
// 量词：匹配不确定的位置
// +： 至少出现一次

正则中的方法：test() match() replace() search()

// []方括号的用法
[abc]     括号内的任意字符匹配均可以
[a-z]     范围 a-z 的范围内
[h-m]     h - m 范围
[A-Z]     范围 A-Z 的范围内
[0-9]     范围 0-9 的范围内

$		  结尾
^         行首
[^]       排除
[^a-z]    除了字母
[^0-9]    除了数字

. (点)      任意字符
\. 真正的点需要转义 

// 转义字符
\d 数字	 	 [0-9]
\D 非数字	 [^0-9] 

\w 字符 英文、数字、下划线	[a-z0-9_]
\W 非字符	 [^a-z0-9_] 

\s 空格 空白字符
\S 非空格 非空白字符

\b 独立部分（起始、结束、空格）
\B 独立部分

\1 重复的第一个子项
\2 重复的第二个子项

// 量词
{n}     正好出现n次
{n,m}   最少出现n次，最多m次
{n,}    最少出现n次，最多不限

+        {1,}     最少出现1次，最多不限
？       {0,1}    最少出现0次就是可以不出现，最多1次
*        {0,}     最少出现0次，最多不限 (谨慎使用)

=====================================================
// match  匹配则返回数组，不匹配则返回null
// match 的用法：字符串.match(正则);

找出数字
var str = 'fdsafsa9r34y7dsa7f3-43297dsafda73';
// js方式查找
function checkNum(str) {
	var arr = [];
	var temp = '';
	for (var i = 0; i < str.length; i++) {
		if(str.charAt(i) <= '9' && str.charAt(i) >= '0'){
			temp += str.charAt(i);
		}else{
			if(temp){
				arr.push(temp);
				temp = '';
			}
		}
	};
	if(temp){
		arr.push(temp);
		temp = '';
	}
	return arr;
};
// 正则方式
var re = /\d+/g; 
str.match(re);

// test : 匹配成功放回true,不成功返回false
// test的写法 ：正则.test(字符串)

检测是否全是数字
var str = '217243FDS284d7438';
var re = /\D/;

if(re.test(str)) ? console.log('全是数字') : console.log('不全是数字');

// search: 匹配字符串，成功就返回成功的位置，不成功就返回-1
// search的写法: 字符串.search(正则)
// 正则中默认 ：区分大小写
// 如果要不区分 在最后加上标识 i

var str = 'defAcah';
// var re = new RegExp('a','i');
var re = /a+/i;
console.log(str.search(re)); // 3

// replace 第二个参数 可以是字符串，也可以是一个回调函数

// 传入字符串
oP.innerHTML = str.replace(re,'***');
// 传入函数
oP.innerHTML = str.replace(re,function(str){
	var result = '';
	for (var i = 0; i < str.length; i++) {
		result += '*';
	};
	return result;
});

// 匹配子项
// 整个正则比喻成一个父级，里面小括号为一个子级
var str = '2019-8-14';
var re = /(\d+)(-)/g;

var r = str.replace(re,function(n1,n2){
	return n2 + '.';
});
console.log(r);	// 2019.8.14

// 当match不加g的情况下才可以得到子项的内容
var str = 'abcd';
var re = /(a)(b)(c)(d)/;
console.log(str.match(re));  // abcd,a,b,c,d 

// 字符类
// [] 中括号代表一个字符(中间的字符可以是bdf中的任何一个，abc/adc/afc 都匹配)
var str = 'adc';
var re = /a[bdf]c/;  
console.log(re.test(str));

// "^" 排除w (中间字母只要不是w都可以匹配)
var srt = 'bmw';
var re = /b[^m]w/;
console.log(re.test(str));

var str = 'abdfdc';
var re = /a[a-z0-9A-Z]c/; 中括号内不管写多少条件都只是匹配一个字符
var re = /a[a-z0-9A-Z]+c/; 中括号内可以是任意位

// 过滤标签
var re = /<[^>]+>/g;
oP.innerHTML = oP.innerHTML.replace(re,'');

// 独立部分
// \b  独立部分（开始、结束、空格）
// \B  非独立部分 
var str = 'helloman';
var re = /\bhello\b/;
console.log(re.test(str)); // false

// \1 重复的第一个子项
// \2 重复的第二个子项
var str = 'abcd';
var str2 = 'abcda';
var re = /(a)(b)(c)(d)\1/;
console.log(re.test(str)); // false
console.log(re.test(str2)); // true

// 寻找出现次数最多的一个字符
var str = 'fsdfsssssssaefdsjalerekfjdfsdfdsfsssssssfffffssaaaajkkkkkkjssss';
var arr = [];
var re = /(\w)\1+/g;

arr = str.split('');
str = arr.sort().join('');

str.replace(re,function(n1, n2){
	var index = 0,
		value = '';
	if( index < n1.length ){
		index = n1.length;
		value = n2;
	}
});
console.log('最多的字符是：'+ value + '重复次数：'+ index);	// s 24次