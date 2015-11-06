/**
 * Created by antoine on 23/10/15.
 */
var officegen = require('../../node_modules/officegen/lib/index.js');
var moment = require('moment');
var fs = require('fs');
var path = require('path');

eval(require('fs').readFileSync('../data.js', 'utf8'));

var docx = officegen ( {
    'type': 'docx',
    'subject': 'Antoine LUCAS resume',
    'keywords': 'Antoine LUCAS, DevOps, ReactJS, AngularJS, NodeJS, LAMP',
    'description': 'This is an automatically generated Resume @copyright Antoine LUCAS'
});


docx.on ( 'finalize', function ( written ) {
    console.log ( 'Finish to create Word file.\nTotal bytes created: ' + written + '\n' );
});

docx.on ( 'error', function ( err ) {
    console.log ( err );
});

var pObj = docx.createP ();
pObj.options.align = 'center';
pObj.addText ( 'Antoine LUCAS' ,{ bold: true, underline: true, font_face: 'Arial', font_size: 20 }  );
pObj.addLineBreak ();
pObj.addText ( '0424 207 292', { font_face: 'Arial', font_size: 12 }  );
pObj.addLineBreak ();
pObj.addText ( 'antoine.lucas.australia@gmail.com', { font_face: 'Arial', font_size: 12 } );
pObj.addLineBreak ();
pObj.addText ( 'http://a-lucas.github.io/resume/app/#/AntoineLucas', { font_face: 'Arial', font_size: 12, color: '39116C' } );


var pObj = docx.createP ();
pObj.options.align = 'center';
pObj.addText('I am a Web DevOps with several years experiences developing complex solutions. I am not just a developer, I have good BA and BI skills that helps deliver the best quality product in a minimum of iterations.', { font_face: 'Arial', font_size: 12, color: 'D11F3F' });

var pObj = docx.createP ();
pObj.options.align = 'center';
pObj.addText('This Word document has been automatically generated from http://a-lucas.github.io/resume/app/#/AntoineLucas.', { font_face: 'Arial', font_size: 7 });

function formatDescription(text) {
    if ( /\<ul\>/.test(text)) {


        text = text.replace('<ul>','');
        text = text.replace('</ul>','');
        text = text.replace('<li>','');
        text = text.split('</li>');

        return text;
    }
    else{
        return text;
    }
}


function addSectionTitle(name) {
    var pObj = docx.createP ();
    pObj.addText ( name, { bold: true, underline: true, font_face: 'Arial', font_size: 20 } );
}

function addEmployment(employment) {
    var pObj = docx.createListOfDots ();
    pObj.addText(employment.title, {bold: true, font_size: 12});
    pObj.addText(' @ ', {bold: true, font_size: 12, color: 'D11F3F'});
    pObj.addText(employment.company_name, {bold: true, font_size: 12, color: 'D11F3F'});
    pObj.addLineBreak ();
    var date_from = moment(employment.data_from);
    var date_to = moment(employment.data_to);

    pObj.addText(date_from.format('MMM YYYY'),{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(' ⇢ '),{bold: false, font_size: 9, color: '39116C'};
    pObj.addText(date_to.format('MMM YYYY'),{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(' in ',{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(employment.location.town,{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(', ',{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(employment.location.country,{bold: false, font_size: 9, color: '39116C'});


    var description = formatDescription(employment.description);

    if( typeof description !== 'string') {

        for(var i in description) {
            if(description[i].length >0) {
                var pObj = docx.createListOfNumbers ();
                var text = description[i].replace('<li>','');
                pObj.addText(text,{bold: false, font_size: 10, color: '173039'});
            }

        }
    }
    else{
        var pObj = docx.createP ();
        pObj.addText(description,{bold: false, font_size: 10, color: '173039'});
    }

    var pObj = docx.createP ();

    pObj.addText('Technology used: ',{bold: true, font_size: 9, color: '5A4854'});
    pObj.addText(employment.tags.join(', '),{bold: false, font_size: 9, color: '5A4854'});


}

function addEducation(education) {
    var pObj = docx.createP ();

    pObj.addText(education.title, {bold: true, font_size: 12});
    pObj.addLineBreak ();
    var date_from = moment(education.data_from);
    var date_to = moment(education.data_to);

    pObj.addText(date_from.format('MMM YYYY'),{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(' ⇢ '),{bold: false, font_size: 9, color: '39116C'};
    pObj.addText(date_to.format('MMM YYYY'),{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(' in ',{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(education.location.town,{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(', ',{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(education.location.country,{bold: false, font_size: 9, color: '39116C'});

    pObj.addLineBreak ();
    pObj.addText(education.description,{bold: false, font_size: 10, color: '173039'});


}

function addInterest(interest) {

    var pObj = docx.createP ();
    pObj.addText(interest.name, {bold: true, font_size: 12});
    pObj.addLineBreak();
    pObj.addText(interest.description, {bold: false,  color: '39116C', font_size: 9});

}


addSectionTitle('Employment');
for(var i in data.work_experience) {
    addEmployment(data.work_experience[i]);
}

addSectionTitle('Education');
for(var i in data.education) {
    addEducation(data.education[i]);
}

addSectionTitle('Interests');
for(var i in data.interests) {
    addInterest(data.interests[i]);
}

var out = fs.createWriteStream ( 'AntoineLucasResume.docx' );

out.on ( 'error', function ( err ) {
    console.log ( err );
});

docx.generate ( out );