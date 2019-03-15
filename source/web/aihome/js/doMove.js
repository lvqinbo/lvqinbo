
function getStyle(obj,attr){
	if(obj.currentStyle){
		return  obj.currentStyle[attr]; 
	}else{
		return getComputedStyle(obj,false)[attr];
	}
	// return obj.currentStyle ?  obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}

function doMove(obj,json,fnEnd){

	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var attr in json){
			var iTarget = json[attr];
			var cur = 0;
			
			if( attr == 'opacity'){
				cur = parseFloat(getStyle(obj,attr))*100;
			}
			else{
				cur = parseInt(getStyle(obj,attr));
			}
			var speed = (iTarget - cur)/ 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if( cur != iTarget){
				bStop = false;
			}
			
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity = (cur+speed)/100;
			}
			obj.style[attr] = cur + speed + 'px';
			
		}
		if( bStop ){
			clearInterval(obj.timer);
			fnEnd && fnEnd();
		}

	},30);

}