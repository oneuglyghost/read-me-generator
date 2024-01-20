const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");


//questions to ask the user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a project description:",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "Apache", "GPL", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];

// prompt for input 
inquirer.prompt(questions).then((answers) => {
    //generate the readme markdown using the inputted answers 
    const readmeContent = generateMarkdown(answers);

    console.log(readmeContent);
    // Write the generated markdown to a file
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
        console.error('Error writing README.md:', err);
        } else {
        console.log('README.md created successfully!');
        }
    });
});