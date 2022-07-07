
const Employee = require('../lib/Employee')

test('Creates an employee Object', () => {
    const employee = new Employee('Gabe', 123, "gabe@gmail.com", "wagnergabe");

    expect(employee.name).toBe('Gabe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("gabe@gmail.com");
    expect(employee.github).toBe('wagnergabe');
});