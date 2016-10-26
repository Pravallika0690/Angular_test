

(function() {
'use strict';

angular.module("data")
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject= ['MenuData'];
function CategoriesController(MenuData) {
	var mainCategoriesList= this;
	//console.log("isolate controller working");
	
	mainCategoriesList.$onInit= function() {
	 MenuData.getAllCategories().then(function(resp) {
		mainCategoriesList.category=resp.data;
		console.log(mainCategoriesList.category);
	});


	}

// 	mainCategoriesList.logMenuItems= function(shortName) {
//  	var $ctrl=this;
// 		console.log('ng-click working');
// 	var promise2= MenuData.getItemsForCategory(shortName);
// 	promise2.then(function(response) {
// 		mainCategoriesList.items=response.data;
// 		console.log(response.data);
// 		//console.log($ctrl.onViewChange);
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	})
// }

}
})();