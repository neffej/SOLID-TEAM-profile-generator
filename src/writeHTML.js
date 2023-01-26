const fs = require('fs');

const content = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- Bootstrap (Bootswatch v.superhero) -->
        <link rel="stylesheet" href="https://bootswatch.com/5/superhero/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <script src="https://kit.fontawesome.com/0113bdb18a.js" crossorigin="anonymous"></script>
        <title>Employee Profiles</title>         
    </head>
    <header class="w-auto d-flex justify-content-center bg-primary pb-5 pt-5">
        <p class="h1">
        <i class="fa-solid fa-people-group"></i>
        <span class="text-secondary">My</span> Team
        </p>
    </header>
    <body>
        <div class = 'container row justify-content-center' id="card-container">

        </div>

    </body>
    
    <script src="../index.js"></script>
    </html>`

function writeHTML(){
    fs.writeFile('./dist/index.html',content,err => {
        err ? console.error(err) : console.log();
    })
}

module.exports = writeHTML;