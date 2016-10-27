angular.module('data')
.service('MenuData', MenuData);

MenuData.$inject= ['$http'];

function MenuData($http) {
	var menu= this;
	menu.getAllCategories = function() {
var resp= $http({

	method: "GET",
url: "https://davids-restaurant.herokuapp.com/categories.json"

})
//console.log(resp);
return resp;
	}

	menu.getItemsForCategory= function(categoryShortName) {
		var items= $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
			params: {
				category: categoryShortName
			}
			
		})
		//console.log(items);
return items;
	}

}