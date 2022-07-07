const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, roll, officeNumber) {
        super(name, id, email);
        this.roll = roll;
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;