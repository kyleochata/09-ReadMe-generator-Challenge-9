
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMarkDown = require('./assets/utilities/generateMD')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
{
  type: 'input',
  message: 'What is your name?',
  name: 'name',
},
{
  type: 'input',
  message: 'What is the title of your project?',
  name: 'projectTitle',
},
{
  type: 'input',
  message: 'Please add a description of your project.',
  name: 'descriptionInput',
},
{
  type: 'input',
  message: 'How would you install this project?',
  name: 'installInput',
  default: `Locate a suitable place where you would like to download this repository. Once found, copy the repositories SSH or HTTPS to clone through the terminal or download the zipfile from GitHub. After it is downloaded, please ensure that node.js is installed. Once it is installed and at least version 18 or higher, go to your terminal, navigate to the directory that contains this repository. Once there, type in "node index" to create your README.md file`
},
{
  type: 'input',
  message: 'How would you like to allow this repository to be used?',
  name: 'usageInput',
  default: `This repository is allowed for use in a learning environment to evaluate and analyze.`
},
{
  type: 'input',
  message: 'Please enter in anyone you wish to give credit to.',
  name: 'creditInput',
  default: `N/A`,
},
{
  type: 'input',
  message: 'What sequence would you like to initialize the test? Default: npm test',
  name: 'testInput',
  default: 'Use "npm test" in your terminal to run tests on this code.',
},
{
  type: 'list',
  message: 'What type of license would you like to use? Default: MIT License',
  choices: [
    'MIT', new inquirer.Separator(),
    'Apache_2.0', new inquirer.Separator(),
    'BSD_3_Clause', new inquirer.Separator(),
    'BSD_2_Clause', new inquirer.Separator(),
    'GNU_GPL_v3', new inquirer.Separator(),
  ],
  name: 'licenseType',
  default: 'MIT License',
},
{
  type: 'input',
  message: 'What is your GitHub Username?',
  name: 'githubUsername'
},
{type: 'input',
message: 'What is your email?',
name: 'email'
}
];

// TODO: Create a function to write README file
const writeToFile =  data => {
fs.writeFile('README.md', data, err => {
  err ? console.log(err) : console.log(`README file created. Check it out!`)
})
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then(genMarkDown)
  .then(writeToFile)
  .catch(err => {
    console.log(err)
  })
}

// Function call to initialize app
init();
