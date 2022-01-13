describe('viewports',()=>{

    it('iphone8',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport('iphone-8')
        cy.wait(3000)
       //./node_modules/.bin/cypress run cy.screenshot()

    })
    it('imac',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport('macbook-16')
     
        
    })
    it('custom',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport(2500,1500)
       
        
    })
})