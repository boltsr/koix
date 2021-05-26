#!/usr/bin/env node
var process = require('child_process');
var colors = require('colors');
var path = require('path');

const COMPONENT_LIST = ['navbar', 'newsfeed']
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var user_select_comps = {}
console.log("select components you want to add ".green)
readline.question('navbar (yes)', name => {
    console.log(`Hey there ${name}!`);
    if(name) {
        user_select_comps.navbar = true
    }else{
        user_select_comps.navbar = false
    }
    readline.close();
});
// readline.question('navbar (yes)', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
// });
/*
var templateDir = path.join(__dirname, 'cra-template-koix');
var cmd = process.spawn("npx", ["create-react-app","myapp8","--template",`file:${templateDir}`]);

cmd.stdout.on('data', function(output){
    dd=output.toString()
    // const dataJson = eval(`(${dd})`);
    console.log(dd)
});

cmd.on('close', function(){
    console.log('Finished'.green);
    console.log("select components you want to add ".green)
    readline.question('navbar (yes)', name => {
        console.log(`Hey there ${name}!`);
        readline.close();
    });
});

//Error handling
cmd.stderr.on('data', function(err){
    // console.log("error".red)
    console.log(err.toString().yellow)
    // console.log(err);
});
*/