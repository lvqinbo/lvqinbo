<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>用户登录</title>
	<script src="../../ajax.js"></script>
	<script>
	window.onload = function(){
		var aInp = document.getElementsByTagName('input');
		aInp[3].onclick = function(){
			ajax('userlogin_get.php?user='+aInp[0].value+'&pass='+aInp[1].value+'',function(str){
				if(str == '1'){
					alert(aInp[0].value + ' welcome!');
				}else{
					alert('username or password wrong!');
				}
			});
		}
	}
	</script>
</head>
<body>
	<form>		
		<input type="text" name="user" placeholder="用户名">
		<input type="password" name="pass" placeholder="密码">
		<input type="button" value="注册" id="register" class="btn">
		<input type="button" value="登陆" id="load" class="btn">
	</form>
</body>
</html>