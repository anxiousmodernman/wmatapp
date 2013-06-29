angular.module('Wmatapp', ['ngResource']);

function WMATAController($scope, $resource) {

    $scope.items = new Worker('js/ajax.js');

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