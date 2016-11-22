(function(){
	'use strict';
	angular
		.module('eCommerce')
		.service('LoginService', LoginService);

	LoginService.$inject = ['$state'];

	function LoginService($state){
		var service = this;
		service.authenticateUser = authenticateUser;
		function authenticateUser(loginData){
			if(loginData.userId == 'admin' && loginData.password == 'admin'){
				$state.go('home');
			} else {
				$state.go('login');
			}
		}
	}
})();