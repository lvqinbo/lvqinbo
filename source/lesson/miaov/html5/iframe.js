postMessage对象
// contentWindow 改变同域下嵌入iframe页面的背景颜色
< iframe id="myFrame" src="2.iframe.html">< /iframe>
var myFrame = document.getElementById('myFrame');
myFrame.contentWindow.document.body.style.background = 'red';

//IE6、7不支持 contentWindow 只支持 contentDocument

// 防止iframes 钓鱼
if(window != window.top){
	window.top.location.href = window.location.href;
}

// 动态创建iframe
var oIframe = document.createElement('iframe');
oIframe.src = 'iframe1.html';
document.body.appendChild(oIframe);

oIframe.onload = function(){
	alert('iframe加载完成');
}

//低版本的IE浏览器下，只能用绑定事件
oIframe.attachEvent('onload',function(){
	alert('iframe加载完成');
});

// 获取动态创建的iframe的高度
function getHeight(){
	setTimeout(function(){
		myFrame.height = myFrame.contentWindow.document.body.offsetHeight;
	},100);
}

window.open(url,'self|_blank');
// window 当前窗口 parent 父级窗口 top 祖窗口

// message事件下保存了发送过来的内容
// ev.data  数据
// ev.origin 发送数据的域名

// 这是www.a.com/1.iframe.html contentWindow.postMessage(str,url);
myFrame.contentWindow.postMessage('hello','http://www.b.com');

// 这是www.b.com/1.iframe.html 接收跨域传过来的数据
window.addEventListener('message',function(ev){
	alert(ev.data);	// hello
},false);

// 允许访问的源
header('Access-Control-Allow-Origin:http://www.a.com');
// IE下跨域Ajax请求
var xhr = new XDomainRequest();
XDomainRequest.onload = function(){

}
xhr.open('get','http://www.b.com',true);
xhr.send();


// 多线程
// worker.html 页面
var w1 = new Worker('test.js');
w1.postMessage('hello');
w1.onmessage = function(ev){
	alert(ev.data);
}

// test.js页面
self.onmessage = function(ev){
	self.postMessage(ev.data + 'Man');
}
Worker运行环境
navgator: appName appVersion userAgent platform
location: 所有只读属性
self: 指向全局的worker
所有ECMA对象：Object Array Date
XMLHttpRequest构造器
setTimeout 和 setInterval方法
// close()方法 立即停止worker运动
// importScript 多线程文件引入js处理文件
// importScript('randomArr.js');

// 快元素内容编辑 contentEditable设置为true
contentEditable="true"

// 语言输入
< input type="text" x-webkit-speech />

// 离线缓存
// 先在html标签设置 <html mainfest="cache.manifest">
// 再创建 cache.manifest文件 设置内容 CACHE MANIFEST 将需要缓存的文件名写入文件内 如：person.png