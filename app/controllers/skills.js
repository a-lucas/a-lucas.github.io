'use strict';

angular.module('Antoine_Lucas_CV.skills', ['Antoine_Lucas_CV.services'])
        .controller('SkillsCtrl', function ($scope, DataSource) {

            $scope.skills = DataSource.get_skills();

        });
        