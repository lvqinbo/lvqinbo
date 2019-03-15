document.ontouchmove = function (ev){
	ev.preventDefault();
}

window.onload = function(){
	var oContainer = g('#container');
	var oMenuBtn = g('#menu-btn');
	var oPage = g('#page-home');
	var aMain = g('.side-nav-fixed');
	var aPage = g('.page');
	
	var iBtn = true;
	var disX = 0;
	var disY = 0;
	var downX = 0;
	var bBtn = false;

	oContainer.style.height = view().h + 'px';

	bindEvent(oMenuBtn,'click',fnShow);
	bindEvent(oPage,'mousedown',fnDown);
	bindEvent(oPage,'mousemove',fnMove);
	bindEvent(oPage,'mouseup',fnUp);

	for (var i = 0; i < aMain.length; i++) {
		fnDrog(aMain[i]);
		phoneMoveUp(aMain[i]);
	}

	function fnShow(){
		if(oPage.offsetLeft <= 0){
			doMove(oPage,{left: (oContainer.offsetWidth * 0.7) });
			
		}else if(oPage.offsetLeft > 0){
			doMove(oPage,{left: 0 });
		}
	}

	function fnDrog(obj){
		obj.onmousedown = function(ev){
			var ev = ev || event;
			disY = ev.clientY;

			document.onmousemove = function(ev){
				var ev = ev || event;
				obj.style.top = ev.clientY - disY + 'px';

			}
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				doMove(obj, { top: 0 });
			}
			return false;
		}	
	}

	function fnDown(ev){
		var ev = ev || event;
		downX = ev.clientX;
		bBtn = true;
		return false;
	}

	function fnMove(ev){
		if(bBtn){
			var ev = ev || event;
			disX = ev.clientX;

			if(disX > downX && (disX - downX) > 100){
				doMove(this, {left: (oContainer.offsetWidth * 0.7) });
			}else if(downX > disX && (downX - disX) > -100 ){
				doMove(this, {left: 0});
			}
		}
	}

	function fnUp(ev){
		var ev = ev || event;
		bBtn = false;
	}

	/*  手机端事件  */
	phoneMoveRight();
	function phoneMoveRight (){
		oPage.ontouchstart = function (ev){
			var touchs = ev.changedTouches[0];
			downX = touchs.pageX;

			oPage.ontouchmove = function (ev){
				var touchs = ev.changedTouches[0];
				disX = touchs.pageX;
			}

			oPage.ontouchend = function (ev){
				var touchs = ev.changedTouches[0];

				if(downX < disX && (disX - downX ) > 50){
					doMove(this,{ left: (oContainer.offsetWidth * 0.6)});
				}else if(downX > disX && (downX - disX) > -50){
					doMove(this,{ left: 0});
				}
			}
		}
	}
	var vH = document.documentElement.clientHeight;
	function phoneMoveUp (obj){
		obj.ontouchstart = function (ev){
			var touchs = ev.changedTouches[0];
			downY = touchs.pageY;
			var downT = obj.offsetTop;
			obj.ontouchmove = function (ev){
				var touchs = ev.changedTouches[0];
				obj.style.top =  touchs.pageY - downY + downT + 'px';
			}

			obj.ontouchend = function (ev){
				var touchs = ev.changedTouches[0];
				if(obj.offsetTop > 0){
					doMove(obj,{ top: 0 });
				}else if((obj.offsetHeight + obj.offsetTop) < vH +  obj.offsetTop ){
					doMove(obj,{ top: obj.offsetHeight - vH - 120 });
				}
				// doMove(obj,{ top: 0 });
			}
		}
	}
}

/* =====================通用函数===================== */
// 获取元素
function g(sel) {
	if (sel.charAt(0) == '#') {
		return document.getElementById(sel.substring(1));
	} else if (sel.charAt(0) == '.') {
		return document.getElementsByClassName(sel.substring(1));
	}
}
// 获取可视区
function view() {
	return {
		w: document.documentElement.clientWidth,
		h: document.documentElement.clientHeight
	}
}

// 绑定事件
function bindEvent(obj, evts, callback) {
	if (obj.attachEvent) {
		obj.attachEvent('on' + evts, callback);
	} else {
		obj.addEventListener(evts, callback, false);
	}
}