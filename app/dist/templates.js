angular.module('templates-main', ['views/contact.min.html', 'views/education.min.html', 'views/form.min.html', 'views/hangout.min.html', 'views/interests.min.html', 'views/intro.min.html', 'views/menu-content-header.min.html', 'views/menu-content1.min.html', 'views/menu-content2.min.html', 'views/menu.min.html', 'views/portfolio.min.html', 'views/professional.min.html', 'views/services.min.html', 'views/skype.min.html', 'views/social.min.html', 'views/skills.html']);

angular.module("views/contact.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/contact.min.html",
    "<div class=\"tabsdemoStaticTabs sample\"><md-tabs class=\"md-accent\" md-selected=\"data.selectedIndex\"><md-tab id=\"tab1\" aria-controls=\"tab1-content\"><img src=\"img/form-ico.png\" hide-gt-md> <span hide show-gt-md>Contact Form</span></md-tab><md-tab id=\"tab2\" aria-controls=\"tab2-content\"><img src=\"img/hangout.png\" hide-gt-md> <span hide show-gt-md>Hangout</span></md-tab><md-tab id=\"tab3\" aria-controls=\"tab3-content\"><img src=\"img/skype.png\" hide-gt-md> <span hide show-gt-md>Skype</span></md-tab></md-tabs><ng-switch on=\"data.selectedIndex\" class=\"tabpanel-container\"><div role=\"tabpanel\" id=\"tab1-content\" aria-labelledby=\"tab1\" ng-switch-when=\"0\" md-swipe-left=\"next()\" md-swipe-right=\"previous()\"><div ng-include=\" 'views/form.html'\" ng-controller=\"FormCtrl\"></div></div><div role=\"tabpanel\" id=\"tab2-content\" aria-labelledby=\"tab2\" ng-switch-when=\"1\" md-swipe-left=\"next()\" md-swipe-right=\"previous()\"><div ng-include=\" 'views/hangout.html'\" ng-controller=\"HangoutCtrl\"></div></div><div role=\"tabpanel\" id=\"tab3-content\" aria-labelledby=\"tab3\" ng-switch-when=\"2\" md-swipe-left=\"next()\" md-swipe-right=\"previous()\"><div ng-include=\" 'views/skype.html' \" ng-controller=\"SkypeCtrl\" style=\"margin-top: -40px\"></div></div></ng-switch></div>");
}]);

angular.module("views/education.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/education.min.html",
    "<section class=\"timeline\"><div class=\"timeline-item\" style=\"margin-bottom:0px !important\"><div class=\"timeline-head\"><i class=\"fa fa-lightbulb-o\"></i></div><div class=\"timeline-head-content\"><h3>Education</h3></div></div></section><section layout=\"row\" ng-repeat=\"(i,edu) in education\"><md-content flex class=\"timeline\"><div><div class=\"timeline-item-date\" hide show-lg show-gt-lg show-md flex>{{edu.date_from.format('YYYY')}}</div><div class=\"timeline-item-trigger\" slide-toggle=\"#edu{{i}}\"><span><i class=\"fa fa-minus-circle\" style=\"color: white\" ng-show=\"xp.collapsed\" ng-click=\"edu.collapsed = !edu.collapsed\"></i> <i class=\"fa fa-plus-circle\" style=\"color: white\" ng-show=\"!xp.collapsed\" ng-click=\"edu.collapsed = !edu.collapsed\"></i></span></div></div><md-content flex><div hide-sm hide-md class=\"timeline-arrow\"><i></i></div><md-content class=\"timeline-item-content\" slide-toggle=\"#edu{{i}}\" flex><h3 class=\"timeline-item-title\" data-toggle=\"collapse\" ng-click=\"edu.collapsed = !edu.collapsed\" data-target=\"#edu{{i}}\">{{edu.title}} <span class=\"place\">in {{edu.location.town}} - {{edu.location.country}}</span></h3><div class=\"slideable\" id=\"edu{{i}}\"><p ng-bind-html=\"edu.description | unsafe\"></p><p ng-show=\"edu.website_url.length>0\"><a href=\"{{edu.website_url}}\" target=\"_blank\" title=\"\" class=\"noprint\">→ View website</a></p></div></md-content></md-content></md-content></section><md-divider></md-divider>");
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
    "<section class=\"timeline\"><div class=\"timeline-item\" style=\"margin-bottom:0px !important\"><div class=\"timeline-head\"><i class=\"fa fa-lightbulb-o\"></i></div><div class=\"timeline-head-content\"><h3>Interests</h3></div></div></section><section layout=\"row\" ng-repeat=\"(i,int) in interests\"><md-content flex class=\"timeline\"><div><div class=\"timeline-item-date\" hide show-lg show-gt-lg show-md flex></div><div class=\"timeline-item-trigger\" slide-toggle=\"#edu{{i}}\"><span><i class=\"fa fa-minus-circle\" style=\"color: white\" ng-show=\"int.collapsed\" ng-click=\"int.collapsed = !int.collapsed\"></i> <i class=\"fa fa-plus-circle\" style=\"color: white\" ng-show=\"!int.collapsed\" ng-click=\"int.collapsed = !int.collapsed\"></i></span></div></div><md-content flex><div hide-sm hide-md class=\"timeline-arrow\"><i></i></div><md-content class=\"timeline-item-content\" slide-toggle=\"#int{{i}}\" flex><h3 class=\"timeline-item-title\" data-toggle=\"collapse\" ng-click=\"int.collapsed = !int.collapsed\" data-target=\"#int{{i}}\">{{int.name}} <span class=\"interests\">{{int.description}}</span></h3><div class=\"slideable\" id=\"int{{i}}\"><img src=\"{{int.photo}}\" class=\"interest-img\"></div></md-content></md-content></md-content></section><md-divider></md-divider>");
}]);

angular.module("views/intro.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/intro.min.html",
    "<md-divider></md-divider><h3>I'm an Australia & Europe based web application developer. I am currently available for remote work.<br>I <span style=\"color:red\">&#x3C;3</span> creating modern web and mobile solutions, for startups or small business.</h3><md-divider></md-divider>");
}]);

angular.module("views/menu-content-header.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/menu-content-header.min.html",
    "<div class=\"logo\"><h2>Antoine LUCAS <span>Web Application Developer</span></h2></div>");
}]);

angular.module("views/menu-content1.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/menu-content1.min.html",
    "<md-content md-padding md-margin style=\"padding: 10px\"><md-list><md-item><md-item-content><md-button flex ng-click=\"goToAnchor('intro')\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-fire\"></i> <span>Intro</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('resume')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-book\"></i> <span>Resume</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('education')\" flex><div class=\"btn-content\"><i class=\"fa fa-graduation-cap fa-book\"></i> <span>Education</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('social')\" flex><div class=\"btn-content\"><i class=\"fa fa-soccer-ball-o fa-book\"></i> <span>Social</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('interests')\" flex><div class=\"btn-content\"><i class=\"fa fa-gamepad fa-book\"></i> <span>Interests</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('services')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-puzzle-piece\"></i> <span>Services</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('skills')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-cogs\"></i> <span>Skills</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('technologies')\" flex><div class=\"btn-content\"><i class=\"fa fa-lg fa-terminal\"></i> <span>Tech</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"swipeLeft()\" flex><div class=\"btn-content\"><i class=\"fa fal-lg fa-mail-forward\"></i> <span>Contact</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button href=\"generator/ANTOINE_LUCAS_RESUME.doc\" class=\"md-primary\" target=\"_blank\" flex><div class=\"btn-content\"><i class=\"fa fal-lg fa-file-word-o\"></i> <span>Download</span></div></md-button></md-item-content></md-item><md-divider></md-divider></md-list></md-content>");
}]);

angular.module("views/menu-content2.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/menu-content2.min.html",
    "<md-content md-padding md-margin style=\"padding: 10px\"><div class=\"logo\"><h2>Antoine LUCAS <span>Web Application Developer</span></h2></div><md-list><md-item><md-item-content><md-button flex ng-click=\"goToAnchor('intro')\" id=\"intro_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-fire\"></i> <span>Intro</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('resume')\" flex id=\"resume_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-book\"></i> <span>Resume</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('education')\" flex id=\"education_btn\"><div class=\"btn-content\"><i class=\"fa fa-graduation-cap fa-book\"></i> <span>Education</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('social')\" flex id=\"social_btn\"><div class=\"btn-content\"><i class=\"fa fa-soccer-ball-o fa-book\"></i> <span>Social</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('interests')\" flex id=\"interests_btn\"><div class=\"btn-content\"><i class=\"fa fa-gamepad fa-book\"></i> <span>Interests</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('services')\" flex id=\"service_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-puzzle-piece\"></i> <span>Services</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('skills')\" flex id=\"skills_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-cogs\"></i> <span>Skills</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"goToAnchor('technologies')\" flex id=\"technologies_btn\"><div class=\"btn-content\"><i class=\"fa fa-lg fa-terminal\"></i> <span>Tech</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button ng-click=\"swipeLeft()\" flex id=\"contact_btn\"><div class=\"btn-content\"><i class=\"fa fal-lg fa-mail-forward\"></i> <span>Contact</span></div></md-button></md-item-content></md-item><md-divider></md-divider><md-item><md-item-content><md-button href=\"generator/ANTOINE_LUCAS_RESUME.doc\" class=\"md-primary\" target=\"_blank\" flex><div class=\"btn-content\"><i class=\"fa fal-lg fa-file-word-o\"></i> <span>Download</span></div></md-button></md-item-content></md-item></md-list><div class=\"bg-portrait\" ng-show=\"showPortrait\"></div></md-content>");
}]);

angular.module("views/menu.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/menu.min.html",
    "<div ng-controller=\"AppCtrl\" layout=\"column\" style=\"min-height:100%\" ng-swipe-right=\"swipeRight()\" ng-swipe-left=\"swipeLeft()\"><section layout=\"row\" layout-align=\"end start\"><md-sidenav class=\"md-sidenav-left md-whiteframe-z2 large-sidenav\" class=\"large-sidenav\" id=\"largeLeft\" md-component-id=\"largeLeft\" layout=\"row\"><div ng-include=\"'views/menu-content-header.html'\" flex=\"50\" style=\"background-color: #747474\"></div><div ng-include=\" 'views/menu-content1.html'\" flex=\"50\"></div></md-sidenav><md-sidenav class=\"md-sidenav-left md-whiteframe-z3\" id=\"smallLeft\" md-component-id=\"smallLeft\" layout=\"column\"><div ng-include=\"'views/menu-content-header.html'\" style=\"background-color: #fff\"></div><div ng-include=\" 'views/menu-content1.html'\"></div></md-sidenav><md-sidenav class=\"md-sidenav-right md-whiteframe-z3\" md-component-id=\"right\" id=\"right\"><div ng-include=\" 'views/contact.html'\" ng-controller=\"ContactCtrl\"></div></md-sidenav><md-content layout=\"left\" show hide-gt-md style=\"background-color: transparent\" ng-show=\"isTouch == false\" flex=\"10\"><i class=\"fa fa-4x fa-bars\" hide show-md style=\"background-color: #fff;border : 3px solid #575757;border-radius: 5px;padding: 5px;\n" +
    "               position:fixed;\n" +
    "               left: 10px;\n" +
    "               top: 10px\" ng-click=\"toggleLeft2()\"></i> <i class=\"fa fa-2x fa-bars\" hide show-sm style=\"background-color: #fff;border : 3px solid #575757;border-radius: 5px;padding: 5px;\n" +
    "               position:fixed;\n" +
    "               left: 10px;\n" +
    "               top: 10px\" ng-click=\"toggleLeft()\"></i></md-content><md-content layout=\"left\" hide-sm flex=\"25\" style=\"position:fixed;top : 25px;left :2%;padding : 0px !important\"><div ng-include=\"'views/menu-content2.html'\" ng-controller=\"MenuCtrl\"></div></md-content><md-content flex-lg=\"75\" flex-gt-lg=\"80\" flex-sm=\"{{flex_small_content}}\" flex-md=\"70\" layout=\"right\" class=\"md-padding\" style=\"background-color: transparent\"><div layout=\"column\" layout-fill layout-align=\"top center\"><section class=\"intro\" id=\"intro\"><div id=\"intro-name\"><span>Antoine</span><div class=\"fade-show-container\"><img style=\"vertical-align:middle\" class=\"fade-show\" src=\"img/Slide.png\" id=\"slideImg\" ng-show=\"showSlide\"> <img style=\"vertical-align:middle\" class=\"fade-show\" src=\"img/me.png\" alt=\"Antoine LUCAS\" id=\"photoImg\" ng-show=\"showFace\"></div><span>Lucas</span><div style=\"clear:both\"></div></div><div ng-include=\" 'views/intro.html'\"></div></section><section class=\"section nicesection\"><div><h2 class=\"mtcon-title\">Resume</h2></div><div id=\"resume\" ng-include=\" 'views/professional.html'\" ng-controller=\"ProCtrl\"></div><div id=\"education\" ng-include=\" 'views/education.html'\" ng-controller=\"EducationCtrl\"></div><div id=\"interests\" ng-include=\" 'views/interests.html'\" ng-controller=\"InterestsCtrl\"></div></section><section class=\"section nicesection\"><div><h2 class=\"mtcon-title\">Social Links</h2></div><div id=\"social\" ng-include=\"'views/social.html'\" ng-controller=\"SocialCtrl\"></div></section><section class=\"section nicesection\" id=\"services\"><div><h2 class=\"mtcon-title\">Services</h2></div><div ng-include=\" 'views/services.html'\" ng-controller=\"ServiceCtrl\"></div></section><section class=\"section nicesection\" id=\"skills\"><div><h2 class=\"mtcon-title\">Skills</h2></div><div ng-include=\" 'views/skills.html'\" ng-controller=\"SkillsCtrl\"></div></section><section class=\"section nicesection\" id=\"technologies\"><div><h2 class=\"mtcon-title\">Technology used for this page</h2></div><div ng-include=\" 'views/technologies.html'\" ng-controller=\"TechnologiesCtrl\"></div></section></div><div flex></div></md-content></section></div>");
}]);

angular.module("views/portfolio.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/portfolio.min.html",
    "<section id=\"works\" class=\"section mtcon\"><div class=\"row\"><h2 class=\"mtcon-title\">Works</h2><div class=\"span8 short-dec\"><p>The Sky People have sent us a message... that they can take whatever they want. That no one can stop them. Well, we will send them a message. You ride out as fast as the wind can carry you. You tell the other clans to come. Tell them Toruk Macto calls to them! You fly now, with me! My brothers! Sisters! And we will show the Sky People... that they cannot take whatever they want! And that this... this is our land!</p></div></div><div class=\"row\"><div id=\"options\" class=\"clearfix\"><ul id=\"filters\" class=\"option-set clearfix\" data-option-key=\"filter\"><li><a href=\"#filter\" data-option-value=\"*\" class=\"selected\">all works</a></li><li ng-repeat=\"folio in portfolio\"><a href=\"#filter\" data-option-value=\"{{folio.name}}\">{{folio.name}}</a></li></ul></div><div id=\"portfolio\" class=\"clearfix\"><div ng-repeat=\"folio in portfolio\" class=\"block {{folio.name}}\"><div class=\"view view-first\"><div class=\"tringle\"></div><img src=\"img/work/1/1.jpg\" alt=\"\"><div class=\"mask\"><a class=\"info\" data-rel=\"prettyPhoto\" href=\"img/big/1.jpg\"></a> <a class=\"link\" href=\"#\"></a></div></div><div class=\"des\"><h4>{{folio.title}}</h4><p>{{folio.description}}</p></div></div></div></div></section>");
}]);

angular.module("views/professional.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/professional.min.html",
    "<section class=\"timeline\"><div class=\"timeline-item\" style=\"margin-bottom:0px !important\"><div class=\"timeline-head\"><i class=\"fa fa-lightbulb-o\"></i></div><div class=\"timeline-head-content\"><h3>Work Experience</h3></div></div></section><section layout=\"row\" ng-repeat=\"(i,xp) in experience\"><md-content flex class=\"timeline\"><div><div class=\"timeline-item-date\" hide show-gt-lg flex>{{xp.date_from.format('MMM YYYY')}} <span>⇢ {{xp.date_to.format(\"MMM YYYY\")}}</span></div><div class=\"timeline-item-date\" hide show-lg show-md flex>{{xp.date_from.format('YYYY')}} <span>⇢ {{xp.date_to.format(\"YYYY\")}}</span></div><div class=\"timeline-item-trigger\" slide-toggle=\"#xp{{i}}\"><span><i class=\"fa fa-minus-circle\" style=\"color: white\" ng-show=\"xp.collapsed\" ng-click=\"xp.collapsed = !xp.collapsed\"></i> <i class=\"fa fa-plus-circle\" style=\"color: white\" ng-show=\"!xp.collapsed\" ng-click=\"xp.collapsed = !xp.collapsed\"></i></span></div></div><md-content flex><div hide-sm hide-md class=\"timeline-arrow\"><i></i></div><md-content class=\"timeline-item-content\" flex><h3 class=\"timeline-item-title\" slide-toggle=\"#xp{{i}}\" ng-click=\"xp.collapsed = !xp.collapsed\">{{xp.title}} <span class=\"place\">@ {{xp.company_name}}</span></h3><div class=\"slideable\" id=\"xp{{i}}\"><ul><li ng-repeat=\"description in xp.description\">{{description.text}}</li></ul><p ng-show=\"xp.website_url.length>0\"><a href=\"{{xp.website_url}}\" target=\"_blank\" title=\"\" class=\"noprint\">→ View website</a></p><label ng-repeat=\"tag in xp.tags\" class=\"tag\">{{tag}}</label></div></md-content></md-content></md-content></section><md-divider></md-divider>");
}]);

angular.module("views/services.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/services.min.html",
    "<section layout=\"row\" layout-align=\"center center\"><md-content flex=\"90\"><p style=\"color: #6C6662;padding:0px 15px;background-color:transparent;font: 14px 'PT Sans',sans-serif\">I do full-time and part-time remote jobs online, and I am usually open to use any communication media available (Skype, Hangout, Phone, VoIP).</p></md-content></section><section layout=\"row\" layout-align=\"center start\" layout-wrap layout-margin style=\"padding-bottom:30px\"><md-content layout-margin ng-repeat=\"(i, service) in services\" flex-gt-md=\"30\" flex-md=\"80\" flex-sm=\"90\"><flippy class=\"fancy my-fancy\" ng-click=\"flip()\" ng-mouseenter=\"flip()\" ng-mouseleave=\"flip()\" flip-duration=\"800\" timing-function=\"ease-in-out\"><flippy-front><img ng-if=\"service.image !== false\" src=\"{{service.image}}\"><div ng-if=\"service.image === false\"><canvas width=\"138\" height=\"138\" id=\"myCanvas\" style=\"background-color: #000;border-radius : 75px\"><p>Anything in here will be replaced on browsers that support the canvas element</p></canvas><div id=\"tags\"><a href=\"\" weight=\"20\">PHP5</a> <a href=\"\" weight=\"10\">Zend1</a> <a href=\"\" weight=\"20\">AngularJS</a> <a href=\"\" weight=\"5\">EmberJS</a> <a href=\"\" weight=\"15\">Javascript</a> <a href=\"\" weight=\"15\">HTML5</a> <a href=\"\" weight=\"15\">Foundation</a> <a href=\"\" weight=\"15\">Bootstrap</a> <a href=\"\" weight=\"18\">Apache2</a> <a href=\"\" weight=\"18\">MySQL</a> <a href=\"\" weight=\"15\">MariaDB</a> <a href=\"\" weight=\"12\">MongoDB</a> <a href=\"\" weight=\"15\">MEAN.js</a> <a href=\"\" weight=\"10\">NodeJS</a> <a href=\"\" weight=\"8\">Java</a> <a href=\"\" weight=\"12\">Yii</a> <a href=\"\" weight=\"18\">Sphinx</a> <a href=\"\" weight=\"10\">Code Igniter</a> <a href=\"\" weight=\"18\">REST</a> <a href=\"\" weight=\"15\">SOAP</a> <a href=\"\" weight=\"18\">CSS3</a> <a href=\"\" weight=\"12\">Jasmine</a> <a href=\"\" weight=\"12\">Karma</a> <a href=\"\" weight=\"5\">Python</a> <a href=\"\" weight=\"10\">Meteor</a></div></div><h2 style=\"font-size : 20px\">{{service.title}}</h2></flippy-front><flippy-back><h2 style=\"font-size : 20px\">{{service.title}}</h2><p ng-bind-html=\"service.description | unsafe\"></p></flippy-back></flippy></md-content></section>");
}]);

angular.module("views/skype.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/skype.min.html",
    "<div id=\"SkypeButton_Call_montpellier_1001net\"></div><p style=\"color:#fff\">Do you Skype installed on this computer?</p>");
}]);

angular.module("views/social.min.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/social.min.html",
    "<section layout=\"row\"><md-content><div layout=\"row\"><md-card ng-repeat=\"soc in social\" flex><a href=\"{{soc.url}}\" target=\"_blank\"><img ng-src=\"{{soc.logo_url}}\" class=\"md-card-image\" alt=\"{{soc.name}}\"></a></md-card></div></md-content><br><br></section><md-divider></md-divider>");
}]);

angular.module("views/skills.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/skills.html",
    "<section layout=\"row\"   layout-align-gt-md=\"center start\" layout-wrap layout-padding layout-margin>\n" +
    "    \n" +
    "    <md-content flex-gt-md=\"30\"  flex-md=\"100\" flex-sm=\"100\"  style=\"background-color: #EBEBEB;color: #000\" layout-margin>\n" +
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
    "    <md-content flex-gt-md=\"30\"  flex-md=\"100\" flex-sm=\"100\"  style=\"background-color: #EBEBEB;color: #000\" layout-margin>\n" +
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
    "    <md-content flex-gt-md=\"30\"  flex-md=\"100\" flex-sm=\"100\"  style=\"background-color: #EBEBEB;color: #000\" layout-margin>\n" +
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
