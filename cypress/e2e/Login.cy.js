/// <reference types ="Cypress" />

import { LoginPage } from "../../PageObjects/PageActions/LoginPage"

const loginPage = new LoginPage

describe('Sign In usign 3 type of Users', () => {

  it('Validate User is able to login using Growth User', () => {
 /*   Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) */
    cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
    loginPage.signinWithEmail().click()
    loginPage.enterEmail('maham+7/4.pm@vimware.com')
    loginPage.enterPassword('Qwerty12#')
    loginPage.signInButton().click()
    cy.get('.page-header > h2').should('have.text', 'Dashboard')
  })

  it ('Validate User is able to login using Essential User', () => {
    cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
    loginPage.signinWithEmail().click()
    loginPage.enterEmail('rafia+24/7.landlord@vimware.com')
    loginPage.enterPassword('Qwerty12#')
    loginPage.signInButton().click()
    cy.get('.page-header > h2').should('have.text', 'Dashboard')
  })

  it('Validate User is able to login using Free User', () => {
    cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
    loginPage.signinWithEmail().click()
    loginPage.enterEmail('maham+free.test22@vimware.com')
    loginPage.enterPassword('Qwerty12#')
    loginPage.signInButton().click()
    cy.get('.page-header > h2').should('have.text', 'Dashboard')
  })
})