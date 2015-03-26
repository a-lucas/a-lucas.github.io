/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var myModule = angular.module('Antoine_Lucas_CV.services', []).service('DataSource', function ($http) {
var now = moment({year: 2012, month: 2});
        console.log(now);
        this.contact_me = function (contact) {


/*        curl - s --user 'api:key-7d366fbeba5d2ae1e9ffaeb04b012dea' \
                https://api.mailgun.net/v2/a-lucas.github.io/messages \
                - F from = 'Excited User <mailgun@a-lucas.github.io>' \
                - F to = cooluhuru@gmail.com \
                - F to = bar@example.com \
                - F subject = 'Hello' \
                - F text = 'Testing some Mailgun awesomness!'*/

                return;

                return $http.post('https://formkeep.com/f/b4e0421f2b4b', contact);
        };
        this.get_work_experience = function () {
        return [
        {
        title: "Senior Web Application Developer",
                company_name: "Veritas Engineering",
                date_from: moment({year: 2013, month: 11}),
                date_to: moment({year: 2014, month: 3}),
                location: {
                country: "Australia",
                        town: "Perth"
                },
                tags: ["AngularJS", "Foundation", "PHP5", "Zend1", "MySQL", "SLIM Framework", "Propel ORM", "LAMP stack"],
                description: "<ul>\
                        <li>Online police checks planning, architecture & cutting edge implementation</li>\
                        <li>Custom CRM design, architecture & implementation</li>\
                        <li>WebServices development</li>\
                        <li>Analytics & SEO ConsultingDescription</li>\
                </ul>",
                website_url: '',
                collapsed: false
        },
        {
        title: "Lead Developer",
                date_from: moment({year: 2010, month: 6}),
                date_to: moment({year: 2013, month: 5}),
                company_name: "Webjobz (Former ExpatJob)",
                location: {
                country: "Australia",
                        town: "Perth"
                },
                description: "<ul><li>I designed and developed a JQuery based CRM with a web based mail client. Mails were retrieved via the IMAP protocol through a custom PHP socket class, and then stored into a MySQL database. They were linked to companies and contacts, then tagged with Leads / Follow Ups and any custom labels. Users were able to access multiple mailboxes at once. An administration interface allowed administrator to create virtual mailboxes, with read/reply permissions.</li>\
                                <li>Ten years of electronic correspondence have been imported from a domino legacy system to this new MySQL database</li>\
                                <li>I wrote the first version of webjobz.com, which was running on a Debian LAMP server (2GB ddr2 ram with an old CPU). The site was gettingthousands of unique visitors per day, and was generating dozens of different XML feeds. All was operating with minimal lag. Site uptime was > 99.99%</li>\
                                <li>SOAP and REST integration with different Job Feeds providers such as JobG8, MOnster, JObRapido and JobAdder</li>\
                                <li>I wrote a PHP framework from scratch to allow a unified  URLs rewritting accros a network of severall websites</li>\
                                <li>I designed the job board search & refine  backend and frontend</li>\
                                <li>System administrator: I maintained successfully a LAMP server stack across 3 dedicated machines. I implemented a MySQL replication backup strategy </li>\
                            </ul>",
                tags: ["PHP5", "Yii", "Google Webmaster", "Google Analytics", "SOAP", "XML Feeds", "SEO", "DoubleClick", "Mysql", "SPHINX search", "JQuery", "IMAP protocol", "Domino"],
                website_url: 'http://www.webjobz.com',
                collapsed: false
        },
        {
        title: "PHP&Jquery Developer",
                date_from: moment({year: 2010, month: 9}),
                date_to: moment({year: 2011, month: 5}),
                company_name: "Digital Ventures",
                location: {
                country: "Australia",
                        town: "Perth"
                },
                description: "<ul>\n\
                                <li>The project was a a clone of AliBaba. I mainly wrote a curl spider engine</li>\
                            </ul>",
                tags: ["PHP5", "Curl", "AliBaba", "MySQL", "JQuery"],
                website_url: '',
                collapsed: false
        },
        {
        title: "Science Teacher",
                date_from: moment({year: 2007, month: 9}),
                date_to: moment({year: 2008, month: 6}),
                company_name: "French School of Khartoun",
                location: {
                country: "Sudan",
                        town: "Kartoum"
                },
                description: "<ul>\n\
                                <li>I did teach Maths Physics & Biology to high school students from diplomatic backgrounds.</li>\
                            </ul>",
                tags: ["Patience", "Kindnes", "Authority"],
                website_url: '',
                collapsed: false
        },
        {
        title: "Freelancer",
                date_from: moment({year: 2006, month: 1}),
                date_to: moment({year: 2007, month: 6}),
                company_name: "1001net",
                location: {
                country: "France",
                        town: "Montpellier"
                },
                description: "<ul>\n\
                                <li>I did learn to code by my own doing some freelance jobs back in France.</li>\
                            </ul>",
                tags: ["Patience", "Kindnes", "Authority"],
                website_url: '',
                collapsed: false
        },
        ];
        };
        this.get_education = function () {
        return [
        {
        title: "Polytech Geotechnic",
                date_from: moment({year: 1998}),
                date_to: moment({year: 2010}),
                location: {
                country: "France",
                        town: "Grenoble"
                },
                description: 'I studied Geotechnic at Polytech (formely known as ISTG) for two years before deciding to study information tehcnologies',
                website_url: 'http://www.polytech-grenoble.fr/',
                collapsed: false
        },
        {
        title: "Bachelor in IT Science",
                date_from: moment({year: 2010}),
                date_to: moment({year: 2011}),
                location: {
                country: "France",
                        town: "Montpellier"
                },
                description: 'I have a solid formation on theorical and practical aspects in networking, databases, information systems, programming, image processing and artificial intelligence.',
                website_url: 'http://en.wikipedia.org/wiki/Montpellier_2_University',
                collapsed: false
        }
        ];
        };
        this.get_services = function () {
        return [
        {
        title: "PhoneGap/Cordova",
                description: "You have an existing web application running AngularJs, EmberJs or written in any javascript web-application framework and you want to transform it into a phone or tablet native application.\\n\
                Migration from an existing web application to an <b>IOS, Android , Windows or Blackberry</b> has never been easier than with the Cordova/PhoneGap tools.",
                image: "img/phone-gap-icon.png"
        },
        {
        title: "Responsive Design",
                description: "Do you need to make your website responsive?\
                A responsive design is a great cost saver. Most of the code doesn;t need any change, only the front-end css & html needs to be modified. The result will be a website that looks great on all platforms : TV, Desktop, Laptops, Tablets and phones. ",
                image: "img/responsive.png"
        },
        {
        title: "Web Development",
                description: "I offer 12 years experience in Web development. I am up to date with most cutting edge open source technologies and old school ones. \
                It can be bug fixes, taking over someone else work, collaboration and team work, sprints and anything web related.",
                image: false
        },
        {
        title: "Web Architect",
                description: "Are you looking to design a complexe web based application. Whatever SASS, Public internet or private  Intranet, it is crucial to take the correct decisions upfront. \
                I have build from scratch many complex web-based system, and I am really passionate to discuss about challenging new concepts",
                image: "img/architect.png"
        },
        {
        title: "Databases",
                description: "Database restoration, Maintenance, MIgration, Design, Replication. The only thing I don't know about is Database Scalability.",
                image: "img/database.png"
        },
        {
        title: "Crawlers",
                description: "A crawler is a bot that automatically scrap web content following a strict specification.\
                A crawler can authenticate, save cookies & session, parse HTML and extract relevant informations.\
                Internet data is HUGE, a good massive crawler engine needs several dedicated servers.",
                image: "img/crawler.png"
        }
        ]
        };
        this.get_skills = function () {
        return {
        coding: [
        {
        logo: 'img/PHP_Logo.png',
                bgColor: '#6082BB',
                name: "PHP",
                languages: [
                {name: "PHP4&5", percentage: 4.5},
                {name: "Zend1", percentage: 4},
                {name: "Yii", percentage: 4.5},
                {name: "Code Igniter", percentage: 3.5},
                {name: "Cake PHP", percentage: 3.5},
                {name: "Phalcon", percentage: 3.5},
                {name: "Laravel", percentage: 4},
                {name: "Slim", percentage: 4.5}
                ]
        },
        {
        logo: 'img/ecma5_logo.png',
                bgColor: '#fff',
                name: "Javascript",
                languages: [
                {name: "Javascript", percentage: 4},
                {name: "JQuery", percentage: 5},
                {name: "AngularJS", percentage: 4.5},
                {name: "Meteor", percentage: 3},
                {name: "nodeJS", percentage: 4},
                {name: "mean.js", percentage: 4.5},
                {name: "Cordova", percentage: 4},
                {name: "backbone", percentage: 1},
                {name: "ember.js", percentage: 1}
                ]
        }, {
        logo: 'img/perl_logo2.png',
                bgColor: '#fff',
                name: "Perl",
                languages: [
                {name: "Perl", percentage: 2.5}
                ]
        },
        {
        logo: 'img/java-oracle.png',
                bgColor: '#fff',
                name: "JAVA",
                languages: [
                {name: "JAVA", percentage: 4},
                {name: "GWT", percentage: 3},
                {name: "Spring MVC", percentage: 2.5},
                {name: "Others", percentage: 0.5}
                ]
        },
        {
        logo: 'img/mslogo.png',
                bgColor: '#fff',
                name: "Microsoft",
                languages: [
                {name: "C#", percentage: 3},
                {name: "ASP", percentage: 2.5},
                {name: "Others", percentage: 0.5}
                ]
        }],
                server: [
                {
                logo: '',
                        name: "Linux",
                        bgColor: '#fff',
                        languages: [
                        {name: "Debian", percentage: 4.5},
                        {name: "RedHat", percentage: 3},
                        {name: "Centos", percentage: 2},
                        {name: "Suze", percentage: 2.5}
                        ]
                },
                {
                logo: '',
                        name: "Databases",
                        bgColor: '#fff',
                        languages: [
                        {name: "MySQL", percentage: 4},
                        {name: "MariaDB", percentage: 4},
                        {name: "MongoDB", percentage: 3.5},
                        {name: "PostgreSQL", percentage: 2},
                        {name: "SQL Server", percentage: 0}
                        ]
                }, {
                logo: '',
                        name: "Web Servers",
                        bgColor: '#fff',
                        languages: [
                        {name: "Apache2", percentage: 4.5},
                        {name: "NGinX", percentage: 4},
                        {name: "Express", percentage: 4},
                        {name: "IIS", percentage: 0}
                        ]
                }
                ],
                softwares: [
                {
                logo: '',
                        name: "Google",
                        bgColor: '#fff',
                        languages: [
                        {name: "Webmaster", percentage: 4.5},
                        {name: "Analytics", percentage: 4.5},
                        {name: "Adwords", percentage: 3},
                        {name: "Double Click", percentage: 4.5}
                        ]
                },
                {
                logo: '',
                        name: "Graphic editors",
                        bgColor: '#fff',
                        languages: [
                        {name: "Gimp", percentage: 3},
                        {name: "Photoshop CE", percentage: 2.5}
                        ]
                },
                {
                logo: '',
                        name: "Code Editors",
                        languages: [
                        {name: "Netbeans", percentage: 4.5},
                        {name: "WebStorm", percentage: 4},
                        {name: "Geany", percentage: 4},
                        {name: "Visual Studio", percentage: 3},
                        {name: "Vi", percentage: 1}
                        ]
                }
                ]

        };
        };
        this.get_interests = function () {
        return ["Kite Surf", "Travelling", "Church"];
        };
        });