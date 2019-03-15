
function ajax(url,fnSuc,fnFail){
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = ActiveObject("Microsoft.XMLHTTP");
	}

	xhr.open('GET', url, true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			fnSuc && fnSuc(xhr.responseText);
		}else{
			fnFail && fnFail(xhr.status);
		}
	}
}