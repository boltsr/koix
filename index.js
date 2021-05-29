#!/usr/bin/env node
var process = require('child_process');
var colors = require('colors');
var path = require('path');
var appName = require("process").argv[2]
var templateDir = path.join(__dirname, 'cra-template-koix');

// console.log(x);
// templateDir  = __dirname+"\"

var cmd = process.spawn("npx", ["create-react-app",appName,"--template",`file:${templateDir}`]);

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


cmd.on('unhandledRejection', function(err){
    // console.log("error".red)
    console.log(err.toString().yellow)
    // console.log(err);
})

cmd.on('uncaughtException', error => {
    console.log(error.toString().yellow)
})
