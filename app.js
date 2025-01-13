let myModule = angular.module("moduleName", []);

myModule.controller("myController", [
  "$scope", function ($scope) {
    $scope.changeName = function (name) {  
      if(!name){
        return;
      }
      var output =" ";
      for(let i = 0; i < name.length;i++){
        if(i> 0 && name[i] == name[i].toUpperCase()){
          output +=" ";
      }
      output += name[i];
    }
    $scope.output = output;
  }
}
]);
