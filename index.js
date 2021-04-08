//required packages
const inquirer = require('inquirer');
const fs = require('fs');
//required file
const generateMarkdown = require('./utils/generateMarkdown')

//function that returns the questions
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project:"
        },
        {
            type: "list",
            choices: ["GNU GPLV3", "MIT", "Apache", "ISC"],
            name: "license",
            message: "What kind of license should your project have?"
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "credits",
            message: "Please list your collaborators with links to their github profiles:"
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?"
        },
    ]);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //always have to include err parameter with writeFile
    fs.writeFile(fileName, data, err => {
        if (err) console.log(err)
    })
 }

function init() {
    questions().then(answers => {
        var readMe = generateMarkdown(answers);
        writeToFile("readMe.md", readMe)
    });
}

// Function call to initialize app
init();



