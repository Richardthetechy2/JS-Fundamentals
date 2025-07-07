const process = require('node:process')
let len_argv = process.argv.length

if (len_argv <= 2) {
    console.log("No argument");
} else {
    console.log("Arguments found")
}
