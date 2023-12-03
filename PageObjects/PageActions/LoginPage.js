
export class LoginPage{

    signinWithEmail(){
    return cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(4)')
        .contains('Sign In with Email')
    }

    enterEmail(emailid){
        cy.get('#email').should('have.attr', 'placeholder', 'Enter Email').type(emailid)
    }

    enterPassword(pass){
        cy.get('#password').should('have.attr', 'placeholder', 'Enter Password').type(pass, { force: true })
    }

    signInButton(){
        return cy.get('#signin').should('have.text', 'Sign In')
    }
        
}