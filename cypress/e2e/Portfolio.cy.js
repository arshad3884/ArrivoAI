/// <reference types ="Cypress" />

import { AddPortfolio } from "../../PageObjects/PageActions/AddPortfolio"
import { LoginPage } from "../../PageObjects/PageActions/LoginPage"

const loginPage = new LoginPage
const addPortfolio = new AddPortfolio

describe('Add Porfolios', () => {

  it('Validate User Essential user is able to add new portfolio with Single Owner with 100% Ownership ', () => {
    cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
    loginPage.signinWithEmail().click()
    loginPage.enterEmail('rafia+24/7.landlord@vimware.com')
    loginPage.enterPassword('Qwerty12#')
    loginPage.signInButton().click()
    cy.get('.page-header > h2').should('have.text', 'Dashboard')
    addPortfolio.clickPortfolioMenu()
    cy.url().should('include', '/Portfolios')
    cy.get('h2').should('have.text', 'Portfolios')
    addPortfolio.addPortfolioButton().click()
    cy.wait(3000)
    addPortfolio.validateGeneralInfo()
    // This function will create a unique name for Portfolio
      function generatePortfolioName() {
        let text = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        for (let i = 0; i < 10; i++)
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        return text;  
      }
    const generatedPortfolioName = generatePortfolioName()
    addPortfolio.addPortfolioName(generatedPortfolioName)
    addPortfolio.ownerFirstName().type('{downarrow}{enter}');
    addPortfolio.ownerLastName().clear().type('new arrivo')
    addPortfolio.ownerEmail().clear().type('rafia+24/7.landlord@vimware.com')
    addPortfolio.addOwnership(100)
    addPortfolio.validateOwnershipPreview();
    addPortfolio.save().click()
    cy.url().should('include', '/Portfolios')
    addPortfolio.validatePortfolio(generatedPortfolioName)
  })
})    