var express = require('express');
	server = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');
	mongoose = require('mongoose');
	var port = 8002;
	var favicon = require('serve-favicon');





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
server.use(favicon(__dirname + '/resources/images/evlogfavicon2.jpg'));
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
server.post('/doneEvent', function(req, res){
	var Event = require('./models/event');
	var Evento =  new Event({
	lat : req.body.lat,
	lng : req.body.lng,
	price: req.body.price,
	evento: req.body.evento,
	company: req.body.company});

	Evento.save(function(err, Evento){
		if(err) return console.log(err);
		console.log("Gracias por Registrar un evento!");
		console.dir(Evento);
		res.status(200);
	});
   
});

server.post('/getAllEvents',function(req, res){
	var Event = require('./models/event');
	Event.find(function(err,respuesta){
		if(err) return console.log(err);
		console.log(respuesta);
		res.status(200).json(respuesta);
	});
});

server.post('/donelogin/:user/:passwd', function(req, res){
	var User = require('./models/user');

	User.findOne({uName: req.params.user, passwd: req.params.passwd},function(err, respuesta){
				  	if(err) return console.log(err+" en /donelogin");
				  	res.status(200);
				  	console.log(respuesta);
				  	res.json(respuesta);
				  });
});

server.post('/buyTicket/:evento/:company/:price/:uName/:uId/:date/:isPending', function(req,res){
	var Historial = require('./models/historial');

	var historial = new Historial({
		evntName : req.params.evento,
		evntCompany:  req.params.company,
		evntPrice: req.params.price,
 		userName:  req.params.uName,
		userId:  req.params.uId,
		buyDate: req.params.date,
		isPending: req.params.isPending
	});

	historial.save(function(err,Historial){
		if(err) return console.log(err);
		console.log("has Comprado: \n"+historial);
	});
});

server.post('/getPendingMsg/:userId/:isPending', function(req,res){
	var Historial = require('./models/historial');

	Historial.find({userId: req.params.userId, 
				   isPending: req.params.isPending}, function(err,data){
			if(err) console.log(err);
			console.log(data);
			res.status(200).json(data);
		});
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


