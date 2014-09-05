var express = require('express');
var server = express();
var port = 8001;

console.log("Servidor instanciado con Exito!");

server.use(express.static(__dirname));
console.log("Ruta Estática en:"+__dirname);


server.get('/', function(req, res){
	res.sendFile(__dirname+"/index.html");

});

server.listen(port);
console.log("Escuchando sobre puerto "+port);