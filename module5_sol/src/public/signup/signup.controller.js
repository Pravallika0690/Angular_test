

(function() {
'use strict';

angular.module("public")
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
	console.log("coming to sign up controller");
	var userList= this;
	
    userList.getItems= function() {
     	console.log(userList.menunumber);
     	SignupService.getItems()
     	.then(function(response) {
			 userList.getItems=response.data;
			console.log(response.data);
		})
	
}
		 
    userList.signupInfo= function() {
	SignupService.signupInfo(userList.fname, userList.lname, userList.mail, userList.phnnum, userList.menunumber);
	     // userList.getInfo =SignupService.getInfo();
	     // console.log("getinfo from signup controller"+userList.getInfo);
	}

// userList.getItems=  SignupService.getItems(userList.menunumber);
		
}
})();