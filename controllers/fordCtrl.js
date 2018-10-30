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
 
    app.controller('FordCtrl', ['$scope', 'programs', 'carsprogram', 'exteriorprogram', 'interiorprogram', 'sortprogram', '$routeParams', '$location',
        function ($scope, programs, carsprogram, exteriorprogram, interiorprogram, sortprogram, $routeParams, $location) {
        var getcolors = function () {
            var extint = programs.getExtInt();
            extint.then(function (result) {  
                $scope.exterior = result.Response.FilterDefinitions.FilterDefinition[2].FilterItems.FilterItem;
                $scope.interior = result.Response.FilterDefinitions.FilterDefinition[3].FilterItems.FilterItem;
            });
        };
        getcolors();
        var getallcars = function () {
            var cars = carsprogram.getCars();
            cars.then(function (result) {
                $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
            });
        };
        getallcars();  
        $scope.exteriorColorName = "";  
        $scope.interiorColorName = "";
        $scope.valuemin = "";
        $scope.valuemax = "";
        $scope.sortbyprice = "asc";
        $scope.onClickExterior = function (exColorName) {
            $scope.exteriorColorName = exColorName;
            var extfilter = carsprogram.getCars();
            extfilter.then(function (result) {  
                $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
                $scope.cars = $scope.cars.find((car) => {
                    console.log("exxx", $scope.exteriorColorName.includes(car.NormalizeTrimColor));
                    return $scope.exteriorColorName.includes(car.NormalizeTrimColor);
                });
                console.log("carsssss", $scope.cars)
            }).catch(function (err){
                console.log("error", err);
            });
        };
        $scope.onClickInterior = function (inColorName) {
            $scope.interiorColorName = inColorName;
            var intfilter = interiorprogram.getIntFilter($scope.interiorColorName);
            intfilter.then(function (result) {  
                $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
            }).catch(function(err) {
                console.log("error", err);
            });
        };
        $scope.valueMaxChange = function (valmax) {
            $scope.valuemax = valmax;
        };
        $scope.valueMinChange = function (valmin) {
            $scope.valuemin = valmin;
        };
        $scope.valuesortprice = function (valsortprice) {
            if (valsortprice == 'low') {
                $scope.sortbyprice = 'asc';
            } else {
                $scope.sortbyprice = 'desc';
            }
            var sortpricefilter = sortprogram.getSortFilter($scope.sortbyprice);
            sortpricefilter.then(function (result) {
                $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
            });
        };
        $scope.viewcardetails = function (car) {
            $scope.eachcar = car;
            $location.path("/cardetails/" + car.Vin);
        };
    }]);
}());