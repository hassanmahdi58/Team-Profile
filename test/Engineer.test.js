// Engineer class for test the object 
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const value = "user";
  const test = new Engineer("hassan", 5, "hassan@test.com", value);
  expect(test.github).toBe(value);
});

test("getRole() should return \"Engineer\"", () => {
  const value = "Engineer";
  const test = new Engineer("hassan", 5, "hassan@test.com", "GitHubUser");
  expect(test.getRole()).toBe(value);
});

test("testGitHub username via getGithub()", () => {
  const value = "GitHubUser";
  const test = new Engineer("hassan", 5, "hassan@test.com",value);
  expect(test.getGithub()).toBe(value);
});


