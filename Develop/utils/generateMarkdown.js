// Returns license badge base on license selection
function renderLicenseBadge(license) 
{
  if (!license) {
    return '';
  }
  switch(license)
  {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'zLib':
      return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    case 'GNU GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// Returns license link based on license selection
function renderLicenseLink(license)
{
  if (!license) {
    return '';
  }
  switch(license)
  {
    case 'MIT':
      return `https://choosealicense.com/licenses/mit/`;
    case 'zLib':
      return `https://choosealicense.com/licenses/zlib/`;
    case 'ISC':
      return `https://choosealicense.com/licenses/isc/`;
    case 'GNU GPLv3':
      return `https://choosealicense.com/licenses/gpl-3.0/`;
  }
}

// Generate markdown for README file
function generateMarkdown(data) 
{
  console.log(data);
  return  `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests) 
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
This application is covered under the [${data.license}](${renderLicenseLink(data.license)}) license.

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
This code is made available by [${data.username}](https://github.com/${data.username})

For all questions, improvements, or additional instructions please send an email to ${data.email}
`;
}

module.exports = generateMarkdown;
