(function(){
	'use strict';
	angular
	.module('eCommerce')
	.controller('ProductDetailsController', ProductDetailsController);

	ProductDetailsController.$inject = ['$rootScope', '$stateParams', '$state', '$cookies'];

	function ProductDetailsController($rootScope, $stateParams, $state, $cookies){
		var prodCtrl = this;
		prodCtrl.quantity = 1;
		prodCtrl.addToCart = addToCart;
		angular.forEach($rootScope.productData, function(value, key){
			if($rootScope.productData[key].id == $stateParams.productId){
				prodCtrl.productData = $rootScope.productData[key];	
			}
		});

		function addToCart(productDataObj){
			var orderArray = [];
			productDataObj.productData.quantity = productDataObj.quantity;
			var orderObj = $cookies.get('orderList');

			if(orderObj != undefined) {
				orderObj = JSON.parse(orderObj);
				angular.forEach(orderObj, function(value, key){
					orderArray.push(orderObj[key]);
				})
				$cookies.remove('orderList');
			}
			orderArray.push(productDataObj.productData)
			$cookies.putObject('orderList', orderArray);
			$rootScope.isProductActive = true;
			$rootScope.isShowList = true;
			$state.go('home');
		}
	}
})();