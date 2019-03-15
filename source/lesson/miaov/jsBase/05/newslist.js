var oNewsBox = document.getElementById('news');
var aUl = oNewsBox.getElementsByTagName('ul');
var oDateMenu = document.getElementsByClassName('datamenu')[0];
var aSpan = oDateMenu.getElementsByTagName('span');

for (var i = 0; i < aSpan.length; i++) {
	aSpan[i].index = i;
	aSpan[i].onmouseover = function(){
		for(var j = 0; j < aUl.length; j++){
			aUl[j].style.display = 'none';
			aSpan[j].className = '';
		}
		this.className = 'active';
		aUl[this.index].style.display = 'block';
		fnTab(aUl[this.index]);
	}
};
//初始化调用
fnTab(aUl[0]);

function fnTab(obj){
	var aLi = obj.getElementsByTagName('li');
	var old = 0; //创建一个对象记住当前的li

	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onmouseover = function(){
			//让当前的li的第一个div为显示，第二个div为隐藏
			var oldDiv = aLi[old].getElementsByTagName('div');
			oldDiv[0].style.display = 'block';
			oldDiv[1].style.display = 'none';
			//让鼠标移入的li的第1个div隐藏，第二div显示
			var aDiv = this.getElementsByTagName('div');
			aDiv[0].style.display = 'none';
			aDiv[1].style.display = 'block';
			//然后将当前的Li的下标 赋值给old对象
			old = this.index;
		}
	};
}