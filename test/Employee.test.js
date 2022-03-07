// Employee class
const Employee = require("../lib/Employee");

test("test instantiate Employee", () => {
  const test = new Employee();
  expect(typeof(test)).toBe("object");
});

test("test name via constructor ", () => {
  const name = "Hassan";
  const test = new Employee(name);
  expect(test.name).toBe(name);
});

test("test id via constructor", () => {
  const testValue = 50;
  const test = new Employee("Hassan", testValue);
  expect(test.id).toBe(testValue);
});

test("test email via constructor ", () => {
  const testValue = "hassan@test.com";
  const test = new Employee("Hassan", 5, testValue);
  expect(test.email).toBe(testValue);
});

test("test name via getName()", () => {
  const testValue = "Hassan";
  const test = new Employee(testValue);
  expect(test.getName()).toBe(testValue);
});

test("test id via getId()", () => {
  const testValue = 50;
  const test = new Employee("hassan", testValue);
  expect(test.getId()).toBe(testValue);
});

test("test  email via getEmail()", () => {
  const testValue = "hassan@test.com";
  const test = new Employee("hassan", 5, testValue);
  expect(test.getEmail()).toBe(testValue);
});

