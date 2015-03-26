

'use strict';

angular.module('Antoine_Lucas_CV.menu', [])
        .controller('MenuCtrl', function ($scope, $window) {

            $scope.showPortrait = false;

            angular.element($window).bind("scroll", function () {


                var elem = angular.element(document.getElementById("intro-name"));
                if (this.pageYOffset < (elem[0].offsetTop + elem[0].offsetHeight)) {
                    $scope.showPortrait = false;
                }
                else {
                    $scope.showPortrait = true;

                }
                $scope.$apply();
                console.log("showPortrait = " + $scope.showPortrait);

            });



        });






       