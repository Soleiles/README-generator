// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// ****** QUESTIONS ****** //   
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please provide a name for your project. ',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description for your project. ',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Please provide installation instructions. ',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please provide usage directions. ',
    },
    {
        type: 'list',
        name: 'projectLicense',
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
        name: 'projectContributer',
        message: 'Please provide any contributors towards your project. ',
    },
    {
        type: 'input',
        name: 'projectTesting',
        message: 'Please provide intructions for testing. ',
    },
    {
        type: 'input',
        name: 'projectUsername',
        message: 'Please provide your Github username. ',
    },
    {
        type: 'input',
        name: 'projectEmail',
        message: 'Please provide your email address. ',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile('sample_readme.md', data));
}
// Function call to initialize app
init();
