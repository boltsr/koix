#!/usr/bin/env node
var process = require('child_process');
var colors = require('colors');

var cmd = process.spawn("npx", ["create-react-app","myapp8","--template","file:./cra-template-koix"]);

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
    console.log("error".red)
    console.log(err.toString().red)
    // console.log(err);
});