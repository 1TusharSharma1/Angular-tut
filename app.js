let myModule = angular.module("moduleName", []);

myModule.controller("myController", [
  "$scope",
  function ($scope) {
    $scope.obj = [
      {
        name: "Alice Doe",
        age: 25,
        available: true,
      },
      {
        name: "Jane Doe",
        age: 26,
        available: true,
      },
      {
        name: "Zayn Doe",
        age: 27,
        available: true,
      },
      {
        name: "Shaun Doe",
        age: 28,
        available: false,
      },
    ];
  },
]);
