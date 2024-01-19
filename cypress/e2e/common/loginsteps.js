import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import login from '../../pages/loginpage.po'
import dashboard from '../../pages/Dashboardpage.po'
Given('User launch the Application', () => {
    cy.visit('/')
  })

  When(`User enter username {string} and password {string}`, (username, password) => {

    cy.get(login.usernameinput()).type(username)
    cy.get(login.passwordinput()).type(password)
  })

  And(`User click on login button`, () => {

    cy.get(login.loginButton()).click()

  })

  
 Then(`User should be navigated to dashboard page`, () => {

    cy.contains(dashboard.dashboardMenueItem()).should("be.visible")

    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.url().should("include","web/index.php/dashboard/index")

  })

  Then(`User should get login error message`, () => {

    cy.contains(login.loginerrormessage()).should("be.visible")

  })











  










