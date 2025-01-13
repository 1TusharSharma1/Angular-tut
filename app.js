let myModule = angular.module("moduleName", []);
myModule.directive("customDirective", function () {

  function customFunction($scope, element, attrs) {
    $scope.text = "Hello World";
    $scope.changeTxt = function(newTxt) {
      $scope.text = newTxt;

    } 
    }
    return {
      restrict: "E",
      scope : {},
      template: "<h1 ng-click='changeTxt(\"Custom Directives working fine!!!\")'>{{text}}</h1>",
      link: customFunction
  }
});
myModule.controller("myController", [
  "$scope", function ($scope) {
    $scope.obj={}
}
]);
