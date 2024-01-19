describe('Automation - Working Mouse events', function () {


    it('Cypress Test Case - Understanding Right click, Mouse over, doubleclick', function () {

        cy.visit('https://www.programsbuzz.com/')
        cy.get('.slide__description').rightclick({forece: true})
        cy.log('check the context menu')
        //context means right click only

        cy.contains('Tutorials').trigger('mouseover');
        cy.log("Hovering on Tutorials")
        cy.contains('Contact').dblclick({force:true});

    })

    it.only('Cypress Test Case - Unstand Scrlling', function () {

      
        cy.visit("https://docs.cypress.io/api/commands/dblclick")
  
        cy.wait(5000)
  
        cy.get('#Examples').scrollIntoView() 
      })
})