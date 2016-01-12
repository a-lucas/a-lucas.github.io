/**
 * Created by antoine on 23/10/15.
 */
var fs = require('fs');
var Docxtemplater = require('docxtemplater');
var moment = require("moment");

eval(require('fs').readFileSync('../data.js', 'utf8'));

/**hhepers*/

var formatDescription = function(text) {
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


//Load the docx file as a binary
var content = fs.readFileSync(__dirname + "/template2.docx", "binary");

var doc = new Docxtemplater(content);
var i, obj;
//set the templateVariab
var templateData = {
    heading: data.paper.headline,
    info: data.paper.info,
    online_version: data.paper.onlineVersion,
    first_name:data.paper.first_name,
    last_name: data.paper.last_name,
    phone:data.paper.phone,
    email: data.paper.email,
    experience: [],
    education: [],
    interests: [],
    social: []
};

for(i in data.work_experience) {
    obj = {}, work = data.work_experience[i];
    obj.title = work.title;
    obj.description = work.description;
    obj.company_name = work.company_name;
    var date_from = moment(work.date_from);
    var date_to = moment(work.date_to);

    obj.date_from = date_from.format('MMM YYYY');
    obj.date_to = date_to.format('MMM YYYY');
    obj.location = work.location.town + ", "+ work.location.country;


    obj.tags = [];
    for( var j in work.tags) {
        obj.tags.push({tag: work.tags[j]});
    }

    obj.website_url = work.website_url;
    obj.technology = work.tags.join(", ");
    templateData.experience.push(obj);
}

for(i in data.education) {
    obj = {}, edu = data.education[i];
    obj.title = edu.title;
    obj.description = edu.description;
    var date_from = moment(edu.date_from);
    var date_to = moment(edu.date_to);

    obj.date_from = date_from.format('MMM YYYY');
    obj.date_to = date_to.format('MMM YYYY');
    obj.location = edu.location.town + ", "+ edu.location.country;

    obj.website_url = edu.website_url;

    obj.tags = [];
    for( var j in edu.tags) {
        obj.tags.push({tag: edu.tags[j]});
    }

    templateData.education.push(obj);
}

for(i in data.interests) {
    obj = {}, interest = data.interests[i];
    obj.name = interest.name;
    obj.quote = interest.description;
    templateData.interests.push(obj);
}

for(i in data.social_accounts) {
    obj = {}, social = data.social_accounts[i];
    obj.name = social.name;
    obj.url = social.url;
    templateData.social.push(obj);
}


console.log(templateData);

doc.setData(templateData);

//apply them (replace all occurences of {first_name} by Hipp, ...)
doc.render();

var buf = doc.getZip().generate({type:"nodebuffer"});

fs.writeFileSync(__dirname+"/ANTOINE_LUCAS_RESUME.doc",buf);
