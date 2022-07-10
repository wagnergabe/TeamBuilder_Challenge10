const generateManager = function (manager) {
    return `
    <div class = "col-4">
        <div class = "card h-100">
            <div class = "card-header bg-primary text-white">
                <h3>${manager.name}</h3>
                <h4 class = "d-flex justify-content-between">Manager<i class="fas fa-bullhorn"></i></i></h4>
            </div>
            <div class = "card-body bg-light">
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
    <div class = "col-4">
    <div class = "card h-100">
        <div class = "card-header bg-primary text-white">
            <h3>${engineer.name}</h3>
            <h4 class = "d-flex justify-content-between">Engineer<i class="fas fa-desktop"></i></h4>
        </div>
        <div class = "card-body bg-light">
            <p> ID #: ${engineer.id}</p><br>
            <p> Email: <a href="${engineer.email}">${engineer.email}</a></p><br>
            <p> Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
`;
}

const generateIntern = function (intern) {
    return `
    <div class = "col-4">
    <div class = "card h-100">
        <div class = "card-header bg-primary text-white">
            <h3>${intern.name}</h3>
            <h4 class = "d-flex justify-content-between">Intern<i class="fas fa-graduation-cap"></i></h4>
        </div>
        <div class = "card-body bg-light">
            <h2> ID #: ${intern.id}</h2><br>
            <h2> Email: <a href="${intern.email}">${intern.email}</a></h2><br>
            <h2> School: ${intern.school}</h2>
        </div>
    </div>
</div>
`;
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
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
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
        <div class ="container">
            <div class ="row justify-content-center">
                ${employeeCards}
            </div>
        </div>
    </main>
</body>
</html>
`  
};
module.exports = generatePage;
module.exports = generateTeamCards;

