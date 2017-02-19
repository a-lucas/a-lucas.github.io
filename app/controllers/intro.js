(function () {
    'use strict';

    angular.module('Antoine_Lucas_CV.intro', ['Antoine_Lucas_CV.services'])
        .controller('IntroCtrl', function ($scope, DataSource) {

            $scope.paper = DataSource.get_paper();

            $scope.summary = DataSource.get_summary();
            console.log($scope.summary);
        })
       ;
})();
