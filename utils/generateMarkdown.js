// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU GPLV3":
      return "![](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)"
      break
    case "MIT":
      return "![](https://img.shields.io/apm/l/vim-mode)"
      break
    case "Apache":
      return "![](https://img.shields.io/aur/license/android-studio)"
      break
    case "ISC":
      return "![](https://img.shields.io/badge/license-ISC-brightgreen)"
      break

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage 
${data.usage}

## License 
This project is covered under the ${data.license} license.

## Tests
You can use these commands to run tests: ${data.tests}

##Collaborators

${data.credits}

##How to Contribute

${data.contribute}

`;
}

module.exports = generateMarkdown;
