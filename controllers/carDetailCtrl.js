(function () {
    'use strict';
 
    var app = angular.module('jiffApp');
 
    app.controller('CarDetailCtrl', ['$scope', 'carsprogram','$location','$routeParams',
        function ($scope, carsprogram, $location, $routeParams) {

        var constructfunc = function () {
            console.log("constructer", $routeParams.vin);
        };
        constructfunc();     
        var getCarDetails = function () {
            var cars = carsprogram.getCars();
            cars.then(function(result) {
                $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
                $scope.eachcar = $scope.cars.find((car) => {
                    return car.Vin = $routeParams.vin;
                });
                console.log($scope.eachcar);
            });
        };
        getCarDetails();
    }]);
}());