// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined) {
    return ''
  } else {
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue)](${renderLicenseLink(license)})`
}
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
    return `https://lbesson.mit-license.org`;
    break;
    case 'Apache_2.0':
      return `https://www.apache.org/licenses/LICENSE-2.0`;
      break;
    case 'BSD_3_Clause':
      return `https://opensource.org/license/bsd-3-clause/`;
      break;
    case 'BSD_2_Clause':
      return `https://opensource.org/license/bsd-2-clause/`;
      break;
    case `GNU_GPL_v3`:
      return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;
    default:
      return `No license link found`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === undefined) {
    return '';
  } else {
    return `## License
    Please see the ${license} license found in the repository. To learn more, please click the license badge at the top of the README.MD`
  }
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
* [Questions](#questions)
* [Credit](#credit)

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
This project was created by ${data.name}
`;
}

//export the function generateMarkdown
module.exports = generateMarkdown;