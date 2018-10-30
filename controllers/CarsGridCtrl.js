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
 
<<<<<<< HEAD
    app.controller('CarsGridCtrl', ['$scope', 'carsprogram', '$location',
            function ($scope, carsprogram) {
                var constructfunc = function () {
                var cars = carsprogram.getCars();
                cars.then(function (result) {
                $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
            });
        };
=======
    app.controller('CarsGridCtrl', ['$scope', 'programs', '$location',
        function ($scope, programs, $location) {       
            var constructfunc = function () {
                var cars = programs.getCars();
                cars.then(function(result) {
                    console.log("data.cars", result.Response.VehicleSearch.Vehicles.Vehicle[0].ImageToken)  
                    $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
                 });
            };
>>>>>>> b9e5d912ac23672bec283fb6a1411e9b5392a715
            constructfunc();  
    }]);
}());