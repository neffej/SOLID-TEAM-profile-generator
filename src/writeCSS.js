const fs = require('fs');

const content = ``

function writeCSS(){
    fs.writeFile('./dist/style.css',content,err => {
        err ? console.error(err) : console.log ()
    })
}

module.exports = writeCSS;