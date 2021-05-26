#!/usr/bin/env node
var process = require('child_process');
var colors = require('colors');
var path = require('path');
console.log("here-1")
var templateDir = path.join(__dirname, 'cra-template-koix');

// console.log(x);
// templateDir  = __dirname+"\"
console.log("here0")
var cmd = process.spawn("npx", ["create-react-app","myapp8","--template",`file:${templateDir}`]);
console.log("here1")
cmd.stdout.on('data', function(output){
    dd=output.toString()
    // const dataJson = eval(`(${dd})`);
    console.log(dd)
});

cmd.on('close', function(){
    console.log('Finished'.green);
});

//Error handling
cmd.stderr.on('data', function(err){
    // console.log("error".red)
    console.log(err.toString().yellow)
    // console.log(err);
});