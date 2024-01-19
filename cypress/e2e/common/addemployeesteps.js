import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import dashboard from '../../pages/Dashboardpage.po'
import addemployee from '../../pages/addemployee.po'

When(`User clicks on PIM module`, () => {

    cy.contains(dashboard.pimMenuItem()).click()
    
  })

  And(`User clicks on add employee submenu`, () => {

    cy.contains(addemployee.addEmployeeSubMenue()).click()
    
  })

  And(`User enter the firstname {string} and lastname {string}`, (firstname, lastname) => {

    cy.get(addemployee.firstNameInput()).type(firstname)
    cy.get(addemployee.lastNameInput()).type(lastname)
    
  })

  And(`User clicks on save button`, () => {

    cy.get(addemployee.saveBtn()).click()
    
  })


  And(`User should get Successfully saved message`, () => {

    cy.contains(addemployee.successmessage()).should('be.visible')
    
  })

 