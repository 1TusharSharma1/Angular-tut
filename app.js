let myModule = angular.module('moduleName', []);


myModule.controller('myController', function($scope) {
    $scope.message = 'Hello, Angular!';
    $scope.anotherMessage = 'Message2';
});