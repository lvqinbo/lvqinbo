
var arr = ['100px', 'abc'-6, [], -98765, 34, -2, 0, '300', , function(){alert(1);}, 
null, document, [], true, '200px'-30,'23.45元', 5, Number('abc'), 
function(){ alert(3); }, 'xyz'-90 ];

1、找到arr里所有的数字：-98765, 34, -2, 0, 5
2、找到可以转成数字的：'100px', -98765, 34, -2, 0, '300', '23.45元',  5 
3、把转成数字以后，最大值判断出来：300
4、把 NaN 所在的位置找出来：1 14 17  19

var aText = document.getElementsByTagName('span');
var num = [];
var strOrNum = [];

for(var i = 0; i < arr.length; i++){
	//找出类型是否为数字 并且不是NaN,因为NaN不相等
	if(typeof arr[i] == 'number' && arr[i] == arr[i]){
		num.push(arr[i]);
	}
	//找出可以转换为数字的字符串
	if(typeof arr[i] == 'string' && parseInt(arr[i]) || parseFloat(arr[i])){
		strOrNum.push(arr[i]);
	}
	//找出NaN的位置
	else if(arr[i] != arr[i]){
		aText[3].innerHTML += i + ',';
	}
}
//判断最大数字
function checkMaxNum(num){
	var max = 0;
	for(var i = 0; i < num.length; i++){
		if(num[i] > max){
			max = num[i];
		}
	}
	return max;
}
aText[0].innerHTML = num;
aText[1].innerHTML = strOrNum;
aText[2].innerHTML = checkMaxNum(strOrNum);