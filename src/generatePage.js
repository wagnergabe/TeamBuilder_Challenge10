
const generatePage = (manager) => {
      return `
         ${manager.name}
         ${manager.role}
         ${manager.id}
         ${manager.email}
         ${manager.officeNumber}
          `
    };



// const selector = [];

// selector.push(team.filter((employee) => employee.getRole() === "Manager")
//         .map((manager) => generateManager))

// return selector;
// };  
  
//     return `
//     ${generateManager(manager.name)}
// `

  module.exports = generatePage;