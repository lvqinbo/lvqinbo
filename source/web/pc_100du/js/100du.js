$(function(){

// 搜索框选项卡切换
		(function(){var aLi = document.getElementById('tab').getElementsByTagName('li');
			var oText = document.getElementById('form_text').getElementsByTagName('input')[0];
			
			var iNow = 0;
			var arrText = [
				'例如：荷棠鱼坊烤鱼 或 樱花日本料理',
				'例如：中国好声音 或 樱花日本料理',
				'例如：爸爸去哪儿 或 樱花日本料理',
				'例如：哪里买东西最便宜 或 樱花日本料理',
				'例如：最新电影 或 樱花日本料理'
			];
			oText.value = arrText[iNow];
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].index = i;
				aLi[i].onclick = function(){
					for (var i = 0; i < aLi.length; i++) {
						aLi[i].className = 'gradient';
					};
					iNow = this.index;
					this.className = 'active';
					oText.value = arrText[iNow];
				}
			};
			oText.onfocus = function(){
				if(oText.value  == arrText[iNow]){
					oText.value = '';
				}
			}
			oText.onblur = function(){
				if(oText.value == ''){
					oText.value = arrText[iNow];
				}
			}
		})();
		
		// 搜索框文字滚动
		(function(){
			var oUpdate = document.getElementById('update');
			var oUl = oUpdate.getElementsByTagName('ul')[0];
			var aLi = oUl.getElementsByTagName('li');
			var oPrev = oUpdate.getElementsByClassName('triangle_up')[0];
			var oNext = oUpdate.getElementsByClassName('triangle_down_red')[0];
			
			var timer = null;
			var iNow = 0;
			var iHeight = 0;
			var str2 = '';
			var arr = [{name : '百度', time : '5分钟',title : '李克强总理赴天津重大火灾爆炸事故现场', url : 'http://news.baidu.com/'},
	{name : '腾讯', time : '5分钟',title : '李克强总理赴天津重大火灾爆炸事故现场', url : 'http://news.baidu.com/'},
	{name : '网易', time : '6分钟',title : '李克强总理赴天津重大火灾爆炸事故现场', url : 'http://news.baidu.com/'},
	{name : '搜狐', time : '7分钟',title : '李克强总理赴天津重大火灾爆炸事故现场', url : 'http://news.baidu.com/'},
	{name : '人民网', time : '8分钟',title : '李克强总理赴天津重大火灾爆炸事故现场', url : 'http://news.baidu.com/'}]
		for (var i = 0; i < arr.length; i++) {
			str2 += '<li><a href="'+arr[i].url+'"><strong>'+arr[i].name+'</strong><span>'+arr[i].time+'前</span> 写了一篇新文章：'+arr[i].title+'</a></li>';
		};
		oUl.innerHTML = str2;
		iHeight = aLi[0].offsetHeight;
		
		oNext.onclick = function(){
			move(1);
		}
		oPrev.onclick = function(){
			move(-1);
		}
		
		timer = setInterval(function(){
			move(1);
		},3000);
		oUpdate.onmouseover = function(){
			clearInterval(timer);
		}
		oUpdate.onmouseout = function(){
			timer = setInterval(function(){
			move(1);
			},3000);
		}
		function move(num){
			iNow += num;
			if(Math.abs(iNow )> arr.length-1){
				iNow = 0;
			}
			if( iNow > 0){
				iNow = -(arr.length-1);
			}
			doMove(oUl,{top : iNow * iHeight});
		}
		})();
		
		//选项卡切换
		(function(){
			fnTab($('.tabNav1'),$('.tabCon1'));
			fnTab($('.tabNav2'),$('.tabCon2'));

			function fnTab(Nav,Con){
				var aEle = Nav.children();
				Con.hide().eq(0).show();
				aEle.each(function( index ){
					$(this).click(function(){
						aEle.removeClass('active').addClass('gradient');
						$(this).removeClass('gradient').addClass('active');
						aEle.find('a').attr('class','triangle_down_gray');
						$(this).find('a').attr('class','triangle_down_red');
						Con.hide().eq(index).show();
					});
				});
			}})();

		//选项卡切换2
		(function(){fnTab2('tab2','tabCon3');
			fnTab2('tab3','tabCon4');
			function fnTab2(id,sClass){
				var oDiv  = document.getElementById(id);
				var aLi = oDiv.getElementsByTagName('li');
				var aA = oDiv.getElementsByTagName('a');
				var oUl = document.getElementsByClassName(sClass);
				oUl[1].style.display = oUl[2].style.display= 'none';
				for (var i = 0; i < aLi.length; i++) {
					aLi[i].index = i;
					aLi[i].onmouseover = function(){
						for (var i = 0; i < aLi.length; i++) {
							aLi[i].className =  'gradient';
							aA[i].className = 'triangle_down_gray';
							oUl[i].style.display = 'none';
						};
						this.className = 'active';
						aA[this.index].className = 'triangle_down_red';
						oUl[this.index].style.display = 'block';
					}
					
				};
			}
		})();

		// 焦点图
		(function(){
			var oDiv = document.getElementById('photo');
			var oUl = oDiv.getElementsByTagName('ul')[0];
			var aUlLi = oUl.getElementsByTagName('li');
			var oOl = oDiv.getElementsByTagName('ol')[0];
			var aOlLi = oOl.getElementsByTagName('li');
			var oP  = oDiv.getElementsByTagName('p')[0];

			var iNow = 0;
			var timer = null;
			var nowIndex = 1;
			var arrData = ['爸爸去哪儿' ,'阳光下的拍照效果','金发美女的诱惑'];
			aUlLi[iNow].style.zIndex = nowIndex;

			
			function fnTab(){
				for (var i = 0; i < aOlLi.length; i++) {
					aOlLi[i].index = i;
					aOlLi[i].onclick = function(){
						iNow = this.index;
						faFade();
					}
				};
			}
			fnTab();
			function faFade(){
				for (var i = 0; i < aOlLi.length; i++) {
					aOlLi[i].className = '';
					aUlLi[i].style.opacity = '0';
				};
				aOlLi[iNow].className = 'active';
				doMove(aUlLi[iNow],{opacity : 100});
				aUlLi[iNow].style.zIndex = nowIndex++;
				oP.innerHTML = arrData[iNow];
			}
			function autoPlay(){
				timer = setInterval(function(){
					iNow++;
					iNow%= arrData.length;
					faFade();
				},2000);
			}
			autoPlay();
			oDiv.onmouseover = function(){
				clearInterval(timer);
			}
			oDiv.onmouseout = function(){
				autoPlay();
			}
		})();

		//日历
		(function(){
			var oDiv = document.getElementById('calendar_box');
			var oWeek = oDiv.getElementsByClassName('week')[0];	
			var aSpan = oWeek.getElementsByTagName('span');
			var oDay = oDiv.getElementsByClassName('day_list')[0];	
			var aLi = oDay.getElementsByTagName('li');
			var aImg = oDay.getElementsByClassName('today_img');
			var oShow = oDiv.getElementsByClassName('show_info')[0];
			var oImg = oShow.getElementsByTagName('img')[0];
			var oInfo = oShow.getElementsByTagName('p')[0];
			var aWeek = oShow.getElementsByTagName('span')[0];
			var num  = 0;

			for (var i = 0; i < aLi.length; i++) {
				aLi[i].index = i;
				aLi[i].onmouseover = function(){
					num = this.index%aSpan.length;
					aWeek.innerHTML = aSpan[num].innerHTML;
				}
			};
			
			for (var i = 0; i < aImg.length; i++) {
				aImg[i].index = i;
				aImg[i].onmouseover = function(){
					oShow.style.display = 'block';	
					var left = this.parentNode.offsetLeft + 50;
					var top = this.parentNode.offsetTop -30;
					oShow.style.left = left + 'px';
					oShow.style.top = top + 'px';
					oImg.src = this.src;
					oInfo.innerHTML = this.getAttribute('info');
					
				}
				aImg[i].onmouseout = function(){
					oShow.style.display = 'none';	
				}
			};
			
		})();

		//BBS
		(function(){
			var oDiv = document.getElementById('bbs');
			var aLi = oDiv.getElementsByTagName('li');

			for (var i = 0; i < aLi.length; i++) {
				aLi[i].onmouseover = function(){
					for (var i = 0; i < aLi.length; i++) {
						aLi[i].className = '';
					};
					this.className = 'active';
				}
			};
		})();

		//红人烧客
		(function(){
			var arr = [
				'',
				'用户1: aaa<br>人气:1000<br>区域:朝阳区',
				'用户名2：性感宝贝<br>区域：朝阳区<br>人气：19845',
				'用户3: aaa<br>人气:1000<br>区域:朝阳区',
				'用户名4：性感宝贝<br>区域：朝阳区<br>人气：19845',
				'用户5: aaa<br>人气:1000<br>区域:朝阳区',
				'用户名6：性感宝贝<br>区域：朝阳区<br>人气：19845',
				'用户7: aaa<br>人气:1000<br>区域:朝阳区',
				'用户名8：性感宝贝<br>区域：朝阳区<br>人气：19845',
				'用户9: aaa<br>人气:1000<br>区域:朝阳区',
				'用户名10：性感宝贝<br>区域：朝阳区<br>人气：19845',
			];
		 	$('.user_header li').mouseover(function(){
		 		if($(this).index() == 0)return;
		 		$('.user_header li p').remove();
		 		$(this).append('<p style="width:'+($(this).width()-12)+'px; height:'+($(this).height()-12)+'px;">'+arr[$(this).index()]+'</p>');	
		 	});
		})();
});