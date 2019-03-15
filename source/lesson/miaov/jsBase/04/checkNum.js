检测数字，判断需满足以下5个条件
1、有没有输入
2、输入的是不是数字
3、不能有0在前面
4、不能是小数
5、输入的数字必须在5位以上、10位以内

var oNumbox = document.getElementById('numbox');
var oText = oNumbox.getElementsByTagName('p')[0];
var aInp = oNumbox.getElementsByTagName('input')[0];
var oBtn = oNumbox.getElementsByTagName('input')[1];

oBtn.onclick=function(){
	var str = aInp.value;
	oText.style.display = 'inline-block';
	if(str == ''){
		oText.innerHTML = '不能为空';
	}else if(isNaN(str)){
		oText.innerHTML = '输入不是数字';
	}else if(str.charAt(0) == 0){
		oText.innerHTML = '开头不能为零';
	}else if(parseInt(str) != parseFloat(str)){
		oText.innerHTML = '不能有小数';
	}else if(str.length < 5 || str.length > 12){
		oText.innerHTML = '其输入5-12位数字';
	}else{
		oText.style.display = 'none';
		alert('验证通过！');
	}
}
