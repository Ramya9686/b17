Feature: Verify Add employee functionality

Automation of Positive and negative tests for add employee

# Scenario: Verify add employee with valid input details
#         Given User launch the Application
#         When User enter username "Admin" and password "admin123"
#         And User click on login button
#         Then User should be navigated to dashboard page
#         When User clicks on PIM module
#         And User clicks on add employee submenu
#         And User enter the firstname 'Santhu' and lastname 'Ramya'
#         And User clicks on save button
#         Then User should get Successfully saved message


Scenario Outline: Verify add employee with valid input details
        Given User launch the Application
        When User enter username "Admin" and password "admin123"
        And User click on login button
        Then User should be navigated to dashboard page
        When User clicks on PIM module
        And User clicks on add employee submenu
        And User enter the firstname '<firstname>' and lastname '<lastname>'
        And User clicks on save button
        Then User should get Successfully saved message

        Examples:
            | firstname | lastname | 
            | Santhu  | Ramya  | 
            | Amma  | S |
            | Appa  | B |