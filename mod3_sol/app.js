
(function() {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController )
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems);

	NarrowItDownController.$inject= ['$scope','MenuSearchService'];
	function NarrowItDownController($scope, MenuSearchService) {
var narrowItDown= this;
var searchterm= narrowItDown.searchterm;

narrowItDown.clicked= function(searchterm) {
	console.log("click working");
	//console.log(searchterm);
	if($scope.searchterm=="" || $scope.searchterm == undefined) {
$scope.message= "Found Nothing"
	}
else $scope.message= "";
var promise= MenuSearchService.getMatchedMenuItems(searchterm);
console.log(promise);
promise.then(function(response) {
	narrowItDown.found= response;
	console.log("lets see "+ narrowItDown.found);
	
})
.catch(function(error) {

 console.log("something terribly went wrong");
 	});
 }
 narrowItDown.ItemRemoved= function(itemIndex) {

 
 narrowItDown.found.splice(itemIndex, 1);
}
}

MenuSearchService.$inject= ['$http', '$q'];
	function MenuSearchService($http, $q) {
		var service= this;
var foundItems= [];
var match;

		service.getMatchedMenuItems= function(searchTerm) {
			var deferred= $q.defer();
			console.log(searchTerm);
		return $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/menu_items.json")

			})
			.then(function (result) {
				
for(match=0; match<result.data.menu_items.length; match++) {
var description= {
"matchitems": result.data.menu_items[match]
	 }
if(result.data.menu_items[match].description.indexOf(searchTerm) !== -1) {
	console.log(result.data.menu_items[match].description);
	 
deferred.resolve(foundItems.push(description));

}
}
console.log(searchTerm);
console.log(foundItems);
return foundItems;
})			

return deferred.promise;
		}
	}
function FoundItems() {
	var ddo= {
		restrict: 'E',
		templateUrl: 'foundItems.html',
		scope: {
			onRemove: '&',
			mylist: '<myList'
		},
		 controller: ListDirectiveController,
		 controllerAs: 'myCtrl',
		 bindToController: true
	}
	return ddo;
}

function ListDirectiveController() {
	var list= this;

}

})();