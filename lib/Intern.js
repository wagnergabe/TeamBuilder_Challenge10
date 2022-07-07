const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email);
        this.role = role;
        this.school = school;
    }
};

module.exports = Intern;