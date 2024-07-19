// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const licenseBadges = {
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Boost Software License 1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD 3-Clause License": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "BSD 2-Clause License": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "Eclipse Public License 1.0": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "GNU General Pulic License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "GNU Affero General Public License v3.0": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "GNU General Public License v2.0": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "GNU Lesser General Public License v2.1": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "Creative Commons Zero v1.0 Universal": "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
    // Add more badges for other licenses as needed
};

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    },
    {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
    },
    {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
    },
    {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
    },
    {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
    },
    {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
    },
    {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "GPLv3", "Apache_2.0", "ISC", "None"],
    },
    {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    },
    {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    },
];

function generateREADME(answers) {

    const licenseBadge = licenseBadges[answers.licenses];
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();

