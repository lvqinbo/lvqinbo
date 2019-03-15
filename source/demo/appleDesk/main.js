var oBox = document.getElementById('box');
var html = '';
var arrImg = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/1.png','img/2.png','img/3.png','img/4.png','img/5.png'];

for (var i = 0; i < arrImg.length; i++) {
	html += '< a href="javascript:;">< img src="'+arrImg[i]+'" /></a>';
};
oBox.innerHTML = html;

document.onmousemove = function(ev){
	var ev = ev || event;

	var aImg = document.getElementsByTagName('img');

	for (var i = 0; i < aImg.length; i++) {
		var x = aImg[i].offsetLeft + aImg[i].offsetWidth/2;
		var y = aImg[i].offsetTop + oBox.offsetTop + aImg[i].offsetHeight/2;

		var a = ev.clientX - x;
		var b = ev.clientY - y;
		var dis = Math.sqrt(a*a + b*b);

		var scale = 1-dis/300;

		if (scale < 0.5) {
			scale = 0.5;
		};

		aImg[i].style.width = scale * 128 + 'px';
	};
}