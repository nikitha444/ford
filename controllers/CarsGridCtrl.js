(function () {
    'use strict';
    /*
     * @ngdoc function
     * @name allegrettocloudwebappApp.controller:UsersCtrl
     * @description
     * # UsersCtrl
     * Controller of the Users page
     */
 
    var app = angular.module('jiffApp');
 
    app.controller('CarsGridCtrl', ['$scope', 'carsprogram', '$location',
        function ($scope, carsprogram, $location) {       
            var constructfunc = function () {
                var cars = carsprogram.getCars();
                cars.then(function(result) {
                    console.log("data.cars", result.Response.VehicleSearch.Vehicles.Vehicle[0].ImageToken)  
                    $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
                 });
            };
            constructfunc();  
        }
    ]);
 
 }());