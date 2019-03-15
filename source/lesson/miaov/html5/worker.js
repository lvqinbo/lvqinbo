
function randomArr(all, num){
	var allArr = [];
	var numArr = [];

	for (var i = 0; i < all; i++) {
		allArr.push(i);
	};
	for (var i = 0; i < num; i++) {
		numArr.push( allArr.splice(Math.floor(Math.random() * allArr.length),1) );
	};
	return numArr;
}

self.onmessage = function(ev){
	var arr = randomArr(ev.data, ev.data/10)
	self.postMessage( arr );
}