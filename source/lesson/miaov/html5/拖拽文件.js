var oBox = document.querySelector('#box');
var oImgBox = document.querySelector('#imgbox');
var oP = document.querySelector('.picnum');
var html = '',num = 0;

oBox.ondragover = function(ev){
	var ev = ev || event;
	ev.preventDefault();
	oBox.innerHTML = '可以释放了！';
}
oBox.ondragleave = function(ev){
	oBox.innerHTML = '请将文件拖拽到此区域';
}
oBox.ondrop = function(ev){
	var ev = ev || event;
	ev.preventDefault();
	oBox.innerHTML = '请将文件拖拽到此区域';
	
	var fin = ev.dataTransfer.files;
	// console.log(fin[0].type);
	
	for (var i = 0; i < fin.length; i++) {
		if(fin[i].type.indexOf('image') != -1){

			// 创建读取文件对象
			var fr = new FileReader();
			fr.readAsDataURL( fin[i] );

			fr.onload = function(){
				
				oImgBox.innerHTML += '< div class="pic">< img src="'+this.result+'" />'+
				'< a href="javascript:;">x< /a>< /div>';
				num++;
				console.log(num)
				var aClose = oImgBox.getElementsByTagName('a');
				for (var i = 0; i < aClose.length; i++) {
					aClose[i].onclick = function(){
						this.parentNode.parentNode.removeChild(this.parentNode);
						num--;
						console.log(num)
						oP.innerHTML = num+'/8';
						if(num == 0){
							oP.style.display = 'none';
						}
					}
				};
			}
		}
	};
	oP.style.display = 'block';
	oP.innerHTML = num+1+'/8';
}