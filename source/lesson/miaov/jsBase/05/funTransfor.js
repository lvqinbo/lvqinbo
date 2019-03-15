函数传参
//1个参数 数字
function fn1(num){

}
fn1(99);
//2个参数 
function fn2(num,cp){
	return num + cp;
}
console.log(fn2(100,'px'));
//传入字符串
function fn3(str){
	console.log(str.charAt(5));
}
fn3('helloman');
//传入匿名函数
function fn4(fn){
	fn();
}
fn4(function(){console.log('fn4')});
//匿名函数传入参数
function fn5(fn){
	fn(99);
}
fn5(function(n){console.log('fn5:'+ n)});
//传入有名函数
function fn6(fn){
	fn();
}
fn6(fn7);
function fn7(){
	console.log('fn7');
}

fn8(window,document);
//传入对象
function fn8(obj1, obj2){
	obj1.onload = function(){
		obj2.body.innerHTML = 'HTML';
	}
}
function $(Arg){
	if(typeof Arg == 'string'){
		console.log('string');
	}else if(typeof Arg == 'number' && Arg == Arg){
		console.log('number');
	}else if(typeof Arg == 'function'){
		console.log('fn');
	}else if(typeof Arg == 'object'){
		console.log('obj');
	}
}
$([1,2,3]);
