describe('viewports',()=>{

    it('iphone8',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport('iphone-8')
        cy.screenshot

    })
    it('imac',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport('iphone-8')
        cy.screenshot
        
    })
    it('test 1',()=>{

        
    })
})