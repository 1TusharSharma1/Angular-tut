myModule.filter("customFilter", function () {
    return function(age){
        if(age>21){
            return "Permissible To Drink";
        }
        else{
            return "Not Permissible To Drink";
        }
    }
});