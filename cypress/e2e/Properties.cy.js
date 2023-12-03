///<reference types='Cypress'/>

import { LoginPage } from "../../PageObjects/PageActions/LoginPage"
import { AddProperty } from "../../PageObjects/PageActions/AddProperty"

const loginPage = new LoginPage
const addProperty = new AddProperty

describe('Add property', ()=> {
    
    it('Add new property of type : Spaces', ()=> {
        //cy.viewport(1920,1080)
        cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
        loginPage.signinWithEmail().click()
        loginPage.enterEmail('maham+at.2@vimware.com')
        loginPage.enterPassword('Qwerty12#')
        loginPage.signInButton().click()
        cy.get('.page-header > h2').should('have.text', 'Dashboard')
        
    //Add new Property
        //Add Basic information
        addProperty.addBasicInfo('White',2) //passing address initials, and number of spaces
        //Spaces
        addProperty.addSpacesInfo(1200,800) //passing size, defaultRate
        //Site Management
        addProperty.addSiteManagementInfo()
        //Financials
        addProperty.viewFinancials() 
            //Valuation
        addProperty.addValuationInfo()
            //Property sale
        addProperty.addPropertySaleInfo()
            //Mortgages
        addProperty.addMortgageInfo() 
            //Insurance
        addProperty.addInsuranceInfo()
        //Pro Forma
        addProperty.viewProForma()
        addProperty.savePropertyChanges()
        cy.url().should('include', '/PropertyDetails') //validate that user is on the propertydetail page
    
    })

})