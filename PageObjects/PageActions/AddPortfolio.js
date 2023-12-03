
export class AddPortfolio{

    clickPortfolioMenu(){
        cy.get('.simplebar-content > .sidebar-nav > [href="/Portfolios"]').contains('Portfolios').click()
    }
    validateGeneralInfo()
    {
        cy.get('.mb-5').should('have.text', 'General info')
    }

    addPortfolioButton(){
       return cy.get('.no-img').contains('Add Portfolio')
    }

    addPortfolioName(pName){
        cy.get('.col-xl-7 > .mb-3 > .form-control').should('have.attr', 'placeholder', 'Portfolio Name').type(pName)
    }

    ownerFirstName()
    {
        return cy.get('.form-select__indicator')
    }
    ownerLastName()
    {
        return cy.get(".mb-3 input[name*='ownerData.0.last_name']")
    }
    ownerEmail()
    {
        return cy.get(".mb-3 input[name*='ownerData.0.email']")
    }
    addOwnership(value){
        cy.get('.percentInput > .mb-3 > .form-control').should('have.attr', 'placeholder', '%').type(value)
    }

    validateOwnershipPreview()
    {
        cy.get('.blank.badge.bg-primary').should('have.text', '100%')
        cy.get('.mb-3.card-title').should('exist')

    }
    save(){
        return cy.get('.text-end > .btn-md').contains('Save')
    }

    validatePortfolio(PUName){
        cy.get(':nth-child(1) > .pointer > :nth-child(1) > .card-title > .custom-tooltip > .card-portfolioname').should('have.text', PUName)
    }

}    