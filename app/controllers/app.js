/**
 * Created by antoine on 29/10/15.
 */
(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('Antoine_Lucas_CV')
        .filter('newlines', function () {
            return function (text) {
                return text.replace(/\n/g, '<br/>');
            };
        })
        .filter('trusthtml', function($sce) {
            return function(text) {
                return $sce.trustAsHtml(text);
            };
        })
        .controller("AppCtrl", function ($scope, $rootScope, $mdMedia, $timeout, $document, $window, $mdSidenav, $parse, $log) {
            $scope.customQuery = $mdMedia('(min-width: 500px)');
            $scope.anotherCustom = $mdMedia('max-width: 400px');


            if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
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
                var documentWidth = $window.document.body.clientWidth;
                if ($mdMedia('min-width: 1600px')) {
                    $rootScope.contentStyle = {
                        width: (documentWidth - 550 - 20) + 'px',
                        'max-width': (documentWidth - 550 - 20) + 'px'
                    };
                    $rootScope.size = 'xl';
                } else if ($mdMedia('min-width: 1200px')) {
                    $rootScope.contentStyle = {
                        width: (documentWidth - 350 - 20) + 'px',
                        'max-width': (documentWidth - 350 - 20) + 'px'
                    };
                    $rootScope.size = 'lg';
                } else if ($mdMedia('min-width: 900px')) {
                    $rootScope.contentStyle = {
                        width: (documentWidth - 350 - 20) + 'px',
                        'max-width': (documentWidth - 350 - 20) + 'px'
                    };
                    $rootScope.size = 'md';
                } else if ($mdMedia('min-width: 600px')) {
                    $rootScope.contentStyle = {
                        width: (documentWidth - 40) + 'px',
                        'max-width': (documentWidth - 40) + 'px',
                        'margin-left': '20px'
                    };
                    $rootScope.size = 'sm';
                } else {
                    $rootScope.contentStyle = {};
                    $rootScope.size = 'xs';
                }

                console.log($window);

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
                if ($mdMedia('max-width: 900px') === true) {
                    console.log("max-width : <600");
                    $mdSidenav('largeLeft').toggle();
                }

                $mdSidenav('right').close();
            };

            $scope.swipeLeft = function () {
                $mdSidenav('largeLeft').close();
                $mdSidenav('right').toggle();
            };

            $scope.goToAnchor = function (id) {

                var someElement = angular.element(document.getElementById(id));

                $mdSidenav('largeLeft').close();
                $document.scrollToElement(someElement, 70, 1000).then(function () {
                    /*var scrollaction =  $document.find("[scrollaction]")[0].attributes.scrollaction.value;
                     scrollaction = $parse(scrollaction)($scope);
                     angular.element("#" + scrollaction[id]).css("background-color", "#EBEBEB");*/

                });


            };

            $scope.toggleLeft = function () {
                $mdSidenav('largeLeft').toggle()
                    .then(function () {
                        $log.debug("toggle left is done");
                    });
            };


        });

})();