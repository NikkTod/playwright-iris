/** Generated from: features\signUp.feature */
import { test } from "../../pom/base/fixtures.ts";

test.describe("UI - Verify Sign Up functionality", () => {

  test.beforeEach(async ({ Given, Then, When, And, home, commonInteractions }) => {
    await Given("I open iris.ai homepage", null, { home });
    await Then("I expect text \"Hi, I'm Iris.ai\" is visible", null, { commonInteractions });
    await When("I click on button \"Let's get started\"", null, { commonInteractions });
    await And("I click on link \"Sign up\"", null, { commonInteractions });
  });

  test.describe("Fields validation", () => {

    test("First name required", { tag: ["@SignUp", "@UI"] }, async ({ And, Then, commonInteractions }) => {
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"First name"},{"value":""},{"value":"input"}]},{"cells":[{"value":"Last name"},{"value":"Automation"},{"value":"input"}]},{"cells":[{"value":"Email address"},{"value":"automation@iris.com"},{"value":"input"}]},{"cells":[{"value":"I am a"},{"value":"student"},{"value":"dropdown"}]}]}}, { commonInteractions });
      await And("I \"check\" checkbox with text \"I accept\"", null, { commonInteractions });
      await Then("I expect validation error \"First name is required\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign up\" to be \"disabled\"", null, { commonInteractions });
    });

    test("Last name required", { tag: ["@SignUp", "@UI"] }, async ({ And, Then, commonInteractions }) => {
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"First name"},{"value":"Test"},{"value":"input"}]},{"cells":[{"value":"Last name"},{"value":""},{"value":"input"}]},{"cells":[{"value":"Email address"},{"value":"automation@iris.com"},{"value":"input"}]},{"cells":[{"value":"I am a"},{"value":"researcher"},{"value":"dropdown"}]}]}}, { commonInteractions });
      await And("I \"check\" checkbox with text \"I accept\"", null, { commonInteractions });
      await Then("I expect validation error \"Last name is required\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign up\" to be \"disabled\"", null, { commonInteractions });
    });

    test("Email required", { tag: ["@SignUp", "@UI"] }, async ({ And, Then, commonInteractions }) => {
      await And("I populate the form with the following data", {"dataTable":{"rows":[{"cells":[{"value":"Label"},{"value":"Value"},{"value":"Type"}]},{"cells":[{"value":"First name"},{"value":"Test"},{"value":"input"}]},{"cells":[{"value":"Last name"},{"value":"Automation"},{"value":"input"}]},{"cells":[{"value":"Email address"},{"value":""},{"value":"input"}]},{"cells":[{"value":"I am a"},{"value":"student"},{"value":"dropdown"}]}]}}, { commonInteractions });
      await And("I \"check\" checkbox with text \"I accept\"", null, { commonInteractions });
      await Then("I expect validation error \"Email address is required\" is visible", null, { commonInteractions });
      await And("I expect button \"Sign up\" to be \"disabled\"", null, { commonInteractions });
    });

  });

  test("Verify SignUp UX", { tag: ["@SignUp", "@UI"] }, async ({ Then, signUp }) => {
    await Then("I validate Sign Up UX elements", null, { signUp });
  });

  test("Verify SignIn link", { tag: ["@SignUp", "@UI"] }, async ({ And, Then, commonInteractions }) => {
    await And("I click on link \"Sign in\"", null, { commonInteractions });
    await Then("I expect text \"Don't have an account?Sign up\" is visible", null, { commonInteractions });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\signUp.feature"),
});

const testMetaMap = {
  "Fields validation|First name required": {"pickleLocation":"24:13","tags":["@SignUp","@UI"]},
  "Fields validation|Last name required": {"pickleLocation":"25:13","tags":["@SignUp","@UI"]},
  "Fields validation|Email required": {"pickleLocation":"26:13","tags":["@SignUp","@UI"]},
  "Verify SignUp UX": {"pickleLocation":"28:5","tags":["@SignUp","@UI"]},
  "Verify SignIn link": {"pickleLocation":"31:5","tags":["@SignUp","@UI"]},
};