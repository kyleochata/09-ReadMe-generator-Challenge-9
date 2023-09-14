// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
!license ? '':`[![${license} license](https//img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
    return `https://lbesson.mit-license.org`;
    break;
    case 'Apache 2.0':
      return `https://www.apache.org/licenses/LICENSE-2.0`;
      break;
    case 'BSD 3-Clause':
      return `https://opensource.org/license/bsd-3-clause/`;
      break;
    case 'BSD 2-Clause':
      return `https://opensource.org/license/bsd-2-clause/`;
      break;
    case `GNU GPL v3`:
      return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;
    default:
      return `No license link found`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  !license ? '': `## License
  Please see the ${license} license found in the repository. To learn more, please click the license badge at the top of the README.MD`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.projectTitle}
${renderLicenseBadge(data.licenseType)}

## Description
${data.descriptionInput}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)

## Installation
${data.installInput}


## Usage
${data.usageInput}

${renderLicenseSection(data.licenseType)}

## Contributing
${data.creditInput}

## Test
${data.testInput}

## Questions
If you have further questions about this project, please send an email or checkout us out on GitHub.
Email: ${data.email}
GitHub Link: https://github.com/${data.githubUsername}

## Credit

`;
}

module.exports = generateMarkdown;