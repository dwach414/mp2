
var imdbApp = angular.module('imdbApp', [
    'ngRoute',
    'imdbControllers'
]);

imdbApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/list', {
                templateUrl: './partials/list.html',
                controller: 'ImdbListCtrl'
            }).
            when('/list/:imdbID', {
                templateUrl: './partials/details.html',
                controller: 'ImdbDetailCtrl'
            }).
            otherwise({
                redirectTo: '/list'
            });
    }]);
