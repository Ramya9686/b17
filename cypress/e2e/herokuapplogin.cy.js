import data from '../fixtures/herokuapplogin.json'

describe('Verify Login Functionality', () => {

  it('Verify login with valid creds', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input[name="username"]').type(data.username) 

    cy.get('input[type="password"]').type(data.password)

    cy.get('button[type="submit"]').click()

    cy.contains('You logged into a secure area!').should('be.visible')

  })

  it('Verify login with valid username and invalid password', () =>{

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input[name="username"]').type('tomsmith')

    cy.get('input[type="password"]').type('Super235468ghgv')

    cy.get('button[type="submit"]').click()

    cy.contains('Your password is invalid!').should('be.visible')

  })

  it('Verify login with invalid username and valid password', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input[name="username"]').type('rsfdhfgcbcvbv')

    cy.get('input[type="password"]').type('SuperSecretPassword!')

    cy.get('button[type="submit"]').click()

    cy.contains('Your username is invalid!').should('be.visible')

  })

  it('Verify login with invalid username and invalid password', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input[name="username"]').type('rsfdhfgcbcvbv')

    cy.get('input[type="password"]').type('SuperSecret125677')

    cy.get('button[type="submit"]').click()

    cy.contains('Your username is invalid!').should('be.visible')


  })

})