describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input[name="username"]').type('tomsmith') 

    cy.get('input[type="password"]').type('SuperSecretPassword!')

    cy.get('button[type="submit"]').click()

    cy.contains('You logged into a secure area!').should('be.visible')

  })
})

