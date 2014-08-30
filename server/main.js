var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {
"/":requestHandlers.iniciar,
"/iniciar":requestHandlers.iniciar,
"/subir":requestHandlers.subir,
"/favicon.ico":requestHandlers.favicon
};
server.iniciarServer(router.route, handle);

