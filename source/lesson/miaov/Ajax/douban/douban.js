< script>
function fn1(data){
	var oP = document.getElementById('srt');
	var oResult = document.getElementsByClassName('result')[0];

	oP.innerHTML = data['title'].$t + ':' + data['opensearch:totalResults'].$t;
	var totalNum = data['opensearch:totalResults'].$t;
	
	var aEntry = data.entry;
	var html = '';
	for (var i = 0; i < aEntry.length; i++) {
		
		html += '< div class="pic fr">\
			< img src="'+aEntry[i].link[2]['@href']+'">\
		< /div>\
		< div class="content">\
			< div class="cTitle">\
				< h3>\
					< span>[书籍]</span>\
					< a href="'+aEntry[i].link[1]['@href']+'" rel="'+aEntry[i].link[1]['@rel']+'">'+aEntry[i].title.$t+'</a>\
				< /h3>\
				< div class="rating-info">\
					< span class="allstar45">< /span>\
				    < span class="rating_nums">'+aEntry[i]['gd:rating']['@average']+'< /span>\
				    < span>('+aEntry[i]['gd:rating']['@numRaters']+'评论)< /span>\
					< span class="subject-cast">'+aEntry[i]['db:attribute'][2].$t+' / '+aEntry[i]['db:attribute'][4].$t+' / '+aEntry[i]['db:attribute'][5].$t+'< /span></div></div><p>《JavaScript:The Good Parts(影印版)》一书中，Crockford深度分析了一堆好的意图和盲目的错误，为你提供了所有JavaScript的地道优良部分的细节，包括：·语法·继承·...</p></div>';
	};
	oResult.innerHTML = html;
}
< /script>
< script>
window.onload = function(){
	var oInp = document.getElementById('sTitle');
	var oSearch = document.getElementById('sBtn');
	var oP = document.getElementById('srt');
	
	oSearch.onclick = function(){
		if(oInp.value != ''){
			var oScript = document.createElement('script');
			oScript.src = 'http://api.douban.com/book/subjects?q='+oInp.value+'&alt=xd&callback=fn1&start-index=1&max-results=10';
			document.body.appendChild(oScript);
		}
	}	
}
< /script>