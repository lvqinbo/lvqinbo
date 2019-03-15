// return 应用 
return：返回值
		1) 函数名+括号：fn1()	==>  return 后面的值；
		2) 所有函数默认返回值：未定义；
		3) return 后面任何代码都不执行了；

	// alert( fn1() );
	function fn1(){
		return 888;
	}

	// alert( fn2().length );
	function fn2(){
		return 'helloman';
	}

	// fn3()();
	function fn3(){
		return function(){
			alert(888);
			//注释也会被弹出
		}
	}

	// fn4(80)(100);
	function fn4(a){
		return function (b){
			alert(a+b);
		}
	}
	fn5().onload = function(){
		document.body.innerHTML = '123';
	}
	
	function fn5(){
		return window;
	}

	alert(fn6(8));
	function fn6(n){
		var arr = [];
		for (var i = 1; i <= n; i++) {
			arr.push(i);
		};
		return arr;
	}
	
	alert( fn7(8,16) );
	function fn7(n1,n2){
		var arr = [];
		for(var i=n1; i<= n2; i++){
			arr.push(i);
		}
		return arr;
	}
	
	alert( fn8(10,6) );
	function fn8(n1,n2){
		var arr = [];
		if(n1 > n2){
			for(var i=n2; i<= n1; i++){
				arr.push(i);
			}
		}else{
			for(var i=n1; i<= n2; i++){
				arr.push(i);
			}
		}
		return arr;
	}

	window.onload = function(){

		getId('btn').onclick = function(){
			alert(getId('div1').innerHTML);
		}

		function getId(id){
			return document.getElementById(id);
		}
	}
	$(function(){
		$('btn').onclick=function(){
			$(this).style.background = 'red';
		};
	});

	function $(vArg){
		if(typeof vArg === 'function'){
			window.onload = vArg;
		}
		else if(typeof vArg === 'string'){
			return document.getElementById(vArg);
		}
		else if(typeof vArg === 'object'){
			return vArg;
		}
	}


根据传入的参数生成数组，如果第一个参数小，则为开头，如果大则为结尾
function fn1(n1, n2){
	var arr = [];
	if( n1 > n2 ){
		for(var i = n1; i >= n2; i++){
			arr.push(i);
		}
	}else if( n1 < n2 ){
		for(var i = n1; i <= n2; i++){
			arr.push(i);
		}
	}
	return arr;
}