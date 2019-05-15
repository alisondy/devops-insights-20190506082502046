var ConsoleModule = angular.module('ConsoleModule', ['ngRoute']);

ConsoleModule.config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider) {
        $routeProvider.when('/', {
            templateUrl: '/partials/Byzip.html',
            controller: 'wcontroller',
            controllerAs: 'wcontroller'
        });
    }]);

ConsoleModule.controller('wcontroller', ['$scope', '$http', '$routeParams', '$timeout', '$sce',
    function ($scope, $http, $routeParams, $timeout, $sce) {

        $scope.somemessage = "Some weather";
        $scope.zip1City = "";
        $scope.zip1Weather = "";

        $scope.zip = function (which) {

            var data = "";

            switch (which) {
                case 1:
                    data = $scope.zip1m;
                    break;
                case 2:
                    data = $scope.zip2m;
                    break;
                case 3:
                    data = $scope.zip3m;
                    break;
                case 4:
                    data = $scope.zip4m;
                    break;
            }
            if (data.length !== 0) {
                $http({
                    method: "GET",
                    url: '/api/v1/getWeather?city=' + data
                }).then(function (response) {
                    switch (which) {
                        case 1:
                            $scope.zip1City = response.data.city;
                            $scope.zip1Weather = response.data.weather;
                            break;
                        case 2:
                            $scope.zip2City = response.data.city;
                            $scope.zip2Weather = response.data.weather;
                            break;
                        case 3:
                            $scope.zip3City = response.data.city;
                            $scope.zip3Weather = response.data.weather;
                            break;
                        case 4:
                            $scope.zip4City = response.data.city;
                            $scope.zip4Weather = response.data.weather;
                            break;
                    }
                });
            }
        };

    }]);
