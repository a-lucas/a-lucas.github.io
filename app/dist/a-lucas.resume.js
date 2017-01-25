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

                            if (!target) {
                                target = document.querySelector(attrs.slideToggle);
                            }
                            if (!content) {
                                content = target.querySelector('.slideable_content');
                            }

                            if (!attrs.expanded) {
                                content.style.border = '1px solid rgba(0,0,0,0)';
                                var y = content.clientHeight;
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
})();;(function () {
    'use strict';
    angular.module('unsafeHtml', []).filter('unsafe', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    });
})();
;(function () {
    'use strict';
    angular.module('angularScrollParralax', [])
            .directive('scroll', function ($window, $timeout) {
                return{
                    restrict: 'A',
                    scope: {
                        scrollaction: '='
                    },
                    link: function ($scope, element, attrs) {

                        var scrollAction = $scope.scrollaction;

                        angular.element($window).bind("scroll", function () {


                            for (var i in scrollAction) {
                                var elem = angular.element(document.getElementById(i));
                                if (this.pageYOffset > elem[0].offsetTop && this.pageYOffset < (elem[0].offsetTop + elem[0].offsetHeight)) {

                                    angular.element(document.getElementById(scrollAction[i])).css("background-color", "#EBEBEB");

                                }
                                else {

                                    angular.element(document.getElementById(scrollAction[i])).css("background-color", "transparent");

                                }

                            }
                        });


                    }
                };
            });
})();

;(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('Antoine_Lucas_CV', [
        'ngRoute',
        'Antoine_Lucas_CV.intro',
        'Antoine_Lucas_CV.pro',
        'Antoine_Lucas_CV.social',
        'Antoine_Lucas_CV.education',
        'Antoine_Lucas_CV.portfolio',
        'Antoine_Lucas_CV.service',
        'Antoine_Lucas_CV.skills',
        'Antoine_Lucas_CV.contact',
        'Antoine_Lucas_CV.interests',
        'Antoine_Lucas_CV.technologies',
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
        'ngTouch',
        'templates-main'
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

})();;/**
 * Created by antoine on 29/10/15.
 */
var data  = {

    "paper": {
        "first_name": "Antoine",
        "last_name": "LUCAS",
        "phone": "0424 207 292",
        "email": "antoine.lucas.australia@gmail.com",
        "headline": "Web DevOps with a decade of experience developing complex solutions.\n"
        + "Good knowledge of BA and BI acquired with years of practice.\n"
        + "Available for contracts on site or remotely.\n"
        + "I really don’t need hand held supervision in order to perform my job at a high level. ",
        info: "This page is generated from a word document generator I build. For more info, visit: https://github.com/a-lucas/resume",
        onlineVersion: "To get an up to date version, visit: http://a-lucas.github.io/resume/app/#/AntoineLucas and click the download button."
    },
    "skill": [
        "Web architecture",
        "Development",
        "Business intelligence"
    ],
    "open_source": [
        {
            "title": "Angular.js-server",
            "date": {"year": 2016, "month": 10},
            "tags": ["Node.js", "server rendering", "Angular.js", "JSDOM", "Typescript", "ES6/7"],
            "description": "This is an ongoing project that allows angular web apps to be pre-rendered on the server and cached to improve rendering"
            + " performance and SEO",
            "websites": [{
                title: "Angular.js-server on Github",
                url: "https://github.com/a-lucas/angular.js-server"
            }]
        },
        {
            "title": "Redis-url-cache",
            "date": {"year": 2016, "month": 10},
            "tags": ["Node.js", "REDIS", "URL caching", "Regexp", "Typescript"],
            "description": "Cache URLs into a redis datastore with an extensive flexibility on a per domain, per rule regexp filtering. " +
            "It supports ttl and instance sharing between different caching servers",
            "websites": [{
                title: "Redis-url-cache on Github",
                url:"https://github.com/a-lucas/redis-url-cache"
            }]
        },
        {
            "title": "Github small contribution",
            "date": {"year": 2015, "month": 01},
            "tags": ["Buyan", "Sockey.io", "Zend", "Angular-foundation", "Typescript"],
            "description": "Fixed few bug in some popular github repositories."
        }
    ],
    "work_experience" : [
        {
            "title": "Mapping Engineer",
            "company_name": "GeoScience Australia",
            "date_from": {"year": 2016, "month": 11},
            "date_to": {"year": 2017, "month": 06},
            "location": {
                "country": "Australia",
                "town": "Canberra"
            },
            "tags": ["Angular", "Three.js", "Mapping design", "WMC and WFS", "Innovation", "Critical", "Geology", "GLSL"],
            "description": [{text: "I am (solo) designing and implementing a 3D visualization of subsurface structure - which allows researchers to have a straight visualization of boreholes location and results."
            + " While being new with the 3D technology stack and the advanced mapping world, I am kicking it so hard that the BAs are calling me 'epic'."}],
            "websites": [{
                title: 'Geoscience Australia',
                url: 'http://www.ga.gov.au/'
            }],
            "collapsed": false
        },
        {
            "title": "Accessibility Engineer",
            "company_name": "Publicis",
            "date_from": {"year": 2016, "month": 2},
            "date_to": {"year": 2016, "month": 7},
            "location": {
                "country": "Australia",
                "town": "Sydney"
            },
            "tags": ["PHP", "HTML & CSS3", "SASS", "Drupal6", "Aria"],
            "description": [{text: "Following accessibilityOz reports, we modified an existing codebase to assess and implement accessibility for the Commonwealth "
            + " Olympic Games 2018. We met the strict deadline just in time. I also implemented the qfcc website responsive front-end following design specs."}],
            "websites": [{
                title: 'Commonwealth Olympic games 2018',
                url: 'http://gc2018.com'
            }, {
                title: "Queensland Family & Child commission",
                url: "https://www.qfcc.qld.gov.au/"
            }],
            "collapsed": false
        },
        {
            "title": "FrontEnd Engineer",
            "company_name": "Holler",
            "date_from": {"year": 2016, "month": 1},
            "date_to": {"year": 2016, "month": 2},
            "location": {
                "country": "Australia",
                "town": "Sydney"
            },
            "tags": ["ReactJS", "HTML & CSS3", "SASS", "Redux"],
            "description": [{text: "I help finalizing a complex registration form for AUDI drive experience."}],
            "websites": [],
            "collapsed": false
        },
        {
            "title": "FrontEnd Engineer",
            "company_name": "BUPA",
            "date_from": {"year": 2015, "month": 10},
            "date_to": {"year": 2015, "month": 11},
            "location": {
                "country": "Australia",
                "town": "Sydney"
            },
            "tags": ["AngularJS", "HTML & CSS3", "SASS", "Bootstrap", "Team Foundation"],
            "description": [{text: "I created from scratch a new website addressing issues about the first 2 years following chid birth for parents and friends - "
            + " based on a sketch specification."}],
            "websites": [{
                title: "The Blue room - the first 1000 days",
                url: 'http://theblueroom.bupa.com.au/first-1000-days#/'
            }],
            "collapsed": false
        },
        {
            "title": "FrontEnd Problem Solver",
            "company_name": "Sydney Water",
            "date_from": {"year": 2015, "month": 7},
            "date_to": {"year": 2015, "month": 8},
            "location": {
                "country": "Australia",
                "town": "Sydney"
            },
            "tags": ["AngularJS", "Reverse Engineering", "Form Validations", "SASS", "HTML5 & CSS"],
            "description": [{text: "Sydney Water needed a fast AngularJS coder to help meet a private client MVP deadline. The product is an industry game changer "
            +"  - which helps a well known governmental service provider to speed up processing complex applicationns."}],
            "websites": [{
                title: "Sydney Water Customer TapIn",
                url: 'http://www.sydneywater.com.au/tapin/index.htm'
            }],
            "collapsed": false
        },
        {
            "title": "FrontEnd Engineer",
            "company_name": "Bauer Media",
            "date_from": {"year": 2015, "month": 5},
            "date_to": {"year": 2015, "month": 7},
            "location": {
                "country": "Australia",
                "town": "Sydney"
            },
            "tags": ["ReactJS", "FLUX", "Fluxible", "NodeJS", "JSX Harmony", "ES6/7", "SASS", "HTML5 & CSS3"],
            "description": [{text: "Bauer Media needed the help of some extra contractors to help start & finish their new MVP website. In this role, "
            + "I helped integrate Bauer innovative Fluxible based custom framework with a lot of ReactJS and continuous delivery workflow. "
            + "I was part of a team of 5 and we all together managed to finish the project in time."}],
            "websites": [{
                title: "Homes to Love",
                url: "http://www.homestolove.com.au"
            }],
            "collapsed": false
        },
        {
            "title": "Senior Web Application Developer",
            "company_name": "Veritas Engineering",
            "date_from": {"year": 2013, "month": 11},
            "date_to": {"year": 2015, "month": 2},
            "location": {
                "country": "Australia",
                "town": "Perth"
            },
            "tags": ["AngularJS", "HTML & CSS3 Engineering", "Foundation", "PHP5", "Zend1", "MySQL", "SLIM Framework", "Propel ORM", "LAMP stack", "JQuery"],
            "description": [{text: "Online police checks planning, architecture & cutting edge implementation"},
                {text: "Custom CRM design, architecture & implementation"},
                {text: "WebServices development"},
                {text: "UX Design & optimization"},
                {text: "Analytics & SEO Consulting"}],
            "websites": [{
                    title: "Veritas Check - online police checks",
                    url: "http://www.veritascheck.com.au"
                },
                {
                    title: "Federal police check - online police checks",
                    url: "https://www.afpcheck.com/"
                },
            ],
            "collapsed": false
        },
        {
            "title": "Lead Developer",
            "date_from": {"year": 2010, "month": 6},
            "date_to": {"year": 2013, "month": 5},
            "company_name": "Webjobz (Former ExpatJob)",
            "location": {
                "country": "Australia",
                "town": "Perth"
            },
            "description": [{text: "JQUERY based mail client with ACL Mail basex linked to a custom CRM."},
                {text: "Ten years of electronic correspondence have been imported from a domino legacy system to this new CRM"},
                {text: "3 Linux dedicated server setup strategy with backup server (MySQL replication & Rsync), Database server (MySQL + Sphinx) and "
                    + " file&API server (Apache XML / PHP / SOAP / REST)"},
                {text: "Linux SysADMIN and maintenance"},
                {text: "SOAP and REST integration with different Job Feeds providers such as JobG8, Monster, JobRapido and JobAdder to cite a few"},
                {text: "XML job feeds"},
                {text: "Creation of an organized and consistent multi-level location database from several sources"},
                {text: "Optimized FullText search with ultra-fast grouping and count "},
                {text: "Maintenance and implementation of Google DFP - We had the visit of a Google sales representative that told us that we were Number1 in CTR in "
                + " the australian market"}],
            "tags": ["Ubuntu Server", "MySQL replication", "PHP5", "Yii", "Google Webmaster", "Google Analytics", "SOAP",  "SASS/Less", "XML Feeds", "SEO", "DoubleClick", "Mysql", "SPHINX search", "JQuery", "IMAP protocol", "Domino", "HTML & CSS"],
            "websites": [{
                title: "Webjobz.com",
                url: "http://www.webjobz.com/jobs"
            }],
            "collapsed": false
        },
        {
            "title": "PHP&Jquery Developer",
            "date_from": {"year": 2010, "month": 9},
            "date_to": {"year": 2011, "month": 5},
            "company_name": "Digital Ventures",
            "location": {
                "country": "Australia",
                "town": "Perth"
            },
            "description": [{text: "The project was a a clone of Ali-baba. I mainly wrote a curl spider engine, a search engine and an admin interface"}],
            "tags": ["PHP5", "Curl", "AliBaba", "MySQL", "JQuery", "HTML & CSS"],
            "websites": [],
            "collapsed": false
        },
        {
            "title": "Science Teacher",
            "date_from": {"year": 2007, "month": 9},
            "date_to": {"year": 2008, "month": 6},
            "company_name": "French School of Khartoun",
            "location": {
                "country": "Sudan",
                "town": "Kartoum"
            },
            "description": [{text: "I taught Maths Physics & Biology to high school students from diplomatic backgrounds."}],
            "tags": ["Patience", "Kindness", "Authority", "Communication"],
            "websites": [{
                title: "French School of Khartoum",
                url: "http://www.efik-sd.com/"}],
            "collapsed": false
        },
        {
            "title": "Freelancer",
            "date_from": {"year": 2006, "month": 1},
            "date_to": {"year": 2007, "month": 6},
            "company_name": "1001net",
            "location": {
                "country": "France",
                "town": "Montpellier"
            },
            "description": [{text: "I learned to code by my own doing some freelance jobs back in France."}],
            "tags": ["PHP", "Accounting Certification", "LAMP", "Flash", "Suze", "Gentoo", "QMail", "HTML & CSS"],
            "websites": [],
            "collapsed": false
        }
    ],
    "education" : [
        {
            "title": "Polytech Geotechnic",
            "date_from": {"year": 1998},
            "date_to": {"year": 2010},
            "location": {
                "country": "France",
                "town": "Grenoble"
            },
            "description": "I studied Geotechnic at Polytech (formely known as ISTG) for two years before deciding to study information technologies",
            "website_url": "http://www.polytech-grenoble.fr/",
            "collapsed": false
        },
        {
            "title": "Bachelor in IT Science",
            "date_from": {"year": 2010},
            "date_to": {"year": 2011},
            "location": {
                "country": "France",
                "town": "Montpellier"
            },
            "description": "I have a solid formation on theoretical and practical aspects in networking, databases, information systems, programming, image processing and artificial intelligence.",
            "website_url": "http://en.wikipedia.org/wiki/Montpellier_2_University",
            "collapsed": false
        }
    ],
    "services" : [
        {
            "title": "PhoneGap / Cordova",
            "description": "You have an existing web application running AngularJs, EmberJs or written in any javascript web-application framework and you want to transform it into a phone or tablet native application. Migration from an existing <b>web</b> application to an IOS, Android , Windows or Blackberry platform needs some optimization. <a ng-click='swipeLeft()'>Contact me</a>",
            "image": "app/img/phone-gap-icon.png"
        },
        {
            "title": "Responsive Design",
            "description": "Do you need to make your website responsive? A responsive design is a great cost saver. Most of the code doesn;t need any change, only the front-end css & html needs to be modified. The result will be a website that looks great on all platforms : TV, Desktop, Laptops, Tablets and phones. ",
            "image": "app/img/responsive.png"
        },
        {
            "title": "Web Development",
            "description": "I offer 12 years experience in Web development. I am up to date with most cutting edge open source technologies and old school ones. It can be bug fixes, taking over someone else work, collaboration and team work, sprints and anything web related.",
            "image": false
        },
        {
            "title": "Web Architect",
            "description": "Are you looking to design a complexe web based application. Whatever SASS, Public internet or private  Intranet, it is crucial to take the correct decisions upfront. I have build from scratch many complex web-based system, and I am really passionate to discuss about challenging new concepts",
            "image": "app/img/architect.png"
        },
        {
            "title": "Databases",
            "description": "Database restoration, Maintenance, MIgration, Design, Replication. The only thing I don't know about is Database Scalability.",
            "image": "app/img/database.png"
        },
        {
            "title": "Crawlers",
            "description": "A crawler is a bot that automatically scrap web content following a strict specification. A crawler can authenticate, save cookies & session, parse HTML and extract relevant informations. Internet data is HUGE, a good massive crawler engine needs several dedicated servers.",
            "image": "app/img/crawler.png"
        }
    ],
    "skills" : {
        "coding": [
            {
                "logo": "app/img/PHP_logo.png",
                "bgColor": "#6082BB",
                "name": "PHP",
                "languages": [
                    {"name": "PHP4&5", "percentage": 4.5},
                    {"name": "Zend1", "percentage": 4},
                    {"name": "Yii", "percentage": 4.5},
                    {"name": "Code Igniter", "percentage": 3.5},
                    {"name": "Cake PHP", "percentage": 3.5},
                    {"name": "Phalcon", "percentage": 3.5},
                    {"name": "Laravel", "percentage": 4},
                    {"name": "Slim", "percentage": 4.5}
                ]
            },
            {
                "logo": "app/img/ecma5_logo.png",
                "bgColor": "#fff",
                "name": "Javascript",
                "languages": [
                    {"name": "Javascript", "percentage": 4},
                    {"name": "JQuery", "percentage": 5},
                    {"name": "AngularJS", "percentage": 5},
                    {"name": "ReactJS", "percentage": 4.5},
                    {"name": "Flux", "percentage": 4.5},
                    {"name": "ES6", "percentage": 4},
                    {"name": "JSX Harmony", "percentage": 4.5},
                    {"name": "Meteor", "percentage": 3},
                    {"name": "nodeJS", "percentage": 4},
                    {"name": "mean.js", "percentage": 4.5},
                    {"name": "Cordova", "percentage": 4},
                    {"name": "backbone", "percentage": 1},
                    {"name": "ember.js", "percentage": 1}
                ]
            }, {
                "logo": "app/img/perl_logo2.png",
                "bgColor": "#fff",
                "name": "Perl",
                "languages": [
                    {"name": "Perl", "percentage": 2.5}
                ]
            },
            {
                "bgColor": "#fff",
                "name": "Design Techs",
                "languages": [
                    {"name": "Css2/Css3", "percentage": 4.5},
                    {"name": "SASS/SCSS/Less", "percentage": 4.5},
                    {"name": "HTML", "percentage": 5},
                    {"name": "Foundation", "percentage": 5},
                    {"name": "Bootstrap", "percentage": 5},
                    {"name": "Foundation", "percentage": 5}
                ]
            },
            {
                "bgColor": "#fff",
                "name": "API Providers",
                "languages": [
                    {"name": "OAUTH", "percentage": 5},
                    {"name": "REST", "percentage": 5},
                    {"name": "Google API", "percentage": 4.5},
                    {"name": "Facebook API", "percentage": 4.5},
                    {"name": "LinkedIn API", "percentage": 4.5},
                    {"name": "Twitter API", "percentage": 4.5},
                    {"name": "Other APIs", "percentage": 4}
                ]
            },
            {
                "logo": "app/img/java-oracle.png",
                "bgColor": "#fff",
                "name": "JAVA",
                "languages": [
                    {"name": "JAVA", "percentage": 4},
                    {"name": "GWT", "percentage": 3},
                    {"name": "Spring MVC", "percentage": 2.5},
                    {"name": "Others", "percentage": 0.5}
                ]
            },
            {
                "logo": "app/img/mslogo.png",
                "bgColor": "#fff",
                "name": "Microsoft",
                "languages": [
                    {"name": "C#", "percentage": 3},
                    {"name": "ASP", "percentage": 2.5},
                    {"name": "Others", "percentage": 0.5}
                ]
            }],
            "server"
    :
        [
            {
                "logo": "",
                "name": "Linux",
                "bgColor": "#fff",
                "languages": [
                    {"name": "Debian", "percentage": 4.5},
                    {"name": "RedHat", "percentage": 3},
                    {"name": "Centos", "percentage": 2},
                    {"name": "Suze", "percentage": 2.5}
                ]
            },
            {
                "logo": "",
                "name": "Databases",
                "bgColor": "#fff",
                "languages": [
                    {"name": "MySQL", "percentage": 4},
                    {"name": "MariaDB", "percentage": 4},
                    {"name": "MongoDB", "percentage": 3.5},
                    {"name": "PostgreSQL", "percentage": 2},
                    {"name": "SQL Server", "percentage": 0}
                ]
            }, {
            "logo": "",
            "name": "Web Servers",
            "bgColor": "#fff",
            "languages": [
                {"name": "Apache2", "percentage": 4.5},
                {"name": "NGinX", "percentage": 4},
                {"name": "Express", "percentage": 4},
                {"name": "IIS", "percentage": 0}
            ]
        }
        ],
            "softwares"
    :
        [
            {
                "logo": "",
                "name": "Google",
                "bgColor": "#fff",
                "languages": [
                    {"name": "Webmaster", "percentage": 4.5},
                    {"name": "Analytics", "percentage": 4.5},
                    {"name": "Adwords", "percentage": 3},
                    {"name": "Double Click", "percentage": 4.5}
                ]
            },
            {
                "logo": "",
                "name": "Graphic editors",
                "bgColor": "#fff",
                "languages": [
                    {"name": "Gimp", "percentage": 3},
                    {"name": "photoshop CE", "percentage": 2.5}
                ]
            },
            {
                "logo": "",
                "name": "Code Editors",
                "languages": [
                    {"name": "Netbeans", "percentage": 4.5},
                    {"name": "WebStorm", "percentage": 4},
                    {"name": "Geany", "percentage": 4},
                    {"name": "Visual Studio", "percentage": 3},
                    {"name": "Vi", "percentage": 1}
                ]
            }
        ]

    }
,
    "interests" : [{
            "name": "Kite Surfing",
            "description": "“The best surfer out there is the one having the most fun.“ – Phil Edwards",
            "photo": "app/img/kiteSurf.jpg"
        }, {
            "name": "Traveling",
            "description": "“You don’t have to be rich to travel well.” – Eugene Fodor",
            "photo": "app/img/travelling.jpg"
        }, {
            "name": "Friends",
            "description": "Two persons cannot long be friends if they cannot forgive each other's little failings.",
            "photo": "app/img/friendship.jpg"
        }],

    "travels": [
        {
            "country": "Cameroon",
            "cities": ["Yaounde"],
            "description": "I grew up there"
        },
        {
            "country": "Djibouti",
            "cities": ["Djibouti"],
            "description": "I grew up there"
        },
        {
            "country": "France",
            "cities": ["Paris", "Carcassonne", "Perpignan", "Grenoble", "Montpellier"],
            "description": ""
        },
        {
            "country": "Sudan",
            "cities": ["Karthoum"],
            "description": ""
        },
        {
            "country": "Australia",
            "cities": ["Perth", "Sydney"],
            "description": ""
        }
    ],
    social_accounts: [
        {
            name: "LinkedIn",
            url: "https://au.linkedin.com/in/antoine-lucas-1a669b14 ",
            logo_url: "https://content.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png"
        },
        {
            name: "AngelList",
            url: "https://angel.co/antoine-lucas",
            logo_url: "http://blogs-images.forbes.com/tomiogeron/files/2012/12/angellist-logo2.png"
        },
        {
            name: "GitHub",
            url: "https://github.com/a-lucas",
            logo_url: "http://opendigitalscience.eu/wp-content/uploads/2015/09/github-logo.png"
        },
    ],
        "technology_used"
:
    [
        {
            "name": "AngularJS",
            "version": "1.3.*",
           "url": "https://angularjs.org/",
            "licence": "MIT licence",
            "comment": "This awesome dual-binding javascript framework made by geniuses @ Google"
        },
        {
            "name": "Material Design",
            "version": "0.8.3",
           "url": "https://github.com/angular/material/",
            "licence": "No licence",
            "comment": "This revolutionary and complete guide to modern mobile design made by Google - Port to AngularJS in progress"
        },
        {
            "name": "Node.JS",
            "version": "0.12.1",
           "url": "https://nodejs.org/",
            "licence": "Multiple licence",
            "comment": "The most performant server side technology untill now"
        },
        {
            "name": "Bower",
            "version": "1.3.12",
           "url": "http://bower.io/",
            "licence": "No licence",
            "comment": "A package manager for client side javascript files"
        },
        {
            "name": "Grunt",
            "version": "0.4.5",
           "url": "http://gruntjs.com/",
            "licence": "No licence",
            "comment": "A Task manager used with uglify, annotate, concat, jslint & csslint, angular template caching and html minification"
        },
        {
            "name": "Flippy",
            "version": "0",
           "url": "MIT licence",
            "licence": " https://github.com/zwacky/angular-flippy",
            "comment": "An AngularJS Flippy directive."
        },
        {
            "name": "Font Awesome",
            "version": "4.3.0",
           "url": "MIT licence, OFL-1.1, CC-BY-3.0",
            "licence": " https://github.com/zwacky/angular-flippy",
            "comment": "A large collection of icons embeded in a font"
        },
        {
            "name": "TagCanvas",
            "version": "2.2.0",
           "url": "http://www.goat1000.com/tagcanvas.php",
            "licence": "LGPL v3",
            "comment": "TagCanvas is a Javascript class which will draw and animate a HTML5  canvas based tag cloud"
        },
        {
            "name": "MomentJS",
            "version": "2.9.0",
           "url": "http://momentjs.com/",
            "licence": "MIT licence",
            "comment": "Parse, validate, manipulate, and display dates in JavaScript."
        },
        {
            "name": "Docx Templater",
            "version": "1.2.1",
            "url": "http://docxtemplater.readthedocs.org/",
            "licence": "MIT licence",
            "comment": "Generate a docx from a template - using angularJS parser."
        }
    ]
};;/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    var myModule = angular.module('Antoine_Lucas_CV.services', []).service('DataSource', function ($http) {
        var now = moment({year: 2012, month: 2});
        this.contact_me = function (contact) {

            var serialize = function (obj) {
                var str = [];
                for (var p in obj)
                    if (obj.hasOwnProperty(p)) {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                return str.join("&");
            };
            var req = {
                method: 'POST',
                url: 'http://formspree.io/cooluhuru@gmail.com',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
                },
                data: serialize(contact)
            };

            return $http(req);
        };

        this.get_open_source = function () {

            var open_source = data.open_source;

            for(var i in open_source) {
                open_source[i].date_from = moment(open_source[i].date_from);
            }
            return open_source;
        };


        this.get_work_experience = function () {

            var work_experience = data.work_experience;

            for(var i in work_experience) {
                work_experience[i].date_from = moment(work_experience[i].date_from);
                work_experience[i].date_to = moment(work_experience[i].date_to);
            }
            return work_experience;
        };

        this.get_social = function() {
           return data.social_accounts;
        };

        this.get_education = function () {
            var education = data.education;
            for(var i in education) {
                education[i].date_from = moment(education[i].date_from);
                education[i].date_to = moment(education[i].date_to);
            }

            return education;
        };

        this.get_services = function () {
            return data.services;
        };
        this.get_skills = function () {
            return data.skills;
        };

        this.get_interests = function () {
            return data.interests;
        };

        this.get_travels = function() {
            return data.travels;
        };



        this.get_technology_used = function(){
            return data.technology_used;
        };

        this.get_paper  = function() {
            return data.paper;
        };
    });
})();;/**
 * Created by antoine on 29/10/15.
 */
(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('Antoine_Lucas_CV')
        .filter('newlines', function () {
            return function (text) {
                return text.replace(/\n/g, '<br/>');
            };
        })
        .filter('trusthtml', function($sce) {
            return function(text) {
                return $sce.trustAsHtml(text);
            };
        })
        .controller("AppCtrl", function ($scope, $rootScope, $mdMedia, $timeout, $document, $window, $mdSidenav, $parse, $log) {
            $scope.customQuery = $mdMedia('(min-width: 500px)');
            $scope.anotherCustom = $mdMedia('max-width: 400px');


            if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
                $scope.isTouch = true;
                $scope.flex_small_content = 100;
            } else {
                $scope.isTouch = false;
                $scope.flex_small_content = 85;
            }

            function animateSwipe() {
                if ($scope.isTouch) {
                    $scope.showSlide = true;
                    $scope.showFace = false;
                    $timeout(function () {
                        $scope.showSlide = false;
                        $scope.showFace = true;
                    }, 3000);
                }
                else {
                    $scope.showSlide = false;
                    $scope.showFace = true;
                }

            }

            animateSwipe();

            function checkSideBarsDimension() {
                var documentWidth = $window.document.body.clientWidth;
                if ($mdMedia('min-width: 1600px')) {
                    $rootScope.contentStyle = {
                        width: (documentWidth - 550 - 20) + 'px',
                        'max-width': (documentWidth - 550 - 20) + 'px'
                    };
                    $rootScope.size = 'xl';
                } else if ($mdMedia('min-width: 1200px')) {
                    $rootScope.contentStyle = {
                        width: (documentWidth - 350 - 20) + 'px',
                        'max-width': (documentWidth - 350 - 20) + 'px'
                    };
                    $rootScope.size = 'lg';
                } else if ($mdMedia('min-width: 900px')) {
                    $rootScope.contentStyle = {
                        width: (documentWidth - 350 - 20) + 'px',
                        'max-width': (documentWidth - 350 - 20) + 'px'
                    };
                    $rootScope.size = 'md';
                } else if ($mdMedia('min-width: 600px')) {
                    $rootScope.contentStyle = {
                        width: (documentWidth - 40) + 'px',
                        'max-width': (documentWidth - 40) + 'px',
                        'margin-left': '20px'
                    };
                    $rootScope.size = 'sm';
                } else {
                    $rootScope.contentStyle = {};
                    $rootScope.size = 'xs';
                }

                console.log($window);

                if ($mdMedia('max-width: 400px')) {
                    angular.element(document.getElementById('smallLeft'))
                        .removeClass('small-sidenav');

                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('small-contact-sidenav');
                }
                else if ($mdMedia('max-width: 500px')) {
                    angular.element(document.getElementById('smallLeft')).removeClass('small-sidenav');
                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('medium-contact-sidenav');
                }
                else if ($mdMedia('max-width: 600')) {
                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('medium-contact-sidenav');


                }
                else if ($mdMedia('max-width: 900')) {
                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('large-contact-sidenav');
                }
                else if ($mdMedia('max-width: 1200')) {
                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('large-contact-sidenav');
                }
                else {
                    angular.element(document.getElementById('right'))
                        .removeClass('large-contact-sidenav')
                        .removeClass('medium-contact-sidenav')
                        .removeClass('small-contact-sidenav')
                        .addClass('large-contact-sidenav');
                }

            }

            angular.element($window).bind('orientationchange', function () {
                checkSideBarsDimension();
            });
            angular.element($window).bind('resize', function () {
                checkSideBarsDimension();
            });
            checkSideBarsDimension();


            $scope.swipeRight = function () {
                if ($mdMedia('max-width: 900px') === true) {
                    console.log("max-width : <600");
                    $mdSidenav('largeLeft').toggle();
                }

                $mdSidenav('right').close();
            };

            $scope.swipeLeft = function () {
                $mdSidenav('largeLeft').close();
                $mdSidenav('right').toggle();
            };

            $scope.goToAnchor = function (id) {

                var someElement = angular.element(document.getElementById(id));

                $mdSidenav('largeLeft').close();
                $document.scrollToElement(someElement, 70, 1000).then(function () {
                    /*var scrollaction =  $document.find("[scrollaction]")[0].attributes.scrollaction.value;
                     scrollaction = $parse(scrollaction)($scope);
                     angular.element("#" + scrollaction[id]).css("background-color", "#EBEBEB");*/

                });


            };

            $scope.toggleLeft = function () {
                $mdSidenav('largeLeft').toggle()
                    .then(function () {
                        $log.debug("toggle left is done");
                    });
            };


        });

})();;(function () {
    'use strict';

    angular.module('Antoine_Lucas_CV.education', ['Antoine_Lucas_CV.services'])
            .controller('EducationCtrl', function ($scope, DataSource) {

                $scope.education = DataSource.get_education();

            });
})();;(function () {
    'use strict';

    angular.module('Antoine_Lucas_CV.interests', ['Antoine_Lucas_CV.services'])
            .controller('InterestsCtrl', function ($scope, DataSource) {

                $scope.interests = DataSource.get_interests();

            });
})();;(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.portfolio', ['Antoine_Lucas_CV.services'])
            .controller('PortfolioCtrl', function ($scope, DataSource) {

                $scope.portfolio = DataSource.get_education();

            });
})();;(function () {
    'use strict';

    angular.module('Antoine_Lucas_CV.social', ['Antoine_Lucas_CV.services'])
        .controller('SocialCtrl', function ($scope, DataSource) {

            $scope.social = DataSource.get_social();

        });
})();;(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.open', ['Antoine_Lucas_CV.services'])
            .controller('OpenCtrl', function ($scope, DataSource) {

                $scope.openSource = DataSource.get_open_source();

            });
})();;(function () {
    'use strict';

    angular.module('Antoine_Lucas_CV.intro', ['Antoine_Lucas_CV.services'])
        .controller('IntroCtrl', function ($scope, DataSource) {

            $scope.paper = DataSource.get_paper();

        })
       ;
})();
;(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.pro', ['Antoine_Lucas_CV.services'])
            .controller('ProCtrl', function ($scope, DataSource) {

                $scope.experience = DataSource.get_work_experience();
                $scope.skills = DataSource.get_skills();

            });
})();;(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.service', ['Antoine_Lucas_CV.services'])
            .controller('ServiceCtrl', function ($scope, $timeout, DataSource) {

                $scope.services = DataSource.get_services();
                $scope.skills = DataSource.get_skills();

                $scope.options = {
                    from: 1,
                    to: 5,
                    step: 0.5,
                    scale: [0, '|', 1, '|', 2, '|', 3, '|', 4, '|', 5]
                };

                $timeout(function () {

                    TagCanvas.Start('myCanvas', 'tags', {
                        reverse: false,
                        depth: 0.99,
                        initial: [0.1, 0],
                        noMouse: true,
                        radiusX: 0.6,
                        radiusY: 0.6,
                        textColour: '#ffffff',
                        //shape: 'hring',
                        shadowBlur: 4,
                        shadow: '#000000',
                        shadowOffset: [2, 2]
                    }, 2000);

                },5000);

            });
})();;(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.skills', ['Antoine_Lucas_CV.services'])
            .controller('SkillsCtrl', function ($scope, DataSource) {

                $scope.skills = DataSource.get_skills();

            });

})();
        ;(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.contact', ['Antoine_Lucas_CV.services', 'ngMaterial', 'ngMessages'])
        .controller('ContactCtrl', function ($scope, DataSource) {
            $scope.data = {
                selectedIndex: 0,
                secondLocked: true,
                secondLabel: "Item Two"
            };
            $scope.next = function () {
                $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
            };
            $scope.previous = function () {
                $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
            };


        })
        .controller('FormCtrl', function ($scope, DataSource) {
            $scope.user = {
                name: '',
                _replyto: '',
                message: ''
            };
            $scope.mailSent = false;
            $scope.sendMail = function (form) {
                console.log(form);
                if (form.$valid) {
                    $scope.mailSent = true;
                    DataSource.contact_me($scope.user).success(function () {
                        console.log("success");
                    }).error(function (a, b, c, d) {
                        console.log('error');
                        console.log(a);
                        console.log(b);
                        console.log(c);
                        console.log(d);
                    });
                }

            };
        })
        .controller('SkypeCtrl', function ($scope, $timeout) {
            $timeout(function () {

                Skype.ui({
                    name: "dropdown", "element": "SkypeButton_Call_montpellier_1001net",
                    "participants": ["montpellier_1001net"],
                    "imageSize": 32
                });

            });
        })
        .controller('HangoutCtrl', function ($scope, $timeout) {
            $scope.user = {
                phone: '+61 424207292'
            };
            $timeout(function () {
                var t = gapi.hangout.render('placeholder-div', {
                    render: 'createhangout',
                    hangout_type: "normal",
                    invites: [
                        //{invite_type: 'email', id: 'antoine.lucas.australia@gmail.com'},
                        {invite_type: 'phone', id: $scope.user.phone}
                        //{invite_type: 'email', id: 'cooluhuru@gmail.com'}
                    ],
                    topic: "Interview1"

                });
                console.log(t);

            });


        });
})();
/*
 .config(function ($mdThemingProvider) {
 // Configure a dark theme with primary foreground yellow
 $mdThemingProvider.theme('default')
 .primaryPalette('blue-grey')
 .accentPalette('orange')
 .warnPalette('brown');
 })*/


;(function () {
    'use strict';

    angular.module('Antoine_Lucas_CV.menu', [])
            .controller('MenuCtrl', function ($scope, $window) {

                $scope.showPortrait = false;

                angular.element($window).bind("scroll", function () {


                    var elem = angular.element(document.getElementById("intro-name"));
                    if (this.pageYOffset < (elem[0].offsetTop + elem[0].offsetHeight)) {
                        $scope.showPortrait = false;
                    }
                    else {
                        $scope.showPortrait = true;

                    }
                    $scope.$apply();
                    console.log("showPortrait = " + $scope.showPortrait);

                });



            });
})();






       ;(function () {
    'use strict';
    angular.module('Antoine_Lucas_CV.technologies', ['Antoine_Lucas_CV.services'])
            .controller('TechnologiesCtrl', function ($scope, DataSource) {

                $scope.technologies = DataSource.get_technology_used();

            });
})();;angular.module('templates-main', ['views/contact.min.html', 'views/education.min.html', 'views/form.min.html', 'views/hangout.min.html', 'views/interests.min.html', 'views/intro.min.html', 'views/menu-content-header.min.html', 'views/menu-content1.min.html', 'views/menu-content2.min.html', 'views/menu.min.html', 'views/open-source.min.html', 'views/portfolio.min.html', 'views/professional.min.html', 'views/services.min.html', 'views/skype.min.html', 'views/social.min.html', 'views/skills.html']);

angular.module("views/contact.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/contact.min.html",
    "<div class=\"tabsdemoStaticTabs sample\"><md-tabs class=\"md-accent\" md-selected=\"data.selectedIndex\"><md-tab id=\"tab1\" aria-controls=\"tab1-content\"><img src=\"app/img/form-ico.png\" hide-gt-md> <span hide show-gt-md>Contact Form</span></md-tab><md-tab id=\"tab2\" aria-controls=\"tab2-content\"><img src=\"app/img/hangout.png\" hide-gt-md> <span hide show-gt-md>Hangout</span></md-tab><md-tab id=\"tab3\" aria-controls=\"tab3-content\"><img src=\"app/img/skype.png\" hide-gt-md> <span hide show-gt-md>Skype</span></md-tab></md-tabs><ng-switch on=\"data.selectedIndex\" class=\"tabpanel-container\"><div role=\"tabpanel\" id=\"tab1-content\" aria-labelledby=\"tab1\" ng-switch-when=\"0\" md-swipe-left=\"next()\" md-swipe-right=\"previous()\"><div ng-include=\" 'app/views/form.html'\" ng-controller=\"FormCtrl\"></div></div><div role=\"tabpanel\" id=\"tab2-content\" aria-labelledby=\"tab2\" ng-switch-when=\"1\" md-swipe-left=\"next()\" md-swipe-right=\"previous()\"><div ng-include=\" 'app/views/hangout.html'\" ng-controller=\"HangoutCtrl\"></div></div><div role=\"tabpanel\" id=\"tab3-content\" aria-labelledby=\"tab3\" ng-switch-when=\"2\" md-swipe-left=\"next()\" md-swipe-right=\"previous()\"><div ng-include=\" 'app/views/skype.html' \" ng-controller=\"SkypeCtrl\" style=\"margin-top: -40px\"></div></div></ng-switch></div>");
}]);

angular.module("views/education.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/education.min.html",
    "<section class=\"timeline\"><div class=\"timeline-item\" style=\"margin-bottom:0px !important\"><div class=\"timeline-head\"><i class=\"fa fa-lightbulb-o\"></i></div><div class=\"timeline-head-content\"><h3>Education</h3></div></div></section><section layout=\"row\" ng-repeat=\"(i,edu) in education\"><md-content flex class=\"timeline\"><div ng-if=\"size=='lg' || size=='xl'\"><div class=\"timeline-item-date\" hide show-lg show-gt-lg show-md flex>{{edu.date_from.format('YYYY')}}</div><div class=\"timeline-item-trigger\" slide-toggle=\"#edu{{i}}\"><span><i class=\"fa fa-minus-circle\" style=\"color: white\" ng-show=\"xp.collapsed\" ng-click=\"edu.collapsed = !edu.collapsed\"></i> <i class=\"fa fa-plus-circle\" style=\"color: white\" ng-show=\"!xp.collapsed\" ng-click=\"edu.collapsed = !edu.collapsed\"></i></span></div></div><md-content flex><div ng-if=\"size=='lg' || size=='xl'\" class=\"timeline-arrow\"><i></i></div><md-content class=\"timeline-item-content\" slide-toggle=\"#edu{{i}}\" flex><h3 class=\"timeline-item-title\" data-toggle=\"collapse\" ng-click=\"edu.collapsed = !edu.collapsed\" data-target=\"#edu{{i}}\">{{edu.title}} <span class=\"date\" ng-if=\"size!='lg' && size !='xl'\" flex>{{xp.date_from.format('MMM YYYY')}} ⇢ {{xp.date_to.format(\"MMM YYYY\")}}</span> <span class=\"place\">in {{edu.location.town}} - {{edu.location.country}}</span></h3><div class=\"slideable\" id=\"edu{{i}}\"><p ng-bind-html=\"edu.description | unsafe\"></p><p ng-show=\"edu.website_url.length>0\"><a href=\"{{edu.website_url}}\" target=\"_blank\" title=\"\" class=\"noprint\">→ View website</a></p></div></md-content></md-content></md-content></section><md-divider></md-divider>");
}]);

angular.module("views/form.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/form.min.html",
    "<md-content class=\"md-padding\" ng-show=\"mailSent==true\" style=\"color: #747474\"><h4>Thank you for contacting me.</h4><p>I will get back to you shortly.</p></md-content><md-content class=\"md-padding\" ng-show=\"mailSent==false\"><form name=\"userForm\"><div layout layout-sm=\"column\"><md-input-container flex><label>Your Name</label><input ng-model=\"user.name\" placeholder=\"Enter your Name\" required></md-input-container><md-input-container flex><label>Email</label><input ng-model=\"user._replyto\" placeholder=\"Enter your Email\" required type=\"email\"></md-input-container></div><md-input-container flex><label>Message</label><textarea ng-model=\"user.message\" placeholder=\"Enter your Message\" required>\n" +
    "            \n" +
    "            </textarea></md-input-container><md-input-container flex><md-button class=\"md-raised md-primary\" ng-click=\"sendMail(userForm)\">Contact Me</md-button></md-input-container></form></md-content>");
}]);

angular.module("views/hangout.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/hangout.min.html",
    "<div id=\"placeholder-div\"></div><p style=\"color:#fff\">A Google account is required to proceed with Hangout.</p>");
}]);

angular.module("views/interests.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/interests.min.html",
    "<section class=\"timeline\"><div class=\"timeline-item\" style=\"margin-bottom:0px !important\"><div class=\"timeline-head\"><i class=\"fa fa-lightbulb-o\"></i></div><div class=\"timeline-head-content\"><h3>Interests</h3></div></div></section><section layout=\"row\" ng-repeat=\"(i,int) in interests\"><md-content flex class=\"timeline\"><div><div class=\"timeline-item-date\" ng-if=\"size=='lg' || size=='xl'\" flex></div><div class=\"timeline-item-trigger\" slide-toggle=\"#edu{{i}}\" ng-if=\"size=='lg' || size=='xl'\"><span><i class=\"fa fa-minus-circle\" style=\"color: white\" ng-show=\"int.collapsed\" ng-click=\"int.collapsed = !int.collapsed\"></i> <i class=\"fa fa-plus-circle\" style=\"color: white\" ng-show=\"!int.collapsed\" ng-click=\"int.collapsed = !int.collapsed\"></i></span></div></div><md-content flex><div ng-if=\"size=='lg' || size=='xl'\" class=\"timeline-arrow\"><i></i></div><md-content class=\"timeline-item-content\" slide-toggle=\"#int{{i}}\" flex><h3 class=\"timeline-item-title\" data-toggle=\"collapse\" ng-click=\"int.collapsed = !int.collapsed\" data-target=\"#int{{i}}\">{{int.name}} <span class=\"interests\">{{int.description}}</span></h3><div class=\"slideable\" id=\"int{{i}}\"><img ng-src=\"{{int.photo}}\" class=\"interest-img\"></div></md-content></md-content></md-content></section><md-divider></md-divider>");
}]);

angular.module("views/intro.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/intro.min.html",
    "<md-divider></md-divider><h3 ng-bind-html=\"paper.headline | newlines | trusthtml\"></h3><md-divider></md-divider>");
}]);

angular.module("views/menu-content-header.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/menu-content-header.min.html",
    "<div class=\"logo header1\"><h2>Antoine LUCAS <span>Web Application Developer</span></h2><hr></div>");
}]);

angular.module("views/menu-content1.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/menu-content1.min.html",
    "<md-content md-padding md-margin><md-list style=\"border-top: 1px solid #555\"><md-item><md-item-content><md-button flex ng-click=\"goToAnchor('intro')\" id=\"intro_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-fire\"></i> <span>Intro</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('osource')\" flex id=\"osource_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-book\"></i> <span>Open Source</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('resume')\" flex id=\"resume_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-book\"></i> <span>Resume</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('education')\" flex id=\"education_btn\"><div class=\"btn-content\"><i class=\"fa fa-graduation-cap fa-book\"></i> <span>Education</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('social')\" flex id=\"social_btn\"><div class=\"btn-content\"><i class=\"fa fa-soccer-ball-o fa-book\"></i> <span>Social</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('interests')\" flex id=\"interests_btn\"><div class=\"btn-content\"><i class=\"fa fa-gamepad fa-book\"></i> <span>Interests</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('services')\" flex id=\"service_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-puzzle-piece\"></i> <span>Services</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('skills')\" flex id=\"skills_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-cogs\"></i> <span>Skills</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('technologies')\" flex id=\"technologies_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-terminal\"></i> <span>Tech</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"swipeLeft()\" flex id=\"contact_btn\"><div class=\"btn-content\"><i class=\"fa fal-lg fa-mail-forward\"></i> <span>Contact</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button href=\"generator/ANTOINE_LUCAS_RESUME.doc\" class=\"md-primary\" target=\"_blank\" flex><div class=\"btn-content\"><i class=\"fa fal-lg fa-file-word-o\"></i> <span>Download</span></div></md-button></md-item-content></md-item><md-divider></md-divider></md-list></md-content>");
}]);

angular.module("views/menu-content2.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/menu-content2.min.html",
    "<div class=\"menu\" md-padding md-margin><div class=\"logo\" flex><h2>Antoine LUCAS <span>Web Application Developer</span></h2></div><md-button class=\"md-raised\" flex ng-click=\"goToAnchor('intro')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-fire\"></i> <span>Intro</span></div></md-button><md-button class=\"md-raised\" ng-click=\"goToAnchor('osource')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-book\"></i> <span>Open Source</span></div></md-button><md-button class=\"md-raised\" ng-click=\"goToAnchor('resume')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-book\"></i> <span>Resume</span></div></md-button><md-button class=\"md-raised\" ng-click=\"goToAnchor('education')\" flex><div class=\"btn-content\"><i class=\"fa fa-graduation-cap fa-book\"></i> <span>Education</span></div></md-button><md-button class=\"md-raised\" ng-click=\"goToAnchor('social')\" flex><div class=\"btn-content\"><i class=\"fa fa-soccer-ball-o fa-book\"></i> <span>Social</span></div></md-button><md-button class=\"md-raised\" ng-click=\"goToAnchor('interests')\" flex><div class=\"btn-content\"><i class=\"fa fa-gamepad fa-book\"></i> <span>Interests</span></div></md-button><md-button class=\"md-raised\" ng-click=\"goToAnchor('services')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-puzzle-piece\"></i> <span>Services</span></div></md-button><md-button class=\"md-raised\" ng-click=\"goToAnchor('skills')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-cogs\"></i> <span>Skills</span></div></md-button><md-button class=\"md-raised\" ng-click=\"goToAnchor('technologies')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-terminal\"></i> <span>Tech</span></div></md-button><md-button class=\"md-raised\" ng-click=\"swipeLeft()\" flex><div class=\"btn-content\"><i class=\"fa fal-lg fa-mail-forward\"></i> <span>Contact</span></div></md-button><md-button class=\"md-primary md-raised\" flex><div class=\"btn-content\"><a ng-href=\"generator/ANTOINE_LUCAS_RESUME.doc\" target=\"_blank\"><i class=\"fa fal-lg fa-file-word-o\"></i> <span>Download</span></a></div></md-button></div>");
}]);

angular.module("views/menu.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/menu.min.html",
    "<div ng-controller=\"AppCtrl\" layout=\"column\" style=\"min-height:100%\" ng-swipe-right=\"swipeRight()\" ng-swipe-left=\"swipeLeft()\"><div class=\"topBanner\" ng-if=\"size=='sm' || size=='xs'\"><h1>Antoine LUCAS</h1><div ng-if=\"size=='sm' || size=='xs'\" class=\"toggleBtn\"><i class=\"fa fa-2x fa-bars\" ng-if=\"size=='sm' || size=='xs'\" ng-click=\"toggleLeft()\"></i></div></div><md-whiteframe layout=\"row\" layout-align=\"start end\"><md-content class=\"md-sidenav-left md-whiteframe-z2 large-sidenav\" ng-if=\"size=='xl'\" layout=\"row\"><div ng-include=\"'app/views/menu-content-header.html'\" flex=\"50\" style=\"background-color: #747474\"></div><div ng-include=\" 'app/views/menu-content1.html'\" flex=\"50\"></div></md-content><md-content class=\"md-sidenav-left md-whiteframe-z3 small-sidenav\" ng-if=\"size=='lg' || size=='md'\" layout=\"column\"><div ng-include=\"'app/views/menu-content-header.html'\" style=\"background-color: #fff\"></div><div ng-include=\" 'app/views/menu-content1.html'\"></div></md-content><md-sidenav class=\"md-sidenav-right md-whiteframe-z3\" md-component-id=\"right\" id=\"right\"><div ng-include=\" 'app/views/contact.html'\" ng-controller=\"ContactCtrl\"></div></md-sidenav><md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"largeLeft\" id=\"largeLeft\" layout=\"row\" ng-if=\"size=='sm' || size=='xs'\"><div ng-include=\" 'app/views/menu-content2.html'\"></div></md-sidenav><md-content class=\"content md-padding\" ng-style=\"contentStyle\"><div layout=\"column\" layout-fill layout-align=\"top center\"><section class=\"intro\" id=\"intro\"><div id=\"intro-name\" ng-if=\"size != 'xl' && size!='sm' && size!='xs'\"><span>Antoine</span><div class=\"fade-show-container\"><img style=\"vertical-align:middle\" class=\"fade-show\" src=\"app/img/Slide.png\" id=\"slideImg\" ng-show=\"showSlide\"> <img style=\"vertical-align:middle\" class=\"fade-show\" src=\"app/img/me.png\" alt=\"Antoine LUCAS\" id=\"photoImg\" ng-show=\"showFace\"></div><span>Lucas</span><div style=\"clear:both\"></div></div><div ng-include=\" 'app/views/intro.html'\" ng-controller=\"IntroCtrl\"></div></section><md-whiteframe class=\"md-section md-whiteframe-z1\" layout=\"column\" layout-align=\"left center\"><div><h2 class=\"mtcon-title\">Resume</h2></div><div id=\"osource\" ng-include=\" 'app/views/open-source.html'\" ng-controller=\"OpenCtrl\"></div><div id=\"resume\" ng-include=\" 'app/views/professional.html'\" ng-controller=\"ProCtrl\"></div><div id=\"education\" ng-include=\" 'app/views/education.html'\" ng-controller=\"EducationCtrl\"></div><div id=\"interests\" ng-include=\" 'app/views/interests.html'\" ng-controller=\"InterestsCtrl\"></div></md-whiteframe><md-whiteframe class=\"md-section md-whiteframe-z1\" layout=\"column\" layout-align=\"left center\"><div><h2 class=\"mtcon-title\">Social Links</h2></div><div id=\"social\" ng-include=\"'app/views/social.html'\" ng-controller=\"SocialCtrl\"></div></md-whiteframe><md-whiteframe class=\"md-section md-whiteframe-z1\" id=\"services\"><div><h2 class=\"mtcon-title\">Services</h2></div><div ng-include=\" 'app/views/services.html'\" ng-controller=\"ServiceCtrl\"></div></md-whiteframe><md-whiteframe class=\"md-section md-whiteframe-z1\" id=\"skills\"><div><h2 class=\"mtcon-title\">Skills</h2></div><div ng-include=\" 'app/views/skills.html'\" ng-controller=\"SkillsCtrl\"></div></md-whiteframe><md-whiteframe class=\"md-section md-whiteframe-z1\" id=\"technologies\"><div><h2 class=\"mtcon-title\">Technology used for this page</h2></div><div ng-include=\" 'app/views/technologies.html'\" ng-controller=\"TechnologiesCtrl\"></div></md-whiteframe></div><div flex></div></md-content></md-whiteframe></div>");
}]);

angular.module("views/open-source.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/open-source.min.html",
    "<section class=\"timeline\"><div class=\"timeline-item\" style=\"margin-bottom:0px !important\"><div class=\"timeline-head\"><i class=\"fa fa-lightbulb-o\"></i></div><div class=\"timeline-head-content\"><h3>Open Source projects</h3></div></div></section><section layout=\"row\" ng-repeat=\"(i,os) in openSource\"><md-content flex class=\"timeline\"><div ng-if=\"size=='lg' || size=='xl'\"><div class=\"timeline-item-date\" hide show-gt-lg flex>Released {{os.date_from.format('MMM YYYY')}}</div><div class=\"timeline-item-date\" hide show-lg show-md flex>Released {{os.date_from.format('YYYY')}}</div><div class=\"timeline-item-trigger\" slide-toggle=\"#os{{i}}\"><span><i class=\"fa fa-minus-circle\" style=\"color: white\" ng-show=\"os.collapsed\" ng-click=\"os.collapsed = !os.collapsed\"></i> <i class=\"fa fa-plus-circle\" style=\"color: white\" ng-show=\"!os.collapsed\" ng-click=\"os.collapsed = !os.collapsed\"></i></span></div></div><md-content flex><div ng-if=\"size=='lg' || size=='xl'\" class=\"timeline-arrow\"><i></i></div><md-content class=\"timeline-item-content\" flex><h3 class=\"timeline-item-title\" slide-toggle=\"#os{{i}}\" ng-click=\"os.collapsed = !os.collapsed\">{{os.title}} <span class=\"date\" ng-if=\"size!='lg' && size !='xl'\" flex>Released {{os.date_from.format('MMM YYYY')}}</span></h3><div class=\"slideable\" id=\"os{{i}}\"><ul><li>{{os.description}}</li></ul><p ng-show=\"os.websites.length>0\"><strong>Websites:</strong> <a ng-repeat=\"website in os.websites\" class=\"website\" ng-href=\"{{website.url}}\" target=\"_blank\" title=\"{{website.title}}\">{{website.title}}</a></p><label ng-repeat=\"tag in os.tags\" class=\"tag\">{{tag}}</label></div></md-content></md-content></md-content></section><md-divider></md-divider>");
}]);

angular.module("views/portfolio.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/portfolio.min.html",
    "<section id=\"works\" class=\"section mtcon\"><div class=\"row\"><h2 class=\"mtcon-title\">Works</h2><div class=\"span8 short-dec\"><p>The Sky People have sent us a message... that they can take whatever they want. That no one can stop them. Well, we will send them a message. You ride out as fast as the wind can carry you. You tell the other clans to come. Tell them Toruk Macto calls to them! You fly now, with me! My brothers! Sisters! And we will show the Sky People... that they cannot take whatever they want! And that this... this is our land!</p></div></div><div class=\"row\"><div id=\"options\" class=\"clearfix\"><ul id=\"filters\" class=\"option-set clearfix\" data-option-key=\"filter\"><li><a href=\"#filter\" data-option-value=\"*\" class=\"selected\">all works</a></li><li ng-repeat=\"folio in portfolio\"><a href=\"#filter\" data-option-value=\"{{folio.name}}\">{{folio.name}}</a></li></ul></div><div id=\"portfolio\" class=\"clearfix\"><div ng-repeat=\"folio in portfolio\" class=\"block {{folio.name}}\"><div class=\"view view-first\"><div class=\"tringle\"></div><img src=\"app/img/work/1/1.jpg\" alt=\"\"><div class=\"mask\"><a class=\"info\" data-rel=\"prettyPhoto\" href=\"img/big/1.jpg\"></a> <a class=\"link\" href=\"#\"></a></div></div><div class=\"des\"><h4>{{folio.title}}</h4><p>{{folio.description}}</p></div></div></div></div></section>");
}]);

angular.module("views/professional.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/professional.min.html",
    "<section class=\"timeline\"><div class=\"timeline-item\" style=\"margin-bottom:0px !important\"><div class=\"timeline-head\"><i class=\"fa fa-lightbulb-o\"></i></div><div class=\"timeline-head-content\"><h3>Work Experience</h3></div></div></section><section layout=\"row\" ng-repeat=\"(i,xp) in experience\"><md-content flex class=\"timeline\"><div ng-if=\"size=='lg' || size=='xl'\"><div class=\"timeline-item-date\" hide show-gt-lg flex>{{xp.date_from.format('MMM YYYY')}} <span>⇢ {{xp.date_to.format(\"MMM YYYY\")}}</span></div><div class=\"timeline-item-date\" hide show-lg show-md flex>{{xp.date_from.format('YYYY')}} <span>⇢ {{xp.date_to.format(\"YYYY\")}}</span></div><div class=\"timeline-item-trigger\" slide-toggle=\"#xp{{i}}\"><span><i class=\"fa fa-minus-circle\" style=\"color: white\" ng-show=\"xp.collapsed\" ng-click=\"xp.collapsed = !xp.collapsed\"></i> <i class=\"fa fa-plus-circle\" style=\"color: white\" ng-show=\"!xp.collapsed\" ng-click=\"xp.collapsed = !xp.collapsed\"></i></span></div></div><md-content flex><div ng-if=\"size=='lg' || size=='xl'\" class=\"timeline-arrow\"><i></i></div><md-content class=\"timeline-item-content\" flex><h3 class=\"timeline-item-title\" slide-toggle=\"#xp{{i}}\" ng-click=\"xp.collapsed = !xp.collapsed\">{{xp.title}} <span class=\"date\" ng-if=\"size!='lg' && size !='xl'\" flex>{{xp.date_from.format('MMM YYYY')}} ⇢ {{xp.date_to.format(\"MMM YYYY\")}}</span> <span class=\"place\">@ {{xp.company_name}}</span></h3><div class=\"slideable\" id=\"xp{{i}}\"><ul><li ng-repeat=\"description in xp.description\">{{description.text}}</li></ul><p ng-show=\"xp.websites.length>0\"><strong>Websites:</strong> <a ng-repeat=\"website in xp.websites\" class=\"website\" ng-href=\"{{website.url}}\" target=\"_blank\" title=\"{{website.title}}\">{{website.title}}</a></p><label ng-repeat=\"tag in xp.tags\" class=\"tag\">{{tag}}</label></div></md-content></md-content></md-content></section><md-divider></md-divider>");
}]);

angular.module("views/services.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/services.min.html",
    "<section layout=\"row\" layout-align=\"center center\"><md-content flex=\"100\"><p style=\"color: #6C6662;padding:0px 15px;background-color:transparent;font: 14px 'PT Sans',sans-serif\">I do full-time and part-time remote jobs online, and I am usually open to use any communication media available (Skype, Hangout, Phone, VoIP).</p></md-content></section><section layout=\"row\" layout-wrap style=\"padding-bottom:30px\"><md-content class=\"service\" ng-repeat=\"(i, service) in services\" style=\"margin-bottom: 20px\" flex-gt-md=\"30\" flex-md=\"80\" flex-sm=\"100\"><flippy class=\"fancy my-fancy\" ng-click=\"flip()\" ng-mouseenter=\"flip()\" ng-mouseleave=\"flip()\" flip-duration=\"800\" timing-function=\"ease-in-out\"><flippy-front><img ng-if=\"service.image !== false\" ng-src=\"{{service.image}}\"><div ng-if=\"service.image === false\"><canvas width=\"138\" height=\"138\" id=\"myCanvas\" style=\"background-color: #000;border-radius : 75px\"><p>Anything in here will be replaced on browsers that support the canvas element</p></canvas><div id=\"tags\"><a href=\"\" weight=\"20\">PHP5</a> <a href=\"\" weight=\"10\">Zend1</a> <a href=\"\" weight=\"20\">AngularJS</a> <a href=\"\" weight=\"5\">EmberJS</a> <a href=\"\" weight=\"15\">Javascript</a> <a href=\"\" weight=\"15\">HTML5</a> <a href=\"\" weight=\"15\">Foundation</a> <a href=\"\" weight=\"15\">Bootstrap</a> <a href=\"\" weight=\"18\">Apache2</a> <a href=\"\" weight=\"18\">MySQL</a> <a href=\"\" weight=\"15\">MariaDB</a> <a href=\"\" weight=\"12\">MongoDB</a> <a href=\"\" weight=\"15\">MEAN.js</a> <a href=\"\" weight=\"10\">NodeJS</a> <a href=\"\" weight=\"8\">Java</a> <a href=\"\" weight=\"12\">Yii</a> <a href=\"\" weight=\"18\">Sphinx</a> <a href=\"\" weight=\"10\">Code Igniter</a> <a href=\"\" weight=\"18\">REST</a> <a href=\"\" weight=\"15\">SOAP</a> <a href=\"\" weight=\"18\">CSS3</a> <a href=\"\" weight=\"12\">Jasmine</a> <a href=\"\" weight=\"12\">Karma</a> <a href=\"\" weight=\"5\">Python</a> <a href=\"\" weight=\"10\">Meteor</a></div></div><h2 style=\"font-size : 20px\">{{service.title}}</h2></flippy-front><flippy-back><h2 style=\"font-size : 20px\">{{service.title}}</h2><p ng-bind-html=\"service.description | unsafe\"></p></flippy-back></flippy></md-content></section>");
}]);

angular.module("views/skype.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/skype.min.html",
    "<div id=\"SkypeButton_Call_montpellier_1001net\"></div><p style=\"color:#fff\">Do you Skype installed on this computer?</p>");
}]);

angular.module("views/social.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/social.min.html",
    "<section layout=\"row\"><md-content><div layout=\"row\" layout-sm=\"column\"><md-card ng-repeat=\"soc in social\" flex><a href=\"{{soc.url}}\" target=\"_blank\"><img ng-src=\"{{soc.logo_url}}\" class=\"md-card-image\" alt=\"{{soc.name}}\"></a></md-card></div></md-content><br><br></section><md-divider></md-divider>");
}]);

angular.module("views/skills.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/skills.html",
    "<section layout=\"row\"    layout-wrap >\n" +
    "    \n" +
    "    <md-content class=\"skill\" flex-gt-md=\"30\"  flex-md=\"100\" flex-sm=\"100\"  style=\"background-color: #EBEBEB;color: #000\" >\n" +
    "        \n" +
    "        <div class=\"skill-title\">Programming</div>\n" +
    "        <div ng-repeat=\"(i, coding) in skills.coding\">\n" +
    "            <div style=\"text-align: center;width: 190px;font-weight: bold;font-size: 15px;margin: auto;margin-top: 10px;margin-bottom: 10px;background-color: #fff;border-radius:10px;\">\n" +
    "                {{coding.name}}\n" +
    "            </div>\n" +
    "            \n" +
    "            <div style=\"clear:both\"></div>\n" +
    "            \n" +
    "            \n" +
    "            <md-content flex=\"60\"></md-content>\n" +
    "            <md-list style=\"background-color:#EBEBEB\">\n" +
    "                <md-item ng-repeat=\"(j,code) in coding.languages\" >\n" +
    "                    <md-item-content style=\"background-color:#EBEBEB\">\n" +
    "                        <md-content flex=\"40\" style=\"background-color:#EBEBEB;font-size: 12px;text-transform: uppercase;border: 1px solid transparent;text-align: right;padding-right: 10px;height: 20px;\">\n" +
    "                            {{code.name}}\n" +
    "                        </md-content>\n" +
    "                        <md-content flex=\"60\" style=\"background-color:#EBEBEB\">\n" +
    "                            <div data-ng-class=\"{'score-red': code.percentage<=1,'score-yellow': code.percentage>1 && code.percentage<=3.5,'score-green': code.percentage>3.5}\" style=\"border: 1px solid #fff;height: 20px;width: {{code.percentage * 20}}%\"\">\n" +
    "\n" +
    "                            </div>\n" +
    "                        </md-content>\n" +
    "\n" +
    "                    </md-item-content>\n" +
    "                </md-item>\n" +
    "            </md-list> \n" +
    "            \n" +
    "        </div>\n" +
    "\n" +
    "    </md-content>\n" +
    "\n" +
    "    <md-content class=\"skill\"  flex-gt-md=\"30\"  flex-md=\"100\" flex-sm=\"100\"  style=\"\" >\n" +
    "        \n" +
    "        <div class=\"skill-title\">\n" +
    "            Sys Admin\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"(i, coding) in skills.server\">\n" +
    "            <div style=\"text-align: center;width: 190px;font-weight: bold;font-size: 15px;margin: auto;margin-top: 10px;margin-bottom: 10px;background-color: #fff;border-radius:10px;\">\n" +
    "                {{coding.name}}\n" +
    "            </div>\n" +
    "            \n" +
    "            <div style=\"clear:both\"></div>\n" +
    "            \n" +
    "            \n" +
    "            <md-content flex=\"60\"></md-content>\n" +
    "            <md-list style=\"background-color:#EBEBEB\">\n" +
    "                <md-item ng-repeat=\"(j,code) in coding.languages\" >\n" +
    "                    <md-item-content style=\"background-color:#EBEBEB\">\n" +
    "                        <md-content flex=\"40\" style=\"background-color:#EBEBEB;font-size: 12px;text-transform: uppercase;border: 1px solid transparent;text-align: right;padding-right: 10px;height: 20px;\">\n" +
    "                            {{code.name}}\n" +
    "                        </md-content>\n" +
    "                        <md-content flex=\"60\" style=\"background-color:#EBEBEB\">\n" +
    "                            <div data-ng-class=\"{\n" +
    "                                'score-red': code.percentage<=1,\n" +
    "                                'score-yellow': code.percentage>1 && code.percentage<=3.5,\n" +
    "                                'score-green': code.percentage>3.5\n" +
    "                            }\" style=\"border: 1px solid #fff;height: 20px;width: {{code.percentage * 20}}%\"\">\n" +
    "\n" +
    "                            </div>\n" +
    "                        </md-content>\n" +
    "\n" +
    "                    </md-item-content>\n" +
    "                </md-item>\n" +
    "            </md-list> \n" +
    "            \n" +
    "        </div>\n" +
    "\n" +
    "    </md-content>\n" +
    "\n" +
    "    <md-content flex-gt-md=\"30\"  flex-md=\"100\" flex-sm=\"100\"  class=\"skill\">\n" +
    "        \n" +
    "        <div class=\"skill-title\">\n" +
    "            Softwares\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"(i, coding) in skills.softwares\">\n" +
    "            <div style=\"text-align: center;width: 190px;font-weight: bold;font-size: 15px;margin: auto;margin-top: 10px;margin-bottom: 10px;background-color: #fff;border-radius:10px;\">\n" +
    "                {{coding.name}}\n" +
    "            </div>\n" +
    "            \n" +
    "            <div style=\"clear:both\"></div>\n" +
    "            \n" +
    "            \n" +
    "            <md-content flex=\"60\"></md-content>\n" +
    "            <md-list style=\"background-color:#EBEBEB\">\n" +
    "                <md-item ng-repeat=\"(j,code) in coding.languages\" >\n" +
    "                    <md-item-content style=\"background-color:#EBEBEB\">\n" +
    "                        <md-content flex=\"40\" style=\"background-color:#EBEBEB;font-size: 12px;text-transform: uppercase;border: 1px solid transparent;text-align: right;padding-right: 10px;height: 20px;\">\n" +
    "                            {{code.name}}\n" +
    "                        </md-content>\n" +
    "                        <md-content flex=\"60\" style=\"background-color:#EBEBEB\">\n" +
    "                            <div data-ng-class=\"{\n" +
    "                                'score-red': code.percentage<=1,\n" +
    "                                'score-yellow': code.percentage>1 && code.percentage<=3.5,\n" +
    "                                'score-green': code.percentage>3.5\n" +
    "                            }\" style=\"border: 1px solid #fff;height: 20px;width: {{code.percentage * 20}}%\"\">\n" +
    "\n" +
    "                            </div>\n" +
    "                        </md-content>\n" +
    "\n" +
    "                    </md-item-content>\n" +
    "                </md-item>\n" +
    "            </md-list> \n" +
    "            \n" +
    "        </div>\n" +
    "\n" +
    "    </md-content>\n" +
    "</section>\n" +
    "\n" +
    "");
}]);
