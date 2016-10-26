(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('Antoine_Lucas_CV', [
        'ngRoute',
        'Antoine_Lucas_CV.pro',
        'Antoine_Lucas_CV.education',
        'Antoine_Lucas_CV.portfolio',
        'Antoine_Lucas_CV.service',
        'Antoine_Lucas_CV.skills',
        'Antoine_Lucas_CV.contact',
        'Antoine_Lucas_CV.interests',
        'Antoine_Lucas_CV.technologies',
        'Antoine_Lucas_CV.social',
        'Antoine_Lucas_CV.menu',
        'Antoine_Lucas_CV.open',
        'ngMaterial',
        'ngAnimate',
        'angularSlideables',
        'unsafeHtml',
        'ngSlider',
        'angular-flippy',
        'duScroll',
        'angularScrollParralax',
        'ngTouch'
    ])
            .config(['$routeProvider', function ($routeProvider) {
                    $routeProvider.when('/AntoineLucas', {
                        templateUrl: 'app/views/menu.html',
                        controller: 'AppCtrl'
                    }).otherwise({redirectTo: '/AntoineLucas'});
                }])
            .run(function ($http, $templateCache) {
                var templates = ['app/views/skype.html', 'app/views/hangout.html'];

                angular.forEach(templates, function (templateUrl) {
                    $http({method: 'GET', url: templateUrl}).success(function (data) {
                        $templateCache.put(templateUrl, data);
                    });
                });
            });

})();