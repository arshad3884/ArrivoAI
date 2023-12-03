/// <reference types ="Cypress" />

import { SignupPage } from "../../PageObjects/PageActions/SignupPage";


const signupPage = new SignupPage

describe('User want to register a new Account', () => {

    it('Validate Free user Signup using valid Email', () => {
   
      cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
      signupPage.signupTab().click()
      signupPage.signupWithEmail('+15166184624', 'Qwerty12#'); //here the first, last names and emails are generated randomly

      // User will move to Select Free Plan
      signupPage.selectFreePlan()
      cy.url().should('include', '/Dashboard')
    
    })

    it('Validate Essential user Signup using a valid Email', () => {
   
      cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
      signupPage.signupTab().click()
      signupPage.signupWithEmail('+15166184624', 'Qwerty12#'); //here the first, last names and emails are generated randomly

      // User will move to Essential Plan
      signupPage.selectEssentialPlan('Annual') //select "Monthly" or "Annual"

      // Now user will move to Add Payment Method page
      signupPage.addPaymentMethod('4242424242424242', '0826', '458', 'John Doe', '54000')
      cy.url().should('include', '/Dashboard') 
    })

    it('Validate Growth user Signup using a valid Email', () => {
   
      cy.visit('/',  { timeout: 1000000 }, {failOnStatusCode: false})
      signupPage.signupTab().click()
      signupPage.signupWithEmail('+15166184624', 'Qwerty12#'); //here the first, last names and emails are generated randomly

      // User will move to Growth Plan
      signupPage.selectGrowthPlan('Annual') //select "Monthly" or "Annual"

      // Now user will move to Add Payment Method page
      signupPage.addPaymentMethod('4242424242424242', '0826', '458', 'John Doe', '54000')
      cy.url().should('include', '/Dashboard')
    })
})