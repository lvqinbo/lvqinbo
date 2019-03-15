// 10/1 像素显字
var oUl = document.getElementById('text');
var aLi = oUl.getElementsByTagName('li');
var oC = document.getElementById('c1');
var oGc = oC.getContext('2d');

for(var i = 0, len = aLi.length; i < len; i++){
	aLi[i].onclick = function(){
		var str = this.innerHTML;
		var h = 150;
		// 清空画布
		oGc.clearRect( 0, 0, oC.width, oC.height );
		// 设置文字大小
		oGc.font = h + 'px impact';
		// 文字居顶端
		oGc.textBaseline = 'top';
		// 设置颜色
		oGc.fillStyle = 'red';
		// 设置文字宽
		var w = oGc.measureText( str ).width;
		// 绘制文字
		oGc.fillText( str, (oC.width - w)/2, (oC.height - h)/2 );
		// 获取文字的像素并赋值给oImg对象
		var oImg = oGc.getImageData( (oC.width - w)/2, (oC.height - h)/2, w, h );
		// 清空画布
		oGc.clearRect( 0, 0, oC.width, oC.height );
		// 获取随机颜色赋值给arr
		var arr = randomArr( (w * h), (w * h)/10 );
		// 创建像素对象
		var objImg = oGc.createImageData( w, h );
		// 循环随机像素数组
		for (var i = 0; i < arr.length; i++) {
			objImg.data[4 * arr[i]] = oImg.data[ 4* arr[i]];
			objImg.data[4 * arr[i]+1] = oImg.data[ 4* arr[i]+1];
			objImg.data[4 * arr[i]+2] = oImg.data[ 4* arr[i]+2];
			objImg.data[4 * arr[i]+3] = oImg.data[ 4* arr[i]+3];
		};
		oGc.putImageData( objImg, (oC.width - w)/2, (oC.height - h)/2 );
	}
}
function randomArr( all, num ){
	var arrAll = [];
	var arrNow = [];
	for (var i = 1; i <= all; i++) {
		arrAll.push( i );
	};
	for (var i = 1; i <= num; i++) {
		arrNow.push( arrAll.splice( Math.floor( Math.random() * arrAll.length ), 1 ) );
	};
	return arrNow;
}

=================================================
// 100%像素显字 定时器运动
var oUl = document.getElementById('text');
var aLi = oUl.getElementsByTagName('li');
var oC = document.getElementById('c1');
var oGc = oC.getContext('2d');

for(var i = 0, len = aLi.length; i < len; i++){
	aLi[i].onclick = function(){
		var str = this.innerHTML;
		var h = 180;
		var iNum = 0, timer = null;
		
		clearInterval( timer );
		// 清空画布
		oGc.clearRect( 0, 0, oC.width, oC.height );
		// 设置文字大小
		oGc.font = h + 'px impact';
		// 文字居顶端
		oGc.textBaseline = 'top';
		// 设置颜色
		oGc.fillStyle = 'red';
		// 设置文字宽
		var w = oGc.measureText( str ).width;
		// 绘制文字
		oGc.fillText( str, (oC.width - w)/2, (oC.height - h)/2 );
		// 获取文字的像素并赋值给oImg对象
		var oImg = oGc.getImageData( (oC.width - w)/2, (oC.height - h)/2, w, h );
		// 清空画布
		oGc.clearRect( 0, 0, oC.width, oC.height );
		// 获取随机颜色赋值给arr
		var arr = randomArr( (w * h), (w * h)/10 );
		// 创建像素对象
		var objImg = oGc.createImageData( w, h );
		timer = setInterval( function(){
			// 循环随机像素数组
			for (var i = 0; i < arr[iNum].length; i++) {
				objImg.data[4 * arr[iNum][i]] 	= oImg.data[ 4* arr[iNum][i]];
				objImg.data[4 * arr[iNum][i]+1] = oImg.data[ 4* arr[iNum][i]+1];
				objImg.data[4 * arr[iNum][i]+2] = oImg.data[ 4* arr[iNum][i]+2];
				objImg.data[4 * arr[iNum][i]+3] = oImg.data[ 4* arr[iNum][i]+3];
			};
			oGc.putImageData( objImg, (oC.width - w)/2, (oC.height - h)/2 );
			if( iNum == 9 ){
				iNum = 0;
				clearInterval( timer );
			}else{
				iNum++;
			}
		},300 ); 
	}
}
function randomArr( all, num ){
	var arrAll = [];
	var arrNow = [];
	for (var i = 0; i < all; i++) {
		arrAll.push( i );
	};
	for (var j = 0; j < all/num; j++) {
		var newArr = [];
		for (var i = 0; i < num; i++) {
			newArr.push( arrAll.splice( Math.floor( Math.random() * arrAll.length ), 1 ) );
		};
		arrNow.push( newArr );
	};
	return arrNow;
}