#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var HEADING = '# Project Structure \n';
var base = process.argv[2];
var codeStart = '\`\`\`\n';
var tree;
if (process.argv.length < 3) {
    console.log('\n');
    console.log(chalk.black.bgRed(" Error: "));
    console.log(chalk.red(" Must have atleast 3 arguments \n Usage: node ".concat(process.argv[1], " <FILENAME> ")));
    console.log('\n');
    process.exit(0);
}
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var ignore, ignoreList, il;
        return __generator(this, function (_a) {
            ignore = fs.readFileSync('.gentreeignore', 'utf8');
            ignoreList = ignore.split('\n');
            il = [];
            ignoreList.forEach(function (ignore) { return il.push(ignore.trim()); });
            require('tree-cli')({
                base: base,
                noreport: true,
                o: 'structure.txt',
                l: 40,
                ignore: il
            }).then(function (res) {
                // Read the file
                console.log(chalk.black.bgYellow(' reading the directory...'));
                tree = fs.readFileSync('structure.txt', 'utf8');
                console.log(chalk.black.bgGreen(' finished reading the directory... '));
                console.log(chalk.black.bgGreen(' finished saving the directory to text.txt... '));
                var splitTree = tree.split('\n');
                splitTree = splitTree.slice(1, -3);
                tree = splitTree.join('\n');
                // console.log(tree)
                console.log(chalk.black.bgYellow(' adding the directory from text.txt to structure.md.. '));
                fs.writeFileSync('structure.md', '');
                fs.appendFileSync('structure.md', HEADING + codeStart);
                fs.appendFileSync('structure.md', base + '\n');
                // fs.appendFileSync('structure.md', '|' + '\n')
                fs.appendFileSync('structure.md', tree);
                fs.appendFileSync('structure.md', '\n' + codeStart);
                console.log(chalk.black.bgGreen(' finished adding the directory from text.txt to structure.md.. '));
                console.log('\n');
                console.log(chalk.black.bgCyan(' completed! check structure.md '));
                console.log('\n');
            });
            return [2 /*return*/];
        });
    });
}
run();
