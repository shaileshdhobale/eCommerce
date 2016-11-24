(function(){
	'use strict';
	angular
		.module('eCommerce')
		.filter('price', price);
	
	function price(){
		return filter;
		function filter(priceArr, type){
			console.log(type)
			var temp;
			if(type == "PriceFilter") {
				return priceArr;
			} 

			if(type == "LowToHigh"){
				for(var i=0; i<priceArr.length; i++){
					for(var j=i+1; j<priceArr.length; j++){
						if(priceArr[i].price > priceArr[j].price){
							temp = priceArr[i];
							priceArr[i] = priceArr[j];
							priceArr[j] = temp;
						}
					}
				}
			} else {
				for(var i=0; i<priceArr.length; i++){
					for(var j=i+1; j<priceArr.length; j++){
						if(priceArr[i].price < priceArr[j].price){
							temp = priceArr[i];
							priceArr[i] = priceArr[j];
							priceArr[j] = temp;
						}
					}
				}
			}
			return priceArr;
		}
	}
})();