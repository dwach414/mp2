

angular.module('imdbAnimations', ['ngAnimate']);


var imdbApp = angular.module('imdbApp', [
    'ngRoute',
    'imdbAnimations',
    'imdbControllers',
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
            when('/gallery',{
                templateUrl: './partials/gallery.html',
                controller: 'ImdbGalleryCtrl'
            }).
            otherwise({
                redirectTo: '/list'
            });
    }]);

