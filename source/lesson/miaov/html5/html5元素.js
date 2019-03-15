// 选择器querySelector()
通过ID选择
var oDiv = document.querySelector('#div');
通过class
var oDiv = document.querySelector('.div');
通过自定义属性
var oDiv = document.querySelector('[title="hello"]');
选择class元素为box的全部元素
var aDiv = document.querySelectorAll('.box');
var aDiv = document.getElementByClassName('.box');
添加class
oDiv.classList.add('box2');
删除class
oDiv.classList.remove('box2');
添加或删除，如果class存在则删除，如没有则添加
oDiv.classList.toggle('box2');

dataset 自定义属性使用设置自定义属性需要添加 data- 前缀
<div data-abe="自定义属性" data-abc-all="世界" id="div1"></div>
var oDiv1 = document.querySelector('#div1');
console.log( oDiv1.dataset.abc );	// 自定义属性
console.log( oDiv1.dataset.abcAll); // 世界

<!-- defer 延迟加载 -->
< script src="a.js" defer="defer">< /script>
< script src="b.js">< /script>
< script src="c.js">< /s cript>
 
 < !-- async  异步加载 -->
 < script src="a.js" async="async">< /script>
 < script src="b.js" async="async">< /script>
< script src="c.js" async="async">< /script>

// 历史管理器
history.pushState(state,title,url);
// 前进 与 后退时候触发
window.onpopstate = function(ev){
	oSave.innerHTML = ev.state;
}

// hash值
window.location.hash
// 前进 与 后退时候触发
window.onhashchange = function(){
	oSave.innerHTML =json[window.location.hash.substring(1)];
}

// 拖拽 拖拽的元素需设置 draggable="true" 属性
ondragstart	// 拖拽开始事件
ondrag      // 拖动时候到结束之前（连续触发）
ondragend	// 拖拽结束
ondragenter // 拖拽的内容进入元素范围
ondragleave // 拖拽的内容离开元素范围
ondragover 	// 拖拽到元素内触发 enter 和 leave 之间连续触发
ondrop		// 要想触发drop 事件 必须在over 里面阻止默认事件 ev.preventDefault();

// 传入一个名字与要传递的内容
ev.dataTransfer.setData('name',this.index); //将当期拖动元素传进去
// 获取传过来的内容
aUl.removeChild(aLi[ev.dataTransfer.getData('name')]);

// controls 音频控制器
// currentTime 属性：播放时间 可以获取和设置
// duration 音/视频总时长
// volume 音量
// muted  是否静音
// paused 是否暂停
// ended  是否播放完毕
// error  错误 返回错误代码
// currentSrc 以字符串形式返回媒体地址
// play 播放
// pause 暂停
// load 加载
// poster 预览图片
// videoWidth 视频宽
// videoHeight 视频高
// mozRequestFullScreen webkitRequestFullScreen
