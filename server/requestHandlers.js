function iniciar(){
	console.log("Manipulador de peticiones para 'iniciar' ha sido llamado!");
};

function subir(){
	console.log("Manipulador de peticiones para 'subir' ha sido llamado!");
};

function favicon(){
	console.log("Manipulador de peticiones para 'favicon' ha sido llamado!");
};

exports.iniciar = iniciar;
exports.subir = subir;
exports.favicon = favicon;