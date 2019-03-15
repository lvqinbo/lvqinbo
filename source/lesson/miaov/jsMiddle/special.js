call 的用法 改变this指向
var obj = {
	aaa : function(){
		alert(this);	
	}
}
var arr = [1,2,3];
obj.aaa.call();			// window.
obj.arr.call(arr);		// arr
obj.arr.apply(arr);		// arr

console.log 在浏览器控制台的一些用法
var a  = 'hello';
console.log('%c'+a,'font-size:200%;background:red;');


insertBefore 用法： 
当第二个参数没有的时候，等于是insertBefore(oLi,null); 可以不用做if判断

typeof 的用法
var arr = [];
console.log(typeof arr);
console.lot(typeof(arr));

instanceOf 用法
console.log(arr instanceof Object);
console.log(arr instanceof(Object));

in 用法
console.log('num' in arr);
console.log('num' in(arr));

\ 字符串拼接的另外一个方法
var str = '< div>div< /div>\
< span>ddddd< /span>\
< p>00000< /p>';

// setTimeout
setTimeout(function(num){
	alert(num);
},1000,55555);

// for循环
for(var i = 0; i < 5; i++){
	for(var j = 0; j < 4; j++){
		if(i == 2){
			break;
		}
		alert(i);	// 0,1,3,4
	}
}
// 跳出嵌套for循环的方法，给for循环定义一个名字
a :for(var i=0; i<5; i++){
	for(var j=0; j<4; j++){
		if(i == 2){
			break a;
		}
		 alert(i);	// 0,1
	}
}
// 这样的写法类似 while
var i = 0; 
for( ; ; ){
	alert(i);
	if(++i>5){
		break;
	}
}
