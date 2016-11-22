(function(){
	'use strict';
	angular
		.module('eCommerce')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$http']

		function HomeController($http){
			var homeCtrl = this;
			homeCtrl.showProducts = showProducts;
			homeCtrl.showHomeData = showHomeData;
			homeCtrl.showOrderDetails = showOrderDetails;
			homeCtrl.isShowList = false;
			homeCtrl.phones;
			function showProducts() {
				$http.get('phones/phones.json').then(function(response){
					homeCtrl.phones = response.data;
					homeCtrl.isShowList = true;
				});
			}

			function showHomeData(){
				homeCtrl.isShowList = false;
			}

			function showOrderDetails(){
				homeCtrl.isShowList = false;
			}
		}
})();