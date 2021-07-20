#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var colors = require('colors');
var _a = require('child_process'), exec = _a.exec, execOptions = _a.execOptions;
var HEADING = '# Project Structure \n';
var filename = process.argv[2];
var codeStart = '\`\`\`\n';
var tree;
if (process.argv.length < 3) {
    console.log('\n');
    console.log(" Error: ".black.bgRed);
    console.log((" Must have atleast 3 arguments \n Usage: node " + process.argv[1] + " <FILENAME> ").red);
    console.log('\n');
    process.exit(0);
}
exec("treee --base " + filename + " -l 40 -a -o text.txt", function () {
    // Read the file
    console.log(' reading the directory...'.black.bgYellow);
    tree = fs.readFileSync('text.txt', 'utf8');
    // exec('clear', () => {})
    console.log(' finished reading the directory... '.black.bgGreen);
    console.log(' finished saving the directory to text.txt... '.black.bgGreen);
    var splitTree = tree.split('\n');
    splitTree = splitTree.slice(1, -3);
    tree = splitTree.join('\n');
    // console.log(tree)
    console.log(' adding the directory from text.txt to structure.md.. '.black.bgYellow);
    fs.writeFileSync('structure.md', '');
    fs.appendFileSync('structure.md', HEADING + codeStart);
    fs.appendFileSync('structure.md', filename + '\n');
    // fs.appendFileSync('structure.md', '|' + '\n')
    fs.appendFileSync('structure.md', tree);
    fs.appendFileSync('structure.md', '\n' + codeStart);
    console.log(' finished adding the directory from text.txt to structure.md.. '.black.bgGreen);
    console.log('\n');
    console.log(' completed! check structure.md '.black.bgCyan);
    console.log('\n');
});
