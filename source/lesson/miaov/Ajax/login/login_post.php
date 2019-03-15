<?php 
	$user = $_GET['username'];
	$pass = $_GET['password'];

	if($user == 'blue' && $pass == '123456'){
		echo "1";
	}else{
		echo "0";
	}
 ?>