(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.portfolio', ['Antoine_Lucas_CV.services'])
            .controller('PortfolioCtrl', function ($scope, DataSource) {

                $scope.portfolio = DataSource.get_education();

            });
})();