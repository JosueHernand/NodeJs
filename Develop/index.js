const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'No License'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can users contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users run tests for your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README.md generated successfully!');
        }
    });
}

function init() {
    inquirer.Prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('READEME.md', readmeContent);
    });
}

init();
