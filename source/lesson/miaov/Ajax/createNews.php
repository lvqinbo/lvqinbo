<?php 
	header('content-type:text/html; charset="utf-8"');
	error_reporting(0);

	$news = array(
		array('title'=>'习近平手书12字贺西藏自治区成立50周年','date'=>'2015-9-8'),
		array('title'=>'广州放开出租车"份子钱" 实行市场调节价','date'=>'2015-9-8'),
		array('title'=>'公安副局长被举报与小三结婚后再通奸 已停职','date'=>'2015-9-8'),
		array('title'=>'媒体:宝马案司机如何拿到驾照 父母身份披露','date'=>'2015-9-8'),
		array('title'=>'3少年扶老人被讹案当事人退回奖金 举家搬迁','date'=>'2015-9-8'),
		array('title'=>'外国关注中国塌方式腐败:从哪找官员顶替','date'=>'2015-9-8'),
		array('title'=>'山东高校新生报到挺大肚请产假 老师被"吓傻"','date'=>'2015-9-8'),
		array('title'=>'于谦郭德纲当众遭女粉丝强吻 被追满场跑(图)','date'=>'2015-9-8'),
		array('title'=>'俄曝美国间谍变装:白人男性瞬间变女黑人(图)','date'=>'2015-9-8'),
		array('title'=>'女子雨中猝死街头 路人撑伞不敢救:不懂急救','date'=>'2015-9-8'),
		array('title'=>'印度政客为强奸案开脱:中国炒面唤醒强奸冲动','date'=>'2015-9-8'),
	);
	echo json_encode($news);
 ?>
