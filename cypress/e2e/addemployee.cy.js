import data from '../fixtures/ademployee.json'
import login from '../pages/loginpage.po'
import dashboard from '../pages/Dashboardpage.po'
import addemployee from '../pages/addemployee.po'


describe('verify addemployee functionality',() => {

it("verify addemployee valid details",()=>{


        cy.visit(Cypress.env('clienturl'))
    
        //cy.get(login.usernameinput()).type(Cypress.env('username'))
    
        //cy.get(login.passwordinput()).type(Cypress.env('password'))
    
        //cy.get(login.loginButton()).click()

        login.loginwithcreds("Admin", "admin123")
    
        cy.contains(dashboard.dashboardMenueItem()).should('be.visible')
    
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
        cy.url().should("include","web/index.php/dashboard/index")

        cy.contains(dashboard.pimMenuItem()).click()

        cy.contains(addemployee.addEmployeeSubMenue()).click()
        
        cy.addemployee('gjhdsjh', "jgjgjgd")


        cy.contains(addemployee.successmessage()).should('be.visible')




})


})



