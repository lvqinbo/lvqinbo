window.onload = function(){
	var oUl = document.getElementById('searchBox').getElementsByTagName('ul')[0];
	var oBtn = document.getElementById('btnBaidu');
	var oInput = document.getElementById('searchIn');

	oInput.onkeyup = function(){
		if(this.value != ''){
			var oScript = document.createElement('script');
			oScript.src = 'https://sp0.baidu.com/'+
			+'5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.value+'&cb=fn';
			document.body.appendChild(oScript);
		}else{
			oUl.style.display = 'none';
		}
	}

	oBtn.onclick = function(){
		if(oInput.value == ''){
			return false;
		}else{
			window.open('https://www.baidu.com/s?wd='+oInput.value+'','_blank');

			oUl.style.display = 'none';
		}
	}
}