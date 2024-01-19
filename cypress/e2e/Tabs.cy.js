describe('automation test case - working with Tabs in webpage', function (){

    it('test case - understanding Tabs in webpage', function(){

        Cypress.on("uncaught:exception", (err, runnable) => {
  
            return false;
          });
    

        cy.visit('https://www.cypress.io/app')
        cy.contains('Installing Cypress').invoke('removeAttr', 'target').click({force: true})
        //invoke is a method
        //using force: true because Installing Cypress is a hidden element

        cy.url().should('include', 'https://docs.cypress.io/guides/getting-started/installing-cypress')

    })

})