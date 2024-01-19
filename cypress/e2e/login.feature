Feature: Verify login functionality

    Automation login functionality - positiveand negative tests

    Background: launch url
        Given User launch the Application

    Scenario: Verify login with valid creds

        When User enter username "Admin" and password "admin123"
        And User click on login button
        Then User should be navigated to dashboard page

    Scenario: Verify login with valid username and invalid password

        When User enter username "Admin" and password "dgfhfghghhggh"
        And User click on login button
        Then User should get login error message

    Scenario: Verify login with invalid username and valid password

        When User enter username "dsdfgfhgf" and password "admin123"
        And User click on login button
        Then User should get login error message

    Scenario: Verify login with invalid username and invalid password

        When User enter username "dsdfgfhgf" and password "cvfddfds"
        And User click on login button
        Then User should get login error message

