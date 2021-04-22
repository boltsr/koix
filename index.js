#!/usr/bin/env node
console.log("hello")
const moment = require("moment");

console.log(moment())
const { exec } = require("child_process");

exec("npx create-react-app myapp ", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});