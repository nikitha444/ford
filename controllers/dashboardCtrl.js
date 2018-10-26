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
 
    app.controller('DashboardCtrl', ['$scope', 'programs','$location','$routeParams',
        function ($scope, programs, $location, $routeParams) {

            // var constructfunc = function () {
            //     console.log("constructer");
            //     programs.getCars();
            // };

            var constructfunc = function () {
                console.log("constructer", $routeParams.color);
            };

            constructfunc();            
            $scope.name = "zdjn";
            var param1 = $routeParams.color;
         

        }
    ]);
 
 }());