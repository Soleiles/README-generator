// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
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
        type: 'input',
        name: 'projectLicense',
        message: 'Please choose a license for your project. ',
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
