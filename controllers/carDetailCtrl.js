(function () {
    'use strict';
 
    var app = angular.module('jiffApp');
 
    app.controller('CarDetailCtrl', ['$scope', 'programs','$location','$routeParams',
        function ($scope, programs, $location, $routeParams) {

            var constructfunc = function () {
                console.log("constructer", $routeParams.vin);
            };

            constructfunc();     
            
            var getCarDetails = function () {
                var cars = programs.getCars();
                cars.then(function(result) {
                    console.log("data.cars", result.Response.VehicleSearch.Vehicles.Vehicle)  
                    $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
                    $scope.eachcar = $scope.cars.find((car) => {
                        return car.Vin = $routeParams.vin;
                    });
                    console.log("bc", $scope.eachcar);
            });
        };
        getCarDetails();
    }]);
}());