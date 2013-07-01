var wmatapp = angular.module('wmatapp', ['ngResource']);


wmatapp.controller('WMATAController', ['$scope', '$http', function($scope, $http) {

    $scope.stopIdState = 00000000;
    $scope.myDashboard = [];

    $scope.getBusRoutes = function () {
        $scope.API_KEY = "azcsgfdx44fzqenbe6zuqqmk";
        var URL = "http://api.wmata.com/Bus.svc/json/jRoutes?api_key=" + $scope.API_KEY;

        $http.jsonp(URL,
            {params:{
                callback:'JSON_CALLBACK'
            }}).success(function(data, status, headers, config) {
                console.log(data);
                $scope.busRoutes = data.Routes;
            }
        )
    }//end getBusRoutes

    $scope.getScheduleByStop = function (StopID) {

        console.log('Route pass in = ' + StopID)
        var dateString = "2013-06-30";  //todo remove hardcoded date
        var URL = "http://api.wmata.com/NextBusService.svc/json/jPredictions?api_key=" + $scope.API_KEY +
            "&StopID="+StopID;//+"&date="+dateString;
        $scope.stopIdState = StopID;  // for saving to local

        $http.jsonp(URL,
            {params:{
                callback:'JSON_CALLBACK'
            }}).success(function(data, status, headers, config) {
                console.log("Stop details");
                console.log(data);
                $scope.stopScheduleArrivals = data.Predictions;
            }
        )
    }

    $scope.getLocation = function () {

        var options = {
            enableHighAccuracy : true,
            timeout : 50000,
            maximumAge : 0
        };

        navigator.geolocation.getCurrentPosition(
            $scope.locationSuccess, $scope.locationError, options);

//        console.log('Location lat: ' + navigator.coords.latitude)
    };

    $scope.locationSuccess = function(position) {
        $scope.lat = position.coords.latitude;
        $scope.lon = position.coords.longitude;
        console.log($scope.lat);
        console.log($scope.lon);

        $scope.getStops($scope.lat, $scope.lon);
    };

    $scope.getStops = function(lat, lon) {

        var URL = "http://api.wmata.com/Bus.svc/json/jStops?api_key=" +
            $scope.API_KEY + "&lat="+lat+"&lon="+lon+"&radius=500";

        $http.jsonp(URL,
            {params:{
                callback:'JSON_CALLBACK'
            }}).success(function(data, status, headers, config) {
                console.log("stop data below:")
                console.log(data);
                $scope.busStops = data.Stops;
            }
        )
    };

    $scope.locationError = function(position) {
        alert('Location tracking has failed. Check your browser settings.')
    };

    $scope.addToDash = function(stopId) {

        console.log("adding to dash")
        console.log(stopId);
        if ($scope.myDashboard.indexOf(stopId) == -1) {
            $scope.myDashboard.push(stopId);
        }

    };  // end addToLocal

    $scope.logMyDash = function () {
        console.log($scope.myDashboard);
    }

    $scope.clearDash = function () {
        $scope.myDashboard = [];
        window.localStorage.clear();
    }

    $scope.saveDashLocally = function () {
        window.localStorage.setItem("myLocalDash", JSON.stringify($scope.myDashboard));
        // { myLocalDash: ["id1", "id2", etc...]}
    }

    $scope.loadFromLocal = function () {
        // todo This function breaks myDashboard right now

        if (window.localStorage.hasOwnProperty("myLocalDash")) {
            $scope.myDashboard = JSON.parse(
                window.localStorage.getItem("senatorListLocal"));
            console.log("Local data retrieved.")
        } else {
            console.log("No local data found property myLocalDash")
//                $scope.myDashboard = [];
        }
    }

    $scope.viewStopOnMap = function (lat, lon, name) {  // todo view whole bus route

        console.log('Route pass in = ' + StopID)
        var dateString = "2013-06-30";  //todo remove hardcoded date
        var URL = "http://api.wmata.com/Bus.svc/json/jRouteDetails?routeId=" + routeId +
            "&api_key=" + $scope.API_KEY;
        $scope.stopIdState = StopID;  // for saving to local

        $http.jsonp(URL,
            {params:{
                callback:'JSON_CALLBACK'
            }}).success(function(data, status, headers, config) {
                console.log("Stop details");
                console.log(data);
                $scope.routeCoordinates = data.Direction0.Shape;
            }
        )
    }

    $scope.viewRouteOnMap = function (routeId) {  // todo view whole bus route

        console.log('Route pass in = ' + StopID)
        var dateString = "2013-06-30";  //todo remove hardcoded date
        var URL = "http://api.wmata.com/Bus.svc/json/jRouteDetails?routeId=" + routeId +
            "&api_key=" + $scope.API_KEY;
        $scope.stopIdState = StopID;  // for saving to local

        $http.jsonp(URL,
            {params:{
                callback:'JSON_CALLBACK'
            }}).success(function(data, status, headers, config) {
                console.log("Stop details");
                console.log(data);
                $scope.routeCoordinates = data.Direction0.Shape;
            }
        )
    }

    $scope.drawGoogleMap = function (lat, lon) {

        var gcoordinates = new google.maps.LatLng(lat, lon);

        var opts = { zoom: 15, center: gcoordinates,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.googleMap = new google.maps.Map(
            document.getElementById("mapDiv"), opts);

        var marker = new google.maps.Marker({
            position: gcoordinates, map: $scope.googleMap,
            title: "Current Location"
        })
    }


}]); // end controller declaration

wmatapp.directive('gmap', function () {
    
})



