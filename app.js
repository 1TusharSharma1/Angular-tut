let myModule = angular.module('moduleName', []);


myModule.controller('myController', [$scope, function($scope) { //helps protect variable names from minification
    $scope.message = 'Hello, Angular!';
    $scope.anotherMessage = 'Message2';

}]);