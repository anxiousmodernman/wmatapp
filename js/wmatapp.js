angular.module('wmatapp', ['ngResource']);

//function WMATAController($scope, $resource) {
//    $scope.wmata = $resource('http://api.wmata.com/Bus.svc/json/jRoutes',
//        {api_key:'azcsgfdx44fzqenbe6zuqqmk',
//            callback:'JSON_CALLBACK'},
//        {get:{method:'JSONP'}});
//
//    $scope.getRoutes = function () {  // use globally bound $scope
//        $scope.routeResults =          // variables in these methods
//        	$scope.wmata.get();
//        console.log($scope.routeResults);
//    };
//
//    // $scope.searchTerm = "jackson";  // todo initialize how?
//    $scope.getRoutes();
//}  // end controller

//function WMATAController($scope, $http) {
//
//	$http.jsonp(
//		'http://api.wmata.com/Bus.svc/json/jRoutes',
//	 {
//		params : {
//			api_key : 'azcsgfdx44fzqenbe6zuqqmk',
//			format : 'json',
//			callback : 'JSON_CALLBACK'
//		}
//	 }).success(function(data, status, headers, config) {
//		  console.log(data.items);
//		  $scope.items = data.items;
//	    });
//}


function PlaylistController($scope, $http) {
	$http.get('cgi-bin/getData.py', {
	  params : {
		url : "http://api.wmata.com/Bus.svc/json/jRoutes",
          api_key: "azcsgfdx44fzqenbe6zuqqmk"
	  }
	}).success(function(data, status, headers, config) {
		// Use X2JS to convert XML to JSON
		var json = x2js.xml_str2json(data);
		console.log(json.Routes.Name);
		$scope.items = json.Routes.Name;
	}).error(function(data, status, headers, config) {
		alert('Http Error');
	});
}