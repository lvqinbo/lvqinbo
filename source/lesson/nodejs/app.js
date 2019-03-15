var http = require('http');
var fs = require('fs');
var documentRoot = 'E:/Work'
var app = http.createServer(function(req, res){
	
	res.writeHeader(200,{
		'content-type' : 'text/html;charset="utf-8"'
	});
	res.write('hello');
	res.end();

	var url = documentRoot + req.url;
	fs.readFile(url,function(err, data){
		if(err){
			res.writeHeader(404, {
				'content-type' : 'text/html:charset="utf-8"'
			});
			res.write('< h1>404 Not-fonut< /h1>');
			res.end();
		}else{
			res.writeHeader(200, {
				'content-type' : 'text/html:charset="utf-8"'
			});
			res.write(data);
			res.end();
		}
	})

}).listen(3000);
console.log('listening to port 3000');
