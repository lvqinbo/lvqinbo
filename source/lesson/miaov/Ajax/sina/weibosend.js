//onchange 光标消失的时候触发一次
//IE onpropertychange
//标准 oninput
var oInput = document.getElementById('txt1');
var oBox = document.getElementById('box');
var oP = oBox.getElementsByTagName('p')[0];
var oBtn = document.getElementById('btn1');
var oUl = document.getElementById('contain');
var aLi = oUl.getElementsByTagName('li');

var ie = !-[1,]; // 判断是否IE浏览器
var num = 0;
var timer = null;
oInput.onfocus = function(){
	oP.innerHTML = '还可以输入<span>140</span>字';
}
oInput.onblur = empty;

function empty(){
	if(oInput.value.length == ''){
		oP.innerHTML = '黑龙江警车遇车祸掉头离去，官方尚未给出解释(视频)　热门微博';
	}
}
if(ie){
	oInput.onpropertychange = toChange; 
}else{
	oInput.oninput = toChange;
}
// 点击发送按钮事件
oBtn.onclick = function(){
	var url = 'message.php?act=add&content='+oInput.value;
	ajax(url,function(){

	});
	// 判断是否有内容与按钮状态
	if( oInput.value.length != 0 && oBtn.className != 'dis'){
		var oLi = document.createElement('li');
		oLi.innerHTML = oInput.value;
		oUl.insertBefore(oLi,aLi[0]);
		oInput.value = '';

		var iHeight = oLi.offsetHeight;
		oLi.style.height = 0;
		doMove(oLi,{height : iHeight},function(){
			doMove(oLi,{opacity : 100});
		});
		oP.innerHTML = '黑龙江警车遇车祸掉头离去，官方尚未给出解释(视频)　热门微博';
	}
	else{
		clearInterval(timer);
		timer = setInterval(function(){
			num++;
			if(num == 5){
				clearInterval(timer);
				num = 0;
			}
			else{ // 超出字数屏幕闪烁
				if(num%2){
					oInput.style.background = '#f30';
				}
				else{
					oInput.style.background = '';
				}
			}
		},30);
	}
}
// 判断是否还可以输入
function toChange(){
	var num = Math.ceil(getTextNum(oInput.value)/2);
	var oSpan = oP.getElementsByTagName('span')[0];

	if(num < 140){
		oP.innerHTML = '还可以输入<span>'+(140 - num)+'</span>字';
		oBtn.className = '';
		oP.className = '';
	}else{
		oP.innerHTML = '已超出<span>'+(num - 140)+'</span>字';
		oP.className = 'hover';
		oBtn.className = 'dis';
	}
}
// 将中文字转换为2个英文字母
function getTextNum(str){
	return String(str).replace(/[^\x00-\xff]/g,'aa').length;
}
	
/*-----------------------将微博插入数据库----------------------------*/
/*
<?php 
	$sql = "SELECT ID,content,posttime FROM message";
	mysql_connect('localhost','root','');
	mysql_select_db(
		'sina');
	$res = mysql_query($sql);
?>
< ul id="contain">
	< ?php while($row = mysql_fetch_row($res)){ ?>
	< li>< ?php echo $row[1]; ?>< /li>
	< ?php } ?>
< /ul>

*/