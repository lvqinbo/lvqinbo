var iPage = 1;
// 初始化
updateUserStatus();
function updateUserStatus(){
	var oUser = document.getElementById('user');
	var oReg = document.getElementById('reg');
	var oLogin = document.getElementById('login');
	var oUserInfo = document.getElementById('userinfo');

	var uid = getCookie('uid');
	var username = getCookie('username');
	if(uid){
		// 如果是登陆状态
		oUser.style.display = 'block';
		oUserInfo.innerHTML = username;
		oReg.style.display = 'none';
		oLogin.style.display = 'none';
	}else{
		oUser.style.display = 'none';
		oUserInfo.innerHTML = '';
		oReg.style.display = 'block';
		oLogin.style.display = 'block';
	}
}
//初始化留言列表
showList();

//验证用户名
/*
get
guestbook/index.php
	m : index
	a : verifyUserName
	username : 要验证的用户名
返回
{
	code : 返回信息代码 0 = 没有错误 1= 错误
	message : 返回信息
}*/
var oUsername1 = document.getElementById('username1');
var oOverifyUserNameMsg = document.getElementById('verifyUserNameMsg');
oUsername1.onblur = function(){
	ajax('get','guestbook/index.php','m=index&a=verifyUserName&username='+this.value,function(data){
		var data = JSON.parse(data);
		oOverifyUserNameMsg.innerHTML = data.message;
		
		if(data.code){
			oOverifyUserNameMsg.style.color = 'red';
		}else{
			oOverifyUserNameMsg.style.color = 'green';
		}
	});
}
//注册用户名
/*
get/post
guestbook/index.php
	m : index
	a : reg
	username : 要注册用户名
	password : 注册的密码
返回
{
	code : 返回信息代码 0 = 没有错误 1= 错误
	message : 返回信息
}*/

var oPswd1 = document.getElementById('password1');
var oRegBtn = document.getElementById('btnReg');

oRegBtn.onclick = function(){
	ajax('post','guestbook/index.php','m=index&a=reg&username='+encodeURI(oUsername1.value)+'&password='+oPswd1.value,function(data){

		var data = JSON.parse(data);
		alert(data.message);
			
		updateUserStatus();
	});
	oUsername1.value = '';
		oPswd1.value = '';
}
//登陆
/*
get/post
guestbook/index.php
	m : index
	a : login
	username : 要登陆用户名
	password : 登陆的密码
返回
{
	code : 返回信息代码 0 = 没有错误 1= 错误
	message : 返回信息
}*/
var oUsername2 = document.getElementById('username2');
var oPswd2 = document.getElementById('password2');
var oBtnLogin = document.getElementById('btnLogin');

oBtnLogin.onclick = function(){
	ajax('post','guestbook/index.php','m=index&a=login&username='+encodeURI(oUsername2.value)+'&password='+oPswd2.value,function(data){

		var data = JSON.parse(data);
		alert(data.message);
		if(!data.code){
			oUsername2.value = '';
			oPswd2.value = '';
			updateUserStatus();
		}
	});
}

function getCookie(key){
	var arr1 = document.cookie.split('; ');

	for (var i = 0; i < arr1.length; i++) {
		var arr2 = arr1[i].split('=');
		if(arr2[0]==key){
			return arr2[1];
		}
	};
}
//用户退出
/*
get/post
guestbook/index.php
	m : index
	a : logout
返回
{
	code : 返回信息代码 0 = 没有错误 1= 错误
	message : 返回信息
}*/

var oLogout = document.getElementById('logout');
oLogout.onclick = function(){

	ajax('get','guestbook/index.php','m=index&a=logout',function(data){
		var data = JSON.parse(data);
		alert(data.message);
		if(!data.code){
			updateUserStatus();
		}
	});
	return false;
}
//用户留言
/*
post
guestbook/index.php
	m : index
	a : send
	content : 留言内容
返回
{
	code : 返回信息代码 0 = 没有错误 1= 错误
	message : 返回信息
	{
		cid : 
		content :
		uid :
		support :
		oppose :
	}
}*/

var oContent = document.getElementById('content');
var oSendBtn = document.getElementById('btnPost');
var oListDiv = document.getElementById('list');

oSendBtn.onclick = function(){
	ajax('post','guestbook/index.php','m=index&a=send&content='+encodeURI(oContent.value),function(data){
		var data = JSON.parse(data);
		alert(data.message);

		if(!data.code){

			fnList(data.data,true);
			oContent.value = '';
		}
	});
	return false;
}

var oShowMore = document.getElementById('showMore');
oShowMore.onclick = function(){
	iPage++;
	showList();
}

function showList(){
	/*
	get
	guestbook/index.php
		m : index
		a : getList
		page : 获取留言的页面，默认1
		n : 每页显示条数，默认10条
	返回
	{
		code : 返回信息代码 0 = 没有错误 1= 错误
		message : 返回信息
		
	}*/
	ajax('get','guestbook/index.php','m=index&a=getList&n=2&page='+iPage,function(data){
		var data = JSON.parse(data);
		var arr = data.data;
		if(arr){
			for (var i = 0; i < arr.list.length; i++) {
				fnList(arr.list[i]);
			};
		}else{
			if(iPage == 1){
				oListDiv.innerHTML = '赶快来抢沙发！';
			}
			oShowMore.style.display = 'none';
		}
	});
}

function fnList(data,insert){
	var oDl = document.createElement('dl');
	var oDt = document.createElement('dt'); 
	
	var oStrong = document.createElement('strong');
	oStrong.innerHTML = data.username;
	oDt.appendChild(oStrong);
	oDl.appendChild(oDt);

	var oDd1 = document.createElement('dd'); 
	oDd1.innerHTML = data.content;
	oDl.appendChild(oDd1);

	var oDd2 = document.createElement('dd'); 
	oDd2.className = 't';

	var oA1 = document.createElement('a');
	oA1.href = '';
	oA1.innerHTML = '顶(<span>'+data.support+'</span>)';
	oDd2.appendChild(oA1);

	var oA2 = document.createElement('a');
	oA2.href = '';
	oA2.innerHTML = '踩(<span>'+data.oppose+'</span>)';
	
	oDd2.appendChild(oA2);
	oDl.appendChild(oDd2);
	
	if( insert && oListDiv.children[0] ){
		oListDiv.insertBefore(oDl,oListDiv.children[0]);
	}else{
		oListDiv.appendChild(oDl);
	}
		
}
