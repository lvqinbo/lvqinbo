	/* 侧边导航 */
	var sideMenu = [
		{
			"title" : "IT互联网",
			"sub_1" : "移动开发",
			"sub_2" : "语言编程",
			"sub_3" : "产品设计",
			"sub_4" : ""
		},
		{
			"title" : "职场技能",
			"sub_1" : "办公技能",
			"sub_2" : "职业考试",
			"sub_3" : "财税投资",
			"sub_4" : ""
		},
		{
			"title" : "语言学习",
			"sub_1" : "实用英语",
			"sub_2" : "托福雅思",
			"sub_3" : "日语",
			"sub_4" : ""
		},
		{
			"title" : "兴趣爱好",
			"sub_1" : "摄影",
			"sub_2" : "健身",
			"sub_3" : "唱歌",
			"sub_4" : "时尚美妆"
		},
		{
			"title" : "更多分类",
			"sub_1" : "育儿",
			"sub_2" : "中小学",
			"sub_3" : "中国大学MOOC",
			"sub_4" : ""
		}
	];
	/* 侧边导航内容 */
	var sideContent = [
		{
			"lesson":["编程语言", "移动开发", "产品设计", "Web开发", "操作系统", "数据库", "产品运营", "硬件开发", "网络技术", "软件测试", "其它"],
			"list" : ["互联网+时代如何创业？","平面设计师必学4大技能","淘宝美工 玩转店铺装修","零基础学会网页设计","思维导图从入门到精通","开发语言核心技术","更多"],
			"adimg": "img/sidebar/ad1.png"
		},
		{
			"lesson" : ["办公技能", "求职应聘", "商务礼仪", "谈判沟通", "职业规划", "管理能力", "职业考试", "营销推广", "人力资源", "财税投资", "其它"],
			"list" : ["手把手教你做优秀外企财务", "跟着大牛学Office办公技能", "市场从业者必学技能系列", "赢在职场，学习人际关系处理", "跟我考初级会计师", "和小蚊子学数据分析", "更多"],
			"adimg": "img/sidebar/ad2.png"
		},
		{
			"lesson":["日常实用英语", "出国考试英语", "国内应试英语", "日语", "韩语", "其它"],
			"list" : ["日语小白的通关秘籍", "英语达人训练营","更多"],
			"adimg": "img/sidebar/ad3.png"
		},
		{
			"lesson" : ["体育健身", "摄影摄像", "声乐器乐", "美食烹饪", "舞蹈瑜伽", "时尚美妆", "健康养生", "DIY手工", "书法绘画", "生活心理", "其它"],
			"list" : ["秋天不容错过的六大美食", "从零开始学摄影", "跟明星学唱歌，称霸KTV", "学中医养生，变魅力女神", "更多"],
			"adimg": "img/sidebar/ad4.png"
		},
		{
			"lesson" : ["家居装饰", "生活百科", "亲子育儿", "中小学", "文学艺术", "工程技术", "基础科学", "哲学历史", "经管法学", "农林医药", "其它"],
			"list" : ["不虚度！2016学习计划", "大学一定要做的7件事", "宅家手册", "天天不重样", "互联网时代的时间管理法则", "更多"],
			"adimg": "img/sidebar/ad5.png"
		}
	];
	/*  h幻灯片 */
	var slider = [
		{"img":1,"color":"#88BCD1"},
		{"img":2,"color":"#000000"},
		{"img":3,"color":"#609800"},
		{"img":4,"color":"#221147"},
		{"img":5,"color":"#FF7300"},
		{"img":6,"color":"#000000"},
		{"img":7,"color":"#E9E6DD"}
	];

	/* 微专业左右切换 */

	var microList = [
		{"title": "Android开发工程师", "tip": "覆盖应用开发核心技能", "icon" : "android"},
		{"title": "税务会计主管", "tip": "精通税务，办税不慌", "icon" : "android"},
		{"title": "C++高级开发工程师", "tip": "侯捷大师亲自研发精品", "icon" : "android"},
		{"title": "IT项目经理", "tip": "凝结15年PMP培训经验", "icon" : "android"},
		{"title": "会计主管", "tip": "2个月掌握财会技能升级主管", "icon" : "android"},
		{"title": "前端开发工程师", "tip": "程序猿进化成攻城狮", "icon" : "gerenxinxidaiban"},
		{"title": "iOS开发工程师", "tip": "三个月学会iOS构建", "icon" : "android"},
		{"title": "独立音乐制作人", "tip": "最易懂的音乐制作课程", "icon" : "music"},
		{"title": "C++系统工程师", "tip": "侯捷大师亲自教学", "icon" : "android"},
		{ "title": "幼儿园教师", "tip": "北师大教育出品", "icon" : "android"},
		{ "title": "高级人力资源专员", "tip": "HR新手必修课！", "icon" : "android"}
	];

	/* 限时秒杀 */
	var limittime = [
		{"img": "qg1","title": "5阶段教你吃透投资理财","author": "英盛网","normal": 9, "discount": 99, "ticket": 13},
		{"img": "qg2","title": "不排毒，营养进不去","author": "vitalife","normal": 1, "discount": 49.99, "ticket": 19},
		{"img": "qg3","title": "零基础十招搞定职场Excel","author": "深圳微课","normal": 9, "discount": 99, "ticket": "已抢光"},
		{"img": "qg4","title": "Word论文排版","author": "靖元","normal": 9, "discount": 29, "ticket": 9}
	];

	/* 免费好课 */
	var freelesson = [
		{"img": "free2","title": "摄影教程｜光影土耳其","author": "美行思远艺术留学"},
		{"img": "free3","title": "小白理财必学9堂课","author": "简七理财"},
		{"img": "free1","title": "女神美腿操","author": "多学多用"},
		{"img": "free4","title": "高效学习法","author": "书路网仕"}
	];

	/* 畅销好课 */
	var bestselling = [
		{"img": "hk1","title": "新媒体运营宝典","author": "新媒体运营宝典","discount": "￥10","normal": ""},
		{"img": "hk2","title": "微信运营从初级到高级全攻略","author": "唐三藏shifu","discount":"￥99","normal": ""},
		{"img": "hk3","title": "向《华尔街日报》学图表","author": "刘万祥ExcelPro","discount": "￥300","normal": ""},
		{"img": "hk4","title": "向咨询顾问学习商业PPT","author": "Jeff老师","discount": "￥98","normal": "￥198"},
		{"img": "hk5","title": "打造最强大脑！卓越思考力训练营","author": "蒋鸣泉","discount": "￥99","normal": ""},
		{"img": "hk6","title": "产品经理入门指南","author": "产品100","discount": "￥199","normal": ""}
	];
	/* 职场技能 */
	var job = [
		{"img": "zc1","title": "新媒体运营宝典","author": "新媒体运营宝典","discount": 10,"normal": ""},
		{"img": "zc2","title": "微信运营从初级到高级全攻略","author": "唐三藏shifu","discount":99,"normal": ""},
		{"img": "zc3","title": "向《华尔街日报》学图表","author": "刘万祥ExcelPro","discount": 300,"normal": ""},
		{"img": "zc4","title": "向咨询顾问学习商业PPT","author": "Jeff老师","discount": 98,"normal": "￥198"},
		{"img": "zc5","title": "打造最强大脑！卓越思考力训练营","author": "蒋鸣泉","discount": 99,"normal": ""},
		{"img": "zc6","title": "产品经理入门指南","author": "产品100","discount": 199,"normal": ""}
	];
	
	/* IT互联网 */
	var internet = [
		{"img": "it1","title": "摄影教程｜光影土耳其","author": "美行思远艺术留学"},
		{"img": "it2","title": "小白理财必学9堂课","author": "简七理财"},
		{"img": "it3","title": "女神美腿操","author": "多学多用"},
		{"img": "it4","title": "高效学习法","author": "书路网仕"},
		{"img": "it5","title": "高效学习法","author": "书路网仕"},
		{"img": "it6","title": "高效学习法","author": "书路网仕"}
	];

	/* 语言学习 */
	var language = [
		{"img": "yy1","title": "新媒体运营宝典","author": "新媒体运营宝典","discount": 10,"normal": ""},
		{"img": "yy2","title": "微信运营从初级到高级全攻略","author": "唐三藏shifu","discount":99,"normal": ""},
		{"img": "yy3","title": "向《华尔街日报》学图表","author": "刘万祥ExcelPro","discount": 300,"normal": ""},
		{"img": "yy4","title": "向咨询顾问学习商业PPT","author": "Jeff老师","discount": 98,"normal": "￥198"},
		{"img": "yy5","title": "打造最强大脑！卓越思考力训练营","author": "蒋鸣泉","discount": 99,"normal": ""},
		{"img": "yy6","title": "产品经理入门指南","author": "产品100","discount": 199,"normal": ""}
	];

	/* 兴趣爱好 */
	var hobby = [
		{"img": "xq1","title": "新媒体运营宝典","author": "新媒体运营宝典","discount": 10,"normal": ""},
		{"img": "xq2","title": "微信运营从初级到高级全攻略","author": "唐三藏shifu","discount":99,"normal": ""},
		{"img": "xq3","title": "向《华尔街日报》学图表","author": "刘万祥ExcelPro","discount": 300,"normal": ""},
		{"img": "xq4","title": "向咨询顾问学习商业PPT","author": "Jeff老师","discount": 98,"normal": "￥198"},
		{"img": "xq5","title": "打造最强大脑！卓越思考力训练营","author": "蒋鸣泉","discount": 99,"normal": ""},
		{"img": "xq6","title": "产品经理入门指南","author": "产品100","discount": 199,"normal": ""}
	];

	/* 名师大咖 */

	var teacher = [
		{"img": "teach1", "name": "Alpha", "title": "Google全球荣誉专家"},
		{"img": "teach2", "name": "肖杨", "title": "国内顶尖项目管理专家"},
		{"img": "teach3", "name": "翁恺", "title": "浙大计算机学院教授"},
		{"img": "teach4", "name": "阮良", "title": "网易高级产品总监"}
	];

	/* 猜你喜欢 */
	var guesslike = [
		{"img": "like1","title": "PHPChina学院HTML5","author": "PHPChina在线讲堂"},
		{"img": "like2","title": "PHP高级技术","author": "LAMP兄弟连"},
		{"img": "like3","title": "项目视频经典之作巴巴运动网","author": "传智播客"},
		{"img": "like4","title": "一天玩转JavaScript基础","author": "云知梦"},
		{"img": "like5","title": "PHP功能模块","author": "LAMP兄弟连"}
	];

	var data = {
		  "free" : [
		    {
		      "img": "free2",
		      "title": "摄影教程｜光影土耳其",
		      "author": "美行思远艺术留学"
		    },
		    {
		      "img": "free3",
		      "title": "小白理财必学9堂课",
		      "author": "简七理财"
		    },
		    {
		      "img": "free1",
		      "title": "女神美腿操",
		      "author": "多学多用"
		    },
		    {
		      "img": "free4",
		      "title": "高效学习法",
		      "author": "书路网仕"
		    }
		  ],
		  "goodlesson": [
		    {
		      "img": "hk1",
		      "title": "新媒体运营宝典",
		      "author": "新媒体运营宝典",
		      "discount": "￥10",
		      "normal": ""
		    },
		    {
		      "img": "hk2",
		      "title": "微信运营从初级到高级全攻略",
		      "author": "唐三藏shifu",
		      "discount": "￥99",
		      "normal": ""
		    },
		    {
		      "img": "hk3",
		      "title": "向《华尔街日报》学图表",
		      "author": "刘万祥ExcelPro",
		      "discount": "￥300",
		      "normal": ""
		    },
		    {
		      "img": "hk4",
		      "title": "向咨询顾问学习商业PPT",
		      "author": "Jeff老师",
		      "discount": "￥98",
		      "normal": "￥198"
		    },
		    {
		      "img": "hk5",
		      "title": "打造最强大脑！卓越思考力训练营",
		      "author": "蒋鸣泉",
		      "discount": "￥99",
		      "normal": ""
		    },
		    {
		      "img": "hk6",
		      "title": "产品经理入门指南",
		      "author": "产品100",
		      "discount": "￥199",
		      "normal": ""
		    }
		  ],
		  "teacher": [
		    {
		      "img": "teach1",
		      "name": "Alpha",
		      "title": "Google全球荣誉专家"
		    },
		    {
		      "img": "teach2",
		      "name": "肖杨",
		      "title": "国内顶尖项目管理专家"
		    },
		    {
		      "img": "teach3",
		      "name": "翁恺",
		      "title": "浙大计算机学院教授"
		    },
		    {
		      "img": "teach4",
		      "name": "阮良",
		      "title": "网易高级产品总监"
		    }
		  ],
		  "internet": [
		    {
		      "img": "it1",
		      "title": "摄影教程｜光影土耳其",
		      "author": "美行思远艺术留学"
		    },
		    {
		      "img": "it2",
		      "title": "小白理财必学9堂课",
		      "author": "简七理财"
		    },
		    {
		      "img": "it3",
		      "title": "女神美腿操",
		      "author": "多学多用"
		    },
		    {
		      "img": "it4",
		      "title": "高效学习法",
		      "author": "书路网仕"
		    },
		    {
		      "img": "it5",
		      "title": "高效学习法",
		      "author": "书路网仕"
		    },
		    {
		      "img": "it6",
		      "title": "高效学习法",
		      "author": "书路网仕"
		    }
		  ],
		   "job": [
		    {
		      "img": "zc1",
		      "title": "新媒体运营宝典",
		      "author": "新媒体运营宝典",
		      "discount": 10,
		      "normal": ""
		    },
		    {
		      "img": "zc2",
		      "title": "微信运营从初级到高级全攻略",
		      "author": "唐三藏shifu",
		      "discount": 99,
		      "normal": ""
		    },
		    {
		      "img": "zc3",
		      "title": "向《华尔街日报》学图表",
		      "author": "刘万祥ExcelPro",
		      "discount": 300,
		      "normal": ""
		    },
		    {
		      "img": "zc4",
		      "title": "向咨询顾问学习商业PPT",
		      "author": "Jeff老师",
		      "discount": 98,
		      "normal": "￥198"
		    },
		    {
		      "img": "zc5",
		      "title": "打造最强大脑！卓越思考力训练营",
		      "author": "蒋鸣泉",
		      "discount": 99,
		      "normal": ""
		    },
		    {
		      "img": "zc6",
		      "title": "产品经理入门指南",
		      "author": "产品100",
		      "discount": 199,
		      "normal": ""
		    }
		  ],
		  "language": [
		    {
		      "img": "yy1",
		      "title": "新媒体运营宝典",
		      "author": "新媒体运营宝典",
		      "discount": 10,
		      "normal": ""
		    },
		    {
		      "img": "yy2",
		      "title": "微信运营从初级到高级全攻略",
		      "author": "唐三藏shifu",
		      "discount": 99,
		      "normal": ""
		    },
		    {
		      "img": "yy3",
		      "title": "向《华尔街日报》学图表",
		      "author": "刘万祥ExcelPro",
		      "discount": 300,
		      "normal": ""
		    },
		    {
		      "img": "yy4",
		      "title": "向咨询顾问学习商业PPT",
		      "author": "Jeff老师",
		      "discount": 98,
		      "normal": "￥198"
		    },
		    {
		      "img": "yy5",
		      "title": "打造最强大脑！卓越思考力训练营",
		      "author": "蒋鸣泉",
		      "discount": 99,
		      "normal": ""
		    },
		    {
		      "img": "yy6",
		      "title": "产品经理入门指南",
		      "author": "产品100",
		      "discount": 199,
		      "normal": ""
		    }
		  ],
		  "hobby": [
		    {
		      "img": "xq1",
		      "title": "新媒体运营宝典",
		      "author": "新媒体运营宝典",
		      "discount": 10,
		      "normal": ""
		    },
		    {
		      "img": "xq2",
		      "title": "微信运营从初级到高级全攻略",
		      "author": "唐三藏shifu",
		      "discount": 99,
		      "normal": ""
		    },
		    {
		      "img": "xq3",
		      "title": "向《华尔街日报》学图表",
		      "author": "刘万祥ExcelPro",
		      "discount": 300,
		      "normal": ""
		    },
		    {
		      "img": "xq4",
		      "title": "向咨询顾问学习商业PPT",
		      "author": "Jeff老师",
		      "discount": 98,
		      "normal": "￥198"
		    },
		    {
		      "img": "xq5",
		      "title": "打造最强大脑！卓越思考力训练营",
		      "author": "蒋鸣泉",
		      "discount": 99,
		      "normal": ""
		    },
		    {
		      "img": "xq6",
		      "title": "产品经理入门指南",
		      "author": "产品100",
		      "discount": 199,
		      "normal": ""
		    }
		  ],
		  "guesslike": [
		    {
		      "img": "like1",
		      "title": "PHPChina学院HTML5",
		      "author": "PHPChina在线讲堂"
		    },
		    {
		      "img": "like2",
		      "title": "PHP高级技术",
		      "author": "LAMP兄弟连"
		    },
		    {
		      "img": "like3",
		      "title": "项目视频经典之作巴巴运动网",
		      "author": "传智播客"
		    },
		    {
		      "img": "like4",
		      "title": "一天玩转JavaScript基础",
		      "author": "云知梦"
		    },
		    {
		      "img": "like5",
		      "title": "PHP功能模块",
		      "author": "LAMP兄弟连"
		    }
		  ]
	}
	var morebox = [
		{
			"title" : "畅销好课",
			"list": ['更多']
		},
		{
			"title" : "名师大咖",
			"list": ['申请加入']
		},
		{
			"title" : "IT互联网",
			"list": ['大数据','产品经理','编程语言','Web开发']
		},
		{
			"title" : "职业技能",
			"list": ['更多','求职应聘','商务礼仪','职业考试','办公技能']
		},
		{
			"title" : "语言学习",
			"list": ['更多','托福雅思','实用英语','日常','日语']
		},
		{
			"title" : "兴趣爱好",
			"list": ['更多','健身','美妆','摄影','乐器']
		},
		{
			"title" : "猜你喜欢",
			"list": ['更多']
		},
		{
			"title" : "猜你喜欢",
			"list": ['更多']
		}
	];

 	/* 右侧边栏内容 */
 	var getMore = [
 		{
 			"img": "r1",
 			"title":['[最新大纲]2016会计基础','酷炫动画！用H5惊艳朋友圈','SEO全解|爆款的标题这样写','变瘦为何如此困难？','名师带你精读新概念英语']
 		},
 		{
 			"img": "r2",
 			"title":['干货|一页纸报告Dashboard','30天学会用数据透视表说话','高大上的PPT设计秘笈','Photoshop CS6从入门到精通']
 		},
 		{
 			"img": "",
 			"title":['咔图摄影教育中心','上海领津科技','百映学苑','软酷网','多学多用','英盛网','Boolan·极客班']
 		},
 		{
 			"img": "r3",
 			"title":['[店铺装修]电商视觉化设计','17门课精通数据挖掘与分析','零基础学会网页设计','互联网+教研操作实例']
 		},
 		{
 			"img": "r4",
 			"title":['五百强公司最看重的特质','即学即用的文案训练营','和小蚊子学数据分析','最常用的Excel 统计分析方法']
 		},
 		{
 			"img": "r5",
 			"title":['西班牙语语音零基础','精看电影学口语','立志！将英语变成母语','即学即用的日常英语']
 		},
 		{
 			"img": "r6",
 			"title":['不虚度！2016学习新计划','LOGO设计怎么玩？','摄影常用的15种构图法则','生活大爆炸教我们的冷知识']
 		}
 	]

 	/* 合作单位 */
 	var majorList = [
 		"天向互动",
 		"京德建筑",
 		"网络学院",
 		"兰果教育",
 		"江山学府",
 		"摩尔吧",
 		"艾维尼国际情商学院",
 		"云度淘宝学院",
 		"数艺智训",
 		"兴远国际咨询",
 		"同享汇",
 		"七彩魔方",
 		"双向摄影学院",
 		"学而思网校",
 		"文灯网校",
 		"达梦教育",
 		"环球数码",
 		"动画游戏学院",
 		"面对面学习网",
 		"天亿霖微学堂",
 		"非借不读",
 		"佳长学堂",
 		"音频帮",
 		"马哥linux",
 		"运维培训",
 		"易源科技",
 		"考拉网",
 		"洛基英语",
 		"RockyEnglish",
 		"招标师在线网",
 		"ITAA实验室",
 		"胡万军红酒课堂",
 		"美人谷软酷网",
 		"华锐在线教育",
 		"英盛网",
 		"北京乐思福教育",
 		"飞盒艺术派",
 		"zhufengpeixunhongenjiaoyu",
 		"铂略财税培训",
 		"Vickey新概念英语",
 		"学派网",
 		"华洁图远",
 		"极客学院",
 		"美加国际英语",
 		"NAMTC在家书院",
 		"宽学网",
 		"工业库课程",
 		"Courselab超级课堂官",
 		"小黑现象",
 		"虎嗅电商",
 		"开课吧",
 		"艾朗科技",
 		"多学多用",
 		"HRBar",
 		"专业人力资源培训",
 		"对啊",
 		"网百映学苑",
 		"悦学堂",
 		"中影华龙在线",
 		"全人时代教育",
 		"茶树网",
 		"学院leads",
 		"后盾教育",
 		"金多多教育",
 		"鸭梨大学",
 		"oeasy工作室",
 		"杉谷视界",
 		"geek99",
 		"文都教育",
 		"牛男网",
 		"SupStat",
 		"邢帅教育",
 		"中阳一中",
 		"北京新东方"
 	];