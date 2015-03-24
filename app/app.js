'use strict';

// Declare app level module which depends on views, and components
angular.module('Antoine_Lucas_CV', [
    'ngRoute',
    'Antoine_Lucas_CV.pro',
    'Antoine_Lucas_CV.education',
    'Antoine_Lucas_CV.portfolio',
    'Antoine_Lucas_CV.service',
    'ngMaterial',
    'ngAnimate',
    'angularSlideables',
    'unsafeHtml',
    'ngSlider',
    'angular-flippy'
])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/AntoineLucas', {
                    templateUrl: 'views/menu.html',
                    controller: 'AppCtrl'
                }).otherwise({redirectTo: '/AntoineLucas'});
            }])
        .controller("AppCtrl", function ($scope, $timeout, $mdSidenav, $log) {
            $scope.title1 = 'Button';
            $scope.title4 = 'Warn';
            $scope.isDisabled = true;
            $scope.googleUrl = 'http://google.com';

            $scope.toggleLeft = function () {
                $mdSidenav('left').toggle()
                        .then(function () {
                            $log.debug("toggle left is done");
                        });
            };

            $scope.close = function () {
                $mdSidenav('left').close()
                        .then(function () {
                            $log.debug("close LEFT is done");
                        });
            };
        });

