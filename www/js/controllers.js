angular.module('myApp')

// Controller

.controller('VideosController', function($scope, $http, $log, VideosService) {

    $scope.isAndroid = function() {
        return ons.platform.isAndroid();
    }

    $scope.toolbarTitle = 'Search';
    $scope.updateToolbar = function(title) {
        $scope.toolbarTitle = title;
    }

    $scope.focusInput = function(platform) {
        document.getElementById(platform + '-search-input').focus();
    };

    $scope.blurInput = function(platform) {
        document.getElementById(platform + '-search-input').blur();
    };

    $scope.loading = false;

    $scope.loadMore = function(done) {
        $scope.search(false).then(done);
    };

});