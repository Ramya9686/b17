///<reference types="cypress"/>


describe('Automation - Write file and Read file ', function () {

    it('Cypress Test Case - Write file example', function () {


        cy.writeFile('cypress/fixtures/module1/test.txt', "Ramya\M")

    })

    it('Cypress Test Case - Append Data in end to the file ', function () {

        cy.wait(5000)
        cy.writeFile('cypress/fixtures/module1/test.txt', "Madan", { flag: 'a+' });

    })

    it('Cypress Test Case - Create Json file', function () {

        cy.wait(5000)

        cy.writeFile('cypress/fixtures/module1/test6.json', { firstname: 'Santhosh', lastname: 'R' })

    })

    it('Cypress Test Case - extracting text and saving ina file ', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').then((txt) => {

            var textvalue = txt.text()
            cy.writeFile('cypress/fixtures/module1/example.txt', textvalue);

            cy.readFile('cypress/fixtures/module1/test6.json').then((data) => {
                data.newKey = { 'extractedtext': textvalue }
                cy.writeFile('cypress/fixtures/module1/test6.json', JSON.stringify(data))
            })

        })
    })



    it('Cypress Test Case - Validation of Data both Text file and Json ', function () {

        cy.readFile("cypress/fixtures/ademployee.json").its("firstname").should("eq", "Santhu")

        cy.readFile('cypress/fixtures/ademployee.json').should('exist')


        cy.readFile('cypress/fixtures/module1/test.txt').should('contain', 'RamyaM');

        cy.readFile('cypress/fixtures/module1/test.txt').should('contain', 'RamyaM\r\nMadan')
    })

})