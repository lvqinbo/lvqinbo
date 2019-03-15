var oBox = document.getElementById('imgbox');
var oImgBox = oBox.getElementsByTagName('div')[0];
var aImg = oImgBox.getElementsByTagName('img');
var oTxt = oBox.getElementsByTagName('p')[0];

var arrText = ['HTML英语意思是 Hypertext MarkedLanguage，即超文本标记语言,是一种用来制作超文本文档的简单标记语言。
HTML是由WEB的发明者Tim Berners-Lee和同事Daniel W.Connolly于1990年创立的一种标记式语言。它是标准通用化标记语言SGML的应用。',
' HTML只是一个纯文本文件。创建一个HTML文档，只需要两个工具，一个是HTML编辑器，一个WEB浏览器。
HTML编辑器是用于生成和保存THML文档的应用程序。WEB浏览器是用来打开WEB网页文件，提供给我们查看WEB资源的客户端程序', 
'所谓超文本，是因为它可以加入图片、声音、动画、影视等内容，事实上每一个HTML文档都是一种静态的网页文件，
这个文件里面包含了HTML指令代码，这些指令代码并不是一种程序语言，它只是一种排版网页中资料显示位置的标记结构语言，易学易懂，非常简 单。',
'HTML的普遍应用就是带来了超文本的技术----通过单击鼠标从一个主题跳转到另一个主题，
从一个页面跳转到另一个页面与世界各地主机的文件链接。直接获取相关的主题。如下所示' ]; 

var arrImg = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];

var num = 0, iNow = 0; 
oImgBox.style.width = aImg[0].offsetWidth *
aImg.length + 20 + 'px';

function fnTab(){
	num++;
	if(num == arrImg.length){
		num = 0;
	}
	aImg[0].src = arrImg[iNow];
	aImg[1].src = arrImg[num];
	oImgBox.style.left = 0;
	oTxt.innerHTML = arrText[num];

	doMove(oTxt,{bottom : 10});
	doMove(oImgBox,{left : -480},function(){
		setTimeout(function(){
			doMove(oTxt,{bottom : -75},function(){
				fnTab();
			});
		},3000);
	});
	iNow = num;
}
fnTab();

function getByClass(oParent,sClass){
	var result = [];
	var eles = oParent.getElementsByTagName('*');
	for (var i = 0; i < eles.length; i++) {
		if(eles[i].className == sClass){
			result.push(eles[i]);
		}
	};
	return result;
}