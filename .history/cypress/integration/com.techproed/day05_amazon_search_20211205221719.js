describe('search',()=>{

    it('amazon search',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('nutella')
        cy.get('#nav-search-submit-button')

    })        
})