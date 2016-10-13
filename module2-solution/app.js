(function () {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		this.list = ShoppingListCheckOffService.getToBuyItems() ;
		this.switchItem = function(itemIndex){
			ShoppingListCheckOffService.switchService(itemIndex);
		};

		this.errorMessage = function () {
			if (this.list.length === 0) {
				return true;
			}
			else return false;
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		this.list = ShoppingListCheckOffService.getBoughtItems();

		this.errorMessage = function () {
			if (this.list.length === 0) {
				return true;
			}
			else return false;
		};
		
	}

	function ShoppingListCheckOffService() {
		var bought = [];

		var to_buy = [
			{
				name: "Milk",
				quantity: "7"
			} ,
			{
				name: "Donuts",
				quantity: "10"
			} ,
			{
				name: "Souvlaki",
				quantity: "15"
			} ,
			{
				name: "Donuts",
				quantity: "16"
			} , 
			{
				name: "Cookies",
				quantity: "7"
			}
		];
		this.getToBuyItems = function() {
			return to_buy;
		};

		this.getBoughtItems = function() {
			return bought;
		};
		this.switchService = function(itemIndex) {
			bought.push(to_buy[itemIndex]);
			to_buy.splice(itemIndex,1);
		}
		
	}



})();