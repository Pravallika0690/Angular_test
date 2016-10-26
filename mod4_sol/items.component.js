angular.module('data')
.component('itemsList', {
	templateUrl: 'items.template.html',
	//controller: ItemsComponentController,
	 bindings: {
	 	items: '<'
	// 	onPress: '<'
	 }

});

ItemsComponentController.$inject= ['MenuData']
function ItemsComponentController(MenuData) {
	var $ctrl= this;
	//console.log($ctrl.onViewChange);
	// MenuData.getItemsForCategory(shortName).then(function(response) {
	// 	$ctrl.itemscom=response.data;
	// })
}