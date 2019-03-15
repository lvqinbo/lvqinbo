//全选+隔行变色
var oBox = document.getElementById('box');
var aLi = oBox.getElementsByTagName('li');
var aInput = oBox.getElementsByTagName('input');
var allChc = document.getElementById('all');

var oldColor = '';

for (var i = n = 0; i < aLi.length; i++) {
	aLi[i].index = i;
	
	setColor();

	aLi[i].onmouseover = function(){
		this.style.background = '#B2DFEE';
	}

	aLi[i].onmouseout = function(){
		var oInput = this.getElementsByTagName('input')[0];
		
		if(!oInput.checked){
			if(this.index%2){
				this.style.background = '#FFFAFA';
			}else{
				this.style.background = '#C1FFC1';
			}
		}
	}
	aInput[i].onclick = function(){

		if(this.checked){
			var iBtn = true;
			n++;
			for (var k = 0; k < aInput.length; k++) {
				if(!aInput[k].checked){
					iBtn = false;
				}if(n == aInput.length-1){
					iBtn = true;
				}
			};
			if(iBtn){
				allChc.checked = true;
			}
		}else{
			n--;
			allChc.checked = false;
		}
	}
};

allChc.onclick = function(){
	for (var i = 0; i < aInput.length; i++) {
		
		aInput[i].checked = this.checked;
		n = this.checked ? aInput.length-1 : 0 ;
		
		if(this.checked){

			aLi[i].style.background = '#B2DFEE';
		}else{
			setColor();
		}
	};
}
function setColor(){
	for (var i = 0; i < aLi.length; i++) {
		if(i%2){
			aLi[i].style.background = '#FFFAFA';
		}else{
			aLi[i].style.background = '#C1FFC1';
		}
	};
}