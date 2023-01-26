// Import Packages
const fs = require('fs');
const inquirer = require('inquirer');


// Import Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// Import HTML & CSS templates
const addEngineerCard = require('./src/addEngineerCard');
const addManagerCard = require('./src/addManagerCard');
const addInternCard = require('./src/addInternCard');
const wrapProfileCards = require('./src/wrapProfileCards')

// Create empty team array
const team = []

// Manager question array
const addMngr = [
    {
        type: 'confirm',
        name: 'begin',
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
        name: 'id',
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
        name: 'id',
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
    console.log(team);

    // Copy team array
    const profiles = team.map((member) => {
        // destructure 'member' input
        const { name, id, email } = member;
        console.log(member)

        // HasOwnProperty method searches object for specified property and returns 'true' if that property is it's own, rather than inherited.
        // If the value is true, then function instantiates a new Employee of the corresponding subclass
        if (member.hasOwnProperty('officeNumber')){
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }

        if (member.hasOwnProperty('github')){
            const { github } = member;
            return new Engineer(name, id, email, github);
        }

        if (member.hasOwnProperty('school')){
            const { school } = member;
            return new Intern(name, id, email, school);
        }
    });
    console.log(profiles);
    generateHTML(profiles);
}

// This function takes in the mapped array above and generates HTML cards for each employee
function generateHTML(profiles){
    let profileCards = '';

    // Differentiate profiles by their class and write appropriate card. Instanceof returns true if specified proeprty is in the object; thus the usefulness of getRole() in helper .js files
    // add***Card are helper files with template literals for HTML cards
    profiles.forEach((profile)=> {
        if (profile instanceof Manager){
            const card = addManagerCard(profile);
            profileCards += card;
        }else if (profile instanceof Engineer){
            const card = addEngineerCard(profile);
            profileCards += card;
        }else if (profile instanceof Intern){
            const card = addInternCard(profile);
            profileCards += card;
        }
    })

    // wrapProfileCards is helper file with a Template Literal for the HTML page
const newHTML = wrapProfileCards(profileCards);

writeHTML(newHTML);
};

function writeHTML(newHTML){
    fs.writeFile('./dist/MyTeam.html',newHTML, (err) => {
        if (err) throw err;
        console.log('HTML document successfully created in the /dist folder');
    });
};

// Initialize application
query(addMngr);