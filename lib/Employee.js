//Note: Employee can extend to other classes, new objects can take on the constructor traits as a child element.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getGithub() {
        return this.github;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
} 

module.exports = Employee;