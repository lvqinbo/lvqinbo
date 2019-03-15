var oWrap = document.querySelector('#wrap');
var oBtn = oWrap.getElementsByTagName('a')[0];
var oImg = oWrap.getElementsByTagName('img')[0];
var iNum = 0;

var objImg = new Image();
objImg.onload = function(){
	fnRotate(oImg);
}
objImg.src = oImg.src;

function fnRotate(obj){
	var oC = document.createElement('c1');
	var oGc = oC.getContext('2d');

	oC.width = obj.width;
	oC.height = obj.height;
	obj.parentNode.replaceChild( oC, obj );

	oBtn.onclick = function(){
		if(iNum == 4){
			iNum = 0;
		}
		iNum++;
		change();
	}
	function change(){
		switch( iNum ){
			case 1:
				oC.width = obj.height;
				oC.height = obj.width;
				oGc.rotate( 90 * Math.PI/180 );
				oGc.drawImage( obj, 0, -obj.height );
			break;
				oC.width = obj.width;
				oC.height = obj.height;
				oGc.rotate( 180 * Math.PI/180 );
				oGc.drawImage( obj, -obj.width, -obj.height );
			case 2:
			break;
			case 3:
				oC.width = obj.height;
				oC.height = obj.width;
				oGc.rotate( 270 * Math.PI/180 );
				oGc.drawImage( obj, -obj.width, 0 );
			break;
			case 4:
				oC.width = obj.width;
				oC.height = obj.height;
				oGc.rotate( 0 );
				oGc.drawImage( obj, 0, 0 );
			break;
		}
	}
}