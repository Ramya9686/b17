import dashboard from '../pages/Dashboardpage.po'
import login from '../pages/loginpage.po'

const { beforeEach } = require("mocha")

describe('Verify Login Functionality ', () => {

  beforeEach("launch url", ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  })
  
  it('Verify login with valid creds', () => {

    cy.log("launching url")
    console.log("launching url")
    cy.visit('/web/index.php/auth/login')

    cy.wait(5000)

    cy.log("entering username")
    console.log("entering username")
    cy.get(login.usernameinput()).type('Admin')

    cy.log("entering password")
    console.log("entering password")
    cy.get(login.passwordinput()).type('admin123')

    cy.get(login.loginButton()).click()

    cy.contains(dashboard.dashboardMenueItem()).should('be.visible')

    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.url().should("include","web/index.php/dashboard/index")




  })

  it('Verify login with valid username and invalid password', () => {

    

    cy.get(login.usernameinput()).type('Admin')

    cy.get(login.passwordinput()).type('admin123546576yfhg')

    cy.get(login.loginButton()).click()

    cy.contains(login.loginerrormessage()).should('be.visible')


  })

  it('Verify login with invalid username and valid password', () => {
    cy.viewport(375,667)

   

    cy.get(login.usernameinput()).type('Admingsedx')

    cy.get(login.passwordinput()).type('admin123')

    cy.get(login.loginButton()).click()

    cy.contains(login.loginerrormessage()).should('be.visible')


  })

  it('Verify login with invalid username and invalid password', () => {

    //cy.viewport(375,667)

    //cy.viewport('macbook-11')

    

    cy.get(login.usernameinput()).type('Admingsedx')

    cy.get(login.passwordinput()).type('admin123gfge5h')

    cy.get(login.loginButton()).click()

    cy.contains(login.loginerrormessage()).should('be.visible')


  })

})