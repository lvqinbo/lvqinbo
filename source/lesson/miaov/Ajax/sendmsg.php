<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	*{margin: 0; padding: 0;}
	li{list-style: none;}
	.wrap{width: 500px; height: 200px; border: 1px solid #ccc;  margin: 50px auto 0;}
	.box{margin-bottom: 100px;}
	#input1{width: 488px; height: 188px; padding: 5px; font-size: 20px; border: none; outline: none; resize: none;}
	#btn{float: right; border: none; width: 100px; height: 40px; margin-top: 10px; font-size: 20px; background: #333; text-align: center; line-height: 40px; color: #fff;}
	#ul1{}
	#ul1 li{line-height: 24px; padding: 2px 5px; background: #f0f0f0; color: #333; }
	</style>
	<script src="ajax.js"></script>
	<script>
	window.onload = function(){
		var oInp = document.getElementById('input1');
		var oBtn = document.getElementById('btn');
		var oUl = document.getElementById('ul1');
		var aLi = oUl.getElementsByTagName('li');
		
		oBtn.onclick = function(){
			//解决中文乱码： encodedURI('字符串');
			ajax('get','message.php?act=add&content='+oInp.value,function(data){
			
			});
			var oLi = document.createElement('li');
			oLi.innerHTML = oInp.value;
			oUl.insertBefore(oLi,aLi[0]);
			oInp.value = '';
		}
	}
	</script>
</head>
<body>
<div class="wrap">
	<div class="box">
		<textarea id="input1"></textarea>
		<input type="button" value="发布" id="btn">
	</div>
	<?php 
			$sql = "SELECT ID,content,posttime FROM message";
			mysql_connect('localhost','root','');
			mysql_select_db('sina');
			$res = mysql_query($sql);
	?>

	<ul id="ul1">
		<?php while($row = mysql_fetch_row($res)){ ?>
		<li><?php echo $row[1]; ?></li>
		<?php } ?>
	</ul>
</div>
</body>
</html>