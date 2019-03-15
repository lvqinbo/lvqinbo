var oAdd = g('addlist').getElementsByTagName('a')[0];
var oList = g('list');
var aLi = getTag(oList,'li');

for(var i = 0; i < aLi.length; i++){
	fnChange(aLi[i]);
}

addEvent(oAdd,'click',function (){
	var oLi = document.createElement('li');
	oLi.innerHTML = '< p>标题名称< /p>\
	< input type="text">\
	< a href="javascript:;" class="edit">修改</a>\
	< span>\
		< a href="javascript:;">保存</a>\
		< a href="javascript:;">取消</a>\
	< /span>';
	oList.appendChild(oLi);
});

function fnChange(obj){
	var oA = getTag(obj,'a')[0];
	var oInp = getTag(obj,'input')[0];
	var oP = getTag(obj,'p')[0];
	var oSpan = getTag(obj,'span')[0];
	var oSave = getTag(oSpan,'a')[0];
	var oCancel = getTag(oSpan,'a')[1];

	addEvent(oA,'click',fnEdit);
	function fnEdit(){
		oP.style.display = 'none';
		oInp.style.display = 'block';
		oInp.value = oP.innerHTML;
		oSpan.style.display = 'inline-block';
		this.style.display = 'none';
	}

	addEvent(oCancel,'click',cancel);
	addEvent(oSave,'click',save);

	//取消
	function cancel(){
		fnChange();
	}
	//保存
	function save(){
	 	oP.innerHTML = oInp.value;
		fnChange();
	}
	//显示
	function fnChange(){
		oP.style.display = 'block';
		oInp.style.display = 'none';
		oSpan.style.display = 'none';
		oA.style.display = 'block';
	}
}
function addEvent(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}
}
function g(sel){
	return document.getElementById(sel);
}
function getTag(oParent,obj){
	return oParent.getElementsByTagName(obj);
}