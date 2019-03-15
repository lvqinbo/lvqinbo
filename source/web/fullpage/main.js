$(document).ready(function(){
$('#fullpage').fullpage({
verticalCentered: false,
anchors:['page1','page2','page3','page4'],
navigation: true,
navigationTooltips:['戴着它，就会爱上它','真正与你贴近的设备','非一般的精准计划','一份好礼，开启重重精彩'],
afterLoad:function(link,index){
	switch(index){
		case 1:
		  move('.section1 h1').scale(1.5).end();
		  move('.section1 p').set('margin-top','5%').end();
		  break;
		case 2:
		  move('.section2 h1').scale(0.7).end();
		  break;
		case 3:
		  move('.section3 h1').set('margin-left','0').end();
		  move('.section3 p').set('margin-right','20%').end();
		  move('.section3 a').set('margin-top','0').end();
		  break;
		case 4:
	  	move('.section4 img.primary').rotate(360).duration('.6s')
	  	.end(function(){
		  	move('.section4 img.sport').rotate(360).duration('.6s')
		  		.end(function(){
		 			move('.section4 img.edition').rotate(360).duration('.6s')
		 			.end(function(){
		 			 	 });
		  		});
			});
		break;
		default:
		break;
	}
},
onLeave:function(link,index){
	switch(index){
	case 1:
		move('.section1 h1').scale(1).end();
		move('.section1 p').set('margin-top','800px').end();
		break;
	case 2:
		move('.section2 h1').scale(1).end();
		break;
	case 3:
		move('.section3 h1').set('margin-left','-1700px').end();
		move('.section3 p').set('margin-right','-1000px').end();
		move('.section3 a').set('margin-top','800px').end();
		break;
	case 4:
		move('.section4 img.primary').rotate(-360).end();
		move('.section4 img.sport').rotate(-360).end();
		move('.section4 img.edition').rotate(-360).end();
		break;
	default:
	break;
	}
},
afterRender:function(){}
});
});