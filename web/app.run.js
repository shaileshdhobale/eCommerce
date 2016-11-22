(function() {
	'use strict';
	angular
		.module('eCommerce')
		.run(runMethod);
	runMethod.$inject = ['$rootScope', '$state'];

	function runMethod($rootScope, $state){
		
	  var statespermission=['login'];  //route that require login
	    /*$rootScope.$on(function(event, toState){
	        if(toState.name === 'login') {
	        	event.preventDefault();
	        	$state.go('login');
	        }
	    });*/
	};
})();