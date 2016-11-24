(function(){
	'use strict';
	angular
		.module('eCommerce')
		.controller('HomeController', HomeController);

		HomeController.$inject = ['$http', '$rootScope', '$cookies', '$state', '$modal']

		function HomeController($http, $rootScope, $cookies, $state, $modal){
			var homeCtrl = this;
			homeCtrl.init = init;
			homeCtrl.showProducts = showProducts;
			homeCtrl.showHomeData = showHomeData;
			homeCtrl.showOrderDetails = showOrderDetails;
			homeCtrl.searchProduct = searchProduct;
			homeCtrl.logout = logout;
			homeCtrl.placeOrder = placeOrder;
			$rootScope.isProductActive;
			homeCtrl.grandTotal = 0;
			homeCtrl.isShowBanner = true;
			homeCtrl.isShowList = false;
			homeCtrl.isHomeActive = true;
			homeCtrl.isProductActive = false;
			homeCtrl.isOrderActive = false;
			homeCtrl.isShowOrder = false;
			homeCtrl.isShowPopup = false;
			homeCtrl.phones;
			homeCtrl.priceFilterType = ["PriceFilter", "LowToHigh", "HighToLow"];
			homeCtrl.type = homeCtrl.priceFilterType[0];
			function init() {
				homeCtrl.orderList = [];
				$http.get('phones/phones.json').then(function(response){
					$rootScope.productData = response.data;
					homeCtrl.phones = response.data;
				});
			};

			function showProducts() {
				homeCtrl.isShowBanner = false;
				homeCtrl.isProductActive = true;
				homeCtrl.isHomeActive = false;
				homeCtrl.isShowList = true;
				homeCtrl.isOrderActive = false;
				homeCtrl.isShowOrder = false;
			};

			function showHomeData(){
				homeCtrl.isShowBanner = true;
				homeCtrl.isShowList = false;
				homeCtrl.isProductActive = false;
				homeCtrl.isHomeActive = true;
				homeCtrl.isOrderActive = false;
				homeCtrl.isShowOrder = false;
			};

			function showOrderDetails(){
				homeCtrl.isShowBanner = false;
				homeCtrl.isShowList = false;
				homeCtrl.isHomeActive = false;
				homeCtrl.isProductActive = false;
				homeCtrl.isOrderActive = true;
				homeCtrl.isShowOrder = true;
				
				homeCtrl.grandTotal = 0;	
				homeCtrl.orderList = [];
				
				if(orderList != $cookies.get('orderList')){
					var orderList = JSON.parse($cookies.get('orderList'));
					angular.forEach(orderList, function(value, key){
						homeCtrl.orderList.push(orderList[key]);
						homeCtrl.orderList[key].subTotal = orderList[key].quantity * orderList[key].price;
						homeCtrl.grandTotal = homeCtrl.grandTotal + homeCtrl.orderList[key].subTotal;
					});
				}
			};

			function searchProduct() {
				homeCtrl.isProductActive = true;
				homeCtrl.isHomeActive = false;
				homeCtrl.isShowList = true;
				homeCtrl.isShowBanner = false;
			};

			function logout() {
				$cookies.remove('orderList');
				$state.go('login');
			};

			function placeOrder(){
				var dialog = {
					title: 'Place Order',
	                actionCaption: 'Place',
	                closeCaption: 'Cancel',
					loading: false,
					message: 'Are you want to place order.',
					isRegister: false,
					class: 'showPopup'
				};

				var modalInstance = $modal.open({
	                template: '<popup></popup>',
	                backdrop: 'static',
	                keyboard: false,
	                controller: 'PopupController',
	                controllerAs: 'popupCtrl',
	                resolve: {
	                    dialog: function(){
	                        return dialog;
	                    },
	                    actionCB: function(){
	                        return placeOrder;
	                    }
	                }
				});
	            function placeOrder(){
	            	$cookies.remove('orderList');
	                modalInstance.close();
	                homeCtrl.grandTotal = 0;
	                homeCtrl.isShowOrder = false;
	            };
			}
		}
})();