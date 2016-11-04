(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  var users= [];

  service.signupInfo = function (fname, lname, mail, phnnum, menunumber) {
    var user= {
      fname: fname,
      lname: lname,
      mail: mail,
      phnnum: phnnum,
      menunumber: menunumber

    }
    users.push(user);

  };

  service.getInfo= function() {
    return users;
  }

}



})();
