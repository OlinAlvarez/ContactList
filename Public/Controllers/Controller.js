var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope','$http',
    function($scope, $http){
        console.log("message from controller");   
        
        $http.get('/contactlist').then(function(response){
                console.log("got data");
                console.log(response.data);
                $scope.contactlist = response.data;
            });

}]);
