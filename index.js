// ****** PACKAGES ****** //
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// ****** QUESTIONS ****** //   
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a name for your project. ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project. ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions. ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage directions. ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project. ',
        choices: [        
            "None",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            `BSD 2-Clause "Simplified" License`,
            `BSD 3-Clause "Simplified" License`,
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 1.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v3.0",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide any contributors towards your project. ',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide intructions for testing. ',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please provide your Github username. ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address. ',
    },
];

// ****** Writes the readme file ****** //
function writeToFile(title, data) {
    fs.writeFile(`${title}.md`, data, (err) =>
        err ? console.error(err) : console.log("Success!")
    );
}

// Initializes the app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        const license = generateMarkdown.renderLicenseBadge(answers.license);
        writeToFile(answers.title, generateMarkdown.generateMarkdown(answers, license.label, license.badge, license.link));
});

}
// Function call to initialize app
init();