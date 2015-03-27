(function () {
    'use strict';
    angular.module('unsafeHtml', []).filter('unsafe', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    });
})();
