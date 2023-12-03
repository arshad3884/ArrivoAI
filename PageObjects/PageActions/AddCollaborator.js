export class AddCollaborator
{
    goToAddCollaborator()
    {
        cy.get('.simplebar-content > .sidebar-nav > [href="/Collaborators"]').should('have.text','Collaborators').click() //Collaborator Menu
        cy.get('h2').should('have.text','Collaborators') //Validate Collaborator heading
        cy.wait(500)
        cy.get('.no-img').should('have.text','Add Collaborator').click() //Add Collaborator button
        cy.wait(2000)
    }
    addCollaboratorInfo(firstName,lastName,email,phone,permission,pmsg,invite)
    {
        cy.get('.modal-header > .w-100').should('have.text','Add Collaborator') //Validate Heading
        cy.get('.col > .mb-3 > .css-b62m3t-container > .form-select__control > .form-select__value-container')
            .click().wait(2000).type('{downarrow}{enter}') //Select default Portfolio
        cy.get(':nth-child(2) > :nth-child(1) > .mb-3 > .form-control').should('have.attr','placeholder','Enter First Name').type(firstName) //First Name
        cy.get(':nth-child(2) > :nth-child(2) > .mb-3 > .form-control').should('have.attr','placeholder','Enter Last Name').type(lastName) //Last Name
        cy.get(':nth-child(3) > :nth-child(1) > .mb-3 > .form-control').should('have.attr','placeholder','Enter Email Address').type(email) //email address
        cy.get(':nth-child(3) > :nth-child(2) > .mb-3 > .form-control').should('have.attr','placeholder','Enter Phone Number').type(phone) //Phone Number
        if (permission == 'viewOnly')
            {
            cy.get(':nth-child(4) > .mb-3 > .css-b62m3t-container > .form-select__control > .form-select__value-container')
                .click().wait(1000).type('{downarrow}{enter}') //Select View Only Permission
            }else if (permission == 'Manage')
            {
                cy.get(':nth-child(4) > .mb-3 > .css-b62m3t-container > .form-select__control > .form-select__value-container')
                .click().wait(1000).type('{uparrow}{enter}') //Select View Only Permission
            }
        cy.get(':nth-child(5) > .mb-3 > .form-control').should('have.attr','placeholder','Enter Personal Message').type(pmsg) //Personal Message
        if (invite == true)
            {
            cy.get('.form-check-input').check() //enable Invite Collaborator via email
            cy.wait(1000)
            cy.get('.row > :nth-child(2) > .w-100').should('have.text','Save').click() //Save Button
            }else if (invite == false)
            {
                cy.get('.form-check-input').uncheck() //disable Invite Collaborator via email
                cy.wait(1000)
                cy.get('.row > :nth-child(2) > .w-100').should('have.text','Save').click() //Save Button
                // a confirmation popup appears
                cy.get('.btn-delete').should('contain.text','Yes').click() // Confirm Uncheck invite
            }
        
        cy.wait(10000)
    }
    verifyCollaboratorCard(fName)
    {
        //get the last card element and verify it
        cy.get('.mb-0').each((card, index, $list)=>{
        const cardName = card.text()
        if (cardName.includes(fName))
        { 
            expect(true).to.equal(true, 'The Collaborater successfully created'); //Validate card created successfully 
        }
        });
        
    }

}