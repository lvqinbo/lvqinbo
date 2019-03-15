// 获取行间样式
function getStyle( obj, name ){
	return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj,false)[name];
}

// 运动函数
function doMove( obj, json, fnEnd ){
	// 清理定时器
	clearInterval( obj.timer );
	obj.timer = setInterval(function(){
		var iBtn = true;

		for( var attr in json ){
			var cur = 0;

			if( attr == 'opacity' ){
				cur = Math.round( parseFloat( getStyle(obj,attr) )*100 );
			}else{
				cur = parseInt( getStyle(obj,attr) );
			}
			
			var speed = ( json[attr] - cur ) / 6;
			speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );

			if( cur != json[attr] ){
				iBtn = false;
			}

			if( attr == 'opacity' ){
				obj.style.filter = 'alpha(opacity: '+( cur + speed )+')';
				obj.style.opacity = ( cur + speed )/ 100;
			}
			obj.style[attr] = cur + speed + 'px';
		}
		if( iBtn ){
			clearInterval( obj.timer );
			fnEnd && fnEnd();
		}
	},30);
}