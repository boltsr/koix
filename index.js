#!/usr/bin/env node
var process = require('child_process');

var cmd = process.spawn("npx", ["create-react-app","myapp8","--template","file:./cra-template-koix"]);

cmd.stdout.on('data', function(output){
    console.log(output.toString());
});

cmd.on('close', function(){
    console.log('Finished');
});

//Error handling
cmd.stderr.on('data', function(err){
    console.log(err);
});