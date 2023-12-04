

export class SignupPage{

    signupTab(){
       return cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > button:nth-child(1)')
        .contains('Sign Up')
    }

    signupWithEmail(phone, password)
    {
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(4)')
            .contains('Sign Up with Email').click() //Signup with email
      cy.get('.title').should('have.text', 'Sign Up') //Validate the signup title
      // This Function will Generate a Random String
      function generateRandomString() {
        let text = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        for (let i = 0; i < 11; i++)
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        return text;  
      }
     const generatedFirstName = generateRandomString()
     cy.get(':nth-child(1) > .form-control').should('have.attr', 'placeholder', 'Enter First Name').type(generatedFirstName, { force: true }) //add first name
     const generatedLastName = generateRandomString()
     cy.get('form > :nth-child(2) > .form-control').should('have.attr', 'placeholder', 'Enter Last Name').type(generatedLastName, { force: true })//add last name
     const generatedRandomEmail = generateRandomString()
     cy.get(':nth-child(3) > .form-control').should('have.attr', 'placeholder', 'Enter Email').type(generatedRandomEmail + '@mailinator.com') //add email
     cy.get(':nth-child(4) > .form-control').should('have.attr', 'placeholder', 'Enter Phone Number').type(phone, { force: true }) //add phone
     cy.get('.input_group > .form-control').should('have.attr', 'placeholder', 'Enter your password').type(password, { force: true }) //add password
     cy.get('#formBasicCheckbox').check() //check term& conditions 
     cy.wait(5000)
     cy.get("button[type='submit'").contains('Sign Up').click({force: true }) //click signup button
     cy.wait(8000)
    }


    next(){
        cy.get('.w-100').contains('Next').click({force: true })
    }
    
    selectFreePlan()
    {
    cy.get('.tab-v3 > :nth-child(1)').click(); //free tab
    cy.get('.w-100').click() //next button
    cy.get('#formBasicEmail').type('1')  //add units you own
    cy.wait(5000)
    cy.get('.mb-4').click() // Click to focus out the cursor from input field
    cy.get('.w-100').click() //next button
    cy.wait(2000)
    cy.get('strong').should('have.text','Success') //success confirmation toast
    cy.get('.modal-content').should('exist') //instructionModal
    cy.get('.btn-close').click() //closeInstructionModal
    cy.wait(2000)
    cy.get('.page-header > h2').should('have.text', 'Dashboard')
    }
    
    selectEssentialPlan(duration)
    {
    cy.get('.tab-v3 > :nth-child(2)').click() //Click essential tab
    cy.get('.w-100').click() //next button
    cy.wait(10000)
    cy.get('.form-control').clear().type('1') // add number of units
    if (duration == 'Monthly')
        {
            cy.get(':nth-child(1) > .card-body').click()  //select monthly plan
        }else if (duration == 'Annual'){
            cy.get(':nth-child(2) > .card-body').click()  //select Annual plan
        }
    cy.get('.w-100').click() //next button
    }

    selectGrowthPlan(duration)
    {
    cy.get('.tab-v3 > :nth-child(3)').click() //Click Growth tab
    cy.get('.w-100').click() //next button
    cy.wait(10000)
    cy.get('.form-control').clear().type('1') // add number of units
    if (duration == 'Monthly')
        {
            cy.get(':nth-child(1) > .card-body').click()  //select monthly plan
        }else if (duration == 'Annual'){
            cy.get(':nth-child(2) > .card-body').click()  //select Annual plan
        }
    cy.get('.w-100').click() //next button
    }
    
    addPaymentMethod(cardNo, expiry, cvc, cardName, postalCode)
    {
    cy.get('.mb-4').should('have.text', 'Add Payment Method') //Validate the heading
    cy.get('.input_group > .form-control').should('have.attr', 'placeholder', '0000 0000 0000 0000').type(cardNo)
    cy.get(':nth-child(1) > .mb-3 > .form-control').should('have.attr', 'placeholder', 'MM/YY').type(expiry)
    cy.get(':nth-child(2) > .mb-3 > .form-control').should('have.attr', 'placeholder', 'CVC').type(cvc)
    cy.get(':nth-child(3) > .mb-3 > .form-control').should('have.attr', 'placeholder', 'Enter Name on Card').type(cardName)
    cy.get(':nth-child(4) > .mb-3 > .form-control').should('have.attr', 'placeholder', 'Enter Zip Code').type(postalCode)
    cy.get('.btn-md').contains('Start Free Trial').click({force: true }) //Click Start free Trial
    cy.wait(12000)
    cy.get('.page-header > h2').should('have.text', 'Dashboard') // validate that user is on dashbaord
    cy.get('strong').should('have.text','Success') //success confirmation toast
    }

}

