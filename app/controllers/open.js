(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.open', ['Antoine_Lucas_CV.services'])
            .controller('OpenCtrl', function ($scope, DataSource) {

                $scope.openSource = DataSource.get_open_source();

            });
})();