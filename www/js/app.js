'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/employees', { templateUrl: 'partials/view.html', controller: 'EmployeeListCtrl' });
    $routeProvider.when('/employees/:employeeId', { templateUrl: 'partials/view-1.html', controller: 'EmployeeDetailCtrl' });
    $routeProvider.when('/employees/:employeeId/reports', { templateUrl: 'partials/view-2.html', controller: 'ReportListCtrl' });
    $routeProvider.otherwise({ redirectTo: '/employees' });
}]);