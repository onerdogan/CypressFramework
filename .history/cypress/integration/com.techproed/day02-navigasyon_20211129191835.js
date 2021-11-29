describe('Navigasyon',()=>{

    it('back,forward,reflesh', ()=>{
        cy.visit('https://qa-environment.concorthotel.com/')
        cy.contains('Log in').click()
      //  cy.go('back')//onceki sayfaya git
      cy.go(-1)// onceki sayfaya git

      cy.go('forward')

    })
})