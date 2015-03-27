(function () {
    'use strict';
    angular.module('angularScrollParralax', [])
            .directive('scroll', function ($window, $timeout) {
                return{
                    restrict: 'A',
                    scope: {
                        scrollaction: '='
                    },
                    link: function ($scope, element, attrs) {

                        var scrollAction = $scope.scrollaction;

                        console.log(element);

                        angular.element($window).bind("scroll", function () {


                            for (var i in scrollAction) {
                                var elem = angular.element(document.getElementById(i));
                                if (this.pageYOffset > elem[0].offsetTop && this.pageYOffset < (elem[0].offsetTop + elem[0].offsetHeight)) {

                                    angular.element(document.getElementById(scrollAction[i])).css("background-color", "#EBEBEB");

                                }
                                else {

                                    angular.element(document.getElementById(scrollAction[i])).css("background-color", "transparent");

                                }

                            }
                        });


                    }
                };
            });
})();

