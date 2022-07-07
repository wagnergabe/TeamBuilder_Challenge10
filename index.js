//TODO
//Generate a webpage that displays team's basic info: emails/github profiles
//generate a HTML file via command prompt
//make sure email and github inputs have links to team member's accounts
//---(DONE)---Prompts for Team Member's: name, employee ID, email, and office number
//---(DONE)---Prompts divided for Manager | Engineer | Intern
//---(DONE)---Add Team member option after manager
//generate HTML of selected team members.

const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util");
const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const employee = require("./lib/Employee");

employeeArray = [];

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
    type:'list',
    message: 'what field or roll does the employee belong?',
    name: 'role',
    choices: [
        "Engineer",
        "Manager",
        "Intern"
    ]
    }  
  ])
   .then(answer => {
    if(answer.role === "Engineer") {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is the engineer's github username?",
                name: 'github'
            }
        ])
        .then(answer2 => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.role, answer2.github);
        employeeArray.push(engineer)
        // console.log(employeeArray);
        newEmployee();
        });

    } else if (answer.role === "Manager") {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'officeNumber'
            }
        ])
        .then(answer2 => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.role, answer2.officeNumber);
        employeeArray.push(manager);
        console.log(employeeArray);
        newEmployee();
        });

    } else if (answer.role === "Intern") {
        inquirer.prompt([
            {
                type: 'input',
                message: "what school does the intern curretnly attend?",
                name: 'school'
            }
        ])
        .then(answer2 => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.role, answer2.school);
        employeeArray.push(intern);
        console.log(employeeArray)
        newEmployee();
        })
    }
  })
        newEmployee = () => {
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Would you like to add an additional employee?'
                }
            ])
            .then(response => {
                if (response.addEmployee) {
                    TeamBuilder();
                } else {
                    console.log(employeeArray);
                }
            })
        }
};


TeamBuilder();