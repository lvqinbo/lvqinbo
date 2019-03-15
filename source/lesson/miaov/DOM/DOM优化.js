var oDiv = document.getElementById('div1');

console.time('javascript');
for (var i = 0; i < 5000; i++) {
	oDiv.innerHTML += 'A';
};
console.timeEnd('javascript');

//这种方法更快
var str = '';
console.time('javascript');
for(var i=0; i<5000; i++)
{
	str += 'a';
}
oDiv.innerHTML = str;
console.timeEnd('javascript');
----------------------------------------------------------------------------------
var oUl = document.getElementById('ul1');
var str = '';
// chrome 浏览器 这种稍微快些
console.time('hello');
for(var i=0; i<5000; i++)
{
	var aLi = document.createElement('li');
	oUl.appendChild(aLi);
}
console.timeEnd('hello');


console.time('hello');
for (var i = 0; i < 5000; i++) {
	str += '< li>< /li>';
};
oUl.innerHTML = str;
console.timeEnd('hello');
----------------------------------------------------------------------------------
var oUl = document.getElementById('ul1');

//创建方式
console.time('hello');
for(var i=0; i<5000; i++)
{
	var aLi = document.createElement('li');
	aLi.innerHTML = 'li';
	oUl.appendChild(aLi);
}
console.timeEnd('hello');

// chrome 浏览器 克隆方式比动态创建方式更快
console.time('hello');
var aLi = document.createElement('li');
aLi.innerHTML = 'li';
for (var i = 0; i < 5000; i++) {
	var newLi = aLi.cloneNode(true);
	oUl.appendChild(newLi);
};
console.timeEnd('hello');
----------------------------------------------------------------------------------
var oDiv =document.getElementById('div1');
var oInput =document.getElementById('input');
var oSpan =document.getElementById('span');

//下面的性能更好
var doc =document;
var oDiv = doc.getElementById('div1');
var oInput = doc.getElementById('input');
var oSpan = doc.getElementById('span');
=============================================

var oUl = document.getElementById('ul1');
var aLi = oUl.getElementsByTagName('li');

for(var i=0; i<5000; i++){
	var oLi = document.createElement('li');
	oUl.appendChild(oLi);
}

//用一个变量记住ali的长度 这样的性能更快
console.time('hello');
var len = aLi.length;
for(var i=0; i< len; i++){
	aLi[i].innerHTML = 'li';
}
console.timeEnd('hello');

=============================================
// 减少重绘重构
for (var i = 0; i < 5000; i++) {
	var oLi = document.createElement('li');

	第一种方式（性能最差）
	oLi.style.width = '100px';
	oLi.style.height = '100px';
	oLi.style.background = 'red';

	第二种方式（性能比第一种稍微好些）
	oLi.style.cssText = 'width:100px; height:100px; background: red';

	第三种方式（性能最高）
	oLi.className = 'active';

	oUl.appendChild(oLi);
};
----------------------------------------------------------------------------------
setInterval(function(){
	oDiv.style.left = oDiv.offsetLeft + 1 + 'px';
	oDiv.style.top = oDiv.offsetTop + 1 + 'px';
},30);

// 缓存布局信息 这样性能更好
var L = oDiv.offsetLeft;
var T = oDiv.offsetTop;
setInterval(function(){
	L++;
	T++;
	oDiv.style.left =  L + 'px';
	oDiv.style.top =  T + 'px';
},30);