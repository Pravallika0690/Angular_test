

(function() {
'use strict';

angular.module("data")
.controller('ItemsController', ItemsController);

// ItemsController.$inject= ['MenuData'];
// function ItemsController(MenuData) {
	ItemsController.$inject= ['category'];
function ItemsController(category) {
	var mainItemsList= this;
	console.log("items controller working");
	
	mainItemsList.$onInit= function() {
	
	mainItemsList.items=category.menu_items;


	}

}
})();