var express = require('express');
	server = express(),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");
	mongoose = require('mongoose');
	var models = require('./models/user')(server,mongoose);
	var port = 8002;



//Mensaje de instancia!------------------------------
console.log("Servidor instanciado con Exito!");
//Mensaje de ruta Estática!---------------------------
console.log("Ruta Estática en:"+__dirname);
//---------------------------------------------------


//Callback de escucha de puerto
server.listen(port,function(){
	console.log("Escuchando sobre puerto "+port);});
//------------------------------------------------------

//configuraciones....
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(methodOverride());
server.use(express.static(__dirname));
//-------------------------------------------------------


//Ruteos!---------------------------------------------------
server.get('/', function(req, res){
	res.sendFile(__dirname+"/views/index.html");});

//-------------------------------------------------------------

//404 NOT FOUND!----------------------------------------------
server.get('*', function(req, res){
	res.sendFile(__dirname+"/views/404/notFound.html");});
//--------------------------------------------------------------


//Conectando con MongoDB por medio de Mongoose
mongoose.connect('mongodb://localhost/ptg/', function(err, res){
	if(err) throw err;
	console.log('Conectado a la base de datos!');
});
