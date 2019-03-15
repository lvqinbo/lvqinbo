
/* -------------观察者模式（发布订阅模式）-------------------- */

~(function (){
		var obj = $({});

		$.monitor = function (){
			obj.on.apply(obj, arguments);
		}

		$.release = function (){
			obj.trigger.apply(obj, arguments);
		}

		$.uninstall = function (){
			obj.off.apply(obj, arguments);
		}


})();

$.monitor('/test/ls', function (e, a, b, c){
	alert(a+'||'+b+'||'+c);
});

$.monitor('/test/ls', function (e, a, b, c){
	alert('ok');
})

$.release('/test/ls',[11,12,13]);


/* -------------命令模式-------------------- */

var phone = {};

phone.photo = function (pho_num){
	alert(pho_num);
}

phone.msg = function (msg_num){
	alert(msg_num);
}

phone.application = function (command){
	phone[command.type](command.num);
}


// 执行命令 
phone.application({
	type: 'photo',
	num: 20
});

phone.application({
	type: 'msg',
	num: 100
})

/* -------------建设者模式-------------------- */
function Hourse (){
	this.kichen = '';
	this.bath = '';
	this.room = '';
}

function Architect (){
	this.build = function (worker){
		worker.build_kichen();
		worker.build_bath();
		worker.build_room();
	}
}

function Worker (){
	this.build_kichen = function (){
		console.log('建设厨房……')
	}
	this.build_bath = function (){
		console.log('建设bath……')
	}

	this.build_room = function (){
		console.log('建设room……')
	}

	this.complete = function (){
		var hourse = new Hourse();
		hourse.kichen = 'ok';
		hourse.bath = 'ok';
		hourse.room = 'ok';

		return hourse;
	}
}

var worker = new Worker();
var architect = new Architect();
var myHourse = worker.complete();

architect.build(worker);

/* -------------代理模式 proxy-------------------- */

// 买方
function Buyer (arguments){
	this.name = 'helloman';
}
// 代理
function Mediation (){

}
Mediation.prototype.saleHourse = function (){
	new Saler(new Buyer()).saleHourse('100万');
}
// 委托方
function Saler (Buyer){
	this.buyer_name = Buyer.name;
	this.saleHourse = function (money){
		alert('收到来自['+this.buyer_name+']'+ money +'人民币');
	}
}
new Mediation().saleHourse();

/* -------------构造函数模式-------------------- */

function Computer (){
	this.size = '17寸';
	this.cpu = '4核';

	this.settings = function (){
		return '显示器尺寸：'+ this.size + 'cpu为' +this.cpu;
	}
}

var c1 = new Computer();
alert(c1.settings());

/* -------------单例模式-------------------- */

var tel = (function (){

	function voicemain(msg){
		this.liuyan = msg;
	}


	// 语音信箱
	var record;

	var info = {
		sendMsg: function (msg){
			
			if(!record){
				record = new voicemain(msg);
			}
			return record;
		}
	}

	return info;

})();

var people = {

	callTel: function (msg){
		var _record = tel.sendMsg(msg);
		alert(_record);
	}
}

people.callTel('hello');

/* -------------工厂模式-------------------- */

var factory = {};

factory.createTV = function (arguments){
	this.worker = 1000;
}

factory.createPhone = function (){
	alert('生产手机')
}

factory.createPC = function (){
	alert('生产电脑')
}

factory.manager = function(para){
	return new factory[para]();
}

var phone = factory.manager('createPhone');


/* -------------职责链模式-------------------- */
function boss (manager){
	if( manager ){
		this.manager = manager;
	}
}

boss.prototype.write = function(web) {
	this.manager.write(web);
};

function manager(coder){
	if(coder){
		this.coder = coder;
	}
}

manager.prototype.write = function(web) {
	this.coder.write(web);
};

function coder(){

}
coder.prototype.write = function (web){
	console.log('write web use ' + web);
}

var dosomething = new boss(new manager(new coder()));
dosomething.write('nodejs')

/* -------------适配器模式-------------------- */

// 原来的代码
/*
var aa = {
	test: function (){
		alert('test')
	},
	go: function (){
		alert('go');
	}
}
aa.test();
aa.go();
*/

// 重构后的代码
function pp (){
	this.test = function (){
		console.log('new test');
	}
}
pp.prototype.gogo = function(first_argument) {
	console.log('new gogo');
};

// 适配函数
function adapter (){
	var o = new pp;
	var aa = {
		test: function (){
			o.test();
		},
		go: function (){
			o.gogo();
		}
	}
	return aa;
}

var aa = adapter();
aa.test();
aa.go();


/* -------------外观模式-------------------- */
var phone = {}

phone.message = function (){
	console.log('发短信');
}

phone.playGame = function (){
	console.log('玩游戏');
}

phone.controlPanel = function (){
	this.message();
	this.playGame();
}

phone.coperation = function (){
	return this.controlPanel;
}

// 阻止事件冒泡
function stopEvent(ev){
	ev.stopPropagation();
	ev.preventDefault();
}
$('#btn').click(function (ev){
	stopEvent(ev);
})

/* -------------迭代器模式-------------------- */

var arr = ['1','2','4',5];

var interation = (function (){
	var length = arr.length;
	var index = 0;

	return {
		hasNext: function (){
			return index < length;
		},
		next: function (){
			var data = arr[index];
			index = index + 1;

			return data;
		},
		reset: function (){
			index = 0;
		}
	}
})();

while(interation.hasNext()){
	console.log(interation.next());
}	

/* -------------组合模式-------------------- */

	function zhengti (){

	}
	zhengti.prototype.coffe = function() {
		throw new Error('不能直接使用')
	};
	zhengti.prototype.miaobao = function() {
		throw new Error('不能直接使用')
	};

	function guke(){

	}

	guke.prototype.diancan = function (){
		// var t = new zhengti();
		// t.coffe();

		this.coffe();
	}
	guke.prototype.coffe = function (){
		console.log('coffe one')
	}

	var custom = new guke();
	custom.diancan();

/* -------------装饰者模式-------------------- */

var hourse = function (){}

hourse.prototype.kongjian = function (){

}

var decorate = function (hourse){
	this.add = hourse;
}

decorate.prototype.kongjian = function (){
	this.add.kongjian();
	console.log('add a new one');
}

var h = new Hourse();
var newh = new decorate(h);


/* -------------模板模式-------------------- */

// 汽车类
function Car(){}

Car.prototype.start = function (){
	console.log('car is start');
}

Car.prototype.drive = function (){
	console.log('car is driving');
}

Car.prototype.stop = function (){
	console.log('car is stop');
}

// 卡车
function Truck (){}

Truck.prototype = new Car();
Truck.start();
Truck.drive();
Truck.stop();

/* -------------中介者模式-------------------- */
function airplane (name){
	this.name = name;
}

airplane.prototype.send = function (msg, to){
	console.log(this.name + '发送了信息');
	tower.send(msg, to);
}

airplane.prototype.recevice = function (msg){
	console.log(this.name+ '接收到' + msg);
}

var tower = {
	all:{},
	register: function (air){
		this.all[air.name] = air;
	},
	send: function (msg, to){
		this.all[to.name].recevice(msg);
	}
}

var f1 = new airplane('feiji1');
var f2 = new airplane('feiji2');

tower.register(f1);
tower.register(f2);
f1.send('我马上降落，还有500米', f2);