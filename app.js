let myModule = angular.module('moduleName', []);


myModule.controller('myController', ['$scope', function($scope) {
    $scope.obj = [{
        name: 'Alice Doe',
        age: 25,

    },
    {
        name: 'Jane Doe',
        age: 26,

    },
    {
        name: 'Zayn Doe',
        age: 27,
    },
    {
        name: 'Shaun Doe',
        age: 28,
    }

];

}]);