var jiffApp = angular.module('jiffApp', [
	"ngRoute",
  "dashboard",
  "footer",
  "ford",
  "carsgrid",
  "cardetails"
]); 

jiffApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/dashboard', {
          template: '<dashboard></dashboard>'
        }).
        when('/cardetails/:vin', {
          template: '<cardetails></cardetails>'
        }).
        when('/dashboard/:color', {
          template: '<dashboard></dashboard>'
        }).
        otherwise('/dashboard');
    }
]);
