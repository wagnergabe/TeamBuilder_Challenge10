//TODO
//Generate a webpage that displays team's basic info: emails/github profiles
//generate a HTML file via command prompt
//make sure email and github inputs have links to team member's accounts
//Prompts for Team Member's: name, employee ID, email, and office number
//Prompts divided for Manager | Engineer | Intern
//Add Team member option after manager
//generate HTML of selected team members.

const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util");
// const Manager = require ("./lib/Manager");
// const Engineer = require ("./lib/Engineer");
// const Intern = require ("./lib/Intern");
// const employee = require("./lib/Employee");

TeamBuilder = () => {
inquirer.prompt ([
    {
    type: 'input',
    message: "name of employee",
    name: "name"
    },
    {
    type: 'input',
    message: 'What is their eployee ID number?',
    name: 'id'
    },
    {
    type: 'input',
    message: "What is their E-mail address?",
    name: 'email'
    },
    {
    type: 'input',
    message: 'What is their github address?',
    name: 'github'
    },
    {
    type: 'input',
    message: 'What is their office number?',
    name: 'officeNumber'
    }  
  ]);
}

TeamBuilder();