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
                },2000);


            }, 500);




        });