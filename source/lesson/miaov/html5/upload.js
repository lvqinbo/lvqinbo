var oFile = document.getElementById('myFile');
var oBtnUpload = document.getElementById('upload');
var oBarBox = document.getElementById('progress');
var oBarCent= document.querySelector('.p-cent');
var oBarText = document.querySelector('.p-text');

oBtnUpload.onclick = function(){
	oBarBox.style.display = 'block';
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		alert('上传成功!');
		oBarBox.style.display = 'none';
		oBarCent.style.width =  0;
		oBarText.innerHTML = '0%';
	}
	var oUpload = xhr.upload;
	oUpload.onpropress = function(ev){
		var scale = ev.loaded / ev.total;
		oBarCent.style.width = oBarBox.offsetWidth * scale + 'px';
		oBarText.innerHTML = Math.floor(scale * 100) + '%';
	}
	xhr.open('post','post_file.php',true);
	xhr.setRequestHeader('X-Request-With','XMLHttpRequest');
	var oFormData = new FormData();
	oFormData.append('file', oFile.files[0]);
	xhr.send(oFormData);
}