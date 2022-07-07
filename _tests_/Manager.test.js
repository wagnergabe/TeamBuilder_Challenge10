const Manager = require('../lib/Manager');

test("Creates a new Manager object", () => {
    const manager = new Manager('Mike', 333, "Mike@gmail.com", "manager", 456)

    expect(manager.name).toBe("Mike");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("Mike@gmail.com");+
    expect(manager.roll).toBe("manager")
    expect(manager.officeNumber).toEqual(expect.any(Number));
})