describe('Example to demo conditional testing in cypress', () => {
    beforeEach(() => {
        cy.visit('https://wikipedia.org')
        cy.title().should('eq', 'Wikipedia')
    })

    it.only('Check that if you find WikiVoyage on the page, then click on it and validate (Go to If)', () => {
     

        // cy.get("locator").should("exist")

         cy.wait(3000)

         cy.get('body').then(($body) => {
            if ($body.find('[data-jsl10n="wikivoyage.name"]').length > 0) {
          
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
                cy.wait(3000)
                cy.origin('https://www.wikivoyage.org', () => {
                    cy.title().should('eq', 'Wikivoyage')
               })
            
            }
            else {
                cy.get('[data-jsl10n="wiktionary.name"]').click()
                cy.wait(3000)
                cy.origin('https://www.wiktionary.org', () => {
                    cy.title().should('eq', 'Wiktionary')
               })
                
            }
        })    

    })
})