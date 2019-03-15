var oContent = document.querySelector('.content');
var aBox = oContent.children;
var oCart = document.querySelector('.cart');
var oTp = document.querySelector('.t-price').getElementsByTagName('p')[0];
var iBtn = true;
var num = 0;

for(var i = 0; i < aBox.length; i++){
	aBox[i].style.left = (i * 320)+'px';
	setTimeData(aBox[i]);
}
function setTimeData(obj){
	var oParent = obj.getElementsByTagName('div')[0];
	var aInput = oParent.getElementsByTagName('input');
	var oBtn = oParent.getElementsByTagName('a')[0];
	var oShowTime = obj.getElementsByTagName('p')[0];
	var oTitle = obj.getElementsByTagName('a')[1];
	var oPrice = obj.getElementsByTagName('span')[0];
	var stop = null;

	oBtn.onclick = function(){
		clearInterval(stop); 
		stop = setInterval(setTime,1000);
	}
	function setTime(){
		var oDate = new Date();
		var oNewDate = new Date();
		// 获取输入框的值
		var iH = parseInt(aInput[0].value);
		var iM = parseInt(aInput[1].value);
		var iS = parseInt(aInput[2].value);
		// 设置日期
		oNewDate.setFullYear(oDate.getFullYear());
		oNewDate.setMonth(oDate.getMonth());
		oNewDate.setDate(oDate.getDate());
		oNewDate.setHours(iH);
		oNewDate.setMinutes(iM);
		oNewDate.setSeconds(iS);
		// 转换时间格式
		var t = Math.floor((oNewDate - oDate)/1000);
		var iDay = toDou(Math.floor(t/86400));
		var iHours = toDou(Math.floor(t%86400/3600));
		var iMin = toDou(Math.floor(t%86400%3600/60));
		var iSec = toDou(Math.floor(t%60));
		// 判断输入是否为空
		if( aInput[0].value == '' || aInput[1].value == '' || aInput[2].value == '') {
			alert("请设定时间!"); 
			clearInterval(stop);
			return;
		}// 判断倒计时是否结束(如果输入的时间小于当前时间则结束)
		else if(t < 0){
			clearInterval(stop);
			shake(obj,'left');
			setTimeout(function(){
				startMove(obj,{top: 500, opacity: 0},function (){
					fnCreate();
				});
			},1000);
		}
		// 将时间赋值并显示
		oShowTime.innerHTML = '剩余'+iDay+'天'+iHours+'时'+iMin+'分'+iSec+'秒';
	}
	// 创建商品
	function fnCreate(){
		var oP = document.createElement('p');
		oP.innerHTML = '<span class="goods-name">'+oTitle.innerHTML+'</span>\
			<span class="s-price">'+oPrice.innerHTML+'</span>\
			<span class="s-total">'+oPrice.innerHTML+'</span>';
		oCart.appendChild(oP);

		var oMoney = document.querySelector('.s-total');
		if(oMoney){
			num += parseInt(oPrice.innerHTML);
			oTp.innerHTML = '总价：'+num+'元';	
		}
	}
}
// 补零函数
function toDou(n){
	return n < 10 ? '0' + n : '' + n;
}
// 抖动函数
function shake(obj, attr, fnEnd){
	if(!iBtn) return;
	iBtn = false;
	var pos = parseInt(getStyle(obj, attr));
	var arr = [];
	var num = 0;

	for(var i = 20; i > 0; i-=2){
		arr.push(i,-i);
	}
	arr.push(0);

	clearInterval(obj.shake);
	obj.shake = setInterval(function(){
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if(num == arr.length-1){
			clearInterval(obj.shake);
			iBtn = true;
		}
	},50);
}
// 运动框架函数
function startMove(obj, json, fnEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bBtn = true;
		for(var attr in json){
			var cur = 0;
			if(attr == 'opacity'){
				cur = Math.round(parseFloat(getStyle(obj, attr))*100);
			}else{
				cur = parseInt(getStyle(obj, attr));
			}

			var speed = (json[attr] - cur)/6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(cur != json[attr]){
				bBtn = false;
			}

			if(attr == 'opacity'){
				obj.style.opacity = (cur + speed)/100;
				obj.style.filter = 'alpha(opacity: '+(cur + speed)+')';
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
		if(bBtn){
			clearInterval(obj.timer);
			fnEnd && fnEnd();
		}
	},30);
}
// 获取行间样式
function getStyle(obj, name){
	return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name];
}