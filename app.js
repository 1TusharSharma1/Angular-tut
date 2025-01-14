let myModule = angular.module("moduleName", []);

myModule.controller("myController", [
  "$scope", "customService", function ($scope, customService) {
    $scope.changeName = function (name) {  
    
    $scope.output = customService.processString(name);
  }
}
]);
