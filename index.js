// Import Packages
const fs = require('fs');
const inquirer = require('inquirer');


// Import Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// Import HTML & CSS templates
// const writeHTML = require('./src/writeHTML');
// const writeCSS = require('./src/writeCSS');
const addEngineerCard = require('./src/addEngineerCard');
const addManagerCard = require('./src/addManagerCard');
const addInternCard = require('./src/addInternCard');

// Create empty team array
const team = []

// Manager question array
const addMngr = [
    {
        type: 'confirm',
        name: 'role',
        message: "Hail, the creation of a new team is nigh! Are you ready to build?"
    },
    {
        type: 'input',
        name: 'name',
        message: "Please enter the name of the manager: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter manager's employee ID: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter manager's email address: "
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter manager's office number: "
    },
    {
        type: 'list',
        name: 'next',
        choices: ['Add Engineer','Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
    },
]

// Engineer question array
const addEngnr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },    
    {
        type: 'input',
        name: 'ID',
        message: "What is the engineer's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?"
    },
    {
        type: 'list',
        name: 'next',
        choices: ['Add Engineer','Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
    },
]

// Intern question array
const addIntern = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },    
    {
        type: 'input',
        name: 'ID',
        message: "What is the intern's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?"
    },
    {
        type: 'list',
        name: 'next',
        choices: ['Add Engineer','Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
    },
]

// Initialize user input
function query(array){
    inquirer.prompt(array)
    .then((member) =>{
        team.push(member);

        if (member.next === 'Add Engineer'){
            query(addEngnr);
        }else if(member.next === 'Add Intern'){
            query(addIntern);
        }else{
            renderProfiles(team);
        }
    })
    .catch((err) => console.log(err));
}

// Render Employee profile cards onto HTML page
function renderProfiles(team)   {

    // Copy team array and overwrite Employee class with role specific class
    const profiles = team.map((member) => {
        const { name, id, email } = member;

        if (member.hasOwnProperty('officeNumber')){
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }

        if (member.hasOwnProperty('github')){
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }

        if (member.hasOwnProperty('school')){
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }
    });

    generateHTML(profiles);
}

// This function takes in the mapped array above and generates HTML cards for each employee
function generateHTML(profiles){
    let profileCards = '';

    // Differentiate profiles by their class and write appropriate card
    profiles.forEach((profile)=> {
        if (profile instanceof Manager){
            const card = managerCard(profile);
            profileCards += card;
        }else if (profile instanceof Engineer){
            const card = engineerCard(profile);
            profileCards += card;
        }else if (profile instanceof Intern){
            const card = internCard(profile);
            profileCards += card;
        }
    })

const newHTML = wrapProfileCards(profileCards);

writeHTML(newHTML);
};

function writeHTML(newHTML){
    fs.writeFile('./dist/MyTeam.html'.newHTML, (err) => {
        if (err) throw err;
        console.log('HTML document successfully created in the /dist folder');
    });
};


