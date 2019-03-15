// 展开 隐藏
var oP = document.getElementById('text');
var oSpan = oP.getElementsByTagName('span')[0];
var oA = document.getElementsByTagName('a')[0];
var html = oSpan.innerHTML;
var iBtn = true;
oA.onclick = function(){
	if(iBtn){
		oSpan.innerHTML = html.substring(0,40);
		oA.innerHTML = '展开';
	}else{
		oSpan.innerHTML = html.split(str).join('< strong>'+ str +'< /strong>');
		oA.innerHTML = '隐藏';
	}
	iBtn = !iBtn;
}
// 查找
var oSearchBox = document.getElementById('search');
var oInp = oSearchBox.getElementsByTagName('input')[0];
var oBtn = oSearchBox.getElementsByTagName('input')[1];
var str = '';
oBtn.onclick = function(){
	str = oInp.value;
	if(!str){
		alert('请输入查找的内容'); 
	}else if(html.indexOf(str) == -1){
		alert('没有找到您要查找的内容'); 
	}

	oSpan.innerHTML = html;
	oSpan.innerHTML = html.split(str).join('< strong>'+ str +'< /strong>');
}