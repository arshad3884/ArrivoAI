///<reference types = "Cypress"/>
import { LoginPage } from "../../PageObjects/PageActions/LoginPage"
import { AddTenant } from "../../PageObjects/PageActions/AddTenant"
import { ReuseableCode } from "../../cypress/support/ReuseableCode"

const loginPage = new LoginPage
const addTenant = new AddTenant
const reuseableCode =  new ReuseableCode

describe('Add Tenant', function(){

    it('Add a Tenant of type Resident', function()
    {
        cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
        loginPage.signinWithEmail().click()
        loginPage.enterEmail('maham+at.2@vimware.com')
        loginPage.enterPassword('Qwerty12#')
        loginPage.signInButton().click()
        cy.get('.page-header > h2').should('have.text', 'Dashboard')
        
        //Go to tenent section
        addTenant.goToTenantSection()
        // Go to Add a resident tenant
        addTenant.goToAddResidentTenant()
        //Primary Tenant Info
                //Set Property Tenant Info
                const pTenantFirstName = reuseableCode.getRandomFirstName()
                const pTenantLastName = reuseableCode.getRandomLastName()
                const pTenantEmail = pTenantFirstName+pTenantLastName+'@yopmail.com'
                const pTenantPhone = reuseableCode.getRandomPhoneNumber()
                addTenant.setPropertyTenantInfo(pTenantFirstName,pTenantLastName,pTenantEmail,pTenantPhone) //pTenantFirstName,pTenantLastName,pTenantEmail,pTenantPhone
                //Set Rent Amount Detail
        addTenant.setRentAmountDetail()
                //Set First Rent Payment info
        addTenant.setFirstRentPaymentInfo()
                //Set Security Deposit info
        addTenant.setSecurityDepositInfo()
                //Set Late Fee Amount Info    
        addTenant.setLateFeeAmountInfo()
                //enable Invite to Arrivo
        addTenant.inviteToArrivo()
                //save Primary Tenant Info
        addTenant.savePrimaryTenantInfo()
        cy.wait(5000)
        addTenant.goToTenantSection() //Click on Tenant menu
        cy.get('.owner-card').should('exist') //Validate the Tenant creation
    })
})