/** Generated from: features\signIn.feature */
import { test } from "../../pom/base/fixtures.ts";

test.describe("UI - Verify Sign In functionality", () => {

  test.beforeEach(async ({ Given, Then, home, commonInteractions }) => {
    await Given("I open iris.ai homepage", null, { home });
    await Then("I expect text \"Hi, I'm Iris.ai\" is visible", null, { commonInteractions });
  });

  test.describe("Fields validation", () => {

    test("Email not valid", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, commonInteractions }) => {
      await When("I click on button \"Let's get started\"", null, { commonInteractions });
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"blabla.bg"},{"value":"input"}]},{"cells":[{"value":"Password"},{"value":"test321"},{"value":"input"}]}]}}, { commonInteractions });
      await Then("I expect validation error \"Please enter a valid email address\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign in\" to be \"disabled\"", null, { commonInteractions });
    });

    test("Email is required", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, commonInteractions }) => {
      await When("I click on button \"Let's get started\"", null, { commonInteractions });
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"leave empty"},{"value":"input"}]},{"cells":[{"value":"Password"},{"value":"test123"},{"value":"input"}]}]}}, { commonInteractions });
      await Then("I expect validation error \"Email address is required\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign in\" to be \"disabled\"", null, { commonInteractions });
    });

    test("Password is required", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, commonInteractions }) => {
      await When("I click on button \"Let's get started\"", null, { commonInteractions });
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"blabla@abv.bg"},{"value":"input"}]},{"cells":[{"value":"Password"},{"value":"leave empty"},{"value":"input"}]}]}}, { commonInteractions });
      await Then("I expect validation error \"Password is required\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign in\" to be \"disabled\"", null, { commonInteractions });
    });

  });

  test.describe("Log In fails", () => {

    test("User non existent", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, header, commonInteractions }) => {
      await When("I select user option \"Sign In\"", null, { header });
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"blabla@mail.bg"},{"value":"input"}]},{"cells":[{"value":"Password"},{"value":"test123456"},{"value":"input"}]}]}}, { commonInteractions });
      await And("I click on button \"Sign in\"", null, { commonInteractions });
      await Then("I expect validation error \"Wrong email or password. Please note that both fields are case sensitive!\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign in\" to be \"disabled\"", null, { commonInteractions });
    });

    test("Case sensitive check", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, header, commonInteractions }) => {
      await When("I select user option \"Sign In\"", null, { header });
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"validMailWithWrongCaseLetter@iris.com"},{"value":"input"}]},{"cells":[{"value":"Password"},{"value":"validpass"},{"value":"input"}]}]}}, { commonInteractions });
      await And("I click on button \"Sign in\"", null, { commonInteractions });
      await Then("I expect validation error \"Wrong email or password. Please note that both fields are case sensitive!\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign in\" to be \"disabled\"", null, { commonInteractions });
    });

    test("Wrong Email", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, header, commonInteractions }) => {
      await When("I select user option \"Sign In\"", null, { header });
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"blabla@mail.bg"},{"value":"input"}]},{"cells":[{"value":"Password"},{"value":"Test123456"},{"value":"input"}]}]}}, { commonInteractions });
      await And("I click on button \"Sign in\"", null, { commonInteractions });
      await Then("I expect validation error \"Wrong email or password. Please note that both fields are case sensitive!\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign in\" to be \"disabled\"", null, { commonInteractions });
    });

    test("Wrong Password", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, header, commonInteractions }) => {
      await When("I select user option \"Sign In\"", null, { header });
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"validMail@iris.com"},{"value":"input"}]},{"cells":[{"value":"Password"},{"value":"test123456"},{"value":"input"}]}]}}, { commonInteractions });
      await And("I click on button \"Sign in\"", null, { commonInteractions });
      await Then("I expect validation error \"Wrong email or password. Please note that both fields are case sensitive!\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign in\" to be \"disabled\"", null, { commonInteractions });
    });

    test("SQL Injection", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, header, commonInteractions }) => {
      await When("I select user option \"Sign In\"", null, { header });
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"validMail@iris.com"},{"value":"input"}]},{"cells":[{"value":"Password"},{"value":"Injection:' OR '1'='1'--admin' --"},{"value":"input"}]}]}}, { commonInteractions });
      await And("I click on button \"Sign in\"", null, { commonInteractions });
      await Then("I expect validation error \"Wrong email or password. Please note that both fields are case sensitive!\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign in\" to be \"disabled\"", null, { commonInteractions });
    });

  });

  test("Forget password validation", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, commonInteractions }) => {
    await When("I click on button \"Let's get started\"", null, { commonInteractions });
    await And("I click on link \"Forgot password?\"", null, { commonInteractions });
    await Then("I expect text \"Enter your email and we'll fix it for you.\" is visible", null, { commonInteractions });
    await And("I expect button \"Remind me\" to be \"disabled\"", null, { commonInteractions });
    await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"leave empty"},{"value":"input"}]}]}}, { commonInteractions });
    await Then("I expect validation error \"Email address is required\" is visible", null, { commonInteractions });
    await And("I expect button \"Remind me\" to be \"disabled\"", null, { commonInteractions });
    await When("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"Email address"},{"value":"nikola.g.todorov@gmail.com"},{"value":"input"}]}]}}, { commonInteractions });
    await And("I click on button \"Remind me\"", null, { commonInteractions });
    await Then("I expect text \"Please enter a valid email address\" is visible", null, { commonInteractions });
  });

  test("Verify SignIn UX", { tag: ["@SignIn", "@UI"] }, async ({ When, Then, commonInteractions, signIn }) => {
    await When("I click on button \"Let's get started\"", null, { commonInteractions });
    await Then("I validate Sign In UX elements", null, { signIn });
  });

  test("Verify SignUp link", { tag: ["@SignIn", "@UI"] }, async ({ When, And, Then, commonInteractions }) => {
    await When("I click on button \"Let's get started\"", null, { commonInteractions });
    await And("I click on link \"Sign up\"", null, { commonInteractions });
    await Then("I expect text \"This is a premium service. A subscription fee is required for full access.\" is visible", null, { commonInteractions });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\signIn.feature"),
});

const testMetaMap = {
  "Fields validation|Email not valid": {"pickleLocation":"20:13","tags":["@SignIn","@UI"]},
  "Fields validation|Email is required": {"pickleLocation":"21:13","tags":["@SignIn","@UI"]},
  "Fields validation|Password is required": {"pickleLocation":"22:13","tags":["@SignIn","@UI"]},
  "Log In fails|User non existent": {"pickleLocation":"37:13","tags":["@SignIn","@UI"]},
  "Log In fails|Case sensitive check": {"pickleLocation":"38:13","tags":["@SignIn","@UI"]},
  "Log In fails|Wrong Email": {"pickleLocation":"39:13","tags":["@SignIn","@UI"]},
  "Log In fails|Wrong Password": {"pickleLocation":"40:13","tags":["@SignIn","@UI"]},
  "Log In fails|SQL Injection": {"pickleLocation":"41:13","tags":["@SignIn","@UI"]},
  "Forget password validation": {"pickleLocation":"43:5","tags":["@SignIn","@UI"]},
  "Verify SignIn UX": {"pickleLocation":"59:5","tags":["@SignIn","@UI"]},
  "Verify SignUp link": {"pickleLocation":"63:5","tags":["@SignIn","@UI"]},
};