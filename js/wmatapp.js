angular.module('wmatapp', ['ngResource'], function () {

}).controller('WMATAController', function ($scope) {

        var wmata = $resource('http://api.wmata.com/Bus.svc/Routes',
            {api_key:'azcsgfdx44fzqenbe6zuqqmk'},
            {get:{method:'GET'}});

        var myData = wmata.get()



    })





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

//
//function PlaylistController($scope, $http) {
//	$http.get('cgi-bin/getData.py', {
//	  params : {
//		url : "http://api.wmata.com/Bus.svc/json/jRoutes",
//          api_key: "azcsgfdx44fzqenbe6zuqqmk"
//	  }
//	}).success(function(data, status, headers, config) {
//		// Use X2JS to convert XML to JSON
//		var json = x2js.xml_str2json(data);
//		console.log(json.Routes.Name);
//		$scope.items = json.Routes.Name;
//	}).error(function(data, status, headers, config) {
//		alert('Http Error');
//	});
//
//
//    $scope.getProducts = function(){
//        $.ajax({
//            type : 'POST',
//            dataType : 'json',
//            contentType: "application/json; charset=utf-8",
//            url: 'http://api.wmata.com/Bus.svc/json/jRoutes',
//            data: {},
//            success: function(data){
//                $scope.$apply(function(){ //necessary to $apply the changes
//                    $scope.productList = data;
//                    $scope.otherValue = new Date().toGMTString();
//                });
//            },
//            error : function(xhr, ajaxOptions, thrownError) {
//                alert( "Error: " + xhr.responseText + "\n" + thrownError );
//            }
//        });
//    };
//
//}
