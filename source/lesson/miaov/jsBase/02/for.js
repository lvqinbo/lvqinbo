//for创建100个div
var oWrap = document.getElementById('wrap');
var html = '';
var len = 100;
var arrColor = ['#FF00FF','#FF3030','#D15FEE','#CAFF70','#B0E0E6','#5C5C5C','#4169E1','#00CDCD'];

for(var i = 0; i < len; i++){
	html += '< div style="width: 50px; height: 50px; left: '+ (i%10)*55 +'px; top: '+ Math.floor(i/10)*55 +'px;
	 background: '+arrColor[i%arrColor.length]+'; position: absolute;" >'+ i +'< /div >';
}
oWrap.innerHTML = html;

//创建V字形各种div
var oBox2 = document.getElementById('box2');
var oBtn = oBox2.getElementsByTagName('input')[0];
var oWrap = oBox2.getElementsByTagName('div')[0];
var iNum = 0;

for(var i = 0; i < 5; i++){
	var oDiv = document.createElement('div');
	if(i >= 2){
		oDiv.style.cssText = 'width: 50px; height: 50px; background: red; left: '+(5-1-i)*50+'px; top: '+i*50+'px; position: absolute;';
	}else{
		oDiv.style.cssText = 'width: 50px; height: 50px; background: red; left: '+i*50+'px; top: '+i*50+'px; position: absolute;';
	}
	oDiv.innerHTML = i;
	oWrap.appendChild(oDiv);
}

oBtn.onclick = function(){
	oWrap.innerHTML = '';
	iNum ++;
	iNum %= 4;
	
	for(var i = 0; i < 5; i++){
		var m = i*50;
		var k = (5-1-i)*50;
		
		if(iNum === 1){
			m = i >= 2 ? k : m;	
		}
		else if(iNum === 2){
			m = i >= 2 ? m : k;	
		}
		else if(iNum === 3){
			k = i >= 2 ? m : k;	
		}
		else if(iNum === 0){
			k = i >= 2 ? k : m;	
		}
		oWrap.innerHTML += '<div style="width: 50px; height: 50px; position: absolute; 
		left: '+k+'px; top: '+m+'px; background: '+arrColor[i % arrColor.length]+'">'+i+'</div>';
	}		
}

//for循环创建5条新闻
var arrNews = [
	'1. 本版块不代劳商业应用（江湖救急可免）。',
	'2. 本版块是为大家提供一个学习及技术交流的平台，禁止灌水和广告。',
	'3. 本版块作为技术和交流平台，严重鄙视行业内的滥竽充数者：自己有脑，不肯思考；发狠提问，呲牙咧嘴；绝对白丁，只吃现成。',
	'4.拒绝不劳而获，提问请发悬赏贴。',
	'5.拒绝不劳而获，提问请发悬赏贴。'
];
var oNewsBox = document.getElementById('newsbox');
var oNewsList = oNewsBox.getElementsByTagName('ul')[0];
var oCreateLi = oNewsBox.getElementsByTagName('input')[0];
var b = true;

oCreateLi.onclick = function(){
	//如果为真则创建
	if(b){
		for(var i = 0; i < arrNews.length; i++){
			oNewsList.innerHTML += '< li >'+arrNews[i]+'< /li >';
		}
		b = false;
	}
	// 或者
	if(!b) return;
	for(var i = 0; i < arrNews.length; i++){
		oNewsList.innerHTML += '< li >'+arrNews[i]+'< /li >';
	}
	b = false;
}