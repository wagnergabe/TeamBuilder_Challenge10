
const Employee = require('../lib/Employee')

test('Creates an employee Object', () => {
    const employee = new Employee('Gabe')

    expect(employee.name).toBe('Gabe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('string');
    expect(employee.github).toBe('string');
});