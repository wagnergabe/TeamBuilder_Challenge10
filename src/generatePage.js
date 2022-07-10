const generateManager = function (manager) {
    return `
    ${manager.name}
    ${manager.id}
    ${manager.email}
    ${manager.email}
    ${manager.officeNumber}
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

    }

    const employeeCards = pageArray

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

