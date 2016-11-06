

(function() {
'use strict';

angular.module("public")
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['info'];
	function MyinfoController(info)
	{
		var myInfoCtrl = this;
		if(info&&info!=null&&info!='')
			{
			myInfoCtrl.signup = false;
			myInfoCtrl.info = info;

			}
		else{
			myInfoCtrl.signup = true;
		}
		
	}

})();