var myApp = angular.module('myApp', [ngRoute]);

/*myApp.controller('regAppController', ['$scope', function($scope){
	$scope.message="Welcome to access";  
}])*/

myRegApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		When('/login',{
			templateUrl:'views/login.html',
			Controller:'RegistrationController'
		}).
		When('/register',{
			templateUrl:'views/register.html',
			Controller:'RegistrationController'
		}).
		When('/success',{
			templateUrl:'views/success.html',
			Controller:'SuccessController'
		}).
		otherwise({
			redirectTo:'/login'
		});
}]);