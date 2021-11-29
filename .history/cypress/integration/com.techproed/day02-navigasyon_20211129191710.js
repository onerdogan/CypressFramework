describe('Navigasyon',()=>{

    it('back,forward,reflesh', ()=>{
        cy.visit('https://qa-environment.concorthotel.com/')
        cy.contains('Log in').click()
        cy.go('back')//

    })
})