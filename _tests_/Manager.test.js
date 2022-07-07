const { default: test } = require('node:test');
const Manager = require('../lib/Manager');

test("Creates a new Manager object", () => {
    const manager = new Manager('Mike', 333, "Mike@gmail.com", 456)
})