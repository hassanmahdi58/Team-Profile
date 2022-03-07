// Manager class 
const Manager = require("../lib/Manager");


test("test office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Hassan", 1, "hassan@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return Manager", () => {
  const testValue = "Manager";
  const test = new Manager("Hassan", 1, "hassan@test.com", 50);
  expect(test.getRole()).toBe(testValue);
});

test("test office number via getOffice()", () => {
  const testValue = 100;
  const test = new Manager("Hassan", 1, "hassan@test.com", testValue);
  expect(test.getOfficeNumber()).toBe(testValue);
});