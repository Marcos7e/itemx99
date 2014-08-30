var http= require('http');
var url= require ('url');



function iniciarServer(route, handle){

function onRequest(request,response){
	console.log('petición Recibida!');

	var pathname = url.parse(request.url).pathname;
	console.log('petición para '+pathname+' recibida!');

	route(handle, pathname, response);	

	response.writeHead(200,{"content-type":"text/html"});
	response.write("holaMundo!");
	response.end();
};


http.createServer(onRequest).listen(8000);
console.log("Servicio Iniciado");

};

exports.iniciarServer = iniciarServer;




