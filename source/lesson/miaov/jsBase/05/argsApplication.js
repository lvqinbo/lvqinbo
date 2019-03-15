// arguments 应用
function sum(){
	var n = 0;
	for(var i = 0; i < arguments.length; i++){
		n += arguments[i];
	}
	return n;
}
sum(10,20,30);
//根据传入参数最后一位的符合来做运算
function sum(){
	var n = 0; 
	for(var i = 0; i < arguments-1; i++){
		if(arguments[arguments-1] == '+'){
			n += arguments[i];
		}else if(arguments[arguments-1] == '-'){
			n -= arguments[i];
		}
	}
	return n;
}