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
            function ($scope, carsprogram) {
                var constructfunc = function () {
                var cars = carsprogram.getCars();
                cars.then(function (result) {
                $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
            });
        };
            constructfunc();  
    }]);
}());