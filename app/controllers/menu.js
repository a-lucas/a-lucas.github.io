

'use strict';

angular.module('Antoine_Lucas_CV.menu', [])
        .controller('MenuCtrl', function ($scope, $timeout) {

            
            $scope.render1 = function () {
                $timeout(function () {
                    gapi.hangout.render('placeholder-div1', {
                        render: 'createhangout',
                        hangout_type: "normal",
                        invites: [
                            {invite_type: 'email', id: 'antoine.lucas.australia@gmail.com'},
                            {invite_type: 'email', id: 'cooluhuru@gmail.com'}],
                        topic: "Interview1",
                        width: "100%"

                    });
                });

            };
            $scope.render2 = function () {
                $timeout(function () {
                    gapi.hangout.render('placeholder-div2', {
                        render: 'createhangout',
                        hangout_type: "normal",
                        invites: [
                            {invite_type: 'email', id: 'antoine.lucas.australia@gmail.com'},
                            {invite_type: 'email', id: 'cooluhuru@gmail.com'}],
                        topic: "Interview2",
                        width: "100%"

                    });
                })

            };


        });






       