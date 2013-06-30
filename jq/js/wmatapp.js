angular.module('Wmatapp', ['ngResource']);


var busRoutes = [];


function WMATAController($scope, $http) {

    $scope.busRoutes = function () {
        var API_KEY = "azcsgfdx44fzqenbe6zuqqmk";
        var URL = "http://api.wmata.com/Bus.svc/json/jRoutes?api_key=" + API_KEY;


        $http.jsonp(URL,
            {params:{
                callback:'JSON_CALLBACK'

            }}).success(function(data, status, headers, config) {
                console.log(data);
                $scope.stuff = data.Routes;

            }
        )


    }//end busRoutes
    //$scope.$apply()

//    $scope.busItems = $scope.busRoutes();




//$scope.buses = busRoutes

}




// old version of app
//
//angular.module('Wmatapp', ['ngResource']);
//
//function WMATAController($scope, $resource) {
//
//    var API_KEY = "azcsgfdx44fzqenbe6zuqqmk";
//    var URL = "http://api.wmata.com/Bus.svc/json/jRoutes?api_key=" + API_KEY;
//    console.log(URL);
//
//    $scope.myRoutes = $resource(
//        'http://api.wmata.com/Bus.svc/json/:action',
//        {
//            action:'jRoutes',
//            api_key: 'azcsgfdx44fzqenbe6zuqqmk',
//            transformResponse: function(resp) {
//                alert(resp);
//            }
//        },
//        {lll: {method:'JSON'}});
//
//    $scope.getRoutes = function () {
//        $scope.routeResult =
//            $scope.myRoutes.lll();
////        console.log($scope.routeResult);
//    }
//
//    $scope.getRoutes();
//
//
//}