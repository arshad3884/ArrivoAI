export class AddProperty
{
    addBasicInfo(address, spaces)
    {
        cy.get('.simplebar-content > .sidebar-nav > [href="/Properties"]').should('contain.text','Properties').click() //Click Properties menu
        cy.get('h2').should('have.text','Properties') // Validate Properties heading
        cy.wait(3000)
        cy.get('.no-img').should('have.text','Add property').click() // Click on Add property
        cy.wait(2000)
        cy.get('[style="color: rgb(26, 94, 97);"]').should('have.text','Add property') //validate the add property page
        cy.get(':nth-child(1) > [style="position: relative;"] > .mb-3 > .css-b62m3t-container > .form-select__control')
            .should('contain.text','Default Portfolio') //Default Portfolio is already selected
        cy.get('.w-100 > :nth-child(1) > :nth-child(1) > :nth-child(2) > .mb-3 > .form-control')
            .should('have.attr', 'placeholder', 'Enter a location').type(address).wait(3000).type('{downarrow}{enter}') //enter address and select first suggesion
        cy.get(':nth-child(2) > :nth-child(1) > .mb-3 > .css-b62m3t-container > .form-select__control')
            .click().wait(1000).type('{uparrow}{enter}') //select property type: Space
        cy.get('.w-100 > :nth-child(1) > :nth-child(2) > :nth-child(2) > .mb-3 > .form-control')
            .should('have.attr','placeholder','Enter Number of Spaces').type(spaces) //add Number of spaces
        cy.get(':nth-child(3) > .mb-3 > .css-b62m3t-container > .form-select__control').click().wait(1000).type('{downarrow}{enter}') //select property status as active 
        cy.wait(2000)
        cy.get('.column-layout-2 > form > .pt-5 > .text-end > .btn-md').should('have.text','Save').click() //click save
        cy.wait(6000)
        cy.get('[style="margin-top: 5px; margin-left: 13px;"] > :nth-child(1) > strong').should('exist') //Validate success toast
    }
    addSpacesInfo(size, defaultRate)
    {
        cy.get('[data-rr-ui-event-key="units-tenants"]').should('have.text','Spaces') //Spaces Tab
        cy.wait(2000)
        cy.get(':nth-child(1) > .p-0 > .list-group > :nth-child(2) > :nth-child(2) > .unit-inputGroup > .form-control')
            .type(size) //add Size(SF)
        cy.get(':nth-child(1) > .p-0 > .list-group > :nth-child(4) > .col > :nth-child(1) > .unit-inputGroup > .form-control')
            .type(defaultRate) //Default Rate
        cy.wait(1000)
        cy.get(':nth-child(1) > .p-0 > .list-group > :nth-child(8) > :nth-child(1) > .text-capitalize > .btn-inverse')
            .click() //view space detail
        cy.wait(2000)
        cy.get('.btn-reset').click() //close space detail popup
        cy.get(':nth-child(1) > .p-0 > .list-group > :nth-child(1) > :nth-child(2) > :nth-child(1) > .unit-inputGroup > .form-control')
            .click().wait(1000).type('{enter}') //enter in Space ID field to save changes
        cy.wait(5000)
        cy.get('[style="margin-top: 5px; margin-left: 13px;"] > :nth-child(1) > strong').should('exist') //Validate success toast

    }

    addSiteManagementInfo()
    {
        cy.get('button[data-rr-ui-event-key="property-management"]').should('have.text','Site Management').click() //Click Site Management tab
        cy.wait(2000)
        cy.get('form > .card > :nth-child(1) > :nth-child(1) > .mb-3 > .form-control').type('{enter}')// to save changes
        cy.wait(5000)
        cy.get('[style="margin-top: 5px; margin-left: 13px;"] > :nth-child(1) > strong').should('exist') //Validate success toast
    }
    
    viewFinancials()
    {
        cy.get('button[data-rr-ui-event-key="finance"]').should('have.text','Financials').click() //Click o Financials Tab
        cy.wait(2000)
    }
    addValuationInfo()
    {
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .mb-3 > .form-control')
            .type(40000) //property value
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .mb-3 > .form-control')
            .type(32000) //Purchase Price
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .mb-3 > .form-control')
            .type(39000) //Assessed Value
        cy.get(':nth-child(2) > :nth-child(2) > .date-picker > .mb-3 > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
            .type('2022') //Assessed Year
        cy.get(':nth-child(1) > :nth-child(2) > .add-btn > strong').should('have.text','Add Assessments') //Validate +Add Assessments button
    }
    addPropertySaleInfo()
    {
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .row > :nth-child(1) > .mb-3 > .form-control')
            .type(45000) //Sale Value
        cy.get(':nth-child(1) > .row > :nth-child(2) > .mb-3 > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
            .type('12/01/2022') //sale date
    }
   
    addMortgageInfo()
    {
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .row > :nth-child(1) > .mb-3 > .form-control')
            .should('have.attr','placeholder','Enter Mortgage Lender Name').type('William') //Mortagage Lender Name
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .row > :nth-child(2) > .mb-3 > .form-control')
            .type('22000') //Original Loan amount
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .row > :nth-child(3) > .mb-3 > .form-control')
            .type('12000') //Current Loan Balance
        cy.get(':nth-child(4) > .mb-3 > .form-control').type('17') //Intreset Rate
        cy.get(':nth-child(5) > .mb-3 > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
            .type('10/02/2023') //Loan Origination Date
        cy.get(':nth-child(6) > .mb-3 > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
            .type('10/15/2023') //Loan Maturity Date
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .row > :nth-child(7) > .mb-3 > .form-control').type(1200) //Monthly Payment
        cy.get(':nth-child(3) > :nth-child(1) > .add-btn > strong').should('have.text','Add Another Mortgage') //Validate +Add Another Mortgage
    }
    addInsuranceInfo()
    {
        cy.get('.pt-1 > :nth-child(1) > .row > :nth-child(1) > .mb-3 > .css-b62m3t-container > .form-select__control')
            .click().wait(1000).type('{uparrow}{enter}') //Insurance Type: other
        cy.get('.pt-1 > :nth-child(1) > .row > :nth-child(2) > .mb-3 > .form-control')
            .should('have.attr','placeholder','Enter Insurance Carrier').type('Mega Insurance') //Insurance Carrier
        cy.get('.pt-1 > :nth-child(1) > .row > :nth-child(3) > .mb-3 > .form-control')
            .should('have.attr','placeholder','Enter Policy Number').type('PLC4787848') //Policy Number
        cy.get('.pt-1 > :nth-child(1) > .row > .date-picker > .mb-3 > :nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
            .type('06/01/2024') //Renewal Date
        cy.get(':nth-child(5) > .mb-3 > .css-b62m3t-container > .form-select__control')
            .click().wait(1000).type('{downarrow}{enter}') //Payment Frequency: Annual
        cy.get(':nth-child(6) > .mb-3 > .form-control')
            .should('have.attr','placeholder','Enter Insurance Premium').type(100000) //Insurance Premium
        cy.get('.pt-1 > :nth-child(1) > .row > :nth-child(7) > .mb-3 > .form-control')
            .type(1200) //Monthly payment
        cy.get('.pt-1 > .add-btn > strong').should('have.text','Add Another Insurance') //Validate +Add Another Insurance
        cy.wait(2000)
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .mb-3 > .form-control')
            .type('{enter}') //to save changes
        cy.wait(5000)
        cy.get('[style="margin-top: 5px; margin-left: 13px;"] > :nth-child(1) > strong').should('exist') //Validate success toast   
    }
    viewProForma()
    {
        cy.get('button[data-rr-ui-event-key="pro-forma"]').should('have.text','Pro Forma').click() //Click Pro Forma Tab
        cy.wait(2000)
    }
    savePropertyChanges()
    {
        cy.contains('Save').should('have.text','Save').click({force:true})
        cy.wait(6000)
        cy.get('[style="margin-top: 5px; margin-left: 13px;"] > :nth-child(1) > strong').should('exist') //Validate success toast
    }
}