describe('Automation - working with Iframe', function () {

    it('cypress test case - Understanding Iframe and how to work with Iframes', function () {
        cy.visit('https://jqueryui.com/checkboxradio/')
        cy.get('label[for="checkbox-1"]>span').first().click()

    })

    it.only('select radio button', () => {

        cy.visit("https://jqueryui.com/checkboxradio/")
        cy.get('iframe[class="demo-frame"]').then(($iframe) => {

            let checkbox1 = $iframe.contents().find('label[for="checkbox-1"]')
            cy.wrap(checkbox1).click()


        })
    })



})