function page(opt){

	if(!opt.id)return;

	var obj = document.getElementById(opt.id);
	var nowNum = opt.nowNum || 1;
	var allNum = opt.allNum || 5;
	var callBack = opt.callBack || function(){};

	var showNum = 5;	//要显示的页
	var cNum = Math.ceil(showNum/2); //显示页的中间页
	var lNum = allNum - showNum;	//最后显示的那几页
	
	
	// 首页
	var firstPage = (function (){
		var oLi = document.createElement('li');
		var oA = document.createElement('a');
		oA.href = '#' + 1;
		oA.innerHTML = '1';
		if(nowNum == 1){oA.className = 'active';}
		oLi.appendChild(oA);
		obj.appendChild(oLi);
	})();
	// 省略点
	if(nowNum > cNum){
		var oLi = document.createElement('li');
		oLi.innerHTML = '...';
		obj.appendChild(oLi);
	}
	// 要显示的分页
	if( allNum <= showNum){
		for (var i = 2; i <= showNum; i++) {
			var oLi = document.createElement('li');
			var oA = document.createElement('a');
			oA.href = '#' + i;
			oA.innerHTML = i;
			if(nowNum == i){
				oA.className = 'active';
			}
			oLi.appendChild(oA);
			obj.appendChild(oLi);
		};
	}
	else{ // 超出显示的分页
		for (var i = 2; i < showNum; i++) {
			var oLi = document.createElement('li');
			var oA = document.createElement('a');
			
			// 当前页小于中间页
			if(nowNum < cNum){
				oA.href = '#' + i;
				oA.innerHTML = i;
				
				if(nowNum == i){
					oA.className = 'active';
				}
			}// 总数页 - 显示页 剩下的页
			else if( (allNum - nowNum) < cNum ){
				oA.href = '#' + (allNum - showNum + i);
				oA.innerHTML = (allNum - showNum + i);
				
				if(nowNum == ( (allNum - showNum) +i) ){
					oA.className = 'active';
				}
			}
			// 当前显示页超出的页
			else{

				oA.href = '#' + ( (nowNum - cNum) +i);
				oA.innerHTML = ( (nowNum - cNum) +i);
				
				if(nowNum == ( (nowNum - cNum) +i) ){
					oA.className = 'active';
				}
			}
			oLi.appendChild(oA);
			obj.appendChild(oLi);
		};

	}
	// 省略点
	if(allNum - nowNum >= 5){
		var oLi = document.createElement('li');
		oLi.innerHTML = '...';
		obj.appendChild(oLi);
	}
	// 尾页
	var lastPage = (function (){
		var oLi = document.createElement('li');
		var oA = document.createElement('a');
		oA.href = '#' + allNum;
		oA.innerHTML = allNum;
		if(nowNum == allNum){oA.className = 'active';}
		oLi.appendChild(oA);
		obj.appendChild(oLi);
	})();
	
	// 上一页
	var fnPrev = (function (){
		var oLi = document.createElement('li');
		var oA = document.createElement('a');
		oA.href = '#'+ (nowNum - 1);
		oA.innerHTML = '上一页';
		oA.className = nowNum < 2 ? 'gray' : 'prev';
		oLi.appendChild(oA);
		obj.appendChild(oLi);
	})();
	// 下一页
	var fnNext = (function (){
		var oLi = document.createElement('li');
		var oA = document.createElement('a');
		if(nowNum < allNum){

			oA.href = '#'+ (nowNum + 1);
		}else{
			oA.href = '#'+ nowNum;
		}
		
		oA.className = (allNum - nowNum) > 0 ? 'next' : 'gray';
		oA.innerHTML = '下一页';
		oLi.appendChild(oA);
		obj.appendChild(oLi);
	})();

	callBack(nowNum,allNum);
	var aA = obj.getElementsByTagName('a');
	for (var i = 0; i < aA.length; i++) {
		aA[i].index = i;
		aA[i].onclick = function(){
			
			var iNum = parseInt(this.getAttribute('href').substring(1));
			obj.innerHTML = '';
			page({
				id : opt.id,
				nowNum : iNum,
				allNum : allNum,
				callBack : callBack
			});
		}
	};
}
