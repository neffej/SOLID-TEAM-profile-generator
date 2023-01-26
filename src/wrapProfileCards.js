const wrapProfileCards = (cards) =>
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- Bootstrap (Bootswatch v.superhero) -->
        <link rel="stylesheet" href="https://bootswatch.com/5/superhero/bootstrap.min.css">

        <!--Helper CSS sheet-->
        <link rel="stylesheet" href="./style.css">

        <!--Font Awesome script-->
        <script src="https://kit.fontawesome.com/0113bdb18a.js" crossorigin="anonymous"></script>
        <title>Employee Profiles</title>         
    </head>
    <body class ="pb-5">

    <!--Header-->
    <header class="w-auto d-flex justify-content-center bg-primary pb-5 pt-5">
        <p class="h1">
        <i class="fa-solid fa-people-group"></i>
        <span class="text-secondary">My</span> Team
        </p>
    </header>

    <!--Card Container-->
    <main>
        <div class = 'container'>
            <div class="row d-flex justify-content-center align-items-center">
            ${cards}
            </div>

        </div>

    </main>
    </body
    <script src="../index.js"></script>
    </html>`;


module.exports = wrapProfileCards;