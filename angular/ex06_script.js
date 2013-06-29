angular.module('ITunes', ['ngResource', 'myFilters']);

function RTMController($scope, $resource) {
    $scope.rtm = $resource('https://itunes.apple.com/:action',
        {api_key:'f2fffd49cbac819ff5588b82bdeded43',
            callback:'JSON_CALLBACK'},
        {get:{method:''}});

    $scope.doSearch = function () {
        $scope.iTunesResult = 
        	$scope.iTunes.get({term:$scope.searchTerm});
        console.log($scope.iTunesResult);
    };
    
    $scope.searchTerm = "jackson";
    $scope.doSearch();
}

