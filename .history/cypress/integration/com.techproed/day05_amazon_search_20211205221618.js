describe('search',()=>{

    it('amazon search',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox')

    })        
})