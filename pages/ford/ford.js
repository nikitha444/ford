angular.module('ford',['programService', 'programServiceCars', 'programServiceExterior', 'programServiceInterior', 'programServiceSort'])
.component('ford', {
	templateUrl: "pages/ford/ford.html",
	controller: "FordCtrl"
}); 