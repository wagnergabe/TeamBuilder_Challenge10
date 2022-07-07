const { exportAllDeclaration } = require('@babel/types');
const Engineer = require('../lib/Engineer');
// const Employee = require('../lib/Employee');

test("Creates a New engineer object", () => {
    const engineer = new Engineer ('Bob', 111, "Bob@hotmail.com", "Engineer", "bobHub");
    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("Bob@hotmail.com");
    expect(engineer.role).toBe("Engineer");
    expect(engineer.github).toBe("bobHub");
})

