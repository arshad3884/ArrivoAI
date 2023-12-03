export class AddTenant
{
    goToTenantSection()
    {
        cy.get('.simplebar-content > .sidebar-nav > [href="/Tenants"]').should('have.text','Tenants').click() //tenant menu
        cy.wait(2000)
    }
    goToAddResidentTenant()
    {
        cy.get('#dropdown-basic.mt-0').should('have.text','Add Tenant').click() //click Add tenant
        cy.wait(1000)
        cy.get('.w-100.dropdown-item:first-child').should('have.text','Resident').click() //Click on Resident 
        cy.wait(1000)
        
    }
    setPropertyTenantInfo(pFirstName,pLastName,pTenantEmail,pTenantPhone)
    {
        cy.get('.col > .mb-3 > .css-b62m3t-container > .form-select__control').click().wait(1000).type('{downarrow}{enter}') //Select property name
        cy.get('.col-xs-2 > .mb-3 > .css-b62m3t-container > .form-select__control').click().wait(1000).type('{downarrow}{enter}') //Select Unit
        cy.get(':nth-child(2) > :nth-child(1) > .mb-3 > .form-control').should('have.attr','placeholder','Enter First Name').type(pFirstName) //Primary tenant first Name
        cy.get(':nth-child(2) > .mb-3 > .form-control').should('have.attr','placeholder','Enter Last Name').type(pLastName) //Primary tenant last Name
        cy.get(':nth-child(3) > .mb-3 > .form-control').should('have.attr','placeholder','Enter Email Address').type(pTenantEmail) //email
        cy.get(':nth-child(4) > .mb-3 > .form-control').should('have.attr','placeholder','Enter Phone Number').type(pTenantPhone) //Phone
    }
    setRentAmountDetail()
    {
        cy.get(':nth-child(2) > .row > :nth-child(1) > .mb-3 > .form-control').type(800) //Rent Amount
        cy.get(':nth-child(2) > :nth-child(1) > .form-check-input').click() //select fix lease type
        cy.get(':nth-child(3) > .mb-3 > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
            .type('12/03/2023') //Start date
        cy.get(':nth-child(4) > .mb-3 > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
            .type('12/03/2026') //End date
        cy.get(':nth-child(5) > .mb-3 > .css-b62m3t-container > .form-select__control').click().wait(1000).type('{downarrow}{enter}') //Rent Due date
    }
    setFirstRentPaymentInfo()
    {
        cy.get('.mb-4 > [style="position: relative;"] > .mb-3 > .form-control').type(800) //First Rent Payment Due
        cy.get('.mb-4 > :nth-child(2) > .mb-3 > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
            .type('12/31/2023') //First Payment DUe date
    }
    setSecurityDepositInfo()
    {
        cy.get(':nth-child(4) > .row > [style="position: relative;"] > .mb-3 > .form-control').type(15000) //Security Deposit
        cy.get(':nth-child(4) > .row > :nth-child(2) > .mb-3 > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
            .type('12/31/2023') //Deposit Due Date
    }
    setLateFeeAmountInfo()
    {
        cy.get(':nth-child(5) > .row > .col-xl-3 > .mb-3 > .form-control').type(5) //Late fee amount in %
        cy.get('.range-slider > .form-control').clear().type(7) //Grace Period
    }
    inviteToArrivo()
    {
        cy.get('.mb-3 > .form-check > .form-check-input').check() //Invite to Arrivo
    }
    savePrimaryTenantInfo()
    {
        cy.get('#prime-info-details > .pt-5 > .text-end > .btn-md').should('have.text','Save').click() //Save changes
        cy.get('[style="margin-top: 5px; margin-left: 13px;"] > :nth-child(1) > strong')
        .should('have.text','Success') //Validate Success toast
    }

}