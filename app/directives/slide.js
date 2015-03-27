(function () {
    'use strict';
    angular.module('angularSlideables', [])
            .directive('slideable', function () {
                return {
                    restrict: 'C',
                    compile: function (element, attr) {
                        // wrap tag
                        var contents = element.html();
                        element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

                        return function postLink(scope, element, attrs) {
                            // default properties
                            attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                            attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                            element.css({
                                'overflow': 'hidden',
                                'height': '0px',
                                'transitionProperty': 'height',
                                'transitionDuration': attrs.duration,
                                'transitionTimingFunction': attrs.easing
                            });
                        };
                    }
                };
            })
            .directive('slideToggle', function () {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        var target, content;

                        attrs.expanded = false;
                        if (!Date.now) {
                            Date.now = function () {
                                return new Date().getTime();
                            };
                        }
                        attrs.previousClick = null;
                        attrs.lastClickTimestamp = Date.now();

                        element.bind('mouseup', function () {
                            /**
                             * 
                             * @type @exp;Date@call;now
                             * Fix this annoying bug where ng-click triggers a double click on mobile, despite having ng-touch
                             */
                            var timeStampClick = Date.now();
                            if (attrs.previousClick === null) {
                                attrs.previousClick = attrs.lastClickTimestamp;
                            }
                            else if ((timeStampClick - attrs.previousClick) > 1000) {
                                console.log("more than 1000ms, this is not a double click");
                                attrs.lastClickTimestamp = Date.now();
                                attrs.previousClick = attrs.lastClickTimestamp;
                            }
                            else {
                                console.log("This is a double click. ignoring");
                                return;
                            }
                            console.log("click slidetoggle");

                            if (!target)
                                target = document.querySelector(attrs.slideToggle);
                            if (!content)
                                content = target.querySelector('.slideable_content');

                            if (!attrs.expanded) {
                                content.style.border = '1px solid rgba(0,0,0,0)';
                                var y = content.clientHeight;
                                console.log(content.clientHeight);
                                content.style.border = 0;
                                target.style.height = y + 'px';
                            } else {
                                target.style.height = '0px';
                            }
                            attrs.expanded = !attrs.expanded;
                        });
                    }
                };
            });
})();