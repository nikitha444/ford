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
 
    app.controller('FordCtrl', ['$scope', 'programs', '$routeParams', '$location',
        function ($scope, programs, $routeParams, $location) {

            var getcolors = function () {
                console.log("constructer");
                var extint = programs.getExtInt();
                extint.then(function(result) {  
                    $scope.exterior = result.Response.FilterDefinitions.FilterDefinition[2].FilterItems.FilterItem;
                    console.log("data.name", $scope.exterior);
                    $scope.interior = result.Response.FilterDefinitions.FilterDefinition[3].FilterItems.FilterItem;
                 });
            };
            getcolors();
            var getallcars = function () {
                var cars = programs.getCars();
                cars.then(function(result) {
                    console.log("data.cars", result.Response.VehicleSearch.Vehicles.Vehicle)  
                    $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
            });
            };
            getallcars();  
            $scope.exteriorColorName= "";  
            $scope.interiorColorName= "";
            $scope.valuemin= "";
            $scope.valuemax= "";
            $scope.sortbyprice = "asc";
            $scope.$watch(function(scope) { return scope.cars },
             function() {}
            );
        $scope.onClickExterior= function (exColorName, exColorId) {
                $scope.exteriorColorName= exColorName;
                var extfilter = programs.getExtFilter(exColorId);
                extfilter.then(function(result) {  
                    if (result) {
                        console.log("excars", result.Response.VehicleSearch.Vehicles.Vehicle)
                        $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
                        $scope.$evalAsync(function () { 
                            $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
                         })
                        // $scope.$apply(function() {
                        //     $scope.cars = result.Response.VehicleSearch.Vehicles.Vehicle;
                        // });
                    }
            }).catch(function(err) {
                console.log("error", err)
            });
            };           
        $scope.onClickInterior = function (inColorName, inColorId) {
            $scope.interiorColorName = inColorName;
            var intfilter = interiorprogram.getIntFilter(inColorId);
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