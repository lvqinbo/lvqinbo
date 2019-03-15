var oNav = document.getElementById('nav');
var oUl = oNav.getElementsByTagName('ul')[0];
var aLi = oUl.getElementsByTagName('li');
var oChildNav = document.getElementById('childlist');
var aDiv = oChildNav.getElementsByTagName('div');
var timer = null;
var iNow = 0;

for (var i = 0; i < aLi.length; i++) {
	aLi[i].index = i;
	
	aLi[i].onmouseover = function(){
		for (var j = 0; j < aDiv.length; j++) {
			aDiv[j].style.display = 'none';
		};
		clearTimeout(timer);
		aDiv[this.index].style.display = 'block';
		aDiv[this.index].style.left = aLi[this.index].offsetLeft +'px';
	}
	aLi[i].onmouseout = function(){
		iNow = this.index;
		timer = setTimeout(function(){
			aDiv[iNow].style.display = 'none';
		},500);
	}

	aDiv[i].onmouseover = function(){
		clearTimeout(timer);
	}
	aDiv[i].onmouseout = function(){
		timer = setTimeout(function(){
			aDiv[iNow].style.display = 'none';
		},500);
	}
}