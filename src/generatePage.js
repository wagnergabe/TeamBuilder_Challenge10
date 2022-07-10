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


generateTeamCards = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        else if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
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
${employeeCards}`
};

module.exports = generatePage;
module.exports = generateTeamCards;

