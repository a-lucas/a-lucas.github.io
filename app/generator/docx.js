/**
 * Created by antoine on 23/10/15.
 */
var officegen = require('../../node_modules/officegen/lib/index.js');
var moment = require('moment');
var fs = require('fs');
var path = require('path');

eval(require('fs').readFileSync('../data.js', 'utf8'));

var colors = {
    date: '39116C',
    headline: 'D11F3F',
    company: 'D11F3F',
    description: '173039',
    technology: '5A4854',
    location: '39116C',
    interests: '39116C',
    contact: '000000',
};

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
pObj.addText ( 'Antoine LUCAS' ,{ bold: true, underline: true, font_face: 'Arial', font_size: 20, color: colors.contact }  );
pObj.addLineBreak ();
pObj.addText ( '0424 207 292', { font_face: 'Arial', font_size: 12 , color: colors.contact}  );
pObj.addLineBreak ();
pObj.addText ( 'antoine.lucas.australia@gmail.com', { font_face: 'Arial', font_size: 12 , color: colors.contact} );
pObj.addLineBreak ();
pObj.addText ( data.paper.onlineVersion, { font_face: 'Arial', font_size: 12, color: colors.contact } );


var pObj = docx.createP ();
pObj.options.align = 'center';
pObj.addText(data.paper.headline, { font_face: 'Arial', font_size: 12, color: colors.headline });

var pObj = docx.createP ();
pObj.options.align = 'center';
pObj.addText(data.paper.info, { font_face: 'Arial', font_size: 7 });


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
    pObj.addText(employment.company_name, {bold: true, font_size: 12, color: colors.company});
    pObj.addLineBreak ();
    var date_from = moment(employment.date_from);
    var date_to = moment(employment.date_to);

    pObj.addText(date_from.format('MMM YYYY'),{bold: false, font_size: 9, color: colors.date});
    pObj.addText(' ⇢ '),{bold: false, font_size: 9, color: '39116C'};
    pObj.addText(date_to.format('MMM YYYY'),{bold: false, font_size: 9, color: colors.date});
    pObj.addText(' in ',{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(employment.location.town,{bold: false, font_size: 9, color: colors.location});
    pObj.addText(', ',{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(employment.location.country,{bold: false, font_size: 9, color: colors.location});


    var description = formatDescription(employment.description);

    if( typeof description !== 'string') {

        for(var i in description) {
            if(description[i].length >0) {
                var pObj = docx.createListOfNumbers ();
                var text = description[i].replace('<li>','');
                pObj.addText(text,{bold: false, font_size: 10, color: colors.description});
            }

        }
    }
    else{
        var pObj = docx.createP ();
        pObj.addText(description,{bold: false, font_size: 10, color: colors.description});
    }

    var pObj = docx.createP ();

    pObj.addText('Technology used: ',{bold: true, font_size: 9, color: colors.technology});
    pObj.addText(employment.tags.join(', '),{bold: false, font_size: 9, color: colors.technology});


}

function addEducation(education) {
    var pObj = docx.createP ();

    pObj.addText(education.title, {bold: true, font_size: 12});
    pObj.addLineBreak ();
    var date_from = moment(education.date_from);
    var date_to = moment(education.date_to);

    pObj.addText(date_from.format('MMM YYYY'),{bold: false, font_size: 9, color: colors.date});
    pObj.addText(' ⇢ '),{bold: false, font_size: 9, color: '39116C'};
    pObj.addText(date_to.format('MMM YYYY'),{bold: false, font_size: 9, color: colors.date});
    pObj.addText(' in ',{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(education.location.town,{bold: false, font_size: 9, color: colors.location});
    pObj.addText(', ',{bold: false, font_size: 9, color: '39116C'});
    pObj.addText(education.location.country,{bold: false, font_size: 9, color: colors.location});

    pObj.addLineBreak ();
    pObj.addText(education.description,{bold: false, font_size: 10, color: colors.description});


}

function addInterest(interest) {

    var pObj = docx.createP ();
    pObj.addText(interest.name, {bold: true, font_size: 12});
    pObj.addLineBreak();
    pObj.addText(interest.description, {bold: false,  color: colors.interests, font_size: 9});

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