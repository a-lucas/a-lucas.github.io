/* 
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


        this.get_work_experience = function () {

            var work_experience = data.work_experience;

            for(var i in work_experience) {
                work_experience[i].date_from = moment(work_experience[i].date_from);
                work_experience[i].date_to = moment(work_experience[i].date_to);
            }
            return work_experience;
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
    });
})();