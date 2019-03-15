function g(id){
	return document.getElementById(id);
}
function view(){
	return {
		w: document.documentElement.clientWidth,
		h: document.documentElement.clientHeight
	}
}
function hasClass(obj, sClass){
	return obj.className.match( new RegExp( "(\\s|^)"+sClass+"(\\s|$)" ) );
}
function removeClass(obj, sClass){
	if(hasClass(obj, sClass)){
		var re = new RegExp("(\\s|^)"+sClass+"(\\s|$)");
		obj.className = obj.className.replace(re,'');
	}
}
function addClass(obj, sClass){
	if(!hasClass(obj, sClass)){
		obj.className += ' ' + sClass;
	}
}
function bind(obj, evts, cb){
	if(obj.attachEvent){
		obj.attachEvent('on'+evts, cb);
	}else{
		obj.addEventListener(evts, cb, false);
	}
}
// 阻止拖拽默认事件
bind(document,'touchmove',function(ev){
	ev.preventDefault();
})
// 幻灯片运动
var slide = (function(){
	var oPic = g('picList');
	var oCtrl = g('ctrl');
	var aImg = oPic.getElementsByTagName('img');
	var aCtrlItem = oCtrl.getElementsByTagName('span');
	var iNow = num = 0;
	var iX = 0;
	var timer = null;
	var iW = view().w;
	var html = '';
	var downX = 0;
	var downLeft = 0;
	var iBtn = true;
	var arrImg = [
		'img/1.jpg',
		'img/2.jpg',
		'img/3.jpg'
	];
	function init(){
		createCtrl()
	}
	bind(oPic,'touchstart',fnStart);
	bind(oPic,'touchmove',fnMove);
	bind(oPic,'touchend',fnEnd);

	function fnStart(ev){
		var touchs = ev.changedTouches[0];
		clearInterval(timer);
		downX = touchs.pageX;
		downLeft = oPic.offsetLeft;
	}
	function fnMove(ev){
		var touchs = ev.changedTouches[0];
		if(this.offsetLeft >= 0){
			if(iBtn){
				iBtn = false;
				downLeft = touchs.pageX;
			}
			this.style.left = (touchs.pageX - downX)/3 + 'px';
		}else if(this.offsetLeft <= (iW - oPic.offsetWidth)){
			this.style.left = (touchs.pageX - downX)/3 + 'px';
		}
			this.style.left = touchs.pageX - downX + downLeft + 'px';
	}
	function fnEnd(ev){
		var touchs = ev.changedTouches[0];
		if(touchs.pageX < downX){ // ←
			if(num < arrImg.length-1){
				num++;
			}
				move(1);
		}else if(touchs.pageX > downX){ // →
			if(iNow > 0){
				iNow--;
			}
			move(-1);
		}
		
			timer = setInterval(toRun,2000);
	}
	timer = setInterval(toRun,2000);
	function createCtrl(){
		for (var i = 0; i < arrImg.length; i++) {
			html += '<span class="ctrl-i"></span>';
		};
		oCtrl.innerHTML = html;
		for (var i = 0; i < aCtrlItem.length; i++) {
			aCtrlItem[i].className = i == 0 ? 'ctrl-i active' : 'ctrl-i';
		};
	}
	function toRun(){
		num++;
		num = num % arrImg.length;
		move(1);
	}
	function move(a){
		if(a > 0){
			aImg[0].src = arrImg[iNow];
			aImg[1].src = arrImg[num];
			oPic.style.left = 0;
			doMove(oPic,{left: -iW});
			iNow = num;
		}else if(a < 0){
			aImg[0].src = arrImg[iNow];
			aImg[1].src = arrImg[num];
			oPic.style.left = -iW + 'px';
			doMove(oPic,{left: 0});
			num = iNow;
		}
		for (var i = 0; i < aCtrlItem.length; i++) {
			removeClass(aCtrlItem[i],'active');
		};
		addClass(aCtrlItem[iNow],'active');
	}
	
	return {
		init : init
	}
})();
slide.init();

var broadcast = (function(){
	var oList = g('msg-list');
	var aMsg = oList.getElementsByTagName('li');
	var iH = aMsg[0].offsetHeight;
	var iNow = iNum = 0;
	var iY = 0;
	var timer = null;
	var arrMsg = [
		'恭喜<a class="u-name" href="#">赵小雅</a>获得了【中国移动】赠送的礼包一个礼包一个',
		'恭喜<a class="u-name" href="#">赵大雅</a>获得了【中国联通】赠送30元话费',
		'恭喜<a class="u-name" href="#">HelloMan</a>获得了【中国移动】赠送的礼包一个',
		'恭喜<a class="u-name" href="#">韦小宝</a>获得了【中国移动】赠送的礼包一个'
		];
	
	function init(){
		autoRun();
	}
	function autoRun(){
		timer = setInterval(function(){
			iNow++;
			iNow = iNow%arrMsg.length;
			fnUp();
		},2000);
	}
	function fnUp(){
		iY = -iNow * iH;
		aMsg[0].innerHTML = arrMsg[iNum];
		aMsg[1].innerHTML = arrMsg[iNow];
		oList.style.top = 0;
		doMove(oList,{top: -42});
		iNum = iNow;
	}
	return {
		init : init
	}
})();
broadcast.init();

/* 导航移动 */
var navMove = (function(){
	var oNavBox = g('nav-list');
	var aNavItem = oNavBox.getElementsByTagName('li');
	var aLink = oNavBox.getElementsByTagName('a');
	var iNow = 0;
	var iW = view().w;
	var downX = 0;
	var downLeft = 0;
	var iX = 0;

	oNavBox.style.width = aNavItem[0].offsetWidth * aNavItem.length + 'px';

	bind(oNavBox,'touchstart',fnStart);
	bind(oNavBox,'touchmove',fnMove);

	for (var i = 0; i < aLink.length; i++) {
		bind(aLink[i],'touchstart',fnTouchStart);
	};
	function fnTouchStart(ev){
		var touchs = ev.changedTouches[0];
		for (var i = 0; i < aLink.length; i++) {
			removeClass(aLink[i],'active');
		};
		addClass(this,'active');
	}

	function fnStart(ev){
		var touchs = ev.changedTouches[0];
		downX = touchs.pageX;
		downLeft = iX;
	}
	function fnMove(ev){
		var touchs = ev.changedTouches[0];
		var disX = touchs.pageX - downX;
		iX = downLeft + disX;
		if(iX > 0){
			iX = 0;
		}else if( iX <= (iW - oNavBox.offsetWidth) ){
			iX = (iW - oNavBox.offsetWidth);
		}
		oNavBox.style.transition = '.3s';
		oNavBox.style.WebkitTransform = 'translateX('+iX+'px)';
	}
})();

