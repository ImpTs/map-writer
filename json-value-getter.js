const fs = require('fs');
const path = require('path');
const bios = require('./bios3.json');

function snipState(string) {
    return string.slice(-2);
};

function findState(json) {
    let array = [];
    json.forEach(function(element) {
        element.J = snipState(element.B)
        array.push(element.B)
    });
    return json;
}

console.log(findState(bios));