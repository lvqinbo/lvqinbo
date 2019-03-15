// Ajax的几种写法
function ajax(url, fnSuc, fnFail){
	// 创建对象
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 连接
	xhr.open('GET', url, true);
	// 发送
	xhr.send();
	// 接收返回
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			fnSuc && fnSuc(xhr.responseText)
		}else{
			fnFail && fnFail(xhr.status);
		}
	}
}
// try catch 写法
function ajax(url, fnSuc, fnFail){
	try{
		var xhr = new XMLHttpRequest();
	}catch(e){
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open('GET',url, true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			fnSuc && fnSuc(xhr.responseText);
		}else{
			fnFail && fnFail(xhr.status);
		}
	}
}

// 写法三
function ajax(method, url, data, fnSuc, fnFail){
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(method == 'GET' && data){
		url += ? + data;
	}
	xhr.open(method, url, true);

	if(method == 'GET'){
		xhr.send();
	}else{
		xhr.setRequestHeader('content-Type','application/x-www-form-urlencoded');
		xhr.send(data);
	}

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			fnSuc && fnSuc(xhr.responseText);
		}else{
			fnFail && fnFail(xhr.status);
		}
	}
}