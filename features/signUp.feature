@SignUp @UI
Feature: UI - Verify Sign Up functionality

    Background:
        Given I open iris.ai homepage
        Then I expect text "Hi, I'm Iris.ai" is visible
        When I click on button "Let's get started"
        And I click on link "Sign up"

    Scenario Outline: Fields validation
        And I populate the form with the following data
            | Label         | Value           | Type     |
            | First name    | <First name>    | input    |
            | Last name     | <Last name>     | input    |
            | Email address | <Email address> | input    |
            | I am a        | <User>          | dropdown |
        And I "check" checkbox with text "I accept"
        Then I expect validation error "<Validation error>" is visible
        And I expect button "Sign up" to be "disabled"

        # title-format: <Scenarios>
        Examples:
            | Scenarios           | First name | Last name  | Email address       | User       | Validation error          |
            | First name required |            | Automation | automation@iris.com | student    | First name is required    |
            | Last name required  | Test       |            | automation@iris.com | researcher | Last name is required     |
            | Email required      | Test       | Automation |                     | student    | Email address is required |

    Scenario: Verify SignUp UX
        Then I validate Sign Up UX elements

    Scenario: Verify SignIn link
        And I click on link "Sign in"
        Then I expect text "Don't have an account?Sign up" is visible