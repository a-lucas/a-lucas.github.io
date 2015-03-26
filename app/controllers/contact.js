
angular.module('Antoine_Lucas_CV.contact', ['Antoine_Lucas_CV.services', 'ngMaterial', 'ngMessages'])
        .controller('ContactCtrl', function ($scope, DataSource) {
            $scope.data = {
                selectedIndex: 0,
                secondLocked: true,
                secondLabel: "Item Two"
            };
            $scope.next = function () {
                $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
            };
            $scope.previous = function () {
                $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
            };


        })
        .controller('FormCtrl', function ($scope, DataSource) {
            $scope.user = {
                name: 'test',
                _replyto: 'test@gmail.com'
            };
            $scope.mailSent = false;
            $scope.sendMail = function (form) {
                console.log(form);
                if (form.$valid) {
                    $scope.mailSent = true;
                    DataSource.contact_me($scope.user).success(function () {
                        console.log("success");
                    }).error(function (a, b, c, d) {
                        console.log('error');
                        console.log(a);
                        console.log(b);
                        console.log(c);
                        console.log(d);
                    });
                }

            }
        })
        .controller('SkypeCtrl', function ($scope, $timeout) {
            $timeout(function () {

                Skype.ui({
                    name: "dropdown",
                    "element": "SkypeButton_Call_montpellier_1001net",
                    "participants": ["montpellier_1001net"],
                    "imageSize": 32
                });

            });
        })
        .controller('HangoutCtrl', function ($scope, $timeout) {
            $scope.user = {
                phone: '+61 424207292'
            };

            $timeout(function () {
                var t = gapi.hangout.render('placeholder-div', {
                    render: 'createhangout',
                    hangout_type: "normal",
                    invites: [
                        //{invite_type: 'email', id: 'antoine.lucas.australia@gmail.com'},
                        {invite_type: 'phone', id: $scope.user.phone}
                        //{invite_type: 'email', id: 'cooluhuru@gmail.com'}
                    ],
                    topic: "Interview1"

                });
                console.log(t);

            });



        });
/*
 .config(function ($mdThemingProvider) {
 // Configure a dark theme with primary foreground yellow
 $mdThemingProvider.theme('default')
 .primaryPalette('blue-grey')
 .accentPalette('orange')
 .warnPalette('brown');
 })*/


