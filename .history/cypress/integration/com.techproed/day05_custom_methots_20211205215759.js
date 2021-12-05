describe('custom method',()=>{

    it('login',()=>{
        cy.login('123murat123@gmail.com','123murat123')
        //login->commands.js de tanimlanan method, cy.login()diyrek call edebiliriz
        //
    })
    it('negative',()=>{
        cy.login('123murat123@gmail.com','123murat123')


        
    })
    it.skip('test 1',()=>{

        
    })
})