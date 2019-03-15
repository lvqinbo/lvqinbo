// 获取时间
var oDate = new Date();				// 创建时间对象

var year = oDate.getFullYear();		// 年
var month = oDate.getMonth()+1;		// 月
var day = oDate.getDate();			// 日
var week = oDate.getDay();			// 星期
var hour = oDate.getHours();		// 时
var min = oDate.getMinutes();		// 分
var sec = oDate.getSeconds();		// 秒

// 设置时间(需要注意月份是从0开始)
var newDate = new Date(2015, 11, 10, 16,6,0);

var t = Math.floor((newDate - oDate)/1000);

var remain = Math.floor(t/86400) + '天' + Math.floor(t%86400/3600) + '时' + Math.floor(t%86400%3600/60) + '分'+Math.floor(t%60)+'秒';

console.log( remain );

// switch方式 将星期转换格式
switch(week){
	case 0:
		week = '星期日';
		break;
	case 1:
		week = '星期一';
		break;
	case 2:
		week = '星期二';
		break;
	case 3:
		week = '星期三';
		break;
	case 4:
		week = '星期四';
		break;
	case 5:
		week = '星期五';
		break;
	default :
		week = '星期六';
		break;
}
// if方式 将星期转换格式
if(week == 0) week = '星期日';
if(week == 1) week = '星期一';
if(week == 2) week = '星期二';
if(week == 3) week = '星期三';
if(week == 4) week = '星期四';
if(week == 5) week = '星期五';
if(week == 6) week = '星期六';

str = year +'年'+month+'月'+day+'日 ' + week +' '+ hour +'时'+ min +'分'+ sec +'秒';
