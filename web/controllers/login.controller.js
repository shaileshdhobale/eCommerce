(function(){
	'use strict';
	angular
		.module('eCommerce')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['LoginService'];

	function LoginController(LoginService){
		var loginCtrl = this;

		loginCtrl.authenticateUser = authenticateUser;

		function authenticateUser(){
			var loginData = {
                    userId: loginCtrl.userId,
                    password: loginCtrl.password
                };
			LoginService.authenticateUser(loginData);
		}
	};
})();