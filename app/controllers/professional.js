(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.pro', ['Antoine_Lucas_CV.services'])
            .controller('ProCtrl', function ($scope, DataSource) {

                $scope.experience = DataSource.get_work_experience();
                $scope.skills = DataSource.get_skills();

            });
})();