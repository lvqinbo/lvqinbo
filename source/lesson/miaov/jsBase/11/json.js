// json 的写法
var json = {"name" : "hello", "age" : 20};
console.log( json.name );		// 'hello'
console.log( json.age );		// '20'

// json 中嵌套 数组
var data = {
	"url" : ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
	"text" : ['图片1','图片2','图片3','图片4']
};
console.log(data.url[2]);	// 'img/3.jpg'
console.log(data.text[1]);	// '图片2'

// json 遍历
for(var attr in data){
	// json 中的每一项的名
	// console.log(attr); // rul text

	// json 中的每一项的值
	// console.log(data[attr]);

	// 循环数组
	for(var i = 0; i < data[attr].length; i++){
		// console.log(data[attr][i]);
	}
}
// 单独循环json中的url
var url = data.url;
// 遍历json
for(var k in url){
	console.log(url[k]);
}

// 数组中嵌套json
var arr = [
	{"name" : 'John', "age" : 30},
	{"name" : 'Jerry', "age" : 27},
	{"name" : 'Mary', "age" : 24}
];
// 获取值的方式
console.log(arr[0].name);	// John
// 遍历方式 先循环数组
for(var k = 0; k < arr.length; k++){
	// 再遍历数组中的每个json
	for(var attr in arr[k]){
		console.log(arr[k][attr]);
	}
}

// JSON.stringify() 把对象解析成字符串
var json1 = {"name" : "john", "age" : 30}
console.log( JSON.stringify( json1 )); // '{"name" : "john", "age" : 30}'

// JSON.parse() 把字符串解析成json
var str = '{"left" : "300"}';
var b = JSON.parse( str );
console.log( b );		// Object {left: 300}

// eval 把字符串解析成json