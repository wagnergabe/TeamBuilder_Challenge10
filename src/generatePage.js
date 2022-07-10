const generateManager = function (manager) {
    return `
    <div class = "col-4">
        <div class = "card h-100">
            <div class = "card-header bg-primary">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class = "card-body">
                <p> ID #: ${manager.id}</p><br>
                <p> Email: <a href="${manager.email}">${manager.email}</a></p><br>
                <p> Office #: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
`;
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
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <header>
        <div class = "navbar" id ="navbar">
            <span class = "navbar-brand mb-1 w-100 text-center bg-danger" 
            id = "navbar-title"><h1 class="fs-4 text-light">Team Profiles</h1>
    </span>
</div>
</header>
    <main>
    <h1>${employeeCards}</h1>
    </main>
</body>
</html>
`  
};
module.exports = generatePage;
module.exports = generateTeamCards;

