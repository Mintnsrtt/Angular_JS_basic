var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.fName="Mint";
    $scope.lName="Nisarat";
});

app.directive("colortext",function(){
    return {
        template:"<h1 style='font-family:tahoma;color:red'>NISARAT PHONTUSANG<BR><small>Mint</small></h1>"
    }
});