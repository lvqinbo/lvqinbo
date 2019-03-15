<?php 
header('content_type:text/html;charset="utf-8"');
error_reporting(0);


	switch ($_GET['act']) {
		case 'add':
			$content = $_GET['content'];
			$t = time();

			$sql = "INSERT INTO message(ID,content,posttime) VALUE(0,'{$content}',{$t}) ";
			mysql_connect('localhost','root','');
			mysql_select_db('sina');
			mysql_query($sql);
			break;
	}
 ?>