class loginPage {


    usernameinput(){

        return 'input[name="username"]'

    }

    passwordinput(){

        return 'input[type="password"]'

    }

    loginButton(){

        return 'button[type="submit"]'

    }

    loginerrormessage(){

       return 'Invalid credentials'
    }

    loginwithcreds(username, password){

        cy.get(this.usernameinput()).type(username)
    
        cy.get(this.passwordinput()).type(password)
    
        cy.get(this.loginButton()).click()
    }
}

const login = new loginPage

export default login