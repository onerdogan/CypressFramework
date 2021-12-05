describe('custom method',()=>{

    it.skip('login',()=>{
        cy.login('123murat123@gmail.com','123murat123')
        //login->commands.js de tanimlanan method, cy.login()diyrek call edebiliriz
        //
    })
    it('negative',()=>{
        cy.login('123murat12@gmail.com','123murat123')
        cy.contains('There is 1 error').should('be.visible')
        cy.url().should('include','controller=authentication')
        cy.screenshot()

        
    })
    it.skip('test 1',()=>{

        
    })
})