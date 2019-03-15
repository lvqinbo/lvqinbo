// canvas  默认W=300 H=150 
< canvas id="c1" width="400" height="400">< /canvas>

// 获取2d绘图环境
var oC = document.getElementById('c1');
var oGc = oC.getContext('2d');

//绘制方块fillRect
oGc.fillRect(X轴,Y轴,宽,高)

//设置方块样式（需在绘制之前设置）
oGc.fillStyle = 'red';

// 绘制虚框
oGc.strokeRect(X轴,Y轴,宽,高)

// 虚线框样式填充
oGc.strokeStyle = 'blue';

// 如果希望边框为1px，需要在x,y轴加多0.5
oGc.strokeRect(100.5,100.5,50,50)

// lineJoin: 边框角度 默认直角(miter)

// 设置圆角
oGc.lineJoin = 'round';

// 设置斜角
oGc.lineJoin = 'bevel';

// 绘制的矩形与绘制边框在同位置，时候，先写谁，谁先绘制（后绘的在上面）

// 绘制三角形
oGc.strokeStyle = 'red'; // 设置样式为红色

oGc.beginPath()		// 绘制开始
oGc.moveTo(100,100) // 起始点x,y坐标
oGc.lineTo(100,200) // 第二个点坐标
oGc.lineTo(200,200) // 第三个点坐标
oGc.colsePath()		// 闭合

oGc.stroke()		// 绘制虚框
oGc.fill()			// 绘制实框

oGc.restore() 		// 结束 之前设置的样式不会影响后面的

oGc.save();			// 保存

// 绘制圆
oGc.arc(x,y,r,sAngle,eAngle,counterclockwise);
x: 圆中心的x轴位置
y: 圆中心的y轴位置
r: 圆的半径
sAngle: 起始弧度
eAngle: 结束弧度
counterclockwise: 可选参数，false表示顺时针，true表示逆时针

// 清除画布 clearRect(x,y,w,h);
oGc.clearRect(0,0,oC.width,oC.height);

// 配合定时器让图像运动

var num = 0;
var tiemr = setInterval(function(){
	num++;
	oGc.clearRect(0,0,oC.width,oC.height);
	oGc.fillRect(num,num,100,100);
	if(num == 300){
		clearInterval(timer);
	}
},30);

// drawImage(obj,x,y,width,height)
context.drawImage(img,x,y,width,height);

// drawImage(obj,sx,sy,swidth,sheight,x,y,width,height)
context.drawImage(img,x,y,width,height);

img	规定要使用的图像、画布或视频。
sx	可选。开始剪切的 x 坐标位置。
sy	可选。开始剪切的 y 坐标位置。
swidth	可选。被剪切图像的宽度。
sheight	可选。被剪切图像的高度。
x	在画布上放置图像的 x 坐标位置。
y	在画布上放置图像的 y 坐标位置。
width	可选。要使用的图像的宽度。（伸展或缩小图像）
height	可选。要使用的图像的高度。（伸展或缩小图像）

// 绘制背景
context.createPattern(image,"repeat|repeat-x|repeat-y|no-repeat");

var objImg = new Image();
objImg.onload = function(){
	draw(this);
}
objImg.src = 'img/xxx.jpg';

function draw(obj){
	var bg = oGc.createPattern(obj, 'repeat');
	oGc.fillStyle = bg;
	oGc.drawImage( 0, 0, 400, 400 );
}

// 线性渐变 context.createLinearGradient(X起点,Y起点,X终点,Y终点);
var obj = oGc.createLinearGradient(100,150,100,200);

obj.addColorStop(0,'red');	//起点，填充颜色
obj.addColorStop(0.6,'green');//过度，填充颜色
obj.addColorStop(0.8,'blue'); //终点，填充颜色

oGc.fillStyle = obj;
oGc.fillRect(100,150,100,100);

// 径向渐变 context.createLinearGradient(X起点,Y起点,起点半径,X终点,Y终点,终点半径);
var obj = oGc.createRadialGradient(120,120,40,130,130,60);

obj.addColorStop(0,'red');	//起点，填充颜色
obj.addColorStop(0.2,'yellow');//过度，填充颜色
obj.addColorStop(0.9,'orange'); //终点，填充颜色
obj.addColorStop(1,'white'); //终点，填充颜色

oGc.fillStyle = obj;
oGc.fillRect(0,0,240,240);

// 绘制文字 context.fillText( str, x, y )
context.fillText( '你好，世界', 300, 300 );

// 设置字体大小
context.font = '60px impact'; (需在绘制文字之前设置)

// 设置文字对齐 top||middle||bottom
context.textBaseline = 'top'; 顶部对齐 (需在绘制文字之前设置)

// 设置阴影(还需要设置阴影颜色方可见)
context.shadowOffsetX = 6;	X轴阴影
context.shadowOffsetY = 6;	Y轴阴影
// 设置阴影颜色
context.shadowColor = 'red';
// 获取文字宽度
var w = context.measureText(str).width;

// 创建像素对象
var imgData=context.createImageData(width,height);

// 创建与指定的另一个 ImageData 对象尺寸相同的新 ImageData 对象（不会复制图像数据）
var imgData=context.createImageData(imageData);

// 获取像素数据
var imgData=context.getImageData(x,y,width,height);
x	开始复制的左上角位置的 x 坐标。
y	开始复制的左上角位置的 y 坐标。
width	将要复制的矩形区域的宽度。
height	将要复制的矩形区域的高度。

getImageData() 方法返回 ImageData 对象，该对象拷贝了画布指定矩形的像素数据。
对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：
R - 红色 (0-255)
G - 绿色 (0-255)
B - 蓝色 (0-255)
A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)
// 获取像素的rgba值
red=imgData.data[0];
green=imgData.data[1];
blue=imgData.data[2];
alpha=imgData.data[3];

// putImageData() 方法将图像数据（从指定的 ImageData 对象）放回画布上。
context.putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight);

imgData	规定要放回画布的 ImageData 对象。
x	ImageData 对象左上角的 x 坐标，以像素计。
y	ImageData 对象左上角的 y 坐标，以像素计。
dirtyX	可选。水平值（x），以像素计，在画布上放置图像的位置。
dirtyY	可选。水平值（y），以像素计，在画布上放置图像的位置。
dirtyWidth	可选。在画布上绘制图像所使用的宽度。
dirtyHeight	可选。在画布上绘制图像所使用的高度。