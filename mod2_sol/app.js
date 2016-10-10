 (function() {

 'use strict';

 angular.module("ShoppingListCheckOff", [])
 .controller("ToBuyController", ToBuyController)
 .controller("AlreadyBoughtController", AlreadyBoughtController)
 .service("ShoppingListCheckOffService", ShoppingListCheckOff);

 
ToBuyController.$inject= [ 'ShoppingListCheckOffService'];
 function ToBuyController( ShoppingListCheckOffService) {
 	var tbc= this;
 
 	tbc.items= ShoppingListCheckOffService.tobuy();
 	console.log(tbc.items);
 	
 	tbc.bought= function(itemIndex) {
 ShoppingListCheckOffService.removeandpush(itemIndex);
}
}

 AlreadyBoughtController.$inject= ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService) {
var abc= this;

 abc.boughtitems = ShoppingListCheckOffService.alreadybought();
 
 }

 function ShoppingListCheckOff() {
 	var service= this;
 	var bought= [];
 	var items= [ 
 		{name: "cookies", quantity: "10"},
 	{name: "chips", quantity: "2 bags"},
 	{name: "pan cakes", quantity: "2 bags"},
 	{name: "french toast", quantity: "3"},
 	{name: "mozarella", quantity: "4"}];
service.tobuy= function() {

 	return items;
 	}
 	
 	service.removeandpush= function(itemIndex) {
var item= items.splice(itemIndex, 1);
console.log(item);
bought.push(item);
console.log(bought);

 	}

 	service.alreadybought= function() {
 		return bought;
 	}
 }
})();