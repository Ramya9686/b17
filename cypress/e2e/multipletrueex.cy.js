describe('Test Suite name', () => {

  
    it.only('Test case Title', () => {
      
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  
        //this is for all
        cy.xpath("//button[text()='ADD TO CART']").click({multiple: true})

        //this is for particular one
        //cy.xpath('//h4[text()="Beans - 1 Kg"]/../div[3]/button').click()
        
    })

})