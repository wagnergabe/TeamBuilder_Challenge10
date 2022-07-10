const generateManager = function (manager) {
    return `
    ${manager.name}
    ${manager.id}
    ${manager.email}
    ${manager.officeNumber}
`
}

const generateEngineer = function (engineer) {
    return `
    ${engineer.name}
    ${engineer.id}
    ${engineer.email}
    ${engineer.github}
    `
}

const generateIntern = function (intern) {
    return `
    ${intern.name}
    ${intern.id}
    ${intern.email}
    ${intern.school}
    `
}


generateTeamCards = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        else if (role === 'Intern') {
            const studentCard = generateIntern(employee);

            pageArray.push(studentCard);
        }

    }

    const employeeCards = pageArray.join('');

    // Return to the generated page
    const generateTeam = generatePage(employeeCards); 
    return generateTeam;

}

// Generate the HTML page
const generatePage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
<html lang="en">
<head>
  <title>Team Profile Generator</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body>
<h1>${employeeCards}</h1>
</body>
</html>
`  
};
module.exports = generatePage;
module.exports = generateTeamCards;

