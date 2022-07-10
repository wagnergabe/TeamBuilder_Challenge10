//TODO
//---(DONE)---Generate a webpage that displays team's basic info: emails/github profiles
//---(DONE)---generate a HTML file via command prompt
//---(DONE)---make sure email and github inputs have links to team member's accounts
//---(DONE)---Prompts for Team Member's: name, employee ID, email, and office number
//---(DONE)---Prompts divided for Manager | Engineer | Intern
//---(DONE)---Add Team member option after manager
//---(DONE)---generate HTML of selected team members.

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const Employee = require("./lib/Employee");
const generatePage = require('./src/generatePage.js');

const employeeArray = [];

//Questions

const teamBuilder = async () => {
    const answers = await
    inquirer.prompt ([ 
    {
    type: 'input',
    message: "name of employee",
    name: "name",
    validate: nameInput => {
     if (nameInput) {
        return true;
     } else {
        console.log("please provide a name")
     }
    }
    },
    {
    type: 'input',
    message: 'What is their employee ID number?',
    name: 'id',
    validate: idInput => {
        if (idInput) {
           return true;
        } else {
           console.log("please provide an ID number")
        }
       }
    },
    {
    type: 'input',
    message: "What is their E-mail address?",
    name: 'email',
    validate: emailInput => {
        if (emailInput) {
           return true;
        } else {
           console.log("please provide an email")
        }
       }
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

  //Questions for Manager, Engineer, and Intern
   
    if(answers.role === "Engineer") {
        const engineerPick = await inquirer.prompt([
            {
                type: 'input',
                message: "What is the engineer's github username?",
                name: 'github',
                validate: githubInput => {
                    if (githubInput) {
                       return true;
                    } else {
                       console.log("please provide a github username")
                    }
                    }
            }
        ])
                const newEngineer = new Engineer(answers.name, answers.id, answers.email, engineerPick.github);
                employeeArray.push(newEngineer)

                } else if (answers.role === "Manager") {
                const managerPick = await inquirer.prompt([
                {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'officeNumber',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                       return true;
                    } else {
                       console.log("please provide an office number")
                    }
                   }
            }
        ])
        
                const newManager = new Manager(answers.name, answers.id, answers.email, managerPick.officeNumber);
                employeeArray.push(newManager);

                } else if (answers.role === "Intern") {
                const internPick = await inquirer.prompt([
            {
                type: 'input',
                message: "what school does the intern currently attend?",
                name: 'school',
                validate: schoolInput => {
                    if (schoolInput) {
                       return true;
                    } else {
                       console.log("please provide a school")
                    }
                   }
            }
        ])
        
        const newIntern = new Intern(answers.name, answers.id, answers.email, internPick.school);
        employeeArray.push(newIntern);

        
        }
    };

    //Add more employees

    async function promptQuestions() {
    await teamBuilder();


        const newEmployee = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Would you like to add an additional employee?'
                }
            ])
            if (newEmployee.addEmployee) {
                    return promptQuestions();
                } else { 
                    return writeFile();
    //                 console.log(employeeArray)
    }
}

promptQuestions()            

    
//Write HTML File
    
function writeFile () {
    fs.writeFileSync('./dist/index.html', generatePage(employeeArray), console.log('success'),
     (err) =>
    console.log("error")); 
}






