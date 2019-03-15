// DOM加载
$(document).ready(function(){});
$(document).readyFn(Jquery){
$(window).load( readyFn );

$(document).ready( readyFn );
	alert('加载完成');
};

// DOMContentLoaded
=================================
// 防止冲突
var $j = jQuery.noconfilict();
$j(window).load(function(){
	alert('加载完成');
});

jQuery.noConflict();
jQuery(document).ready(function($){
	$('div').hide();
})

window.onload = function(){
	var maindiv = $("main");
}
jQuery.noConflict();
(function($){
	$(window).ready(function(){
		// code...
	});
})(jQuery);

jQuery(document).ready(function($){
	// code...
});
=================================
// 阻止默认事件
$('a').on('click',function(ev){
	ev.preventDefault();
})
=====================================
// jq选择器

// class为box的第一个a元素
$('a.box:first').css('color','red');

// id为main的元素下所有input的title属性设置为hello
$('#main :input').attr('title','hello');

// 偶数行的tr背景颜色被红色
$('tr:odd').css('background','red');

// 奇数行
$('li:even').css('background','red');

// 获取仅包含一个元素的所有div
$('div:get(1)').css('background','yellow');

// 选择href为baidu的a标签
$('a[href$=baidu]').css('color','red');

// 选择包含p元素并且class为foo的div
$('div.foo').has('p').css('background','yellow');

// 选择不包含class为bar的所有h1标签
$('h1').not('.bar').css('color','red');

// 设置所a的href为myweb
$('a').attr('href','myweb');

// 设置所有a的title为 hello href为www.hictrip.net
$('a').attr({
	href : 'www.hictrip.net',
	title : 'hello'
});
// 修改div内的最后一个a的rel 和 href
$('#myDiv a:last').attr({
	rel : 'nofollow',
	href : function(idx,href){
		return '/new/' + href;
	}
});

$('#myDiv a').eq(2).attr('href',function(idx,href){
	return '/newPage/' + href;
});

// 选择form表单内input属性为checked的标签
$('form :checked').on('click',function(){})

// 选择选择form表单内input属性为disable的标签
$('form :disable').css('transform','translate(0, 20px)');

// 选择第一个div
$('div:first').html('hehe');

// appendTo把选择的元素插入到后面的元素内
// 选择id为list的元素下的第一个li元素，先剪切，再将其插入到到list内
$('#list li:first').appendTo('#list');

// append 把后面的元素，插入到选择的元素内
$('#list').append('#list li:first');

// 克隆#list里的第一个li 再插入到#list里面
$('#list li:first').clone().appendTo('#list');
// 克隆#list里的最后一个li 再插入到#list里面
$('#list li:last').clone().appendTo('#list');

// 选择#list后，再插入克隆的li
$('#list').append($('#list li:first').clone());

// 
$('div').find('h3').eq(2).html('更改内容后').end().eq(0).html('又更改第1个元素的内容');

// 将newMyElment 克隆一份，并插入到 ul的最后一个
$('ul').last().after(newMyElement.clone())

// 
$( "#x" ).prop( "checked", true );
// Uncheck #x
$( "#x" ).prop( "checked", false );
// Disable #x
$( "#x" ).prop( "disabled", true );
// Enable #x
$( "#x" ).prop( "disabled", false );

=====================================
// jq方法

// 获取css样式
$('h1').css('font-size');
// 设置css样式
$('h1').css({
	font-size : '100px',
	color: 'red'
});

// index() 下标

// attr 属性

// filter 选择(过滤)

// not 不选择 与过滤相反

// has 是否包含

// find 找到

// parent 父级

// parents 所有父级

// parents('div.parent') 指定到某个父级截止

// parentsUntil 指定截止的祖先节点

// closest() 最近的元素 （包括自身）必须要写筛选的参数

// children 子级

// next() 下一个元素

// prev() 上一个元素	

// first() 第一个

// last() 最后一个

// siblings() 选中的元素外的所有兄弟节点 参数是筛选元素

// nextAll() 当前元素后面的所有元素(获取的是数组) 参数是筛选元素

// prevAll() 当前元素前面的所有元素(获取的是数组) 参数是筛选元素

// nextUntil() 获取元素后面的所有兄弟节点，参数是筛选功能 截止位置

// prevUntil() 获取元素前面面的所有兄弟节点，参数是筛选功能 截止位置

// addClass 添加class
$('h1').addclass('box');

// removeClass 删除class
$('h1').removeClass('box');

// toggleClass(有就删除，没有就添加)
$('h1').on('click',function(){
	this.toggleClass();
})
// 获取width (不带单位)
$('h1').width();
// 设置元素的宽
$('h1').width('200px');

// innerWidth (宽度+内边距)

// outerWidth (宽度+内边距+边框
	+外边距)

// position 获取元素的位置
$('h1').position();

// insertBefore 把谁插入谁前面
$('ul').insertBefore('span');

// insertAfter 
$('#p1').insertAfter('ul:first');

// before 谁的前面必须是谁
// insertBefore 和 before区别：在于操作的元素是前面的元素，谁在前面操作谁

// after

// $('div').append('span');

// 将谁放入到谁里面的 并在元素内容前面
// $('span').prependTo('div');

// 将div插入span的内容前面
// $('span').prepend('div');

// remove() 删除元素

// detach() 删除元素(与remove的区别是，虽删除元素，但然后保留事件)

// one() 只执行一次

// offset().left	// 屏幕最左边的位置
// offset().top

// position().left	// 到定位父级左边的距离
// position().top

// 有定位的父级元素
// offsetParent()

// val() 元素的值

// size() 一组元素的长度

// hover() 移入和移出
$('#div1').hover(function(){
	// 移入要做的事
	$(this).fadeTo(1000, 0.4);
},function(){
	// 移出要做的事
	$(this).fadeTo(2000, 0.8);
});

// fadeTo(时间,透明度)

// fadeIn() 淡入 

// fadeOut() 淡出

// slideUp() 向上卷起

// slideDown() 向下卷起

// show() 显示

// hide() 隐藏

// get() js和jquery混用 get(0) 参数是下标，如果不穿就是一组元素

// text() 可以获得所有元素的内容

// clone() 克隆元素 clone(true)时，则可以克隆函数事件的功能

// wrap() 小包装 
$('span').wrap('<div>'); 每个span(元素)外包一个div标签

// wrapAll() 大包装
$('span').wrapAll('<div>'); 把所有span(元素)包装到一个div里

// wrapInner 内容包装
$('span').wrapInner('<div>'); 每个span的(内容)都用一个div包起来

// add() 添加元素，把2个元素并一起，得到一个新的元素，它们拥有同样的样式
var oDiv = $("div1");
var newDiv = oDiv.add('span');
newDiv.css('background','red');

// serialize() 普通格式序列化 如：name=hello&age=30

// serializeArray() 数组格式序列化[{name:'hello',age:30}]

// 事件委托 delegate()
$('ul').delegate('li','click',function(){
	$(this).css('background','red');
})

// 阻止事件委托
$('ul').undelegate();


// 主动触发
$('#div1').on('click',function(){alert('trigger可以主动触发');});
$('#div1').trigger();
=====================================
// ev : event 对象；

// ev.pageX(相对与文档) : ev.clientX (相对与可视区)

// ev.whice : keyCode

// ev.preventDefault : 阻止默认事件

// ev.stopPropagetion: 阻止冒泡

// return false : 阻止默认事件 + 阻止冒泡

=====================================
工具方法
// $.type() 判断类型 同时还指出是何种类型

// $.isArray() 获取数组的下标，如果有返回下标，没有则返回-1
var myArray = [ 1, 2, 3, 5 ];
if ( $.inArray( 4, myArray ) !== -1 ) {
    console.log( "found it!" );
}
// $.isFunction() 判断是否是函数

// isNumeric() 判断是不是数字

// $.trim 去空格
$.trim(str)	

// $.extend 对象复制
$.extend(obj1,obj2);

// $.proxy() 代理对象 改变this指向
var myObject = {
    myFn: function() {
       console.log( this );
    }
};
$( "#foo" ).on( 'click',myObject.myFn ); // HTMLElement #foo
$( "#foo" ).click( $.proxy( myObject, "myFn" ) ); // myObject

// 参数可以在2个地方接收形参
function show(n1, n2){
	console.log(n1);
	console.log(n2);
	console.log(this);
}

$.proxy(show,document,88,66)();
$.proxy(show,document)(88,66);

// parseJSON(data) 将字符串转成 json
var str = '{ "name" : "hello"}';
$.parseJSON(str).name; 

// makeArray 将类似数组的转换成数组
var aDiv = document.getElementsByTagName('div');
$.makeArray(aDiv).push(); 

=====================================
// for循环
var arr = [1,2,3,4];
var result = 0;
for (var i = 0; i < arr.length; i++) {
	result += arr[i];
};

// each遍历
$each(arr,function(idx,val){
	result += val;
});
$each(obj, function(key, val){
	result += val;
});

// for in循环
for(var attr in json){
	result += json[attr];
}

var myItems = [];
var $myList = $('#myList');
for (var i = 0; i < 10; i++) {
	myItems.push('<li>ites '+ i +'</li>');
};
$myList.append(myItems.join(""));
=====================================
// is判断
var main = $('#main');
main.is(':visible');	// 判断是否是显示的
main.is(':hidden');	    // 判断是否是隐藏的

// 如果#main元素显示，就运行动画，缓慢执行
$('#mian:visible').aimite({
	left: '+=200px'
},'slow');

=====================================
// 将一个新元素插入到当前元素的后面
var target = $('#target');
target.parentNode.insertBefore(obj, target.nextSibling);

// 这样更简单
$(target).after(obj);

=====================================
$('p').click(function(){
	console.log( "<p> is clicked" );
})

// on	
$('div').on({
	mouseenter : function(){
		console.log( 'hovered over a div' );
	},
	mouseleave : function(){
		console.log( 'mouse left a div' );
	},
	click : function(){
		console.log( 'clicked a div' );
	}
})

$('#div').on('click',function(ev){
	console.log('div is click');
	console.dir(ev);
})
$('p').on('click',function(){
	foo : 'foo',
	function(ev){
		console.log('数据名字：'+ ev.data.foo);
		console.log('事件元素：'+ ev.target);
		console.log('事件类型：'+ ev.type);
	}
})

$('ul').on('click','li',function(){
	console.log('ul里面的li被点击了');
})
$('ul').append('<li><a href="http://www.baidu.com">Items4</a></li>');

$('ul').on('click','a',function(ev){
	ev.preventDefault();
	console.log($(this).text());
})

$('ul').on('click','a',function(ev){
	var eles = $(this);
	if(eles.is("[href^='http']")){
		eles.attr('target','_blank');
	}
})
$('ul').on('click','a[href^="http"]',function(ev){
	$(this).attr('target','_blank');
});

$('input').on(
	'click',
	{foo: 'foo'},
	function(evtobj){
		console.log(evtobj.data.foo);
	}
);

$('a').on('click',function(ev){
	var eles = $(this);
	if(eles.attr('href').match(/evil/)){
		ev.preventDefault();
		eles.addClass('hello')
	}
})

$('a').on('click mouseover',function(){
	console.log('可以传多个参数');
})
$('input').on({
	"click" : function(){console.log('clicked')},
	"mouseover" : function(){console.log('hovered')}
});

// 命名空间
$('p').on('click.myspace',function(){
	console.log('给点击事件加命名空间');
})
// 解除绑定的命名空间
$('p').off('click.myspace'); 
// 解除所有事件
$('p').off('.myspace');
// 解除P的所有点击事件
$('p').off('click');

var foo = function(){console.log('foo');}
var bar = function(){console.log('bar');}

$('p').on('click', foo ).on('click', bar );
$('p').off('click', foo); // 关闭foo，但是bar还可以运行

function firstClick(){
	console.log('每次都先打印这句话，使用one的话，这就只执行一次');
	$(this).click(function(){
		console.log('这句第二次点击才打印');
	});
}
$('p').click('click',firstClick );

// 使用one，只执行一次
$('input[id]').one('click',firstClick );

// type 获取事件类型
function secondClick(evobj){
	console.log(evobj.type +":"+ this.id);
}

=====================================
// 运动形式 
// slow慢速  

// fast快速 

// slideUp向上运动 

// slideDown向下运动

// fadeIn淡入
$('p').fadeIn( 750 ).addClass('lookme');
这2种写法一样
$('p').fadeIn( 750, function(){
	$(this).addclass('lookme');
})
// fadeOut淡出

// 隐藏元素 hide
$('p').hide('slow'); // 缓慢隐藏

// 显示元素 show
$('div:hidden').show('slow'); // 缓慢显示隐藏的div

// 显示元素 show
$('div:hidden').show('fast'); // 快速显示隐藏的div

// 指定时间显示
$('div:hidden').show( 500 ); // 500毫秒显示

// toggle 切换
// toggle() 快速切换 toggle('slow') 缓慢切换 toggle( 1000 )指定时间切换
$('p').on('click',function(){
	$(this).toggle(); 
})

// slideToggle 向上/下运动切换
// slideToggle(1000) 指定时间
$('p').slideToggle();

// fadeToggle 淡入淡出切换
// fadeToggle( 1200 ) 指定时间
$('p').fadeToggle();

// 延迟 delay
$('p').hide(1000).delay(1500).show(300); // 先隐藏，用1秒针，延迟1.5秒，再显示,用300毫秒

// 运行一个即使没有动画的元素
var someElement = $('#nonexistent');

var cb = function(){
	console.log( 'done ');
}
if(someElement.length){
	someElement.fadeIn( 1000 , cb );
}else{
	cb();
};

// 停止所有动画
$('<button type="button"></button>').text('停止所有动画').on('click',
	function(){
		$('body *').filter(':animated').stop();
	}).appendTo(document.body);

// 禁止所有动画
$('<button></button>').text('禁止所有动画').on('click',function(){
	jQuery.fx.off = true;
}).appendTo(document.body);

// animate 函数
// 第一个参数 {} 运动的属性和值
// 第二个参数 时间 默认是400
// 第三个参数 运动形式
// delay 延迟

$('#div1').animate({width: 200, height: 200})
$('#div1').animate({width: 200, height: 200},1500)
$('#div1').animate({width: 200, height: 200},1500, linear);

$('.box').on('click',function(){
	$(this).animate({width: 200, height: 200},750).animate({width: 400},1000,swing);
})

$('<button></button>').text('clearAnimate').on('click',function(){
	$('.box').stop();  //默认 只是阻止当前动画的运动
	$('.box').stop(true); // 阻止后续运动
	$('.box').stop(true,true); // 当前运动立即停止，让当前元素值到目标点
	$('.box').finish(); // 立即停止所有运动，值到目标点
})

$('div.box').animate({
	left : '+=50',
	opacity: '0.5',
	300,
	function(){
		console.log('done');
	}
})

$('div.box').animate({
	left: ['+=50','swing'],
	opacity:['0.5','linear']
},300);

=====================================
// 队列 queue
// 入队
$('.box')
.queue('step',function(next){
	console.log('step 1');
	next();
})
.queue('step',function(next){
	console.log('step 2');
	next();
})
dequeue('step');

// 清除队列 clearQueue
$('.box')
.queue('step',function(next){
	console.log('这句话不会被打印，因为清除了队列');
	next();
})
.clearQueue('step')
.dequeue('step');

//
$('.box').queue('step',function(next){
	console.log('这句不会被打印!');
	next();
})
.queue('step',[
	function(next){
		console.log('打印这句');
		next();
	}
])
.dequeue('step');

//
$('.box').queue('step',function(next){
	console.log('i am fired');
	next();
})
$('.box').dequeue('step');

// Ajax
$.Ajax({
		url : 'foo.php',
		data : {
			id : 123
		},
		type : 'GET',
		dataType : 'json',
		success : function(json){
			$('<h1>').text(json.title).appendTo('body');
			$('<div=\"content\"></div>').html(json.html).appendTo('body');
		},
		error : function(xhr,status,errorThrow){
			alert('sorry, there was a problem!');
			console.log('Error' + errorThrow);
			console.log('Status' + status);
			console.dir( xhr );
		},
		complete : function(xhr,status){
			alert('The request is complete!');
		}
	});