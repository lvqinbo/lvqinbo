function ajax(url,fnSuc,fnFail){
	//1.创建ajax对象
	if(window.XMLHttpRequest){
		var oAjax =  new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 2.连接
	oAjax.open('GET',url,true);
	// 3.发送
	oAjax.send();
	 //4.接收返回值
	 oAjax.onreadystatechange = function(){
	 	if(oAjax.readyState == 4){
	 		if( oAjax.status == 200){
	 			fnSuc(oAjax.responseText);
	 		}else{
	 			if(fnFail){
	 				fnFail(oAjax.status);
	 			}
	 		}
	 	}
	 }

}