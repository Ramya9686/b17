import dropdown from "../pages/dropdownpage.po"

describe('checkbox test', function () {

    it('working with check boxes', function () {

        cy.visit("https://register.rediff.com/register/register.php");

        cy.get('input[name^=chk_altemail]').check().should('be.checked');
        //cy.get('input[name^=chk_altemail]').should('be.checked');

        //cy.wait(5000)

        cy.get('input[name^=chk_altemail]').uncheck().should('not.be.checked');

        // cy.get('input[name^=chk_altemail]').should('not.be.checked');

        //Radio button example

        cy.xpath('//input[@value="f"]').check().should('be.checked');

        //cy.xpath('//input[@value="m"]').should('not.be.checked');


        //dropdown

        //3 ways we can handle

        //Text

        cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("APR").should("have.value", "04")

        //cy.xpath('//select[starts-with(@name,"DOB_Month")]').should("have.value", "04")

       // cy.wait(5000)


       cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("09").should("have.value", "09")
        //cy.wait(5000)

        cy.xpath('//select[starts-with(@name,"DOB_Month")]').select(6).should("have.value", "06")


        dropdown.selectmonth("SEP")



        //cy.selectdropdownvalue('//select[starts-with(@name,"DOB_Month")]', "OCT")





    });


});