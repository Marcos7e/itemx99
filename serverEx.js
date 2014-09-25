var express = require('express');
	server = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');
	mongoose = require('mongoose');
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
	res.status(200).sendFile(__dirname+"/views/index.html");
	
});

server.post('/done', function(req, res){
		var User = require('./models/user');
	var usuario =  new User({
		uname: req.body.uname,
		birth: req.body.birth,
		email: req.body.email,	
		uName: req.body.user,
		passwd: req.body.pass});

	usuario.save(function(err, usuario){
		if(err) return console.log(err);
		console.log("Gracias por Registrarte! "+usuario.uname);
		console.dir(usuario);
	});
	res.status(200).redirect('/');
   
});


//-------------------------------------------------------------

//404 NOT FOUND!----------------------------------------------
server.get('*', function(req, res){
	res.status(404).sendFile(__dirname+"/views/404/notFound.html");});
//--------------------------------------------------------------


//Conectando con MongoDB por medio de Mongoose
mongoose.connect('mongodb://localhost:27017/evlog');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error!'));
db.once('open', function(){
	console.log("Conectado a la base de datos!");
});

//var models = require('./models/user')(server, mongoose);


