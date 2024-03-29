// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license !== 'None') {
    return `![license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

// function that returns the license link
function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

//function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license !== 'None') {
    return `## License 
    This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //return title of file and license chosen
  // then formating the readme file structure
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at 
  ${data.email}
  You can find more of my work at [${data.github}](https://github.com/${data.github}/)

`;
}

module.exports = generateMarkdown;
