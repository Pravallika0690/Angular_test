(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('myInfo', {

      controller: 'MyinfoController',
      controllerAs: 'myInfo'
      // resolve: {
      //   userDetails: ['SignupService', function(SignupService) {
      //    // SignupService.signupInfo(fname, lname, mail, phnnum, menunumber);
      //    return SignupService.getInfo();
      //   }]
      // }
    })
    .state('mySignup', {
      controller: 'SignupController',
      controllerAs: 'userList'
      // resolve: {
      //  items:['SignupService', function(SignupService) {
      //   return SignupService.getItems(userList.menunumber);
      //  }] 
      // }

    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/public/signup/myinfo.html',
      controller: 'MyinfoController',
      controllerAs: 'myInfo',
      resolve : {
        userInfo: ['SignupService', function(SignupService) {
          return SignupService.getInfo();
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/signup/signup.html'
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
