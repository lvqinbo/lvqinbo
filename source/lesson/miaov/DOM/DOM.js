// 动态创建元素
var oDiv = document.createElement('div');
var oUl = document.createElement('ul');
var oLi = document.createElement('li');
var oA = document.createElement('a');

// 将创建出来的元素插入其他元素中(插入到最后)
oLi.appendChild(oA);
oUl.appendChild(oLi);
oDiv.appendChild(oUl);

// insertBefore 插入到某元素的前面,第一个参数是要插入的元素，第二参数是插入到谁的前面
oUl.insertBefore(oLi,aLi[0]);
------------------------------------------------------------------------------------
// attribute属性
// 获取 获取一个元素的属性的三种方法
< input type="text" value="hello" id="text" >
var oTxt = document.getElementById('text');

1. 属性名.属性值
console.log(oTxt.value);
2. 属性名['属性值']
console.log(oTxt['value']);
3. getAttribute('属性名');
console.log(oTxt.getAttribute('value'));

// 设置
1. oTxt.value = 'helloman';
2. oTxt['value'] = 'show me';
3. oTxt.setAttribute('value','i am comeing');
------------------------------------------------------------------------------------
// 元素节点 -- 子节点
< ul id="ul1">
	< li>11111111< a href="javascript:;">隐藏< /a>< /li>
	< li>22222222< a href="javascript:;">隐藏< /a>< /li>
	< li>33333333< a href="javascript:;">隐藏< /a>< /li>
< /ul>
var oUl = document.getElementById('ul1');
var aA = document.getElementsByTagName('a');

// childNodes 子节点
console.log(oUl.childNodes.length);		// 7

// 元素.nodeType : 只读属性 当前元素的节点类型
// 元素节点	= 1  // 属性节点 = 2   // 文本节点 = 3
console.log(oUl.nodeType);				// 1
console.log(oUl.childNodes[2].nodeType);// 3

for (var i = 0; i < oUl.childNodes.length; i++) {
	if(oUl.childNodes[i].nodeType == 1){
		oUl.childNodes[i].style.background = 'red';
	}
};

// 元素节点 -- 父节点
// parentNode 父节点
for (var i = 0; i < aA.length; i++) {
	aA[i].onclick = function(){
		this.parentNode.style.display = 'none';
	}
};

// 元素节点 -- 兄弟节点
/*
	firstChild 只读 属性 第一个子节点
	标准下： firstElementChild
	非标准下：firstChild
	元素.firstChild || 元素.firstElementChild 
*/
var oFirst = oUl.firstElementChild || oUl.firstChild;
oFirst.style.background = 'gray';

/*
	lastChild 只读属性 最后一个子节点
	标准下： lastElementChild
	非标准下: lastChild
	元素.lastChild || 元素.lastElementChild 
*/
var oLast = oUl.lastElementChild || oUl.lastChild;
oLast.style.background = 'red';

/*
	previousSibling 只读属性 上一个兄弟节点
	标准下： previousElementSibling
	非标准下: previousSibling
	元素.previousSibling || 元素.previousElementSibling 
*/
var oPrev = oLast.previousElementSibling || oLast.previousSibling;
oPrev.style.background = 'blue';

/*
	nextSibling 只读属性 上一个兄弟节点
	标准下： nextElementSibling
	非标准下: nextSibling
	元素.nextSibling || 元素.nextElementSibling 
*/

var oNext = oFirst.nextElementSibling || oFirst.nextSibling;
oNext.style.background = 'orange';

/*
	元素.children : 只读 属性 子节点列表集合
	标准下：只包含元素类型的节点
	非标准下：只包含元素类型的节点
*/
for (var i = 0; i < oUl.children.length; i++) {
	oUl.children[i].style.background = 'pink';
};
------------------------------------------------------------------------------------
// 元素的宽和高
< div id="div1" style="width: 100px; height: 100px; border: 1px solid #333; 
margin: 10px; padding: 10px;">< /div>

var oDiv = document.getElementById('div1');

console.log( oDiv.style.width );		// 样式宽 100
console.log( oDiv.style.height );		// 样式高 100
console.log( oDiv.clientWidth );		// 样式宽 + padding	120
console.log( oDiv.clientHeight );		// 样式高 + padding	120
console.log( oDiv.offsetWidth );		// 样式宽 + padding + border 或 可视区宽 + 边框122
console.log( oDiv.offsetHeight );		// 样式高 + padding + border 或 可视区宽 + 边框122
------------------------------------------------------------------------------------
/*
	元素.offsetLeft[Top] : 只读 属性 当前元素到定位父级的距离（偏移值）
	到当前元素的offsetParent的距离
	
	如果没有定位父级
		offsetParent -> body
		offsetLeft   -> html
	
	如果有定位父级
		ie7以下：如果自己没有定位，那么offsetLeft[Top]是到body的距离
				 如果自己有定位，那么就是到定位父级的距离
		其他：   到定位父级的距离
*/
------------------------------------------------------------------------------------
/*
	父级.replaceChild(新节点，被替换节点) 替换子节点
	appendChild,insertBefore,replaceChild都可以操作动态创建出来的节点，也可以操作已有节点
*/
< div id="div1">我将要抢占别人的位置< /div>
< input type="button" value="按钮" id="btn">
< hr />
< p id="p1">我是要被欺负的！< /p>
var oDiv = document.getElementById('div1');
var oBtn = document.getElementById('btn');
var oP = document.getElementById('p1');

oBtn.onclick = function(){
	document.body.replaceChild(oDiv,oP);
}
------------------------------------------------------------------------------------
// 获取最终父级的left 和 top
function getPos(obj){
	var pos = {left : 0, top : 0};
	
	while(obj){
		pos.left += obj.offsetLeft;
		pos.top += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return pos;
}