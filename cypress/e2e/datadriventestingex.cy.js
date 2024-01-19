import data from '../fixtures/ademployee.json'
import login from '../pages/loginpage.po'
import dashboard from '../pages/Dashboardpage.po'
import addemployee from '../pages/addemployee.po'

const availablefixtures = [
    {
        "name": "PIM/Ramyadata",
        "context": "Ramya"
    },
    {
        "name": "PIM/Santhudata",
        "context": "Santhu"
    },
    {
        "name": "PIM/Ranjudata",
        "context": "Ranju"
    }
]

describe('verify addemployee functionality', function () {

    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {
            //Mostly used for Setup Part
            before(function () {
                cy.fixture(afixture.name).then(function (data) {
                    this.data = data;
                })
            })

                it("verify addemployee valid details", function () {


                    cy.visit(Cypress.env('clienturl'))

                    //cy.get(login.usernameinput()).type(Cypress.env('username'))

                   // cy.get(login.passwordinput()).type(Cypress.env('password'))

                   // cy.get(login.loginButton()).click()

                    login.loginwithcreds("Admin", "admin123")

                    cy.contains(dashboard.dashboardMenueItem()).should('be.visible')

                    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

                    cy.url().should("include", "web/index.php/dashboard/index")

                    cy.contains(dashboard.pimMenuItem()).click()

                    cy.contains(addemployee.addEmployeeSubMenue()).click()

                    cy.get(addemployee.firstNameInput()).type(this.data.firstname)

                    cy.get(addemployee.lastNameInput()).type(this.data.lastname)

                    cy.get(addemployee.saveBtn()).click()

                    
                    cy.contains(addemployee.successmessage()).should('be.visible')




                })


        

        })


    })
})
