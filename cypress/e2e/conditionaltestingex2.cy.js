describe('Example to demo conditional testing in cypress', ()=>{
    beforeEach(() =>{

      cy.visit('https://www.wikipedia.org/')
      cy.title().should('eq', 'Wikipedia')
    })

    it('Check that if you find wikidata on the page, then click on it and validate (Go to If)', () =>{

      cy.get("body").then(($body) => {

        if($body.find('[data-jsl10n="wikigfhfhgdata.name"]').length > 0){

          cy.get('[data-jsl10n="wikidata.name"]').click()
          cy.origin('https://www.wikidata.org/wiki/Wikidata:Main_Page', () => {
            cy.title().should('eq','Wikidata')

          })
        }

        else {

          cy.get('[data-jsl10n="wikibooks.name"]').click()
          cy.origin('https://www.wikibooks.org/', () => {
            cy.title().should('eq', 'Wikibooks')

          })
        }
      })
    })



  })
