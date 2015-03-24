'use strict';

angular.module('Antoine_Lucas_CV.education', ['Antoine_Lucas_CV.services'] )
        .controller('EducationCtrl', function($scope, DataSource) {
    
    $scope.education = DataSource.get_education();
    
});