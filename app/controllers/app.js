/**
 * Created by antoine on 29/10/15.
 */
(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('Antoine_Lucas_CV').controller("AppCtrl", function ($scope, $rootScope, $mdMedia, $timeout, $document, $window, $mdSidenav, $parse, $log) {
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

            function animateSwipe() {
                if ($scope.isTouch) {
                    $scope.showSlide = true;
                    $scope.showFace = false;
                    $timeout(function () {
                        $scope.showSlide = false;
                        $scope.showFace = true;
                    }, 3000);
                }
                else {
                    $scope.showSlide = false;
                    $scope.showFace = true;
                }

            }
            animateSwipe();


            function checkSideBarsDimension() {


                if ($mdMedia('min-width: 1600px') ) {
                    $rootScope.size = 'xl';
                } else if ($mdMedia('min-width: 1200px') ) {
                    $rootScope.size = 'lg';
                } else if ($mdMedia('min-width: 600px') ) {
                    $rootScope.size = 'md';
                } else if ($mdMedia('min-width: 400px') ) {
                    $rootScope.size = 'sm';
                } else {
                    $rootScope.size = 'xs';
                }

                if ($mdMedia('max-width: 400px')) {
                    angular.element(document.getElementById('smallLeft'))
                        .removeClass('small-sidenav');

                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('small-contact-sidenav');
                }
                else if ($mdMedia('max-width: 500px')) {
                    angular.element(document.getElementById('smallLeft')).removeClass('small-sidenav');
                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('medium-contact-sidenav');
                }
                else if ($mdMedia('max-width: 600')) {
                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('medium-contact-sidenav');


                }
                else if ($mdMedia('max-width: 900')) {
                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('large-contact-sidenav');
                }
                else if ($mdMedia('max-width: 1200')) {
                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('large-contact-sidenav');
                }
                else {
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
                if ($mdMedia('max-width: 600px') === true) {
                    console.log("max-width : <600");
                    $mdSidenav('smallLeft').toggle();
                }
                else {
                    console.log("max-width > 600");
                    $mdSidenav('largeLeft').toggle();
                }

                $mdSidenav('right').close();
            };

            $scope.swipeLeft = function () {
                $mdSidenav('largeLeft').close();
                $mdSidenav('smallLeft').close();
                $mdSidenav('right').toggle();
            };

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
                $mdSidenav('smallLeft').toggle()
                    .then(function () {
                        $log.debug("toggle left is done");
                    });
            };
            $scope.toggleLeft2 = function () {
                $mdSidenav('largeLeft').toggle()
                    .then(function () {
                        $log.debug("toggle left2 is done");
                    });
            };


        });

})();