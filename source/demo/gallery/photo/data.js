var data = [];




var dataStr = '1、美人鱼<br/>\
<br/>\
美人鱼、<br/>\
片长 :	93分钟、<br/>\
导演 :	周星驰、<br/>\
主演 :	邓超/罗志祥/张雨绮、<br/>\
类型 :	爱情/科幻、<br/>\
简介 :	轩的地产计划涉及填海工程，威胁靠...、<br/>\
<br/><br/>\
2、卧虎藏龙<br/>\
<br/>\
卧虎藏龙、<br/>\
片长 :	100分钟、<br/>\
导演 :	袁和平、<br/>\
主演 :	杨紫琼/甄子丹/夏梓桐、<br/>\
类型 :	动作/剧情/武侠、<br/>\
简介 :	青冥宝剑是一代大侠李慕白生前随身...、<br/>\
<br/><br/>\
3、三打白骨精<br/>\
<br/>\
三打白骨精、<br/>\
片长 :	120分钟、<br/>\
导演 :	郑保瑞、<br/>\
主演 :	郭富城/冯绍峰/小沈阳、<br/>\
类型 :	动作/剧情/奇幻、<br/>\
简介 :	师徒四人在西行的路上，白骨精为夺唐...、<br/>\
<br/><br/>\
4、博人传<br/>\
<br/>\
博人传、<br/>\
片长 :	98分钟、<br/>\
导演 :	山下宏幸、<br/>\
主演 :	三瓶由布子/菊池心/竹内顺子、<br/>\
类型 :	动画/冒险、<br/>\
简介 :	这部最新剧场版将围绕漩涡鸣人和...、<br/>\
<br/><br/>\
5、澳门风雨3<br/>\
<br/>\
澳门风雨3、<br/>\
片长 :	130分钟、<br/>\
导演 :	王晶、<br/>\
主演 :	周润发/张家辉/刘德华、<br/>\
类型 :	动作/犯罪/喜剧、<br/>\
简介 :	人称“赢尽天下无敌手”的石一坚（...、<br/>\
<br/><br/>\
6、末日迷踪<br/>\
<br/>\
末日迷踪、<br/>\
片长 :	110分钟、<br/>\
导演 :	维克·阿姆斯特朗、<br/>\
主演 :	尼古拉斯·凯奇/查德·迈克尔·墨瑞/Cassi Thomson、<br/>\
类型 :	动作/惊悚/、<br/>\
简介 :	影片改编自同名小说，讲述由凯奇扮演...、<br/>\
<br/><br/>\
7、叶问3<br/>\
<br/>\
叶问3、<br/>\
片长 :	105分钟、<br/>\
导演 :	叶伟信、<br/>\
主演 :	甄子丹/熊黛林/张晋、<br/>\
类型 :	动作/剧情、<br/>\
简介 :	08年的一部《叶问》，成就了叶伟信和...、<br/>\
<br/><br/>\
8、疯狂动物城<br/>\
<br/>\
疯狂动物城、<br/>\
片长 :	108分钟、<br/>\
导演 :	拜恩·霍华德、<br/>\
主演 :	金妮弗·古德温/杰森·贝特曼/艾伦·图代克、<br/>\
类型 :	动画/动作/冒险、<br/>\
简介 :	在这个没有人类，全由动物构成的大都...、<br/>\
<br/><br/>\
9、地心营救<br/>\
<br/>\
地心营救、<br/>\
片长 :	120分钟、<br/>\
导演 :	Patricia Riggen、<br/>\
主演 :	纳奥米·斯科特/蔻特·德·帕布罗/安东尼奥·班德拉斯、<br/>\
类型 :	剧情、<br/>\
简介 :	影片根据智利著名矿难事件改编而成，讲述...、<br/>\
<br/><br/>\
10、权力之眼<br/>\
<br/>\
权力之眼、<br/>\
片长 :	100分钟、<br/>\
导演 :	亚历克斯·普罗亚斯、<br/>\
主演 :	尼可拉·科斯特-瓦尔道/杰拉德·巴特勒/杰弗里·拉什、<br/>\
类型 :	动作/奇幻、<br/>\
简介 :	故事讲述了天空之神和爱神要报杀父...、<br/>\
<br/><br/>\
11、我不是毛王<br/>\
<br/>\
我不是毛王、<br/>\
片长 :	94分钟、<br/>\
导演 :	赵小溪、<br/>\
主演 :	王大治/葛晓凤/郭金杰、<br/>\
类型 :	喜剧/战争、<br/>\
简介 :	电影《我不是王毛》描述了豫东地 ...、<br/>\
<br/><br/>\
';

var d  = dataStr.split('<br/><br/><br/>');
for (var i = 0; i < d.length; i++) {
	var c = d[i].split('<br/><br/>');
	data.push( {
		img: c[0].replace('、',' ')+'.jpg',
		caption: c[1].split('、<br/>')[0],
		desc: c[1]
	});
};