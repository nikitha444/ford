/*
 * This is a template for creating a service using angular module method. 
 * Use the example below to create services 
 *
 */

angular.module('programService', [])
.service('programs', ['$http', function ($http) {
    /*
     * Get list of all programs and sort them based on display_order
     * @return Promise object  
     */
    var getExtInt = function(){ 
    	return $http.get('http://wwwqa.servicesus.ford.com/inventory/FilterItems.json?make=Ford&model=Mustang&year=2017').then(function(res){
        return res.data;
        });
    }

    var getCars = function(){ 
    	return $http.get('http://wwwqa.servicesus.ford.com/inventory/Search.json?make=Ford&model=Mustang&year=2017&dealerPACode=05453;09158&postalCode=90210').then(function(res){
        console.log("bsjbd", res.data)
        return res.data;
        });
    }

    var getExtFilter = function(extColor){ 
    	return $http.get('http://wwwqa.servicesus.ford.com/inventory/Search.json?make=Ford&model=Mustang&year=2017&dealerPACode=05453;09158&postalCode=90210' + "&exteriorColor=" + extColor).then(function(res){
        console.log("result", res.data)
        return res.data;
        })
        .catch(function(err){
            console.log("error", err)
        });
    }

    var getIntFilter = function(intColor){ 
    	return $http.get('http://wwwqa.servicesus.ford.com/inventory/FilterItems.json?make=Ford&model=Mustang&year=2017' + "&interiorColor=" + intColor).then(function(res){
        return res.data;
        });
    }

    var getSortFilter = function(sortprice){ 
    	return $http.get('http://wwwqa.servicesus.ford.com/inventory/FilterItems.json?make=Ford&model=Mustang&year=2017' + "&sortBy=price" + "&sortDirection=" + sortprice).then(function(res){
        return res.data;
        });
    }

    return {
        getExtInt: getExtInt,
        getCars: getCars,
        getExtFilter: getExtFilter,
        getIntFilter: getIntFilter,
        getSortFilter: getSortFilter
    };
}]);

// angular.module('programServiceCars', [])
// .service('carsprogram', ['$http', function ($http) {
//     /*
//      * Get list of all programs and sort them based on display_order
//      * @return Promise object  
//      */
//     var getCars = function(){ 
//     	return $http.get('http://wwwqa.servicesus.ford.com/inventory/Search.json?make=Ford&model=Mustang&year=2017&dealerPACode=05453;09158&postalCode=90210').then(function(res){
//         console.log("bsjbd", res.data)
//         return res.data;
//         });
//     }
//     return {getCars: getCars};

// }]);

// angular.module('programServiceExterior', [])
// .service('exteriorprogram', ['$http', function ($http) {
//     /*
//      * Get list of all programs and sort them based on display_order
//      * @return Promise object  
//      */
//     var getExtFilter = function(extColor){ 
//     	return $http.get('http://wwwqa.servicesus.ford.com/inventory/Search.json?make=Ford&model=Mustang&year=2017&dealerPACode=05453;09158&postalCode=90210' + "&exteriorColor=" + extColor).then(function(res){
//         console.log("result", res.data)
//         return res.data;
//         })
//         .catch(function(err){
//             console.log("error", err)
//         });
//     }
//     return {getExtFilter: getExtFilter};

// }]);
// angular.module('programServiceInterior', [])
// .service('interiorprogram', ['$http', function ($http) {
//     /*
//      * Get list of all programs and sort them based on display_order
//      * @return Promise object  
//      */
//     var getIntFilter = function(intColor){ 
//     	return $http.get('http://wwwqa.servicesus.ford.com/inventory/FilterItems.json?make=Ford&model=Mustang&year=2017' + "&interiorColor=" + intColor).then(function(res){
//         return res.data;
//         });
//     }
//     return {getIntFilter: getIntFilter};

// }]);
// angular.module('programServiceSort', [])
// .service('sortprogram', ['$http', function ($http) {
//     /*
//      * Get list of all programs and sort them based on display_order
//      * @return Promise object  
//      */
//     var getSortFilter = function(sortprice){ 
//     	return $http.get('http://wwwqa.servicesus.ford.com/inventory/FilterItems.json?make=Ford&model=Mustang&year=2017' + "&sortBy=price" + "&sortDirection=" + sortprice).then(function(res){
//         return res.data;
//         });
//     }
//     return {getSortFilter: getSortFilter};

// }]);