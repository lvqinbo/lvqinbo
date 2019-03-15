var aLi = document.getElementById('list').getElementsByTagName('li');
	var oC = document.getElementById('c1');
	var oGc = oC.getContext('2d');
	var str = '';
	
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].onclick = function(){
			console.time('hello');
			str = this.innerHTML;
			oGc.clearRect(0, 0, oC.width, oC.height);

			var w1 = new Worker('worker.js');

			w1.postMessage( oC.width * oC.height );
			w1.onmessage = function(ev){
				var arr = ev.data;
				
				var h = 180;
				oGc.font = h + 'px impact';
				oGc.fillStyle = 'red';
				oGc.textBaseline = 'top';
				var w = oGc.measureText(str).width;
				oGc.fillText(str, (oC.width- w)/2, (oC.height - h)/2 );

				var oImg = oGc.getImageData( (oC.width - w)/2, (oC.height - h)/2, w, h );
				oGc.clearRect( 0, 0, oC.width, oC.height );
				var objImg = oGc.createImageData( w, h );

				for (var i = 0; i < arr.length; i++) {
					objImg.data[4 * arr[i]] = oImg.data[ 4* arr[i]];
					objImg.data[4 * arr[i]+1] = oImg.data[ 4* arr[i]+1];
					objImg.data[4 * arr[i]+2] = oImg.data[ 4* arr[i]+2];
					objImg.data[4 * arr[i]+3] = oImg.data[ 4* arr[i]+3];
				};
				oGc.putImageData( objImg, (oC.width - w)/2, (oC.height - h)/2 );
			}
			console.timeEnd('hello');
		}
	};