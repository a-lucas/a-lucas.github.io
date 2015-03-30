(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.technologies', ['Antoine_Lucas_CV.services'])
            .controller('TechnologiesCtrl', function ($scope, DataSource) {

                $scope.technologies = DataSource.get_technology_used();

            });
})();