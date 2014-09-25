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
	res.sendFile(__dirname+"/views/index.html");
	//var prueba =  new user({name:"julio?"});
	//console.log(prueba.name);
});

server.get('/offer/:name?', function(req, res){
	if(req.params.name) {res.send("Hola! "+req.params.name);}
	res.sendFile(__dirname+"/views/offer.html");});

server.post('/register', function(req, res){
	//if(req.body.)
});





//-------------------------------------------------------------

//404 NOT FOUND!----------------------------------------------
server.get('*', function(req, res){
	res.sendFile(__dirname+"/views/404/notFound.html");});
//--------------------------------------------------------------


//Conectando con MongoDB por medio de Mongoose
mongoose.connect('mongodb://localhost:27017/evlog');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error!'));
db.once('open', function(){
	console.log("Conectado a la base de datos!");
});

var models = require('./models/user')(server, mongoose);

//------------------------------------------------------------

var userCtrl = require('./server/modules/userCtrl');
var userRouter = express.Router();

userRouter.route('/userCtrl')
	.get(userCtrl.findAllUsers);

server.use('/api', userRouter);

