// 普通对象的引用,只是将值拷贝赋值给引用的对象
var num = 5;
var newNum = num;
newNum += 3;
console.log( newNum );	// 8
console.log( num );		// 5

// 对象和函数的引用
var arr = [1,2,3];
var newArr = arr;
newArr.push( 4 );
console.log( newArr );	// [1, 2, 3, 4]
console.log( arr );		// [1, 2, 3, 4]

var arr = [1,2,3];
var newArr = arr;
newArr = [4,5,6];
console.log( newArr );	// [4,5,6]
console.log( arr );		// [1,2,3]

var obj = { age : 10 };
var obj2 = obj;
obj2.age = 20;
console.log( obj2.age );	// 20
console.log( obj.age );		// 20

// 对象浅拷贝
function fnCopy( obj ) {
	var newObj = {};
	for( var attr in obj ){
		newObj[attr] = obj[attr];
	}
	return newObj;
}
var obj = { age : 10 };
var obj2 = fnCopy( obj );
obj2.age = 20;
console.log( obj2.age );	// 20
console.log( obj.age );		// 10

// 对象深拷贝
function deepCopy( obj ){
	if(typeof obj != 'object'){
		console.trace();
		return obj;
	}
	var newObj = {};
	for( var attr in obj ){
		newObj[attr] = deepCopy( obj[attr] );
	}
	return newObj;
}
var obj3 = {
	a : { b : 10}
}

var obj4 = deepCopy( obj3 );
console.log( obj4.a );
console.log( obj3.a );

// 递归
function recursive( num ){
	if( num == 1 ) {
		return 1;
	}
	return num * recursive( num -1 );
}

var result = recursive( 4 );
console.log( result );