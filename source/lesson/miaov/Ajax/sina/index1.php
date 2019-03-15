<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="new_ajax.js"></script>
	<script>
	window.onload = function(){
		var oInp = document.getElementById('txt1');
		var oBtn = document.getElementById('btn');
		var oUl = document.getElementById('ul1');
		
		oBtn.onclick = function(){
			var url = 'message.php?act=add&content='+oInp.value;
			ajax(url,function(str){

			});

			var oLi = document.createElement('li');
			var aLi = oUl.getElementsByTagName('li');

			if(aLi.length == 0){
				oUl.appendChild(oLi);
			}else{
				oUl.insertBefore(oLi,aLi[0]);
			}

			oInp.value = '';
		}


	}
	</script>
</head>
<body>
	<textarea name="" id="txt1" cols="30" rows="10"></textarea>
	<input type="button" id="btn" value="发布">
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
</body>
</html>