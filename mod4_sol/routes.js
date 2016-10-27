
(function() {
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject= ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'home.template.html'
	})
	 .state('itemsList', {
	 	url: '/items-list/{categoryId}',
	 	templateUrl: 'items.template.html',
	 	controller: 'ItemsController as mainItemsList',
	 	resolve: {
	 		category: ['$stateParams','MenuData', function($stateParams, MenuData) {
console.log($stateParams.categoryId);
            return MenuData.getItemsForCategory($stateParams.categoryId)
            .then(function(response) {
             
            	return response.data;
            });
	 	}]
	 }
	 })
	.state('mainCategoriesList', {
		url: '/main-categories-list',
		templateUrl: 'main-categories.template.html'
	})
	// 
	

}

})();