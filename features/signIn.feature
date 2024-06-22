@SignIn @UI
Feature: UI - Verify Sign In functionality

    Background:
        Given I open iris.ai homepage
        Then I expect text "Hi, I'm Iris.ai" is visible

    Scenario Outline: Fields validation
        When I click on button "Let's get started"
        And I populate the form with the following data
            | Label         | Value      | Type  |
            | Email address | <Email>    | input |
            | Password      | <Password> | input |
        Then I expect validation error "<Validation error>" is visible
        And I expect button "Sign in" to be "disabled"

        # title-format: <Scenarios>
        Examples:
            | Scenarios            | Email         | Password    | Validation error                   |
            | Email not valid      | blabla.bg     | test321     | Please enter a valid email address |
            | Email is required    | leave empty   | test123     | Email address is required          |
            | Password is required | blabla@abv.bg | leave empty | Password is required               |

    Scenario Outline: Log In fails
        When I select user option "Sign In"
        And I populate the form with the following data
            | Label         | Value      | Type  |
            | Email address | <Email>    | input |
            | Password      | <Password> | input |
        And I click on button "Sign in"
        Then I expect validation error "<Validation error>" is visible
        And I expect button "Sign in" to be "disabled"
        
        # title-format: <Scenarios>
        Examples:
            | Scenarios            | Email                                 | Password                          | Validation error                                                          |
            | User non existent    | blabla@mail.bg                        | test123456                        | Wrong email or password. Please note that both fields are case sensitive! |
            | Case sensitive check | validMailWithWrongCaseLetter@iris.com | validpass                         | Wrong email or password. Please note that both fields are case sensitive! |
            | Wrong Email          | blabla@mail.bg                        | Test123456                        | Wrong email or password. Please note that both fields are case sensitive! |
            | Wrong Password       | validMail@iris.com                    | test123456                        | Wrong email or password. Please note that both fields are case sensitive! |
            | SQL Injection        | validMail@iris.com                    | Injection:' OR '1'='1'--admin' -- | Wrong email or password. Please note that both fields are case sensitive! |

    Scenario: Forget password validation
        When I click on button "Let's get started"
        And I click on link "Forgot password?"
        Then I expect text "Enter your email and we'll fix it for you." is visible
        And I expect button "Remind me" to be "disabled"
        And I populate the form with the following data
            | Label         | Value       | Type  |
            | Email address | leave empty | input |
        Then I expect validation error "Email address is required" is visible
        And I expect button "Remind me" to be "disabled"
        When I populate the form with the following data
            | Label         | Value                      | Type  |
            | Email address | nikola.g.todorov@gmail.com | input |
        And I click on button "Remind me"
        Then I expect text "Please enter a valid email address" is visible

    Scenario: Verify SignIn UX
        When I click on button "Let's get started"
        Then I validate Sign In UX elements

    Scenario: Verify SignUp link
        When I click on button "Let's get started"
        And I click on link "Sign up"
        Then I expect text "This is a premium service. A subscription fee is required for full access." is visible