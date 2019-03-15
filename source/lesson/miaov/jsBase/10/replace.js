var oShowBtn = document.querySelector('.show');
var oUl = document.getElementById('menu');
var iBtn = true;
var iNow = 0;
// 展开按钮点击
oShowBtn.onclick = function(){
	if(iBtn){
		oUl.style.display = 'block';
	}else{
		oUl.style.display = 'none';
	}
	iBtn = !iBtn;
}
// 显示查找 替换div
var aLi = oUl.getElementsByTagName('li');
var oHideDiv = document.getElementById('hide');
var oFind = oHideDiv.getElementsByClassName('find');
// 侧边栏 查找 替换点击
for(var i = 0; i < aLi.length; i++){
	aLi[i].index = i;
	aLi[i].onclick = function(){
		iNow = this.index;
		fnReplace();
		oHideDiv.style.display = 'block';
		oUl.style.display = 'none';
		iBtn = true;
	}
}
// 关闭查找 替换div
var oClose = oHideDiv.getElementsByTagName('a')[0];
oClose.onclick = function(){
	oHideDiv.style.display = 'none';
}

var str = '';
var html = '';
var newStr = '';
var arr = [];
var oMsg = document.querySelector('.t-msg');

for(var i = 0; i < oFind.length; i++){
	fnSearch(oFind[i]);
}
function fnSearch(obj){
	var aSearch = obj.getElementsByTagName('input')[0];
	var aReplace = obj.getElementsByTagName('input')[1];
	var oBtn = obj.getElementsByClassName('sbtn')[0];
	html = oMsg.innerHTML;
	// aSearch.value = str;
	oBtn.onclick = function(){
		if(oBtn.value == '查找'){
			str = checkStr(aSearch.value);
			oMsg.innerHTML = html.split(str).join('<span>'+str+'</span>');
		}else{
			if(aReplace.value == '' && aSearch.value == '' ){
				if(confirm('你希望删除所有文字吗?')){
					oMsg.innerHTML = '';
				}
			}
			else if(aReplace.value == ''){
				if(confirm('你希望删除选中文字吗？')){
					oMsg.innerHTML = oMsg.innerHTML.split(aSearch.value).join('');
					newStr = oMsg.innerHTML;
				}else{
					if(newStr != ''){
						oMsg.innerHTML = newStr;
					}
				}
			}else{
				oMsg.innerHTML = oMsg.innerHTML.split(aSearch.value).join(aReplace.value);
			}
		}
	}
	
}
var oSearch = document.querySelector('.search');
var aSpan = oSearch.getElementsByTagName('span');
// 查找 替换点击
for (var i = 0; i < aSpan.length; i++) {
	aSpan[i].index = i;
	aSpan[i].onclick = function(){
		iNow = this.index;
		fnReplace();
		fnSearch(oFind[this.index]);
	}
};
function fnReplace(){
	for (var i = 0; i < aSpan.length; i++) {
		aSpan[i].className = '';
		oFind[i].style.display = 'none';
	};
	aSpan[iNow].className = 'selected';
	oFind[iNow].style.display = 'block';
}

function checkStr(str){
	var re = /^\s/;
	if(str == ''){
		alert('请输入要查找的内容');
	}else if(re.test(str)){
		alert('请输入要查找的内容');
	}else{
		return str;	
	}
}