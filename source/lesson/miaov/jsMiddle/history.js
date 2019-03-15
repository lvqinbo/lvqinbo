
var aBtn = document.getElementsByTagName('input')[0];
var oDiv = document.getElementById('ball');

var json = {};
aBtn.onclick = function(){
	
	oDiv.innerHTML = '';
	var arr = randomNum(33,7);
	var rdmNum = Math.random();
	json[rdmNum] = arr;
	for (var i = 0; i < arr.length; i++) {
		oDiv.innerHTML += '<span>'+arr[i]+'</span>';
	};
	window.location.hash = rdmNum;
}

window.onhashchange = function(){
	var number = window.location.hash.substring(1);
	oDiv.innerHTML = '';
	for (var i = 0; i < json[number].length; i++) {
		oDiv.innerHTML += '<span>'+json[number][i]+'</span>';
	};
}
function randomNum(all, now){
	var arrAll = [];
	var arrNow = [];
	for (var i = 1; i <= all; i++) {
		arrAll.push(i);
	};
	for (var i = 1; i <= now; i++) {
		arrNow.push(arrAll.splice(Math.floor(Math.random() * arrAll.length),1));
	};
	return arrNow;
}