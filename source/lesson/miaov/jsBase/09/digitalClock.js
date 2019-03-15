// 普通效果
var colockStyle1 = (function(){
	var oColock = document.getElementById('colock');
	var aImg = oColock.getElementsByTagName('img');
	var str = '';
	var arrImg = ['img/0.png','img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png','img/7.png','img/8.png','img/9.png'];

	setInterval(time,1000);
	time();
	function time(){
		var oDate = new Date();
		str = toDou( oDate.getHours() ) + toDou( oDate.getMinutes() ) + toDou( oDate.getSeconds() );
		for (var i = 0; i < aImg.length; i++) {
			aImg[i].src = arrImg[str.charAt(i)];
		};
	};
	
})();
// 向上滑动
var colockStyle2 = (function(){

	var oWrap = document.getElementById('wrap');
	var oUl = oWrap.getElementsByTagName('ul')[0];
	var aP = oUl.getElementsByTagName('p');

	var str = '',strNew = '';
	var arr = [];
	var oImg = [];
	var oDate = new Date();
	str =  toDou(oDate.getHours()) + toDou(oDate.getMinutes()) + toDou(oDate.getSeconds());

	for (var i = 0; i < aP.length; i++) {
		oImg[i] = aP[i].getElementsByTagName('img');
		
	};
	for (var i = 0; i < oImg.length; i++) {
		oImg[i][0].src = 'img/'+str.charAt(i)+'.png';
	};
	
	toChange();
	setInterval(toChange,1000);
	function toChange(){
		var newDate = new Date();
		strNew = toDou(newDate.getHours()) + toDou(newDate.getMinutes()) + toDou(newDate.getSeconds());

		toCompare(str,strNew);
		str = strNew;
	}
	function toCompare(str1, str2){
		arr = [];
		for(var i = 0; i < str1.length; i++){
			if(str1.charAt(i) != str2.charAt(i)){
				arr.push(i);
			}
		}
		move();
	}
	function move(){
		for (var i = 0; i < arr.length; i++) {
			oImg[arr[i]][0].src = 'img/'+str.charAt(arr[i])+'.png';
			oImg[arr[i]][1].src = 'img/'+strNew.charAt(arr[i])+'.png';

			aP[arr[i]].style.top = 0;
			doMove(aP[arr[i]], {top: -37});
		};
	}
})();
// 翻转效果
var colockStyle3 = (function(){

	var oClock = document.getElementById('colock2');
	var aImg = oClock.getElementsByTagName('img');

	var str = '',strNew = '';
	var timer = null;
	var arr = [];
	var oDate = new Date();
	str =  toDou(oDate.getHours()) + toDou(oDate.getMinutes()) + toDou(oDate.getSeconds());

	for (var i = 0; i < aImg.length; i++) {
		aImg[i].src = 'img/'+str.charAt(i)+'.png';
	};

	toChange();
	setInterval(toChange,1000);
	function toChange(){
		var newDate = new Date();
		strNew = toDou(newDate.getHours()) + toDou(newDate.getMinutes()) + toDou(newDate.getSeconds());

		toCompare(str,strNew);
		str = strNew;
	}
	function toCompare(str1, str2){
		arr = [];
		for(var i = 0; i < str1.length; i++){
			if(str1.charAt(i) != str2.charAt(i)){
				arr.push(i);
			}
		}
		move();
	}
	function move(){
		var speed = -4;
		clearInterval(timer);
		timer = setInterval(function(){
			for (var i = 0; i < arr.length; i++) {
				if(aImg[arr[i]].offsetHeight == 0){
					speed = 4;
					aImg[arr[i]].src = 'img/'+strNew.charAt(arr[i])+'.png';
				}
				aImg[arr[i]].style.height = aImg[arr[i]].offsetHeight + speed + 'px';
				aImg[arr[i]].style.top = aImg[arr[i]].offsetHeight - 18 + 'px';
				if(aImg[arr[i]].offsetHeight == 36) clearInterval(timer);
			};
		},30);
	}
})();
function toDou(n){
	return n < 10 ? '0' + n : '' + n;
}	