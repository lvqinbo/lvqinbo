<?php 
	$t = isset($_GET['t']) ? $_GET['t'] : 'num';
	$callback = isset($_GET['callback']) ? $_GET['callback'] : 'fn1';

	$arr1 = array('111111','2222222','111111','2222222');
	$arr2 = array('aaaaaa','bbbbbbb','cccccc','ddddddd');

	if($t == 'num'){
		$data = json_encode($arr1);
	}else{
		$data = json_encode($arr2);
	}
	echo $callback .'(' . $data . ')';
 ?>