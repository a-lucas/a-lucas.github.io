'use strict';

// Declare app level module which depends on views, and components
angular.module('Antoine_Lucas_CV', [
    'ngRoute',
    'Antoine_Lucas_CV.pro',
    'Antoine_Lucas_CV.education',
    'Antoine_Lucas_CV.portfolio',
    'Antoine_Lucas_CV.service',
    'Antoine_Lucas_CV.skills',
    'Antoine_Lucas_CV.contact',
    'Antoine_Lucas_CV.menu',
    'ngMaterial',
    'ngAnimate',
    'angularSlideables',
    'unsafeHtml',
    'ngSlider',
    'angular-flippy',
    'duScroll',
    'angularScrollParralax',
    'ngTouch'
])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/AntoineLucas', {
                    templateUrl: 'views/menu.html',
                    controller: 'AppCtrl'
                }).otherwise({redirectTo: '/AntoineLucas'});
            }])
        .controller("AppCtrl", function ($scope, $mdMedia, $timeout, $document, $window, $mdSidenav, $parse, $log) {
            $scope.customQuery = $mdMedia('(min-width: 500px)');
            $scope.anotherCustom = $mdMedia('max-width: 400px');

            
            if ("ontouchstart" in window || navigator.msMaxTouchPoints)
            {
                $scope.isTouch = true;
                $scope.flex_small_content = 100;
            } else {
                $scope.isTouch = false;
                $scope.flex_small_content = 85;
            }
            console.log("isTouch: " + $scope.isTouch)


            function checkSideBarsDimension() {
                if ($mdMedia('max-width: 400px')) {
                    console.log("max-width1 : 400");
                    angular.element(document.getElementById('smallLeft'))
                            .removeClass('small-sidenav')
                            .removeClass('smaill-sidenav');

                    angular.element(document.getElementById('right'))
                            .removeClass('large-contact-sidenav')
                            .removeClass('medium-contact-sidenav')
                            .removeClass('small-contact-sidenav')
                            .addClass('small-contact-sidenav');
                }
                else if ($mdMedia('max-width: 500px')) {
                    console.log("max-width1 : 500");
                    angular.element(document.getElementById('smallLeft')).removeClass('small-sidenav');
                    angular.element(document.getElementById('right'))
                            .removeClass('large-contact-sidenav')
                            .removeClass('medium-contact-sidenav')
                            .removeClass('small-contact-sidenav')
                            .addClass('medium-contact-sidenav');
                }
                else if ($mdMedia('max-width: 590')) {
                    console.log("max-width1 : 590");
                    angular.element(document.getElementById('right'))
                            .removeClass('large-contact-sidenav')
                            .removeClass('medium-contact-sidenav')
                            .removeClass('small-contact-sidenav')
                            .addClass('medium-contact-sidenav');
                }
                else {
                    console.log("max-width > 590");
                    angular.element(document.getElementById('right'))
                            .removeClass('large-contact-sidenav')
                            .removeClass('medium-contact-sidenav')
                            .removeClass('small-contact-sidenav')
                            .addClass('large-contact-sidenav');
                }
            }

            angular.element($window).bind('orientationchange', function () {
                checkSideBarsDimension();
            });
            angular.element($window).bind('resize', function () {
                checkSideBarsDimension();
            });
            checkSideBarsDimension();


            $scope.swipeRight = function () {
                if ($mdMedia('max-width: 600px') == true) {
                    console.log("max-width2 : 500");
                    $mdSidenav('smallLeft').toggle();
                }
                else {
                    console.log("max-width2 > 600");
                    $mdSidenav('largeLeft').toggle();
                }

                $mdSidenav('right').close();
            };

            $scope.swipeLeft = function () {
                $mdSidenav('largeLeft').close();
                $mdSidenav('smallLeft').close();
                $mdSidenav('right').toggle();
            }

            $scope.goToAnchor = function (id) {

                var someElement = angular.element(document.getElementById(id));

                $mdSidenav('largeLeft').close();
                $mdSidenav('smallLeft').close();
                $document.scrollToElement(someElement, -10, 1000).then(function () {
                    /*var scrollaction =  $document.find("[scrollaction]")[0].attributes.scrollaction.value;
                     scrollaction = $parse(scrollaction)($scope);                    
                     angular.element("#" + scrollaction[id]).css("background-color", "#EBEBEB");*/

                });


            };

            $scope.toggleLeft = function () {
                $mdSidenav('left').toggle()
                        .then(function () {
                            $log.debug("toggle left is done");
                        });
            };
            $scope.toggleLeft2 = function () {
                $mdSidenav('left2').toggle()
                        .then(function () {
                            $log.debug("toggle left2 is done");
                        });
            };

            $scope.close = function () {
                $mdSidenav('left').close()
                        .then(function () {
                            $log.debug("close LEFT is done");
                        });
            };
        })
        .run(function ($http, $templateCache) {
            var templates = ['views/skype.html', 'views/hangout.html'];

            angular.forEach(templates, function (templateUrl) {
                $http({method: 'GET', url: templateUrl}).success(function (data) {
                    $templateCache.put(templateUrl, data);
                });
            });
        });

