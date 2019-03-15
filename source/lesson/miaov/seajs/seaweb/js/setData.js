define( function( require, exports, module ){
	
	var json = {};
	var iBtn = true;
	var index, message, student = null;
	function load ( obj,data,hash ){
		var old = window.location.hash.substring(1);

		if(iBtn){
			createFn(obj,data,hash);
			iBtn = false;
		}else{

			if(old == 'index' && !json[index]){
				createFn(obj,data,hash);
				json[index] = 1;
			}
			else if(old == 'message' && !json[message]){
				createFn(obj,data,hash);
				json[message] = 1;
			}
			else if(old == 'student' && !json[student]){
				createFn(obj,data,hash);
				json[student] = 1;
			}
		}
		
	}
	function createFn(obj,data,hash){
		// 左侧列表
		var asilde = document.createElement('div');
		asilde.className = 'asilde';
		// 左侧课程标题
		var oTitle = document.createElement('h3');
		oTitle.innerHTML = '课程目录';
		asilde.appendChild(oTitle);

		// 右侧内容
		var oContent = document.createElement('div');
		oContent.className = 'content';

		for (var i = 0; i < data.length; i++) {
		
			// 左侧内容div
			var asileList = document.createElement('div');
			asileList.className = 'list-item';
			asilde.appendChild(asileList);

			// 每课的标题
			var listTitle = document.createElement('h4');
			listTitle.innerHTML = data[i].title;
			asileList.appendChild(listTitle);
			
			// 内容的列表
			var oUl = document.createElement('ul');
			asileList.appendChild(oUl);

			for(var k in data[i].content){
				var oLi = document.createElement('li');
				oLi.innerHTML = '<a href="#'+data[i].target[k]+'">'+data[i].content[k]+'</a>';
				oUl.appendChild(oLi);
				
				var oConItem = document.createElement('div');
				oConItem.innerHTML = '<iframe src="'+data[i].href[k]+'" width="100%" height="460px" frameborder="0"></iframe>';
				oConItem.className = 'content-item';
				oConItem.id = data[i].target[k];
				oContent.appendChild(oConItem);
			}
		};
		obj.appendChild(asilde);
		obj.appendChild(oContent);

		var oSildeDiv = obj.getElementsByClassName('.asilde')[0];
		var aBtn = obj.getElementsByTagName('a');
		for (var i = 0; i < aBtn.length; i++) {
			aBtn[i].coclick = function(){
				console.log(this.index)
			}
		};
	}
	exports.load = load;
});