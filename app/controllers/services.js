'use strict';

angular.module('Antoine_Lucas_CV.service', ['Antoine_Lucas_CV.services'])
        .controller('ServiceCtrl', function ($scope, $timeout, DataSource) {

            $scope.services = DataSource.get_services();
            $scope.skills = DataSource.get_skills();

            $scope.options = {
                from: 1,
                to: 5,
                step: 0.5,
                scale: [0, '|', 1, '|', 2 , '|',3,'|',4,'|',5]
            };

            $timeout(function () {
                TagCanvas.Start('myCanvas', 'tags', {
                    reverse: false,
                    depth: 0.99,
                    initial: [0.1, 0],
                    noMouse: true,
                    radiusX: 0.6,
                    radiusY: 0.6,
                    textColour: '#ffffff',
                    //shape: 'hring',
                    shadowBlur: 4,
                    shadow: '#000000',
                    shadowOffset: [2, 2]
                });


            }, 500);




        })
        .animation('.show-service', function () {

            var animateDown = function (element, className, done) {
                if (className != 'show-service') {
                    console.error("classname is not = show-service. " + className);
                    return;
                }
                if (element.attr('service-description')) {
                    console.log("OK, attr found");
                    var description_element = $("#" + element.attr('service-description'));
                    console.log(description_element);
                }
                else {
                    console.error("not ok, class test not found");
                    return;
                }


                description_element.css({
                    position: 'absolute',
                    top: -500,
                    left: 0,
                    display: 'block'
                });

                description_element.animate({
                    top: 0
                }, done);

                return function (cancel) {
                    if (cancel) {
                        description_element.stop();
                    }
                };
            };


            var animateUp = function (element, className, done) {
                if (className != 'show-service') {
                    console.log("classname is not = show-service. " + className);
                    return;
                }
                if (element.attr('service-description')) {
                    console.log("OK, attr found");
                    var description_element = $("#" + element.attr('service-description'));
                    console.log(description_element);
                }
                else {
                    console.error("not ok, class test not found");
                    return;
                }
                description_element.css({
                    position: 'absolute',
                    left: 0,
                    top: 0
                });

                description_element.animate({
                    top: -500
                }, done);

                return function (cancel) {
                    if (cancel) {
                        description_element.stop();
                    }
                };
            };

            return {
                addClass: animateDown,
                removeClass: animateUp
            };
        });