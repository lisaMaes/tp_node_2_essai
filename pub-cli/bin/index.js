#!/usr/bin/env node
var program = require('commander');
var pubService = require('../src/main');
program
    .version('1.0.0')
    .option('-l, --list', 'Get the pubs list')
    .parse(process.argv);
if (program.list) {
    var liste = pubService.getListPub();
    console.log(liste);
}