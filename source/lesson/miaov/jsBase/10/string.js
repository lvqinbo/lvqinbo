// 字符串的方法
var str = '妙味课堂-WWW.miaov.com';

// 按下标查找字符串
str.charAt(1);						// '味'

// 将字符转为数字
str.charCodeAt(1);					// 21619

// 将数字转为文字字符
String.fromCharCode(22937, 21619);	// '妙味'

// 根据给出的下标，查找字符所在位置（从前往后找）
str.indexOf('m', 4);					// 9

// 根据给出的下标，查找字符所在位置（从后往前找）
str.lastIndexOf('o');					// 16

// 字符串的比较，按照位置来一一对比，只要有一个大，后面就不做比较
'1000' < '2'						// true

// 2种不同类型比较，默认会做隐式转换，字符串将会转为数字，所以为true
'1000' > 2 						 // true

// 截取字符串，起始位置，结束位置 可以检测2个数，大的往后扔，小的往前扔,负数则为0
str.substring(0, 4);					// '妙味课堂'

// 截取字符串,如果为负数,则将从后往前数,来截取字符,不交换位置
str.slice(-3);						// 'com'

// 转换为大写(只针对英文)
str.toUpperCase();					// '妙味课堂-WWW.MIAOV.COM'

// 转换为小写(只针对英文)
str.toLowerCase();					// '妙味课堂-www.miaov.com'

// 切割字符串，第一个参数是以什么截断字符串，第二参数是保留几段,转入数组中，此时已是数组
// 如果不传参数，则整个字符串一起切割，如果传入空字符串，则以每个字符来切割
str.split('.', 2);						// [ '妙味课堂-WWW', 'miaov' ]

var arr = [ 'www', 'miaov', 'com' ];
// 将数组拼接为字符串，参数是拼接的符号，如不传参，则默认为'，'号拼接，如传的是'' 空字符串，则没有任何符号拼接
arr.join('aaa');						// 'www.miaov.com'

// 检测数字方法
function deteck(str){
	var n = 0;
	for (var i = 0; i < str.length; i++) {
		n = str.charCodeAt(i);
		if(n > 57 || n < 48) return false;
	};
	return true;
}