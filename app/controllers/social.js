(function () {
    'use strict';

    angular.module('Antoine_Lucas_CV.social', ['Antoine_Lucas_CV.services'])
        .controller('SocialCtrl', function ($scope, DataSource) {

            $scope.social = DataSource.get_social();

        });
})();