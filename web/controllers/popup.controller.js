(function(){
	'use strict';
	angular
		.module('eCommerce')
		.controller('PopupController', PopupController);

	PopupController.$inject = ['dialog', 'actionCB'];
	function PopupController(dialog, actionCB){
		var popupCtrl = this;
		popupCtrl.dialog = dialog;
		popupCtrl.ok = actionCB;
	};
})();