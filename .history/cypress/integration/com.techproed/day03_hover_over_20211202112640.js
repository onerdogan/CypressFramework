describe('hover over',()=>{
    it('move over',()=>{

        cy.visit('https://amazon.com/')
        cy.get('.icp-nav-flag')
    })
})