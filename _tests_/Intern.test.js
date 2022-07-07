const Intern = require('../lib/Intern');

test("Creates a new intern object", () => {
    const intern = new Intern("Sarah", 222, "sarah@yahoo.com", "University of Minnesota");
    expect(intern.name).toBe('Sarah');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe("sarah@yahoo.com");
    expect(intern.school).toBe("University of Minnesota");
})