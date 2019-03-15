<?php 
	header('content-type: text/html; charset="utf-8";');
	error_reporting(0);

	// $user = $_GET['user'];
	// $pass = $_GET['pass'];
	$user = $_POST['user'];
	$pass = $_POST['pass'];

	echo "{$user} 欢迎回来!";
	
 ?>