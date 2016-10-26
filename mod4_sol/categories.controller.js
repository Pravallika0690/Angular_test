

(function() {
'use strict';

angular.module("data")
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject= ['MenuData'];
function CategoriesController(MenuData) {
	var mainCategoriesList= this;
	
	mainCategoriesList.$onInit= function() {
	 MenuData.getAllCategories().then(function(resp) {
		mainCategoriesList.category=resp.data;
		console.log(mainCategoriesList.category);
	});
	}
}
})();