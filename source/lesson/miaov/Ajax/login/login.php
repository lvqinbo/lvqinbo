<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>用户登录</title>
	<script src="ajax.js"></script>
	<script>
	window.onload = function(){
		var oBtn = document.getElementById('btn');
		var oUser = document.getElementById('user');
		var oPass = document.getElementById('pass');

		oBtn.onclick = function(){
			var url = 'login_post.php?username='+oUser.value+'&password='+oPass.value+'';
			ajax(url,function(str){
				if( str == '1' ){
					alert(oUser.value + ' 欢迎回来！');
					window.open('admin.html','_self');
				}else{
					alert('用户名或密码错误！');
				}
			} );
		}
	}
	</script>
</head>
<body>
	
		<label for="user">用户名：</label>
		<input type="text" name="username" id="user">
		<label for="pass">密码：</label>
		<input type="password" name="password" id="pass">
		<input type="button" value="登录"  id="btn">
	
</body>
</html>