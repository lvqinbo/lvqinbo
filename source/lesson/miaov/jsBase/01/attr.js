HTML属性的操作：读、写 (属性名、属性值)
属性的读操作(获取、找到)： 
			元素.属性名
属性的读操作("添加" 替换、修改)：
			元素.属性名 = 新的值
元素.innerHTML 读取元素内的HTML代码
元素.innerHTML = 新的值

//属性的读操作
var oInp1 = document.getElementById('inp1');
var oSel = document.getElementById('sel');
var oBtn = document.getElementById('btn1');
var oTxt = document.getElementById('txt');
oBtn.onclick = function(){
	console.log(oInp1.value);
	console.log(oInp1.value +'在'+ oSel.value);
	//将文本框内的值赋给p元素
	oTxt.innerHTML = oInp1.value;
	//清空文本框内的文字
	oInp1.value = '';
}

//属性的写操作
var oBtn2 = document.getElementById('btn2');
var oInp2 = document.getElementById('inp2');
var oInp3 = document.getElementById('inp3');
var oBox = document.getElementById('box');
oBtn2.onclick = function(){
	//将oInp2的值赋给oBox作为属性，oInp3作为值赋值给oBox作为值
	oBox.style[oInp2.value] = oInp3.value;
}

JS中书写css符合样式时，需要将'-'后面的值改成大写，并去掉'-'
例如：
	backgroun-image	改成 backgroundImage
	margin-left 改成 marginLeft
	padding-top 改成 paddingTop

//改变文字大小及背景颜色属性
var oBtnGroup = document.getElementById('p1');
var oP = document.getElementById('p2');
var aInput = oBtnGroup.getElementsByTagName('input');
var iNum = 16; //设置默认字体大小
aInput[0].onclick = function(){
	if( iNum < 24 ){
		iNum ++;
		oP.style.fontSize = iNum + 'px';
	}
}
aInput[1].onclick = function(){
	if( iNum > 12 ){
		iNum --;
		oP.style.fontSize = iNum + 'px';
	}
}
aInput[2].onclick = function(){
	oP.className = 'red';
}
aInput[3].onclick = function(){
	oP.className = 'gray';
}