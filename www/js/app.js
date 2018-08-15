var app = angular.module('myApp', ['onsen']);

// Run

app.run(function() {});

// Config

app.config(function($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

// Service

app.service('VideosService', ['$window', '$rootScope', '$log', function($window, $rootScope, $log) {

}]);