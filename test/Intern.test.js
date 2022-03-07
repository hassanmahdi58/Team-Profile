// intern class test
const Intern = require("../lib/Intern");

test("test school via constructor", () => {
  const testValue = "UOB";
  const test = new Intern("Hassan", 50, "hassan@test.com", testValue);
  expect(test.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UOB");
  expect(e.getRole()).toBe(testValue);
});

test("test school via getSchool()", () => {
  const testValue = "UCLA";
  const test = new Intern("Hassan", 50, "hassan@test.com", testValue);
  expect(test.getSchool()).toBe(testValue);
});