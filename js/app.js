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
        otherwise('/dashboard');
    }
]);
