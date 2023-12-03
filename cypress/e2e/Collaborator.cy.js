///<reference types = "Cypress"/>
import { LoginPage } from "../../PageObjects/PageActions/LoginPage"
import { AddCollaborator } from "../../PageObjects/PageActions/AddCollaborator"
import { ReuseableCode } from "../../cypress/support/ReuseableCode"

const loginPage = new LoginPage
const addCollaborator = new AddCollaborator
const reuseableCode =  new ReuseableCode

describe('Add Collaborator', ()=> {
    it('Add new Collaborator with View only rights and enabling Invite option', ()=> {
        cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
        loginPage.signinWithEmail().click()
        loginPage.enterEmail('maham+at.2@vimware.com')
        loginPage.enterPassword('Qwerty12#')
        loginPage.signInButton().click()
        cy.get('.page-header > h2').should('have.text', 'Dashboard')
        
        //Add Collaborator
        addCollaborator.goToAddCollaborator()
        //Add Collaborator info on Modal Window 
        const firstName = reuseableCode.getRandomFirstName()
        const lastName = reuseableCode.getRandomLastName()
        const phoneNo = reuseableCode.getRandomPhoneNumber()
        const personalMsg = 'Personal Message for '+firstName
        addCollaborator.addCollaboratorInfo(firstName,lastName,firstName+lastName+'@yopmail.com',phoneNo,'viewOnly',personalMsg, true) //(firstName,lastName,email,phone,permission,pmsg,invite)
        addCollaborator.verifyCollaboratorCard(firstName) //Verify the collabortor creation
    })

    it('Add new Collaborator with View only rights and disabling Invite option', ()=> {
        cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
        loginPage.signinWithEmail().click()
        loginPage.enterEmail('maham+at.2@vimware.com')
        loginPage.enterPassword('Qwerty12#')
        loginPage.signInButton().click()
        cy.get('.page-header > h2').should('have.text', 'Dashboard')
        
        //Add Collaborator
        addCollaborator.goToAddCollaborator()
        //Add Collaborator info on Modal Window 
        const firstName = reuseableCode.getRandomFirstName()
        const lastName = reuseableCode.getRandomLastName()
        const phoneNo = reuseableCode.getRandomPhoneNumber()
        const personalMsg = 'Personal Message for '+firstName
        addCollaborator.addCollaboratorInfo(firstName,lastName,firstName+lastName+'@yopmail.com',phoneNo,'viewOnly',personalMsg, false) //(firstName,lastName,email,phone,permission,pmsg,invite)
        addCollaborator.verifyCollaboratorCard(firstName) //Verify the collabortor creation
    })
})