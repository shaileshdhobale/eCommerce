(function(){
	'use strict';
	angular
		.module('eCommerce')
		.directive('popup', popup);
	popup.$inject = [];
	
	function popup(){
		return {
    		templateUrl: 'views/popup.html',
  		};
	}	
})();