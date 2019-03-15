



/* 数据 */
var data = {
	"slide":[
		{
			"tit" : "这里是标题", 
			"img": ['s1','s2','s3','s4'],
			"link": [
				'source/app/mtgou/index.html',
				'source/app/scene1/index.html',
				'source/app/scene1/index.html',
				'source/app/scene1/index.html',
			]
		},
		{
			"tit" : "这里是标题", 
			"img": ['s1','s2','s3','s4'],
			"link": [
				'source/app/mtgou/index.html',
				'source/app/scene1/index.html',
				'source/app/mtgou/index.html',
				'source/app/scene1/index.html',
			]
		}
	],
	"navTit":[
		{
			"title" : "建材五金",
			"sub_1" : "墙地面材料",
			"sub_2" : "基材",
			"sub_3" : "五金",
			"sub_4" : ""
		},
		{
			"title" : "橱柜卫浴",
			"sub_1" : "橱柜",
			"sub_2" : "卫浴",
			"sub_3" : "",
			"sub_4" : ""
		},
		{
			"title" : "窗帘墙饰",
			"sub_1" : "床上用品",
			"sub_2" : "布艺织品",
			"sub_3" : "装饰饰品",
			"sub_4" : ""
		},
		{
			"title" : "饰品摆件",
			"sub_1" : "小摆件",
			"sub_2" : "小饰品",
			"sub_3" : "",
			"sub_4" : ""
		},
		{
			"title" : "照明电器",
			"sub_1" : "灯具",
			"sub_2" : "电器",
			"sub_3" : "",
			"sub_4" : ""
		},
		{
			"title" : "智能家居",
			"sub_1" : "智能开关/模块",
			"sub_2" : "楼宇对讲设备",
			"sub_3" : "",
			"sub_4" : ""
		},
		{
			"title" : "生活艺术",
			"sub_1" : "法国原装酒",
			"sub_2" : "红酒柜/红酒架",
			"sub_3" : "",
			"sub_4" : ""
		}
	]
}
// 底部服务导航
var addBtServer = (function(){

	var data = [
		{"title" : "新手指南","intro":['注册登录','如何定购','如何支付','订单处理','配送方式','服务协议']},
		{"title" : "购物保障","intro":['正品保障','厂家直供','品牌大全','管家式服务']},
		{"title" : "装修服务","intro":['免费量房','免费设计','免费报价','网购套餐','装修学堂']},
		{"title" : "售后服务","intro":['退换货政策','退换货流程','退款说明','先行赔付','维修/保养']},
		{"title" : "招商合作","intro":['工长','设计师','退款说明','生产厂商','城市服务商']},
		{"title" : "关于我们","intro":['商业模式','企业形象','媒体报道','加入我们','联系我们']},
		{"title" : "关注我们","intro":[]},
	];

	var oUl = g('.info_list')[0];
	var aIntro = g('.info_list_item');
	var arr_li = [];
	var aIntro_arr = [];

	for(var s in data){
		aIntro_arr.push(data[s].intro);
		var _html = oUl.innerHTML.replace('{{title}}',data[s].title);
		arr_li.push(_html);
	}
	oUl.innerHTML = arr_li.join('');

	var arr_item = [];
	for (var i = 0; i < aIntro_arr.length; i++) {
		for(var j = 0; j < aIntro_arr[i].length; j++){
			var intro_html = aIntro[i].innerHTML.replace('{{intro}}',aIntro_arr[i][j]);
			arr_item.push(intro_html);
		}
		aIntro[i].innerHTML = arr_item.join('');
		arr_item.splice(aIntro_arr[i],aIntro_arr[i].length);
	};
})();

// 幻灯片
var addSlide = (function(){
	var dataSlide = data.slide;
	var oWrap = g('.slide_img_wrap')[0];
	var oMain = g('#tpl_top_slide').innerHTML;
	var oCtrl = g('#tpl_ctrl').innerHTML;
	var aCtrlItem = g('#tpl_ctrl').getElementsByTagName('a');
	var aLi = g('.slide_img_i');
	var oPrev = g('.prev')[0];
	var oNext = g('.next')[0];
	var iNow = 0;
	var timer = null;

	var arr_main = [];
	var arr_ctrl = [];

	fnInit();
	function fnInit(){
		for (var i = 0; i < dataSlide.length; i++) {
			for (var j = 0; j < dataSlide[i].img.length; j++){
				var main_html = oMain.replace('{{img}}',dataSlide[i].img[j]);
				arr_main.push(main_html);
				
				var ctrl_html = oCtrl.replace('{{idx}}',dataSlide[i].img[j]);
				arr_ctrl.push(ctrl_html);
			}
			
			g('#tpl_ctrl').innerHTML = arr_ctrl.join('');
			g('#tpl_top_slide').innerHTML = arr_main.join('');
			arr_main.splice(dataSlide[i],dataSlide[i].img.length);
			arr_ctrl.splice(dataSlide[i],dataSlide[i].img.length);
		};
		for (var i = 0; i < aCtrlItem.length; i++) {
			aCtrlItem[i].className = i == 0 ? 'ctrl_i active' : 'ctrl_i';
			aLi[i].style.opacity = i == 0 ? '1' : '0';
		};
	}

	bindEvent(oPrev,'click',fnPrev);
	bindEvent(oNext,'click',fnNext);

	bindEvent(oWrap,'mouseover',function(){
		clearInterval(timer);
	})

	bindEvent(oWrap,'mouseout',function(){
		timer = setInterval(fnNext,2000);
	})
	timer = setInterval(fnNext,2000);

	function fnClear(){
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].style.opacity = '0';
			aCtrlItem[i].className = 'ctrl_i';
		};
	}

	function fnNext (){
		fnClear();
		iNow++;
		if(iNow == aLi.length){
			iNow = 0;
		}
		fnChange();
	}

	function fnPrev (){
		fnClear();
		iNow--;
		if(iNow == -1){
			iNow = aLi.length-1;
		}
		fnChange();
	}

	function fnChange(){
		aLi[iNow].style.transition = 'all .6s';
		aLi[iNow].style.opacity = 1;
		aCtrlItem[iNow].className = 'ctrl_i active';
	}
})();

// 侧边导航
var sidebar = (function(){
	var sidemenu = data.navTit;
	function addSidebarData(){
		var tpl_sidebar = g('#sidebar_list').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');

		var sidebar_main = [];
		for(var s in sidemenu){
			var sidebar_html = tpl_sidebar
					.replace('{{title}}',sidemenu[s].title)
					.replace('{{sub_1}}',sidemenu[s].sub_1)
					.replace('{{sub_2}}',sidemenu[s].sub_2)
					.replace('{{sub_3}}',sidemenu[s].sub_3)
					.replace('{{sub_4}}',sidemenu[s].sub_4);
			sidebar_main.push(sidebar_html);	
		}
		g('#sidebar_list').innerHTML = sidebar_main.join('');
	}
	addSidebarData();

	var oConMain = g('#tpl_sidebar_content');
})();

// 侧边导航对应的内容
var addSideCon = (function(){
	var aSideLi = g('.sidebar_item');
	var aConItem = g('.sidebar_content');

	var timer = null;

	for (var i = 0; i < aSideLi.length; i++) {
		aSideLi[i].index = i;
		
		bindEvent(aSideLi[i],'mouseover',function(){
			clearTimeout(timer);
			fnClear();
			aConItem[this.index].style.display = 'block';
		})
		
		bindEvent(aSideLi[i],'mouseout',function(){
			var This = this.index;
			timer = setTimeout(function(){
				aConItem[This].style.display = 'none';
			},300);
		})

		bindEvent(aConItem[i],'mouseover',function(){
			clearTimeout(timer);
		})
		
		bindEvent(aConItem[i],'mouseout',function(){
			var This = this;
			timer = setTimeout(function(){
				This.style.display = 'none';
			},300);
			
		})
	};

	function fnClear(){
		for (var i = 0; i < aConItem.length; i++) {
			aConItem[i].style.display = 'none';
		};
	}
	
})();

// 置业大图幻灯片
var houseSlide = (function(){

	var oWrap = g('#hourse_slide');
	var oTxt = g('.h_name')[0];
	var aImg = g('.h_pictrue');


	var arrImg = ['img/h_s2.jpg','img/h_s3.jpg'];
	var arrText = [
		'悠山郡 [桂林]<span>6300</span>/㎡',
		'悠四郡 [桂林]<span>4800</span>/㎡'
	];
	var num = iNow = 0;
	var timer = null;

	oWrap.style.width = aImg.length * aImg[0].offsetWidth + 'px'
	
	setTimeout(fnMove,3000);
	function fnMove(){
		iNow++;
		iNow %= arrImg.length;
		aImg[0].src = arrImg[num];
		aImg[1].src = arrImg[iNow];
		oWrap.style.left = 0;
		oTxt.innerHTML = arrText[iNow];
		
		doMove(oTxt,{bottom: 0});
		doMove(oWrap,{left: -645},function(){
			timer = setTimeout(function(){
				doMove(oTxt,{bottom: -60},function(){

					fnMove();
				});
			},2000);
		});
		num = iNow;
	}

	bindEvent(oWrap,'mouseover',function(){
		clearTimeout(timer);
	})
	bindEvent(oWrap,'mouseout',function(){
		timer = setTimeout(function(){
			doMove(oTxt,{bottom: -60},function(){

				fnMove();
			});
		},2000);
	})
})();

// 置业中间图片
var addHourseMidPic = (function(){
	
	var oPic = g('.hourse_img_i')[0];
	var arr = [
		{"img": "img/h_s1.jpg","title": "悠山郡 [桂林]<span>6300</span>/㎡"},
		{"img": "img/h_s2.jpg","title": "悠四郡 [桂林]<span>7300</span>/㎡"},
		{"img": "img/h_s3.jpg","title": "悠五郡 [桂林]<span>8300</span>/㎡"},
	]

	for (var i = 0; i < arr.length; i++) {
		oPic.innerHTML += '<div class="hourse_img_details"><a href="javascript:;"><img src="'+arr[i].img+'" alt="">\
								</a><p class="h_name">'+arr[i].title+'</p></div>';
	};

})();

// 置业右边栏数据
var floorList = (function(){

	var floorArr = [
		{"title" : "龙光普罗旺斯", "area" : "象山区", "money": "4588元/㎡"},
		{"title" : "德天广场德韵园", "area" : "叠彩区", "money": "2588元/㎡"},
		{"title" : "江山领秀", "area" : "七星区", "money": "5588元/㎡"},
		{"title" : "八里街1号公馆", "area" : "七星区", "money": "7588元/㎡"},
		{"title" : "山水凤凰城", "area" : "雁山区", "money": "4788元/㎡"},
		{"title" : "和谐康城", "area" : "高新区", "money": "5988元/㎡"},
		{"title" : "慧荣桂林", "area" : "象山区", "money": "5588元/㎡"},
		{"title" : "联发君澜天地", "area" : "象山区", "money": "3988元/㎡"},
		{"title" : "桂林留园", "area" : "象山区", "money": "4988元/㎡"}
	]

	var oParent = g('#rp_list');

	for(var i = 0; i < floorArr.length; i++){
		oParent.innerHTML += '<li class="rp_list_i"><span class="rp_num">'+(i+1)+'</span>\
								<a href="javascript:;">\
									<span class="rp_name">'+floorArr[i].title+'</span>\
									<span class="rp_area">'+floorArr[i].area+'</span>\
									<span class="rp_price">'+floorArr[i].money+'</span>\
								</a>\
							</li>';
	}

})();

// 楼层宽屏幻灯片
var samaSlide = (function(){
	var aBannerPic = g('.banner');
	var arrImg = [
		{"img1" : "img/ads1.jpg","img2": "img/ads11.jpg"},
		{"img1" : "img/ads2.jpg","img2": "img/ads22.jpg"},
		{"img1" : "img/ads4.jpg","img2": "img/ads44.jpg"},
		{"img1" : "img/ads6.jpg","img2": "img/ads66.jpg"}
	];

	for (var i = 0; i < arrImg.length; i++) {
		aBannerPic[i].innerHTML = '<div class="slide banner_slide wrapper">\
			<ul class="banner_slide_box">\
				<li class="banner_slide_i"><a href="javascript:;"><img class="banner_slide_img" src="'+arrImg[i].img1+'" alt=""></a></li>\
				<li class="banner_slide_i"><a href="javascript:;"><img class="banner_slide_img" src="'+arrImg[i].img2+'" alt=""></a></li>\
			</ul>\
			<div class="ctrl">\
				<span class="ctrl_i"></span>\
				<span class="ctrl_i active"></span>\
			</div>';
	};

	var aBanner = g('.banner_slide');
	for (var i = 0; i < aBanner.length; i++) {
		change(aBanner[i]);
	};
})();


/*  common层函数 */

// 未完成
var addMain = (function(){
	var oMain = g('.floor');
	var data = [
		{
			"h2": "建材五金5",
			"topnav": ['墙地面材料8','基材','五金门窗','特价软装包','特价套餐','主材包套餐'],
			"sidenavl":['庭院门','分水器','庭院门','分水器'],
			"sidenavr":['庭院门','分水器','庭院门','分水器'],
			"sidelog":['img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg'],
			"img":['img/1F01.jpg','img/1F02.jpg'],
			"product":[
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"},
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"}
			]
		},
		{
			"h2": "建材五金5",
			"topnav": ['墙地面材料8','基材','五金门窗','特价软装包','特价套餐','主材包套餐'],
			"sidenavl":['庭院门','分水器','庭院门','分水器'],
			"sidenavr":['庭院门','分水器','庭院门','分水器'],
			"sidelog":['img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg'],
			"img":['img/1F01.jpg','img/1F02.jpg'],
			"product":[
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"},
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"}
			]
		},
		{
			"h2": "建材五金5",
			"topnav": ['墙地面材料8','基材','五金门窗','特价软装包','特价套餐','主材包套餐'],
			"sidenavl":['庭院门','分水器','庭院门','分水器'],
			"sidenavr":['庭院门','分水器','庭院门','分水器'],
			"sidelog":['img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg'],
			"img":['img/1F01.jpg','img/1F02.jpg'],
			"product":[
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"},
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"}
			]
		},
		{
			"h2": "建材五金5",
			"topnav": ['墙地面材料8','基材','五金门窗','特价软装包','特价套餐','主材包套餐'],
			"sidenavl":['庭院门','分水器','庭院门','分水器'],
			"sidenavr":['庭院门','分水器','庭院门','分水器'],
			"sidelog":['img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg'],
			"img":['img/1F01.jpg','img/1F02.jpg'],
			"product":[
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"},
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"}
			]
		},
		{
			"h2": "建材五金5",
			"topnav": ['墙地面材料8','基材','五金门窗','特价软装包','特价套餐','主材包套餐'],
			"sidenavl":['庭院门','分水器','庭院门','分水器'],
			"sidenavr":['庭院门','分水器','庭院门','分水器'],
			"sidelog":['img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg'],
			"img":['img/1F01.jpg','img/1F02.jpg'],
			"product":[
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"},
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"}
			]
		},
		{
			"h2": "建材五金5",
			"topnav": ['墙地面材料8','基材','五金门窗','特价软装包','特价套餐','主材包套餐'],
			"sidenavl":['庭院门','分水器','庭院门','分水器'],
			"sidenavr":['庭院门','分水器','庭院门','分水器'],
			"sidelog":['img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg'],
			"img":['img/1F01.jpg','img/1F02.jpg'],
			"product":[
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"},
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"}
			]
		},
		{
			"h2": "建材五金5",
			"topnav": ['墙地面材料8','基材','五金门窗','特价软装包','特价套餐','主材包套餐'],
			"sidenavl":['庭院门','分水器','庭院门','分水器'],
			"sidenavr":['庭院门','分水器','庭院门','分水器'],
			"sidelog":['img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg'],
			"img":['img/1F01.jpg','img/1F02.jpg'],
			"product":[
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"},
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"}
			]
		},
		{
			"h2": "建材五金5",
			"topnav": ['墙地面材料8','基材','五金门窗','特价软装包','特价套餐','主材包套餐'],
			"sidenavl":['庭院门','分水器','庭院门','分水器'],
			"sidenavr":['庭院门','分水器','庭院门','分水器'],
			"sidelog":['img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg','img/xmdq.jpg'],
			"img":['img/1F01.jpg','img/1F02.jpg'],
			"product":[
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"},
				{"n1":"至美","n2":"至美","n3":"至美","num1":"GH8803","num2":"GH8803","num3":"GH8803","pri1":"￥36.00","pri2":"￥36.00","pri3":"￥36.00"}
			]
		},
	];
	// 插入代码
	for(var i = 0; i < data.length; i++){
		oMain[i].innerHTML = '<div class="wrapper">\
			<div class="title_box">\
				<div class="type_title">\
				<span>'+(i+1)+'</span><h2>'+data[i].h2+'</h2>\
				<div class="building_menu"></div>\
				</div>\
			</div>\
			<div class="sider_nav fl">\
				<div class="building_type">\
					<div class="material_name">\
						<a href="#">庭院门</a><a href="#">分水器</a>\
					</div>\
					<div class="material_name">\
						<a href="#">庭院门</a><a href="#">分水器</a>\
					</div>\
					<div class="material_name">\
						<a href="#">庭院门</a><a href="#">分水器</a>\
					</div>\
					<div class="material_name">\
						<a href="#">庭院门</a><a href="#">分水器</a>\
					</div>\
				</div>\
				<div class="brand_logo">\
					<div class="material_name">\
					<a href="#"><img src="img/xmdq.jpg" alt="" /></a>\
					<a href="#"><img src="img/xmdq.jpg" alt="" /></a>\
					</div>\
					<div class="material_name">\
					<a href="#"><img src="img/xmdq.jpg" alt="" /></a>\
					<a href="#"><img src="img/xmdq.jpg" alt="" /></a>\
					</div>\
					<div class="material_name">\
					<a href="#"><img src="img/xmdq.jpg" alt="" /></a>\
					<a href="#"><img src="img/xmdq.jpg" alt="" /></a>\
					</div>\
					<div class="material_name">\
					<a href="#"><img src="img/xmdq.jpg" alt="" /></a>\
					<a href="#"><img src="img/xmdq.jpg" alt="" /></a>\
					</div>\
				</div>\
			</div>\
			<div class="slide building_slide fl"></div>\
			<div class="product">\
				<div class="product_box down">\
					<div class="grid_1">\
						<div class="vertical_box">\
							<img src="img/BH-PA001MIX.jpg" alt="">\
							<div class="fix_fr">\
								<p>至美</p>\
								<p>GH8803</p>\
								<p class="mo">￥36.00</p>\
							</div>\
						</div>\
					</div>\
					<div class="grid_2">\
						<div class="horiz_box">\
							<img src="img/GH8803.jpg" alt="">\
							<p>至美</p>\
							<p>GH8803</p>\
							<p>￥36.00</p>\
						</div>\
						<div class="horiz_box">\
							<img src="img/BH-PA05022.jpg" alt="">\
							<p>至美</p>\
							<p>GH8803</p>\
							<p>￥36.00</p>\
						</div>\
					</div>\
				</div>\
				<div class="product_box up">\
					<div class="grid_1">\
						<div class="vertical_box">\
							<img src="img/BH-PA001MIX.jpg" alt="">\
							<div class="fix_fr">\
								<p>至美</p>\
								<p>GH8803</p>\
								<p class="mo">￥36.00</p>\
							</div>\
						</div>\
					</div>\
					<div class="grid_2">\
						<div class="horiz_box">\
							<img src="img/GH8803.jpg" alt="">\
							<p>至美</p>\
							<p>GH8803</p>\
							<p>￥36.00</p>\
						</div>\
						<div class="horiz_box">\
							<img src="img/BH-PA05022.jpg" alt="">\
							<p>至美</p>\
							<p>GH8803</p>\
							<p>￥36.00</p>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>';
	}

	var topNav_arr = [];
	var sider_arr = [];

	for (var i = 0; i < oMain.length; i++) {
		topNav_arr[i] = oMain[i].getElementsByClassName('building_menu')[0];
		sider_arr[i] = oMain[i].getElementsByClassName('building_slide')[0];
			
	
	};

	for (var i = 0; i < data.length; i++) {
		for(var k = 0; k < data[i].topnav.length; k++){
			topNav_arr[i].innerHTML += '<a class="building_name" href="#">'+data[i].topnav[k]+'</a>';
		}
		for(var k = 0; k < data[i].img.length; k++){
			sider_arr[i].innerHTML = '<ul class="banner_slide_box">\
				<li class="banner_slide_i">\
					<a href="javascript:;"><img class="banner_slide_img" src="'+data[i].img[0]+'"></a>\
				</li>\
				<li class="banner_slide_i">\
					<a href="javascript:;"><img class="banner_slide_img" src="'+data[i].img[1]+'"></a>\
				</li>\
			</ul>\
			<div class="ctrl"><span class="ctrl_i active"></span><span class="ctrl_i"></span></div>';
			
		}
	};
	
	for (var i = 0; i < sider_arr.length; i++) {
		change(sider_arr[i]);
	};







})();

// 切换2张图的幻灯片
function change(obj){
	var aImg = obj.getElementsByClassName('banner_slide_img');
	var aCtrl = obj.getElementsByClassName('ctrl_i');
	
	var iNow = 0;
	var iNum = 0;

	setInterval(tab,2000);

	function tab(){
		iNum++;
		iNum%=aImg.length;
		aImg[iNow].style.opacity = '0';
		aImg[iNum].style.opacity = '1';
		aCtrl[iNow].className = 'ctrl_i';
		aCtrl[iNum].className = 'ctrl_i active';


		iNow = iNum;
	}
}

/* base底层函数 */
function g(sel){
	if(sel.charAt(0) == '#'){
		return document.getElementById(sel.substr(1));
	}else if(sel.charAt(0) == '.'){
		return document.getElementsByClassName(sel.substr(1));

	}else{
		return document.getElementsByTagName(sel);
	}
}
function view(){
	return {
		vW : document.documentElement.clientWidth,
		vH : document.documentElement.clientHeight
	}
}

function bindEvent(obj, evts, fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+evts, fn);
	}else{
		obj.addEventListener(evts, fn, false);
	}
}
