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
    	return $http.get('http://wwwqa.servicesus.ford.com/inventory/Search.json?make=Ford&model=F-150;Fiesta;Mustang;Fusion;Transit&year=2017&dealerPACode=05453;09158&postalCode=90210').then(function(res){
        console.log("bsjbd", res.data)
        return res.data;
        });
    }

    var getExtFilter = function(extColor){ 
        console.log("ext", extColor)
    	return $http.get('http://servicesdev.forddirect.fordvehicles.com/inventory/Search.json?make=Ford&model=Mustang&year=2017&dealerPACode=05453;09158&postalCode=90210' + "&exteriorColor=" + extColor).then(function(res){
        return res.data;
        })
        .catch(function(err){
            console.log("error", err)
        });
    }

    var getIntFilter = function(intColor){ 
    	return $http.get('http://servicesdev.forddirect.fordvehicles.com/inventory/Search.json?make=Ford&model=Mustang&year=2017&dealerPACode=05453;09158&postalCode=90210' + "&interiorColor=" + intColor).then(function(res){
        return res.data;
        });
    }

    var getSortFilter = function(sortprice){ 
    	return $http.get('http://servicesdev.forddirect.fordvehicles.com/inventory/Search.json?make=Ford&model=Mustang&year=2017&dealerPACode=05453;09158&postalCode=90210' + "&sortBy=price" + "&sortDirection=" + sortprice).then(function(res){
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
