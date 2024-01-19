describe ("API Test Automation Demo", () => {

    it("verify List of users API", ()=>{

        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {

        expect(response.status).to.equal(200)

        expect(response.body).to.have.property("total_pages", 2)

        expect(response.body.data[0].email).to.equal("michael.lawson@reqres.in" )


       })



    })

    it("verify create users API", ()=>{

        const payload = {

            "name": "Ramya",
            "job": "tester1"
            
            }

        cy.request("POST", "https://reqres.in/api/users", payload).then((response) => {

        expect(response.status).to.equal(201)

        expect(response.body).to.have.property("name", "Ramya")
        expect(response.body).to.have.property("job", "tester1")


       })



    })




})