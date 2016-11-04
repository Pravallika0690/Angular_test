

(function() {
'use strict';

angular.module("public")
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject= ['userInfo','SignupService', '$http'];
function MyinfoController(userInfo, SignupService, $http) {
	var myInfo= this;
	
	      myInfo.getInfo =userInfo;
	     
	     if(myInfo.getInfo[0]!== undefined || myInfo.getInfo!== '') {
	     myInfo.num= myInfo.getInfo[0].menunumber;
	     console.log(myInfo.num);
	     // console.log({{myInfo.getInfo.menunumber}});
	     $http.get("https://pravallika-mod5.herokuapp.com/menu_items/" +myInfo.num+ ".json").then(function(response) {
	     	myInfo.itemInfo= response.data;
	     });
	console.log(myInfo.itemInfo);
}
}
})();