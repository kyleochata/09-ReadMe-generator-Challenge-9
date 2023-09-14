/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

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
  default: `Locate a suitable place where you would like to download this repository. Once found, copy the repositories SSH or HTTPS to clone through the terminal or download the zipfile from GitHub. After it is downloaded, right-click the index file and launch with your preferred internet browser. While in the browser, feel free to examine the HTML and CSS code in developer mode by hitting F12 or right-clicking the screen and navigating to inspect.`
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
},
{
  type: 'input',
  message: 'What sequence would you like to initialize the test? Default: npm test',
  name: 'testInput',
  default: 'npm test',
},
{
  type: 'list',
  message: 'What type of license would you like to use? Default: MIT License',
  choices: [
    'MIT', new inquirer.Separator(),
    'Apache 2.0', new inquirer.Separator(),
    'BSD 3-Clause', new inquirer.Separator(),
    'BSD 2-Clause', new inquirer.Separator(),
    'GNU GPL v3', new inquirer.Separator(),
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
