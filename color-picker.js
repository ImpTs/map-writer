const fs = require('fs');
const path = require('path');
const bios = require('./2019-mapdata-stories-test-03-06');

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

console.log(bios)