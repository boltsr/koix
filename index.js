#!/usr/bin/env node
var process = require('child_process');
var colors = require('colors');
var path = require('path');
const { copyFile } = require('./utils');
const readline = require('linebyline')
const prompt = require('prompt-sync')({sigint: true});

const COMPONENT_LIST = ['navbar', 'newsfeed']
const DEBUG_MODE = true
const addLine = async (file, seachKeyword, newLine) => {
    var new_file
    rl = readline(file); 
    rl.on('line', function(line, lineCount, byteCount) {
        // do something with the line of text
        console.log("read line : ", line)
        if(line.includes(seachKeyword)) {
            console.log("find", true)
            console.log(newLine)
            new_file.push(line)
            new_file.push(newLine)    
        }else{
            new_file.push(line)
        }
    })
    .on('error', function(e) {
        // something went wrong
    })
    .on('close', function() {
        // EOF
        console.log(new_file)
        console.log("end of file".green)
    });

    // fs.writeFile(file, data, (err) => {
    //     if (err) console.log(err);
    //     console.log("Successfully Written to File.");
    // });
}
const select_component = async () => {
    await addLine('./test/src/App.js', 'import "antd/dist/antd.css";', 'import Leaderboard from "containers/Leaderboard";') // test code
    var user_select_comps = {}
    console.log("select components you want to add ".green)
    let str_navbar = prompt('navbar (yes) ');
    console.log('input numbers : ', str_navbar)
    if(!str_navbar || str_navbar === 'y' || str_navbar === 'yes') {
        user_select_comps.navbar = true
    }else{
        user_select_comps.navbar = false
    }
    console.log({user_select_comps})
    try{
        await copyFile('file.json', './test/file.json')
    }catch(err){
        console.log("file copy error", err)
    }
    console.log('Finished'.green);
}

if(DEBUG_MODE) {
    select_component()
}else{
    var templateDir = path.join(__dirname, 'cra-template-koix');
    var cmd = process.spawn("npx", ["create-react-app","myapp8","--template",`file:${templateDir}`]);
    
    cmd.stdout.on('data', function(output){
        dd=output.toString()
        // const dataJson = eval(`(${dd})`);
        console.log(dd)
    });
    
    cmd.on('close', function(){
        // console.log('Finished'.green);
        select_component()
    });
    
    //Error handling
    cmd.stderr.on('data', function(err){
        // console.log("error".red)
        console.log(err.toString().yellow)
        // console.log(err);
    });
}