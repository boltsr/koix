#!/usr/bin/env node
var child   = require('child_process');
var colors  = require('colors');
var path    = require('path');
var appName = require("process").argv[2]


// process error handling (catch all)

process.on('unhandledRejection', function (err) {
    console.log(err.toString().yellow)
})

process.on('uncaughtException', error => {
    console.log(error.toString().yellow)
    // console.log(error.stack);
})


// cra execution

// template directory
var templateDir = path.join(__dirname, 'cra-template-koix');

// check platform for specific fine tweaks
var isWin = /^win/.test(process.platform);

// debug
// console.log("templateDir=", templateDir)

// child process
var cmd = child.spawn(
    isWin ? "npx.cmd" : "npx",
    [
        "create-react-app",appName,
        "--template",`file:${templateDir}`
    ]
);

// child event handlers

cmd.stdout.on('data', function(output){
    let dd = output.toString()
    // const dataJson = eval(`(${dd})`);
    console.log(dd)
});

cmd.on('close', function(){
    console.log('Finished'.green);
});

// child error handling
cmd.stderr.on('data', function(err){
    // console.log("error".red)
    console.log(err.toString().yellow)
    // console.log(err);
});

// debug
// process.exit()