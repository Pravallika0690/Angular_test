'use strict';

angular.module('data')
.component('categoriesList', {

templateUrl: 'categories.template.html',
// controller: CategoriesComponentController,
bindings: {
	category: '<',
	onViewChange: '&',
	 items: '@items'

}
});


CategoriesComponentController.$inject= ['MenuData'];

function CategoriesComponentController(MenuData) {
	var $ctrl= this;
console.log($ctrl.category);
 	$ctrl.containsItems= function() {
		if($ctrl.category!= undefined) {
 		var items= $ctrl.category;
 		console.log("No of items" +items.length);
 		return items.length>0;

 	}

 }
 var promise1= MenuData.getAllCategories();
	promise1.then(function(resp) {
		$ctrl.getAllCategories=resp.data;
		console.log(cc.getAllCategories);
	})

 $ctrl.logMenuItems= function(shortName) {
 	var $ctrl=this;
		console.log('ng-click working');
	var promise2= MenuData.getItemsForCategory(shortName);
	promise2.then(function(response) {
		$ctrl.gotitems=response.data;
		console.log(response.data);
		//console.log($ctrl.onViewChange);
	})
	.catch(function(error) {
		console.log(error);
	})
}
 }