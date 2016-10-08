 (function() {
var lc= angular.module("LunchCheck", []);
lc.controller("LunchCheckController", ["$scope", function($scope) {
 
 $scope.checkItems= function() {

if($scope.input_elem=='' || $scope.input_elem== undefined) {
	$scope.showme="Please enter items";
	$scope.turnRed();
}
else {
      $scope.string1= splitString($scope.input_elem);
      var len=$scope.string1.length;
       if(len<=3) {
 	        $scope.showme= "Enjoy!";
 	        $scope.turnGreen();
         } 
        else if(len>=4) {
 	        $scope.showme= "Too much!";
 	        $scope.turnGreen();
         }
     }
}

$scope.turnRed= function() {
	 $scope.customStyle = {"color":"red"};
   $scope.customStyleText={"border":"1px solid red"};
}

$scope.turnGreen= function() {
	 $scope.customStyle = {"color":"green"};
   $scope.customStyleText={"border":"1px solid green"};
}

function splitString(stringToSplit) {
	var string= stringToSplit.split(',');
	return string;
}
}])
})();