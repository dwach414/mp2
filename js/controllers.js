//var demoApp = angular.module('mp2', []);

// demoApp.controller('demoController', ['$scope', '$http', function($scope, $http) {
//   $http.get('public/data/cs498rk.json').success(function(data) {
//     $scope.courseInfo = data;
//     $scope.artistOrder = 'name';
//   });
// }]);

imdbControllers = angular.module('imdbControllers', []);

imdbControllers.controller('ImdbListCtrl', function ($scope, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
        $scope.movies = data;
    });

    $scope.orderProp = 'rank';
});

imdbControllers.controller('ImdbDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        var curPhone;
        $http.get('./data/imdb250.json').success(function(data) {
            console.log(data[0]);

            for (var i = 0; i < data.length; i++){

                   if(data[i]['imdbID'] == $routeParams.imdbID){
                       $scope.movie = data[i];
                       if(i == 0){
                           $scope.nextMovie = data[i+1]["imdbID"];
                           $scope.prevMovie = data[data.length - 1]["imdbID"];
                       } else if(i == data.length -1){
                           $scope.nextMovie = data[0]["imdbID"];
                           $scope.prevMovie = data[i - 1]["imdbID"];
                       } else {
                           $scope.nextMovie = data[i+1]["imdbID"];
                           $scope.prevMovie = data[i-1]["imdbID"];
                       }
                   }
            }
        });


    }]);