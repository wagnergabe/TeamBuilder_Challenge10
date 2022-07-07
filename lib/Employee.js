//Note: Employee can extend to other classes, new objects can take on the constructor traits as a child element.
class Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
} 

module.exports = Employee;