var tooltipBoxClass = 'tooltip-box';
var isIE = navigator.userAgent.indexOf('MSIE') > -1;
var getId = function(id){
	return document.getElementById(id);
};
var oBox = getId('box');

function showTooltip(obj, id, html,width, height){
	if(getId(id) == null){
		var tooltipBox;
      tooltipBox = document.createElement('div');
      tooltipBox.className = tooltipBoxClass;
      tooltipBox.id = id;
      tooltipBox.innerHTML = html;

      obj.appendChild(tooltipBox);
      tooltipBox.style.width = width ? width +'px': 'auto';
      tooltipBox.style.height = height ? height +'px': 'auto';

      if(!width && isIE){
      	tooltipBox.style.width = tooltipBox.offsetWidth;
      }

      tooltipBox.style.position = 'absolute';
      tooltipBox.style.display = 'block';
      
      var left = obj.offsetLeft;
      var top = obj.offsetTop + 20;

      if(left + tooltipBox.offsetWidth > document.body.clientWidth){
      	var boxLeft = getId('box').offsetLeft;
      	left = document.body.clientWidth - tooltipBox.offsetWidth - boxLeft;
      	if(left < 0 ){
      		left = 0;
      	}
      }
     	tooltipBox.style.left = left + 'px';
      tooltipBox.style.top = top + 'px';

      bindEvent(obj, 'mouseleave',function(){
	setTimeout(function(){
		getId(id).style.display = 'none';
	},100);
      });
  } else {
      getId(id).style.display = "block";
  }
}

bindEvent(oBox,'mouseover',function(ev){
	var ev = ev || event;
	var target = ev.target || ev.srcElement;

	if(target.className == 'tooltip'){
		var _html,_id,_width;
		switch(target.id){
			case 'tooltip1':
				_id = 't1';
				_html = '中华人民共和国';
				break;
			case 'tooltip2':
				_id = 't2';
				_html = '美国篮球职业联赛';
				break;
			case 'tooltip3':
				_id = 't3';
				_html = '< h2>春晓< /h2>< p>春眠不觉晓，</p>< p>处处闻啼鸟。</p>< p>夜来风雨声，</p><p>花落知多少。</p>';
				_width = 100;
				break;
			case 'tooltip4':
				_id = 't4';
				_html = '< img src="img/1.jpg" width="500" />';
				_width = 500;
				break;
			case 'tooltip5':
				_id = 't5';
				_html = '< div id="mycard">< img src="img/2.jpg" alt=""/>< p>< strong>昵称一定要长</strong></p><p>我的简介我的简介</p></div>';
				_width = 300;
				break;
			case 'tooltip6':
				_id = 't6';
				_html = '< iframe src="http://www.baidu.com/" width="480" height="300"></iframe>';
				_width = 480;
				break;
		}
		showTooltip(target, _id, _html, _width );
	}
})
function bindEvent(obj, evts, fn){
	if(obj.addEventListener){
		obj.addEventListener(evts, fn, false);
	}else{
		obj.attachEvent('on'+event,fn);
	}
}