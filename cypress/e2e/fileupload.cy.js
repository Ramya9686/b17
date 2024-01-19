///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file- Attachfile', function () {

        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')

        cy.xpath('//input[@name="upfile"]').attachFile('cypress fileupload1.txt')

        cy.xpath('//input[@type="submit"]').click()

        cy.contains("The file's contents are:").should("be.visible")

    })

    it('Cypress Test Case - Understanding upload file - Select file ', function () {

        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')

        cy.xpath('//input[@name="upfile"]').selectFile('D:/LEARNCYPRESS/cypress/fixtures/samplefile.pdf')

        cy.xpath('//input[@type="submit"]').click()

        cy.contains("The file's contents are:").should("be.visible")


    })

    //Import - Uploading file 

    it.only('Cypress Test Case - Understanding download file ', function () {
        let r = (Math.random() + 1).toString(36).substring(7);
        
        cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf", "cypress/downloads", "istqbsyllabus"+r+".pdf")
        cy.readFile("cypress/downloads/istqbsyllabus"+r+".pdf").should('exist')
      })


    it('Cypress Test Case - Understanding download file ', function () {
      
        cy.downloadFile("https://media.timeout.com/images/103161245/image.jpg","cypress/downloads", "cbd.jpg")
        cy.readFile('cypress/downloads/cbd.jpg').should('exist')
      })




})
