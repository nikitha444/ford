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
            function ($scope) {
        $scope.name = "zdjn";
        var constructfunc = function () {
            console.log("constructer", $scope.name);
        };
        constructfunc();            
    }]);
}());