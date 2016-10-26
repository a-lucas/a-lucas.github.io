angular.module('templates-main', ['views/contact.min.html', 'views/education.min.html', 'views/form.min.html', 'views/hangout.min.html', 'views/interests.min.html', 'views/intro.min.html', 'views/menu-content-header.min.html', 'views/menu-content1.min.html', 'views/menu-content2.min.html', 'views/menu.min.html', 'views/open-source.min.html', 'views/portfolio.min.html', 'views/professional.min.html', 'views/services.min.html', 'views/skype.min.html', 'views/social.min.html', 'views/skills.html']);

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
