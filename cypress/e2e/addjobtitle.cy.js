import login from '../pages/loginpage.po'
import dashboard from '../pages/Dashboardpage.po'
import addjobtitledata from '../fixtures/admin/addjobtitle.json'
describe('Add job title functionality', () => {
  it('Verify adding job title using valid input', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(login.usernameinput()).type('Admin')

    cy.get(login.passwordinput()).type('admin123')

    cy.get(login.loginButton()).click()

    cy.contains(dashboard.dashboardMenueItem()).should('be.visible')

    cy.contains('Admin').click()

    cy.contains('Job').click()

    cy.contains('Job Titles').click()

    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(addjobtitledata.jobtitle)


    cy.get('textarea[placeholder="Type description here"]').type(addjobtitledata.jobdescription)

    cy.get('button[type="submit"]').click()

    cy.contains("Successfully Saved").should('be.visible')

  })

  })