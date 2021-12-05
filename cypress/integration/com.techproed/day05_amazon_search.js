describe('search',()=>{

    it('amazon search',()=>{
       cy.amazonSearch('watch')
        //cy.get('.a-section > .a-color-state').should('have.text','watch')
       // cy.get('.a-section > .a-color-state').should('include.text','watch')
       cy.url().should('include','watch')

    })        
})