const { beforeEach } = require("mocha")

describe('template suite', () => {


    afterEach("after each block",()=>{

        cy.log("after each test case")
    })

    after("after block",()=>{

        cy.log("after all test case")
  
      })

      beforeEach("before each block",()=>{

        cy.log("before each test case")
  
      })

    before("before block",()=>{

      cy.log("before all test case")

    })
    it('test case1', () => {
      
        cy.log("This is the first testcase body")


    })

    it('test case2', () => {
      

        cy.log("This is the 2nd testcase body")

    })

    it('test case3', () => {
      

        cy.log("This is the 3rd testcase body")

    })
    
    it('test case4', () => {
      

        cy.log("This is the 4th testcase body")

    })


  })
  