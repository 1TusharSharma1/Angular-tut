let myModule = angular.module("moduleName", []);

myModule.controller("myController", [
  "$scope", function ($scope) {
    $scope.obj= [{
      name: "John",
      age: 25,
      address: "New York"
    },
    {
      name: "Peter",
      age: 30,
      address: "California"
    },
    {
      name: "Sam",
      age: 35,
      address: "Texas"
    },
    {
      name: "Ryan",
      age: 20,
      address: "Florida"
    }
  ,{
    name: "Mike",
    age: 18,
    address: "Washington"
  }];
}
]);
