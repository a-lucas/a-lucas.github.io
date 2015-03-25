
angular.module('Antoine_Lucas_CV.contact', ['Antoine_Lucas_CV.services', 'ngMaterial', 'ngMessages'])
        .controller('ContactCtrl', function ($scope, DataSource) {
            DataSource.contact_me($scope.contact);
            $scope.contact = {
                name: 'Test name',
                email: 'supertestemail@supertestdomain.com',
                message: 'I am a message',
                utf8: "✓"
                //_subject: 'I am a subject'
            };
            $scope.send = function (form) {
                
                if (form.$valid === true) {
                    DataSource.contact_me($scope.contact)
                            .success(function (data, status, headers, config) {
                                alert("success");
                            })
                            .error(function (data, status, headers, config) {
                                alert("error");
                            });
                }
                else{
                    console.log(form);
                }
            };

        })
        .config(function ($mdThemingProvider) {
            // Configure a dark theme with primary foreground yellow
            $mdThemingProvider.theme('default')
                    .primaryPalette('blue-grey')
                    .accentPalette('orange')
                    .warnPalette('brown');
        });
;

