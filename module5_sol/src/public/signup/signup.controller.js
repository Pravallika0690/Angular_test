

(function() {
'use strict';

angular.module("public")
.controller('SignupController', SignupController);

SignupController.$inject = ['userInfoService','MenuService', 'ApiPath'];
function SignupController(userInfoService, MenuService, ApiPath) {
	console.log("coming to sign up controller");
	var userList= this;
	
	userList.user= {fname:'', lname: '', mail: '', phnnum: '', menunumber:'', preference: {}};
	
    

    userList.setPreferences= function() {
    	console.log("coming to setPreferences");
    	MenuService.getMenuItem(userList.user.menunumber).then(function(response) {
    		userList.user.preference= response.data;
    		console.log(userList.user.preference);
    		userList.user.imgsrc=  ApiPath+'/images/'+userList.user.menunumber+'.jpg';
    		
    		userInfoService.setUserInfo(userList.user);
    	   
    		userList.success=true;
    		
    	}, function() {userList.menuInvalid= true;})
   
      
    };

// userList.getPreferences = function(){
//     	console.log(SignupService.getUserInfo());
//         return SignupService.getUserInfo();
//     };

    // userList.isregistered= function() {
    // 	var login= false;
    // 	var obj= userList.getPreferences;
    // 	for(var key in obj) {
    // 		if(obj.hasOwnProperty(key))
    // 			login=true;
    // 	}
    // 	return login;
    // }
		
}
})();