seajs模块化开发
注意：不要修改define 的参数
require : 模块之间依赖的接口
export  : 对外提供接口的对象
sea的默认根目录： sea.js这个文件
seajs.use(); 两个参数： 第一个参数 ： 模块地址 第二个参数 ： 回调函数

// 首选引入seajs文件，最好在设置id
< script src="sea/sea.js" id="seajsnode"></ script>

// 调用模块 第一个参数，要引入的模块，第二个参数回调函数,接收一个参数
seajs.use('./filename1.js',function(ex){
	//调用
	ex.show();
});
seajs.use('./filename2.js',function(ex){
	//调用
	ex.hide();
});
// 同时调用多个模块
seajs.use(['./filename1.js,filename2.js'],function(ex1,ex2){
	ex1.show();
	ex2.hide();
});
// 配置
seajs.config({
	alias : {
		m2 : './module2.js'
	}
});

seajs.use('m2',function(ex){
	alert(ex.a);
});

// 模块的写法
define(function(require,exports,module){
	// 模块之间相互引用，引用其他模块
	require('./module2.js');
	// 引用模块中的方法
	var sum = require('./module2.js').sum;
});

// 模块对外提供接口
define(function(require,exports,module){
	function scale(obj1,obj2){
		// code...
	};
	// 对外提供接口
	exports.scale = scale;
});
define(function(require,exports,module){
	var oDiv1 = document.getElementById('div1');
	var oDiv2 = document.getElementById('div2');
	// 调用接口
	require('./modul2.js').scale(oDiv1,oDiv2);
})

/*   
	 快读构件化工具
	grunt 构建合成  
	1、建一个 package.json 文件
	2、DOS命令进入文件所在的目录，执行npm install
	3、建一个 Gruntfile.js 文件
	4、DOS命令进入文件所在的目录，执行grunt
*/
// Gruntfile.js 文件
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		transport : {

			webqq : {
				files : {
					'.build' : ['main.js','drag.js','scale.js','scope.js']
				}
			}
		},

		concat : {
			webqq : {
				files : {
					'dist/main.js' : ['.build/main.js','.build/drag.js','.build/scale.js','.build/scope.js']
				}
			}
		},
		uglify : {
			webqq : {
				files : {
					'dist/main.min.js' : ['dist/main.js']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['transport','concat','uglify']);
}
