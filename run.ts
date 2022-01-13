#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const HEADING: string = '# Project Structure \n'
let base: string = process.argv[2]
let codeStart: string = '\`\`\`\n'
let tree: string;


if(process.argv.length < 3) {
    console.log('\n')
    console.log(chalk.black.bgRed(` Error: `))
    console.log(chalk.red(` Must have atleast 3 arguments \n Usage: node ${process.argv[1]} <FILENAME> `))
    console.log('\n')
    process.exit(0)
}

async function run () {
    const ignore = fs.readFileSync('.gentreeignore', 'utf8')
    const ignoreList = ignore.split('\n')
    const il = []
    ignoreList.forEach(ignore => il.push(ignore.trim()))

    require('tree-cli')({
        base: base,    // or any path you want to inspect.
        noreport: true,
        o: 'structure.txt',
        l: 40,
        ignore: il
      }).then(res => {
    
    
        // Read the file
        console.log(chalk.black.bgYellow(' reading the directory...'))
        tree = fs.readFileSync('structure.txt', 'utf8')
        
        console.log(chalk.black.bgGreen(' finished reading the directory... '))
        console.log(chalk.black.bgGreen(' finished saving the directory to text.txt... '))
        
        
        let splitTree = tree.split('\n')
        splitTree = splitTree.slice(1, -3)
        tree = splitTree.join('\n')
        // console.log(tree)
        
        console.log(chalk.black.bgYellow(' adding the directory from text.txt to structure.md.. '))
        fs.writeFileSync('structure.md', '')
        
        fs.appendFileSync('structure.md', HEADING + codeStart)
        
        fs.appendFileSync('structure.md', base + '\n')
        // fs.appendFileSync('structure.md', '|' + '\n')
        
        fs.appendFileSync('structure.md', tree)
        
        fs.appendFileSync('structure.md', '\n' + codeStart)
    
        console.log(chalk.black.bgGreen(' finished adding the directory from text.txt to structure.md.. '))
        
        console.log('\n')
        
        console.log(chalk.black.bgCyan(' completed! check structure.md '))
        console.log('\n')
      })
    
}

run()


