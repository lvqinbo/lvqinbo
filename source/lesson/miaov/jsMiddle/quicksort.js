function quickSort(arr){
	if(arr.length == 1){
		return arr;
	}
	var num = Math.floor(arr.length/2);
	var mid = arr.splice(num,1);
	var smNum = [],bgNum = [];
	
	for(var i = 0; i < arr.lenth; i++){
		if(arr[i] < mid){
			smNum.push(arr[i]);
		}else{
			bgNum.push(arr[i]);
		}
	}
	return quickSort(smNum).concat([mid],quickSort(bgNum));
}
