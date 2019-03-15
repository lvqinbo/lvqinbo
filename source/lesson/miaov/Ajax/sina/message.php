<?php 
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
	switch ($_GET['act']) {
		case 'add':
			$content = $_GET['content'];
			$t = time();

			// 创建sql语句
			$sql = "INSERT INTO message (ID, content, posttime) VALUE(0,'{$content}',{$t})";

			// 连接数据库
			mysql_connect('localhost','root','');
			//选择要操作的表
			mysql_select_db('sina');
			// 选择要查询的语句
			mysql_query($sql);

			break;
		
		
	}
 ?>