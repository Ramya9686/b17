describe('Understanding Fixtures asssignment', function () {

    before(function () {
        cy.fixture('fixtureassignmentdata').then(function (data) {
            this.data = data;
        })
    })

    it('assignment Validate addemployee register flow ', function () {
        cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('input[name="username"]').type(this.data.username)

        cy.get('input[type="password"]').type(this.data.password)

        cy.get('button[type="submit"]').click()

        cy.contains('Dashboard').should('be.visible')

        cy.contains('PIM').click()

        cy.contains('Add Employee').click()

        cy.get('input[name="firstName"]').type(this.data.firstname)

        cy.get('input[name="lastName"]').type(this.data.lastName)

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should('be.visible')








    })



})