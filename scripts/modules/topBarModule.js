app.controller('topBarModule', function($scope, login){
if(login.getUserName()!="n/a")
{

	$scope.menuStarter = [
	{'title':'Salir',
	 'href':'#/salir'},
	 {'title':'Ver Eventos',
	 'href':'#/eventos'},
	 {'title':'Registrar Evento',
	 'href':'#/eventRegister'}
	];

	$scope.greeting ={
		'title':'Bienvenido! '+login.getUserName(),
		'href' :'#/cuenta',
		'class': 'navbar-text show',
		'notif': login.getPendingMsg()
	};

	$scope.ShoppingCart ={
		'href':'#/compras'
	};
	
}

else
{
	

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




	}});