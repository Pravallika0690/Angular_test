(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

SignupService.$inject= ['$http'];
function SignupService($http) {
  var userList = this;
  var users= [];

   userList.getItems= function() {
    var resp= $http.get("https://pravallika-mod5.herokuapp.com/menu_items.json");
   return resp;
  };

  
  userList.getInfo= function() {
    return users;
  };

  userList.signupInfo = function (fname, lname, mail, phnnum, menunumber) {
    console.log("coming to service");
    var user= {
      fname: fname,
      lname: lname,
      mail: mail,
      phnnum: phnnum,
      menunumber: menunumber
    }
    users.push(user);
    console.log("from service"+users.fname);

  };

}



})();
