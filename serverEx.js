var express = require('express');
	server = express(),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");
	mongoose = require("mongoose");
	var port = 8002;

console.log("Servidor instanciado con Exito!");

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(methodOverride());
server.use(express.static(__dirname));

console.log("Ruta Estática en:"+__dirname);


server.get('/', function(req, res){
	res.sendFile(__dirname+"/views/index.html");

});

server.get('*', function(req, res){
	res.sendFile(__dirname+"/views/404/notFound.html");

});

server.listen(port,function(){
	console.log("Escuchando sobre puerto "+port);
});
