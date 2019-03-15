
var aBtn = document.getElementsByTagName('input');
var arr = [1,2,3,4];

for (var i = 0; i < aBtn.length; i++) {
	aBtn[i].num = 0;
	aBtn[i].onclick = function(){
		this.value = arr[this.num];
		this.num++;
		if(this.num == arr.length){
			this.num = 0;
		}
	}
};
