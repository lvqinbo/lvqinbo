var data = map;
var oArea = g('area');
var oCity = g('city');
var oCounty = g('county');

oArea.addEventListener('input',function(){
	addCity(this.value);
},false);

oCity.addEventListener('input',function(){
	addCounty(this.value);
},false);

addArea();
function addArea(){
	var options = '';

	for(var i = 0; i < data.length; i++){
		options += '<option value="'+data[i].area+'">'+data[i].area+'</option>';
	}
	oArea.innerHTML = options;
	addCity(oArea.value);
}

function addCity(n){
	var options = '';
	
	for(var i = 0; i < data.length; i++){
		if(n == data[i].area){
			for(var j = 0; j < data[i].city.length; j++){
				options += '<option value="'+data[i].city[j]+'">'+data[i].city[j]+'</option>';
			}
		}	
	}
	oCity.innerHTML = options;
	addCounty(oCity.value);
}

function addCounty(n){
	var options = '';
	var iNow = 0;
	for(var i = 0; i < data.length; i++){
		for(var k = 0; k < data[i].city.length; k++){

			if(n == data[i].city[k]){
				iNow = k;
				for(var j = 0; j < data[i].county[iNow].length; j++){
					options += '<option value="'+data[i].county[iNow][j]+'">'+data[i].county[iNow][j]+'</option>';
				}
			}	
		}
	}
	oCounty.innerHTML = options;
}
function g(id){
	return document.getElementById(id);
}