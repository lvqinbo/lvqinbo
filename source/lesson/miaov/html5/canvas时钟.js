// Canvas时钟
var oC = document.getElementById('c1');
var oGc = oC.getContext('2d');

oGc.strokeStyle = '#099665';
oGc.lineWidth = 1;
oGc.beginPath();
oGc.moveTo(200,200);
oGc.arc(200,200,150,0,360*Math.PI/180);
oGc.closePath();
oGc.stroke();
oGc.restore();
oGc.save();

creatColock();
setInterval(creatColock,1000);

function creatColock(){
	var x = 200,
		y = 200,
		r = 150;

	var t = new Date();
	var iH = t.getHours();
	var iM = t.getMinutes();
	var iS = t.getSeconds();

	var valH = ( -90 + 30 * iH + iM/2 )*Math.PI/180;
	var valM = ( -90 + 6 * iM )*Math.PI/180;
	var valS = ( -90 + 6* iS )*Math.PI/180;

	// 清空画布
	oGc.clearRect(0,0,oC.width,oC.height);

	// 绘制秒针刻度
	oGc.beginPath();
	oGc.moveTo(x,y);
	oGc.arc(x,y,r,0,0,false);
	for (var i = 0; i < 60; i++) {
		oGc.arc(x,y,r,i*6*Math.PI/180,6*(i+1)*Math.PI/180);
		oGc.moveTo(x,y);
	};
	oGc.closePath();
	oGc.stroke();

	// 绘制秒针刻度盖盘
	oGc.fillStyle = 'white';
	oGc.beginPath();
	oGc.moveTo(x,y);
	oGc.arc(x,y,r*19/20,0,360*Math.PI/180);
	oGc.closePath();
	oGc.fill();

	// 绘制分针刻度
	oGc.lineWidth = 5;
	oGc.beginPath();
	oGc.moveTo(x,y);
	oGc.arc(x,y,r,0,0,false);
	for (var i = 0; i < 12; i++) {
		oGc.arc(x,y,r,i*30*Math.PI/180,30*(i+1)*Math.PI/180);
		oGc.moveTo(x,y);
	};
	oGc.closePath();
	oGc.stroke();

	// 绘制分针刻度盖盘
	oGc.fillStyle = 'white';
	oGc.beginPath();
	oGc.moveTo(x,y);
	oGc.arc(x,y,r*18/20,0,360*Math.PI/180);
	oGc.closePath();
	oGc.fill();

	// 圆心
	oGc.fillStyle = '#5947FC';
	oGc.beginPath();
	oGc.moveTo(x,y);
	oGc.arc(x,y,8,0,360*Math.PI/180);
	oGc.closePath();
	oGc.fill();
	oGc.save();
	oGc.restore();

	// 绘制时针
	oGc.lineWidth = 5;
	oGc.beginPath();
	oGc.moveTo(x,y);
	oGc.arc(x,y,r*14/20,valH,valH,false);
	oGc.closePath();
	oGc.stroke();

	// 绘制分针
	oGc.strokeStyle = '#FFF70A';
	oGc.lineWidth = 3;
	oGc.beginPath();
	oGc.moveTo(x,y);
	oGc.arc(x,y,r*16/20,valM,valM,false);
	oGc.closePath();
	oGc.stroke();
	oGc.save();
	oGc.restore();
	
	// 绘制秒针
	oGc.strokeStyle = 'red';
	oGc.lineWidth = 1;
	oGc.beginPath();
	oGc.moveTo(x,y);
	oGc.arc(x,y,r*19/20,valS,valS,false);
	oGc.closePath();
	oGc.stroke();
	oGc.restore();
	oGc.save();
}
