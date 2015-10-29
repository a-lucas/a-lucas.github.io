(function () {
    'use strict';

    angular.module('Antoine_Lucas_CV.interests', ['Antoine_Lucas_CV.services'])
            .controller('InterestsCtrl', function ($scope, DataSource) {

                $scope.interests = DataSource.get_interests();

            });
})();