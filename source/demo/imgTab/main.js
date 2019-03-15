
window.onload = function(){
	var oBox = document.getElementById('imgBox');
	var oBigImg = document.getElementById('bigImg');
	var oSmallImg = document.getElementById('smallImg');
	var oUlBig = oBigImg.getElementsByTagName('ul')[0];
	var oUlSmanll = oSmallImg.getElementsByTagName('ul')[0];
	var aLiBig = oUlBig.getElementsByTagName('li');
	var aImgBig = oBigImg.getElementsByTagName('img');
	var aLiSmanll = oUlSmanll.getElementsByTagName('li');
	var oMarkL =  getByClass(imgBox,'markLeft')[0];
	var oMarkR =  getByClass(imgBox,'markRight')[0];
	var oPrev =  getByClass(imgBox,'prev')[0];
	var oNext =  getByClass(imgBox,'next')[0];
	var oBtnBox = getByClass(oBox,'btn-box')[0];
	var aBtn = oBtnBox.getElementsByTagName('input');

	var iNow = 0;
	var nowIndex = 1;
	var oneSW = aLiSmanll[0].offsetWidth + 8;
	oUlSmanll.style.width = oneSW * aLiSmanll.length + 'px';
	var arrEffect = ['fade','up','down','left','right'];
	var tab = '';
	var num = 0;
	oPrev.onmouseover = oMarkL.onmouseover = function(){
		doMove(oPrev,{ opacity : 100 });
	}
	oMarkL.onmouseout = function(){
		doMove(oPrev,{ opacity : 0 });
	}
	oNext.onmouseover = oMarkR.onmouseover = function(){
		doMove(oNext,{ opacity : 100 });
	}
	oMarkR.onmouseout = function(){
		doMove(oNext,{ opacity : 0 });
	}
	
	oPrev.onclick = function(){
		if(iNow > 0){
			iNow--;
			fnTab();
		}
	}
	oNext.onclick = function(){
		if(iNow < aLiSmanll.length-1){
			iNow++;
			fnTab();
		}
	}
	aBtn[0].onclick = function(){
		num++;
		num %= arrEffect.length;
		tab = arrEffect[num];
		document.querySelector('.text').innerHTML = tab+'切换';
	}

	for (var i = 0; i < aLiSmanll.length; i++) {
		aLiSmanll[i].index = i;
		
		aLiSmanll[i].onmouseover = function(){
			doMove(aLiSmanll[this.index],{ opacity : 100 });
		}
		aLiSmanll[i].onmouseout = function(){
			for (var i = 0; i < aLiSmanll.length; i++) {
				if(iNow != this.index){
					doMove(this,{ opacity : 40 });
				}
			};		
		}
		aLiSmanll[i].onclick = function(){
			if(iNow == this.index)return;
			iNow = this.index;
			fnTab();
		}
	};
	function fnTab(){
		for (var i = 0; i < aLiSmanll.length; i++) {
			doMove(aLiSmanll[i],{ opacity : 40 });
		};
		doMove(aLiSmanll[iNow],{ opacity : 100 });
		aLiBig[iNow].style.zIndex = nowIndex++;
		
		switch(tab){
			case 'down':
			aLiBig[iNow].style.height = 0;
			doMove(aLiBig[iNow],{ height : 400 });
			break;
			case 'up':
			aLiBig[iNow].style.height = 0;
			aLiBig[iNow].style.top = '400px';
			doMove(aLiBig[iNow],{ height : 400, top : 0 });
			break;
			case 'left':
			aLiBig[iNow].style.width = 0;
			doMove(aLiBig[iNow],{width : 1000});
			break;
			case 'right':
			aLiBig[iNow].style.width = 0;
			aLiBig[iNow].style.right = 0;
			doMove(aLiBig[iNow],{width : 1000, left : 0});
			break;
			default:
			aLiBig[iNow].style.opacity = 0;
			doMove(aLiBig[iNow],{ opacity : 100 });
			break;
		}
		
		if(iNow < 2){
			doMove(oUlSmanll,{ left : 0 });
		}else if(iNow == aLiSmanll.length-2){
			doMove(oUlSmanll,{ left : -(iNow-2) * oneSW });
		}else if(iNow == aLiSmanll.length-1){
			doMove(oUlSmanll,{ left : -(iNow-3) * oneSW });
		}
		else{
			doMove(oUlSmanll,{ left : -(iNow-1) * oneSW });
		}
	}
}