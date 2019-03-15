function ajax( url, sucFn, failFn){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open( 'GET', url, true );

	xhr.send();
	xhr.onreadychange = function(){
		if( xhr.readyState == 4 && xhr.status == 200 ){
			sucFn && sucFn( xhr.responseText );
		}else{
			failFn && failFn( xhr.status );
		}
	}
}