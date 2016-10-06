(function() {
var lc= angular.module("LunchCheck", []);
lc.controller("LunchCheckController", ["$scope", function($scope) {
 $scope.splitString = function(stringToSplit, separator) {

 $scope.arrayOfStrings = stringToSplit.split(separator);

 console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + $scope.arrayOfStrings.length + ' elements: ' + $scope.arrayOfStrings.join(' / '));

 }
var comma= ',';


}])
})();