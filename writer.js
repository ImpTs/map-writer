const fs = require('fs');
const path = require('path');
const bios = require('./bios4.json');

function toHtml(json) {
    let html = "";
    for (i = 0; i < json.length; i++) {
        html += "<a href=/thats-who-we-r/" + json[i].F + json[i].G + "-" + json[i].F + json[i].I + "<strong><p>" + json[i].A + "</strong></p></a>" + "<p>" + json[i].B + "<br />" + json[i].C + "<br />" + json[i].D + "</p><p>" + json[i].E + "</p> \n";
    }
    return html;
}
console.log(toHtml(bios));
fs.writeFile("./newHTML4", toHtml(bios),
    function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("written to file")
    });