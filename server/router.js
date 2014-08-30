function route(handle, pathname, response){
	console.log("A punto de rutear una peticion para "+pathname);
	if(typeof handle[pathname]==='function'){
		handle[pathname](response);
	}
	else
		{console.log("No se encontró manejador de Request para "+pathname);
		response.writeHead(404,{"Content-Type":"text/html"});
		response.write(404, "404 not found");
		response.end();
		}
};

exports.route= route;