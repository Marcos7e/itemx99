app.controller('topBarModule', function($scope, login){
if(login.getUserName()!="n/a")
{
	console.log("Bienvenido hijo! "+login.getUserName());

	$scope.menuStarter = [
	{'title':'Salir',
	 'href':'#/salir'},
	 {'title':'Ver Eventos',
	 'href':'#/eventos'},
	];

	$scope.greeting ={
		'title':'Bienvenido! '+login.getUserName(),
		'href' :'#/cuenta',
		'class': 'navbar-text show'
	};

	$scope.ShoppingCart ={
		'href':'#/compras'
	};
	
}

else
{console.log("nope, aca no hay nadie!");

	$scope.menuStarter = [
	{'title':'Registrarme',
	 'href':'#/register'},
	 {'title':'Log in',
	 'href':'#/login'},
	];

		$scope.greeting ={
		'title':'Bienvenido! '+login.getUserName(),
		'href' :'#/cuenta',
		'class': 'navbar-text hide'
	};


	$scope.ShoppingCart ={
		'href':'#/userRegister'
	};


}


	});