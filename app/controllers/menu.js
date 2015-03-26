

'use strict';

angular.module('Antoine_Lucas_CV.menu', [])
        .controller('MenuCtrl', function ($scope, $timeout) {

            $timeout(function () {
                try{
                    gapi.hangout.render('placeholder-div', { 'render': 'createhangout' });
                }
                catch(e){
                    console.log("somethign wromg happened while creating the hangout");
                    console.log(e);
                }
                
                
            },5000);



        });