// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['What is your project title?', 
                   'Enter a description for your project here: ',
                   'Enter installation instructions here: ',
                   'Enter any usage information here: ',
                   'What are your contribution guidelines? ',
                   'What are the test instructions?',
                   'Choose a license: ',
                   'What is your GitHub username?',
                   'What is your email address?'
                    ];
function promptData()
{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: titleInput => 
                {
                    if(titleInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log('Please enter your project name!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: descriptionInput => 
                {
                    if(descriptionInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log('Please enter a description of your project!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'install',
            message: questions[2],
            validate: installInput => 
                {
                    if(installInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log('Please enter installation instructions!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: usageInput => 
                {
                    if(usageInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log('Please enter any usage information!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4],
            validate: contribInput => 
                {
                    if(contribInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log("Please enter this project's contribution guidelines!");
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'test',
            message: questions[5],
            validate: testInput => 
                {
                    if(testInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log('Please enter test instructions!');
                        return false;
                    }
                }
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ['MIT', 'zLib', 'ISC', 'GNU GPLv3']
        },
        {
            type: 'input',
            name: 'username',
            message: questions[7],
            validate: userInput => 
                {
                    if(userInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log('Please enter your GitHub Username!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
            validate: emailInput => 
                {
                    if(emailInput)
                    {
                        return true;
                    }
                    else
                    {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
        }

    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    console.log(data);
}

// TODO: Create a function to initialize app
function init() 
{
    promptData()
        .then(projectData =>
            {
                return generateMarkdown(projectData);
            })
        .then(markDownData => 
            {
                writeToFile("README.md", markDownData);
            });
}

// Function call to initialize app
init();
