describe('search',()=>{

    it('amazon search',()=>{
       cy.amazonSearch('smart watch')
       cy.get('.a-section > .a-color-state').should('have.text',)

    })        
})